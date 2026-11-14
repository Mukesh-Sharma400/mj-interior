import { useId, useRef, useState } from "react";
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";
import { Toast, useToast } from "@/app/components/Toast";

// Configured via environment variables (see .env.example)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Accepts Indian mobile numbers with optional +91 / 91 / 0 prefix and
// spaces, dashes or brackets, e.g. "+91 80977 75115", "08097775115".
// Returns the normalised 10-digit number, or null if invalid.
const normalisePhone = (value) => {
  let digits = value.replace(/[\s\-().]/g, "");
  if (!/^\+?\d+$/.test(digits)) return null;
  digits = digits.replace(/^\+/, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0"))
    digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
};

// Contact form used by the /contact-us page and the "Contact Now" popup.
// `compact` uses the tighter spacing of the popup.
export const ContactForm = ({ compact = false, className, ...rest }) => {
  const form = useRef();
  const id = useId(); // unique label/input ids if more than one form is on a page
  const [isSending, setIsSending] = useState(false);
  const [toast, showToast] = useToast();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (isSending) return;

    const formEl = form.current;
    if (!formEl.reportValidity()) {
      showToast("Please fill out all required fields correctly");
      return;
    }

    const nameInput = formEl.elements.from_name;
    const emailInput = formEl.elements.from_email;
    const phoneInput = formEl.elements.phone_number;
    const messageInput = formEl.elements.message;

    // Short names like "Raj" or "Om" are valid; just require a letter
    const name = nameInput.value.trim();
    if (name.length < 2 || !/\p{L}/u.test(name)) {
      showToast("Please enter your name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast("Please enter a valid email address");
      return;
    }

    const phone = normalisePhone(phoneInput.value);
    if (!phone) {
      showToast("Please enter a valid 10-digit mobile number");
      return;
    }

    if (messageInput.value.trim().length < 10) {
      showToast("Please tell us a little more (at least 10 characters)");
      return;
    }

    // Send cleaned-up values
    nameInput.value = name;
    emailInput.value = emailInput.value.trim();
    phoneInput.value = phone;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
      );
      showToast("Oops something went wrong, please try again");
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formEl,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          showToast("Message sent, Thank you for contacting!");
          formEl.reset();
        },
        () => {
          showToast("Oops something went wrong, please try again");
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <Toast toast={toast} />
      <Form
        ref={form}
        onSubmit={handleSendMessage}
        $compact={compact}
        className={className}
        {...rest}
      >
        <FieldContainer>
          <Label htmlFor={`${id}-from_name`}>Your Full Name</Label>
          <TextBox
            id={`${id}-from_name`}
            name="from_name"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
        </FieldContainer>
        <EmailPhoneWrapper $compact={compact}>
          <FieldContainer>
            <Label htmlFor={`${id}-from_email`}>Your Email</Label>
            <TextBox
              id={`${id}-from_email`}
              name="from_email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="john.doe@gmail.com"
              required
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor={`${id}-phone_number`}>Your Phone Number</Label>
            <TextBox
              id={`${id}-phone_number`}
              name="phone_number"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="98765 43210"
              required
            />
          </FieldContainer>
        </EmailPhoneWrapper>
        <FieldContainer>
          <Label htmlFor={`${id}-message`}>Your Message</Label>
          <TextArea
            id={`${id}-message`}
            name="message"
            placeholder="Type your message here..."
            required
          />
        </FieldContainer>
        <Button type="submit" disabled={isSending} aria-busy={isSending}>
          <span className="transition"></span>
          <span className="label">
            {isSending ? "Sending..." : "Send Message"}
          </span>
        </Button>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$compact ? "1rem" : "2rem")};
  transition: all 0.5s ease-in-out;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.5s ease-in-out;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const fieldStyles = css`
  width: 100%;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder} !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.inputBorderFocus} !important;
  }
`;

const TextBox = styled.input`
  ${fieldStyles}
  height: 50px;
  padding: 0 1rem;
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  min-height: 150px;
  padding: 0.5rem 1rem;
`;

const EmailPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: ${(props) => (props.$compact ? "426px" : "600px")}) {
    flex-direction: column;
    gap: ${(props) => (props.$compact ? "1rem" : "2rem")};
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  min-height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .label {
    position: relative;
    top: -1px;
  }

  &:hover:not(:disabled) .transition {
    width: 14em;
    height: 14em;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 1024px) {
    width: 170px;
    font-size: 18px;
  }
  @media (max-width: 376px) {
    width: 150px;
    height: 45px;
    min-height: 45px;
    font-size: 16px;
  }
  @media (max-width: 321px) {
    width: 130px;
    height: 40px;
    min-height: 40px;
    font-size: 14px;
  }
`;

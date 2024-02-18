import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toast } from "@/app/components/Toast";

export const ContactNowPopup = ({ handleClose }) => {
  const form = useRef();
  const timeoutRef = useRef(null);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const isValid = form.current.reportValidity();
    if (isValid) {
      const nameInput = form.current.elements.from_name;
      const emailInput = form.current.elements.from_email;
      const phoneInput = form.current.elements.phone_number;
      const messageInput = form.current.elements.message;
      if (nameInput.value.length <= 5) {
        showToastMethod("Please enter your full name");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showToastMethod("Please enter a valid email address");
        return;
      }
      if (phoneInput.value.trim().length != 10) {
        showToastMethod("Please enter a valid phone number");
        return;
      }
      if (messageInput.value.trim().length <= 20) {
        showToastMethod("Message should be more than 20 characters");
        return;
      }
      emailjs
        .sendForm(
          "service_e4fjwoz",
          "template_larht2h",
          form.current,
          "a185DCLwfO5fjx4m0"
        )
        .then(
          (result) => {
            showToastMethod("Message sent, Thank you for contacting!");
            e.target.reset();
          },
          (error) => {
            showToastMethod("Oops something went wrong");
          }
        );
    } else {
      showToastMethod("Please fill out all required fields correctly");
    }
  };

  return (
    <PopupOverlay>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} color={"black"} />
      </ToastWrapper>
      <PopupContainer>
        <CloseBtn onClick={handleClose}>
          <i class="bi bi-x-circle-fill"></i>
        </CloseBtn>
        <ContactForm ref={form} onSubmit={handleSendMessage}>
          <FieldContainer>
            <Label>Your Full Name</Label>
            <TextBox placeholder="John Doe" name="from_name" required />
          </FieldContainer>
          <EmailPhoneWrapper>
            <FieldContainer>
              <Label>Your Email</Label>
              <TextBox
                placeholder="john.doe@example.com"
                name="from_email"
                required
              />
            </FieldContainer>
            <FieldContainer>
              <Label>Your Phone Number</Label>
              <TextBox
                placeholder="(+91) 555-555-5555"
                name="phone_number"
                required
              />
            </FieldContainer>
          </EmailPhoneWrapper>
          <FieldContainer>
            <Label>Your Message</Label>
            <TextArea
              placeholder="Type your message here..."
              name="message"
              required
            />
          </FieldContainer>
          <Button type="submit">
            <span className="transition"></span>
            <span className="label">Send Message</span>
          </Button>
        </ContactForm>
      </PopupContainer>
    </PopupOverlay>
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 16;
  cursor: default;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  transition: all 0.5s ease-in-out;
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: calc(1440px - 10%);
  max-height: 90%;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 4px 15px rgba(225, 225, 225, 0.5);
  background-color: white;
  transition: all 0.5s ease-in-out;
`;

const CloseBtn = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  position: relative;
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

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const EmailPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  min-height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #ab81e8;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #23c3c4;
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

  &:hover .transition {
    width: 14em;
    height: 14em;
  }

  @media (max-width: 1024px) {
    width: 170px;
    height: 50px;
    font-size: 18px;
  }
  @media (max-width: 376px) {
    width: 150px;
    height: 45px;
    font-size: 16px;
  }
  @media (max-width: 321px) {
    width: 130px;
    height: 40px;
    font-size: 14px;
  }
`;

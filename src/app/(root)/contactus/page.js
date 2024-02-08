"use client";

import Image from "next/image";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toast } from "@/app/components/Toast";
import BaseLayout from "@/app/components/BaseLayout";
import aboutus from "../../../../public/assets/aboutus-section.jpg";

export default function ContactUs() {
  const form = useRef();
  const timeoutRef = useRef(null);
  const phoneNumber = "+918097775115";
  const emailAddress = "mjinterior@gmail.com";
  const officeAddress =
    "Mj Interior, Plot No. 65, Ground Floor, Sector-5, Opp. Tilak International Collage. Near Rly. Station, Ghansoli, Navi Mumbai-400 701";
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

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handleOpenMailer = () => {
    const mailUrl = `mailto:${emailAddress}`;
    window.location.href = mailUrl;
  };

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      officeAddress
    )}`;
    window.open(mapUrl, "_blank");
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
    <BaseLayout>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} color={"black"} />
      </ToastWrapper>
      <MainSection>
        <Header>
          <Heading>Contact Us</Heading>
          <Description>
            For personalized interior design solutions, contact our expert team.
            We transform spaces to reflect your style. Schedule a consultation
            to bring your vision to life.
          </Description>
        </Header>
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
      </MainSection>
      <SmallHeader>
        <SmallHeading>Come Visit Us</SmallHeading>
        <Heading>Welcome to our office</Heading>
      </SmallHeader>
      <VisitUsWrapper>
        <LeftSide>
          <AboutUsImage src={aboutus} alt="About Us" />
        </LeftSide>
        <RightSide>
          <LightHeading>Head Office</LightHeading>
          <Description>
            Step into our main office and embark on a journey of personalized
            interior design solutions! Come visit us and let's reimagine your
            surroundings together!
          </Description>
          <PhoneEmailLocationWrapper>
            <PhoneEmailLocationContainer onClick={handleOpenDialer}>
              <IconWrapper>
                <i class="bi bi-telephone-fill"></i>
              </IconWrapper>
              <IconText>(+91) 809-777-5115</IconText>
            </PhoneEmailLocationContainer>
            <PhoneEmailLocationContainer onClick={handleOpenMailer}>
              <IconWrapper>
                <i class="bi bi-envelope-fill"></i>
              </IconWrapper>
              <IconText>mjinterior@gmail.com</IconText>
            </PhoneEmailLocationContainer>
            <PhoneEmailLocationContainer onClick={handleOpenMap}>
              <IconWrapper>
                <i class="bi bi-geo-alt-fill"></i>
              </IconWrapper>
              <IconText>
                Mj Interior, Plot No. 65, Ground Floor, Sector-5, Opp. Tilak
                International Collage. Near Rly. Station, Ghansoli, Navi
                Mumbai-400 701
              </IconText>
            </PhoneEmailLocationContainer>
          </PhoneEmailLocationWrapper>
        </RightSide>
      </VisitUsWrapper>
    </BaseLayout>
  );
}

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 150px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const SmallHeader = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
  text-align: center;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const Heading = styled.h1`
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const SmallHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const LightHeading = styled.h1`
  color: black;
  font-weight: 400;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const MainSection = styled.div`
  background-image: repeating-linear-gradient(
    to right,
    rgba(128, 128, 128, 0.1),
    rgba(128, 128, 128, 0.1) 0.5px,
    transparent 0.5px,
    transparent
  );
  background-size: 200px 200px;
  background-color: white;
`;

const ContactForm = styled.form`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 4rem;
    max-width: 700px;
  }
  @media (max-width: 426px) {
    padding: 2rem;
    max-width: 90%;
  }
  @media (max-width: 376px) {
    padding: 1.5rem;
  }
  @media (max-width: 321px) {
    padding: 1rem;
  }
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
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

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

const VisitUsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 376px) {
    padding: 40px;
    gap: 30px;
  }
  @media (max-width: 321px) {
    padding: 30px;
    gap: 25px;
  }
`;

const PhoneEmailLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color: #ab81e8;
  transition: all 0.5s ease-in-out;
`;

const IconText = styled.p`
  margin: 0;
  font-size: 18px;
  color: black;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;
`;

const PhoneEmailLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    ${IconWrapper} {
      color: #23c3c4;
    }

    ${IconText} {
      color: #23c3c4;
    }
  }
`;

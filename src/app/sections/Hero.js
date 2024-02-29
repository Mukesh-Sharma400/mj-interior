import Image from "next/image";
import copy from "clipboard-copy";
import styled from "styled-components";
import { useRef, useState } from "react";
import { Toast } from "../components/Toast";
import backgroundImage from "../../../public/assets/hero-background.jpg";

export const Hero = () => {
  const timeoutRef = useRef(null);
  const phoneNumber = "+918097775115";
  const emailAddress = "mjinteriors2007@gmail.com";
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

  const handleCopyEmail = () => {
    const emailToCopy = `${emailAddress}`;
    copy(emailToCopy);
    showToastMethod("Email copied to clipboard");
  };

  const sectionData = {
    heading: "Transforming Dreams into Real Paradise",
    description:
      "From Imagination to Blueprint: Where Your Vision Takes Shape. Welcome to MJ Interior, where we bring dreams to life with sophisticated style and meticulous design.",
  };

  return (
    <DisplayWrapper>
      <ToastWrapper showToast={toast.visible}>
        <Toast message={toast.message} color={"white"} />
      </ToastWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
        <Overlay />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
        <ButtonsWrapper>
          <PrimaryButton onClick={handleOpenDialer}>
            <span className="transition"></span>
            <span className="label">
              <i class="bi bi-telephone-fill"></i> Call Us
            </span>
          </PrimaryButton>
          <SecondaryButton onClick={handleCopyEmail}>
            <span className="transition"></span>
            <span className="label">
              <i class="bi bi-copy"></i> Copy Email
            </span>
          </SecondaryButton>
        </ButtonsWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.showToast ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  max-width: 870px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 670px;
    left: 5%;
  }
  @media (max-width: 768px) {
    max-width: 600px;
  }
  @media (max-width: 426px) {
    max-width: 90%;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 426px) {
    font-size: 33px;
  }
  @media (max-width: 376px) {
    font-size: 30px;
  }
  @media (max-width: 321px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 426px) {
    font-size: 12px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: #23c3c4;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #ab81e8;
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
    height: 35px;
    font-size: 18px;
  }
  @media (max-width: 426px) {
    width: 130px;
    height: 30px;
    font-size: 15px;
  }
`;

const SecondaryButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: 2px solid #23c3c4 !important;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #ab81e8;
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

  &:hover {
    border: 2px solid #ab81e8 !important;
  }

  &:hover .transition {
    width: 14em;
    height: 14em;
  }

  @media (max-width: 1024px) {
    width: 170px;
    height: 35px;
    font-size: 18px;
  }
  @media (max-width: 426px) {
    width: 130px;
    height: 30px;
    font-size: 15px;
  }
`;

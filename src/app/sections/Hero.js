import Link from "next/link";
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

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: `https://wa.me/${phoneNumber}`,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/_mjinteriors",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/profile.php?id=61556937652865&sfnsn=wiwspwa&mibextid=RUbZ1f",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/@_mjinteriors",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
  ];

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
        <InnerContentWrapper data-aos="fade-right">
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
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.tooltip}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.ariaLabel}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </InnerContentWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 850px;
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
  max-height: 850px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
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
  max-width: 950px;
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
    max-width: 90%;
    left: 5%;
  }
`;

const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  font-size: 45px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    font-size: 40px;
  }
  @media (max-width: 490px) {
    font-size: 35px;
  }
  @media (max-width: 430px) {
    font-size: 30px;
  }
  @media (max-width: 366px) {
    font-size: 28px;
  }
  @media (max-width: 342px) {
    font-size: 26px;
  }
  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 18px;
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
  transition: all 0.5s ease-in-out;
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

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: white;
  background: rgba(225, 225, 225, 0.3);
  box-shadow: 0 4px 15px rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #23c3c4;
  }
`;

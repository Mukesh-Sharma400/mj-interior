"use client";

import Link from "next/link";
import Image from "next/image";
import copy from "clipboard-copy";
import styled from "styled-components";
import { Toast, useToast } from "@/app/components/Toast";
import { business, socialLinks } from "@/app/data/site";
import heroBackground from "#/hero-background.webp";

export const Hero = () => {
  const [toast, showToast] = useToast();

  const handleCopyEmail = () => {
    copy(business.email).then(
      () => showToast("Email copied to clipboard"),
      () => showToast(`Email: ${business.email}`),
    );
  };

  const sectionData = {
    heading: "Transforming Dreams into Real Paradise",
    description:
      "From Imagination to Blueprint: Where Your Vision Takes Shape. Welcome to MJ Interior, where we bring dreams to life with sophisticated style and meticulous design.",
  };

  return (
    <DisplayWrapper>
      <Toast toast={toast} light />
      <BackgroundImageWrapper>
        <BackgroundImage
          src={heroBackground}
          alt=""
          priority
          sizes="100vw"
          placeholder="blur"
        />
        <Overlay />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <InnerContentWrapper data-aos="fade-right">
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
          <ButtonsWrapper>
            {/* A real tel: link, so it works without JavaScript and can be
                long-pressed / copied on mobile */}
            <PrimaryButton href={`tel:${business.phone}`}>
              <span className="transition"></span>
              <span className="label">
                <i className="bi bi-telephone-fill"></i> Call Us
              </span>
            </PrimaryButton>
            <SecondaryButton type="button" onClick={handleCopyEmail}>
              <span className="transition"></span>
              <span className="label">
                <i className="bi bi-copy"></i> Copy Email
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
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-title={link.label}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.label}
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
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
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
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
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

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 40px;
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
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary} !important;
  border-radius: 40px;
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

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary} !important;
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
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.glass};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

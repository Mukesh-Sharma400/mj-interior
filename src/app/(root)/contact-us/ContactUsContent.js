"use client";

import Image from "next/image";
import styled from "styled-components";
import { linedBackground } from "@/app/colors";
import { business, mapsUrl } from "@/app/data/site";
import { BaseLayout } from "@/app/components/BaseLayout";
import { ContactForm } from "@/app/components/ContactForm";
import aboutUsImage from "#/about-us.webp";

// Phone, email and address, as real links so they work without JavaScript
const contactLinks = [
  {
    icon: "bi bi-telephone-fill",
    href: `tel:${business.phone}`,
    text: business.phoneDisplay,
  },
  {
    icon: "bi bi-envelope-fill",
    href: `mailto:${business.email}`,
    text: business.email,
  },
  {
    icon: "bi bi-geo-alt-fill",
    href: mapsUrl,
    text: business.address,
    external: true,
  },
];

export function ContactUsContent() {
  const pageHeader = {
    heading: "Contact Us",
    description:
      "For personalized interior design solutions, contact our expert team. We transform spaces to reflect your style. Schedule a consultation to bring your vision to life.",
  };

  const officeSectionHeader = {
    heading: "Come Visit Us",
    description: "Welcome to our office",
  };

  const officeSectionData = {
    heading: "Head Office",
    description:
      "Step into our main office and embark on a journey of personalized interior design solutions! Come visit us and let's reimagine your surroundings together!",
  };

  return (
    <BaseLayout>
      <MainSection>
        <Header data-aos="fade-up">
          <Heading>{pageHeader.heading}</Heading>
          <Description>{pageHeader.description}</Description>
        </Header>
        <ContactCard data-aos="fade-up" />
      </MainSection>
      <SmallHeader data-aos="fade-up">
        <SmallHeading>{officeSectionHeader.heading}</SmallHeading>
        <Heading as="h2">{officeSectionHeader.description}</Heading>
      </SmallHeader>
      <VisitUsWrapper>
        <LeftSide>
          <AboutUsImage
            src={aboutUsImage}
            alt="Interior designed by MJ Interior"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </LeftSide>
        <RightSide data-aos="fade-right">
          <LightHeading as="h3">{officeSectionData.heading}</LightHeading>
          <Description>{officeSectionData.description}</Description>
          <PhoneEmailLocationWrapper>
            {contactLinks.map((link) => (
              <PhoneEmailLocationContainer
                key={link.href}
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <IconWrapper>
                  <i className={link.icon} aria-hidden="true"></i>
                </IconWrapper>
                <IconText>{link.text}</IconText>
              </PhoneEmailLocationContainer>
            ))}
          </PhoneEmailLocationWrapper>
        </RightSide>
      </VisitUsWrapper>
    </BaseLayout>
  );
}

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
  @media (max-width: 850px) {
    max-width: 90%;
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
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const LightHeading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.muted};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

// Card around the shared contact form
const ContactCard = styled(ContactForm)`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: 950px) {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    padding: 4rem;
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
  @media (max-width: 376px) {
    padding: 1.5rem;
  }
  @media (max-width: 321px) {
    padding: 1rem;
  }
`;

const MainSection = styled.div`
  ${({ theme }) => linedBackground(theme.colors.gridLine, theme.colors.white)}
`;

const VisitUsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IconText = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PhoneEmailLocationContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    ${IconWrapper} {
      color: ${({ theme }) => theme.colors.dark};
    }

    ${IconText} {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

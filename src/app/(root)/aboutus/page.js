"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import kuwar from "../../../../public/assets/kuwar.jpg";
import aboutus from "../../../../public/assets/aboutus-section.jpg";

export default function AboutUs() {
  const pageHeader = {
    heading: "About Us",
    description: "",
  };

  const sectionData0 = {
    heading: "Kuwar Chand",
    description:
      "Meet the visionary behind MJ Interior, Kuwar Chand. With a steadfast commitment to excellence, he has not only shaped the company but also laid the very foundation upon which endeavors rest. His keen eye for detail, coupled with a passion for perfection, has permeated every aspect of work, ensuring that each project undertaken by MJ Interior reflects the highest standards of quality and craftsmanship.",
  };

  const sectionData1 = {
    smallHeading: "Our Story",
    heading: "How We Started",
    description:
      "MJ Interior has been redefining interior design since its establishment in 2007. MJ Interior's journey is a testament to passion and creativity. From humble beginnings, we've redefined interior design, turning dreams into reality. ",
  };

  const sectionData2 = {
    smallHeading: "What We Want To Achieve",
    heading: "Our Mission",
    description:
      "At MJ Interior, our mission is clear: to transform spaces and enrich lives. With creativity as our compass and innovation as our guide, we aim to exceed expectations, crafting environments that inspire and delight.",
  };

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <ContentWrapper>
        <BigSectionWrapper>
          <KuwarImage src={kuwar} alt="Kuwar Chand" data-aos="fade-left" />
          <div>
            <SectionHeading>{sectionData0.heading}</SectionHeading>
            <SectionDescription>{sectionData0.description}</SectionDescription>
          </div>
        </BigSectionWrapper>
        <SectionWrapper className="section-first">
          <RightSide data-aos="fade-left">
            <SmallHeading>{sectionData1.smallHeading}</SmallHeading>
            <SectionHeading>{sectionData1.heading}</SectionHeading>
            <SectionDescription>{sectionData1.description}</SectionDescription>
          </RightSide>
          <LeftSide>
            <SectionImage src={aboutus} alt="About Us" />
          </LeftSide>
        </SectionWrapper>
        <SectionWrapper className="section-second">
          <LeftSide>
            <SectionImage src={aboutus} alt="About Us" />
          </LeftSide>
          <RightSide data-aos="fade-right">
            <SmallHeading>{sectionData2.smallHeading}</SmallHeading>
            <SectionHeading>{sectionData2.heading}</SectionHeading>
            <SectionDescription>{sectionData2.description}</SectionDescription>
          </RightSide>
        </SectionWrapper>
      </ContentWrapper>
    </BaseLayout>
  );
}

const Header = styled.div`
  max-width: 900px;
  margin: 100px auto 0;
  text-align: center;
  padding: 50px 0;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const KuwarImage = styled(Image)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 230px;
    height: 230px;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    padding: 40px 30px;
  }
  @media (max-width: 426px) {
    padding: 30px 20px;
  }
`;

const SectionImage = styled(Image)`
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
  justify-content: space-around;
  padding: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 550px) {
    padding: 40px 30px;
  }
  @media (max-width: 426px) {
    padding: 30px 20px;
  }
  @media (max-width: 376px) {
    gap: 30px;
  }
  @media (max-width: 321px) {
    gap: 25px;
  }
`;

const SmallHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const SectionHeading = styled.h1`
  font-size: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const SectionDescription = styled.p`
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

const BigSectionWrapper = styled.div`
  padding: 0 5%;
  display: flex;
  align-items: center;
  gap: 100px;
  margin: 0 50px 50px;
  transition: all 0.5s ease-in-out;

  ${SectionHeading} {
    margin-bottom: 0.5rem !important;
  }

  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    padding: 0 0 30px 0;
    gap: 20px;
    flex-direction: column;

    ${SectionHeading} {
      margin-bottom: 1rem !important;
    }
  }
  @media (max-width: 550px) {
    margin: 0 30px;
  }
  @media (max-width: 426px) {
    margin: 0 20px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  height: 500px;
  max-height: 500px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &.section-first {
    background-image: repeating-linear-gradient(
      to right,
      #1d1d1d,
      #1d1d1d 0.5px,
      transparent 0.5px,
      transparent
    );
    background-size: 200px 200px;
    background-color: #0c0e17;

    ${SmallHeading} {
      color: white;
    }
    ${SectionHeading} {
      color: white;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    &.section-second {
      flex-direction: column-reverse;
    }
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

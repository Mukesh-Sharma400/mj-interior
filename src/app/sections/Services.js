"use client";

import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { linedBackground } from "@/app/colors";
import { services } from "@/app/data/site";

export const Services = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sectionData = {
    smallHeading: "Services",
    heading: "Our Best Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <ServicesHeading>{sectionData.smallHeading}</ServicesHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </Header>
      <ServicesSlider {...settings}>
        {services.map((service) => (
          <ServiceSlide key={service.name}>
            <SlideImageWrapper>
              <SlideImage
                src={service.image}
                alt={service.name}
                sizes="(max-width: 550px) 45vw, 30vw"
              />
            </SlideImageWrapper>
            <SlideTitle>{service.name}</SlideTitle>
          </ServiceSlide>
        ))}
      </ServicesSlider>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  ${({ theme }) => linedBackground(theme.colors.brownLine, theme.colors.brown)}
  transition: all 0.5s ease-in-out;
`;

const Header = styled.div`
  max-width: 900px;
  margin: 0 auto;
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

const ServicesHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.mutedLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const ServicesSlider = styled(Slider)`
  width: 90%;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

const ServiceSlide = styled.div`
  padding: 0 10px;
  transition: all 0.5s ease-in-out;
`;

const SlideImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: all 0.5s ease-in-out;
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const SlideTitle = styled.p`
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 670px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
  @media (max-width: 321px) {
    font-size: 12px;
  }
`;

"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import turnkey from "../../../../public/assets/turnkey.jpg";
import popWork from "../../../../public/assets/pop-work.jpg";
import painting from "../../../../public/assets/painting.png";
import civilWork from "../../../../public/assets/civil-work.png";
import electrical from "../../../../public/assets/electrical.jpg";
import carpenters from "../../../../public/assets/carpenters.jpg";
import modular from "../../../../public/assets/modular-kitchen.jpg";
import fabrication from "../../../../public/assets/fabrication.jpg";
import interior from "../../../../public/assets/interior-design.jpg";
import flooring from "../../../../public/assets/tiling-flooring.jpg";

export default function Services() {
  const pageHeader = {
    heading: "Services",
    description:
      "Dive into the realm of excellence with our tailored services, meticulously crafted for every space and vision. Discover the unparalleled quality of our offerings.",
  };

  const servicesData = [
    {
      image: interior,
      name: "Interior Designing",
      description:
        "Transform your space with our expert interior designing services. From concept to completion, we'll bring your vision to life.",
    },
    {
      image: civilWork,
      name: "Civil Work",
      description:
        "From building foundations to structural frameworks, we ensure that every project is completed to the highest standards.",
    },
    {
      image: flooring,
      name: "Tiling And Flooring",
      description:
        "Enhance your space with our tiling and flooring solutions. Our experts will help you choose and install the perfect materials.",
    },
    {
      image: electrical,
      name: "Electrical Work",
      description:
        "Ensure the safety and functionality of your electrical systems with our professional services.",
    },
    {
      image: fabrication,
      name: "Fabrication Work",
      description:
        "Get custom metal parts or structural components with our fabrication work services, delivered on time and within budget.",
    },
    {
      image: painting,
      name: "Painting Work",
      description:
        "Refresh your walls or give your exterior a makeover with our professional painting services.",
    },
    {
      image: popWork,
      name: "POP Work",
      description:
        "Achieve stunning architectural details with our POP (Plaster of Paris) work services.",
    },
    {
      image: carpenters,
      name: "Carpenter Work",
      description:
        "From furniture making to cabinetry, our skilled carpenters will bring your woodworking projects to life.",
    },
    {
      image: modular,
      name: "Modular Kitchen",
      description:
        "Experience the convenience and functionality of a modular kitchen tailored to suit your lifestyle.",
    },
    {
      image: turnkey,
      name: "Turnkey Contractor",
      description:
        "Sit back and relax while we manage every aspect of your project as your turnkey contractor.",
    },
  ];

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <ServicesWrapper>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} data-aos="fade-up">
            <ServiceImageWrapper>
              <ServiceImage
                src={service.image}
                alt={service.name}
                width={450}
                height={450}
              />
            </ServiceImageWrapper>
            <ServiceDetails>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceDetails>
          </ServiceCard>
        ))}
      </ServicesWrapper>
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

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto 5rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ServiceImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.5s ease-in-out;
`;

const ServiceCard = styled.div`
  width: 450px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;

  &:hover {
    ${ServiceImage} {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 376px) {
    width: 90%;
  }
`;

const ServiceImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const ServiceDetails = styled.div`
  padding: 1rem;
  transition: all 0.5s ease-in-out;
`;

const ServiceName = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: black;
  transition: all 0.5s ease-in-out;
`;

const ServiceDescription = styled.p`
  color: grey;
  transition: all 0.5s ease-in-out;
`;

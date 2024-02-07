"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import interior from "../../../../public/assets/interior-design.jpg";

export default function Services() {
  return (
    <BaseLayout>
      <Header>
        <Heading>Services</Heading>
        <Description>
          Dive into the realm of excellence with our tailored services,
          meticulously crafted for every space and vision. Discover the
          unparalleled quality of our offerings.
        </Description>
      </Header>
      <ServicesWrapper>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
        <ServiceCard>
          <ServiceImageWrapper>
            <ServiceImage
              src={interior}
              alt="Interior Designing"
              width={400}
              height={400}
            />
          </ServiceImageWrapper>
          <ServiceDetails>
            <ServiceName>Interior Designing</ServiceName>
            <ServiceDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ServiceDescription>
          </ServiceDetails>
        </ServiceCard>
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
  width: 400px;
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

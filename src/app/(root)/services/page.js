"use client";

import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";

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

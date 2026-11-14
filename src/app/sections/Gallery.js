"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { featuredGallery } from "@/app/data/gallery";

// Grid area for each featured photo, in the same order as `featuredGallery`
const gridAreas = ["Column1", "Column21", "Column22", "Column31", "Column32"];

export const Gallery = () => {
  const sectionData = {
    smallHeading: "Gallery",
    heading: "Take a Look at Our Recent Projects",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  return (
    <DisplayWrapper>
      <Header data-aos="fade-up">
        <GalleryHeading>{sectionData.smallHeading}</GalleryHeading>
        <Heading>{sectionData.heading}</Heading>
        <Description>{sectionData.description}</Description>
      </Header>
      <GalleryWrapper>
        {featuredGallery.map((photo, index) => (
          <div key={gridAreas[index]} className={gridAreas[index]}>
            <StyledImage
              src={photo.image}
              alt={photo.alt}
              sizes={index === 0 ? "(max-width: 768px) 60vw, 45vw" : "25vw"}
              data-aos="fade-up"
            />
          </div>
        ))}
      </GalleryWrapper>
      <ButtonWrapper>
        <SecondaryButton href="/gallery" data-aos="fade-up">
          <span className="transition"></span>
          <span className="label">View More</span>
        </SecondaryButton>
      </ButtonWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
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

const GalleryHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
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

const GalleryWrapper = styled.div`
  width: 90%;
  height: 100vh;
  max-height: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-flow: row;
  transition: all 0.5s ease-in-out;
  grid-template-areas: "Column1 Column1 Column21 Column31" "Column1 Column1 Column21 Column32" "Column1 Column1 Column22 Column32";

  .Column1 {
    grid-area: Column1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .Column21 {
    grid-area: Column21;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .Column22 {
    grid-area: Column22;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .Column31 {
    grid-area: Column31;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .Column32 {
    grid-area: Column32;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "Column1 Column1 Column21"
      "Column1 Column1 Column21"
      "Column1 Column1 Column22";
    gap: 10px;
    .Column31 {
      display: none;
    }
    .Column32 {
      display: none;
    }
  }

  @media (max-width: 500px) {
    max-height: 300px;
  }

  @media (max-width: 376px) {
    max-height: 250px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1) !important;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 200px;
  height: 40px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.dark} !important;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: ${({ theme }) => theme.colors.primary};
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

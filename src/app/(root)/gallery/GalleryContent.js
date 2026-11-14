"use client";

import Image from "next/image";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { gallery } from "@/app/data/gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function GalleryContent() {
  const pageHeader = {
    heading: "Gallery",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  return (
    <BaseLayout>
      <Header data-aos="fade-up">
        <Heading>{pageHeader.heading}</Heading>
        <Description>{pageHeader.description}</Description>
      </Header>
      <GalleryWrapper>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 700: 2, 1024: 3 }}
        >
          <Masonry gutter="16px">
            {gallery.map((photo, index) => (
              <ImageWrapper key={index}>
                <StyledImage
                  src={photo.image}
                  alt={photo.alt}
                  sizes="(max-width: 700px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  placeholder="blur"
                  data-aos="fade-up"
                />
              </ImageWrapper>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </GalleryWrapper>
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0px auto 50px;
  transition: all 0.5s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
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

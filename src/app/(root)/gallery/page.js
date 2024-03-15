"use client";

import Image from "next/image";
import styled from "styled-components";
import BaseLayout from "@/app/components/BaseLayout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryOne from "../../../../public/assets/gallery-one.jpg";
import galleryTwo from "../../../../public/assets/gallery-two.jpg";
import galleryThree from "../../../../public/assets/gallery-three.jpg";
import galleryFour from "../../../../public/assets/gallery-four.jpg";
import galleryFive from "../../../../public/assets/gallery-five.jpg";
import gallerySix from "../../../../public/assets/gallery6.JPG";
import gallerySeven from "../../../../public/assets/gallery7.JPG";
import galleryEight from "../../../../public/assets/gallery8.JPG";
import galleryNine from "../../../../public/assets/gallery9.JPG";
import galleryTen from "../../../../public/assets/gallery10.JPG";
import galleryEleven from "../../../../public/assets/gallery11.JPG";
import galleryTwelve from "../../../../public/assets/gallery12.JPG";
import galleryThirteen from "../../../../public/assets/gallery13.JPG";
import galleryFourteen from "../../../../public/assets/gallery14.JPG";
import galleryFifteen from "../../../../public/assets/gallery15.JPG";
import gallerySixteen from "../../../../public/assets/gallery16.JPG";
import gallerySeventeen from "../../../../public/assets/gallery17.JPG";
import galleryEighteen from "../../../../public/assets/gallery18.JPG";
import galleryNineteen from "../../../../public/assets/gallery19.JPG";
import galleryTwenty from "../../../../public/assets/gallery20.JPG";
import galleryTwentyOne from "../../../../public/assets/gallery21.JPG";
import galleryTwentyTwo from "../../../../public/assets/gallery22.JPG";
import galleryTwentyThree from "../../../../public/assets/gallery23.JPG";
import galleryTwentyFour from "../../../../public/assets/gallery24.JPG";
import galleryTwentyFive from "../../../../public/assets/gallery25.JPG";
import galleryTwentySix from "../../../../public/assets/gallery26.JPG";
import galleryTwentySeven from "../../../../public/assets/gallery27.JPG";

export default function Gallery() {
  const pageHeader = {
    heading: "Gallery",
    description:
      "Explore a collection of our recent projects, each telling a unique story of creativity and craftsmanship. Immerse yourself in our visual showcase of innovation.",
  };

  const galleryImages = [
    galleryTwenty,
    galleryEighteen,
    galleryThree,
    gallerySixteen,
    galleryFourteen,
    galleryTwentyFive,
    galleryTwentySeven,
    galleryTwentyOne,
    galleryTen,
    galleryTwentySix,
    galleryTwentyTwo,
    galleryOne,
    gallerySeven,
    galleryThirteen,
    galleryFour,
    galleryTwo,
    galleryFive,
    galleryTwentyFour,
    galleryNine,
    galleryTwentyThree,
    galleryTwelve,
    gallerySeventeen,
    gallerySix,
    galleryFifteen,
    galleryEleven,
    galleryEight,
    galleryNineteen,
  ];

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
            {galleryImages.map((image, index) => (
              <ImageWrapper key={index}>
                <StyledImage
                  src={image}
                  alt="Gallery Image"
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

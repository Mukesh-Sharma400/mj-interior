import Image from "next/image";
import styled from "styled-components";
import interior from "../../../public/assets/interior-design.jpg";

export const Gallery = () => {
  return (
    <DisplayWrapper>
      <Header>
        <GalleryHeading>Gallery</GalleryHeading>
        <Heading>Take a Look at Our Recent Projects</Heading>
        <Description>
          Explore a collection of our recent projects, each telling a unique
          story of creativity and craftsmanship. Immerse yourself in our visual
          showcase of innovation.
        </Description>
      </Header>
      <GalleryWrapper>
        <div class="Column1">
          <StyledImage src={interior} alt="interior" />
        </div>
        <div class="Column21">
          <StyledImage src={interior} alt="interior" />
        </div>
        <div class="Column22">
          <StyledImage src={interior} alt="interior" />
        </div>
        <div class="Column31">
          <StyledImage src={interior} alt="interior" />
        </div>
        <div class="Column32">
          <StyledImage src={interior} alt="interior" />
        </div>
      </GalleryWrapper>
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
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const GalleryHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
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

  @media (max-width: 426px) {
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
    transform: scale(1.1);
  }
`;

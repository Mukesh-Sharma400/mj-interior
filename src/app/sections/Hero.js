import Image from "next/image";
import styled from "styled-components";
import backgroundImage from "../../../public/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <DisplayWrapper>
      <BackgroundImageWrapper>
        <BackgroundImage src={backgroundImage} alt="Background Image" />
        <Overlay />
      </BackgroundImageWrapper>
      <ContentWrapper>
        <Heading>Transforming Dreams into Real Paradise</Heading>
        <Description>
          From Imagination to Blueprint: Where Your Vision Takes Shape. Welcome
          to MJ Interior, where we bring dreams to life with sophisticated style
          and meticulous design.
        </Description>
        <Button>
          <span class="transition"></span>
          <span class="label">See Projects</span>
        </Button>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 100vh;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  max-width: 870px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 670px;
    left: 5%;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 45px;
  }
  @media (max-width: 426px) {
    font-size: 35px;
  }
  @media (max-width: 376px) {
    font-size: 30px;
  }
  @media (max-width: 321px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 426px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #23c3c4;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #ab81e8;
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

  &:hover .transition {
    width: 14em;
    height: 14em;
  }

  @media (max-width: 1024px) {
    width: 140px;
    height: 35px;
    font-size: 18px;
  }
  @media (max-width: 426px) {
    width: 130px;
    height: 30px;
    font-size: 15px;
  }
`;

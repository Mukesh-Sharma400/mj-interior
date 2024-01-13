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
        <Button>See Projects</Button>
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
`;

const Heading = styled.h1`
  font-size: 60px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  transition: all 0.5s ease-in-out;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 40px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
`;

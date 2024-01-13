import Image from "next/image";
import styled from "styled-components";
import aboutus from "../../../public/assets/aboutus-section.jpg";

export const AboutUs = () => {
  return (
    <DisplayWrapper>
      <LeftSide>
        <AboutUsImage src={aboutus} alt="About Us" />
      </LeftSide>
      <RightSide>
        <AboutUsHeading>About Us</AboutUsHeading>
        <Heading>The combination of modern & simplicity</Heading>
        <Description>
          MJ Interior is a crew of creative interior designers who have the
          ability to see the world through an aesthetic filter and transitioning
          the domain into the versions of their perspective, filled with
          captivating sights.
        </Description>
        <Button>Contact Now</Button>
      </RightSide>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  transition: all 0.5s ease-in-out;
`;

const AboutUsHeading = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: black;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  transition: all 0.5s ease-in-out;
`;

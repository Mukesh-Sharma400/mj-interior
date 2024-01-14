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
        <Heading>The Combination of Modern & Simplicity</Heading>
        <Description>
          MJ Interior is a crew of creative interior designers who have the
          ability to see the world through an aesthetic filter and transitioning
          the domain into the versions of their perspective, filled with
          captivating sights.
        </Description>
        <Button>
          <span class="transition"></span>
          <span class="label">Contact Now</span>
        </Button>
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
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
  width: 200px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #ab81e8;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #23c3c4;
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
`;

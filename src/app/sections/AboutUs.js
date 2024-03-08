import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { ContactNowPopup } from "../components/ContactNowPopup";
import aboutus from "../../../public/assets/aboutus-section.jpg";

export const AboutUs = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const sectionData = {
    smallHeading: "About Us",
    heading: "The Combination of Modern & Simplicity",
    description:
      "MJ Interior is a company of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
  };

  return (
    <>
      <DisplayWrapper>
        <LeftSide>
          <AboutUsImage src={aboutus} alt="About Us" />
        </LeftSide>
        <RightSide data-aos="fade-right">
          <AboutUsHeading>{sectionData.smallHeading}</AboutUsHeading>
          <Heading>{sectionData.heading}</Heading>
          <Description>{sectionData.description}</Description>
          <Button
            onClick={() => {
              setShowContactPopup(true);
            }}
          >
            <span className="transition"></span>
            <span className="label">Contact Now</span>
          </Button>
        </RightSide>
      </DisplayWrapper>
      {showContactPopup && (
        <ContactNowPopup
          handleClose={() => {
            setShowContactPopup(false);
          }}
        />
      )}
    </>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
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

  @media (max-width: 768px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 376px) {
    padding: 40px;
    gap: 30px;
  }
  @media (max-width: 321px) {
    padding: 30px;
    gap: 25px;
  }
`;

const AboutUsHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
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

  @media (max-width: 1024px) {
    width: 170px;
    height: 50px;
    font-size: 18px;
  }
  @media (max-width: 376px) {
    width: 150px;
    height: 45px;
    font-size: 16px;
  }
  @media (max-width: 321px) {
    width: 130px;
    height: 40px;
    font-size: 14px;
  }
`;

import CountUp from "react-countup";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counting = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const sectionData = { years: currentYear - 2007, projects: 150, reviews: 50 };

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <Number>
          {isVisible ? (
            <CountUp start={0} end={sectionData.years} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Years</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number>
          {isVisible ? (
            <CountUp start={0} end={sectionData.projects} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Projects</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number>
          {isVisible ? (
            <CountUp start={0} end={sectionData.reviews} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Reviews</Label>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
  background-color: white;
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 2px;
  height: 100px;
  background-color: grey;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

const Number = styled.p`
  font-size: 40px;
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 27px;
  }
  @media (max-width: 321px) {
    font-size: 25px;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    font-size: 18px;
  }
  @media (max-width: 376px) {
    font-size: 16px;
  }
  @media (max-width: 321px) {
    font-size: 15px;
  }
`;

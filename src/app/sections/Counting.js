"use client";

import CountUp from "react-countup";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { business, stats } from "@/app/data/site";

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

  const sectionData = {
    years: currentYear - business.foundedYear,
    ...stats,
  };

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <CountValue data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.years} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
        <Label>Years</Label>
      </ContentWrapper>
      <Divider aria-hidden="true" />
      <ContentWrapper>
        <CountValue data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.projects} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
        <Label>Projects</Label>
      </ContentWrapper>
      <Divider aria-hidden="true" />
      <ContentWrapper>
        <CountValue data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.reviews} duration={5} />
          ) : (
            "0"
          )}
          +
        </CountValue>
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
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 2px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.muted};
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

const CountValue = styled.p`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.muted};
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

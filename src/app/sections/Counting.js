import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const useCountingEffect = (targetCount, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = count;
    const interval = setInterval(() => {
      if (currentCount < targetCount && startCounting) {
        currentCount += 1;
        setCount(currentCount);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count, targetCount, startCounting]);
  return count;
};

export const Counting = () => {
  const yearRef = useRef(null);
  const projectRef = useRef(null);
  const reviewRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setStartCounting(true);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const yearObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const projectObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const reviewObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (yearRef.current) {
      yearObserver.observe(yearRef.current);
    }
    if (projectRef.current) {
      projectObserver.observe(projectRef.current);
    }
    if (reviewRef.current) {
      reviewObserver.observe(reviewRef.current);
    }

    return () => {
      yearObserver.disconnect();
      projectObserver.disconnect();
      reviewObserver.disconnect();
    };
  }, []);

  const yearCount = useCountingEffect(20, startCounting);
  const projectCount = useCountingEffect(150, startCounting);
  const reviewCount = useCountingEffect(100, startCounting);

  return (
    <DisplayWrapper>
      <ContentWrapper ref={yearRef}>
        <Number>{yearCount}+</Number>
        <Label>Years</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper ref={projectRef}>
        <Number>{projectCount}+</Number>
        <Label>Projects</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper ref={reviewRef}>
        <Number>{reviewCount}+</Number>
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

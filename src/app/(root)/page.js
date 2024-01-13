"use client";

import styled from "styled-components";
import { Hero } from "../sections/Hero";
import { AboutUs } from "../sections/AboutUs";
import { Header } from "../components/Header";
import { Counting } from "../sections/Counting";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <DisplayWrapper>
      <Header />
      <Hero />
      <Counting />
      <AboutUs />
      {/* <Footer /> */}
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

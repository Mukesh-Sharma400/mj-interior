"use client";

import styled from "styled-components";
import { Hero } from "../sections/Hero";
import { Footer } from "../components/Footer";
import { AboutUs } from "../sections/AboutUs";
import { Header } from "../components/Header";
import { Gallery } from "../sections/Gallery";
import { Counting } from "../sections/Counting";
import { Services } from "../sections/Services";
import { Testimonials } from "../sections/Testimonials";

export default function Home() {
  return (
    <DisplayWrapper>
      <Header />
      <Hero />
      <Counting />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

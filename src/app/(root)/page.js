"use client";

import styled from "styled-components";
import { Hero } from "../sections/Hero";
import { Header } from "../components/Header";
import { Counting } from "../sections/Counting";

export default function Home() {
  return (
    <DisplayWrapper>
      <Header />
      <Hero />
      <Counting />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

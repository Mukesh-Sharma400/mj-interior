"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Tooltips } from "./Tooltips";
import styled from "styled-components";

export function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
      <Tooltips />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

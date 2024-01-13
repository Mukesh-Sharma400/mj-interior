import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DisplayWrapper scrolled={scrolled}>
      <Logo src={logo} alt="MJ Interior" scrolled={scrolled} />
      <RoutesWrapper scrolled={scrolled}>
        <Route href="/" scrolled={scrolled}>
          Services
        </Route>
        <Route href="/" scrolled={scrolled}>
          Projects
        </Route>
        <Route href="/" scrolled={scrolled}>
          About Us
        </Route>
        <ContactBtn scrolled={scrolled}>Let's Talk</ContactBtn>
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 50px;
  height: ${(props) => (props.scrolled ? "70px" : "90px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.scrolled ? "rgba(225, 225, 225, 0.3)" : "transparent"};
  box-shadow: ${(props) =>
    props.scrolled ? "0 4px 15px rgba(225, 225, 225, 0.3)" : "none"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10.1px)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.scrolled ? "blur(10.1px)" : "none"};
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid rgba(225, 225, 225, 1)" : "none"};
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: auto;
  height: ${(props) => (props.scrolled ? "50px" : "70px")};
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  font-size: 16px;
  color: ${(props) => (props.scrolled ? "black" : "white")};
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.scrolled ? "white" : "black")};
  background-color: ${(props) => (props.scrolled ? "black" : "white")};
  border-radius: 40px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
`;

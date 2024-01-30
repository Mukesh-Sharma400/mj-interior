import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "./SideMenu";
import styled from "styled-components";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpened, setSideMenuOpened] = useState(false);

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

  const handleSideMenu = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  return (
    <>
      <DisplayWrapper scrolled={scrolled}>
        <Logo src={logo} alt="MJ Interior" scrolled={scrolled} />
        <RoutesWrapper scrolled={scrolled}>
          <Route className="active" href="/" scrolled={scrolled}>
            Home
          </Route>
          <Route href="/services" scrolled={scrolled}>
            Services
          </Route>
          <Route href="/projects" scrolled={scrolled}>
            Projects
          </Route>
          <Route href="/aboutus" scrolled={scrolled}>
            About Us
          </Route>
          <Route href="/contact" scrolled={scrolled}>
            Contact
          </Route>
        </RoutesWrapper>
        <Button onClick={handleSideMenu} sideMenuOpened={sideMenuOpened}>
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </Button>
      </DisplayWrapper>
      <SideMenu
        sideMenuOpened={sideMenuOpened}
        setSideMenuOpened={setSideMenuOpened}
      />
    </>
  );
};

const DisplayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 5%;
  height: ${(props) => (props.scrolled ? "70px" : "90px")};
  max-width: 1440px;
  margin: 0 auto;
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
  height: ${(props) => (props.scrolled ? "40px" : "60px")};
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    display: none;
  }
`;

const Route = styled(Link)`
  font-size: 16px;
  color: ${(props) => (props.scrolled ? "black" : "white")};
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  padding-bottom: 3px;

  &.active {
    color: #ab81e8;
    font-weight: bold;
    border-bottom: 2px solid #ab81e8;

    &:hover {
      color: #ab81e8;
    }
  }

  &:hover {
    color: #23c3c4;
  }
`;

const Button = styled.button`
  --gap: 5px;
  --height-bar: 3px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;

  display: none;

  @media (max-width: 426px) {
    display: flex;
  }

  width: 40px;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
  background: transparent;

  .bar {
    position: relative;
    height: var(--height-bar);
    width: 100%;
    border-radius: 0.5rem;
    background-color: #9941fc;
  }

  .bar--1 {
    top: var(--pos-y-bar-one);
    transform: rotate(var(--rotate-bar-one));
    transition: top 200ms 100ms, transform 100ms;
  }

  .bar--2 {
    transform: scaleX(var(--scale-bar));
    transition: transform 150ms 100ms;
  }

  .bar--3 {
    bottom: var(--pos-y-bar-three);
    transform: rotate(var(--rotate-bar-three));
    transition: bottom 200ms 100ms, transform 100ms;
  }

  ${(props) =>
    props.sideMenuOpened &&
    `
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  `}
`;

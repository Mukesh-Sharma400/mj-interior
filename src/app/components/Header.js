import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/assets/logo.png";

export const Header = () => {
  return (
    <DisplayWrapper>
      <Logo src={logo} alt="MJ Interior" />
      <RoutesWrapper>
        <Route href="/">Services</Route>
        <Route href="/">Projects</Route>
        <Route href="/">About Us</Route>
        <ContactBtn>Let's Talk</ContactBtn>
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
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
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ContactBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: black;
  background-color: white;
  border-radius: 40px;
  height: 40px;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
`;

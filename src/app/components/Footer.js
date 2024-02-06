import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/assets/logo.png";

export const Footer = () => {
  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <Column1>
          <Logo src={logo} alt="MJ Interior" />
          <Description>
            Established in 2016, Mj Interior has firmly positioned itself as a
            premier and esteemed provider of interior renovation services with a
            focus on construction and building in Ghansoli, Navi Mumbai.
          </Description>
        </Column1>
        <Column2>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            <Page href="/">Home</Page>
            <Page href="/services">Services</Page>
            <Page href="/projects">Projects</Page>
            <Page href="/aboutus">About Us</Page>
            <Page href="/contactus">Contact Us</Page>
          </PagesWrapper>
        </Column2>
        <Column3>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            <Service>
              <i class="bi bi-check2-circle"></i> Interior Designing
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Civil Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Tiling And Flooring
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Electrical Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Fabrication Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Painting Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> POP Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Carpenter Work
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Modular Kitchen
            </Service>
            <Service>
              <i class="bi bi-check2-circle"></i> Turnkey Contractor
            </Service>
          </ServicesWrapper>
        </Column3>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © 2024 <span>MJ Interior</span>. All rights reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a href="https://mukesh-sharma.vercel.app" target="_blank">
              Mukesh Sharma
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 5%;
  background-image: repeating-linear-gradient(
    to right,
    #1d1d1d,
    #1d1d1d 0.5px,
    transparent 0.5px,
    transparent
  );
  background-size: 200px 200px;
  background-color: #0c0e17;
  transition: all 0.5s ease-in-out;
`;

const ColumnsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 15px;
  color: lightgrey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SectionHeading = styled.p`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
`;

const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const Page = styled(Link)`
  position: relative;
  width: 100%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: lightgrey;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #23c3c4;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: transparent;
    width: 0;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: #23c3c4;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Column3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
`;

const Service = styled.div`
  width: 50%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: lightgrey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  transition: all 0.5s ease-in-out;

  span {
    font-weight: 600;
  }
`;

const RightSide = styled.div`
  transition: all 0.5s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: royalBlue;
    }
  }
`;

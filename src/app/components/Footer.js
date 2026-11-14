import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { linedBackground } from "@/app/colors";
import { business, routes, services, socialLinks } from "@/app/data/site";
import logo from "#/logo.webp";

export const Footer = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <DisplayWrapper as="footer">
      <ColumnsWrapper>
        <LogoColumn>
          <Logo src={logo} alt="MJ Interior" />
          <Description>{business.footerDescription}</Description>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-title={link.label}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.label}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </LogoColumn>
        <PagesColumn>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routes.map((page) =>
              page.path === pathName ? null : (
                <Page key={page.path} href={page.path}>
                  {page.label}
                </Page>
              ),
            )}
          </PagesWrapper>
        </PagesColumn>
        <ServicesColumn>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            {services.map((service) => (
              <Service key={service.name}>
                <i className="bi bi-check2-circle"></i> {service.name}
              </Service>
            ))}
          </ServicesWrapper>
        </ServicesColumn>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>{business.name}</span>. All rights reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://mukesh-sharma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
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
  ${({ theme }) => linedBackground(theme.colors.brownLine, theme.colors.brown)}
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
    flex-direction: column;
    gap: 30px;
  }
`;

const LogoColumn = styled.div`
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
  color: ${({ theme }) => theme.colors.mutedLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.whiteTranslucent};
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const SectionHeading = styled.p`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
`;

const PagesColumn = styled.div`
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
  color: ${({ theme }) => theme.colors.mutedLight};
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: transparent;
    width: 0;
    transition:
      width 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const ServicesColumn = styled.div`
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
  color: ${({ theme }) => theme.colors.mutedLight};
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
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
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.creditHover};
    }
  }
`;

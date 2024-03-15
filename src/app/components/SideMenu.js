import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const SideMenu = ({ sideMenuOpened, setSideMenuOpened }) => {
  const sideMenuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        sideMenuOpened &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        setSideMenuOpened(false);
      }
    };

    const handleScroll = () => {
      setSideMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sideMenuOpened]);

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <DisplayWrapper ref={sideMenuRef} sideMenuOpened={sideMenuOpened}>
      <RoutesWrapper>
        {routesData.map((route) => (
          <Route
            key={route.path}
            className={pathname === route.path && "active"}
            href={route.path}
          >
            {route.label}
          </Route>
        ))}
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  display: none;
  width: 50%;
  height: 100vh;
  background: rgba(225, 225, 225, 0.3);
  box-shadow: 0 4px 15px rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border-left: 1px solid rgba(225, 225, 225, 1);
  padding: 1rem;
  position: fixed;
  top: 0;
  right: ${(props) => (props.sideMenuOpened ? "0px" : "-400px")};
  z-index: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    display: initial;
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  font-size: 16px;
  color: black;
  background-color: white;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

  &.active {
    color: white;
    background-color: #ab81e8;

    &:focus {
      color: white;
      background-color: #ab81e8;
    }
  }

  &:focus {
    color: white;
    background-color: #23c3c4;
  }
`;

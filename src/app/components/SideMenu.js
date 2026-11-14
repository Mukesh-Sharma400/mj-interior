import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/data/site";

export const SideMenu = ({ sideMenuOpened, setSideMenuOpened }) => {
  const sideMenuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    if (!sideMenuOpened) return;

    const handleDocumentClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setSideMenuOpened(false);
      }
    };

    const handleClose = () => {
      setSideMenuOpened(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSideMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleClose, { passive: true });

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleClose);
    };
  }, [sideMenuOpened, setSideMenuOpened]);

  return (
    <DisplayWrapper
      ref={sideMenuRef}
      $sideMenuOpened={sideMenuOpened}
      // Keep closed menu links out of the tab order and screen readers
      inert={sideMenuOpened ? undefined : ""}
    >
      <RoutesWrapper aria-label="Mobile">
        {routes.map((route) => (
          <Route
            key={route.path}
            className={pathname === route.path ? "active" : undefined}
            aria-current={pathname === route.path ? "page" : undefined}
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
  background: ${({ theme }) => theme.colors.glass};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border-left: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: 1rem;
  position: fixed;
  top: 0;
  /* Fully off-screen when closed (the menu is 50% wide, so a fixed -400px
     left part of it visible on wider phones) */
  right: ${(props) => (props.$sideMenuOpened ? "0" : "-100%")};
  z-index: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    display: initial;
  }
`;

const RoutesWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.menuItem};
  transition: all 0.5s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    &:focus {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

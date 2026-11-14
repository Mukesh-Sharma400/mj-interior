import { useEffect } from "react";
import styled from "styled-components";
import { ContactForm } from "@/app/components/ContactForm";

export const ContactPopup = ({ handleClose }) => {
  // Close on Escape and stop the page behind from scrolling while open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <PopupOverlay onClick={handleClose}>
      <PopupContainer
        role="dialog"
        aria-modal="true"
        aria-label="Contact us"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseBtn type="button" onClick={handleClose} aria-label="Close">
          <i className="bi bi-x-circle-fill"></i>
        </CloseBtn>
        <ScrollableForm compact />
      </PopupContainer>
    </PopupOverlay>
  );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 16;
  cursor: default;
  background-color: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(2px);
  transition: all 0.5s ease-in-out;
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: calc(1440px - 10%);
  max-height: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 90%;
  }
`;

const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const ScrollableForm = styled(ContactForm)`
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

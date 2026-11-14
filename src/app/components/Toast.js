import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// Shows `message` for `duration` ms. Returns [toast, showToast].
export function useToast(duration = 3000) {
  const timeoutRef = useRef(null);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToast = useCallback(
    (message) => {
      setToast({ visible: true, message });
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setToast({ visible: false, message: "" });
      }, duration);
    },
    [duration],
  );

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return [toast, showToast];
}

// `light` renders white text, for use over dark backgrounds (e.g. the hero).
// Rendered into <body> so a transformed parent (like the contact popup)
// can't change where the fixed-position toast appears.
export const Toast = ({ toast, light = false }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <ToastWrapper $visible={toast.visible} role="status" aria-live="polite">
      <DisplayWrapper $light={light}>{toast.message}</DisplayWrapper>
    </ToastWrapper>,
    document.body,
  );
};

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.$visible ? "10%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 17;
  transition: all 0.5s ease-in-out;
`;

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $light }) =>
    $light ? theme.colors.white : theme.colors.text};
  background: ${({ theme }) => theme.colors.glass};
  box-shadow: ${({ theme }) => theme.shadows.glass};
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  transition: all 0.5s ease-in-out;

  @media (max-width: 400px) {
    width: 300px;
    font-size: 14px;
  }
`;

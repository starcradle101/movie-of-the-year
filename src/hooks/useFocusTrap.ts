import { useEffect } from "react";
import { getFocusableElements } from "../utils/dom";

interface UseFocusTrapProps {
  containerRef: React.RefObject<HTMLElement>;
  onClose: () => void;
}

export const useFocusTrap = ({ containerRef, onClose }: UseFocusTrapProps) => {
  useEffect(() => {
    const setInitialFocus = () => {
      const container = containerRef.current;
      if (!container) return;

      const focusableElements = getFocusableElements(container);
      focusableElements[0]?.focus();
    };

    const trapFocus = (event: KeyboardEvent) => {
      if (!containerRef.current) return;

      const focusableElements = getFocusableElements(containerRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements.at(-1) as HTMLElement;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        trapFocus(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    setInitialFocus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [containerRef, onClose]);
};

import { FOCUSABLE_ELEMENTS } from "../constants/focusable";

export const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS),
  );
};

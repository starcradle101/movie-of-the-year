import { NAME_VALIDATION } from "./../constants/validation";

const hasEmoji = (text: string): boolean => {
  return NAME_VALIDATION.patterns.emoji.test(text);
};

const hasValidChars = (text: string): boolean => {
  return NAME_VALIDATION.patterns.validChars.test(text);
};

export const validateName = (name: string): ValidationResult => {
  if (!name) {
    return {
      isValid: false,
      message: NAME_VALIDATION.messages.empty,
    };
  }

  if (name !== name.trim()) {
    return {
      isValid: false,
      message: NAME_VALIDATION.messages.space,
    };
  }

  if (hasEmoji(name)) {
    return {
      isValid: false,
      message: NAME_VALIDATION.messages.emoji,
    };
  }

  if (!hasValidChars(name)) {
    return {
      isValid: false,
      message: NAME_VALIDATION.messages.invalidChars,
    };
  }

  if (name.length > NAME_VALIDATION.maxLength) {
    return {
      isValid: false,
      message: NAME_VALIDATION.messages.length,
    };
  }

  return { isValid: true };
};

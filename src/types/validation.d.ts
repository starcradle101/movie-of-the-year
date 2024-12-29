declare type ValidationResult = {
  isValid: boolean;
  message?: string;
};

declare type ValidationRulesKey = "noEmoji" | "onlyKoreanAndEnglish";

declare type ValidationMessageKey =
  | "emoji"
  | "invalidChars"
  | "space"
  | "empty"
  | "length";

declare type ValidationPatternKey = "emoji" | "validChars";

declare type ValidationRules = {
  maxLength: number;
  patterns: Record<ValidationPatternKey, RegExp>;
  messages: Record<ValidationMessageKey, string>;
  rules: Record<ValidationRulesKey, boolean>;
};

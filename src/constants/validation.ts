export const NAME_VALIDATION: ValidationRules = {
  maxLength: 10,
  rules: {
    noEmoji: true,
    onlyKoreanAndEnglish: true,
  },
  patterns: {
    emoji: /[\u{1F300}-\u{1F9FF}]/u,
    validChars: /^[가-힣a-zA-Z0-9]+$/,
  },
  messages: {
    emoji: "이모지는 사용할 수 없어요.",
    invalidChars: "한글, 영문, 숫자만 사용할 수 있어요",
    empty: "이름을 입력해 주세요.",
    length: "10글자 이하로 입력해 주세요.",
    space: "공백은 사용할 수 없어요.",
  },
};

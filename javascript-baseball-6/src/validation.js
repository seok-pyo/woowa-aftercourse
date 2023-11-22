const validate = {
  type(userInput) {
    const numberCheck = /[^1-9]/;
    if (!userInput || numberCheck.test(userInput))
      throw new Error('[ERROR] 잘못된 입력입니다.');
  },

  length(userInput) {
    if (userInput.length !== 3) throw new Error('[ERROR] 잘못된 입력입니다.');
  },

  sameNumber(userInput) {
    if (new Set(userInput).size !== userInput.length)
      throw new Error('[ERROR] 잘못된 입력입니다.');
  },
};

export default validate;

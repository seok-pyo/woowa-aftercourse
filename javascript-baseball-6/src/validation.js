const validate = {
  type(userInput) {
    const numberCheck = /[^1-9]/;
    if (numberCheck.test(userInput)) throw new Error('잘못된 입력입니다.');
  },
};

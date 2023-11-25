const validate = {
  entry(input) {
    if (!input) throw new Error('[ERROR] 잘못된 입력값입니다.');
    const array = input.split(',').map(carName => carName.trim());
    if (array.length !== new Set(array).size)
      throw new Error('[ERROR] 입력에 중복값이 있습니다.');

    if (array.some(carName => carName.length > 5 || carName.length === 0))
      throw new Error(
        '[ERROR] 자동차의 이름은 0보다 크고 5보다 작게 입력해주세요.',
      );
  },
};

export default validate;

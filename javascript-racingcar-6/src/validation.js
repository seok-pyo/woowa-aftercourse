const validate = {
  entry(input) {
    if (!input) throw new Error('[ERROR] 잘못된 입력값입니다.');
    const array = input.split(',').map(carName.trim());
    if (
      array.length !== new Set(array).size ||
      array.filter(carName => carName.length > 5 || carName.length < 0)
    )
      throw new Error('[ERROR] 입력에 중복값이 있습니다.');
  },
};

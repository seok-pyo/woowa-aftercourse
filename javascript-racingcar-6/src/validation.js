import { NUMBER, NAME } from './constants.js';

const validate = {
  entry(input) {
    if (!input) throw new Error('[ERROR] 잘못된 입력값입니다.');
    const array = input.split(',').map(carName => carName.trim());
    if (array.length !== new Set(array).size)
      throw new Error('[ERROR] 입력에 중복값이 있습니다.');

    if (
      array.some(
        carName =>
          carName.length > NAME.LIMIT || carName.length === NUMBER.DEFAULT,
      )
    )
      throw new Error(
        '[ERROR] 자동차의 이름은 0보다 크고 5보다 작게 입력해주세요.',
      );
  },

  length(input) {
    if (!input || NUMBER.TEST.test(input))
      throw new Error('[ERROR] 실행 횟수는 숫자를 입력해 주세요.');

    if (input.length > 2)
      throw new Error('[ERROR] 3자리수까지 입력 가능합니다.');
  },
};

export default validate;

import validate from '../src/validation.js';

describe('유효성 검사 테스트', () => {
  test('숫자가 아닌 입력이 들어올 경우 예외를 발생시킨다.', () => {
    const input = '1a3';
    expect(() => validate.type(input)).toThrow('[ERROR] 잘못된 입력입니다.');
  });

  test('입력값의 길이가 3이 안되는 경우 예외를 발생시킨다', () => {
    const input = '1354';

    expect(() => validate.length(input)).toThrow('[ERROR] 잘못된 입력입니다.');
  });
});

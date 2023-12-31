import validate from '../src/validation.js';

describe('validation 테스트', () => {
  test('자동차 이름의 길이가 0보다 작거나 5보다 크면 에러를 반환한다.', () => {
    const input = 'pobi,woni,junjun,';

    expect(() => validate.entry(input)).toThrowError(
      '[ERROR] 자동차의 이름은 0보다 크고 5보다 작게 입력해주세요.',
    );
  });

  test('자동차 이름이 중복되는 경우 에러를 반환한다.', () => {
    const input = 'pobi,pobi,woni,jun';

    expect(() => validate.entry(input)).toThrowError(
      '[ERROR] 입력에 중복값이 있습니다.',
    );
  });

  test('실행횟수가 숫자가 아닌 경우 에러를 반환한다.', () => {
    const input = '$';

    expect(() => validate.length(input)).toThrowError();
  });
});

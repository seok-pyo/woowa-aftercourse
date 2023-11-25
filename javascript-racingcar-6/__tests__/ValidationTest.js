import validate from '../src/validation.js';

describe('validation 테스트', () => {
  test('자동차 이름의 길이가 0보다 작거나 5보다 크면 에러를 반환한다.', () => {
    const input = 'pobi,woni,junjun,';

    // const result = validate.entry(input);
    // expect(result).toThrowError('[ERROR]');
    // 위와 같은 형태로 작성하게 되면, validate가 이미 실행된 값이 result에 들어가기 때문에 테스트는 실패한다.

    expect(() => validate.entry(input)).toThrowError(
      '[ERROR] 자동차의 이름은 0보다 크고 5보다 작게 입력해주세요.',
    );
  });
});

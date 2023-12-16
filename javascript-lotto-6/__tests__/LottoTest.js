import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  // test('당첨 등수를 반환한다.', () => {
  //   const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  //   const sameNumber = 5;
  //   const notSameNumber = 2;
  //   const bonusNumber = 2;

  //   const result = lotto.makeResult(sameNumber, notSameNumber, bonusNumber);

  //   expect(result).toBe(2);
  // });

  // test('checker 메서드 테스트', () => {
  //   const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  //   const result = lotto.checker([1, 2, 3, 4, 5, 9], 6);

  //   expect(result).toBe(2);
  // });
});

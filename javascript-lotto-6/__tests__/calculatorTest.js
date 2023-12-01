import calculate from '../src/calculator.js';

describe('수익률 계산기 테스트', () => {
  test('구입금액과 당첨금을 넣으면 수익률을 반환한다.', () => {
    const money = 8000;
    const profit = 5000;

    const result = calculate.profitRate(money, profit);

    expect(result).toBe(62.5);
  });
});

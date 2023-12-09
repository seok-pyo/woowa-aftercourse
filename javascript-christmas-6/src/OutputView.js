import Discount from './discountCheck.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(order) {
    Console.print('\n<주문 메뉴>');
    for (const [key, value] of Object.entries(order)) {
      Console.print(`${key} ${value}개`);
    }
  },
  printGift(price) {
    const result = Discount.giftCheck(price);
    if (result) Console.print('샴페인 1개');
    else Console.print('없음');
  },

  printBenefit(day, quantity, total) {
    Console.print(`크리스마스 디데이 할인: -${Discount.dDayCheck(day)}원`);

    if (Discount.weekendCheck(day) && quantity[0] !== 0) {
      Console.print(`주말 할인: -${quantity[0] * 2023}원`);
    } else if (quantity[1] !== 0) {
      Console.print(`평일 할인: -${quantity[1] * 2023}원`);
    }

    if (Discount.starCheck(day)) Console.print(`특별 할인: 1,000원`);

    if (total > 120_000) Console.print('증정 이벤트: -25,000원');
  },
};

export default OutputView;

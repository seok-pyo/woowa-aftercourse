import Discount from './discountCheck.js';
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printTitle(day) {
    Console.print(
      `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },

  printMenu(order) {
    Console.print('\n<주문 메뉴>');
    for (const [key, value] of Object.entries(order)) {
      Console.print(`${key} ${value}개`);
    }
  },

  printTotalPrice(totalPrice) {
    Console.print(`\n<할인 전 총주문 금액>`);
    Console.print(`${totalPrice}원`);
  },

  printGift(price) {
    const result = Discount.giftCheck(price);
    Console.print('\n<증정 메뉴>');
    if (result) Console.print('샴페인 1개');
    else Console.print('없음');
  },

  printBenefit(day, quantity, total) {
    Console.print('\n<혜택 내역>');
    if (total < 10000) {
      Console.print('없음');
      return;
    }
    Console.print(`크리스마스 디데이 할인: -${Discount.dDayCheck(day)}원`);

    if (Discount.weekendCheck(day) && quantity[0] !== 0) {
      Console.print(`주말 할인: -${quantity[0] * 2023}원`);
    } else if (quantity[1] !== 0) {
      Console.print(`평일 할인: -${quantity[1] * 2023}원`);
    }

    if (Discount.starCheck(day)) Console.print(`특별 할인: 1,000원`);

    if (total > 120_000) Console.print('증정 이벤트: -25,000원');
  },

  printTotalBenefit(day, quantity, totalPrice) {
    let totalBenefit = 0;
    totalBenefit += Discount.dDayCheck(day);
    if (Discount.weekendCheck(day) && quantity[0] !== 0) {
      totalBenefit += quantity[0] * 2023;
    } else if (quantity[1] !== 0) {
      totalBenefit += quantity[1] * 2023;
    }
    if (Discount.starCheck) totalBenefit += 1000;
    if (totalPrice >= 120_000) totalBenefit += 25000;
    Console.print(`\n<총혜택 금액>\n-${totalBenefit}원`);
    Console.print(
      `\n<할인 후 예상 결제 금액>\n${totalPrice - totalBenefit + 25000}원`,
    );
    return totalBenefit;
  },

  printBadge(totalBenefit) {
    let badge = '';
    if (totalBenefit < 5000) badge = '없음';
    if (totalBenefit >= 5000 && totalBenefit < 10000) badge = '별';
    if (totalBenefit >= 10000 && totalBenefit < 20000) badge = '트리';
    if (totalBenefit >= 20000) badge = '산타';

    Console.print(`\n<12월 이벤트 배지>\n${badge}`);
  },
};

export default OutputView;

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
    if (result) Console.print('샴페인 1개 증정');
    else Console.print('없음');
  },
};

export default OutputView;

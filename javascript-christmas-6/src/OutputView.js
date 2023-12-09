import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(order) {
    Console.print('\n<주문 메뉴>');
    for (const [key, value] of Object.entries(order)) {
      Console.print(`${key} ${value}개`);
    }
  },
  // ...
};

export default OutputView;

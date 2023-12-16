import constant from './constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const output = {
  quantity(number) {
    MissionUtils.Console.print(`\n${number}개를 구매했습니다.`);
  },

  number(lottos) {
    lottos.forEach(lotto => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  resultMessage() {
    MissionUtils.Console.print('\n당첨 통계\n---');
  },

  result(rank) {
    for (let i = 0; i < 5; i++) {
      MissionUtils.Console.print(
        `${constant.match[i]}개 일치${constant.description[i]} - ${rank[i]}개`,
      );
    }
  },

  profit(resultProfit) {
    MissionUtils.Console.print(
      `총 수익률은 ${resultProfit.toLocaleString()}%입니다.`,
    );
  },
};

export default output;

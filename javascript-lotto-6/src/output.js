import { MissionUtils } from '@woowacourse/mission-utils';

const output = {
  quantity(number) {
    MissionUtils.Console.print(`${number}개를 구매했습니다.`);
  },

  number(lottos) {
    lottos.forEach(lotto => {
      MissionUtils.Console.print(lotto.getNumbers());
    });
  },

  resultMessage() {
    MissionUtils.Console.print('당첨 통계\n---');
  },

  result(message, resultNumber) {
    MissionUtils.Console.print(
      `${message.rankNumber}개 일치${message.price} - ${resultNumber}개`,
    );
  },

  protif(resultProfit) {
    MissionUtils.Console.print(`총 수익률은 ${resultProfit}입니다.`);
  },
};

export default output;

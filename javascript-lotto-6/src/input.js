import { MissionUtils } from '@woowacourse/mission-utils';

const input = {
  async money() {
    const money =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');

    return money;
  },

  async winningNum() {
    const winningNumber =
      await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요.');

    return winningNumber;
  },

  async bonusNum() {
    const bonusNumber =
      await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');

    return bonusNumber;
  },
};

export default input;

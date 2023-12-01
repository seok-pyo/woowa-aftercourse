import { MissionUtils } from '@woowacourse/mission-utils';

const input = {
  async money() {
    const money =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    const quantity = money / 1000;

    return { money, quantity };
  },
};

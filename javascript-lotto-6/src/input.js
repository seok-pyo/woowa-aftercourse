import { MissionUtils } from '@woowacourse/mission-utils';

const input = {
  async money() {
    const reg = /[^0-9]/;
    try {
      const money =
        await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      if (reg.test(money)) throw new Error();
      return money;
    } catch (error) {
      MissionUtils.Console.print('[ERROR] 잘못된 입력입니다.');
      return input.money();
    }
  },

  async winningNum() {
    try {
      const winningNumber =
        await MissionUtils.Console.readLineAsync(
          '\n당첨 번호를 입력해주세요.\n',
        );
      const numberArray = winningNumber.split(',').map(str => Number(str));
      if (numberArray.length !== 6) throw new Error();
      if (!numberArray.every(num => isNaN(this.bonusNum))) throw new Error();
      return winningNumber;
    } catch (error) {
      MissionUtils.Console.print('[ERROR] 잘못된 입력입니다.');
      return input.winningNum();
    }
  },

  async bonusNum() {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n',
      );
      if (isNaN(bonusNumber)) throw new Error();
      if (bonusNumber > 45 || bonusNumber < 1) throw new Error();
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print('[ERROR] 잘못된 입력입니다.');
      return input.bonusNum();
    }
  },
};

export default input;

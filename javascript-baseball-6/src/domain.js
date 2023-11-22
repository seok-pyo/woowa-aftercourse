import validate from './validation.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class BaseballGame {
  constructor() {
    this.computer = [];
  }

  makeNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
    return this.computer;
  }

  async getNumber() {
    const userNumber =
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
    validate.type(userNumber);
    validate.length(userNumber);
    validate.sameNumber(userNumber);
    return userNumber.split('');
  }

  compareNumber(user) {
    const result = {
      ball: 0,
      strike: 0,
    };

    this.computer.forEach((number, index) => {
      if (number === Number(user[index])) result.strike += 1;
      if (user.includes(number.toString())) result.ball += 1;
    });

    result.ball = result.ball - result.strike;
    return result;
  }

  async getResult() {
    const userNumber = await this.getNumber();
    const result = this.compareNumber(userNumber);
    this.judgeCall(result);
    if (result.strike === 3) return true;
    return false;
  }

  judgeCall(result) {
    let call = '';
    if (result.ball !== 0) call += `${result.ball}볼 `;
    if (result.strike !== 0) call += `${result.strike}스트라이크`;
    if (result.ball === 0 && result.strike === 0) call += '낫싱';
    MissionUtils.Console.print(call);
  }

  async play() {
    this.makeNumber();
    let condition = false;

    while (!condition) {
      condition = await this.getResult();
    }
  }
}

export default BaseballGame;

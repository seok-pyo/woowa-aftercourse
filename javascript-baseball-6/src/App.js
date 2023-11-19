import validate from './validation.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computer = [];
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.game();
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
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    validate.type(userNumber);
    validate.length(userNumber);
    return userNumber.split('');
  }

  compareNumber(user) {
    const result = {
      ball: 0,
      strike: 0,
    };
    this.computer.forEach((number, index) => {
      if (number === Number(user[index])) result.strike += 1;
      else if (user.includes(number.toString())) result.ball += 1;
    });
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

  async game() {
    this.makeNumber();
    let condition = false;

    while (!condition) {
      condition = await this.getResult();
    }

    if (condition) await this.restart();
  }

  async getRestartInput() {
    const reStartInput = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    return reStartInput;
  }

  async restart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    let reStartInput;
    do {
      reStartInput = await this.getRestartInput();
      if (reStartInput === '1') {
        await this.play();
        return;
      }
    } while (reStartInput !== '2');
  }
}

// const app = new App();
// await app.play();

export default App;

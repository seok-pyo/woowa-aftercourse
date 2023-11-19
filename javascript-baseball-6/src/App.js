import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.computer = [];
  }

  async play() {}

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
    MissionUtils.Console.print(result);
    if (result.strike === 3) return true;
    return false;
  }

  async game() {
    this.makeNumber();
    let condition = false;

    while (!condition) {
      condition = await this.getResult();
    }

    if (condition) this.restart();
  }

  async getRestartInput() {
    const reStartInput = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    return reStartInput;
  }

  async restart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    let reStartInput = await this.getRestartInput();
    let condition = false;

    while (!condition) {
      if (reStartInput === '1') {
        this.game();
        condition = true;
        return;
      } else if (reStartInput === '2') {
        condition = true;
        return;
      } else {
        reStartInput = await this.getRestartInput();
      }
    }
  }
}

// const app = new App();
// await app.game();

export default App;

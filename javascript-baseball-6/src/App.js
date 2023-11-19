import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {}

  makeNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getNumber() {
    const userNumber = MissionUtils.Console.readLineAsyn('숫자를 입력해주세요');
    return userNumber.split();
  }

  compareNumber(computer, user) {
    const result = {
      ball: 0,
      strike: 0,
    };
    computer.forEach((number, index) => {
      if (number === user[index]) result.strike += 1;
      else if (user.includes(number)) result.ball += 1;
    });
    return result;
  }
}

export default App;

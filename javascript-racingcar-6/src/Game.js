import Car from './Car.js';
import validate from './validation.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  #entry;
  #length;

  constructor() {
    this.#entry = new Map();
    this.#length = null;
  }

  async getEntry() {
    const carName = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    validate.entry(carName);

    carName.split(',').forEach(name => {
      const car = new Car(name.trim());
      this.#entry.set(name.trim(), car);
    });
  }

  async getLength() {
    const input =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    validate.length(input);

    this.#length = input;
  }

  printResult() {
    MissionUtils.Console.print(`\n실행 결과`);
    Array.from({ length: this.#length }, () => {
      for (const [name, car] of this.#entry.entries()) {
        car.goForward();
        MissionUtils.Console.print(
          `${name} : ${'-'.repeat(car.getDistance())}`,
        );
      }
      MissionUtils.Console.print('');
    });
  }

  printWinner() {
    const winner = [];
    for (const [name, car] of this.#entry.entries()) {
      if (car.getDistance() === Number(this.#length)) winner.push(name);
    }

    MissionUtils.Console.print(
      winner.length
        ? `최종 우승자 : 없음`
        : `최종 우승자 : ${winner.join(',')} `,
    );
  }

  async startGame() {
    await this.getEntry();
    await this.getLength();
    this.printResult();
    this.printWinner();
  }
}

export default Game;

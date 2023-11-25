import Car from './Car.js';
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

    carName.split(',').forEach(name => {
      const car = new Car(name.trim());
      this.#entry.set(name, car);
    });
  }

  async getLength() {
    this.#length =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  play() {
    Array.from({ length: this.#length }, () => {
      for (const [name, car] of this.#entry.entries()) {
        car.goForward();
        MissionUtils.Console.print(`${name} : ${car.getDistance()}`);
      }
      MissionUtils.Console.print('');
    });
  }
}

const game = new Game();
await game.getEntry();
await game.getLength();
game.play();

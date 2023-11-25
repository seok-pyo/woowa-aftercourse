import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  #entry;
  #length;

  constructor() {
    this.#entry = new Map();
  }

  async getEntry() {
    const carName = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );

    carName.split(',').forEach(name => {
      const car = new Car(name.trim());
      this.#entry.set(name, car);
    });
  }

  async getLength() {
    this.#length =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  }

  play() {}
}

const game = new Game();
await game.getEntry();
game.getLength();

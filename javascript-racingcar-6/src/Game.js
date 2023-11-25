import Car from './Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  #entry;

  constructor() {
    this.#entry = [];
  }

  async getEntry() {
    const carName = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );

    carName.split(',').forEach(name => {
      const car = new Car(name.trim());
      this.#entry.push(car);
    });
  }
}

const game = new Game();
game.getEntry();

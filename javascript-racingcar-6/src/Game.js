import Car from './Car.js';
import validate from './validation.js';
import { MESSAGE, SYMBOLS } from './constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  #entry;
  #length;

  constructor() {
    this.#entry = new Map();
    this.#length = null;
  }

  async getEntry() {
    const carName = await MissionUtils.Console.readLineAsync(MESSAGE.ENTRY);

    validate.entry(carName);

    carName.split(SYMBOLS.COMMA).forEach(name => {
      const car = new Car(name.trim());
      this.#entry.set(name.trim(), car);
    });
  }

  async getLength() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.LENGTH);

    validate.length(input);

    this.#length = input;
  }

  printResult() {
    MissionUtils.Console.print(MESSAGE.RESULT);
    Array.from({ length: this.#length }, () => {
      for (const [name, car] of this.#entry.entries()) {
        car.goForward();
        MissionUtils.Console.print(
          `${name} : ${SYMBOLS.DASH.repeat(car.getDistance())}`,
        );
      }
      MissionUtils.Console.print(SYMBOLS.BLANK);
    });
  }

  printWinner() {
    const winner = [];
    for (const [name, car] of this.#entry.entries()) {
      if (car.getDistance() === Number(this.#length)) winner.push(name);
    }

    MissionUtils.Console.print(
      winner.length
        ? `${MESSAGE.WINNER}${winner.join(SYMBOLS.COMMA)}`
        : MESSAGE.WINNER + MESSAGE.NONE,
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

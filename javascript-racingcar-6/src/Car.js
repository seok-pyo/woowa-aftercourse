import { NUMBER } from './constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = NUMBER.DEFAULT;
  }

  goForward() {
    const forwardCheck = MissionUtils.Random.pickNumberInRange(
      NUMBER.DEFAULT,
      NUMBER.LIMIT,
    );
    if (forwardCheck >= NUMBER.LEAST) this.#distance += NUMBER.MOVE_DISTANCE;
  }

  getDistance() {
    return this.#distance;
  }
}

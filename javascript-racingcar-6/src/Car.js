import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  goForward() {
    const forwardCheck = MissionUtils.Random.pickNumberInRange(0, 9);
    if (forwardCheck >= 4) this.#distance += 1;
  }

  getDistance() {
    return this.#distance;
  }
}

import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  goForward() {
    // if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) return true;
    // else false;
    const forwardCheck = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    if (forwardCheck >= 4) this.#distance += 1;

    return forwardCheck >= 4;
  }

  getDistance() {
    return this.#distance;
  }
}

import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  constructor(name) {
    this.#name = name;
  }

  goForward() {
    // if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) return true;
    // else false;
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }
}

import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  #name;
  constructor(name) {
    this.#name = name;
  }

  goFoward() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) return true;
  }
}

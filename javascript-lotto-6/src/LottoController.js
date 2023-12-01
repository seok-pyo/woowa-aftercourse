import input from './input.js';
import output from './output.js';
import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoController {
  #money;
  #lottos = [];

  async inputMoney() {
    this.#money = await input.money();
  }

  makeLotto() {
    for (let i = 0; i < this.#money / 1000; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  printLotto() {
    output.quantity(this.#money / 1000);
    output.number(this.#lottos);
  }
}

// const lc = new LottoController();
// await lc.inputMoney();
// lc.makeLotto();
// lc.printLotto();

export default LottoController;

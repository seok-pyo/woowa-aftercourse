import input from './input.js';
import output from './output.js';
import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoController {
  #money;
  #winningNum;
  #bonusNum;
  #rank = [0, 0, 0, 0, 0];
  #lottos = [];

  async inputMoney() {
    this.#money = await input.money();
  }

  async inputWinningNum() {
    this.#winningNum = await input.winningNum();
  }

  async inputBonusNum() {
    this.#bonusNum = await input.bonusNum();
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

  makeResult() {
    this.#lottos.forEach(lotto => {
      const index = lotto.checker(this.#winningNum, this.#bonusNum) - 1;
      this.#rank[index] += 1;
    });
  }
}

const lc = new LottoController();
await lc.inputMoney();
lc.makeLotto();
lc.printLotto();
await lc.inputWinningNum();
await lc.inputBonusNum();
lc.makeResult();

export default LottoController;

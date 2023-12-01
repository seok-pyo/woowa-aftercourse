import input from './input.js';
import output from './output.js';
import Lotto from './Lotto.js';
import calculate from './calculator.js';
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
      const index = lotto.checker(this.#winningNum, this.#bonusNum);
      this.#rank[index] += 1;
    });
  }

  printResult() {
    output.result(this.#rank);
  }

  printProfit() {
    output.profit(calculate.profitRate(this.#money, this.#rank));
  }

  async start() {
    await this.inputMoney();
    this.makeLotto();
    this.printLotto();
    await this.inputWinningNum();
    await this.inputBonusNum();
    this.makeResult();
    output.resultMessage();
    this.printResult();
    this.printProfit();
  }
}

export default LottoController;

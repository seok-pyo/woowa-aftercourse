import BaseballGame from './domain.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.rePlay();
  }

  async getRestartInput() {
    const reStartInput = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    return reStartInput;
  }

  async rePlay() {
    this.game.makeNumber();
    let condition = false;

    while (!condition) {
      condition = await this.game.getResult();
    }
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    await this.restart();
  }

  async restart() {
    let reStartInput = await this.getRestartInput();
    let condition = false;

    while (!condition) {
      if (reStartInput === '1') {
        await this.rePlay();
        condition = true;
      }
      if (reStartInput === '2') break;
      if (reStartInput !== '1' && reStartInput !== '2')
        throw new Error('잘못된 입력입니다.');
    }
  }
}

export default App;

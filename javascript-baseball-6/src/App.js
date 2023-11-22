import BaseballGame from './domain.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.game = new BaseballGame();
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.game.play();
    await this.restart();
  }

  async getRestartInput() {
    const reStartInput = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    return reStartInput;
  }

  async restart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

    let reStartInput;
    // do {
    //   reStartInput = await this.getRestartInput();
    //   if (reStartInput === '1') {
    //     return this.game.play();
    //   }
    // } while (reStartInput !== '2');
    while (reStartInput !== '1') {
      reStartInput = await this.getRestartInput();
      if (reStartInput === '1') {
        return this.game.play();
      }
      if (reStartInput === '2') break;
      if (reStartInput !== '2') throw new Error('잘못된 입력입니다.');
    }
  }
}

export default App;

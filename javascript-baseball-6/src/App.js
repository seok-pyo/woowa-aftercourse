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
    do {
      reStartInput = await this.getRestartInput();
      if (reStartInput === '1') {
        await this.game.play();
        return;
      }
    } while (reStartInput !== '2');
  }
}

export default App;

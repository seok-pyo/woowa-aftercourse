import LottoController from './LottoController.js';

class App {
  lottoController = new LottoController();

  async play() {
    await this.lottoController.start();
  }
}

export default App;

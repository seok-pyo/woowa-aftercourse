import Server from './Server.js';

class App {
  constructor() {
    this.server = new Server();
  }
  async run() {
    await this.server.getInput();
    await this.server.getMenu();
    this.server.printTitle();
    this.server.printMenu();
    this.server.getTotalPrice();
    this.server.printTotal();
    this.server.printGift();
    this.server.printBenefit();
    this.server.printTotalBenefit();
  }
}

export default App;

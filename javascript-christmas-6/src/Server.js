import InputView from './InputView.js';
import OutputView from './OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Server {
  #date;
  #order;

  async getInput() {
    while (true) {
      try {
        this.#date = await InputView.readDate();
        if (this.#date === '0') throw new Error();
        break;
      } catch (e) {
        MissionUtils.Console.print('[ERROR]');
      }
    }
  }

  async getMenu() {
    while (true) {
      try {
        return await InputView.readMenu();
      } catch (e) {
        MissionUtils.Console.print('[ERROR}');
      }
    }
  }

  async parsingMenu(order) {
    let tmp = await this.getMenu();
    const menuItem = tmp.split(',');
    const parsedMenu = {};

    menuItem.forEach(item => {
      const [menu, quantity] = item.split('-');
      parsedMenu[menu] = parseInt(quantity, 10);
    });
    this.#order = parsedMenu;
  }

  printMenu() {
    OutputView.printMenu(this.#order);
  }
}

const server = new Server();
await server.getInput();
await server.parsingMenu();
server.printMenu();

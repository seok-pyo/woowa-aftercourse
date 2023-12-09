import InputView from './InputView.js';
import OutputView from './OutputView.js';
import menu from './menu.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Server {
  #date;
  #order;
  #totalPrice;

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

  checkMenu(menuData, menuItem) {
    for (const category in menuData) {
      if (menuData[category].hasOwnProperty(menuItem)) {
        return menuData[category][menuItem];
      }
    }
  }

  getTotalPrice() {
    let price = 0;
    for (const [key, value] of Object.entries(this.#order)) {
      price += this.checkMenu(menu, key) * value;
    }
    this.#totalPrice = price;
  }

  printGift() {
    OutputView.printGift(this.#totalPrice);
  }
}

const server = new Server();
await server.getInput();
await server.parsingMenu();
server.printMenu();
server.printGift();

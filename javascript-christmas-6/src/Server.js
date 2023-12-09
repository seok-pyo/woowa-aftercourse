import InputView from './InputView.js';
import OutputView from './OutputView.js';
import validate from './validation.js';
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
        validate.date(this.#date);
        break;
      } catch (e) {
        MissionUtils.Console.print(e.message);
      }
    }
  }

  async getMenu() {
    while (true) {
      try {
        let tmp = await InputView.readMenu();
        validate.order(tmp);
        this.parsingMenu(tmp);
        break;
      } catch (e) {
        MissionUtils.Console.print(e.message);
      }
    }
  }

  parsingMenu(tmp) {
    const menuItem = tmp.split(',');
    const parsedMenu = {};

    menuItem.forEach(item => {
      const [menu, quantity] = item.split('-');
      parsedMenu[menu] = parseInt(quantity, 10);
    });
    this.#order = parsedMenu;
  }

  printTitle() {
    OutputView.printTitle(this.#date);
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

  printTotal() {
    OutputView.printTotalPrice(this.#totalPrice);
  }

  printGift() {
    OutputView.printGift(this.#totalPrice);
  }

  getCategory(menuData, menuItem) {
    for (const category in menuData) {
      if (menuData[category].hasOwnProperty(menuItem)) {
        return category;
      }
    }
  }

  countCategory() {
    const quantityCategory = [0, 0];
    for (const key of Object.keys(this.#order)) {
      if (this.getCategory(menu, key) === '메인') {
        quantityCategory[0] += this.#order[key];
      } else if (this.getCategory(menu, key) === '디저트') {
        quantityCategory[1] += this.#order[key];
      }
    }
    return quantityCategory;
  }

  printBenefit() {
    OutputView.printBenefit(this.#date, this.countCategory(), this.#totalPrice);
  }

  printTotalBenefit() {
    const totalBenefit = OutputView.printTotalBenefit(
      this.#date,
      this.countCategory(),
      this.#totalPrice,
    );
    OutputView.printBadge(totalBenefit);
  }
}

export default Server;

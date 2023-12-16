class Discount {
  static dDayCheck(day) {
    const amount = 1000;
    if (day > 25) return 0;
    return amount + (day - 1) * 100;
  }

  static weekendCheck(day) {
    let isWeekend = true;
    const dayNum = new Date(2023, 12 - 1, day);
    if (dayNum.getDay() < 5) {
      isWeekend = false;
    }
    return isWeekend;
  }

  static starCheck(day) {
    let isStar = false;
    const dayNum = new Date(2023, 12 - 1, day);
    if (dayNum.getDay() === 0 || day === 25) {
      isStar = true;
      return isStar;
    }

    return isStar;
  }

  static giftCheck(totalPrice) {
    let result = false;

    if (totalPrice >= 120000) {
      result = true;
      return result;
    }
    return result;
  }
}

export default Discount;

class Discount {
  static dDayCheck(day) {
    const amount = 1000;
    if (day > 25) return 0;
    if (day <= 25 && day >= 1) {
      return amount + day * 100;
    }
  }
  static weekCheck(day) {
    const isWeekend = true;
    const dayNum = new Date(2023, 12 - 1, day);
    if (dayNum < 5) {
      isWeekend = false;
      return isWeekend;
    }
    if (5 <= dayNum) {
      return isWeekend;
    }
  }
  static starCheck(day) {
    const isStar = false;
    const dayNum = new Date(2023, 12 - 1, day);
    if (dayNum === 0 || dayNum === 25) {
      isStar = true;
      return isStar;
    }

    return isStar;
  }

  static giftCheck(totalPrice) {
    let result = false;

    if (totalPrice >= 120_000) {
      result = true;
      return result;
    }
    return result;
  }
}

export default Discount;

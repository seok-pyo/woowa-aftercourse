import constant from './constants.js';

const calculate = {
  profitRate(money, rank) {
    const profit = rank.reduce(
      (acc, cur, idx) => acc + cur * constant.price[idx],
      0,
    );
    return profit ? Number(((profit / money) * 100).toFixed(1)) : 0;
  },
};

export default calculate;

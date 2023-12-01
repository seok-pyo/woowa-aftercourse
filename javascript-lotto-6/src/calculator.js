const calculate = {
  profitRate: (money, profit) => {
    return Number(((profit / money) * 100).toFixed(1));
  },
};

export default calculate;

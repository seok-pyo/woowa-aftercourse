const validate = {
  date(day) {
    if (day < 1 || day > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    if (/[^1-9]/.test(day))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  },
  order(tmp) {
    const menuItem = tmp.split(',');
    menuItem.forEach(item => {
      if (!/-/g.test(item))
        throw new Error(
          '[ERROR] 유효하지 않은 입력입니다. 다시 입력해 주세요.',
        );
      if (/^\D+$/.test(item))
        throw new Error(
          '[ERROR] 유효하지 않은 입력입니다. 다시 입력해 주세요.',
        );
    });
  },
};

export default validate;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복된 숫자입니다.');
    }
  }

  checker(winningNumbers, bonusNumber) {
    let sameNumber = 0;
    let notSameNumber = 0;

    this.#numbers.forEach(number => {
      if (winningNumbers.includes(number)) sameNumber += 1;
      else notSameNumber = number;
    });

    return this.makeResult(sameNumber, notSameNumber, bonusNumber);
  }

  makeResult(sameNumber, notSameNumber, bonusNumber) {
    let result = null;
    if (sameNumber === 3) result = 0;
    if (sameNumber === 4) result = 1;
    if (sameNumber === 5 && notSameNumber !== Number(bonusNumber)) result = 2;
    if (sameNumber === 5 && notSameNumber === Number(bonusNumber)) result = 3;
    if (sameNumber === 6) result = 4;
    return result;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;

const MESSAGE = {
  ENTRY: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  LENGTH: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '\n실행 결과',
  WINNER: '최종 우승자 : ',
  NONE: '없음',
};

const SYMBOLS = {
  COMMA: ',',
  DASH: '-',
  BLANK: '',
};

const NUMBER = {
  DEFAULT: 0,
  LIMIT: 9,
  MOVE_DISTANCE: 1,
  LEAST: 4,
  TEST: /[^0-9]/,
};

const NAME = {
  LIMIT: 5,
};

export { MESSAGE, SYMBOLS, NUMBER, NAME };

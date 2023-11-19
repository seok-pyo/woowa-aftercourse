import App from '../src/App';
import { Console } from '@woowacourse/mission-utils';

describe('기능 테스트', () => {
  test('1에서 9사이에 서로 다른 숫자 3개를 생성한다.', () => {
    const app = new App();
    const result = app.makeNumber();
    Console.print(result);
  });

  test('컴퓨터와 사용자의 숫자를 입력받아서 결과를 출력한다', () => {
    const com = [4, 2, 5];
    const user = [4, 5, 6];

    const app = new App();
    const result = app.compareNumber(com, user);

    Console.print(result);
  });
});

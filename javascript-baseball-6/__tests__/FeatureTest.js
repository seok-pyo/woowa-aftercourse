import App from '../src/App';
import { Console } from '@woowacourse/mission-utils';

describe('기능 테스트', () => {
  test('1에서 9사이에 서로 다른 숫자 3개를 생성한다.', () => {
    const app = new App();
    const result = app.makeNumber();
    Console.print(result);
  });
});

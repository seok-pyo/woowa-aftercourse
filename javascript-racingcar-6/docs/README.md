\*\*\* 자동차 경주

\*\* 기능요구사항

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
  - [x] 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- [x] 각 자동차에 이름을 부여할 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- [x] 자동차 경주 게임을 완료한 후에 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
  - [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- [x] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.

\*\* 입력

- 경주 할 자동차 이름(쉼표로 구분)
- 시도할 횟수

\*\* 출력

- 각 차수별 실행 결과
- 우승자 안내 문구
  - 단독우승자 안내 문구
  - 공동우승자 안내 문구

\*\* 전체구조

App.js

- Game 인스턴스 생성
- game.play() 메서드 실행

Car.js

- '자동차 이름'과 '주행거리'를 필드값으로 가짐
- 이동하는 메서드 goForward
- 거리값 반환하는 메서드 getDistance

Game.js

- 뷰와 컨트롤러 역할
- 자동차 객체를 값으로 하는 entry 맵과 실행횟수 length를 필드값으로 가짐
- 자동차 이름을 입력받고, entry 필드에 값을 추가하는 getEntry 메서드 (controller)
- 실행횟수를 입력받고, length 필드에 값을 추가하는 getLength 메서드 (controller)
- 전체 주행거리를 출력하는 printResult 메서드 (view)
- 최종 우승자를 출력하는 printWinner 메서드 (view)
- game을 시작하는 gameStart 메서드(getEntry, getLength, printResult, printWinner) 호출

validation.js

- entry 함수와, length 함수를 값으로 가지는 객체
- entry 함수에서는 자동차 길이와 중복값 확인
- length 함수에서는 실행횟수가 숫자인지, 타입 확인

\*\* 고민 내용

1. 주행거리 값을 누가 관리해야 할 지 고민.

- 처음엔 Game이 가지고 있는것도 괜찮을 거라고 생각했는데, 출력형태를 만들다 보니 자동차 객체가 관리하는 편이 좋겠다고 판단했습니다.

2. 컨트롤러에서 자동차 객체를 관리하는 자료형에 대해서 고민했습니다.

- 배열 형태로 추가해서 진행하다가, 이름도 같이 출력해줘야 해서 Map으로 관리하였습니다.

3. 유틸이 들어간 메서드는 테스트를 진행하지 않는 게 맞을지? 아니면 테스트를 진행하는게 좋을지

4. 객체 생성 부분, constructor? -> 1주차 야구게임 비교

5. 기능 테스트 방법 고민해보기

- 어떤 commit 시점에, 어떤 테스트를 하는게 좋았을지 생각해보기

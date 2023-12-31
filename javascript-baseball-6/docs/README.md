## Baseball

- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임
- 같은 수가 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 없으면 낫싱이란 힌트를 얻고 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
- 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 과정을 반복해서 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

### 기능 목록

- [x] 숫자 생성 후 입력값과 비교해서 결과 출력

  - [x] 숫자 생성
  - [x] 입력값 저장
  - [x] 두 개의 정보 비교

- [x] 3스트라이크가 나오기 전까지 계속해서 입력을 받는다. (flow)
- [x] 3스트라이크가 나오면 재시도 여부를 확인한다.

  - [x] 1을 입력하면 게임을 새로 시작한다.
  - [x] 2를 입력하면 게임을 완전히 종료한다.

- [x] 유효성 검사

  - [x] 숫자가 아닌 경우 예외 발생
  - [x] 3자리수가 아닌 경우 예외 발생
  - [x] 0이 들어간 경우 예외 발생
  - [ ] 숫자 입력에 중복이 있는 경우 예외 발생

- [x] 전체 어플리케이션 구성

### 고민해볼 것

- 반복문과 재귀 이해하기
- 재귀의 경우 테스트는 어떻게? (flow 말고 main 로직만 테스트한다?)
- 빠르게 테스트 적용해보는 방법 고민(게임 플레이 상황)

### 주의할 것

- export default!
- async/await > await reStart();

### 리팩토링 항목

- [x] restart 메서드 리팩토링 > do/while
- [x] domain/view 클래스 분리

  - 사용자 입력을 받는 기능을 좀 더 잘 처리하는 방법?

- else if 삭제하는 방향으로 고민

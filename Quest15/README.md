# Quest 15. 자동화된 테스트

## Introduction
* 이번 퀘스트에서는 자동화된 테스트에 어떤 장점이 있는지, 어떤 식으로 구축할 수 있는지에 대해 알아보겠습니다.

## Topics
* Automated Test
  * TDD
  * Unit Test
  * Integration Test
  * E2E Test
  * Stub & Mock
* Jest
* Puppeteer

## Resources
* [Unit Test (단위 테스트) 도입하기](https://www.popit.kr/unit-test-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-1%ED%8E%B8/)
* [소프트웨어 테스트 안티 패턴](https://velog.io/@leejh3224/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%95%88%ED%8B%B0-%ED%8C%A8%ED%84%B4)
* [End-to-End testing with Puppeteer and Jest](https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321)
* [Mock & Stub](https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub)

## Checklist

- 자동화된 테스트를 만드는 것에는 어떤 장점과 단점이 있을까요?
  - 장점
    - 피로없이 신속하고 효율적으로 버그를 찾을 수 있음
    - 개발자에게 코드에 대한 자신감과 리팩토링에 도움
    - 테스트 결과에 대한 수치화 가능
  - 단점
    - 테스트 코드 시간, 관리비용 증가, 테스트 관련 학습비용 증가
- TDD(Test-Driven Development)란 무엇인가요? TDD의 장점과 단점은 무엇일까요?
  - TDD?
    - 테스트 주도 개발
    - `RED` - `GREEN` - `BLUE` 의 사이클로 개발
      - RED
        - 구체적인 하나의 요구사항을 검증하는 테스트 추가
        - 추가된 테스트가 실패하는지 확인
      - GREEN
        - 추가된 테스트를 포함하여, 모든 테스트가 성공하게끔 운영 코드를 변경
        - 테스트의 성공은 모든 요구사항을 만족했음을 의미
      - REFACTOR(Blue)
        - 리팩토링
        - 인터페이스 뒤에 숨어 있는 구현 설계를 개선
  - 장점
    - 디버깅 시간의 단축, 재설계 시간의 단축
    - 빠른 피드백
    - 테스트 문서의 대체 가능
    - 오버 엔지니어링을 방지
  - 단점
    - 개발시간의 증가 (생산성 저하)
    - 기존 방식을 바꾸어 적용하고 실천하는것에 대한 저항
- 테스트들 간의 계층에 따라 어떤 단계들이 있을까요?
  - 테스트종류
    - 유닛테스트
      - 응용 프로그램에서 테스트 가능한 가장 작은 소프트웨어를 실행하여 예상대로 동작하는지 확인하는 테스트
    - 통합테스트
      - 단위 테스트보다 더 큰 동작을 달성하기 위해 여러 모듈들을 모아 이들이 의도대로 협력하는지 확인하는 테스트
    - 기능테스트(E2E Test, Browser Test)
  - 유닛 테스트, 통합 테스트, E2E 테스트는 각각 어떤 것을 뜻하나요?
  - 테스트에 있어서 Stub과 Mock은 어떤 개념을 가리키는 것일까요?
    - 테스트 더블
      - 테스팅에서 실제 객체를 대신하여 사용하는 모든 방법 (현실에서는 관용적으로 퉁쳐서 Mock이라고 하기도 함)
      - Dummy, Fake, Stub, Spy, Mock
    - Stub (상태 기반)
      - 테스트에서 호출된 요청에 대해 미리 준비해둔 결과를 제공
      - 상태 기반 테스트(state base test)
        - 특정한 메소드를 거친 후, 객체의 상태에 대해 **예상값과 비교**하는 방식이 상태 기반 테스트
    - Mock (행위 기반)
      - 응용 프로그램에서 테스트 가능한 가장 작은 소프트웨어를 실행하여 예상대로 동작하는지 확인하는 객체
      - 행위 기반 테스트(behavior base test)
        - 바른 로직 수행에 대한 판단의 근거로 특정한 **동작의 수행 여부**를 이용
        - 메소드의 리턴값이 없거나 리턴값을 확인하는 것만으로는 예상대로 동작했음을 보증하기 어려운 경우에 사용
- Jest는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?
  - 테스트 도구들은 크게 4가지의 파트로 나눠 생각할 수 있다.
    - **테스트 러너**
      - 테스트 파일을 읽어들이고 코드를 실행, Retporter, Watcher 등의 기능 수행
      - 어짜피 프레임웤과 한몸이기 때문에 테스트 프레임웤과 통합된 형태로 제공
      - Karma ⇒ 브라우저에서 직접 코드 실행러너, Jest ⇒ Node.js 환경에서 코드 실행 러너
    - **테스트 프레임웤**
      - 테스트 코드를 작성할 수 있는 기반을 제공. 프레임웤이 제공하는 함수들로 코드를 작성하면 테스트 실행, 실행 결과 반환등 ⇒ Mocha, Jasmine, AVA, JEST
    - **Assertion 라이브러리**
      - Assertion은 테스트가 통과하기 위한 조건을 명확하게 기술하기 위해 사용됨
      - 보통의 테스트 프레임웤은 기본적인 assertion은 제공한다. (Mocha는 프레임웤과 러너에만 집중하여 assertion 제공x Chai와 같은 라이브러리 권장)
      - 특정 환경에 사용하기 편하거나 필요한 assertion들을 추가하거나 플러그인으로 사용가능
    - **테스트 더블 라이브러리**
      - 실제 객체 대신 테스트를 위해 필요하며 동작하는 객체 (Stub, Spy, Mock 등)
      - 테스트 프레임웤에서 기본 제공되는 경우가 대부분(Mocha의 경우 미포함, Sinon.js 등 권장)
  - Jest 이외의 테스트 프레임워크는 어떤 것이 있고 어떤 장단점이 있을까요?
    - 테스트 프레임웤
      - Mocha
        - 테스트 프레임웤(러너)에만 집중
        - 좋은 문서 찾는데 시간이 걸림
        - Enzyme, Chai, Sinon 등 별도의 Assertoin, 테스트 더블 라이브러리 필요 (유연)
        - 따라서 셋팅을 위해 추가적인 리소스가 생김
      - Jasmine
        - BDD(Behavior-Driven Development) 프레임웤
        - 좋은 문서와 완만한 러닝커브를 가짐
        - 낮은 퍼포먼스, 불친절한 에러로그, 스냅샷관련 라이브러리 셋팅 어려움
    - 통합, E2E
      - Cypress
      - testcafe
      - nightwatch
      - webdriver.io
    - 시각적 테스트
      - applitools
      - percy
      - chromatic
    - 트렌드
      - 최근에는 **Jest**, **Cypress**, **Storybook 과 연계한 시각적테스트 도구**의 연계 조합이 대세인것 같다.
      - 또한 브라우저에서 동작을 레코딩 하여 테스트 코드를 작성할 수 있는 **[QaWolf](https://www.qawolf.com/)**도 눈여겨 볼만한것 같다.
- Puppeteer는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?
  - Puppeteer란?
    - Puppteer는 DevTools 프로토콜을 통해 Chrome 또는 Cromium을 제어할 수 있는 고급 API를 제공하는 노드 라이브러리
    - Puppeteer는 기본적으로 헤드리스로 실행되지만 전체(헤드리스가 아닌 일반 GUI) 크롬 또는 크롬으로 실행되도록 구성할 수 있음
    - 즉, GUI 브라우저를 실행시키지 않더라도 브라우저를 조작할 수 있어서 다용도로 사용할 수 있음
  - 어떻게 사용?
    - 페이지를 스크린샷으로 찍어서 PDF 문서로 변환
    - SPA (Single-Page Application)를 크롤링해서, 서버사이드 렌더링(SSR, Server-Side Rendering)을 위한 컨텐츠를 생성
    - 양식(Form) 제출, UI 테스팅, 키보드 입력 등을 자동화
    - 크롬 확장(Chrome Extensions) 프로그램 테스트
    - 등 테스트 전용 프레임웤이라기보다 범용적으로 사용
  - playwright
    - puppeteer의 contributor중 일부가 MS팀에서 만듬 (2020년 첫 퍼블릭 버전 릴리즈)
    - puppeteer와 가장 큰 차이는 cross-browser support

## Quest

- 직전 퀘스트의 메모장의 서버와 클라이언트 각 부분에 유닛 테스트, 통합 테스트, E2E 테스트 등을 추가해 보세요.
- `npm test` 명령을 통해 모든 테스트가 돌고 그 결과를 출력할 수 있어야 합니다.

## Advanced
* 테스트의 커버리지는 어떤 개념일까요? 프로젝트에서 테스트의 커버리지는 어떻게 접근하는 것이 좋을까요?

- 테스트의 커버리지는 어떤 개념일까요? 프로젝트에서 테스트의 커버리지는 어떻게 접근하는 것이 좋을까요?
  - 테스트 대상이 되는 소스 코드 중 테스트 코드를 통해 검증된 코드의 비율
  - 테스트 수행 결과를 정량적으로 나타내는 수치
  - 가치가 높고 의미 있는 테스트 코드를 작성하는데 좀더 초점을 맞춰야 하지 않을까?

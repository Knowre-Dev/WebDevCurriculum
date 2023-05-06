# Quest 15. 자동화된 테스트

## Introduction

- 이번 퀘스트에서는 자동화된 테스트에 어떤 장점이 있는지, 어떤 식으로 구축할 수 있는지에 대해 알아보겠습니다.

## Topics

- Automated Test
  - TDD
  - Unit Test
  - Integration Test
  - E2E Test
  - Stub & Mock
- Jest
- Puppeteer

## Resources

- [Unit Test (단위 테스트) 도입하기](https://www.popit.kr/unit-test-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0-1%ED%8E%B8/)
- [소프트웨어 테스트 안티 패턴](https://velog.io/@leejh3224/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%95%88%ED%8B%B0-%ED%8C%A8%ED%84%B4)
- [End-to-End testing with Puppeteer and Jest](https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321)
- [Mock & Stub](https://stackoverflow.com/questions/3459287/whats-the-difference-between-a-mock-stub)

## Checklist

- 자동화된 테스트를 만드는 것에는 어떤 장점과 단점이 있을까요?

  - TDD(Test-Driven Development)란 무엇인가요?

  > TDD는 소프트웨어 개발 프로세스, 혹은 프로세스 개발 방법론을 일컫는다.

  > 개발자가 설계하고 이를 구현하는 과정에서 요구사항을 검증하는 테스트(테스트 케이스)를 적용한 개발 과정을 TDD라 한다.

- TDD의 장점과 단점은 무엇일까요?

> 장점
> → 철저한 객체 지향적인 코딩과 유지보수의 간편함
> → 재설계 시간의 단축
> → 디버깅 시간의 단축

> 단점
> → 개발 소요시간 증가
> → 러닝커브

- 테스트들 간의 계층에 따라 어떤 단계들이 있을까요?

  > 테스트의 난이도, 적용범위 및 역할 등에 따라 4가지 테스트로 나뉜다.

  - 유닛 테스트, 통합 테스트, E2E 테스트는 각각 어떤 것을 뜻하나요?

  > → Static : 정적분석, 문법/변수관련 오류 탐색
  > → Unit : 각각의 독립적인 동작(logic, class) 수행 관련 오류 탐색
  > → Functional : 각 Unit들의 조화, 하나의 기능으로 잘 수행하는지 관련 오류 탐색
  > → End to End (E2E) : 최종 결과물, 인터페이스 및 전체적인 내부 동작 관련 오류 탐색

  - 테스트에 있어서 Stub과 Mock은 어떤 개념을 가리키는 것일까요?

> 전통적인 test 기법은 void function과 같은 상태(state)가 없는 경우, 상태기반 테스트는 가능하지만 행위기반 테스트는 불가능한 단점이 있었다.

> 행위기반 테스트, 즉 상태가 없는 객체의 동작 수행여부를 검증하기 위해 대신 행위를 검증해주는 Mock 객체가 여기서 고안되었다.

> 좁은 의미의 Stub은 Mock 객체를 구현하기 위해 필요한 기능들 중 하나로, test에 필요한 Mock 객체의 동작을 지정해주는 과정을 말한다.

> 넓은 의미로 보면 객체에 필요 기능만을 구현하고 특정 상태를 반환하여, 상태기반 검증을 위해 사용하는 객체를 일컫는다.

- Jest는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?

> Jest는 페이스북에서 만든 javascript 전용 테스트 프레임워크이다.

> 문서화가 잘되어있고, 그만큼 API가 체계적으로 정리되어있어 많이 활용한다.

> 전용 패키지가 있어 npm을 통해 설치한 후, 특정 테스트를 위한 기능(메소드)을 활용하여 예상하는 결과(상태 혹은 행동의 결과)가 출력되는지 확인하는 방식으로 진행한다.

- Jest 이외의 테스트 프레임워크는 어떤 것이 있고 어떤 장단점이 있을까요?

> karma, mocha, enzyme, jasmine 등이 있다.

- Puppeteer는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?

> chrome.exe를 활용해서 브라우저 환경에서 test에서 기대하는 결과가 존재하는지, 출력되는지 확인하는 방식의 프레임워크이다.

> Puppeteer를 활용하여 TDD를 진행할 경우, 내부적으로 브라우저 환경에서 실제 구현이 이루어졌는지 확인하기 위해 크롬 브라우저를 실행한다.

> 그 후에 빠른 시간동안 test를 수행하고, 브라우저를 닫는다.

> 다른 화면을 표시하는 TDD방식과는 달리, CLI를 통한 접근이 가능하며 구현된 화면에 별도로 나타내지는 않는다.

## Quest

- 직전 퀘스트의 메모장의 서버와 클라이언트 각 부분에 유닛 테스트, 통합 테스트, E2E 테스트 등을 추가해 보세요.
  - `npm test` 명령을 통해 모든 테스트가 돌고 그 결과를 출력할 수 있어야 합니다.

## Advanced

- 테스트의 커버리지는 어떤 개념일까요? 프로젝트에서 테스트의 커버리지는 어떻게 접근하는 것이 좋을까요?

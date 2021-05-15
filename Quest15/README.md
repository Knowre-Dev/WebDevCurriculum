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
* 자동화된 테스트를 만드는 것에는 어떤 장점과 단점이 있을까요?
  * TDD(Test-Driven Development)란 무엇인가요? TDD의 장점과 단점은 무엇일까요?
* 테스트들 간의 계층에 따라 어떤 단계들이 있을까요?
  * 유닛 테스트, 통합 테스트, E2E 테스트는 각각 어떤 것을 뜻하나요?
  * 테스트에 있어서 Stub과 Mock은 어떤 개념을 가리키는 것일까요?
* Jest는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?
  * Jest 이외의 테스트 프레임워크는 어떤 것이 있고 어떤 장단점이 있을까요?
* Puppeteer는 어떤 일을 하며 어떻게 사용하는 테스트 프레임워크일까요?

## Quest
* 직전 퀘스트의 메모장의 서버와 클라이언트 각 부분에 유닛 테스트, 통합 테스트, E2E 테스트 등을 추가해 보세요.
  * `npm test` 명령을 통해 모든 테스트가 돌고 그 결과를 출력할 수 있어야 합니다.

## Advanced
* 테스트의 커버리지는 어떤 개념일까요? 프로젝트에서 테스트의 커버리지는 어떻게 접근하는 것이 좋을까요?

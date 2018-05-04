# Quest 19. Jest & Puppeteer


## Introduction
* 이번 퀘스트에서는 Jest와 Puppeteer를 이용해 웹 어플리케이션을 자동으로 테스트 하는 방법을 알아보겠습니다.

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
* [GraphQL](https://graphql.org/)
* [GraphQL.js](http://graphql.org/graphql-js/)
* [DataLoader](https://github.com/facebook/dataloader)
* [Vue Apollo Client](https://github.com/akryum/vue-apollo)

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
  * `package.json` 파일의 `scripts` 항목을 이용하여 각 테스트 단계나 부분별로 따로 정의를 하면 좋습니다.

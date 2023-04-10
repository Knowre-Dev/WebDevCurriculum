# Quest 13. 웹 API의 응용과 GraphQL

## Introduction

- 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics

- GraphQL
  - Schema
  - Resolver
  - DataLoader
- Apollo

## Resources

- [GraphQL](https://graphql.org/)
- [GraphQL.js](http://graphql.org/graphql-js/)
- [DataLoader](https://github.com/facebook/dataloader)
- [Apollo](https://www.apollographql.com/)

## Checklist

- GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?
  ```
  >GraphQL은 API를 위한 퀴리 언어이며 타입 시스템을 사용하여 쿼리를 실행하는 서버사이드 런타임.
  > GraphQL은 특정한 데이터베이스나 특정한 스토리지 엔진과 관계 되어 있지 않으며 기존 코드와 데이터에 의해 대체.
  > SQL이 데이터베이스 시스템으로부터 데이터를 가져오는 목적을 가진다면, GraphQL은 클라이언트가 데이터를 서버로부터 가져오는 것을 목적으로 한다.
  > GraphQL API는 데이터 검색에 보다 효율적이고 유연한 접근
  방식을 제공하여 REST API의 일부 단점을 해결한다.
  1. 데이터의 과다 가져오기 및 부족 가져오기: REST API는 고정
   데이터 구조를 반환하므로 클라이언트가 실제로 필요한 것보다
    많거나 적은 데이터를 받는 경우가 많다. 반대로 GraphQL
     API를 사용하면 클라이언트가 필요한 데이터를 정확히 지정할
     수 있으므로 데이터의 과다 가져오기 및 부족 가져오기를
     줄일 수 있다.
  2.여러 요청: REST API는 종종 클라이언트가 필요한 모든
  데이터를 검색하기 위해 여러 요청을 해야 한다. 반대로
   GraphQL API는 클라이언트가 단일 쿼리에서 필요한 모든
    데이터를 요청할 수 있도록 하여 데이터 검색에 필요한 요청
     수를 줄인다.
  3. 버전 관리: REST API는 이전 버전과의 호환성을 유지하기 위해 종종 버전 관리가 필요하다. 반대로 GraphQL API는 스키마
    진화를 지원한다. 즉, 기존 클라이언트를 손상시키지 않고
    스키마를 변경할 수 있다.
  ```
- GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?
  ```
  > GraphQL API에서 스키마는 쿼리할 수 있는 데이터 유형과
  수행할 수 있는 작업을 정의한다. 검색할 수 있는 데이터와
   실행할 수 있는 작업에 대한 명확한 이해를 제공하는 서버와
    클라이언트 간의 계약 역할을 한다.
  ```
- GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?
  ```
  > GraphQL 리졸버(resolver)는 GraphQL 쿼리에서 요청된 데이터 검색을
   담당하는 함수다. GraphQL 스키마의 각 필드에 대해
    정의되며 해당 필드와 연결된 데이터를 검색하는 방법을
     지정한다.
  > 리졸버는 데이터베이스, API 및 기타 데이터 소스를 비롯한
   다양한 소스에서 데이터를 검색할 수 있다. 또한 데이터를
    클라이언트에 반환하기 전에 데이터에 대한 변환 또는 유효성
     검사를 수행할 수 있다.
  ```
  - GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?
  ```
  > DataLoader는 데이터 요청을 일괄 처리 및 캐싱하여 GraphQL 리졸버의 성능을 개선하는 데 사용할 수 있는 유틸리티 라이브러리이다.
  > GraphQL 쿼리에 동일한 데이터 소스의 데이터가 필요한 여러
   필드가 포함된 경우 DataLoader 라이브러리를 사용하여 이러한
    요청을 일괄 처리하고 보다 효율적인 방식으로 데이터를 검색한다.
  >
  ```
- 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?

  ```
  > 클라이언트에서 GraphQL 요청을 보내는 일반적인 방법 중 하나는 대부분의 최신 웹 브라우저에 내장된 fetch API를
  사용하는 것
  ```

  ```
  JavaScript에서 fetch를 사용하여 GraphQL 요청을 보내는 방법의 예

  fetch('/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ hello }' })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
  ```

  - Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?

  ```
  > Apollo 프레임워크는 서버 측 및 클라이언트 측 구성
   요소를 모두 제공하는 널리 사용되는 오픈 소스 GraphQL
    구현이다.
  > Apollo 서버의 장점
  : 1. 사용하기 쉬움: Apollo Server는 GraphQL을 처음 접하는
   개발자도 쉽게 설정하고 사용할 수 있습니다. GraphQL
   스키마 및 리졸버를 정의하기 위한 간단하고 직관적인 API를
    제공합니다.
    2.성능: Apollo Server는 성능에 최적화되어 있으며 속도 저하없이 많은 수의 동시 요청을 처리할 수 있습니다.
    3.데이터 소스: Apollo Server는 데이터베이스, REST API
    및 마이크로서비스를 포함한 다양한 데이터 소스와의 통합을
     위한 내장 지원 기능을 갖추고 있습니다.
    4.미들웨어: Apollo Server는 개발자가 인증, 로깅 및
     캐싱과 같은 사용자 지정 기능을 GraphQL API에 추가할 수
      있는 미들웨어 시스템을 제공합니다.
  ```

  - Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?

  ```
  >Apollo 클라이언트를 사용하지 않고 바닐라 JavaScript로
  GraphQL 요청을 보내려면 fetch API 또는 axios 또는
   request와 같은 라이브러리를 사용할 수 있다.
  ```

- GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?

```
  > 1. 적절한 HTTP 상태 코드 사용
    2. 응답에 오류 메세지 반환
    3. GraphQL 관련 오류 코드 사용
    4. 서버에서 오류 포착 및 처리
    5. 오류 미들웨어 사용
    6. 문서제공: HTTP 상태코드, GraphQL 관련 오류 코드 및 사용자가 반환하는
    모든사용자 정의 오류 메세지를 포함하여 오류 처리에 대한 정보가
     포함된 API 문서를 제공함.
```

## Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?

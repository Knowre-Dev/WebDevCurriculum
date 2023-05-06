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

> GraphQL은 클라이언트가 서버로부터 데이터를 효율적으로 가져오기 위해 사용하는 쿼리 언어입니다.
> GraphQL API는 이러한 GQL로 만들어진 API입니다.
> GQL은 가져오는 데이터의 종류를 쿼리 조합을 통해서 결정하기 때문에 여러 번 네트워크를 호출할 필요 없이, 한 번만 호출하면 됩니다.
> 그렇기에 받아야 하는 항목들이 많고 딱 정해진 경우에 유용합니다.
> 그러나 GraphQL은 요청복잡도가 높고, REST API는 응답복잡도가 높으므로 누구에게 어떤 정보를 제공하느냐에 따라 선택하는 것이 좋습니다.

- GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?

> 스키마는 데이터 타입의 집합으로 API 문서 역할을 합니다.
> API를 설계할 때 스키마를 통해 어떤 종류의 객체를 반환할지, 내가 받을 수 있는 자원은 어떤 종류인지, 어떠한 자원을 인자로 받는지 등을 정의합니다.

- GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?

> 클라이언트로부터 요청된 Query 혹은 Mutation에 대해 반환할 결과를 생성하는 로직입니다.

> GraphQL 서버가 리졸버를 찾아 Query와 Mutation에 해당하는 함수를 실행하게 됩니다

- GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?

> N+1문제, 여러 데이터를 얻기 위해 과도하게 query 반복이 이루어지지 않도록 최적화된 데이터 조회/접근을 해주는 기능을 일컫는다.

> DataLoader는 크게 두가지 특징을 지니고 있다.

> Batch

> 여러 데이터들을 조회하기 위한 각각의 요청들을 하나로 모은 후, 단일 요청으로 보내고 해당 결과값들을 확보한다.

> Cache

> 요청항목 중 기존에 요청과 중복되는 것이 있다면, 이를 Caching하여(미리 기억에 저장하고 있다가, 중복 요청이 생기면 특정) 접근한다.

- 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?

> 기본적으로 GraphQL에서 정의한 query문, 이를 통해 데이터를 확보하는 작업은 모두 백엔드(server)에서 정적으로 이루어진다.

> 하지만 필요에 따라 동적으로 변수를 추가하거나 확보하는 작업이 필요하다면, client 측에서도 요청을 보내고 변수를 얻을 수 있다.

> → resolvers에 client를 통한 요청값을 담을 변수를 지정하고, 해당 변수가 client로 부터 요청받은 값임을 나타낸다(@client).
> → 이를 위해 type(Query)에도 해당 변수를 추가해준다.
> → client에서 동적으로 변화하는 데이터를 활용한다.

- Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?

> → GraphQL server은 단일 endopint(=server)를 통해 data를 저장해 둔 곳이다.
> → 우리는 이러한 data에 접근하고 확보하기 위해, 접근방식인 Query를 정의하고 설정해준다.
> → 기본적으로 해당 data를 접근하기위해 GraphQL server에 직접 접속한다.
> → axios fetch 등을 통해 기본적으로 POST Request를 진행해주어야 한다.

> Apollo를 통해 접근하게 되면 직접 server에 접속하지 않고도
> GraphQL server 내부에 저장되어있는 data에 접근하고 이를 확보할 수 있게 된다.

- Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?

> fetch, axios과 같은 데이터 전달 module 및 REST API(GET/POST method) 등 data를 확보할 수 있는 별도의 모듈을 사용해야 한다.

> 변수가 담겨진 querystring 및 req.body와 같은 요소를 활용할 수 있다.

- GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?

> → server 접속 및 모든 요청처리 성공(※ status code - 200)
> → GraphQL server / apollo server initialization 실패처리
> → REST API 실패처리
> → resolver가 정의되어있지 않는 변수/객체를 반환하는 오류

## Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?

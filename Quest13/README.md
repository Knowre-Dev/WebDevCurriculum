# Quest 13. 웹 API의 응용과 GraphQL

## Introduction
* 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics
* GraphQL
  * Schema
  * Resolver
  * DataLoader
* Apollo

## Resources
* [GraphQL](https://graphql.org/)
* [GraphQL.js](http://graphql.org/graphql-js/)
* [DataLoader](https://github.com/facebook/dataloader)
* [Apollo](https://www.apollographql.com/)

## Checklist

---

### GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?

sql은 데이터베이스 시스템에 저장된 데이터를 효율적으로 가져오는 것이 목적이고, gql은 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것이 목적

sql의 문장(statement)은 주로 백앤드 시스템에서 작성하고 호출 하는 반면, gql의 문장은 주로 클라이언트 시스템에서 작성하고 호출

- Underfetching
  - 한번의 요청에서 응답받는 데이터가 충분하지 않음
  - REST에서는 하나의 Endpoint로 필요한 모든 데이터를 요청하지 못하지거나 그것을 위한 새로운 API를 만들어야 한다.
- OverFetching
  - 한번의 요청에서 응답되는 데이터가 필요한 데이터 보다 많음
  - 하나의 Endpoint로 상황에 맞게 필요한

---

### GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?

- 스키마
  - 데이터 타입의 집합
  - API문서의 역할, 인터페이스의 역할
  - `.graphql` 확장자 사용
- Type
  - 스칼라(Scalar)
    - 스칼라 타입은 gql schema에서 최소 단위이며 5가지 기본 타입이 존재
    - Int: 부호가 있는 32비트 정수
    - Float: 부호가 있는 부동소수점 값
    - String: UTF-8 문자열
    - Boolean: true/false
    - ID: 고유 식별자 값으로 String과 같은 방법으로 직렬화 되지만 ID로 정의 한다는 의미는 사람이 읽으라고 만든 의도가 아님을 의미함
    - 커스텀 스칼라 타입을 지정하는 것도 가능
  - 커스텀 스칼라
    - `scalar CustomScalar`

**Type**

```graphql
type Character {
  name: String!
  appearsIn: [Episode!]!
}

```

- 오브젝트 타입 : Character
- 필드 : name, appearsIn
- 스칼라 타입 : String, ID, Int 등
- 느낌표(!) : 필수 값을 의미(non-nullable)
- 대괄호([, ]) : 배열을 의미(array)

**스칼라**

- 스칼라 타입은 gql schema에서 최소 단위이며 5가지 기본 타입이 존재
- Int: 부호가 있는 32비트 정수
- Float: 부호가 있는 부동소수점 값
- String: UTF-8 문자열
- Boolean: true/false
- ID: 고유 식별자 값으로 String과 같은 방법으로 직렬화 되지만 ID로 정의 한다는 의미는 사람이 읽으라고 만든 의도가 아님을 의미함
- 커스텀 스칼라 타입을 지정하는 것도 가능

**커스텀 스칼라**

- 기본 스칼라가 아닌 커스텀 스칼라 타입

```graphql
scalar DateTime! # 스칼라 타입 정의

type Character {
  id: ID!
  name: String!
  appearsIn: [Episode]!
  created: DateTime! # 사용
}
```

**열거 타입**

- 열거 타입 또한 스칼라 타입에 속하며, 특별한 종류의 스칼라

```graphql
enum Episode { # 열거 타입 정의
  NEWHOPE
  EMPIRE
  JEDI
}

type Character {
  id: ID!
  name: String!
  appearsIn: [Episode]! # 반환되는 Episode 타입은 반드시 NEWHOPE, EMPIRE, JEDI 중 하나이다.
}
```

**인터페이스**

- GraphQL은 다른 타입 언어와 동일하게 인터페이스를 지원
- 인터페이스는 이를 구현하기 위해 타입이 포함해야하는 특정 필드들을 포함하는 추상 타입

```graphql
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}

type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}
```

**유니온 타입**

- 인터페이스와 유사
- 타입간의 공통 필드를 특정하지 않음

```graphql
union SearchResult = Human | Droid | Starship
```

**인풋 타입**

- 인풋을 위한 타입핑

```graphql
input ReviewInput { # input 타입 정의
  stars: Int!
  commentary: String
}

mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

---

### GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?

- 리졸버는 스키마의 단일 필드에 데이터를 채우는 함수
- DB혹은 다른 API와 연동하는등 어떠한 방법으로든 데이터를 반환하면 해당 스키마에 대해 요청, 응답
- Query 혹은 Mutation에 대한 반환결과 생성하는 로직

```graphql
Query: {
  human(parent, args, context, info) {
    return context.db.loadHumanByID(args.id).then(
      userData => new Human(userData)
    )
  }
}
```

```jsx
const resolvers = {
	Query: {
		docs: async(parent, args, context, info) {
			return something;
		}
	},
	Mutation: {
		createDoc: async(parent, args, context, info) {
			do something;
			return something;
		}
	}
}
```

---

### GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?

DataLoader는 일괄 처리 및 캐싱을 통해 데이터베이스 또는 웹 서비스와 같은 다양한 원격 데이터 소스에서 단순하고 일관된 API를 제공하기 위해 애플리케이션의 데이터 가져오기 계층의 일부로 사용되는 일반 유틸리티

- Batching
- Caching

만약 User들이 있고 각 User들은 여러개의 Doc을 가지고 있다고 가정하고 Docs를 포함한 모든 유저들의 데이터가 필요하다고 가정하면

```jsx
export default {
  Query: {
    users: async (_) => {
      const users = await User.findAll();
      return users;
    },
  },
  User: {
    docs: async user => {
      const docs = await Doc.findAllByUser(user.id);
      return docs;
    },
  },
};
```

만약 위의 리졸버 처럼 작성하면 매 유저에 대해 `findAllByUser` 메소드로 DB에 호출을 하여야 한다.

```jsx
const docLoader = new DataLoader(async users => {
  const docs = await Doc.findAll();
  const result = users.map(user => docs.filter(doc => doc.userId === user.id));
  return result;
});

export default {
  Query: {
    users: async (_) => {

      return await User.findAll();
    },
  },
  User: {
    docs: async user => {
      const docs = await docLoader.load(user);
      return docs;
    },
  },
};
```

**dataloader를 이용하면 loader의 `load` 로 마치 개별적인 호출을 하지만 내부적으로 비동기를 객체로 다룰 수 있는 Promise의 특징과 이벤트 루프의 특징을 이용하여 Batching으로 처리 한다.**

---

### 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?

- graphql 관련 라이브러리 사용
- HTTP

---

### Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?

- 강력한(?) 툴 제공 (Apollo Studio, Apollo Client Dev Tools)
- 서버
  - 간단한 설정
  - 필요에 따라 기능을 추가
  - 범용 호환성
  - 빠른 개발
- 클라이언트
  - 선언적인 데이터 패칭 - Query및 Mutation 직접 전송
  - 로컬데이터와 원격데이터의 조화
  - 캐싱

---

### Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?

**GET**

```jsx
{
  me {
    name
  }
}
```

```jsx
http://myapi/graphql?query={me{name}}
```

**POST**

```jsx
const dice = 3;
const sides = 6;
const query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
 
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

---

### GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?

GraphQL은 복수의 데이터를 한번에 요청할 수 있으므로 http로 통신할때 기본적으로 모든 응답 상태코드는 200으로 하고 웹 서버 수준의 에러와 GraphQL 관련 에러의 처리를 분리하여 처리 해야될것 같다.

---


## Quest
* 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.
  https://documenter.getpostman.com/view/10639106/TzsZrTwm

## Advanced
### GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?

- File 전송 등 Text 만으로 하기 힘든 내용들을 처리하기 복잡하다.
- 재귀적인 Query 가 불가능하다. (결과에 따라 응답의 깊이가 얼마든지 깊어질 수 있는 API 를 만들 수 없다.)

---

### GraphQL의 경쟁자에는 어떤 것이 있을까요?

- gRPC
- SOAP

---

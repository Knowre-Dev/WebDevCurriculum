### REST 기반의 API는 무엇인가요? 어떤 장점과 단점을 가지고 있을까요?

  1. REST 기반 API는 URL로 자원을 표현하며, HTTP 메소드로 해당 자원에 어떤 행동을 수행할지를 지정한다.

  2. 장점: HTTP 메소드를 사용하기 때문에, 언어 및 플랫폼에 독립적이며, 별도의 인프라를 구축할 필요가 없다. 또한 REST API 표현을 읽는 것만으로도 대상 자원과 행동을 쉽게 유추할 수 있다.

  3. 단점: HTTP 메소드를 이용해 자원의 행위를 정의하는데 한계가 있다. REST 기반 API는 기본적으로 하나의 표현에 한가지 동작만 수행하는 것인데, 비지니스 로직 상 여러가지 일을 한번에 해야 할 경우가 있어, REST로 표현하기 힘든 부분이 있다. 또한 명시적인 표준이 없기 때문에 각 개발자가 REST에 대해 공통된 인식을 가지고 있지 않으면, REST API의 일관성이 떨어질 수 있다.

### GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?

  1. GraphQL은 서버와 클라이언트간의 데이터를 요청하는 방법을 정의한 문법으로 서버는 클라이언트가 어떤 데이터를 원하는지 구체적으로 알 수 있고, 클라이언트는 원하는 데이터를 효과적으로 서버에 요청할 수 있다.

  2. 많은 EndPoint와 다중요청: REST는 URL를 통해 자원과의 관계가 1:1이기 때문에, 각 자원이 추가될 때마다 EndPoint를 추가해 주어야하며, 한번에 다양한 작업이 수행될 경우, 다중요청으로 인해 네트워크 비용이 높다. 반면 GraphQL은 한번의 요청으로 다양한 값을 받을 수 았고, 자원과의 관계 1:1이 아니기 때문에 EndPoint가 REST 만큼 늘어나지 않는다.

  3. 데이터 Over Fetching, Under Fetching: REST의 경우 서버에서 일방적으로 어떤 데이터를 보낼지 정하기 때문에, 클라이언트가 데이터 요청시 필요없는 데이터가 오거나 더 상세한 데이터 요청을 위해 다중 요청을 하게 된다. 반면 GraphQL은 클라이언트에서 어떤 데이터를 가져올지 선택할 수 있기 때문에 위와 같은 문제는 많이 해결이 된다.

###  GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?

  * 스키마는 서버와 클라이언트간 데이터 요청 구조을 정의해 놓은 것이다. 따라서 해당 스키마에 맞게 데이터를 요청하고, 전송해야 서버가 해당 스키마에 맞게 응답을 할 수있다. 스키마에는 크게 Query와 Mutaion이 있다.

  1. Query: HTTP GET 메소드와 유사한 작업을 수행하며, 서버로부터 데이터를 요청할 때 사용되는 스키마이다. 필요한 속성만 정의할 수도 있으며, 해당 속성에 연결된 자식 데이터도 한번에 요청이 가능하다. 아래와 같이 정의하여 사용하면, 각 필드에 값이 채워진 채로 서버에서 응답한다.

  ``` json
  //요청 Query
  query {
      user{
          id
          name
      }
  }
  //응답 데이터
  {
      "data": {
          "user": [
              {
                  "id": "test1",
                  "name": "t"
              },
              {
                  "id": "test2",
                  "name": "tt"
              }
          ]
      }
  }
  ```

  2. Mutation: HTTP PUT, POST 메소드처럼 서버에 데이터를 전송할떄 사용되는 스키마로 해당 스키마에 정의된대로 데이터를 전송해야 한다.
  
 ``` json
  //요청 Query
  mutation {
      user{
          id: "test",
          name: "t"
      }
  }
  ```

### node.js 상에서 GraphQL 서버를 실행하고 스키마를 정의하려면 어떻게 해야 하나요?

  * 아래와 같이 정의한다.
  ``` js
  const graphql = require('graphql');

    const {
        GraphQLSchema,
        GraphQLObjectType,
        GraphQLString
    } = graphql

    var schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'RootQueryType',
            fields: {
                hello: {
                    type: GraphQLString,
                    resolve() {
                        return 'world';
                    }
                }
            }
        })
    });
  ```

### GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?

  * 리졸버는 GraphQL 스키마 형태로 요청이 왔을 때 해당 필드애 해당하는 데이터를 가져와서 로직에 따라 가공하여 응답 데이터를 return하는 역할을 한다. 리졸버는 각각의 필드에 리졸버를 정의해야하며, 정의 형태는 위와 같다.

### GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?

  * DataLoader는 데이터베이스롸 같은 스토리지에서 데이터를 로딩할때, batch 로딩을 지원하는 유틸리티이다. 가장 이해하기 쉬운 예제는 N+1상황에서 DataLoader의 역할 이다. 여러게의 Post가 존재하고 각 Post에 Tag가 연결되어 있다면, 기존 ORM은 Post를 모두 셀렉트하고 각각의 Post에 대한 Tag를 로딩하는 형식이다. 즉 데이터베이스와의 Transaction이 Post의 수만큼 생성된다. 이 경우 DataLoader를 사용하면 한번의 이벤트로 데이터를 로딩한다. 
  ``` sql
  --기존 ORM방식
  select `post`.* from `post`;

select `tag`.*, `post_tag`.`post_id` as `_pivot_post_id`, `post_tag`.`tag_id` as `_pivot_tag_id` from `tag` inner join `post_tag` on `post_tag`.`tag_id` = `tag`.`id` where `post_tag`.`post_id` in (1);

select `tag`.*, `post_tag`.`post_id` as `_pivot_post_id`, `post_tag`.`tag_id` as `_pivot_tag_id` from `tag` inner join `post_tag` on `post_tag`.`tag_id` = `tag`.`id` where `post_tag`.`post_id` in (2);
  ```

  ``` sql
  --DataLoader 사용
  select `post`.* from `post`

select `tag`.*, `post_tag`.`post_id` as `_pivot_post_id`, `post_tag`.`tag_id` as `_pivot_tag_id` from `tag` inner join `post_tag` on `post_tag`.`tag_id` = `tag`.`id` where `post_tag`.`post_id` in (1, 2)
  ```

  Batch 로딩을 위한 Function을 정의 한 후, 상위 GraphQLObjectType의 리졸버에 리스트 인자를 전달함으로써 해당 리스트에 해당하는 데이터를 한번에 로딩한다.


### 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?

  * Graphql의 Query 또는 Mutaion 문자열을 POST 메소드에 json 형식으로 전송한다.

### Apollo Client의 장점은 무엇일까요?
  
  1. Declaretive data fetching: 데이터를 가져오고 UI렌더링하는 일련의 작업을 하나의 Query component로 관리 할 수 있기때문에, 클라이언트 구성하기가 쉽다.
  
  2. Zero-config caching: 어떠한 캐쉬 설정없이 아폴로 클라이언트 객체를 생성하는 것만으로 페이지 캐싱을 자동으로 수행하여, 페이지간 이동 시 캐싱된 페이지를 빠르게 로드한다. 

### Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?

  * fetch를 통한 통신의 body에 graphql query를 넘겨주면된다. json을 기본 데이터 형식으로 사용하기 때문에 이미 json으로 서버 응답에 대한 작업을 만들어 놓았다면 그대로 사용하는 것이 가능하다.
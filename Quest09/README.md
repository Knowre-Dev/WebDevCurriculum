# Quest 09. 서버와 클라이언트의 대화

## Introduction

- 이번 퀘스트에서는 서버와 클라이언트의 연동, 그리고 웹 API의 설계 방법론 중 하나인 REST에 대해 알아보겠습니다.

## Topics

- expressJS, fastify
- AJAX, `XMLHttpRequest`, `fetch()`
- REST, CRUD
- CORS

## Resources

- [Express Framework](http://expressjs.com/)
- [Fastify Framework](https://www.fastify.io/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [REST API Tutorial](https://restfulapi.net/)
- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [MDN - CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Checklist

- 비동기 프로그래밍이란 무엇인가요?

> 동기(Synchronous): 프로그램의 코드가 순차적으로 진행 되고, 한 번에 한가지 작업만 수행한다.
> 비동기(Asynchronous): 특정 사건이 끝날때까지 기다리지 않고 병렬적으로 작업을 수행한다.

- 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?

> 자바스크립트는 비동기 처리를 위해 하나의 패턴으로 콜백 함수를 사용한다.
> 콜백 함수 내부에서 비동기적인 코드가 필요하게 되는 경우 콜백 함수의 중첩이 늘어나게 된다.
> 여러 개의 비동기적인 콜백 코드들이 많아지면 가독성이 나빠지고 기대한 대로 동작하지 않을 수도 있다.
> 콜백 지옥이란 콜백 함수 내부의 비동기적인 콜백 함수가 중첩되어 가독성이 나빠지는 것을 말한다.

- 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?

> Promise는 pending, fulfilled, rejected 3가지 상태를 갖는 Promise 객체이다.
> 생성자 함수로 Promise 객체를 생성할 수 있고, resolve, reject 두 가지 인수를 받는다.
> resolve 인수를 통해 전달된 콜백 함수가 실행되면 수행한 작업은 성공(fulfilled)상태가 되고, reject 인수를 통해 전달된 콜백 함수가 실행되면 수행한 작업은 실패(rejected)상태가 된다.
> 후속 처리 메서드를 통해 에러 처리 등 작업을 수행할 수 있다.
> 콜백 지옥으로 인해 가독성이 나빠지고 에러 처리 등의 한계를 해결하기 위해 ES6에서 프로미스 객체가 도입되었다.

- 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?

> ES8에서 도입된 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 키워드이다.
> 프로미스를 기반으로 동작한다.
> 프로미스의 후속 처리 메서드(then, catch, finally) 없이도 동기 처리처럼 프로미스를 사용할 수 있다.
> async 키워드를 사용하여 async 함수를 선언할 수 있고, 내부에서 await 키워드를 사용할 수 있다.
> async 함수가 명시적으로 프로미스를 반환하지 않더라도 암묵적으로 반환값을 resolve하는 프로미스를 반환한다.
> await 키워드는 프로미스가 settled상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한ㄷ .
> await 키워드는 반드시 프로미스 앞에서 사용해야 한다.

- 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?

> Fetch API를 사용하여 외부 리소스를 가져올 수 있다.
> fetch API는 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API로, HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.

- 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?

> XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위해 사용된다.
> 전체 페이지의 새로고침없이도 URL 로부터 데이터를 받아올 수 있다.
> XML 만 받아올 수 있을 것 같아 보이지만, 모든 종류의 데이터를 받아오는데 사용할 수 있다.

- `fetch` API는 무엇이고 어떻게 동작하나요?

> fetch API는 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 Web API로, HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
> XMLHttpRequest 객체보다 사용법이 간단하고 프로미스를 지원하기 때문에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.
> HTTP 요청을 전송할 UR와 HTTP 요청 메서드, HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달하여 사용한다.

- REST는 무엇인가요?

> REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미한다.
> REST 아키텍처에 적용되는 제한 조건을 준수한 디자인을 Restful 이라고 표현한다.

- REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?
- RESTful한 API 설계의 단점은 무엇인가요?

> REST API(RESTful API)란 REST 아키텍처의 제약 조건을 준수하는 애플리케이션 프로그래밍 인터페이스를 말한다.
> 장점
> HTTP 인프라를 그대로 사용하기 때문에 REST API 사용을 위한 별도의 인프라 구축을 요구하지 않는다.
> REST API 메세지를 읽는 것 만으로도 메시지가 의도하는 바를 명확하게 파악할 수 있다.
> 서버에서 진행된 내용들에 대해 문맥(Context)을 저장하지 않으므로 서버와 클라이언트의 역할이 명확하게 분리된다.(Stateless)
> 단점
> HTTP 메소드를 사용하여 URI를 표현하는 특성은 편리하지만 메소드 형태가 제한적이라고 볼 수도 있다.
> 표준이 존재하지 않는다.

- CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?

## 4-1) SOP (Same Origin Policy)

- 다른 출처의 리소스를 사용하는 것에 제한하는 보안 방식.

<br />

### 🐣 출처란?

<div align="center">
  <img src="https://user-images.githubusercontent.com/85148549/149274825-bffec086-f522-4ea3-88a2-50b07bfe7d53.png" />
</div>

- URL의 Protocoa, Host, Port를 통해 같은 출처인지 다른 출처인지 판단할 수 있다.
- 예를 들어 특정 사용자의 인증 토큰을 악의를 가진 해커가 탈취하여 사용하려고 할 때 서버에서는 SOP를 이용, 출처가 다르다고 판단(Cross Origin)하여 이를 막을 수 있다.

<br />

## 4-2) CORS(Cross-Origin Resource Sharing, CORS)

- 다른 출처의 리소스가 필요할 때 CORS를 사용하게 된다.
- 다른 출처의 자원을 공유하는 것을 말한다.
- **교차 출처 리소스 공유**(Cross-Origin Resource Sharing, CORS): 추가 HTTP 헤더를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 **다른 출처**의 선택한 자원에 접근할 수 있는 권한을 부여하도록 **브라우저에 알려주는 체제**

<br />

### 🐥 CORS 접근 제어 시나리오

1. 단순 요청(Simple Request)
2. 프리플라이트 요청(Preflight Request)
3. 인증 정보 포함 요청(Credentialed Request)

<br />

## Quest

- 이번 퀘스트는 Midterm에 해당하는 과제입니다. 분량이 제법 많으니 한 번 기능별로 세부 일정을 정해 보고, 과제 완수 후에 그 일정이 얼마나 지켜졌는지 스스로 한 번 돌아보세요.
  - 이번 퀘스트부터는 skeleton을 제공하지 않습니다!
- Quest 05에서 만든 메모장 시스템을 서버와 연동하는 어플리케이션으로 만들어 보겠습니다.
  - 클라이언트는 `fetch` API를 통해 서버와 통신합니다.
  - 서버는 8000번 포트에 REST API를 엔드포인트로 제공하여, 클라이언트의 요청에 응답합니다.
  - 클라이언트로부터 온 새 파일 저장, 삭제, 다른 이름으로 저장 등의 요청을 받아 서버의 로컬 파일시스템을 통해 저장되어야 합니다.
    - 서버에 어떤 식으로 저장하는 것이 좋을까요?
  - API 서버 외에, 클라이언트를 띄우기 위한 서버가 3000번 포트로 따로 떠서 API 서버와 서로 통신할 수 있어야 합니다.
  - Express나 Fastify 등의 프레임워크를 사용해도 무방합니다.
- 클라이언트 프로젝트와 서버 프로젝트 모두 `npm i`만으로 디펜던시를 설치하고 바로 실행될 수 있게 제출되어야 합니다.
- 이번 퀘스트부터는 앞의 퀘스트의 결과물에 의존적인 경우가 많습니다. 제출 폴더를 직접 만들어 제출해 보세요!

## Advanced

- `fetch` API는 구현할 수 없지만 `XMLHttpRequest`로는 구현할 수 있는 기능이 있을까요?
- REST 이전에는 HTTP API에 어떤 패러다임들이 있었을까요? REST의 대안으로는 어떤 것들이 제시되고 있을까요?

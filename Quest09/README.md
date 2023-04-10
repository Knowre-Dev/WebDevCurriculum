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

```
 > 비동기 프로그래밍이란 특정 코드가 처리가 완료되기 전, 처리하는 도중에도 아래로 계속 내려가며 수행을 하는 것이다.
```

- 콜백을 통해 비동기적 작업을 할 때의 불편한 점은 무엇인가요? 콜백지옥이란 무엇인가요?

```
> 우선 콜백이란? 콜백 또는 콜백 함수는 다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말함.
> 비동기 작업이 '완료되면' 콜백 함수를 호출 하는 방법이다. 그래서 그 함수가 끝날 때까지 아무것도 하지 못한다
> 콜백지옥이란 함수안에 또 함수, 그 안에 함수 또 함수 와 같이 정말 복잡한 구조를 가진 것을 콜백지옥이라고 한다. 가독성이 떨어지고 실수 위험이 커짐.
```

- 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?

```
> Promise는 생성자에 인자로 들어가는 함수에 첫 번째 인자로는 수행할 비동기 작업, 두번째 인자로는 그 결과물을 콜백함수에 전달하는 함수가 들어간다.
```

- 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?

```
> `await` 키워드는 약속이 해결될 때까지 함수 실행을 일시 중지하기 위해 `async` 함수 내에서 사용 된다.
> 약속과 함께 사용하면 `await`는 약속이 이행되거나 거부 될 때까지 `async` 함수의 실행을 차단한다.
> 약속이 이행되면 `await`는 약속의 이행된 값을 반환.
> 약속 거부시 `await는 거부된 값을 오류로 표시.
```

```
// 예시 코드
  async function getData() {
  try {
    const response = await fetch('https://example.com/data.json');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

- 브라우저 내 스크립트에서 외부 리소스를 가져오려면 어떻게 해야 할까요?

```
> JavaScript에서는 fetch() 함수를 사용하여 브라우저 내 스크립트에서 외부 리소스를 가져올 수 있음.
>  fetch() 함수는 요청에 대한 응답을 나타내는 Response 개체로 확인되는 약속을 반환.

// 다음은 fetch()를 사용하여 외부 JSON 파일에서 데이터를 가져오는 방법의 예.
fetch('https://example.com/data.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  })
  .catch(error => console.error(error));
```

- 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?

```
> `XMLHttpRequest` 객체는 클라이언트 측 JavaScript 코드가 서버에 HTTP 요청을 하고 응답을 다시 받을 수 있도록 하는 API이다.
> 동작방법은 개체의 새 인스턴스를 맏늘고 해당 메서드를 호출하여 HTTP 요청을 설정하고 서버에 보내는 방식으로 작동.
> 서버의 응답은 비동기적으로 수신. 즉, 브라우저가 응답을 기다리는 동안 다른 코드 계속 실행 가능.
```

- `fetch` API는 무엇이고 어떻게 동작하나요?

```
> fetch() API는 리소르를 가져오기 위해 비동기 네트워크 요청을 만드는 최신 내장 JavaScript 메서드 이다.
> 이전 XMLHttpRequest 개체에 비해 더 간단하고 유연한 인터페이스 제공
> fetch() 메서드는 요청에 대한 응답을 나타내는 Response 개체로 확인되는 약속을 반환.
> Response 개체에는 다양한 메서드와 속성을 사용하여 액세스할 수 있는 응답상태, 헤더 및 본문에 대한 정보가 포함.
```

- REST는 무엇인가요?

```
  > REST는 Representational State Transfer의 약자로 웹 서비스 디자인에 사용되는 아키텍처 스타일이다.
  > 웹에서 리소스를 정의하고 처리하는 방법을 지정하는 일련의 제약 조건.
  > RESTful 시스템에서 리소스는 URL(Uniform Resource Locator)로 표시되며 GET, POST, PUT 및 DELETE와 같은 HTTP 메서드를 사용하여 리소스와 상호 작용.
  > 리소스 상태는 JSON 또는 XML과 같은 표현 형식으로 클라이언트와 서버 간에 전송된다.
```

- REST API는 어떤 목적을 달성하기 위해 나왔고 어떤 장점을 가지고 있나요?

```
> REST API의 주요 목적은 시스템이 인터넷을 통해 통신할 수 있는 표준화 된 방법을 제공하는 것이다.
> REST는 웹 서비스의 디자인을 단순화하여 개발, 유지 관리및 확장을 쉽게 하기 위해 만들어짐.
> RESTful API의 장점
확장성: RESTful API는 많은 수의 동시 클라이언트를 처리할 수 있으므로 높은 확장성이 필요한 애플리케이션에 이상적이다.
유연성: RESTful API는 표준 HTTP 메서드를 사용하기 때문에 웹 브라우저, 모바일 장치 및 기타 웹 서비스를 비롯한 다양한 클라이언트에서 사용할 수 있다.
개발 용이성: RESTful API는 표준 HTTP 메서드를 사용하고 일련의 잘 정의된 규칙을 따르기 때문에 개발 및 테스트가 쉽다.
결합 감소: RESTful API는 클라이언트와 서버 간의 느슨한 결합을 허용한다. 즉, 서버의 변경 사항이 클라이언트에 영향을 미치지 않으며 그 반대의 경우도 마찬가지이다.
캐싱: RESTful API는 응답 캐싱을 지원하여 성능을 개선하고 서버의 로드를 줄일 수 있다.
상태 비저장: RESTful API는 상태 비저장이다. 즉, 각 요청에는 요청을 완료하는 데 필요한 모든 정보가 포함된다. 이렇게 하면 서버측 코드를 더 쉽게 개발하고 유지 관리할 수 있다.
상호 운용성: RESTful API는 플랫폼에 구애받지 않으며 HTTP를 지원하는 모든 언어 또는 플랫폼에서 구현될 수 있으므로 상호 운용성이 매우 높다.
```

- RESTful한 API 설계의 단점은 무엇인가요?

```
학습 곡선: RESTful API는 잘 정의된 규칙 집합을 따르므로 개발자가 배우고 마스터하는 데 시간이 걸릴 수 있습니다. 이로 인해 특히 REST를 처음 사용하는 팀의 경우 개발 프로세스가 느려질 수 있습니다.
오버헤드: RESTful API는 HTTP에 의존하기 때문에 다른 유형의 API보다 더 장황할 수 있습니다. 이로 인해 특히 연결이 제한된 클라이언트의 경우 대기 시간이 길어지고 대역폭 사용량이 증가할 수 있습니다.
보안: RESTful API는 표준 HTTP 인증 방법을 사용하여 보호할 수 있지만 CSRF(Cross-Site Request Forgery) 및 XSS(Cross-Site Scripting)와 같은 공격에도 취약할 수 있습니다. 이러한 유형의 공격으로부터 보호하기 위해 강력한 보안 조치를 구현하는 것이 중요합니다.
버전 관리: RESTful API가 시간이 지남에 따라 발전함에 따라 새로운 기능을 도입하면서 이전 버전과의 호환성을 유지하기가 어려울 수 있습니다. 이를 위해서는 클라이언트가 변경 사항을 손상시키지 않고 API를 계속 사용할 수 있도록 신중한 버전 관리 및 문서화가 필요할 수 있습니다.
이기종 클라이언트: RESTful API는 광범위한 클라이언트에서 사용하도록 설계되었기 때문에 모든 클라이언트의 요구 사항을 동등하게 잘 충족하는 API를 설계하는 것이 어려울 수 있습니다. 이를 위해서는 다양한 클라이언트의 요구 사항과 이러한 요구 사항을 충족하는 API 설계와 관련된 장단점을 신중하게 고려해야 할 수 있습니다.
```

- CORS란 무엇인가요? 이러한 기능이 왜 필요할까요? CORS는 어떻게 구현될까요?

```
  > CORS(Cross-Orign Resource Sharing)는 웹 브라우저에 구현된 보안 기능으로, 웹 에플리케이션이 다른 도메인의 리소스에 대한 교차 출처 요청을 할 수 있도록 한다. 즉, CORS는 서버가 리소스에 액세스 할 수 있는 사람과 조건을 지정할 수 있도록 하는 메커니즘이다.
  > CORS기능이 필요한 이유는 웹 브라우저는 웹 페이지가 제공되는 도메인이 아닌 다른 도메인에서 호스팅되는 리소스에 대한 요청을 웹 페이즈를 제한하는 동일 출처 정책으로 인해 이러한 요청을 차단한다.
  > CORS를 활성화하려면 리소스를 호스팅하는 서버가 클라이언트 요청에 대한 응답으로 추가 HTTP 헤더를 보내야 한다. 이러한 헤더에는 리소스에 액세스할 수 있는 도메인을 지정하는 'Access-Control-Allow-Origin'과 리소스에 허용되는  HTTP 메서드를 지정하는 'Access-Control-Allow-Methods'가 포함된다.
```

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

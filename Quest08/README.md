# Quest 08. 웹 API의 기초

## Introduction

- 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics

- HTTP Method
- node.js `http` module
  - `req`와 `res` 객체

## Resources

- [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist

- HTTP의 GET과 POST 메소드는 어떻게 다른가요?

```
> GET은 서버에서 어떤 데이터를 가져와서 보여줄 때 사용. 어떤 값이나 내용, 상태등을 바꾸지 않는 경우에 사용을 하는 것
> Post는 서버상의 데이터 값이나 상태를 바꾸기 위해서 사용.
> GET은 Idempotent, POST는 Non-idempotent하게 설계 됨. (Idempotent = 멱등성) - 연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질
  > Get과 Post의 리소스 전달 방식의 차이를 표현
                              GET	    POST
    캐시	                    ⭕️	     ❌
    브라우저 기록             ⭕️	     ❌
    북마크 추가	              ⭕️	     ❌
    데이터 길이 제한	        ⭕️	     ❌
    HTTP 응답 코드	        200(Ok)	 201(Created)
    언제 주로 사용하는가  리소스 요청	리소스 생성
    리소스 전달 방식	     쿼리스트링	HTTP Body
    idempotent	             ⭕️	      ❌
```

- 다른 HTTP 메소드에는 무엇이 있나요?

```
> PUT: 이 방법은 서버의 리소스를 업데이트하는 데 사용. RESTful 웹 서비스에서 기존 리소스를 새 데이터로 업데이트하는 데 자주 사용.
DELETE: 이 방법은 서버에서 리소스를 삭제하는 데 사용.RESTful 웹 서비스에서 기존 리소스를 삭제하는 데 자주 사용.
HEAD: 이 메서드는 실제 리소스 내용을 검색하지 않고 리소스에 대한 헤더 정보를 검색하는 데 사용.리소스가 존재하는지 확인하거나 리소스에 대한 메타데이터를 검색하는 데 자주 사용.
OPTIONS: 이 메서드는 리소스에 사용할 수 있는 통신 옵션에 대한 정보를 검색하는 데 사용. 리소스에 대해 허용된 HTTP 메서드에 대한 정보를 검색하는 데 자주 사용.
PATCH: 이 방법은 새로운 데이터의 부분 집합으로 리소스를 업데이트하는 데 사용. 기존 리소스의 일부를 업데이트하기 위해 RESTful 웹 서비스에서 자주 사용.
TRACE: 이 방법은 클라이언트와 서버 간의 요청 및 응답의 진단 추적을 검색하는 데 사용. 디버깅 목적으로 자주 사용.
```

- HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
  ```
  > GET으로 데이터 보내기:
   1. 데이터를 쿼리 매개변수로 URL 추가. 예를 들어 "이름" 및 "나이" 데이터를 보내려는 경우 다음과 같이 URL에 추가 가능.
   `http://example.com/path?name=John&age=30`
   2. 사용자가 요청을 제출하면 브라우저는 데이터를 URL의 일부로 서버 보냄.
   3. 서버 측에서는 서버 측 프로그래밍 언어를 사용하여 쿼리 매개변수에서 데이터를 검색 가능.

   > POST를 통해 데이터 보내기:
  1. 보낼 데이터로 양식을 만듬 예를 들어 "이름"과 "나이" 데이터를 보내려면 이름이 "이름"과 "나이"인 두 개의 입력 필드가 있는 양식을 만듬.
  2. 폼의 method 속성을 "POST"로 설정하고 action 속성을 데이터를 받을 서버의 URL로 설정합니다.
  Copy code
  <form method="POST" action="http://example.com/path">
    <input type="text" name="name">
    <input type="text" name="age">
    <input type="submit" value="Submit">
  </form>
  사용자가 양식을 제출하면 브라우저는 데이터를 요청 본문으로 서버에 보냄.
  서버 측에서는 서버 측 프로그래밍 언어를 사용하여 요청 본문에서 데이터를 검색 가능.
  ```
  - HTTP 요청의 `Content-Type` 헤더는 무엇인가요?

```
 > 'Content-Type' 헤더는 HTTP 요청의 메시지 본문에서 전송되는 콘텐츠 유형을 지정하는 HTTP 요청 헤더. 메시지 본문을 구문 분석하는 방법과 포함된 데이터를 처리하는 방법을 결정하기 위해 서버에서 사용.
```

- Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

```
> form-data: 이 옵션은 HTML 형식의 형식으로 데이터를 보낼 때 사용합니다. 일반적으로 파일을 업로드하거나 이진 콘텐츠가 포함된 데이터를 보내는 데 사용됩니다. 'form-data' 형식에서 데이터는 일련의 키-값 쌍으로 전송됩니다.
> x-www-form-urlencoded: 이 옵션은 URL 인코딩 형식으로 데이터를 보내는 데 사용됩니다. 일반적으로 HTML 양식 데이터를 서버에 제출하는 데 사용됩니다. x-www-form-urlencoded 형식에서 데이터는 URL 인코딩 형식으로 인코딩된 데이터와 함께 메시지 본문의 키-값 쌍으로 전송됩니다.
> raw: 이 옵션은 JSON 또는 XML과 같은 원시 형식으로 데이터를 보내는 데 사용됩니다. 일반적으로 RESTful API에 데이터를 보내는 데 사용됩니다. 'raw' 형식에서 데이터는 추가 형식 없이 메시지 본문에 일반 텍스트로 전송됩니다.
> binary: 이 옵션은 이미지 또는 오디오 파일과 같은 바이너리 데이터를 원시 형식으로 보내는 데 사용됩니다. 일반적으로 서버에 파일을 업로드하는 데 사용됩니다. 'binary' 형식에서 데이터는 추가 형식 없이 원시 이진 형식으로 전송됩니다.
```

- node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  - `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?
  ```
  > `req` 개체는 클라이언트에서 서버로 들어오는 HTTP 요청을 나타낸다. 여기에는 사용된 HTTP 메서드 (예:GET, POST) 요청된 리소스의 URL, 헤더(예: User-Agent헤더) 및 메세지 본문과 같은 정보가 포함된다.
  > `req` 개체에서 액세스할 수 있는 속성
   1.req.method: 요청에 사용된 HTTP 메서드(예: GET, POST).
   2. req.url: 요청된 리소스의 URL
   3. req.headers: 요청과 함께 전송된 헤더를 포함하는 개체
   4. req.body: 요청에 JavaScript 객체가 있는 경우 요청의 메시지 본문으로, JavaScript 객체로 구문 분석됨
  ```
  - node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  - GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?
  ```
  >GET 및 POST 요청에 대한 처리 유형은 데이터 전송 방법이 다르고 서버가 데이터를 사용하기 위해 데이터를 다르게 구문 분석해야 하기 때문에 다르다.
  > GET 요청은 URL의 쿼리 문자열로 데이터를 전송하는 반면 POST 요청은 HTTP 요청의 메세지 본문으로 데이터를 전송합니다.
  ```
- 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?

```
> Node.js의 미들웨어를 사용하여 서버를 구성
> 미들웨어는 서버의 요청 처리 파이프라인에 기능을 추가하는 방법
> 요청 및 응답 객체를 수정하거나 요청-응답 주기를 조기에 종료할 수 있는 기능으로 구성한다. 다양한 Content-Type 헤더를 처리하는 맥락에서 미들웨어는 들어오는 POST 요청의 Content-Type 헤더를 검사하고 요청을 콘텐츠 유형에 따라 적절한 처리기 기능으로 라우팅 가능.

```

- 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?

```
> HTTP POST 요청의 'Content-Type' 헤더 외에도 서버는 HTTP 메서드, URL, 쿼리 매개변수, 쿠키 및 요청 헤더와 같은 HTTP 요청의 다른 헤더와 데이터도 처리가능.
>  Node.js에서는 http 또는 https 모듈을 사용하여 HTTP 또는 HTTPS 서버를 만들고 서버 개체의 request 이벤트를 사용하여 다양한 유형의 요청을 처리할 수 있다. request 이벤트는 들어오는 request 객체와 나가는 response 객체라는 두 가지 인수를 제공. 이러한 개체의 속성과 메서드를 사용하여 들어오는 요청을 검사 및 수정하고 응답을 다시 클라이언트로 보내기 가능.
> 서버에서 HTTP 요청의 이러한 다양한 측면을 분류하기 위해 사용 중인 프로그래밍 언어 및 웹 프레임워크에 따라 다양한 기술과 도구를 사용할 수 있습니다.
```

## Quest

- 다음의 동작을 하는 서버를 만들어 보세요.
  - 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  - 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  - 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  - 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
- expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
- 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced

- 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?

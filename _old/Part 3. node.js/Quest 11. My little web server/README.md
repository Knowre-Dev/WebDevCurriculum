# Quest 11. My little web server


## Introduction
* 이번 퀘스트에서는 간단한 웹서버를 만들어 보겠습니다.

## Topics
* GET/POST
* node.js `http` module
  * `req`와 `res` 객체

## Resources
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

## Checklist
* HTTP의 GET과 POST 메소드는 어떻게 다른가요?
  * 다른 HTTP 메소드에는 무엇이 있나요?
* HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
  * HTTP 요청의 `Content-Type` 헤더는 무엇인가요?
  * Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

## Quest
* 다음의 동작을 하는 서버를 만들어 보세요.
  * 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력하는 서버를 만들어 보세요.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력하는 서버를 만들어 보세요.
  * 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 POST 메소드로 보내면, `Hello, [문자열]`을 출력하는 서버를 만들어 보세요.
* expressJS와 같은 외부 프레임워크를 사용하지 않고 만들어 보세요.

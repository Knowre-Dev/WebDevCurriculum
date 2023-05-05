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

> GET: 리소스 조회
> 리소스를 조회할 때 사용, 서버에 전달할 데이터는 query를 통해서 전달
> POST: 요청 데이터를 처리, 주로 데이터 등록
> 데이터 요청을 처리, 메세지 바디를 통해 서버로 데이터를 전달

- 다른 HTTP 메소드에는 무엇이 있나요?

  > PUT: 리소스를 대체, 해당 리소스가 없으면 생성
  > 리소스가 있으면 대체, 없으면 생성
  > PATCH: 리소스를 일부만 변경
  > 리소스를 수정할 때 사용되지만, PATCH는 일부분만 변경할 수 있다.
  > DELETE: 리소스 삭제
  > 리소스 삭제
  > 그 외 HEAD, CONNECT, OIPTIONS, TRACE 등이 있다.

- HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?

> GET: query를 통해 데이터를 보낸다.
> POST: request body에 JSON 형태로 데이터를 작성하여 보낸다.

- HTTP 요청의 `Content-Type` 헤더는 무엇인가요?

> 클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지를 알려준다.
> HTTP 표준 스펙을 따르는 브라우저와 웹서버는 우선적으로 Content-Type 헤더를 기준으로 HTTP 메시지에 담긴 데이터를 분석하고 파싱한다.

- Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

> form-data: form 형태의 데이터를 key-value 쌍으로 작성하여 요청하는 방법. ⇒ ASCII 문자값(텍스트)와 함께 바이너리 데이터(이미지, 영상 등)을 전송할 때 사용한다.
> x-www-form-urlencoded: ASCII 문자값(텍스트)만 보낼 때 사용한다.
> raw: 문자 그대로 날 것의 텍스트를 보낸다. ⇒ HTML, Javascript, JSON, XML 등의 형식을 지원한다.
> binary: 텍스트 없이 이미지나 영상, 오디오 파일 등을 보낼 때 사용한다.

# node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,

# `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?

1. `req`

| 추가한 정보               | 설명                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| query                     | 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인한다.                                                                               |
| body                      | 클라이언트에서 POST 방식으로 전송한 요청 파라미터를 확인한다. 단, express.json()이나 express.urlencoded()와 같은 미들웨어를 사용해야 한다. |
| get(field), header(field) | 헤더를 확인한다.                                                                                                                           |

2. `res`:

| 메소드 이름                          | 설명                                                                                                                 |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| send([body])                         | 클라이언트에 응답 데이터를 보낸다. 전달할 수 있는 데이터엔 HTML 문자열, Buffer 객체, JSON 객체, JSON 배열 등이 있다. |
| status(code)                         | HTTP 상태 코드를 반환한다. 상태 코드는 end()나 send() 같은 전송 메소드를 추가로 호출해야 전송할 수 있다.             |
| sendStatus(statusCode)               | HTTP 상태 코드를 반환한다. 상태 코드는 상태 메시지와 함께 전송된다.                                                  |
| redirect([status,] path)             | 웹 페이지 경로를 강제로 이동시킨다.                                                                                  |
| render(view, [, locals][, callback]) | 뷰 엔진을 사용해 문서를 만든 후 전송한다.                                                                            |

<br />

- GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?

> GET은 헤더 부분에 요청 정보를 넣어서 전달하고, POST는 본문 부분에 요청 정보를 넣어서 전달한다.
> GET은 중요한 정보가 노출될 위험이 있고, String 길이에 제한이 있으므로 많은 양의 데이터를 전송할 수 없다.
> POST는 서버에 있는 데이터 변경을 위해 사용하고, Body에 정보가 담겨 서버에 전달돼 보안성이 좋고 GET 방식보다 더 많은 데이터를 전송할 수 있다.

- 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?

> endpoint 관련 문제

> → client로 부터 많은 요청이 오고, 이에 따른 resource update(PUT req)가 발생
> → HTML form tag로 부터의 request 등 예상치 못한 API exception이 발생

> 각 문제별로 생각할 수 있는 방안

> → middleWare에서 parsing하는 부분을 더 효율적으로 구상한다.
> → content-type을 json 방식 혹은 x-www-url-encoded(url-encoded) 방식으로 제공하는 두개의 method를 구성하는 등 지원하는 data 형식을 확인한다.

> browser(server)의 기본 동작을 정의해주는 content-type

> → req header에 구성되어있는 content-type은 기본적으로 browser가 resource를 받았을때 어떠한 동작을 해야하는지 정의해주고 있다.
> → HTTP header type은 content-type보다 사전적으로는 범위가 넓은 개념이지만, REST API와 같이 사실상 유사한 개념으로 볼 수 있다.

- 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?

> → 기본적으로 http module을 사용한다면 res인자에 server 응답 정보가 담겨져 온다.
> → 우리의 역할은 이 res인자를 parsing하여, client가 어떠한 가공된 정보를 받아야 하는지 결정하고 구현하는 것이다.

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

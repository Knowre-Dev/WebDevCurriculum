# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?

> 프론트에서 유효성 검사는 UX 측면에서 사용자에게 알려주기 위해, 불필요한 요청을 서버로 보내지 않기 위해 필요하다.
> 그러나 프론트의 유효성 검사는 쉽게 회피할 수 있기 때문에 서버에서 검증 코드를 작성해야 한다.

- 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?

> 악성 스크립트를 포함하는 요청을 서버에서 필터링하지 않았고 응답할 때도 필터링하지 않았다면 Stored XSS 공격에 노출된다.

- XSS(Cross-site scripting)이란 어떤 공격기법일까요?

> 웹 페이지에 악성 자바스크립트를 삽입하는 공격이다. 이 공격을 이용하면 사이트 이용자의 정보를 손쉽게 탈취할 수 있다.

> XSS는 다음과 같은 필터링을 통해 쉽게 방어할 수 있습니다.
> 서버에 데이터를 저장할 때 HTML 필터링을 한 후 데이터베이스에 저장한다. (<, >, script, style, &, /, ...)
> Reflected XSS나 DOM Based XSS 공격 방어를 위해 서버에서 파라미터 검증을 한다.
> 혹시나 모를 상황에 대비하여 프론트엔드에서도 필터링이 필요하다.

- CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?

> 공격자가 피싱 사이트에 접속한 사용자를 이용하여 본 사이트에 요청을 보내는 공격이다.
> 백엔드에서 CSRF 토큰을 사용해 방어할 수 있다.

- SQL Injection이란 어떤 공격기법일까요?

> 클라이언트의 입력값을 조작해 악의적인 SQL문이 실행되게 함으로써 데이터베이스를 조작하는 공격이다.

- 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?

> HTTPS는 HTTP에 데이터 암호화가 추가된 프로토콜이기 때문이다. 네트워크 중간에 제3자가 정보를 볼 수 없도록 암호화를 지원한다.

- HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?

> HTTPS는 보안 통신 프로토콜인 TLS 위에 HTTP 프로토콜을 얹어 암호화된 연결을 하는 방식.
> [HTTPS 통신과정 쉽게 이해하기](https://aws-hyoh.tistory.com/entry/HTTPS-%ED%86%B5%EC%8B%A0%EA%B3%BC%EC%A0%95-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-3SSL-Handshake)

- HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?

> 클라이언트가 접속한 서버가 클라이언트가 의도한 서버가 맞는지를 보장하는 역할이다.
> 클라이언트가 서버에 접속한 직후에 서버는 클라이언트에게 인증서 정보를 전달한다.
> 클라이언트는 이 인증서 정보가 신뢰할 수 있는 것인지를 검증 한 후에 다음 절차를 수행한다.
> 클라이언트와 서버가 주고 받는 실제 정보는 대칭키 방식으로 암호화하고, 대칭키 방식으로 암호화된 실제 정보를 복호화할 때 사용할 대칭키는 공개키 방식으로 암호화해서 클라이언트와 서버가 주고 받는다.

> [HTTPS와 SSL 인증서](https://opentutorials.org/course/228/4894)

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

- TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
- HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?

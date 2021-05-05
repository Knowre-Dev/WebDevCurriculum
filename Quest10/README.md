# Quest 10. 인증의 이해

## Introduction
* 이번 퀘스트에서는 웹에서의 인증에 관해 알아보겠습니다.

## Topics
* Cookie
* Session
* JWT

## Resources
* [MDN - HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
* [Cookies and Sessions](https://web.stanford.edu/~ouster/cgi-bin/cs142-fall10/lecture.php?topic=cookie)
* [JWT](https://jwt.io/)

## Checklist
* 쿠키란 무엇일까요?
  * 쿠키는 어떤 식으로 동작하나요?
  * 쿠키는 어떤 식으로 서버와 클라이언트 사이에 정보를 주고받나요?
* 웹 어플리케이션의 세션이란 무엇일까요?
  * 세션의 ID와 내용은 각각 어디에 저장되고 어떻게 서버와 교환되나요?
* JWT란 무엇인가요?
  * JWT 토큰은 어디에 저장되고 어떻게 서버와 교환되나요?
* 세션에 비해 JWT가 가지는 장점은 무엇인가요? 또 JWT에 비해 세션이 가지는 장점은 무엇인가요?

## Quest
* 이번에는 메모장 시스템에 로그인 기능을 넣고자 합니다.
  * 사용자는 딱 세 명만 존재한다고 가정하고, 아이디와 비밀번호, 사용자의 닉네임은 하드코딩해도 무방합니다.
  * 로그인했을 때 해당 사용자가 이전에 작업했던 탭들과 마지막으로 활성화된 탭 등의 상태가 로딩 되어야 합니다.
  * 세션을 이용한 버전과, JWT를 이용한 버전 두 가지를 만들어 보세요!
    * 세션을 이용할 경우 세션은 서버의 메모리나 파일에 저장하면 됩니다.

## Advanced
* Web Authentication API(WebAuthn)은 무엇인가요?

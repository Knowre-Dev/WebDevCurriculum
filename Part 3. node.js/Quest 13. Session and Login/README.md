# Quest 13. Session and Login


## Introduction
* 이번 퀘스트에서는 로그인 기능이 어떻게 구현되는지를 알아보겠습니다.

## Topics
* Cookie
* Session
* Chrome developer tools > 'Resources' tab

## Resources
* [Express Framework](http://expressjs.com/)
  * [express-session](https://github.com/expressjs/session)
* [자바스크립트 완벽 가이드](http://www.yes24.com/24/Goods/8275120?Acode=101), 인사이트
* [자바스크립트 객체지향 프로그래밍](http://www.yes24.com/24/Goods/7276246?Acode=101), 위키북스

## Checklist
* 쿠키란 무엇일까요?
  * 쿠키는 어떤 식으로 동작하나요?
  * 쿠키는 어떤 식으로 서버와 클라이언트 사이에 정보를 주고받나요?
* 웹 어플리케이션의 세션이란 무엇일까요?
  * 세션의 내용은 어디에, 어떤 식으로 저장되나요?

## Quest
* Quest 12에서 수행했던 메모장에 로그인 기능을 넣고자 합니다.
  * 사용자는 딱 세 명만 존재한다고 가정하고, 아이디와 비밀번호, 사용자의 닉네임은 하드코딩해도 무방합니다.
  * 로그인했을 때 해당 사용자가 이전에 작업했던 탭들과 선택된 탭, 커서 위치 등의 상태가 로딩 되어야 합니다.

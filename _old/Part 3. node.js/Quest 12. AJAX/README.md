# Quest 12. AJAX


## Introduction
* 이번 퀘스트에서는 드디어 서버와 클라이언트로 구성된 어플리케이션을 만들어 보겠습니다.

## Topics
* expressJS
* `setTimeout()`
* AJAX, `XMLHttpRequest`, `fetch()`

## Resources
* [Express Framework](http://expressjs.com/)
* [자바스크립트 완벽 가이드](http://www.yes24.com/24/Goods/8275120?Acode=101), 인사이트
* [자바스크립트 객체지향 프로그래밍](http://www.yes24.com/24/Goods/7276246?Acode=101), 위키북스
* [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist
* 어떠한 자바스크립트 코드가 HTTP 응답이나 사용자의 이벤트등에 종속되어 언제 실행되어야 할 지 알기 어려울 때엔 어떻게 해야 할까요?
* 브라우저의 `XMLHttpRequest` 객체는 무엇이고 어떻게 동작하나요?
* `fetch` API는 무엇이고 어떻게 동작하나요?
  * 자바스크립트의 Promise는 어떤 객체이고 어떤 일을 하나요?
  * 자바스크립트의 `async`와 `await` 키워드는 어떤 역할을 하며 그 정체는 무엇일까요?

## Quest
* 자바스크립트를 이용하여 간단한 웹브라우저 기반의 텍스트 파일 메모장을 만들어 보겠습니다.
  * 먼저 연습으로 Quest 11의 GET/POST 요청을 AJAX를 통해 처리하는 것을 시도해 보세요!
    * 화면에 출력되는 대신 콘솔에 결과가 나오면 됩니다.
  * 새 파일, 로드, 저장, 수정 등의 기능이 있어야 합니다.
  * 탭을 통해 여러 개의 파일을 동시에 편집할 수 있어야 합니다.
  * 이 메모장의 메모들은 서버의 파일시스템에 그대로 저장되어야 합니다.
* `skeleton` 디렉토리에서 작업을 하시되, 작업을 시작하기 전에 해당 디렉토리에서 `npm install` 명령을 날리시면 자동으로 express가 설치됩니다.

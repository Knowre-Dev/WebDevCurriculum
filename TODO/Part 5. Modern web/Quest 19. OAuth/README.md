# Quest 19. OAuth


## Introduction
* 이번 퀘스트에서는 웹사이트들에서 보이는 페이스북이나 구글 로그인 기능은 어떻게 만드는지 알아보겠습니다.

## Topics
* OAuth 2.0
* OpenAPI

## Resources
* [OAuth](https://en.wikipedia.org/wiki/OAuth)
* [Google OAuth API HowTo](https://developers.google.com/identity/protocols/OAuth2)
* [node.js Google OAuth API](https://github.com/google/google-api-nodejs-client/)
* [Google Developers Console](https://console.developers.google.com)

## Checklist
* 페이스북이나 구글같은 회사는 어떤 식으로 다른 사이트에게 사용자 비밀번호를 넘기지 않고 사용자 인증을 해 줄 수 있을까요?
  * OAuth란 무엇인가요?
  * OAuth를 통해 사용자 인증을 할 때 어떤 경로로 어떤 정보가 흘러가야 할까요?

## Quest
* Quest 12~15에서 만든 메모장 시스템에 구글 로그인 버튼을 추가하고자 합니다.
  * 구글 버튼을 통해 로그인을 할 수 있어야 합니다.
    * 처음 로그인했을 경우, 해당하는 유저 테이블에 이메일 주소와 해당하는 사람의 이름이 추가되게 됩니다.
    * 두 번째 로그인부터는 일치하는 이메일 주소를 찾아 그 유저의 이름으로 모든 것이 저장되어야 합니다.

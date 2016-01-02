# Quest 18. WebSocket


## Introduction
* 이번 퀘스트에서는 브라우저의 요청 없이도 서버가 브라우저에게 무언가 말을 걸어 데이터를 주고받는 방법에 대해 알아보겠습니다.

## Topics
* websocket
  * socket.io

## Resources
* [www.websocket.org](http://www.websocket.org/)
* [MDN - WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [socket.io](http://socket.io/)

## Checklist
* WebSocket은 어떤 방식으로 HTTP 프로토콜 위에 실시간 통신을 구현하나요?
* socket.io를 통해 node.js 서버에서 여러 개의 채팅방을 관리/구현하려면 어떻게 해야 하나요?

## Quest
* Quest 17에서 만든 스케치보드를 실시간 멀티플레이어 방식으로 업그레이드 해 보겠습니다.
  * 생성, 이동, 삭제 등 모든 변화는 실시간으로 기록되고 상대방에게 반영되어야 합니다.
  * 여러 개의 방을 구현할 수 있어야 합니다.
  * socket.io를 사용해도 무방합니다.

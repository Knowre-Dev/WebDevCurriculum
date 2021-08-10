# Quest 18-F. 프로그레시브 웹앱

## Introduction
* 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 프로그레시브 웹앱에 관해 알아보겠습니다.

## Topics
* Progressive Web App(PWA)
* Service Worker
* Cache & CacheStorage API
* Web Manifest

## Resources
* [MDN - Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [MDN - Progressive web app Introduction](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction)
* [MDN - Service Worker API](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)
* [web.dev - Progressive Web Apps](https://web.dev/progressive-web-apps/)

## Checklist

- 웹 어플리케이션을 프로그레시브 웹앱 형태로 만들면 어떤 이점을 가질까요?
  - 오프라인 캐시
  - 푸시알림
  - 빠른 실행 속도
  - (앱) 네이티브 앱과 유사한 사용자 경험 제공
  - 웹 구축 + 약간의 노력(?) 이면 구축 가능
  - 검색엔진에 의해 노출 가능
- 서비스 워커란 무엇인가요? 웹 워커와의 차이는 무엇인가요?
  - 서비스워커
    - 브라우저가 백그라운드에서 실행하는 스크립트 (웹 페이지와는 별개)
    - 추가 스레드에서 실행되어 메인쓰레드을 블록시키지 않음
    - `window` , `document` 객체 접근 불가
    - 주로 네트워크 프록시, 백그라운드 작업, 캐싱, 오프라인 처리 등
  - vs 웹워커?
    - 서비스워커는 `fetch` 이벤트나 `push` 이벤트등을 listen하여 프록시 역할 할 수 있음
    - 웹워커는 탭 마다 존재 & 탭 닫을시 종료
    - 서비스워커는 활성탭이 없더라도 백그라운드에서 실행

- PWA의 성능을 높이기 위한 방법론에는 어떤 것들이 있고, 어떤 식으로 적용할 수 있을까요?
  - 결국엔 "꼭 필요한것만" "적절한 순간"에 요청하는게 중요한것 같다.
  - **캐싱**
    - 프리캐싱
    - 런타임캐싱
    - 각 리소스의 성격에 맞게 캐싱전략
      - Cache First : 항상 캐시를 먼저 접근
      - Cache Only : 캐싱 파일만 확인하고 없으면 에러
      - Network First : 네트워크 요청을 먼저 진행하는 방식
      - Network Only : 캐싱 파일의 유무와 관계 없이 항상 네트워크 요청
      - StaleWhileRevalidate : 캐싱을 먼저 시도하고 없으면 네트워크 요청
  - **Adaptive loading / Optimized Images**
    - 클라이언트의 네트워크 상태나 디바이스 상태에 따라 맞춤형 로드
    - 이미지를 로드 해야된다고 가정하면 느린 네트워크로 요청시 리사이징된 작은 이미지로 로드
    - 높은 효율로 압축된 이미지
  - **Prevent asset leaking / Lazy loading**
    - 필요한 리소스를 적절한 시점에 요청하자

## Quest

- 텍스트 에디터 프로그램을 PWA 형태로 만들어 보세요.
- 필요한 에셋을 적절히 캐싱하되, 버전업이 되었을 때 캐싱을 해제할 수 있는 형태가 되어야 합니다.
- 해당 PWA를 데스크탑에 인스톨 가능하도록 만들어 보세요.
- 오프라인인 경우에는 임시저장 기능을 만들어, 온라인인 경우를 감지하여 자동으로 서버에 반영되도록 만들어 보세요.

## Advanced

- 본 퀘스트의 주제로 고려되었으나 분량상 선정되지 않은 주제들은 다음과 같습니다. 시간날 때 한 번 찾아 보세요!
  - Search Engine Optimization(SEO)
  - CSS-in-JS와 Styled Component
  - Server-Side Rendering(SSR)
  

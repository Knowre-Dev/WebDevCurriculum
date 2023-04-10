# Quest 18-F. 프로그레시브 웹앱

## Introduction

- 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 프로그레시브 웹앱에 관해 알아보겠습니다.

## Topics

- Progressive Web App(PWA)
- Service Worker
- Cache & CacheStorage API
- Web Manifest

## Resources

- [MDN - Progressive web apps (PWAs)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [MDN - Progressive web app Introduction](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction)
- [MDN - Service Worker API](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API)
- [web.dev - Progressive Web Apps](https://web.dev/progressive-web-apps/)

## Checklist

- 웹 어플리케이션을 프로그레시브 웹앱 형태로 만들면 어떤 이점을 가질까요?

```
 > PWA(Progrssiv Web App)은 최신 웹 기술을 사용하여 사용자
 에게 네이티브와 같은 경험을 제공하는 웹 에플리케이션.
 > 이점: 1. 오프라인 액세스: 사용자는 인터넷에 연결되어 있지
                            않아도 앱에 액세스 가능.
         2. 네이티브와 유사한 경험을 제공.
         3. Service Workers 및 WebAssembly와 같은 최신 웹
           기술을 사용하여 성능 및 로드 시간 개선
         4. 개발 비용 절감
```

- 서비스 워커란 무엇인가요? 웹 워커와의 차이는 무엇인가요?

```
> 서비스 워커는 웹 애플리케이션의 백그라운드에서 실행되는 웹
워커의 일종으로 브라우저에서 생성한 네트워크 요청을 가로챈다.
> 브라우저에 의해 등록되고 클라이언트 장치에 캐시되는
 JavaScript 파일이므로 사용자가 오프라인일 때도 작동 가능.
> 차이점: 목적과 애플리케이션과 상호 작용하는 방식.
  - 서비스 워커는 백그라운드에서 실행되고 네트워크 요청과
  상호 작용하도록 설계 됨.
  - 웹 워커는 복잡한 계산을 수행하고 기본 UI 스레드 차단을
  방지하기 위해 별도의 스레드에서 실행되도록 설계.
```

- PWA의 성능을 높이기 위한 방법론에는 어떤 것들이 있고, 어떤 식으로 적용할 수 있을까요?

```
> 이미지, CSS 및 Javascript 파일과 같이 자주 사용하는 데이터
를 클라이언트의 캐시에 저장하는 캐싱 방법.
> 콘텐츠를 한번에 모드 로드하지 않고 필요할 때만 콘텐츠를
로드하는 레이지 로딩 방법.
> 사용자 위치에서 가장 가까운 서버에서 사용자에게 콘텐츠를
캐시하고 전달할 수 있는 서버 네트워크인 CDN 사용 방법.

```

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

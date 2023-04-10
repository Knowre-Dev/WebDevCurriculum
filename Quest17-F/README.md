# Quest 17-F. 번들링과 빌드 시스템

## Introduction

- 이번 퀘스트에서는 현대적 웹 클라이언트 개발에 핵심적인 번들러와 빌드 시스템의 구조와 사용 방법에 대해 알아보겠습니다.

## Topics

- Webpack
- Bundling
  - Data URL
- Transpiling
  - Source Map
- Hot Module Replacement

## Resources

- [Webpack](https://webpack.js.org/)
- [Webpack 101: An introduction to Webpack](https://medium.com/hootsuite-engineering/webpack-101-an-introduction-to-webpack-3f59d21edeba)

## Checklist

- 여러 개로 나뉘어진 자바스크립트나 이미지, 컴포넌트 파일 등을 하나로 합치는 작업을 하는 것은 성능상에서 어떤 이점이 있을까요?

```
 1. 여러 JavaScript 파일을 하나로 결합하면 브라우저가 스크립트
 를 다운로드하기 위해 수행해야 하는 HTTP 요청 수 다운.
 2. 여러 이미지를 하나로 병합하면 요청 수가 줄어들고 페이지
 로드 시간도 개선될 수 있음.
 3. 여러 Vue 구성 요소를 하나로 병합하면 구성 요소를 로드하는데
 필요한 HTTP 요청수 줄어듬.
 4. 파일 병합은 웹 응용 프로그램의 개발 및 유지 관리를 단순화.
```

- 이미지를 Data URL로 바꾸어 번들링하는 것은 어떤 장점과 단점이 있을까요?

```
> 장점: 1. HTTP 요청 감소
        2. 간소화된 배포
        3. 이식성 향상
  단점: 1. 파일 크기 증가
        2. 캐싱 감소
        3. 제한된 브라우저 지원
```

- Source Map이란 무엇인가요? Source Map을 생성하는 것은 어떤 장점이 있을까요?
  ```
  > Source Map이란 배포용으로 빌드한 파일과 원본 파일을 서로
  연결시켜주는 기능.
  > 보통 서버에 배포를 할 때 성능 최적화를 위해 html,css,js와
  같은 웹 자원들을 압축함.
  > 장점: 1. 에러 디버깅을 빠르게 식별할 수 있다.
          2. 개발자가 축소되거나 트랜스파일된 코드로 작업하는
          대신 원본 소스 코드를 최적화 할 수 있어서 유지 관리
          하기 좋음.
          3. 원본 소스 코드를 비공개로 유지하면서 축소되거나
          트랜스파일된 코드에 대한 액세스를 계속 제공하면서
          코드 보안이 강화된다.
  ```
- Webpack의 필수적인 설정은 어떤 식으로 이루어져 있을까요?
  ```
  > Entry point: Web이 코드 번들링을 시작하는 시작점 지정.
    Output: 번들 코드를 저장할 위치 지정.
    Loaders: 파일이 번들에 추가되기 전에 파일을 사전 처리하는데 사용.
    Plugins: 번들링 프로세스 중에 추가 작업을 수행하는데 사용
    Mode: "개발"또는 "생산"중 Webpack이 실행되어야 하는 모드 지정.
  ```
  - Webpack의 플러그인과 모듈은 어떤 역할들을 하나요?
  ```
  > 플러그인은 번들된 결과물을 처리. 번들된 자바스크립트를
  난독화 한다거나 특정 텍스트를 추출하는 용도로 사용.
  ```
  - Webpack을 이용하여 HMR(Hot Module Replacement) 기능을 설정하려면 어떻게 해야 하나요?

```
> Webpack Dev Server에 대한 구성을 지정하는 devServer 옵션을
 포함하도록 Webpack 구성 파일을 수정한다. 이 옵션은 HMR을
  활성화하기 위해 true로 설정된 hot 속성을 포함시킨다.
```

## Quest

- 직전 퀘스트의 소스만 남기고, Vue의 Boilerplating 기능을 쓰지 않고 Webpack 관련한 설정을 원점에서 다시 시작해 보세요.
  - 필요한 번들링과 Source Map, HMR 등의 기능이 모두 잘 작동해야 합니다.

## Advanced

- Webpack 이전과 이후에는 어떤 번들러가 있었을까요? 각각의 장단점은 무엇일까요?

# Quest 07. node.js의 기초

## Introduction

- 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics

- node.js
- npm
- CommonJS와 ES Modules

## Resources

- [About node.js](https://nodejs.org/ko/about/)
- [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
- [npm](https://docs.npmjs.com/about-npm)
- [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
- [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
- [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist

- node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?

```
> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다.
즉, 노드를 통해 다양한 자바스크립트 앱을 실행 가능하며, 서버를 실행하는데 제일 많이 사용.
> Node.js는 서버사이트 스크립트 언어가 아니다. 프로그램 (환경) 이다.
> Node.js의 내부 구조는 V8 엔진과 libuv 그리고 Node.js 바인딩 모듈로 구성된다. V8 엔진은 구글에서 개발한 JavaScript엔진으로, Node.js에서 JavaScript 코드를 실행 시크는 역할을 한다.
> libuv는 Node.js 에서 I/O 작업을 비동기적으로 처리하기 위한 멀티 플랫폼 I/O 라이브러리이다.
> 이 라이브러리를 통해 Node.js는 단일 스레드와 이벤트 루프를 사용하여 I/O 작업을 비동기적으로 처리 한다.
> Node.js 바인딩 모듈은 C/C++ 언어로 작성된 바이너리 모듈을 Node.js에서 사용할 수 있도록 연결해주는 역할을 한다.
```

- npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?

```
> npm은 말 그대로 노드 패키지를 관리해주는 틀이다.
 * 이때 이 패키지들이 서로 의존이 되어 있어서, 하나의 문제가 발생하면 다른것들 까지 기능하지 않을 수 있다. 그래서 이를 관리하기 위해 Package.json가 있다.
> `package.json은 해당 프로젝트의 정보를 담고 있으며, 프로젝트의 이름과 버전, 라이선스, 의존성 등의 정보를 기록한다.
> 필드 구성
 name: 패키지의 이름을 나타낸다. 이 이름은 npm 레지스트리에서 고유해야 한다.
version: 패키지의 버전을 나타낸다.일반적으로 Major.Minor.Patch 형식으로 작성 됨.
description: 패키지에 대한 간단한 설명을 나타낸다.
main: 패키지의 진입점 파일의 경로를 지정한다.
keywords: 패키지를 검색할 때 사용되는 키워드를 나타낸다.
author: 패키지의 작성자 정보를 나타낸다.
license: 패키지의 라이선스 정보를 나타낸다.
repository: 패키지의 소스 코드 저장소 정보를 나타낸다.
dependencies: 패키지가 의존하는 다른 패키지들의 정보를 나타낸다.
devDependencies: 패키지를 개발할 때만 필요한 다른 패키지들의 정보를 나타낸다.
scripts: 패키지에서 실행할 수 있는 스크립트를 나타낸다.
bin: 패키지에서 실행 가능한 바이너리 파일들의 정보를 나타낸다.
```

- npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

```
> npx는 npm을 좀 더 편하게 사용하기 위해 나온 npm에서 제공해주는 하나의 도구이다. (Package Runner)(실행)
> npx는 npm 레지스트리에 올라가 있는 패키지를 쉽게 설치하고 관리할 수 있또록 도와주는 CLI(Command line interface) 도구이다.
> npm install 명령어를 사용하여 패키지를 설치할 때 -g 옵션을 주면 해당 패키지가 글로벌(Global) 영역에 설치된다. 글로벌 영역에 설치된 패키지는 해당 시스템 전체에서 사용 가능.
> 반면에 -g 옵션 없이 패키지를 설치하면 로컬(Local) 영역에 설치가 된다. 로컬 영역에 설치된 패키지는 해당 프로젝트 내에서만 사용가능. 따라서, -g 옵션을 사용하여 글로벌 영역에 패키지를 설치하면 여러 프로젝트에서 해당 패키지를 사용할 수 있다.
```

- 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

```
1. <script> 태그를 사용하여 다른 JavaScript 파일을 불러오기
 > <script src="파일 경로"></script>  형식으로 사용. 이 방법은 HTML 파일 안에서 다른 JavaScript 파일을 불러올 때 주로 사용.

2. require 함수를 사용하여 다른 JavaScript 파일을 불러오기
  > require('파일 경로') 형식으로 사용. 이 방법은 Node.js에서 주로 사용.

3.import 문을 사용하여 다른 JavaScript 모듈을 불러오기
> import { 모듈 내용 } from '모듈 경로' 형식으로 사용. 이 방법은 ECMAScript 6부터 사용 가능하며, 주로 브라우저에서 사용.
AJAX를 사용하여 다른 JavaScript 파일을 불러오기

4. XMLHttpRequest 객체를 사용하여 다른 파일을 가져옵니다.
> 이 방법은 주로 웹 애플리케이션에서 사용.

5. importScripts 함수를 사용하여 다른 JavaScript 파일을 불러오기
> importScripts('파일 경로') 형식으로 사용. 이 방법은 워커(worker) 스크립트에서 사용.

> ES Modules는 정적인 방식으로 모듈을 가져오고 내보내서, CommonJS보다 더 나은 성능을 보이고 , 모듈 로딩이 비동기적으로 이루어져서, 필요한 모듈만 로드하여 불필요한 리소스 낭비를 방지할 수 있다. 그리고 최신 문법을 지원하기 때문에, 모듈을 작성하고 읽기 쉬운 코드를 작성할 수 있다.
```

- ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?

```
>  `require()`는 CommonJS 모듈 시스템에서 사용되는 함수이며, 모듈을 가져올 때 동기적으로 처리된다. 반면, ES Modules에서는 `import`구문을 사용하여 모듈을 가져오며, 이는 비동기적으로 처리 된다. 또한, `require() 함수는 동적 로딩 지원하지만, ES Modules에서 동적 로딩 불가능하다.

> CommonJS는 모듈을 동기적으로 로딩하며, 코드 실행시 로드되고 ES Modules는 비동기적 로딩되어 런타임 시에 동적으로 로드 되서 이로 인해 CommonJs는 동적으로 모듈을 로드하는 것이 가능하지만 ES는 불가능하다. 그리고 CommonJS에서는 exports를 직접 수정이 가능하지만 ES는 불가능하다.
```

- node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

```
> package.json 파일에 "type": "module"을 추가한다. 이를 통해 Node.js는 ES Modules를 사용할 것임을 인식

> ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면, Node.js에서 제공하는 `require()` 함수를 사용한다.

> 반대로, CommonJS 기반의 코드에서 ES Modules 패키지를 불러오려면, Node.js 버전 13.2.0 이후부터는 정식으로 ESM을 지원하기 시작하여 import 문법을 사용할 수 있다. 하지만, 이전 버전의 Node.js에서는 import를 사용할 수 없으며, Babel과 같은 transpiler를 사용해야 한다.
```

## Quest

- 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  - `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  - `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
- 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced

- node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?

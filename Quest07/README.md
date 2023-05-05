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

> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript **런타임(프로그래밍 언어가 구동되는 환경)**이다.
> Node.js는 **REPL(Read, Eval, Print, Loop)**을 통해서 런타임을 제공한다.
> Read: 유저의 입력 값을 받아서 메모리에 저장
> Eval: 입력 값의 평가, 실행
> Print: Eval로 인해 반환된 값을 출력
> Loop: 1~3을 반복.
> 비동기 이벤트 주도 Javascript 런타임으로써 Node는 확장성 있는 네트워크 어플리케이션을 만들 수 있도록 설계되었다.

- npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?

> NPM(Node Packaged Manager): Node.js로 만들어진 pakage(module)을 관리해주는 툴
> 자바스크립트 라이브러리를 설치하고 관리하는 패키지 매니저.
> NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할을 하며 설치/관리를 수행할 수 있는 CLI를 제공한다.
> npm에서는 package.json 파일로 프로젝트의 정보와 패키지들의 의존성을 관리한다.

- npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

> npm의 5.2.0 버전부터 새로 추가된 도구

> npm으로 패키지를 설치할 때 의존성 라이브러리들을 전역이나 로컬에 설치된 채 관리가 되면 전역으로 관리되고 있는 패키지도 업데이트 해주고, 로컬에서 관리되고 있는 패키지도 업데이트 해야 하므로 비효율적이다.

> ⇒ 이를 해결하기 위해 npx가 등장하였고, 일회성으로 원하는 패키지를 npm 레지스트리에 접근해서 실행시키고 설치하는 도구이다.

> npx(Node Package eXecute): 노드 패키지 실행 담당

> -g 옵션 사용하지 않으면 node_modules 폴더가 만들어지면서 정의된 모든 패키지가 다운로드 된다.

> -g 옵션을 사용하면 node.js 설치 경로(C:\Users\User\AppData\Roaming\npm)에 전역으로 패키지가 다운로드 된다.

- 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

> 최초의 Javascript는 간단한 모듈 시스템만 제공했다.

> <script src="./javascript.js"></script>

> 이러한 방식은 스크립트를 로드한 전역 컨텍스트에서 각 모듈 간 충돌이 발생할 수 있는 문제점이 있었다. ⇒ 모듈 간 스코프가 구분 되지 않는 문제
> 이러한 문제점으로 인해 Javascript 모듈을 표준화하기 위해 CommonJS, **AMD(Asynchronous Module Definition)**이 등장한다.
> CommonJS는 Javascript, 브라우저, 서버 사이드 애플리케이션 등 범용적인 용도로 사용하기 위한 모듈 시스템 방법이다.

> CommonJS
> 모든 종속성이 로컬 환경에 존재해서 필요한 모듈을 바로 사용할 수 있는 환경을 전제했고, 동기적으로 모듈을 호출하는 방식을 선택했다. 그러나 비동기 방식보다 느리고, 순환 잠조에 취약했다.

> AMD
> 문법이 다소 복잡하지만, 비동기적으로 모듈을 호출하는 방식을 선택했다.
> CommonJS보다 성능이 높고, 브라우저와 서버 사이드에서 모두 호환되는 방식이다.

> UMD
> CommonJS, AMD는 서로 지향하는 목적이 달랐고, CommonJS, AMD의 호환성 문제를 해결하기 위해 UMD가 등장했다.
> 두 방법의 코드를 모두 호환할 수 있다.
> 다만, CommonJS, AMD, UMD 모두 모듈 시스템의 부재로 근본적인 문제를 해결하지는 못했다. ⇒ 이를 해결하기 위해 ES6에서 모듈 시스템이 명세되었다.

> ES6
> Javascript는 언어 자체에서 모듈 시스템을 지원해야 한다는 필요성을 느끼고, 2015년 ES6 사양에서 표준 모듈 시스템이 명세되었다.
> 동기/비동기를 모두 지원하고, 문법도 단순하다.
> 실제 객체/함수를 바인딩하기 때문에 순환 참조 관리도 수월하다.

- ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?

> require()는 CommonJS를 사용하는 node.js문이지만, import()는 ES6에서만 사용된다.
> require()는 프로그램의 어느 지점에서나 호출할 수 있지만, import()는 파일의 시작 부분에서만 실행할 수 있다.
> ES6 Modules는 비교적 최근에 정의된 문법이어서 IE 같은 구형 브라우저에서는 제대로 동작하지 않는다는 문제가 있었다. ⇒ 이를 해결하기 위해 트랜스파일러가 등장하였다.
> 트랜스파일러(Transpiler): 한 번 컴파일하면 구형 브라우저에서도 동작하는 Javascript 코드가 나오게 만드는 도구
> 바벨(Babel) 등이 트랜스파일러이다.

- node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

> 대부분의 Node.js의 낮은 버전에서 ES module은 실험용으로 표시됩니다. 이는 모듈이 몇몇 기능이 부족하고 --experimental-modules flag 아래에 있다는 것을 뜻합니다.Node.js의 새로운 버전은 ES module을 안정적으로 지원합니다.

> 그러나, Node.js가 모듈을 ES모듈로 다루려면 다음 중 하나가 발생해야한다는 것을 기억해야합니다. 모듈의 파일 확장자가 .js(CommonJS의 경우)에서 .mjs(ES 모듈의 경우)로 변환되어야 합니다. 또는, 가장 가까운 package.json 파일에 {"type": "module"} 필드를 설정해야 합니다.

> 이 경우에 패키지에 있는 모든 코드는 ES modules로 취급되고 require()대신 import/export를 사용할 수 있습니다.

> ES module에서, import는 파일의 맨 처음에서만 호출되어 사용할 수 있습니다. 어디서 호출하든 파일 맨 처음으로 자동으로 옮겨지거나 에러가 뜹니다.

> 반면에, require()를 함수로 사용하면 런타임때 구문 분석이 됩니다.결과적으로 require()는 코드 어디에서든 호출 할 수 있습니다. 이를 사용해서 if문,조건부 루프, 함수에서 조건적으로 또는 동적으로 모듈을 불러올 수 있습니다.

> 예를 들어, 다음과 같이 조건문에서 require()를 사용할 수 있습니다.

> if(user.length > 0){
> const userDetails = require(‘./userDetails.js’);
> // Do something ..
> }

## Quest

- 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  - `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  - `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
- 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced

- node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?

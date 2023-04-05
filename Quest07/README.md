# Quest 07. node.js의 기초

## Introduction
* 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics
* node.js
* npm
* CommonJS와 ES Modules

## Resources
* [About node.js](https://nodejs.org/ko/about/)
* [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
* [npm](https://docs.npmjs.com/about-npm)
* [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
* [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
* [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
* [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist
* node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
Node.js는 개발자가 서버 측을 위한 확장 가능한 고성능 애플리케이션을 구축할 수 있는 오픈 소스 크로스 플랫폼 JavaScript 런타임 환경입니다. Node.js는 데이터 집약적인 실시간 애플리케이션을 구축하는 데 적합한 이벤트 중심의 비차단 I/O 모델을 사용합니다.
핵심적으로 Node.js는 더 빠른 실행을 위해 JavaScript 코드를 머신 코드로 컴파일하는 Google의 V8 JavaScript 엔진 위에 구축됩니다. Node.js는 개발자가 파일 I/O, 네트워크 I/O 및 HTTP 처리와 같은 다양한 작업을 수행하는 데 사용할 수 있는 일련의 내장 모듈을 제공합니다. Node.js는 npm(노드 패키지 관리자)을 사용하여 설치할 수 있는 타사 모듈의 사용도 지원합니다.
Node.js의 내부 구조는 모든 I/O 작업을 비동기적으로 처리하는 단일 스레드 이벤트 루프를 기반으로 합니다. I/O 작업이 시작되면 Node.js는 작업 완료 시 실행할 콜백 함수를 등록합니다. 작업이 완료되기를 기다리는 동안 Node.js는 다른 코드를 계속 실행할 수 있습니다. 작업이 완료되면 콜백 함수가 이벤트 큐에 추가되고 이벤트 루프에서 FIFO(선입선출) 순서로 처리됩니다.
Node.js의 이벤트 루프는 타이머 단계, I/O 콜백 단계, 유휴, 준비, 폴링, 확인 및 콜백 닫기 단계를 포함한 여러 단계로 구성됩니다. 타이머 단계에서 Node.js는 만료된 타이머 콜백을 확인하고 이벤트 큐에 추가합니다. I/O 콜백 단계에서 Node.js는 완료된 모든 I/O 관련 콜백을 처리합니다. poll 단계는 I/O 이벤트가 발생하기를 기다리는 반면 check 단계는 setImmediate() 콜백을 처리합니다. 마지막으로 닫기 콜백 단계에서는 닫힌 연결 또는 리소스와 관련된 모든 콜백을 처리합니다.
전반적으로 Node.js의 내부 구조는 가볍고 효율적으로 설계되어 고성능을 유지하면서 대량의 I/O 작업을 처리할 수 있습니다.

* npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?
npm은 노드 패키지 관리자를 나타냅니다. Node.js와 함께 제공되는 명령줄 유틸리티이며 개발자가 Node.js 애플리케이션용 패키지(즉, 재사용 가능한 코드 모듈)를 설치하고 관리할 수 있는 방법을 제공합니다.
npm은 개발자가 애플리케이션에서 검색, 다운로드 및 사용할 수 있는 패키지 레지스트리를 유지 관리하여 작동합니다. 개발자가 npm을 사용하여 패키지를 설치하면 패키지와 해당 종속성(즉, 패키지가 의존하는 다른 패키지)을 다운로드하고 프로젝트의 "node_modules" 디렉토리에 설치합니다.
package.json 파일은 npm이 Node.js 애플리케이션의 종속성 및 구성을 관리하는 데 사용하는 메타데이터 파일입니다. 이 파일은 응용 프로그램의 루트 디렉터리에 있으며 응용 프로그램의 이름과 버전, 응용 프로그램에 대한 설명, 해당 종속성, 실행할 스크립트 및 기타 메타데이터와 같은 정보를 포함합니다.

package.json 파일의 가장 일반적인 필드 중 일부는 다음과 같습니다.

이름: 애플리케이션의 이름입니다.
version: 애플리케이션의 버전 번호입니다.
description: 애플리케이션에 대한 간략한 설명입니다.
main: 애플리케이션의 메인 파일.
종속성: 애플리케이션에 필요한 종속성의 목록입니다.
devDependencies: 개발 중에만 필요한 종속성 목록입니다.
scripts: npm을 사용하여 실행할 수 있는 스크립트 집합입니다.
author: 애플리케이션의 저자.
라이센스: 애플리케이션이 배포되는 라이센스입니다.

Node.js 애플리케이션에서 package.json 파일을 유지함으로써 개발자는 종속성을 쉽게 관리하고 다른 사람과 애플리케이션을 공유하며 애플리케이션을 다른 환경에서 쉽게 배포하고 실행할 수 있습니다.

* npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

npx는 버전 5.2.0부터 npm(Node Package Manager)과 함께 제공되는 명령줄 유틸리티입니다. 먼저 설치할 필요 없이 시스템에 전체적으로 설치되지 않은 Node.js 패키지를 실행하는 데 사용됩니다. npx로 패키지를 실행하면 패키지가 프로젝트의 node_modules 디렉토리에 로컬로 설치되어 있는지 확인합니다. 패키지를 찾을 수 없는 경우 npx는 패키지를 실행하기 전에 최신 버전의 패키지를 다운로드하여 설치합니다.
-g 옵션을 통해 npm 패키지를 전역으로 저장하는 것과 그렇지 않은 것의 차이점은 전역으로 설치된 패키지는 시스템의 모든 프로젝트에서 사용할 수 있는 반면 로컬로 설치된 패키지는 프로젝트 디렉토리 내에서만 사용할 수 있다는 것입니다. 전역적으로 패키지를 설치하면 여러 프로젝트에 동일한 패키지를 설치할 필요가 없으므로 디스크 공간을 절약할 수 있습니다. 그러나 여러 프로젝트에 동일한 패키지의 다른 버전이 필요할 수 있으므로 다른 프로젝트 간에 버전 충돌이 발생할 수도 있습니다.
반면에 패키지를 로컬로 설치하면 각 프로젝트가 필요한 패키지의 특정 버전에 액세스할 수 있습니다. 이를 통해 버전 충돌을 방지하고 프로젝트를 보다 안정적이고 예측 가능하게 만들 수 있습니다. 패키지를 로컬로 설치하면 해당 프로젝트에 특정한 프로젝트의 node_modules 디렉토리에 추가됩니다. 즉, 해당 프로젝트에 패키지를 다시 설치하지 않는 한 다른 프로젝트에서 패키지를 사용할 수 없습니다.
요약하면 -g 옵션을 통해 npm 패키지를 전역적으로 저장하는 것과 그렇지 않은 것의 주요 차이점은 패키지의 가용성 범위입니다. 전역 패키지는 시스템 전체에서 사용할 수 있는 반면 로컬 패키지는 프로젝트 디렉터리 내에서만 사용할 수 있습니다. 패키지를 글로벌로 설치할지 로컬로 설치할지 선택하는 것은 특정 요구 사항과 프로젝트의 요구 사항에 따라 다릅니다.

* 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

스크립트 태그: 웹 초기에 개발자는 <script> 태그를 사용하여 JavaScript 파일을 로드했습니다. 그러나 이 접근 방식은 코드를 별도의 파일로 구성하거나 동적으로 코드를 로드하는 방법을 제공하지 않았습니다.
CommonJS: CommonJS는 JavaScript 코드를 모듈화하는 표준 방식을 정의하려는 시도였습니다. 모듈을 로드하는 require() 함수와 내보내기를 정의하는 module.exports 객체를 도입했습니다. 그러나 CommonJS에는 모듈의 동기식 로드와 같은 몇 가지 제한 사항이 있어 더 큰 애플리케이션에서 성능 문제가 발생할 수 있습니다.
AMD(비동기 모듈 정의): AMD는 모듈식 JavaScript 코드의 표준을 정의하려는 또 다른 시도였습니다. 모듈을 정의하는 define() 함수와 모듈을 비동기적으로 로드하는 require() 함수를 도입했습니다. 그러나 AMD는 개발자가 특정 구문을 사용하도록 요구했기 때문에 다른 솔루션보다 유연성이 떨어졌습니다.
ES6 모듈: ECMAScript 모듈이라고도 하는 ES6 모듈은 ECMAScript 2015에서 JavaScript 코드를 모듈화하는 표준 방법으로 도입되었습니다. 그들은 export 키워드를 사용하여 내보내기를 정의하고 import 키워드를 사용하여 모듈을 로드하는 방법을 제공합니다. ES6 모듈은 별도의 라이브러리가 아닌 언어 자체의 일부이므로 이전 솔루션보다 더 유연하고 강력합니다.SSS
ES 모듈은 CommonJS에 비해 몇 가지 장점을 제공하기 때문에 CommonJS 대신 등장했습니다. ES 모듈은 최신 브라우저와 Node.js에서 기본적으로 지원되므로 추가 라이브러리나 도구를 사용할 필요가 없습니다. 또한 모듈의 비동기 로드를 지원하여 더 큰 애플리케이션의 성능을 향상시킬 수 있습니다. ES 모듈은 명명된 내보내기와 기본 내보내기를 모두 허용하고 런타임 값에 따라 조건부로 로드될 수 있으므로 CommonJS보다 더 유연합니다. 마지막으로 ES 모듈은 CommonJS보다 간단하고 직관적인 구문을 가지고 있어 개발자가 사용하고 이해하기 쉽습니다.

* ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?

ES 모듈과 require()의 주요 차이점은 종속성과 모듈 로드를 처리하는 방식입니다. 'require()'는 모듈을 로드하는 동기 방식으로, 모듈이 차단 방식으로 로드되고 실행된다는 것을 의미합니다. 대조적으로 ES Modules는 모듈 로딩 및 종속성에 대한 동적 및 비동기식 접근 방식을 사용하여 비동기식으로 로드되고 실행될 수 있습니다.
또 다른 중요한 차이점은 내보내기가 정의되는 방식입니다. CommonJS에서 내보내기는 module.exports 객체를 사용하여 정의되는 반면 ES Modules에서는 export 키워드를 사용하여 정의됩니다. 구문의 이러한 차이로 인해 개발자는 특히 명명된 내보내기를 처리할 때 코드를 더 쉽게 작성하고 이해할 수 있습니다.
CommonJS에 비해 ES Modules의 주요 이점 중 하나는 JavaScript 모듈 작업에 대해 보다 표준화되고 미래에 대비한 방식을 제공한다는 것입니다. ES 모듈은 ECMAScript 표준의 일부이며, 이는 최신 브라우저와 Node.js에서 기본적으로 지원됨을 의미합니다. 이를 통해 타사 라이브러리나 도구에 의존할 필요 없이 다양한 플랫폼과 환경에서 모듈로 작업하기가 더 쉬워집니다.
그러나 CommonJS에 비해 ES 모듈에는 몇 가지 제한 사항이 있습니다. 예를 들어, ES 모듈은 대규모 애플리케이션에서 일반적인 기능일 수 있는 순환 종속성을 지원하지 않습니다. 또한 런타임에 조건부로 로드할 수 없지만 require() 함수를 사용하는 CommonJS에서는 가능합니다.
전반적으로 ES Modules는 JavaScript 모듈을 사용하여 보다 현대적이고 유연한 작업 방식을 제공하는 반면 CommonJS는 보다 전통적이고 검증된 접근 방식을 제공합니다. 어느 것을 사용할지는 프로젝트의 특정 요구 사항과 사용 중인 도구 및 라이브러리에 따라 다릅니다.

* node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

Node.js에서 ES 모듈을 사용하려면 모듈 파일에 .mjs 파일 확장자를 사용하거나 package.json 파일에서 "type": "module" 필드를 설정해야 합니다. 이 작업을 완료하면 import 문을 사용하여 다음과 같이 모듈을 로드하고 사용할 수 있습니다.
ES 모듈 기반 코드에서 CommonJS 기반 패키지를 가져오려면 CommonJS 모듈 내보내기로 확인되는 Promise를 반환하는 import() 함수를 사용할 수 있습니다.
esm과 같은 패키지를 사용하여 CommonJS 패키지에 대한 ES 모듈 지원을 활성화할 수도 있습니다. esm은 CommonJS 파일에서 ES 모듈 구문을 사용할 수 있게 해주는 패키지로, ES 모듈 기반 프로젝트에서 CommonJS 패키지를 사용하려는 경우 유용할 수 있습니다. esm을 사용하려면 npm으로 설치한 다음 -r esm 플래그로 스크립트를 실행해야 합니다.
CommonJS 기반 코드에서 ES 모듈 기반 패키지를 가져오려면 require() 함수를 사용할 수 있습니다.
그러나 require()는 개별적으로 명명된 내보내기가 아니라 전체 ES 모듈을 나타내는 객체를 반환한다는 점에 유의하십시오. 명명된 내보내기에 액세스하려면 ES Module 개체의 default 속성을 사용할 수 있습니다. 또는 cjs-es와 같은 패키지를 사용하여 ES 모듈에 대한 CommonJS 지원을 활성화할 수 있습니다. cjs-es는 ES 모듈 파일에서 CommonJS 구문을 사용할 수 있게 해주는 패키지로, ES 모듈 기반 프로젝트에서 CommonJS 패키지를 사용하려는 경우 유용할 수 있습니다. cjs-es를 사용하려면 npm으로 설치한 다음 --experimental-specifier-resolution=node 플래그로 스크립트를 실행해야 합니다.

## QuestS
* 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  * `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  * `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  * `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
* 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced
* node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?

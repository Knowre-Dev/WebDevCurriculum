# Quest 03. 자바스크립트와 DOM

## Introduction
* 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics
* 자바스크립트의 역사
* 기본 자바스크립트 문법
* DOM API
  * `document` 객체
  * `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  * 기타 DOM 조작을 위한 함수와 속성들
* 변수의 스코프
  * `var`, `let`, `const`

## Resources
* [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
* [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
* [Just JavaScript](https://justjavascript.com/)

## Checklist
* 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
```
자바스크립트(JavaScript)는 초기에는 웹 페이지의 동적인 기능을 구현하는 데 주로 사용되었습니다. 하지만 시간이 지남에 따라 자바스크립트는 웹 개발 분야에서 매우 중요한 언어로 자리 잡았습니다.
```
  * 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
  ```
  ES란 Ecma Script의 준말로 JavaScript명세서(표준,규격)를 의미함
  ES5는 "use strict"선언을 추가하여 코드 실행을 엄격하게함
  ES6는 클래스,모듈,템플릿 리터럴 등의 새로운 기능 추가.
  ES2016은 includes(배열 내장 함수 EX.['a','b','c'].indexOf('a') > -1가 ['a', 'b', 'c'].includes('a') 처럼 간결해짐),Exponentiation operator추가(제곱 연산자 EX.Math와 pow함수 대신 ** 연산자로 가능)
  ES2017은 문자 여백 기능,Object.values(),Object.entries(),Object.getOwnPropertyDescriptors(),Trailing commas,async/await(기존의 Promise보다 가독성이 좋은 코드 작성 가능) 추가
  https://junhobaik.github.io/es2016-es2020/#objectgetownpropertydescriptors 자료 참조
  ```
  * 자바스크립트의 표준은 어떻게 제정될까요?
  ```
  ECMA International에서는 ECMAScript라는 이름으로 자바스크립트의 표준을 제정합니다. 
  ECMAScript는 자바스크립트를 포함하는 스크립트 언어의 표준 규격을 의미하며, 현재까지 ECMAScript 2022(ES12)까지 발표되었습니다.
  ECMAScript 표준은 TC39(Technical Committee 39)이라는 위원회에서 제정됩니다. 
  TC39 위원회는 ECMAScript의 표준을 개발, 유지 보수하고 향상시키는 데 중점을 둡니다. 
  이 위원회는 모집적인 방식으로 구성되어 있으며, 인터넷 엔진 개발자, 브라우저 개발자, 프로그래밍 언어 전문가 등이 참여합니다.
  ECMAScript 표준은 모든 브라우저에서 일관성 있게 자바스크립트를 구현할 수 있도록 합니다. 
  따라서 개발자들은 ECMAScript 표준에 맞게 자바스크립트 코드를 작성하여, 모든 브라우저에서 동일한 결과를 얻을 수 있습니다.
  ```
* 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
```
1.객체 기반 언어
2.함수형 언어
3.동적 타입 언어
4.프로토타입 기반 언어
5.세미콜론 생략 가능
6.Hoisting
```
  * 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
* 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  * IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
* 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?g
  * `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
* 자바스크립트의 익명 함수는 무엇인가요?
  * 자바스크립트의 Arrow function은 무엇일까요?

## Quest
* (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
* (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  * 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로git 토글되어야 합니다.
  * 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
* 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced
* Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
* Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?

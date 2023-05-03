# Quest 03. 자바스크립트와 DOM

## Introduction

- 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics

- 자바스크립트의 역사
- 기본 자바스크립트 문법
- DOM API
  - `document` 객체
  - `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  - 기타 DOM 조작을 위한 함수와 속성들
- 변수의 스코프
  - `var`, `let`, `const`

## Resources

- [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
- [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
- [Just JavaScript](https://justjavascript.com/)

## Checklist

# 1. 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?

- ES1(1997년 6월) → ES2(1998년 6월) → ES3(1999년 12월) → ES5(2009년 12월)
- ES4의 경우 정치적인 문제로 폐기되었다.
- **ES6 | ECMAScript2015(ES2015)**
  - let, const, Default Parameter, Destructuring Assignment, Arrow function, 객체 리터럴, 클래스, 모듈, Promise, 전개 연산자
- **ECMAScript 2016 (ES2016)**
  - 제곱연산자 추가, Array.prototype.includes
- **ECMAScript 2017 (ES2017)**
  - 함수 표현식의 인자에서 trailing commas 허용, Object values/entries 메소드, async/await 등.
- **ECMAScript 2018 (ES2018)**
  - Promise.finally, Async iteration, object rest/spread property 등.
- **ECMAScript 2019 (ES2019)**
  - Object.fromEntries, flat, flatMap, Symbol.description, optional catch 등.

<br />

- 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?

> **ECMA International**에서 정의한 표준화된 스크립트 프로그래밍 언어(ECMAScript)
> Javscript를 표준화하기 위해 만들어졌고, 액션스크립트, J스크립트 등 다른 구현체도 포함되어 있다.
> ECMA International은 정보 통신 시스템을 위한 국제적 표준화 기구이다.

- 자바스크립트의 표준은 어떻게 제정될까요?

  > ECMA International의 ECMA 회의에서 해마다 업데이트된 에디션을 채택합니다.

- 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?

  - 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?

    > 기본적으로 for 문, while문, do while문 3가지가 있습니다.
    > 배열을 순회하는 forEach, 객체의 프로퍼티를 열거하는 for in문, 이터러블을 순회하는 for of문으로 반복문을 대체할 수 있습니다.

- 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

  > className, classList와 같은 접근자 프로퍼티를 사용해 class 어트리뷰트 값을 취득하거나 변경할 수 있습니다.

  - IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    > 최신 Web API를 지원하지 않는다면 바벨과 같은 트랜스파일러를 사용해 구 표준을 준수하는 폴리필로 바꿔줍니다. 여기서 폴리필은 변경된 표준을 준수할 수 있게 기존 함수의 동작 방식을 수정하거나, 새롭게 구현한 함수의 스크립트를 폴리필이라고 합니다.

- 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?

  - `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?

    > let으로 선언한 변수는 블록 레벨 스코프를 따르고 var로 선언한 변수는 함수 레벨 스코프를 따릅니다.
    > 블록 레벨 스코프는 모든 코드 블록을 지역 스코프로 인정하는 것이고, 함수 레벨 스코프는 함수의 코드 블록만 지역 스코프로 인정하는 것입니다.

- 자바스크립트의 익명 함수는 무엇인가요?

  > 익명 함수는 함수의 이름이 없는 함수로서, 즉시 실행 함수로 사용할 수 있고, 화살표 함수나 함수 표현식에 사용될 수 있습니다.
  > 함수의 이름이 없어도 동작 가능한 이유는 함수가 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출하기 때문입니다.

  - 자바스크립트의 Arrow function은 무엇일까요?

  > 화살표 함수는 function 키워드 대신 fat arrow를 사용해 간략하게 함수를 정의하는 방법입니다.
  > 생성자 함수로 사용할 수 없으며, 상위 스코프의 this와 arguments 등이 바인딩되는 특징이 있습니다.
  > 화살표 함수는 항상 익명 함수로 정의합니다.

## Quest

- (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  - [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    - 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  - `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  - 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  - 출력은 `console.log()` 함수를 통해 할 수 있습니다.
- (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  - 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  - 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
- 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced

- Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
- Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?

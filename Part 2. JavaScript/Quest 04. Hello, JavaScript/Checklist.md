# Problem

- 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
    - 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
- 웹 브라우저의 자바스크립트 콘솔은 어떻게 사용할까요?
    - 웹 브라우저(Chrome)에서 자바스크립트 콘솔을 띄우는 단축키는 무엇인가요?
- `let`를 이용하여 변수를 선언하는 것과 `const`를 이용하여 변수를 선언하는 것은 어떻게 다를까요?
    - `var`를 이용하여 선언하는 방법은 어떻게 다를까요?
- 자바스크립트의 익명 함수는 무엇인가요?
    - 자바스크립트의 Arrow function은 무엇일까요?

# Answers

> 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?

1995년, 그 당시의 웹브라우저 시장은 넷스케이프 사의 네비게이터가 지배하고 있었습니다. 하지만 초기의 웹은 변화하지 않는 정적인 글자로 꾸며진 HTML 페이지였고, 넷스케이프 사는 가벼운 프로그램 언어를 통해 HTML 페이지에 움직임을 주고 싶어 프로그램 언어를 추가하기로 결정했습니다. 그래서 **Brendan Erich(브랜든 아이크)**를 고용했는데, 그는 무려 10일 만에 언어를 완성했습니다.

처음에는 `"**JavaScript**"`가 아닌 `"**Mocha**"`라는 이름을 붙였습니다. 하지만 그해 9월, "**LiveScript**"라는 이름으로 바뀌었고 또다시 같은 해 12월, `"**JavaScript**"`로 최종 결정되었습니다. `Java`와 구문이 유사해서 이름을 `JavaScript`로 지었다는 표면상의 이유고, 당시 Java의 유명세를 이용해 마케팅 차원에서 의도적으로 지은 것입니다.

앞선 강의에서 자바스크립트에 대해 설명했듯이, 자바스크립트가 나오면서 웹 문서의 내용을 동적으로 바꾸거나 각종 이벤트를 적용하는 것이 가능해졌습니다.

## ECMA Script

1990년대 Netcape는 `Javascript`를, MS사의 IE에서는 `JScript`를 사용했고 두 스크립트는 제각각이였기 때문에 표준이 필요하여 생긴것이 `ECMA` 입니다.

`ECMA(European Computer Manufactures Association)`의 약자로 ECMAScript는 `Javascript` 언의 표준입니다.

### ES5 (2009)

- 배열 forEach, map, filter, reduce, some Method 추가
- 객체 Object에 대한 getter/setter 추가
- bind Method 추가
- strict moce 추가
- es5-shim 사용 시 하위 버전에서 특정 기능 지원

### ES6 (2015)

- `let` , `const` 키워드 추가
- Arrow 문법 지원
- iterator, generator 추가
- module import, export 추가
- callback hell을 해결할 Promise 추가
- MS에서도 최대한 ECMAScript를 따르는 브라우져 IE Edhe 발표

### ES7 (2016)

- 제곱연산자 (**) 추가
- Array.includes 추가

### ES8 (2017)

- async/await 추가
- 이후 나오는 표준은 EX.Next라고 함

---

> 웹 브라우저의 자바스크립트 콘솔은 어떻게 사용할까요?

브라우저마다 차이가 있습니다.

![](./img/Untitled.png)

웹 브라우저 콘솔은 퍼블리싱작업시, 스타일 값을 미리 넣어서 테스트 해 볼수 있습니다. 또한 HTML코드를 볼 수 있어 크롤링 작업이나 local Storage나 session Storage 같은 것을 이용해서 미리 초기값을 넣어두거나 세션의 상태를 확인할 수 있습니다.

> `let` 를 이용하여 변수를 선언하는 것과 `const` 를 이용하여 변수를 선언하는 것은 어떻게 다를까요?

### var, let, const

먼저 `var` 를 이용한 변수 선언 방식에 대해서 알아 보겠습니다.

```jsx
var name = 'knowre';
console.log(name);  // knowre

var name = 'Yunmin'
console.log(name);  // Yunmin
```

`name` 이란 변수명을 두번 선언 했음에도 불구하고 에러가 나오지 않고 각기 다른 값이 출력되는 것을 알 수 있습니다.

시각에 따라 '유연한 변수 선언' 이라고 생각하여 간단한 테스트에는 편할 수 있지만, 코드량이 많아 진다면 어디서 어떻게 사용되는지도 파악하기 힘들 수 있고, 변수명 중복으로 인해 값이 바뀔 수 있는 위험이 있습니다.

그래서 ES6이후 이를 보완하기 위해 추가된 선언 방식이 `let` 과 `const` 입니다.

### let과 const의 차이점

위 문법을 `let` 문법을 사용하여 똑같이 실행한다면,

```jsx
let name = 'knowre';
console.log(name);  // knowre

let name = 'Yunmin'
console.log(name);  // SyntaxError : Identifier 'name' has already been declared
```

`name` 이 이미 선언되었다는 에러 메세지가 나옵니다. 이는 `const` 도 마찬가지 입니다.

즉, 변수 재선언이 되지 않습니다.

`let` 과 `const` 의 차이점은 불변성(immutable) 여부 입니다.

```jsx
let name = 'knowre';
console.log(name);  // knowre

let name = 'Yunmin'
console.log(name);  // SyntaxError : Identifier 'name' has already been declared

name = 'Song'
console.log(name) // Song
```

위와 같이 let은 변수에 재할당이 가능합니다.

```jsx
const name = 'knowre';
console.log(name);  // knowre

const name = 'Yunmin'
console.log(name);  // SyntaxError : Identifier 'name' has already been declared

name = 'Song'
console.log(name) // TypeError : Assignment to constant variable
```

const는 변수 재선언, 변수 재할당 모두 불가능하다.

또한 `var` 키워드와 달리 `let` 키워드는 호이스팅이 발생하지 않습니다.

변수는 `선언 단계`, `초기화 단계`, `할당 단계` 를 거쳐서 생성되는데, `var` 로 선언된 변수는 `선언 단계`와 `초기화 단계`가 한번에 이루어 집니다.

```jsx
// Scope 선두에서 선언 단계 및 초기화 단계 실행
// 변수 선언문 이전에 변수를 참조할 수 있음
console.log(name);  // undefind

var name;
console.log(name);  // undefind

name = 'Yunmin'     // 할당 단계
console.log(name);  // Yunmin
```

하지만 let으로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행 됩니다.

```jsx
// Scope 선두에서 선언 단계가 실행
console.log(name); // ReferenceError : name is not defined

let name;   // 초기화 단계 실행
console.log(name);  // undefined

name = 'Yunmin';    // 할당 단계
console.log(name);  // Yunmin
```

즉, 변수 선언에는 기본적으로 `const` 를 사용하고, 재할당이 필요한 경우에만 `let` 을 사용하는 것이 좋습니다.

또한 객체를 재할당하는 경우는 생각보다 흔하지 않습니다. `const` 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전합니다.

> 자바스크립트의 익명 함수는 무엇인가요?

익명함수는 함수에 이름이 없기 때문에 변수에 넣어서 사용하는 함수입니다.

변수에는 숫자, 문자도 들어갈 수 있지만 함수도 들어갈 수 있습니다.

```jsx
let func = function(){
	// Code
}
func();  // 함수 호출
```

선언적 함수와 익명 함수의 차이점은 **웹 브라우저가 script태그 내부의 내용을 위에서 한줄 씩 읽기 전에 선언적 함수부터 먼저 읽는다는 것입니다.**

```jsx
<script>
	func();
	let func() = function() {alert('function A')};  // Error!
</script>
```

이 코드가 에러가 나는 이유는 **익명함수를 저장한 변수를 선언하기 전에 그 변수를 사용했기 때문**입니다.

```jsx
<script>
	func();
	function func() {alert('function A'));
</script>
```

이 코드가 에러가 나지 않는 이유는 웹 브라우저가 코드를 읽을 때는 위에서 부터 차례로 읽긴하지만, **선언적 함수가 있으면 그 코드부터 먼저 읽은 뒤에 차례로 읽어 나가기 때문**입니다.

## JS Arrow Function

Arrow Function은 ES6 문법입니다. `function` 키워드를  사용해서 함수를 정의하는 방법보다 훨씬 간단하게 함수를 표현할 수 있습니다.

**또한 화살표 함수는 항상 익명함수입니다.**

```jsx
// General Function}
let func =  function() {console.log("func"};

// Arrow Function
let func2 = () => console.log("func2");
```

## Arrow Function grammar

```jsx
// 매개변수가 없는 경우
let func = () => console.log('yun');
func();  // yun

// 매개변수가 하나 있는 경우
let func = x => console.log(x);
func('hi'); // hi

// 매개변수가 여러개인 경우
let func = (a, b) => { return a + b };
func(1, 2)  // 3

// {} 를 사용했는데 return 값이 없을 때
let func = (a, b) => { a + b };
func(2, 3);  // undefined

```

# 피드백 내용

> 2017년 이후의 ES 표준 업데이트 현황은?

### ES2018

- **Object Rest / Spread Properties 추가**
  - 객체를 대입할 때 대응되지 않은 나머지 요소들을 모두 끌어당겨서 새로운 객체에 수집할 수 있는 기능
- for - await - of
  - 비동기 Iterable 객체를 반복하는 구문, Async - for - of 문은 비동기 함수와, 비동기 generator 함수 내에서만 사용 가능 합니다.
  - 이를 통해 probise.all로 한번에 처리하던 구문을 generator 와 for - of를 같이 사용하게 해 줌으로써 반복적인 비동기 처리가 가능해졌습니다.
- **Probise.prototype.finally()**
  - Promise에 finally() 라는 메소드가 추가 되었습니다. 실행결과에 상관없이 맨 마지막에 실행되는 메소드

### ES 2019

- **Object.fromEntires**
  - Object.entries의 반대 기능입니다. 2차원 배열을 객체로 만들어줍니다. 객체 말고 Map같은 것도 지원합니다.
- **Array.prototype.flat, Array.prototype.flatMap**
  - 다중 배열을 펼치는 기능입니다. 인수로 숫자를 넣어서 몇 번 연달아 펼칠지 결정할 수 있습니다.
  - Ex) 배열내에 배열 - 다차원 배열 등에 이용
- **String.prototype.trimStart, trimEnd, trimLeft, trimRight**
  - 문자열 공백을 지울때 기존 trim()을 이용하였습니다. 위 메소드는 오른쪽만, 혹은 왼쪽만 공백을 지을 수 있는 기능입니다.
- **Optional Catch**
  - 이제 catch의 매개변수를 쓰지 않는 경우, error라는 인자를 생략해도 됩니다

    ```jsx
    try{
    	new Error('hello');
    } catch {
    	console.log('에러가 나든지 말든지');
    }
    ```

### ES 2020

- **Bigint**
  - Javascript에서 정수로 저장할 수 있는 최대 수는 `pow(2, 53) - 1` 입니다.
  - BigInt는 그 이상을 처리할 수 있습니다.
  - BigInt()로 선언하거나, 숫자 뒤에(n)을 붙입니다.
  - BigInt간 계산이 가능하며, 소수점 표현은 불가합니다.
- **Dynamic Import**
  - 이제 모듈을 동적으로 import할 수 있습니다.

    ```jsx
    import('./test.js').then((module) => {
      // ...
    });

    (async function() {
      const module = await import('./test.js');
      // ...
    })();
    ```

- **globalThis**
  - 브라우저의 전역객체는 `window` 이고 Node.js의 전역 객체는 `global` 입니다.
  - `globalThis` 는 분기가 필요 없는 하나로 통합된 전역 객체입니다.
  - 기존 `window` 나 `global` 도 사용 가능합니다.
- **String.prototype.matchAll()**
  - 정규식에서 일치하는 모든 그룹을 포함하는 반복자를 리턴합니다.
- **Promise.allSettled()**
  - `Promise.all()` 은 요청된 비동기 그룹 중 하나라도 실패할 경우 `catch` 블록으로 이동합니다.
  - `Promise.allSettled()` 는 성공과 실패여부에 관계없이 모두 응답이 처리 되었을 경우 `then` 블록으로 이동합니다.
  - 하나의 실패가 다른 요청의 성공에 영향을 미치지 않을 때 사용합니다.

### ES 2021

- **String.prototype.replaceAll()**
  - replaceAll() 메서드는 정규식에 `g` 옵션을 통해 전역으로 적용하지 않고도 문자열의 지정한 모든 문자열을 특정 문자열의 값으로 변경합니다.

      ```jsx
      const baseString = '오늘도 힘차게 JS공부! JS의 새로운 버전인 ES2021도 공부!';

      // before case 1
      console.log(baseString.replace(/\!/g, '@'));

      // before case 2
      console.log(baseString.split('!').join('@'));

      // after
      console.log(baseString.replaceAll('!', '@'));

      // output: '오늘도 힘차게 JS공부@ JS의 새로운 버전인 ES2021도 공부@'
      ```

    기존 방식은 특수문자(+,- 등) 을 사용할때 이스케이프 처리를 위해 백슬래시(`/` )를 붙여주거나 `split`

    과 `join` 메서드를 사용해 특정 문자로 배열을 분리하고 다시 특정 문자로 배열을 문자열로 합쳐서 처리할 수 있었습니다.

    하지만 새로 채택된 `String.prototype.replaceAll` 메서드를 사용하면 간단하게 지정한 모든 문자열을 특정한 문자열로 변경할 수 있습니다.

  - **Promise.any()**
    - `Promise.any` 메서드는 iterable한 `Promise` 들을 인자로 받아 첫 번째로 해결된 `Promise` 가  생기면 단락되고 값을 반환합니다.
  - **Numeric separators (숫자 구분 기호)**
    - 숫자 구분 기호는 `_` 을 사용해 숫자를 시각적으로 더 읽기 쉽게 만들어 줍니다.

      ```jsx
      // before
      10000000000 // 100억

      // after
      10_000_000_000 // 100억

      console.log(10_000_000_000); // 10000000000
      ```

  - **Logical assignment operators(논리 할당 연산자)**
    - 논리 연산자에 할당 기능이 더해졌습니다. 아래 코드와 같이 기존의 논리 연산자들을 축약할 수 있습니다.

      ```jsx
      // before
      obj.prop = obj.prop || foo(); // obj.prop이 잘못된 값일 경우 할당
      obj.prop = obj.prop && foo(); // obj.prop이 올바른 값일 경우 할당
      obj.prop = obj.prop ?? foo(); // obj.prop이 null이나 undefined일 경우 할당

      // after
      obj.prop ||= foo();
      obj.prop &&= foo();
      obj.prop ??= foo();
      ```

> console의 다른 메서드 조사


**[console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)**

인수의 값이 `false` 일 경우 오류 메세지를 출력합니다.

**[console.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Console/clear)**

콘솔을 지웁니다.

**[console.count()](https://developer.mozilla.org/en-US/docs/Web/API/Console/count)**

인수로 제공된 객체 값에 카운터를 배치합니다. 이 메서드가 호출 될 때마다 카운터가 증가 됩니다.

**[console.countReset()](https://developer.mozilla.org/en-US/docs/Web/API/Console/countReset)**

인수로 제공된 객체를 재설정 합니다.

**[console.debug()](https://developer.mozilla.org/en-US/docs/Web/API/Console/debug)**

로그 수준을 사용하여 콘솔로 디버그 출력을 표시합니다.

**[console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)**

지정된 JavaScript 개체의 속성에 대한 대화형 목록을 표시합니다. 이 목록을 사용하여 하위 개체의 내용을 검사할 수 있습니다.

**[console.dirxml()](https://developer.mozilla.org/en-US/docs/Web/API/Console/dirxml)**

가능한 경우 지정된 객체의 XML/HTML 요소 표현 또는 불가능한 경우 JavaScript 객체 뷰를 표시합니다.

**[console.error()](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)**

오류 메시지를 출력합니다. 이 방법에는 [문자열](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions) 대체 및 추가 인수를 사용할 수 있습니다.

**console.exception()**

에 대한 별칭`error()`.

**[console.group()](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)**

다음 모든 출력을 다른 수준으로 들여쓰면서 새 인라인 그룹 [생성](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console) 한 단계 뒤로 이동하려면, `groupEnd()` 메서드를 이용할 수 있습니다.

**[console.groupCollapsed()](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed)**

다음 모든 출력을 다른 수준으로 들여쓰면서 새 인라인 그룹을 [생성](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console) 하지만, 달리 `group()` 이는 인라인 그룹이 축소된 상태에서 시작되며, 이를 확장하기 위해 공개 버튼을 사용해야 합니다.

**[console.groupEnd()](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupEnd)**

현재 인라인 [그룹](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_groups_in_the_console) 을 종료합니다.

**[console.info()](https://developer.mozilla.org/en-US/docs/Web/API/Console/info)**

정보 로깅에 사용 됩니다. 이 방법에는 [문자열](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions) 대체 및 추가 인수를 사용할 수 있습니다.

**[console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)**

흔히 사용하는 로깅 정보의 일반 출력 입니다. 이 방법에는 [문자열](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions) 대체 및 추가 인수를 사용할 수 있습니다.

**[console.profile()](https://developer.mozilla.org/en-US/docs/Web/API/Console/profile)**

브라우저의 내장 프로파일러(예: [Firefox 성능 도구](https://developer.mozilla.org/en-US/docs/Tools/Performance)) 를 시작합니다.프로필의 이름(선택 사항)을 지정할 수 있습니다.

**[console.profileEnd()](https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd)**

프로파일러를 막습니다. 브라우저의 성능 도구(예: [Firefox 성능 도구](https://developer.mozilla.org/en-US/docs/Tools/Performance)) 에서 결과 프로파일을 볼 수 있습니다.

**[console.table()](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)**

표 형식의 데이터를 표로 표시합니다.

**[console.time()](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)**

입력 매개 변수로 지정된 이름으로 [타이머](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 를 시작합니다. 주어진 페이지에서 최대 1만 명의 동시 타이머를 실행할 수 있습니다.

**[console.timeEnd()](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)**

지정한 [타이머](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 를 중지하고 시작된 이후 경과된 시간을 초 단위로 기록합니다.

**[console.timeLog()](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeLog)**

지정된 [타이머](https://developer.mozilla.org/en-US/docs/Web/API/console#Timers) 값을 콘솔에 로깅합니다.

**[console.timeStamp()](https://developer.mozilla.org/en-US/docs/Web/API/Console/timeStamp)**

브라우저의 [타임라인](https://developer.chrome.com/devtools/docs/timeline) 에 마커를 추가합니다.

**[console.trace()](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace)**

[스택 추적](https://developer.mozilla.org/en-US/docs/Web/API/console#Stack_traces) 을 출력합니다.

**[console.warn()](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn)**

경고 메시지를 출력합니다. 이 방법에는 [문자열](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions) 대체 및 추가 인수를 사용할 수 있습니다.

###  출처 : MDN
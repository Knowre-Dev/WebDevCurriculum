# Problem

- 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  - IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
- 자바스크립트의 변수가 {유효한 범위는 어떻게 결정되나요?
  - `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?

# Answer

> 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

## DOM(Document Object Model)

우선 DOM은 웹 페이지에 대한 인터페이스입니다. 기본적으로 여러 프로그램들이 페이지의 콘텐츠 및 구조, 그리고 스타일을 읽고 조작할 수 있도록 API를 제공합니다.

DOM 객체는 `<html>` 이나 `<body>` 같은 html문서의 태그들을 javascript가 이용할 수 있는 객체로 만들면 그것을 문서 객체라고 합니다.

그렇다면 이 문서 객체에 CSS Class를 주려면 어떻게 해야 할까요?

```jsx
// CSS Class를 주려면?
let span = document.getElementById('id').classList.add('class');
// CSS Class를 없애려면?
let span = document.getElementById('id').classList.remove('class');
```

HTML5 부터 `classList` 라는 문법이 생겨서 이를 이용하면 편하게 class를 추가하고 삭제할 수 있습니다.

- IE나 이 그이전의 옛날 브라우저들에서는 어떻게 해야 하나요?

IE9이하에서는 classList 속성이 지원되지 않고 10이상이 지원됩니다.

호환용 스크립트를 페이지에 포함시키거나

classList 말고 className을 이용하여야 한다.

```jsx
document.getElementById('id').className+='addClass';
```

> 자바스크립트 변수가 유효한 범위는 어떻게 되나요?

자바스크립트는 `var`, `let`, `const`를 통해 변수를 선언할 수 있습니다.

`var` 는 함수 스코프(function-level-scoped), `let`, `const` 는 블록 스코프(block-level scoped)를
갖습니다.

## Function-Level Scoped

```jsx
function main() {
	if(true) {
		var temp = 'hi';
	}

	console.log(temp);   // hi
}
```

위 코드를 보면 `var` 로 선언된 temp 변수가 출력 됩니다. 이유는 함수 내부에서 `var` 로 선언된 변수는 함수 어디든 유효하기 때문입니다. 즉, 어떤 함수에서 한번 선언된다면 함수가 종료되기 전까지 유효하게 됩니다.

## Block-Level Scoped

```jsx
function main() {
	if(true) {
		let temp = 'hi';
	}
	console.log(temp);  // Error

}
```

Block-Level Scoped 는 보통의 개발자가 알고있는 블록 ({, }) 에서 유효한 범위입니다. 위 코드를 살펴보면 Function-Level Scoped 와 똑같은 코드이지만 변수의 선언이 `let`으로 되어있습니다. `let` 은 블록 안에서만 유효하기 때문에 `if` 블록이 종료되는 시점에서 temp 변수가 소멸되어 에러가 출력 된 것입니다.

### var, let

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

기본적으로 `var` 예약어는 이제 잘 사용하지 않습니다.
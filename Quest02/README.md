# Quest 02. CSS의 기초와 응용

## Introduction

- CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics

- CSS의 기초 문법과 적용 방법
  - Inline, `<style>`, `<link rel="stylesheet" href="...">`
- CSS 규칙의 우선순위
- 박스 모델과 레이아웃 요소
  - 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  - `position`, `left`, `top`, `display`
  - CSS Flexbox와 Grid
- CSS 표준의 역사
- 브라우저별 Developer tools

## Resources

- [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist

- CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?

1. HTML 태그에 `Inline` CSS 코드 작성
2. HTML 문서 내 `<style></style>` 태그 내부에 CSS 코드 작성
3. .css 파일 등을 생성하여 `<link>` 태그로 연결

<br />

- CSS 규칙의 우선순위는 어떻게 결정될까요?

- CSS 규칙의 우선순위는 다음과 같다.
  - `!impotant` > `inline style` > `#id` 선택자 > `.class` | `pseudo class` > `tag` 선택자
- 아래 우선순위 점수를 선택자의 개수에 따라 합산하여 많은 점수를 받은 선택자가 우선된다.
  - `inline` 1000점
  - `id` 100점
  - `class` | `Pseudo-classes` 10점
  - `tag` 1점

<br />

- CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?

<div align="center">
  <img src="https://user-images.githubusercontent.com/85148549/148014581-9b247c70-458c-4d27-bddc-0fd194350861.png" />
</div>

- 출처: [TCPschool](http://www.tcpschool.com/css/css_boxmodel_boxmodel)
- 박스 모델은 HTML 요소를 content, padding, border, margin로 구분하여 크기가 결정된다.
  - **content**: 텍스트나 이미지가 들어있는 내용
  - **padding**: content와 border 사이의 간격
  - **border**: content, padding을 모두 감싸는 테두리
  - **margin**: border와 이웃하는 요소 사이의 간격

<br />

- `float` 속성은 왜 좋지 않을까요?

- float 속성을 사용하면 해당 요소는 block 요소로 바뀐다.
- 의도치 않게 float 속성을 부여한 요소와 부여하지 않은 요소가 겹쳐보일 수 있다.
- float 속성을 해제하기 위해 clear 속성을 사용하여 float을 부여하고 싶은 요소, 부여하고 싶지 않은 요소를 구분하여 속성을 부여해야 한다.

<br />

- Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?

- Flex는 1차원 레이아웃 구조를 작업할 때 사용한다.
- Grid는 2차원 레이아웃 구조를 작업할 때 사용한다.

<br />

- CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?

- 의미론적으로 비슷한 구조를 갖고 있다면 **class** 속성을 동일하게 부여하여 정리할 수 있다.
- BEM 방법론을 사용하여 코드를 간결하게 작성할 수 있다.
- 이미 기본값이 적용되어 있는 코드는 작성하지 않는다. (block 요소에 width: 100%)
- 부모 요소에 적용하면 자식 요소에도 적용되는 속성들은 중복해서 작성하지 않는다.

<br />

## Quest

- Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
- **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced

- 왜 CSS는 어려울까요?
- CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
- 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?

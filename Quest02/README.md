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
  답: 1. 내부 스타일 시트 : 내부 스타일 시트를 사용하면 HTML 문서 안에 스타일을 적용할 수 있습니다. 내부 스타일 시트를 사용하면 CSS 규칙을 <style> 태그 안에 작성할 수 있음. 2. 외부 스타일 시트:외부 스타일 시트를 사용하면 HTML 문서에서 스타일을 분리할 수 있습니다. 외부 스타일 시트는 .css 파일로 작성하며, <link> 태그를 사용하여 HTML 문서와 연결한다. 3. 인라인 스타일: 인라인 스타일을 사용하면 HTML 요소에 직접 스타일을 적용할 수 있습니다. 인라인 스타일은 해당 요소의 style 속성에 CSS 규칙을 작성합니다.

  - 3가지 방법 중 스타일이 적용되는 우선순위는 인라인 > 내부 > 외부 순입니다
    답:

  * 세 가지 방법 각각의 장단점은 무엇일까요?

  1. 내부 스타일 시트(Internal Style Sheet) 방법
     장점: HTML과 CSS가 같은 파일에 있어 파일 관리가 용이하며, 스타일 시트가 한번에 적용됩니다.
     단점: 다른 HTML 파일에도 사용하려면 해당 파일에도 스타일 시트를 작성해야 하며, 적용 우선순위가 인라인보다 낮기 때문에 우선순위에 따른 충돌이 발생할 수 있습니다.

  2. 외부 스타일 시트(External Style Sheet) 방법
     장점: 여러 HTML 파일에서 공통적으로 사용할 수 있고, 한번 작성하면 파일을 분리해서 관리할 수 있으므로 유지보수가 용이
     브라우저가 캐싱을 사용해 중복된 요청을 최소화하여 성능이 향상된다.
     단점: HTML 파일과 CSS 파일이 분리되어 있어 관리가 어려울 수 있으며, 스타일 시트가 적용되기까지 파일을 로드하는 시간이 필요하다.
  3. 인라인(Inline) 방법
     장점: 코드가 간단하고 적용 우선순위가 가장 높아 다른 스타일과 충돌하지 않습니다.
     단점: 코드 중복이 많아져 유지보수가 어려워집니다.

- CSS 규칙의 우선순위는 어떻게 결정될까요?
  답: CSS 우선순위는 총 4가지 요소에 따라 결정
  - 중요도 (Importance) : !important 키워드를 사용하여 지정할 수 있다. !important는 스타일 우선순위에서 가장 높은 우선순위를 가지므로, 해당 속성이 다른 모든 우선순위를 무시하고 적용된다.
  - 명시도 (Specificity) : 스타일 규칙의 구체성을 나타낸다. 구체성은 셀렉터에서 사용된 요소, 클래스, 아이디 등의 수에 따라 결정된다. 구체성이 높을수록 우선순위가 높아진다.
  - 선언 순서 (Source order) : 동일한 명시도와 적용 범위를 가진 스타일 규칙이 여러 개 있을 경우, 마지막으로 선언된 스타일이 우선순위를 가진다.
  - 상속 (Inheritance) : 상속된 속성은 자식 요소에 직접 선언된 속성보다 낮은 우선순위를 가진다.
- CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
  답: 박스 모델은 HTML 요소가 브라우저 창 내에서 차지하는 공간을 설명하는 모델이다. 각 요소는 사각형 박스로 표시되며, 이 박스는 콘텐츠, 패딩, 테두리, 외부 여백(margin)으로 구성된다 이러한 속성은 개발자가 디자인을 다루고 배치를 제어하기 위해 사용된다.

박스의 크기는 여러 가지 요소에 의해 결정된다. 콘텐츠의 크기는 요소의 내용에 따라 결정된다. 패딩은 콘텐츠와 테두리 사이의 공간을 의미하며, 테두리는 박스의 경계선을 나타낸다. 외부 여백은 요소 주위의 공간을 의미하며, 인접한 요소와의 간격을 결정한다.
요소의 크기는 박스의 너비와 높이로 결정된다. 요소의 기본 크기는 콘텐츠의 크기와 같지만, 패딩, 테두리, 외부 여백이 추가될 수 있다.

- `float` 속성은 왜 좋지 않을까요?
  답: 높이 조정 문제: float 속성을 사용하면 요소의 높이가 자식 요소의 높이에 따라 자동으로 조정되지 않는다. 이는 레이아웃이 예상대로 작동하지 않을 수 잇다.

  중첩 요소 문제: float를 사용하면 요소가 부모 요소 밖으로 빠져 나와 부모 요소의 높이를 정확하게 계산하지 않는다. 이는 중첩된 요소에서 문제가 발생할 수 있다

  코드 순서 문제: float를 사용하면 요소가 왼쪽이나 오른쪽에 배치되므로 HTML 코드의 순서와 일치하지 않을 수 있다. 이는 스크린 리더기 및 검색 엔진 등 일부 사용자 에이전트에서 문제를 일으킬 수 있다.

  반응형 레이아웃 문제: float 속성을 사용하면 반응형 레이아웃을 구성하기 어렵다. 특히 모바일 기기에서 레이아웃이 잘못 나타날 수 있다.

- Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
  답: Flexbox는 단일차원(행또는 열)에서 항목을 배치하는데 적합.
  flexbox는 각각의 아이템에 대해 지정된 축을 따라 정렬 수행한다. 이는 주로 요소들이 한줄로 표시 되어야하는 경우에 유용
  장점: 간단한 레이아웃 작업 용이, 모바일 레이아웃에 유용,
  항목의 순서를 재배차하거나 정렬 가능, 단순한 간격 또는 비율 조정을 적용 가능
  단점: 복잡한 레이아웃을 다루기에는 한계 존재
  행과 열을 동시에 조작할 수 없음.

  CSS grid는 2차원 레이아웃(그리드)를 다루는데 적합하다. 행과 열을 동시에 정의 가능하고, 그리드의 셀을 아이템으로 사용하여 배치 한다.
  장점 : Grid는 복잡한 레이아웃을 다루기에 적
  행과 열을 동시에 조작 가능
  더 큰 유연성을 제공
  단점 : 기능이 복잡하고 익히기 어렵다.
  작은 디자인 프로젝트에서는 유용하지 않을 수 있다.

- CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
  답 : CSS는 선택자, 속성, 값 등의 요소들로 구성되어 있다.

1.  선택자 (Selector) :
    태그 선택자 (Type Selector)
    클래스 선택자 (Class Selector)
    아이디 선택자 (ID Selector)
    전체 선택자 (Universal Selector)
    속성 선택자 (Attribute Selector)
    가상 클래스 선택자 (Pseudo-class Selector)
2.  속성 (Property) :
    글꼴 관련 속성 (Font Properties)
    텍스트 관련 속성 (Text Properties)
    배경 관련 속성 (Background Properties)
    박스 모델 관련 속성 (Box Model Properties)
    위치 관련 속성 (Positioning Properties)
    리스트 관련 속성 (List Properties)
    테두리 관련 속성 (Border Properties)
    색상 관련 속성 (Color Properties)
    기타 속성 (Miscellaneous Properties)
3.  값 (Value) :
    길이 단위 (Length Units)
    색상 값 (Color Values)
    문자열 값 (String Values)
    숫자 값 (Numeric Values)
    URL 값 (URL Values)
    박스 모델 값 (Box Model Values)
    위치 값 (Positioning Values)
    기타 값 (Miscellaneous Values)

## Quest

- Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
- **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced

- 왜 CSS는 어려울까요?
- CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
- 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?

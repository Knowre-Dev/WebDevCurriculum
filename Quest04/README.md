# Quest 04. OOP의 기본

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics

- 객체지향 프로그래밍
  - 프로토타입 기반 객체지향 프로그래밍
  - 자바스크립트 클래스
    - 생성자
    - 멤버 함수
    - 멤버 변수
  - 정보의 은폐
  - 다형성
- 코드의 재사용

## Resources

- [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
- [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
- [Class Composition](https://alligator.io/js/class-composition/)
- [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist

- 객체지향 프로그래밍은 무엇일까요?
  답: 객체 지향 프로그래밍은 문제를 해결하기 위해 필요한 객체 만들고, 그 객체들간의 상호 작용을 통해 문제 해결 방법.

  - `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
    :`#`은 객체지향프로그맹 언어에서 캡슐화 원칙을 따르기 위해 필요함. 캡슐화를 통해 객체의 세부 내용 은폐가 되며 이 은폐 덕분에 변경이 발생시 오류 발생이 적고 재사용하기 편리함.

  - 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
    답: -다형성은 같은 타입 또는 클래스를 상속받은 서로 다른 클래스 객체가 같은 메서드를 호출할 때, 각자 다른 방식으로 동작하도록 하는 것을 말한다.

  * 그래서 동일한 프로토타입에도 실행결과가 다른 객체로써 활용 가능.

  - 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
    답: 상속이란 객체들간의 관계를 구축하는 방법이다.
    장점 : 코드 재사용성에 좋음.
    유지보수성이 높아진다.
    다향성을 지원.
    단점 : 의존성이 높아짐 (하위 클래스가 상위클래스에 의존하기 때문에)
    가독성이 떨어짐.
    오버라이딩 문제 발생.

  - OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?
    답: OOP의 합성은 두개 이상의 클래스를 조합하여 새로운 클래스로 만드는 방법.
    합성의 장점은 객체를 더 작은 부분으로 나누어 다른 클래스에 포함시킬 수 있다는 것.

- 자바스크립트의 클래스는 어떻게 정의할까요?
  답: ES6에서 부터 "class"키워드를 사용하여 정의한다. 예) class 함수명 {
  ...
  }

  - 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
    답: 프로토타입 객체를 먼저 만들고 이것을 토대로 새로운 객체 생성.(템플릿역할)

  - 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
    답: ?? (이부분은 정확한 관계를 잘 모르겠음) 클래스 문법은 프로토타입 기반의 객체 지향 프로그래밍을 더 쉽고 직관적으로 사용할 수 있도록 개선하게 해줌

## Quest

- 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
- 요구사항은 다음과 같습니다:
  - 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  - 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  - 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  - 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  - 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  - Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced

- 객체지향의 역사는 어떻게 될까요?
- Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?

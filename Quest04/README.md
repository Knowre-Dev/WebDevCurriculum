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

> 객체 지향 프로그래밍은 프로그램을 (명령어의 집합이 아닌) 독립적인 객체의 집합으로 표현하려는 프로그래밍 패러다임을 말합니다.

- `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?

> 클래스 외부에서 접근할 수 없도록 은닉하기 위해 필요합니다.
> 해당 private 속성이 정의된 클래스에서만 상태 변경을 허용해 의도치 않은 상태 변경을 피하기 위함입니다.

- 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?

> 특정 기능을 선언(설계)부분과 구현(동작)부분으로 분리한 후 구현부분을 다양한 방법으로 만들어 선택하여 사용할 수 있는 성질입니다.
> Figure라는 객체가 있고 이것을 상속받은 Triangle, Square, Circle이라는 객체가 있다면 Figure의 Draw 메서드를 상속 받아 해당 객체에 맞게 구현해주면 코드의 재사용성을 높일 수 있습니다.

- 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?

> 상속이란 객체의 프로퍼티 또는 메서드를 다른 객체가 그대로 사용할 수 있게 하는 것입니다.
> 상속을 통해 기존의 코드를 재사용해 불필요한 중복을 제거할 수 있습니다.
> 객체 간의 종속 관계를 형성함으로써 조직화할 수 있습니다.
> 상위 객체에 변화가 생겼을 때 하위 객체가 정상적으로 작동할 수 있을지에 대한 예측이 힘듭니다.
> 기능 확장에 따라 상위 객체가 파생된 클래스들이 많아지면 복잡해지고 사용에 어려움이 생길 수 있습니다.

- OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?

> 상속의 단점을 피하면서도 코드를 재사용할 수 있는 방법입니다.
> 상속과 같은 계층으로 인한 문제가 없으므로 유지보수를 쉽게 합니다

- 자바스크립트의 클래스는 어떻게 정의할까요?

  > class를 선언하기 위해서는 클래스의 이름과 함께 class 키워드를 사용합니다.
  > class로 생성될 객체를 초기화하기 위한 constructor 메서드를 정의하고, 필요에 따라 프로토타입 메서드나 정적 메서드를 정의합니다.

  - 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?

  > 기존의 객체를 복사하여 새로운 객체를 생성하는 언어입니다. 프로토타입 기반의 언어들은 클래스와 인스턴스의 차이를 두지 않습니다.
  > 객체들은 또 다른 객체를 생성하기 위해 프로토타입으로 연관지어 질 수 있으며, 프로토타입으로부터 생성된 두번째 객체가 프로토타입인 첫번째 객체의 속성에 접근하는 것을 허용합니다.

  - 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?

  > class가 없던 Javascript는 객체를 생성할 때 별도의 내부 생성자없이 바로 객체를 생성하였고, 이에 따른 속성이나 행동 값들을 부여해주었습니다.

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

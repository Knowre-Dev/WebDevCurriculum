# Quest 05. OOP 특훈

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍을 조금 더 훈련해 보겠습니다.

## Topics

- Separation of Concerns
- 객체지향의 설계 원칙
  - SOLID 원칙
- Local Storage

## Resources

- [Separation of concerns](https://jonbellah.com/articles/separation-of-concerns/)
- [SOLID](https://en.wikipedia.org/wiki/SOLID)
- [객체지향 설계 5원칙](https://webdoli.tistory.com/210)
- [MDN - Local Storage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

## Checklist

- 관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?

```
 소프트웨어 공학에서 매우 중요한 원칙 중 하나이며, 프로그램을 여러 부분 나누어 각 부분이 서로 독립적으로 개발, 변경, 유지보수 될 수 있도록 하는 것.
  웹에서는 관심사의 분리 원칙을 적용하여 사용자 인터페이스, 데이터 베이스 접근, 비즈니스 로직등 각각 분리하여 개발한다.
  이렇게 함으로써 유지보수가 용이해진다.
```

- 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?

```
  답: SOLID는 객체 지향 프로그래밍에서 디자인 원칙을 나타내는 두문자어이다.
  SRP (Single Responsibility Principle) : 하나의 클래스는 하나의 책임만을 가져야 한다는 원칙
  OCP (Open-Closed Principle) : 소프트웨어 개체(클래스, 모듈, 함수)는 확장에는 열려 있어야 하지만 변경에는 닫혀 있어야 한다는 원칙
  LSP (Liskov Substitution Principle) : 자식 클래스는 부모 클래스의 기능을 수행할 수 있어야 한다는 원칙
  ISP (Interface Segregation Principle) : 클라이언트는 자신이 사용하지 않는 메소드에 의존하지 않아야 한다는 원칙
  DIP (Dependency Inversion Principle) : 추상화에 의존해야 하며 구체화에는 의존해서는 안 된다는 원칙

- 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?
  답: 로컬 스토리지는 사용자의 로컬에 존재하는 저장소이다.
  크롬 브라우저 개발자도구에서 Application 탭을 선택 , 그다음 Storage 에서 local Storage 영역에서 확인하고 싶은 도메인 선택.
```

## Quest

- 외부 라이브러리나 프레임워크를 사용하지 않고, 자바스크립트를 이용하여 간단한 웹브라우저 기반의 텍스트 에디터를 만들어 보겠습니다.
  - 기본적으로 VSCode와 같이 탭을 이용해 여러 개의 파일을 동시에 편집할 수 있습니다.
  - 탭을 눌러 열려 있는 다른 파일을 편집할 수 있으며 탭을 언제든지 닫을 수 있습니다.
  - VSCode와 같이 새 파일, 로드, 저장, 다른 이름으로 저장 등의 기능을 가집니다. 저장은 웹 브라우저의 로컬 스토리지를 이용합니다.
  - VSCode와 같이 탭이 수정되었는데 저장되기 이전일 경우 이를 알려주는 인디케이터가 작동합니다.
  - 같은 이름의 파일을 저장할 경우 에러를 표시해야 합니다.
- 이번 퀘스트의 결과물은 앞으로의 많은 퀘스트에서 재사용되게 되니, 주의깊게 코드를 작성해 보세요!

## Advanced

- 웹 프론트엔드 개발에서 이러한 방식의 패턴을 더 일반화해서 정리할 수 있을까요? 이 퀘스트에서 각각의 클래스들이 공통적으로 수행하게 되는 일들에는 무엇이 있을까요?

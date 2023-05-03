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

> HTML, CSS, JS의 역할을 분리해 유지보수를 쉽게 하는 것입니다.
> inline style을 사용하지 않고, target element의 id나 class의 prefix로 js를 사용하는 방법이 있습니다.

- 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?

> Single responsibility(단일 책임 원칙) : 한 클래스는 하나의 책임만 가져야한다.

> Open/closed(개방 폐쇄 원칙) : 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다.

> Liskov substitution(리스코프 치환 원칙) : 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다.

> Interface segregation(인터페이스 분리 원칙) : 특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다.

> Dependency inversion(의존성 역전 원칙) : 추상화에 의존해야지, 구체화에 의존하면 안 된다.

- 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?

> 브라우저 자체에 반영구적으로 데이터를 저장하며, 브라우저를 종료해도 데이터가 유지됩니다. 다만 도메인이 다른 경우 로컬 스토리지에 접근할 수 없습니다.
> window.localStorage, window.sessionStorage로 접근할 수 있습니다.

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

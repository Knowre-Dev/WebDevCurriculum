# Quest 19-F. 웹 어셈블리의 기초

## Introduction
* 이번 퀘스트에서는 2021년 현재 웹 프론트엔드의 많은 최신 기술 중 웹 어셈블리에 관해 알아보겠습니다.

## Topics
* Web Assembly
* Rust

## Resources
* [MDN - 웹어셈블리의 컨셉](https://developer.mozilla.org/ko/docs/WebAssembly/Concepts)
* [MDN - Rust to wasm](https://developer.mozilla.org/ko/docs/WebAssembly/Rust_to_wasm)
* [Learn Rust](https://www.rust-lang.org/learn)
* [Rust - crypto::sha2](https://docs.rs/rust-crypto/0.2.36/crypto/sha2/index.html)

## Checklist

- 웹 어셈블리란 어떤 기술인가요?
  - 2015년부터 개발되어 2017년 처음 발표
  - JS가 아닌 C, C++, Rust등을 사용하여 컴파일된 바이너리를 실행 가능
  - 네이티브에 가까운 속도로 웹에서 실행 가능하게 하는 목적 & JS의 단점 보완 (양자택일이 아닌 상호보완)
  - 웹어셈블리는 많은 경우에 자바스크립트보다 더 빠르다.
    - 웹어셈블리 코드가 자바스크립트보다 더 간결하기 때문에 (압축된 경우에도 마찬가지), 코드를 가져오는 데에 더 적은 시간이 걸린다.
    - 웹어셈블리 코드를 해독(decode)하는 시간이 자바스크립트의 구문을 해석 (parse) 하는 시간보다 적게 걸린다.
    - 웹어셈블리 코드는 자바스크립트 코드보다 더 머신 코드에 가깝고, 서버단에서 미리 최적화가 되어 있기 때문에 컴파일하고 최적화하는 시간이 적게 걸린다.
    - 웹어셈블리는 타입이나 다른 정보가 미리 내장되어 있기 때문에, 자바스크립트 엔진이 실행시점에 분석할 필요가 없어서 재-최적화하는 시간이 필요없다.
    - 웹어셈블리 코드는 성능을 위해 컴파일러를 느리게 만드는 요인들에 대해 개발자들이 미리 알고 있을 필요가 없으며, 머신에 적합한 명령어 셋을 갖고 있기 때문에 실행시간도 주로 더 적게 걸린다.
    - 메모리를 직접 관리하기 때문에 가비지 컬렉션이 필요없다.
- 웹 어셈블리 모듈을 웹 프론트엔드 상에서 실행시키려면 어떻게 해야 할까요?
  - 익스포트된 웹어셈블리 코드를 일반적으로 부를 수 있는 자바스크립트 함수로 감싸고, 웹어셈블리 코드에서도 동기적으로 일반 자바스크립트 함수를 호출
- Rust란 어떤 특징을 가진 프로그래밍 언어인가요?
  - C/C++와 동등한 수준의 속도를 달성하면서 안전성, 동시성을 목표
  - 컴파일언어 / 다중 패러다임 언어
  - 소유권(Ownership) 개념으로 GC가 없어도 메모리 안전 보장
  - null 포인터 에러가 언어 차원에서 존재할 수 없다.
  - 예외나 에러를 다른 언어에 비해서 상당히 철저히 관리
- 웹 어셈블리 모듈을 만드는 방법에는 어떤 것들이 있나요?
  - 상위 레벨 언어로 코드 작성후 웹어셈블리로 컴파일
  - 어셈블리 수준에서 바로 WebAssembly를 작성 및 생성
- 웹 어셈블리가 할 수 없는 작업에는 무엇이 있을까요? 웹 어셈블리는 어떤 목적에 주로 쓰이게 될까요?
  - 다이렉트로 DOM 접근 불가
  - 3D 게임이나, 가상/증강현실, 영상처리, 이미지/비디오 편집, 그 외 네이티브 성능을 필요로하는 여러 분야

## Quest

- 텍스트 에디터 프로그램에서 각 탭의 내용의 SHA-256 해시를 실시간으로 계산하여 화면 아래에 표시해 보세요.
  - 해당 해시는 Rust로 작성된 웹 어셈블리 함수를 통해 계산되어야 합니다.
  - 순수 자바스크립트로 계산할 때와의 퍼포먼스 차이를 체크해 보세요.

## Advanced

- 웹 어셈블리 바이너리는 어떻게 구성되어 있을까요?
  - [Conventions](https://webassembly.github.io/spec/core/syntax/conventions.html)
    - [Grammar Notation](https://webassembly.github.io/spec/core/syntax/conventions.html#grammar-notation)
    - [Auxiliary Notation](https://webassembly.github.io/spec/core/syntax/conventions.html#auxiliary-notation)
    - [Vectors](https://webassembly.github.io/spec/core/syntax/conventions.html#vectors)
  - [Values](https://webassembly.github.io/spec/core/syntax/values.html)
    - [Bytes](https://webassembly.github.io/spec/core/syntax/values.html#bytes)
    - [Integers](https://webassembly.github.io/spec/core/syntax/values.html#integers)
    - [Floating-Point](https://webassembly.github.io/spec/core/syntax/values.html#floating-point)
    - [Names](https://webassembly.github.io/spec/core/syntax/values.html#names)
  - [Types](https://webassembly.github.io/spec/core/syntax/types.html)
    - [Number Types](https://webassembly.github.io/spec/core/syntax/types.html#number-types)
    - [Reference Types](https://webassembly.github.io/spec/core/syntax/types.html#reference-types)
    - [Value Types](https://webassembly.github.io/spec/core/syntax/types.html#value-types)
    - [Result Types](https://webassembly.github.io/spec/core/syntax/types.html#result-types)
    - [Function Types](https://webassembly.github.io/spec/core/syntax/types.html#function-types)
    - [Limits](https://webassembly.github.io/spec/core/syntax/types.html#limits)
    - [Memory Types](https://webassembly.github.io/spec/core/syntax/types.html#memory-types)
    - [Table Types](https://webassembly.github.io/spec/core/syntax/types.html#table-types)
    - [Global Types](https://webassembly.github.io/spec/core/syntax/types.html#global-types)
    - [External Types](https://webassembly.github.io/spec/core/syntax/types.html#external-types)
  - [Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html)
    - [Numeric Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#numeric-instructions)
    - [Reference Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#reference-instructions)
    - [Parametric Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#parametric-instructions)
    - [Variable Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#variable-instructions)
    - [Table Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#table-instructions)
    - [Memory Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#memory-instructions)
    - [Control Instructions](https://webassembly.github.io/spec/core/syntax/instructions.html#control-instructions)
    - [Expressions](https://webassembly.github.io/spec/core/syntax/instructions.html#expressions)
  - [Modules](https://webassembly.github.io/spec/core/syntax/modules.html)
    - [Indices](https://webassembly.github.io/spec/core/syntax/modules.html#indices)
    - [Types](https://webassembly.github.io/spec/core/syntax/modules.html#types)
    - [Functions](https://webassembly.github.io/spec/core/syntax/modules.html#functions)
    - [Tables](https://webassembly.github.io/spec/core/syntax/modules.html#tables)
    - [Memories](https://webassembly.github.io/spec/core/syntax/modules.html#memories)
    - [Globals](https://webassembly.github.io/spec/core/syntax/modules.html#globals)
    - [Element Segments](https://webassembly.github.io/spec/core/syntax/modules.html#element-segments)
    - [Data Segments](https://webassembly.github.io/spec/core/syntax/modules.html#data-segments)
    - [Start Function](https://webassembly.github.io/spec/core/syntax/modules.html#start-function)
    - [Exports](https://webassembly.github.io/spec/core/syntax/modules.html#exports)
    - [Imports](https://webassembly.github.io/spec/core/syntax/modules.html#imports)

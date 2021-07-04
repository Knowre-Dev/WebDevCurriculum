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
* 웹 어셈블리란 어떤 기술인가요?
* 웹 어셈블리 모듈을 웹 프론트엔드 상에서 실행시키려면 어떻게 해야 할까요?
* Rust란 어떤 특징을 가진 프로그래밍 언어인가요?
* 웹 어셈블리 모듈을 만드는 방법에는 어떤 것들이 있나요?
* 웹 어셈블리가 할 수 없는 작업에는 무엇이 있을까요? 웹 어셈블리는 어떤 목적에 주로 쓰이게 될까요?

## Quest
* 텍스트 에디터 프로그램에서 각 탭의 내용의 SHA-256 해시를 실시간으로 계산하여 화면 아래에 표시해 보세요.
  * 해당 해시는 Rust로 작성된 웹 어셈블리 함수를 통해 계산되어야 합니다.
  * 순수 자바스크립트로 계산할 때와의 퍼포먼스 차이를 체크해 보세요.

## Advanced
* 웹 어셈블리 바이너리는 어떻게 구성되어 있을까요?

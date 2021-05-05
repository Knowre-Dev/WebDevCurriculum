# Quest 11. RDB의 기초와 ORM

## Introduction
* 이번 퀘스트에서는 데이터베이스를 다루는 방법에 대해 알아보겠습니다.

## Topics
* RDBMS
* MySQL
* ORM
* Hash
  * scrypt

## Resources
* [MySQL 101 – The basics](https://www.globo.tech/learning-center/mysql-101-basics/)
* [Sequelize](https://sequelize.org/)
* [안전한 패스워드 저장](https://d2.naver.com/helloworld/318732)

## Checklist
* RDBMS 테이블의 정규화는 무엇인가요?
* MySQL 외의 RDB에는 어떤 것들이 있나요?
  * Relational Database 외에 다른 DB에는 어떤 것들이 있을까요?
* RDBMS에서 테이블의 인덱싱은 무엇인가요? 인덱싱을 하면 어떤 점이 다르며, 어떤 식으로 동작하나요?
* ORM을 사용하는 것은 사용하지 않는 것에 비해 어떤 장단점을 가지고 있나요?
  * 자바스크립트 생태계의 ORM에는 어떤 것들이 있나요?
* 모델간의 1:1, 1:N, N:M 관계는 각각 무엇이고 어떨 때 사용하나요?
* DB에 사용자의 암호를 평문으로 저장하지 않고도 사용자의 암호를 인증하는 것이 가능한 이유는 무엇일까요?
  * 해시 함수에는 어떤 것이 있나요?
  * 사용자의 암호를 해싱하여 저장할 때 어떤 식으로 저장하는 것이 보안에 좋을까요?

## Quest
* 이번에는 메모장을 파일이 아닌 DB기반으로 만들어 보고자 합니다.
  * 적절한 테이블을 설계해 보세요.
  * Sequelize를 이용하여 데이터의 모델을 만들고 어플리케이션에 적용해 보세요.
  * 사용자의 비밀번호는 해싱을 통해 저장되어야 합니다.

## Advanced
* Object–relational impedance mismatch란 어떤 개념인가요?
* Foreign Key란 무엇인가요? 이것을 사용할 때의 장점과 단점은 무엇일까요?
* 이전에 쓰이던 해시함수들에는 어떤 것이 있을까요? 패스워드 해싱의 추세의 역사는 어떻게 이어져왔나요?

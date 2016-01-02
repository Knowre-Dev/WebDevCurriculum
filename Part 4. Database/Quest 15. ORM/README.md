# Quest 15. ORM


## Introduction
* 이번 퀘스트에서는 ORM을 이용하여 node.js 어플리케이션과 DB를 연동하는 법을 알아보겠습니다.

## Topics
* ORM
  * sequelize
  * 모델간의 관계들(BelongsTo, HasOne, HasMany, BelongsToMany)
* 각종 쿼리
  * `CREATE`, `SELECT`, `UPDATE`, `DELETE`

## Resources
* [sequelize](http://docs.sequelizejs.com/en/latest/)
* [Head First PHP & MySQL](http://www.yes24.com/24/Goods/3831680?Acode=101), 한빛미디어
* [Real MySQL : 개발자와 DBA를 위한](http://www.yes24.com/24/Goods/6960931?Acode=101), 위키북스
* [SQL AntiPatterns : 개발자가 알아야 할 25가지 SQL 함정과 해법](http://www.yes24.com/24/Goods/5269099?Acode=101), 인사이트

## Checklist
* ORM을 사용하는 것은 사용하지 않는 것에 비해 어떤 장단점을 가지고 있나요?
* 모델간의 1:1, 1:N, N:M 관계는 각각 무엇이고 어떨 때 사용하나요?

## Quest
* 이제 Quest 12~13의 결과물을 Quest 14의 MySQL 테이블과 연동해 보고자 합니다.
  * Sequelize를 통해 Quest 14에서 설계한 테이블을 모델로 만들어 보세요.
  * 로그인을 지원하는 메모장 어플리케이션을 파일이 아닌 DB기반으로 바꾸어 보세요.

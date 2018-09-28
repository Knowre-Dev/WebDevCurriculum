```sql
CREATE TABLE M_USER (
  Id                VARCHAR(50)     NOT NULL,
  Pw                VARCHAR(256)     NOT NULL,
  Name              VARCHAR(100)    NOT NULL,
  LastTitle         VARCHAR(100),
  IsEnable          BIT(1)          NOT NULL    DEFAULT 1,

  PRIMARY KEY(Id)
);

CREATE TABLE MEMO (
  Sequnce           INT                         AUTO_INCREMENT,
  UserId            VARCHAR(50)     NOT NULL,
  Title             VARCHAR(100)    NOT NULL,
  Content           TEXT,
  LastPosition      INT,

  PRIMARY KEY(Sequnce)
);

CREATE INDEX MEMO_UserId ON MEMO(UserId);

CREATE INDEX MEMO_UserId_Title ON MEMO(UserId, Title);
```

### 사용자의 암호는 어떤 식으로 저장해야 할까요?

  * 사용자의 암호는 해시함수와 솔팅, 키 스트레칭 등의 기법을 적절히 조합하여 암호화 한 후 저장한다.
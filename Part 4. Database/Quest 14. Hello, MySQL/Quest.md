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


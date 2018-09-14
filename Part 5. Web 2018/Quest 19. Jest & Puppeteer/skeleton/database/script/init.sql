USE test;

CREATE TABLE IF NOT EXISTS MEMBER (
  id                VARCHAR(50)     NOT NULL,
  pw                VARCHAR(256)    NOT NULL,
  name              VARCHAR(100)    NOT NULL,
  salt              VARCHAR(10)     NOT NULL,
  lastTitle         VARCHAR(100),
  isEnable          BIT(1)          NOT NULL    DEFAULT 1,

  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS MEMO (
  id                INT                         AUTO_INCREMENT,
  userId            VARCHAR(50)     NOT NULL,
  title             VARCHAR(100)    NOT NULL,
  content           TEXT,
  lastPosition      INT,

  PRIMARY KEY(id),
  INDEX `MEMO_UserId` (`UserId`),
  INDEX `MEMO_UserId_Title` (`UserId`, `Title`)
);

DELETE FROM MEMBER WHERE id = 'test';

INSERT INTO MEMBER 
(id, pw, name, salt, lastTitle) 
VALUES
('test', 'JPJi8J6DVt7Ga4Fp5LraJBw5rgtjHlzB44QK93RTozI=', 'test', '!@#$%^', null);
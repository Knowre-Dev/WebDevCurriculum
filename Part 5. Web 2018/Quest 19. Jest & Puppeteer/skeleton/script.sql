USE test;

/*
TABLE
*/
DROP TABLE IF EXISTS `MEMBER`;
CREATE TABLE MEMBER (
  id                VARCHAR(50)     NOT NULL,
  pw                VARCHAR(256)    NOT NULL,
  name              VARCHAR(100)    NOT NULL,
  salt              VARCHAR(10)     NOT NULL,
  lastTitle         VARCHAR(100),
  isEnable          BIT(1)          NOT NULL    DEFAULT 1,

  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS `MEMO`;
CREATE TABLE MEMO (
  id                INT                         AUTO_INCREMENT,
  userId            VARCHAR(50)     NOT NULL,
  title             VARCHAR(100)    NOT NULL,
  content           TEXT,
  lastPosition      INT,

  PRIMARY KEY(id),
  INDEX `MEMO_UserId` (`UserId`),
  INDEX `MEMO_UserId_Title` (`UserId`, `Title`)
);

/*
INSERT DATA
*/
INSERT INTO MEMBER 
(id, pw, name, salt, lastTitle) 
VALUES
('test1', 'JPJi8J6DVt7Ga4Fp5LraJBw5rgtjHlzB44QK93RTozI=', 'test1', '!@#$%^', 'first title'),
('test2', 'f5ecW9of/65/JiJAUAzcqr83mZWfXVUcwo0O0j7l8pc=', 'test2', '!@#$%^', null);

INSERT INTO MEMO
(userId, title, content)
VALUES
('test1', 'first title', '1111111111111111111111'),
('test1', 'second title', '22222222222222222222');
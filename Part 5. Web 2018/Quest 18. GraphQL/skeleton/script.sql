USE test;

--TABLE
DROP TABLE IF EXISTS `USER`;
CREATE TABLE USER (
  id                VARCHAR(50)     NOT NULL,
  pw                VARCHAR(256)     NOT NULL,
  name              VARCHAR(100)    NOT NULL,
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

  PRIMARY KEY(id)
);

--INDEX
CREATE INDEX MEMO_UserId ON MEMO(UserId);

CREATE INDEX MEMO_UserId_Title ON MEMO(UserId, Title);

--INSERT DATA
INSERT INTO USER 
(id, pw, name) 
VALUES
('test1', 'JPJi8J6DVt7Ga4Fp5LraJBw5rgtjHlzB44QK93RTozI=', 'test1'),
('test2', 'f5ecW9of/65/JiJAUAzcqr83mZWfXVUcwo0O0j7l8pc=', 'test2');

INSERT INTO MEMO
(userId, title, content)
VALUES
('test1', 'first title', '1111111111111111111111'),
('test1', 'second title', '22222222222222222222');


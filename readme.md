# KnowRe web development curriculum
---

## Introduction
---
- 이 커리큘럼은 KnowRe와 함께하게 된 개발자를 위해 만들어진 커리큘럼입니다.
- 이 커리큘럼의 퀘스트들을 수행하는 데 있어서 다음 링크들의 필요한 부분을 참조하시면 좋습니다.
 - http://xguru.net/1897
 - http://nigayo.github.io/page/lecture.html


## git
---
### Hello, git
- Github에 가입해 보세요.
- git 명령어들을 익혀 보세요.
- **Quest: Tutorial for git**
 - https://try.github.io
 - http://pcottle.github.io/learnGitBranching/


## HTML & CSS
---
### Hello, HTML
- HTML 표준의 역사를 간략하게 알아 보세요.
 - HTML4.01, XHTML1.0, XHTML1.1, XHTML2.0, HTML5 등의 키워드는 중요합니다.
 - MS와 IE는 왜 역사의 죄인이 되었을까요?
- HTML 문서의 형식을 익혀 보세요.
- HTML 엘리먼트에는 무엇이 있는지 알아 보세요.
- [MDN](https://developer.mozilla.org/ko/docs/Web/HTML) 사이트를 활용하면 도움이 될 것입니다!
- **Quest: HTML Document**
 - gmail 목록 페이지를 HTML문서로 표현한다면 어떻게 될까요?
 - 소스를 보지 말고 한 번 자신만의 HTML 코드를 만들어 보세요.

### Hello, CSS
- CSS 문법을 익혀 보세요.
- CSS를 HTML에 적용하려면 어떻게 해야 할까요?
- CSS Box Model이 무엇인지 알아 보세요.
 - 가장 중요한 것: position, left/top, display, width/height
- 크롬 개발자 도구의 elements 탭을 사용하는 방법을 알아 보세요.
- **Quest: Layout**
 - CSS 박스를 다음과 같이 배치하려면 어떻게 해야 할까요?
  - ![](cssLayout.001.png)
  - ![](cssLayout.002.png)
  - ![](cssLayout.003.png)
 - 브라우저의 창 크기가 변하더라도 레이아웃이 깨지지 않도록 하려면 어떻게 해야 할까요?
- **Quest: Static HTML**
 - HTML과 CSS를 이용하여, gmail 목록 페이지를 흉내내 보세요.
 - 아이콘 그림은 아무렇게나 그려넣으셔도 상관 없습니다!


## JavaScript
---
### Hello, JavaScript
- 기본적인 JavaScript 문법을 익혀 보세요.
- JavaScript의 자료형에는 어떤 것이 있는지 알아 보세요.
- 웹 브라우저의 자바스크립트 콘솔창을 띄워 보세요.
- **Quest: Stars**
 - 숫자를 하나 입력받아 그림과 같이 별을 찍어 주는 프로그램을 만들어 보세요.
 - prompt()와 console.log()를 이용하시면 됩니다.

### JavaScript OOP
- 객체지향적 개발은 무엇인가요?
 - 클래스, 생성자, 멤버변수, 그리고 멤버함수가 무엇인지 알아 보세요.
 - 자바스크립트에서 객체지향적 개발을 하려면 어떻게 해야 할까요?
- **Quest: Object**
 - 바탕화면과 아이콘, 폴더를 가지는 시스템을 자바스크립트로 흉내내보고자 합니다.
  - 처음에는 세 개의 아이콘이 있으며, 그 중 두 개는 폴더입니다.
  - 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  - 폴더 아이콘을 더블클릭하면 해당 폴더가 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
 - 이 때 어떤 클래스들이 필요할지, 각 클래스들의 멤버변수와 멤버함수는 어떤 것이 있을지 설계해 보세요.
 - 실제 동작하는 함수를 짤 필요는 없습니다. 빈 함수로 정의만 해 보세요!

### DOM API
- DOM이 무엇인가요?
- 자바스크립트를 이용해 DOM 객체를 조작하려면 어떻게 해야 할까요?
- 자바스크립트를 이용해 마우스나 키보드 입력에 대응하려면 어떻게 해야 할까요?
- **Quest: Desktop system**
 - 바탕화면과 아이콘, 폴더를 가지는 시스템을 자바스크립트로 흉내내보고자 합니다.
 - 직전의 퀘스트의 설계를 활용하여 바탕화면 시스템을 완성해 보세요!

### Closure
- 자바스크립트의 변수는 어떤 범위에서 유효한가요? 어떤 식으로 참조될까요?
- 자바스크립트의 this는 무엇을 가리킬까요?
- http://nigayo.github.io/page/lecture/advanced/3.html 을 참고하세요!
- **Quest: Closure**
 - 참고자료의 48~49p에 있는 과제2를 수행해 보세요!

### Project: Client-side application
- **Quest: Client-side application**
 - 자유 프로젝트입니다.
 - 서버 없이 클라이언트 단독으로 동작할 수 있는 웹 어플리케이션을 하나 만들어 보세요!
 - 너무 복잡한 어플리케이션 대신 4~5개 정도의 클래스를 가진 정도가 적당할 것 같습니다.
 - 기한은 4일입니다!


## node.js
---
### Hello, node
- node.js를 PC에 설치해 보세요.
- npm이 무엇인지 알아 보세요.
- node.js의 require() 함수는 어떻게 쓰는 것인가요?
- module.exports와 exports의 차이는 무엇일까요?
- **Quest: Configuration**
 - 먼저 다음 파일을 다운로드 받습니다.
   - [config1.js](config1.js)
   - [config2.js](config2.js)
 - 커맨드 라인에서 다음과 같은 명령을 쳤을 때 위 파일들의 내용이 나타나도록 해 보세요.
   - $ node app.js 1
```
{
	name: 'Config1',
	var1: 'aaa',
	var2: [1, 2, 3, 4]
}
```
   - $ node app.js 2
```
{
	name: 'Config2',
	var1: 'bbb',
	var2: [2, 3, 4, 5]
}
```
 - app.js를 적당히 만들고 config*.js 파일들을 적당히 고치면 됩니다..!

### HTTP/TCP/IP
- OSI 7 Layer가 무엇인지 알아 보세요.
- 인터넷이 무엇일까요?
- **Quest: Understanding network**
 - 우리가 구글 검색창에 어떠한 쿼리를 날렸을 때, 인터넷 상에서 어떤 일이 일어날까요?
 - 충분히 조사해 보고, 아는대로 최대한 자세히 설명해 보세요.

### Basic server
- npm의 http 모듈에 대해 알아 보세요.
- **Quest: My first HTTP server**
 - 브라우저의 주소창에 http://localhost:8080을 치면 'Hello World!'를 출력하는 서버를 만들어 보세요.
 - HTTP GET/POST 요청을 모두 받아 해당 변수를 그대로 돌려주는 서버를 만들어 보세요.

### Asynchronism & Ajax


## AWS
---
### EC2 instance 생성

### CentOS6 깔아보기

### 접속하기


### DNS의 이해

### Route53


### S3 bucket 생성

### 사용해보기

### DNS 달기

### Project: server/client application


## MySQL
---
### CRUD

### CRUD with node.js

### ORM


## Modern web
---
### Canvas & SVG

### Websocket

### OAuth

### Swint

# Quest 01. HTML과 웹의 기초

## Introduction

- HTML은 HyperText Markup Language의 약자로, 웹 브라우저에 내용을 표시하기 위한 가장 기본적인 언어입니다. 이번 퀘스트를 통해 HTML에 관한 기초적인 사항들을 알아볼 예정입니다.

## Topics

- HTML의 역사
  - HTML 4.01, XHTML 1.0, XHTML 1.1
  - XHTML 2.0과 HTML5의 대립
  - HTML5와 현재
- 브라우저의 역사
  - Mosaic와 Netscape
  - Internet Explorer의 독점시대
  - Firefox와 Chrome의 등장
  - iOS Safari와 모바일 환경의 브라우저
  - Edge와 Whale 등의 최근의 Chromium 계열 브라우저
- HTML 문서의 구조
  - `<html>`, `<head>`와 `<body>` 등의 HTML 문서의 기본 구조
  - 시맨틱 엘리먼트
  - 블록 엘리먼트와 인라인 엘리먼트의 차이

## Resources

- [MDN - HTML](https://developer.mozilla.org/ko/docs/Web/HTML)
- [HTML For Beginners](https://html.com/)
- [History of the web browser](https://en.wikipedia.org/wiki/History_of_the_web_browser)
- [History of HTML](https://en.wikipedia.org/wiki/HTML)
- [StatCounter](https://gs.statcounter.com/)

## Checklist

- HTML 표준의 역사는 어떻게 될까요?

  - **HTML 표준을 지키는 것은 왜 중요할까요?**
    - HTML는 웹 문서의 표시 방법을 정의한 규격이다.
    - 즉, 서로 다른 브라우저, 다른 렌더링 엔징으로 비슷한 웹페이지 레이아웃을 표시할 수 있게 해주는 기반 요소이다
    - 웹 서비스 작성자가 이러한 표준에 맞춰 문서를 작성하고, 브라우저 개발업체는 표준에 맞춰 문서를 처리해야지, 사용자가 어떤 환경에서 접속하던간에 동일한 웹페이지 레이아웃과 정보를 전달 할 수 있다.
      <br/><br/>
  - **XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?**

    - XHTML란?

      - **순차적 마크업**의 기능과 **서술적 마크업**의 장점을 모두 수용한 마크업 언어이다. 기존 HTML에 기본 데이터, 구조, 표현 정보가 저장되며, 문서 내용을 어떻게 시각적으로 표현할 것인가에 대한 정보를 비롯해 폰트, 색상, 여백, 줄 간격 등 표현에 관련된 다수의 추가 정보가 포함되어 있었다면, 문서 구조와 표현 정보를 분리하여 문서가 기본 데이터와 구조(의미)만 가지는 것이 XHTML이다.
      - 분리된 표현 정보를 필요로할 때 다양하게 적용할 수 있고, 텍스트를 기반으로 하기 때문에 이질적인 환경에서 데이터 교환 형태로도 적합하여 HTML보다 처리속도가 빠르다는 장점이 있다.

    - XHTML이 나오게 된 계기

      - 웹 표준화 기구인 W3C(World Wide Web Consortium)가 기존의 HTML이 사용하던 느슨한 규칙을 강화하기 위해 개발되었다.

    - HTML과 XHTML은 별개의 분리된 표준

      - HTML과 XHTML 모두 웹 문서를 제작할 때 사용하는 웹표준 기술이므로 상황이나 환경에 따라 제작자가 선택 가능하다.

    - 그렇다면 XHTML2.0은 왜 나오지 못하게 되었을까?

      - XTML은 당시 브라우저 개발업체들이 당시 동의하지 않았던 규격이였으며, 견고한 웹을 구현한다는 취지아래 기존 웹과의 하위 호환성을 고려하지 않는 치명적인 문제가 있었다.

      - 그리하여 애플, 모질라 재단, 오페라 소프트웨어와 같은 브라우저 개발 업체들은 자체적으로 웹 표준을 개발하고 유지하기위해 **WHATWG**(Web Hypertext Application Technology Working Group) 이라는 단체를 설립하게 된다.

      - W3C의 행보에 반기를 들게 된 WHATWG은 HTML5 표준 규격을 개발하게 되었고 이러한 움직임에 W3C는 XHTML의 지속적 개발을 포기하게 되며, 결국 WHATWG와 W3C가 협업하여 HTML과 DOM 규격 단일 버전을 함께 개발하게 된다.
        <br/><br/>

  - HTML5 표준은 어떤 과정을 통해 정해질까요?
    <br/><br/>

- 브라우저의 역사는 어떻게 될까요?

  - **Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?**

    - Internet Explorer의 성장

      - 1995년에 MS사가 윈도우 운영 체제에 IE를 기본으로 포함하기 시작하며 사용자가 급격히 증가하게 되며, 경쟁사였던 넷스케이프 내비게이터가 몰락하게 되었다.
      - 고객의 웹 브라우저 선택권을 침해한다는 점에서 미법무부에서 반독점법으로 기소 되었으나, 합리의 원칙에 따라 결국 사건이 종결된다.

       <br/>

    - 독점하며 발생한 문제

      - 브라우저 시장을 독점하게 된 후, 사실상 IE브라우저의 기능개선은 거의 이루어지지 않게 된다.
        - 5년간 2번의 서비스 팩 업데이트 이외에는 기능 개선이 거의 없었다.
        - 릴리즈 주기가 매우 길어 최신 웹 표준의 지원과 버그 수정이 느렸다.
        - 모바일 트래픽이 데스크탑 트래픽을 능가하는 등 모바일 시장에 맞지 않았다.
      - 현재 HTML5 지원이 부실하고 보안이 취약하여 유튜브 등 몇몇 사이트들이 Internet Explorer 지원을 종료하고 있다.
        - Microsoft 측에서는 사실상 Internet Explorer를 레거시 웹 접속용으로, HTML5 등 신기술이 적용된 사이트들은 Microsoft Edge를 사용하는 것을 권장하고 있다.

      <br/>

  - **현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?**

    - 참고 사이트 : [스탯카운터](https://gs.statcounter.com/) - 트래픽(PV, Page View)을 기준으로 점유율을 계산한다. (새로운 브라우져 버젼이 출시되거나 새로운 서비스가 출시되면 점유율의 변화가 크다.)

    - 웹개발자에게 브라우저 점유율이 중요한 이유는 브라우저마다 HTML 번역 및 지원하는 기술의 차이가 있어 브라우저 간, 버전 간의 호환성을 고려해야 하기 때문이다.

    <br/>

  - **브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?**

    - 브라우저 엔진은 웹 브라우저의 핵심이 되는 소프트웨어 구성 요소이다.
    - HTML 문서와 기타 자원의 웹 페이지를 사용자의 장치에 시각물(UI)로 변환하는 역할을 한다.
    - [저명한 엔진 참고](https://ko.wikipedia.org/wiki/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80_%EC%97%94%EC%A7%84)

    <br/>

  - 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?

    - [참고](https://www.bloter.net/newsView/blt201804270001)

      <br/>

- HTML 문서는 어떤 구조로 이루어져 있나요?

  - **`<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?**

    - `<head>`의 역할은 HTML 페이지에 대한 metadata를 포함하는 것이다. (화면 상에서 보여지지 않는다.)
    - 검색 결과에 나타날 키워드와 페이지 설명, 콘텐츠 스타일을 지정하는 CSS, 문자 집합 선언 등을 포함하고 있다.

    - `<head>`에 자주 들어가는 엘리먼트들

      1. `<title>`

      - HTML문서 전체의 타이틀 표현하기 위한 메타데이터

      - 탭 내부 html을 설명하는 이름, 내용물을 추천하는 북마크 이름, 검색결과 등으로 사용된다.

      <br/>

      2. `<meta>`

      - `<base>`, `<link>`, `<script>`, `<style>`, `<title>`과 같은 다른 메타관련 요소로 나타낼 수 없는 메타데이터

        ```html
        <meta charset="utf-8" />
        ```

        - 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언”을 의미한다.
        - `utf-8` : 웹 페이지에서 어떤 문자라도 취급할 수 있다는 것을 의미한다.

        <br/>

        ```html
        <meta name="author" content="Chris Mills" />
        <meta
          name="description"
          content="The MDN Learning Area aims to provide
        complete beginners to the Web with all they need to know to get
        started with developing web sites and applications."
        />
        ```

        - `name`은 메타 요소가 어떤 정보의 형태를 갖고 있는지 설명한다.

        - `content`는 실제 메타데이터의 컨텐츠를 의미한다.

      3. `<link>`

      - favicon 기능

        ```html
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        ```

      - CSS 파일 연결 기능

        ```html
        <link rel="stylesheet" href="my-css-file.css" />
        ```

        - `rel="stylesheet" `로 문서의 스타일 시트임을 나타냄과 동시에 스타일 시트 파일의 경로를 포함하는 `href`를 내포

  <br/>

  - **시맨틱 태그는 무엇일까요?**

    - 무의미한 태그가 아닌, 각 태그가 스스로의 의미를 갖고 태그 이름만 보고도 해당 역할을 알 수 있는 태그를 뜻한다.

    - **시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?**

      - 검색 엔진은 시맨틱 태그를 사용한 마크업을 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주한다. ([SEO](https://developer.mozilla.org/ko/docs/Glossary/SEO) 참조)

      - 시각 장애가 있는 사용자가 화면 판독기로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있다.
      - 의미 있는 시맨틱 태그를 사용한 코드 블록을 찾는 것은 끝없는 div(div > div > div ...)를 탐색하는 것보다 훨씬 쉽다.
      - W3C에 따르면 "시맨틱 웹을 사용하면 애플리케이션, 기업 및 커뮤니티에서 데이터를 공유하고 재사용할 수 있다"고 한다. (의미가 있는 요소는 개발자 모두에게 명확한 의미를 전달한다)

      <br/>

  - **`<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?**

    1.  `<article>`

    - 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 의미한다.
    - **문서 혹은 요소가 독립적으로 존재할 수 있을 때 사용한다.**
    - 하나의 문서가 여러 개의 `<article>` → 하나의 `<article>` 내 여러개 `<section>` 존재가 가능하다.

    <br/>

    2. `<section>`

    - HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용한다.
    - `<section>` 요소를 일반 컨테이너로 사용하지 말자. 특히 단순한 스타일링이 목적이라면 `<div>`요소를 사용하자.
    - **논리적으로 관계 있는 문서 혹은 요소를 분리할 때 사용한다.**
    - 문서 요약에 해당 구획이 논리적으로 나타나야 할 경우에 사용(주로 제목과 함께 사용) 하자.

    <br/>

    3. `<div>`

    - 플로우 콘텐츠를 위한 통용 컨테이너이다.
    - **요소간 논리적 관계와는 상관없이 요소를 나눠야 할 필요가 있을 경우 사용**
    - `<div>` 요소는 의미를 가진 다른 요소(`<article>` 등)가 적절하지 않을 때만 사용한다.

    <br/>

    4. `<header>`

    - 소개 및 탐색에 도움을 주는 콘텐츠이다.
    - ex) 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함 가능
    - `<footer>` : 가장 가까운 [구획 콘텐츠](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)나 [구획 루트](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)의 푸터를 의미한다.
    - ex) 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용 포함

  - **블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?**

## Quest

- [이 화면](screen.png)의 정보를 HTML 문서로 표현해 보세요. 다만 CSS를 전혀 사용하지 않고, 문서의 구조가 어떻게 되어 있는지를 파악하여 구현해 보세요.
  - [CSS Naked Day](https://css-naked-day.github.io/)는 매년 4월 9일에 CSS 없는 웹 페이지를 공개하여 내용과 마크업에 집중한 HTML 구조의 중요성을 강조하는 행사입니다.
- 폴더에 있는 `skeleton.html` 파일을 바탕으로 작업해 보시면 됩니다.
  - 화면을 구성하는 큰 요소들을 어떻게 처리하면 좋을까요?
  - HTML 문서상에서 같은 층위에 비슷한 요소들이 반복될 때는 어떤 식으로 처리하는 것이 좋을까요?

## Advanced

- XML은 어떤 표준일까요? 어떤 식으로 발전해 왔을까요?
- YML, Markdown 등 다른 마크업 언어들은 어떤 특징을 가지고 있고, 어떤 용도로 쓰일까요?

# Lab #3- Event & Responsive UI

## Introduction

* Lab은 JQuery와 Bootstrap을 활용하여 동적으로 작동하는 UI를 개발하는 것이다.

## Requirement

* 이번 랩의 최종 산출물은 아래와 같이 MS의 OneDrive와 유사한 결과물이 나온다.
<img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.44.48.png>

* **이번 랩은 상당히 난해하기 때문에 모든 것을 구현하기 어려울 수도 있다.  배운다는 생각으로 하나하나 차근차근 구현해 가길 바란다!**
 
* 발생하는 이벤트는 아래와 같다.
    - File MouseOver - 파일 목록과 메뉴 등에 마우스가 올라갈 때, 해당 부분이 강조되어 표시된다(좌측 메뉴의 사진
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.44.56.png>
    - Click - 파일 목록 옆에는 체크 박스가 존재하며(기본 체크박스를 사용해도 됨), 클릭시 해당 체크박스 선택되 있는 상태로 변경된다.
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.45.11.png>
    - File Delete - 파일이 선택된 상태에서는 상단의 메뉴가 바뀌며, 해당 메뉴가 삭제하기 버튼이 있다. 해당 버튼을 클릭시 선택된 파일은 삭제된다
    - Sort - 파일 목록이 선택된 상태에서 우측 상단의 정렬 버튼을 누르고 정렬 방식을 선택하면 파일이 정렬된다. 단 모든 메뉴를 다 구현할 필요는 없다.
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.45.33.png>

* Responsive UI
    - Tablet Size - 가로가 1024이하으로 줄어들었을 경우, 좌측에 메뉴가 사라지며 사라진 메뉴는 Floating 되어 상단의 메뉴 아이콘을 눌렀을 경우에만 나타난다. 한번 누를 경우 사라진다
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.46.27.png>
    - SmartPhone Size - 가로가 360 이하로 줄어들었을 경우 나타나며 좌측메뉴가 사라지고 우측 메뉴역시 "..."으로 변경되어 나타난다
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.46.44.png>
    - 스마트폰크기에서는 파일 목록이 아래와 같이 변경되어 나타난다.
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.46.46.png>
    - 축소된 메뉴는 다음과 같이 메뉴 클릭시 Floating되어 나타난다
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.46.55.png>
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.47.02.png>
    - 왼쪽 마지막 메뉴를 클릭시 아래와 같이 파일에 대한 정보가 나타난다(동적으로 변할 필요는 없다)
    <img src=https://s3.ap-northeast-2.amazonaws.com/teamlab-gachon/cs50_web/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2017-01-23+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+12.47.07.png>
    
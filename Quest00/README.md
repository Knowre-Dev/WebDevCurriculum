# Quest 00. 형상관리 시스템

## Introduction
* git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  * `.git` 폴더
* GitHub

## Resources
* [Resources to learn Git](https://try.github.io)
* [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
* [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요? - 문서나 파일이 변경 된 경우, 변경된 내용을 기록하고 추적 가능하도록 하여 관리/ 변경 원인과 변경 사항을 확인해야 할 경우 용이
* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요? - git은 분산형 관리 시스템/ 저장소를 히스토리와 함께 복제하고 서버에 문제가 생길 경우 복제물로 다시 작업을 시작할 수 있음
  * git은 어떻게 개발되게 되었을까요? 
    - 파일의 버전 관리 필요/ 분산 개발이 가능하여 협업에 용이함/ 오픈소스 프로젝트 업로드
  * git이 분산형 시스템을 채택한 이유는 무엇일까요?
    - 분산형 시스템의 장점 : 중앙서버에 문제가 있어도 클라이언트 pc의 소스를 통한 원상 복구가 가능
    - 여러명이 동시에 작업하는 병렬 개발 가능
    - 프로젝트를 복사하여 로컬 환경에서 테스트 가능 
* git과 GitHub은 어떻게 다를까요? - git은 버전관리 소프트웨어 / github는 git을 사용하는 프로젝트를 지원하는 웹 호스팅 서비스
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
    - clone : 로컬 저장소에 clone
    - add : 현재까지 작업한 파일을 깃허브에 올림
    - commit : 변경된 내역을 깃허브에 올릴 준비 
    - push : 변경 내역을 올림
    - pull : 로컬 코드와 원본 저장소 코드를 동기화
    - branch : 새 브랜치 생성
    - stash : 아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 함
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
    - Object : git의 객체. blob(파일 내용) 과 tree(directory와 blob의 정보(파일명) 등을 담음)
    - Commit : 의미있는 변경 작업들을 저장소에 기록하는 동작
    - Head : 현재 체크아웃된 브랜치의 가장 최신커밋
    - Branch : 새 기능이나 버그 수정 작업을 할 때 브랜치를 사용하여 다른 팀 구성원의 작업과 분리하여 작업 가능
    - Tag : 특정 시점의 버전을 알려줌 
  = git은 커밋을 통해 저장소의 현재 상태에 대한 스냅샷을 생성하고 저장함
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
  - 로컬 저장소에서 git reset --hard HEAD~[number]로 되돌린 후 git push -f origin master 실행

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

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
* 형상관리 시스템은 왜 나오게 되었을까요?

  프로젝트는 팀 단위로 이뤄지고 규모가 커질수록 개발자 수가 많아지므로 프로젝트의 변경사항이 많아져 context를 이해하는게 어려워진다. 따라서 이 context를 이해하기 위해서다.    
  또한 상황에 따라 이전 state로 복구해야 할 수도 있는데, 형상관리 시스템으로 이전 버전의 state를 기록해 후에 복구할 수 있다.

  출처
  [GitHub Docs](https://docs.github.com/en/get-started/using-git/about-git)

* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
    - git은 DVSC로 분산형 형상관리 시스템이다. CVSC와 달리 중앙 저장소(central repository)에 계속 연결할 필요 없이 모든 개발자는 프로젝트 및 프로젝트 기록의 전체 복사본(full copy)을 갖는다.
    - git에서는 branch를 사용해 변경 사항을 안전하게 제안하여 코드 무결성을 유지한다.
    - git을 사용해 전체 timeline을 한 곳에서 볼 수 있고 개발자는 이걸 통해 필요한 context을 얻을 수 있다.

    출처
    [GitHub Docs](https://docs.github.com/en/get-started/using-git/about-git)

* git과 GitHub은 어떻게 다를까요?
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다. [O]
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다. [O]
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다. [ ]
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다. [ ]

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

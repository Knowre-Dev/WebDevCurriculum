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

형상관리 시스템은 특정 시점에 대해 상태를 기록해 놓으면 이후라도 언제든지 그 환경으로 돌아갈 수 있게 도와주는것
인데 왜 이 시스템이 나왔냐면 협업의 특성상 여러 사람들이 프로젝트를 함께 참여하게 되는데 이 때 누군가의 실수로 잘못된 버전이나 버그들이 생길경우들이 많아서
그러한 일들을 막기위해 생긴 시스템이다.

* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
git의 경우 버전별로 관리할 수 있는 형상관리 시스템이다.
분산형 형상관리 시스템은 마지막 저장한 것을 전부 복제하는것.(이와 반대되는것이 중앙집중식 버전 관리 시스템이다.)

  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
  git은 Linux 커널이 BitKeeper을 만들면서 이익을 추구하는 회사와 관계가 틀어져 무료 사용이 재고된 후,자체 도구를 만드는 계기가 되었는데 이 도구가 Git이다.
  git이 분산형 시스템을 채택한 이유는 빠른 속도,단순한 구조, 비선형적인 개발,완벽한 분산,대형 프로젝트에서도 유용하기 때문이다.
  
* git과 GitHub은 어떻게 다를까요?
git과 Github와 차이점은 Local git/Remote git, 터미널을 사용하는git/UI를 지원하는 Github, PR(Pull Request) 기능을 지원하는 Github
Github는 git을 서비스하지만 추가적인 여러 기능들을 지원하는 시스템이다.

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?


* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

## Quest
* GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.
clone(현재 자신이 있는 디렉토리 하위에 그 repository가 저장. 클라우드에 저장된 repository를 로컬에 저장하는 것.)
add(repository(Working directory)에 변경된 내용을 Staging Area에 저장한다.)
commit(Staging Area에 있는 내용들을 local repository에 전달한다.)
push(local repository의 파일을 remote repository에 저장한다.)
pull(원격 repository에 있는 내용을 로컬 repository로 다운로드 하는 명령어.)
branch(브랜치 생성, 수정, 삭제를 하는 명령어)
stash(아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어이다. 이를 통해 아직 완료하지 않은 일을 commit하지 않고 나중에 다시 꺼내와 마무리할 수 있다.)

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

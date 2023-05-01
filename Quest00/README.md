# Quest 00. 형상관리 시스템

## Introduction

- git은 2021년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics

- git
  - `git clone`, `git add`, `git commit`, `git push`, `git pull`, `git branch`, `git stash` 명령
  - `.git` 폴더
- GitHub

## Resources

- [Resources to learn Git](https://try.github.io)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=ko)
- [Inside Git: .Git directory](https://githowto.com/git_internals_git_directory)

## Checklist

- 형상관리 시스템은 왜 나오게 되었을까요?

  어떠한 문서나 파일이 변경된 경우, 변경된 내용과 그 원인을 기록하였다가 나중에 필요한 경우 찾아볼 수 있도록 하여 관리하기위해서,소프트웨어 개발에서는 단순 파일 변경내역을 관리할 뿐만 아니라 소프트웨어 개발에서 발생할 수 있는 다양한 결과물(요구사항 정의서, 설계 문서, 코드 등등)에 대해 형상을 만들고 이를 체계적으로 관리하고자 나오게 되었다.

- git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?

  git 은 분산형 버전관리 시스템으로 Repository 의 완전한 복사본을 로컬에 저장 가능하다. 로컬에서 모든 히스토리를 기록하여 처리속도가 빠르지만 대용량 코드 관리에 부적절하다.
  분산형 형상관리 시스템 : 각 개발자가 중앙 서버에 접근하지 않고 코드작업을 할수있다. 각 개발자의 독립적으로 작업한 후 변경사항을 병합/거절

- git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?

  많은 개발자들이 사용하던 사유소스관리 시스템(SCM)인 비트키퍼의 자유이용이 제한되면서 리누스 토르발스는 비트키퍼와 같은 자신만의 분산 시스템을 원했으나 당시 사용가능한 자유시스템중 그를 만족시키는 것이 없어 개발 (다른 형상관리 시스템도 이 이유로 개발된 것이 많다)

- git과 GitHub은 어떻게 다를까요?

  git은 버전관리 툴, github은 git을 이용한 서비스라고 생각하면 될 것 같다. Github에서 제공하는 서비스를 활용하여 여러사람들이 하나의 저장소를 가지고 보다 쉽게 협업할 수 있다.

- git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

  git clone: 원격 저장소의 데이터를 카피해오는 행위이며 이 행위를 clone이라고 한다.
  git add: commit을 하기전에 변경된 사항들을 추가해나가는 행위. commit을 하게되면 staging area에 있는 변경사항들에 대해서 기록을 남기게 되는데 이때 git add 명령어를 통해 staging area에 변경사항들을 올릴 수 있다.

  git commit: 로컬 저장소에 staged된 변경사항들에 대하여 변경을 확정짓고 기록을 하는 행위. git commit을 통해 변경된 내용들에 대하여 새롭게 기록을 남긴다. 일종의 flag를 남긴다고 생각하면 될 것 같고 나중에 commit된 기록들 중 데이터를 백업하거나 해당 commit의 변경사항을 보거나 할 수 있다. git에서 사용하는 가장 기본적인 원자 데이터 단위이다.

  git push: 로컬 저장소에 남긴 기록들의 히스토리를 원격 저장소에 적용하는 행위 commit을 통해 내 로컬 저장소에 남은 기록들을 원격 저장소에 보내는 행위이다.

  git pull: 원격저장소의 변경사항들을 로컬 저장소로 가져와 merge하는 행위 pull = (변경사항을 가져오는 fetch) + (가져온 변경사항을 적용하는 merge)

  git branch: 깃에서는 작업 트리를 관리할 수 있는데 이 작업트리를 다룰 수 있는 명령어이다.

  git stash: 현재 작업중인 변경사항을 임시 공간에 저장해두기 위한 명령어 현재 브랜치에서 발생한 변경사항들을 커밋해주지 않으면 브랜치 변경이 불가능한데 현재 변경사항을 커밋하고 싶진 않지만 브랜치는 변경하고 싶을 때 stash명령어를 통해 풀어나갈 수 있다.

- git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?

  git은 히스토리를 4개의 object로 관리한다.( .git 폴더에 object 폴더안에 생성된 파일 확인 가능)

  1. blob : git add 시 생성, 파일내용이 들어있다.
  2. tree : git commit 할때 생성 타입과 객체명 파일명이 기록된다.
  3. commit : git commit 할때 생성, tree 객체명, 부모 commit 객체명, author, committer, message가 기록된다.
  4. tag : git tag 시 생성, commit 객체명, tag이름, tagger, message가 기록된다.

  - Commit : '작업 트리'에 있는 변경내용을 바로 저장소에 기록하는 것이 아니라 그사이 '인덱스'에 파일 상태를 기록
  - Head : 마지막 커밋 스냅샷 다음 커밋의 부모 커밋을 말한다.
  - Branch : 코드 수정시 원래 코드와 상관없이 독립적으로 개발을 진행할때 원래 코드에서 새로운 버전을 생성한것을 branch라고 한다.
  - Tag : 커밋을 참조하기 쉽도록 알기 쉬운 이름을 붙이는 것. 한 번 붙인 태그는 브랜치 처럼 이동하지 않고 고정됨
    일반 태그 (Lightweight) : 이름만 붙일 수 있음
    주석태그 (Annotated tag) : 이름, 태그에대한 설명, 서명, 태그를 만든 사람의 이름, 이메일, 만든 날짜 정보도 기록 가능"""

  - 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

    git reset --hard <돌아갈 commit>
    git push -f
    reset 사용하여 되돌아갈 commit으로 이동하여 강제로 원격 브랜치에 push
    git log --oneline //커밋기록 확인
    git revert <취소할 커밋> // 커밋을 취소
    git commit -m "revert message"
    push
    revert 사용하여 commit을 취소

## Quest

- GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
- Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  - 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
- 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
- `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced

- Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
- 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

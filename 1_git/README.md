# Lab #1- Hello, git

## Introduction
* git은 2016년 현재 개발 생태계에서 가장 각광받고 있는 버전 관리 시스템입니다. 이번 퀘스트를 통해 git의 기초적인 사용법을 알아볼 예정입니다.

## Topics
* git
  * `git clone`
  * `git add`
  * `git commit`
  * `git push`
  * `git pull`
  * `git branch`
* GitHub

## Resources
* [git, 분산 버전 관리 시스템](http://www.yes24.com/24/goods/3676100?scode=032&OzSrank=1), 인사이트
* [GitHub 사용 설명서](http://www.yes24.com/24/Goods/17638082?Acode=101), 교학사
* https://try.github.io
* http://pcottle.github.io/learnGitBranching

## Checklist
* 버전 관리 시스템은 왜 필요한가요?
* git 외의 버전관리 시스템에는 무엇이 있나요? git은 그 시스템과 어떤 점이 다르며, 어떤 장점을 가지고 있나요?
* git의 `clone`/`add`/`commit`/`push`/`pull`/`branch` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

## Quest
* github에 가입한 뒤, [본 과정의 github 저장소](https://github.com/TeamLab/Gachon_CS50_Web_Programming)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둔다.
* 본 인의 컴퓨터에 git을 설치합니다 (From [git](https://git-scm.com/)
* 윈도우즈의 경우 C 또는 D 드라이브, 리눅스나 Mac은 홈디렉토리(~/) 아래에 `workspace` 폴더를 생성한다.
* Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, `workspace`로 이동하여 복사한 저장소를 clone한다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장함
* `clone`한 디렉토리로 이동 후 `sandbox` - `git_lab` 폴더로 이동하여, 자신의 영문이름으로 디렉토리를 생성한다.
* 해당 디렉토리에 5번 이상의 commit을 포함하여 다양한 작업을 실행한다.
* `clone`/`add`/`commit`/`push`/`pull`/`branch` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 `push`한다.
* `push`후 github에서 `pull request`를 실행하여, 메세지를 작성하고 결과물 pull을 요청한다.
* `pull`이 정상적으로 이뤄지면, 다시 local repository에서 [teamlab original repository](https://github.com/TeamLab/Gachon_CS50_Web_Programming)를 teamlab 이라는 이름으로 remote repository로 추가한다.
* 해당 teamlab repository에서 pull을 받아 local repository를 최신버전으로 업데이트 한다.
* 다시 자신의 github repository에 teamlab repository의 최신 내용을 업데이트 한다.

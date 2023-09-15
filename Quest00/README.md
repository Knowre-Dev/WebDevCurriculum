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
- git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  - git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
- git과 GitHub은 어떻게 다를까요?
- git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
- git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
- 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

## Quest

- GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
- Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  - 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
- 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
- `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced

- Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
- 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

# **Checklist**

## 형상관리 시스템은 왜 나오게 되었을까요?

소프트웨어 제품은 주로 눈에 보이지 않기 때문에 가시성이 있는 제품들에 비해 제작 과정의 통제나 추적이 어려운데, 이는 프로젝트의 진행에 있어서 장애물으로 작용할 수 있습니다. 이 때 형상 관리 시스템은 개발 과정의 시작부터 끝까지 변하는 모든 사항을 관리하는 작업입니다.

형상관리의 장점으로는 소스 코드의 변경 이력을 관리할 수 있어서 추적성이 높고, 배포가 편리하고, 여러 사람들과 동일한 소스 코드를 개발할 때에 생기는 에러나 각종 충돌 문제를 해결하기에 용이하다는 것입니다. 또, 필요하다면 이전 버전으로 되돌리는 등 코드를 보존하거나 재사용에 용이합니다.

## git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?

Git은 2005년 개발된 형상관리 도구로 매우 빠른 속도를 가지고 있으며 분산 관리 형식을 가지고 있습니다. 다른 형상관리 도구에 비해 다양한 기능을 지원하며 최근까지 가장 대중화되어 사용되고 있습니다. 처음 사용하는 사람 입장에서는 마크다운 문법, 터미널 사용 등이 낯설 수 있지만 로컬 관리와 중앙 관리가 모두 가능해서 장소에 구애받지 않고 협업을 가능하게 만들어준다는 장점이 있습니다.

기존에는 하나의 중앙 서버에서 여러 클라이언트가 파일을 받아오는 방식의 **중앙 집중식 버전 관리 시스템** SVC, CVS 등을 사용했습니다. 하지만 서버 클라이언트 구조의 특성상 중앙 서버에 문제가 생기면 히스토리를 잃어버리거나 협업에 문제가 생기고 다양한 워크플로우를 구현하는 데에 한계가 있는 등의 아쉬움으로 지금은 전세계에서 Git, Mecurial과 같은 **분산형 형상 관리 시스템**을 주로 사용하고 있습니다.

**분산형 형상 관리 시스템**은 서버가 갖고 있던 모든 내용을 클라이언트에서 동일하게 구축할 수 있도록 clone이 가능하다는 장점이 있습니다. 즉, 클라이언트가 또다른 서버가 될 수 있는 것입니다. 가장 큰 장점으로는 각 개발자들이 중앙 서버에 접속하지 않은 상태에서도 코드 작업을 하는 것이 가능해졌습니다. 이런 점으로 인해 다양한 워크플로우를 구축할 수 있게 되었습니다.

## git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?

리눅스 커널 개발팀은 2002년에 소스 관리 시스템 비트키퍼를 사용하다가 저작권 이슈로 더이상 비트 키퍼를 자유롭게 사용하지 못하면서 GIT 개발을 시작했습니다. 그리고 리누스 토르발스는 빠르고 방대한 코드베이스와 개발 프로세스를 효과적으로 처리할 수 있는 시스템을 원했습니다. 또, Subversion 이나 CVS와 같은 중앙 집중식 버전 제어 시스템의 단점을 보완하기 위해 분산형 시스템 방식을 채택했습니다.

분산형 시스템을 통해 여러 개발자가 모든 작업을 중앙 서버에 의존하지 않고 저장소의 자체 로컬 복사본에서 독립적으로 동시에 작업하는 것이 가능해졌습니다. 각 개발자들은 오프라인 작업이 더 쉬워졌고 지속적인 네트워크 연결의 필요성이 줄어들고 분산된 팀 간의 협업이 향상되었습니다. 또한, Git의 분산 특성은 중앙 서버가 손상되지 않기 때문에 보안이 강화되었습니다. GIT을 사용하는 개발자는 변경 사항을 공유 저장소에 푸시하기로 결정할 때까지 다른 사람의 작업을 방해하지 않고 로컬 복사본에서 작업할 수 있습니다.

전반적으로 Git의 분산형 시스템 방식은 리눅스 커널 개발 커뮤니티의 특정 요구 사항을 해결했으며 현재까지 강력하고 확장 가능하며 효율적인 버전 제어 시스템을 제공하고 있고, 이후 소스 코드 및 협업 소프트웨어 개발을 관리하는 데 가장 인기 있고 널리 사용되는 도구 중 하나가 되었습니다.

## git과 GitHub은 어떻게 다를까요?

Git은 개발자의 컴퓨터 로컬에서 작동할 수 있는 버전 제어 시스템을 뜻하고, Github는 Git 레포지토리를 호스팅하거나 Git을 사용하는 프로젝트를 관리하는 웹 기반 플랫폼입니다.
주로 버전 제어를 위해서 Git을 사용하고, 원격 협업 및 프로젝트 관리를 위해서 Github이나 이와 비슷한 GitLab, Bitbucket과 같은 플랫폼을 사용합니다.

## git의 `clone/add/commit/push/pull/branch/stash` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

### git init

IDE에서 제작할 프로젝트를 열고 CLI에서 `git init`을 입력해서 Git 저장소를 초기화할 수 있습니다. 중요한 것은 저장소로 사용할 디렉터리로 이동해서 명령어를 사용해야 한다는 점입니다.

```bash
$ git init
```

### git clone

혼자 로컬에서 개발을 시작하는 것이 아닌 이미 초기화된 원격 저장소를 복제해와서 개발하는 경우에는 `git clone` 명령어를 사용해서 로컬 환경으로 복사할 수 있습니다.

```bash
$ git clone https://github.com/wavebeem/pkmn.help.git
```

### git add

`git add` 명령어는 다음 커밋 까지 변경되었던 기록을 남기기 위해서 사용합니다. `git add` 명령어를 사용한 다음부터 Git이 파일의 변동 사항을 추적할 수 있습니다. 하지만 `git commit` 명령어를 사용하기 전까지는 `git add` 명령어를 실행해도 깃허브나 원격 저장소에서 변경 이력에 영향을 주지 않습니다.

> **왜 add 단계와 commit 단계가 나뉘어있는걸까?**

굳이 모든 파일의 변화를 다 저장할 필요가 없기 때문입니다. 변경할 일이 딱히 없는 이미지 파일 같은 경우가 그렇습니다. 그래서 add를 통해 따로 변경 사항을 기록할 파일을 고를 수 있습니다.

이 때 고른 파일들이 머무는 곳을 스테이징 영역이라고 합니다. 그리고 커밋한 파일들이 저장되는 곳은 저장소이며 별개의 공간입니다. `git add` 명령어를 사용해서 스테이징 영역에 올릴 파일을 고르는 (=추후에 커밋할 파일을 고르는) 행위를 스테이징이라고 부릅니다.

`git add` 만 작성할 수 없고, 뒤에 부차적인 다른 명령어를 함께 사용해야 실행이 가능합니다.

로컬 디렉토리에서 원격 저장소로 연결하기 위해서는 한 번 연결하는 과정이 필요합니다. 이 때 `remote add` 명령어를 사용합니다.

```bash
$ git remote add master https://github.com/stillcorners/WebDevCurriculum
```

주로 `git add .`와 `git add *`가 자주 쓰이는데 둘 다 상위 폴더와 상위 파일을 제외한 현재의 디렉토리와 그 하위에 있는 폴더, 파일의 모든 변경 사항을 스테이징 영역으로 넘길 때 사용한다는 공통점이 있습니다.

이 둘의 차이점으로 `git add .`는 `.gitignore`에 있는 파일은 제외하고 스테이징 영역에 올린다는 특징이 있습니다. 반면에 `git add *`는 `.gitignore` 에 속한 파일도 스테이징 영역에 올리니 참고해서 사용하는 것이 좋습니다.

```bash
$ git add .
$ git add *
```

```bash
$ git add app.js // app.js 파일만 저장
$ git add blog/src // 특정 디렉토리만 저장
$ git add -A // 작업 디렉토리 내 상위, 하위 포함 모든 내용을 저장
$ git add --update // 현재 git이 추적하고 있는 파일들만 add
```

add 한 파일 내역, 파일의 변경 내역을 보려면 아래 명령어를 사용합니다.

```bash
$ git status
```

스테이징한 파일을 취소하려면 아래 명령어를 사용합니다.

```lua
git restore--staged 파일명
```

### git commit

커밋은 게임의 세이브 포인트 같은 것으로, 언제든 과거의 커밋 시점으로 되돌아갈 수 있고 나중에 파일 변경 히스토리가 궁금할 때에 커밋을 열람해서 확인할 수 있습니다. 저장하려는 파일들을 묶어서 (`git add` 명령어를 통해 스테이징 영역에 올려놓은 파일들만) `git commit` 명령어를 사용해서 저장할 수 있습니다.

커밋은 사용중인 로컬 환경에 저장되는 것으로, 아직 깃헙이나 원격 저장소에 저장 사항이 반영되지 않습니다.

한 번에 하나의 논리적인 작업을 커밋하는 것이 원칙으로, 커밋 메세지를 꼼꼼하게 잘 작성하는 것이 좋습니다.

```bash
$ git commit -m "main UI test.."
$ git commit --amend -m "수정된 메시지" // 커밋 메세지를 잘못 작성했을 때에 수정할 수 있다
```

아래 명령어를 사용하면 마지막 커밋으로 돌아갑니다.

```bash
$ checkout
```

아래 명령어를 사용해서 커밋 이력을 확인할 수 있습니다. `--graph` 옵션을 사용하면 Vim 에디터가 켜지는데, J, K 키로 위 아래 스크롤이 가능하고 Q 키로 종료할 수 있습니다.

```bash
$ git log
$ git log --all --oneline
$ git log --all --oneline --graph
```

### git push

아래 예시의 명령어를 사용하면 `git push`를 사용해서 커밋된 파일들이 ‘origin’ 이라는 이름의 저장소에서 main 브랜치에 저장이 됩니다.

**`git push` 명령어를 사용한 시점의 변경 사항은 저장 사항이 로컬 환경 뿐 아니라 깃허브, 원격 저장소에도 반영이 됩니다.** 이런 특징으로 작업 상황의 공유나 다인원 프로젝트에 용이해집니다.

한 번 `u` 옵션을 사용하면 앞으로 `git push` 만 입력해도 알아서 push가 됩니다.

```bash
git push -u "원격저장소" "현재 사용 브랜치이름"
git push -u origin main
```

### git pull

`git pull` 은 원격 저장소의 커밋을 가져온 다음에 (git fetch) 현재 내 브랜치와 다른 브랜치의 각각 다른 변경 사항, 버전을 통합해서 (git merge) 원격 저장소와 내 로컬 저장소의 상태를 동일하게 만들어주는 명령어입니다. 두 브랜치 중에서 최신 버전 여부를 판단해서 반영하며, 충돌할 경우 자동으로 병합이 이뤄지지만 충돌이 있을 경우 수동으로 해결해서 커밋하는 것이 필요합니다.

혹은 깃허브를 통해서 커밋했을 때 그 내용을 클라이언트로 내려받을 때에 사용하기도 합니다.

아래 예시처럼 사용하면 origin 저장소의 내용이 main 브랜치에 복사될 것입니다.

```bash
$ git pull origin main
$ git pull <원격 저장소 명> <branch 명>
```

### branch

여러 개발자들이 동시에 다양한 작업을 할 수 있게 만들어 주는 기능이 브랜치(Branch)입니다.

각자 독립적인 작업 영역(저장소) 안에서 마음대로 소스코드를 변경할 수 있고, 이렇게 분리된 작업 영역에서 변경된 내용은 나중에 원래의 버전과 비교해서 하나의 새로운 버전으로 만들어 낼 수 있습니다. 또, 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에 여러 작업을 동시에 진행할 수 있습니다. 필요하면 병합해서 하나의 브랜치로 만들 수 있고, 브랜치에서 각각의 기록을 남기기 때문에 문제 파악 및 해결을 하기 쉽습니다.

!https://backlog.com/git-tutorial/kr/img/post/stepup/capture_stepup1_1_1.png

아래 명령어를 통해 `testing` 라는 브랜치를 생성할 수 있습니다. 하지만 지금 작업하는 로컬 브랜치를 가리키는 ‘HEAD’ 포인터는 새로 만든 `testing` 브랜치를 가리키고 있지 않을 것입니다. `git branch` 명령은 브랜치를 만들기만 하고 브랜치를 옮기지 않기 때문입니다.

```bash
$ git branch testing
```

`git checkout` 명령으로 다른 브랜치로 이동할 수 있습니다. 아래 명령어를 입력하면 이제 ‘HEAD’ 포인터가 testing 브랜치를 가리킬 수 있습니다.

```bash
$ git checkout testing
```

### stash

A 브랜치에서 작업을 하다가, 잠시 B 브랜치로 변경해서 다른 일을 해야 하는 상황을 가정해봅시다. 또, 이 상황에서 A 브랜치의 작업을 마무리 하지 않은터라 커밋을 하기엔 좀 애매합니다.

이럴 때 처럼 마무리 하지 않은 작업을 스택에 잠시 저장할 수 있는 명령어가 `git stash` 입니다. 이를 통해 워킹 디렉토리에서 수정한 파일들만 저장할 수 있습니다.

git stash 나 git stash save 를 실행하면 스택에 새로운 stash가 만들어집니다. 이 과정을 통해 워킹 디렉토리가 깔끔해집니다. 이후에 필요에 따라 다른 브랜치로 변경할 수 있습니다.

```bash
$ git status
$ git stash save
```

여러 번 stash를 했다면 아래 명령어를 통해 저장한 stash 목록을 확인할 수 있습니다.

```bash
$ git stash list
```

아래 명령어를 통해 이전의 작업을 다시 가져올 수 있습니다.

```bash
$ git stash apply // 가장 최근의 stash를 가져와 적용한다.
$ git stash apply [stash 이름] // stash 이름(ex. stash@{2})에 해당하는 stash를 적용한다.
```

apply 옵션은 단순히 stash를 적용하는 것으로, 해당 stash는 스택에 여전히 남아있는 상태입니다. 스택에 남아 있는 stash는 아래 명령어를 사용하여 제거할 수 있습니다.

```bash
$ git stash drop // 가장 최근의 stash를 제거한다.
$ git stash drop [stash 이름] // stash 이름(ex. stash@{2})에 해당하는 stash를 제거한다.
```

## git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?

Git의 핵심은 key, value로 짝지어진 오브젝트로 이뤄진 데이터 저장소 입니다. 어떤 형식의 데이터라도 집어넣을 수 있고 해당 Key로 언제든지 데이터를 다시 가져올 수 있습니다. Git은 내부적으로 `commit, tree, blob, tag` 4가지 오브젝트 타입을 관리하며, 이들은 `.git/objects`에 개별적인 파일들로 존재합니다.ㅂ

각 1개 씩의 `commit, tree, blob, tag` 은 각각 1개의 파일입니다. 오브젝트가 담긴 파일의 제목은 git이 오브젝트 컨텐츠의 내용을 참고하여 생성하는 40자리 문자열으로 이뤄져 있습니다. 각 파일들을 확인할 때에는 `git cat-file –p 객체명` 명령어를 사용합니다.

https://t1.daumcdn.net/cfile/tistory/2122553459329CA413

test 디렉터리에서 `git init` → hello.txt 생성 후 ‘안녕 나는 공부중이야’ 작성 후 저장 → `git add` → `git commit` → `git tag` 과정을 거쳤습니다.

이 과정에서 생성된 오브젝트는 아래와 같습니다.

https://t1.daumcdn.net/cfile/tistory/2423313959329CDD20

`git add` 과정에서 `**blob**`이 생성된다. hello.txt의 내용이 들어 있습니다.

https://t1.daumcdn.net/cfile/tistory/26762C3959329CDD0E

`git commit` 과정에서 `**tree**`가 생성됩니다. 타입과 객체명, 파일명이 기록됩니다.

https://t1.daumcdn.net/cfile/tistory/2518F33959329CDE0C

`git commit` 과정에서 `**commit**`이 생성됩니다. tree의 객체명, 부모 commit 객체명, author, committer, message가 기록되었습니다. 이는 커밋 과정에서 git config에 있는 name과 email이 함께 기록되는 것입니다.

https://t1.daumcdn.net/cfile/tistory/2514613959329CDF23

`git tag` 과정에서 `**tag**`가 생성됩니다. commit 객체명, tag이름, tagger, message가 기록되었습니다.

https://t1.daumcdn.net/cfile/tistory/270EEF3959329CDF29

## 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?

`git push`를 취소하는 방법은 아래와 같습니다.

아래 명령어를 통해 잘못된 커밋 이력을 찾습니다. 최근까지 커밋한 모든 이력을 확인할 수 있습니다.

```bash
git log --oneline
```

```bash
1932901 commit 내용
50c45c2 commit 내용
3c9f431 commit 내용
1fce73a commit 내용
468f1c5 commit 내용
b6b8e5d commit 내용
...
```

맨 위의 커밋 내역이 가장 최신의 커밋 내역입니다. 잘못된 커밋 내역의 커밋 ID를 확인하고, 돌아가고 싶은 시점의 커밋 ID를 복사합니다. 예시를 통해 `3c9f431` 커밋으로 돌아간다고 가정해봅니다.

돌아가고 싶은 시점의 커밋 ID를 복사해서 아래 명령어와 같이 실행합니다. 그럼 아래 커밋 ID 이후의 커밋이 삭제됩니다.

`--hard` 옵션은 돌아가고 싶은 시점 이후의 커밋 내역을 모두 지우는 옵션입니다. 과거 특정 이력만 지우고 싶다면 `--soft` 옵션을 사용하면 됩니다.

```bash
git reset --hard 3c9f431
```

아래 명령어를 사용하면 `3c9f431` 시점의 커밋 내역을 github 원격 저장소의 master 브랜치에 push 할 수 있습니다.

```bash
 git push origin master
```

## Quest

- [x] GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
- [x] Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  - 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
- [x] 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다.
- [x] `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다.

## Advanced

- Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
- 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

# 레퍼런스

https://www.lainyzine.com/ko/article/git-init-how-to-initialize-git-repository/

https://backlog.com/git-tutorial/kr/stepup/stepup3_1.html

https://kotlinworld.com/288

https://backlog.com/git-tutorial/kr/stepup/stepup1_1.html

https://gmlwjd9405.github.io/2018/05/18/git-stash.html

https://sjh836.tistory.com/74

[https://git-scm.com/book/ko/v2/Git의-내부-Git-개체](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EB%82%B4%EB%B6%80-Git-%EA%B0%9C%EC%B2%B4)

https://panython.tistory.com/24

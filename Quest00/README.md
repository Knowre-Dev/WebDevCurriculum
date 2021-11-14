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
 - 

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
   
 - commit
  - **프로젝트의 스냅샷**의 기록
  - 가능한 커밋을 가볍게 유지하기 위해 커밋할 때마다 디렉토리 전체를 복사하진 않음, 매우 가볍고 커밋 사이 전환도 매우 빠름
  - 각 커밋은 이전 버전과 다음 버전의 변경내역("delta")을 저장한다.
  - 그래서 대부분의 커밋이 그 커밋 위의 부모 커밋을 가리킨다.


 - clone
  - 저장소를 복제
  - 저장소를 clone 하려면 모든 변경분(delta)을 풀어야 하는데, 이 때문에 명령행 결과로 resoloving deltas 라는 문구를 볼 수 있다

  
 - branch
  - 특정 커밋에 대한 참조(reference)
  - 많이 만들어도 메모리나 디스크에 부담이 없다.
  - 하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역


 - merge
  - 두개의 별도의 브랜치를 합치는 방법 중 하나
  - 한 부모의 모든 작업내역과 나머지 부모의 모든 작업, 그리고 그 두 부모의 모든 부모들의 작업내역을 포함함


 - rebase
  - 두개의 별도의 브랜치를 합치는 방법 중 하나
  - 커밋들을 모아서 복사한 뒤 다른 곳에 떨어뜨림
  - rebase를 하면 커밋 흐름을 한 줄로 만들어 보기 좋게 만들 수 있다.


 - HEAD
  - 현재 체크아웃된 커밋을 가리킴(현재 작업중인 커밋)
  - 항상 working tree의 가장 최근 커밋을 가리킴
  - 일반적으로 HEAD는 브랜치의 이름을 가리킨다. 커밋을 하면 브랜치의 상태가 바뀌고 이 변경은 HEAD를 통해 확인할 수 있다
  - HEAD 분리 : git chekcout C1

 - Git에서 작업 되돌리기
  - git reset : 예전 커밋을 가리키도록 이동(히스토리를 고쳐씀, 마치 애초에 커밋하지 않은 것처럼)
  - ex) git reset HEAD~1
  - git revert : 변경분을 되돌리고, 이 되돌린 내용을 다른 사람들과 공유하기 위해서 사용
  - 사실상 새로운 커밋이 생기고 변경내용이 커밋에 기록된다.(기존 커밋과 반대되는 내용)
  - revert를 하면 다른 사람들에게도 변경 내역을 push 할 수 있음
  - ex) git revert HEAD


* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?


++ 추가)
git의 상대 참조(Relative Ref)
- ^ : 한 번에 한 커밋 위로 움직임
- ~<num> : 한 번에 여러 커밋 위로 올라감
 ex) 강제로 main 브랜치를 HEAD에서 3번 뒤로 옮기기 : git branch -f main HEAD~3
   main 위에 있는 부모를 체크아웃 : git checkout main^
 
 절대 경로 ex) git branch -f main (경로)


## Quest
* **[O]** GitHub에 가입한 뒤, [이 커리큘럼의 GitHub 저장소](https://github.com/KnowRe-Dev/WebDevCurriculum)의 우상단의 Fork 버튼을 눌러 자신의 저장소에 복사해 둡니다.
* **[O]** Windows의 경우 같이 설치된 git shell을, MacOSX의 경우 터미널을 실행시켜 커맨드라인에 들어간 뒤, 명령어를 이용하여 복사한 저장소를 clone합니다.
  * 앞으로의 git 작업은 되도록 커맨드라인을 통해 하는 것을 권장합니다.
* **[ ]** 이 문서가 있는 폴더 바로 밑에 있는 sandbox 폴더에 파일을 추가한 후 커밋해 보기도 하고, 파일을 삭제해 보기도 하고, 수정해 보기도 하면서 각각의 단계에서 커밋했을 때 어떤 것들이 저장되는지를 확인합니다. 
* **[ ]** `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령을 충분히 익혔다고 생각되면, 자신의 저장소에 이력을 push합니다. 

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?

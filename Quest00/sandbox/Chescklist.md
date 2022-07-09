형상관리 시스템은 왜 나오게 되었을까요?
> 개발 중 발생하는 산출물들이 변경됨으로써 변해가는 소프트웨어 형상을
체계적으로 관리가호 유지하기 위해서

git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
>git은 분산형 형상관리 시스템으로 빠른 속도와 오프라인 작업이 가능하다는 특징이 있다.
분산형 형상관리 시스템이란 개인이 작업한 이후 변경사항을 병합하는 형식의 시스템이다.

git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
> 비트키퍼의 자유이용이 제한되자 리누스 토르발스가 직접 버전 관리 시스템을 만들어야 겠다고 마음먹고 Git을 만들게 되었다.

git과 GitHub은 어떻게 다를까요?
> Git은 버전관리 프로그램이고, GitHub는 Git을 웹으로 이용 할 수 있게 만든 원격 저장소이다.

git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
>* clone : 저장소 복제
>* add : 파일을 스테이징
>* commit : 스테이징 된 파일을 히스토리에 기록
>* push : 로컬의 히스토리를 원격에 업로드
>* pull : 원격의 히스토리를 로컬에 가져오기
>* branch : 프로젝트를 하나 이상의 모습으로 관리하기 위해 다른 가지를 만듦
>* stash : 마무리 하지 않은 작업을 스택에 잠시 저장

git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
>* git은 히스토리를 4개의 object로 관리한다.
>   * bold : git add할 때 생성된다. 파일 내용이 들어있다
>   * tree : git commit할 때 생성된다. 타입과 객체명, 파일명이 기록된다.
>   * commit : git commit할 때 생성된다. tree객체명, 부모commit객체명, author, committer, message를 기록한다.
>   * tag : git tag할 때 생성된다. commit 객체명, tag이름, tagger, message가 기록된다.
>* Commit : 
>* Head : 해당 브랜치의 마지막 커밋을 의미
>* Branch : 원래 코드에서 새로운 버전을 생성한 것
>* Tag : 커밋을 참조히기 쉽도록 이름을 붙이는 것, 한 번 붙인 태그는 브랜치처럼 위치가 이동하지 않고 고정된다.
>   * 일반 태그(Lightweight tag)
>       * 이름만 붙일 수 있다.
>   * 주석 태그(Annotated tag)
>       * 이름을 붙일 수 있다.
>       * 태그에 대한 설명 포함 가능
>       * 서명을 넣을 수 있다.
>       * 태그를 만든 사람의 이름, 이메일과 만든 날짜 정보도 포함 가능

리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
> git reset --hard <돌아갈 commit><br>
git push -f<br>
reset 사용하여 되돌아갈 commit으로 이동하여 강제로 원격 브랜치에 push

>git log --oneline //커밋기록 확인<br>
git revert <취소할 커밋> // 커밋을 취소<br>
git commit -m "revert message" <br>
push<br>
revert 사용하여 commit을 취소
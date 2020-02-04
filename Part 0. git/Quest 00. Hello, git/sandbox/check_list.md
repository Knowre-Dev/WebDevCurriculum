## Check list

1. 버전 관리 시스템은 왜 필요한가요?

   버전 관리(Source Code 파일의 버전)는 이전의 데이터를 백업해둔다는 의미에서(이외에도 많이 있지만), 프로젝트를 진행하는데에 있어서 필수적인 요소이다.

   가장 쉬운 버전 관리는 파일로 각각의 버전을 관리하는 것이다. 하지만 그렇게 되면 프로젝트가 진행되고, 파일의 갯수가 많아지면서 여러가지 문제들이 발생할 여지가 있다.

   Git은 이러한 버전 관리를 제공해주는 시스템이다. 그리고 Github은 Git을 통해 저장하는 저장소이다. Git을 사용하게 되면, 코드 변경 사항의 내역을 기록 및 관리할 수 있다. 그리고 필요할 경우, 이전 상태로 Rollback할 수도 있다.

   Branch를 통해 여러 사람이 단일 프로젝트를 할 때도 서로 방해 받지 않고 개발을 할 수 있기 때문에, 팀 단위로 개발할 때 체계적이고 효과적으로 협업을 할 수 있다.

   _기초적인 흐름은 이러하다 Modified => Staged(Git added) => Committed(History에 저장)_

2. git 외의 버전관리 시스템에는 무엇이 있나요? git은 그 시스템과 어떤 점이 다르며, 어떤 장점을 가지고 있나요?

   git 이외의 버전관리 시스템으로는 bitbucket과 같은 것들이 있다. git은 버전관리 시스템 중 가장 규모가 큰 편이다.

   그리고 git은 무료 Private Repo를 지원하지 않는 반면, Bitbucket은 무료로 Private Repo를 지원한다(Private Collaborator는 비용을 지불해야 한다).

   git은 사용자가 굉장히 많고, 기본적으로 Repository의 갯수에 제한이 없다보니 Open Source에 대한 Online Community가 장점이다.

3. git의 `clone`/`add`/`commit`/`push`/`pull`/`branch`/`stash` 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?

   git init: local에 새로운 repository를 만든다.
   git clone: local에 repository를 복사한다.
   git add: 상태에 1개 혹은 그 이상의 파일을 추가한다.
   git commit: 상태를 commit한다. repository에 접근하기 바로 전 단계
   git stash: 임시 저장 후, 이전 상태로 돌아간다.
   git push { branch }: branch에 commit한 사항을 업로드 한다.
   git status: 현재의 상태
   git remote add origin: local에 있는 repository를 서버에 연결할 때 사용한다.
   git branch: 해당 repository의 branch 리스트를 보여준다.
   git checkout { branchname }: 해당 branch로 이동한다.
   git log: commit한 기록들을 보여준다.

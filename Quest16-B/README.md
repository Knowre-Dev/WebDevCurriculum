# Quest 16-B. 컨테이너

## Introduction

- 이번 퀘스트에서는 컨테이너 기술과 그 활용에 대해 알아보겠습니다.

## Topics

- 컨테이너 기술
- Docker
- docker-compose

## Resources

- [#LearnDocker](https://www.docker.com/101-tutorial)
- [Docker Tutorial for Beginners](https://docker-curriculum.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Checklist

- 컨테이너는 어떻게 동작하나요? 다른 배포판을 사용할 수 있게 하는 원리가 무엇일까요?

> Docker에서 동작할 프로그램을 이미지화(추상화)하면, OS Kernel을 추상화한 분리된 프로세스(Container)에서 해당 프로그램을 동작한다.

> Container 런타임 환경을 제공하는 OS(리눅스나 WSL이 설치된 윈도우 등)가 있다면, 어떤 장치에서든 Docker 및 해당 추상화된 프로그램을 실행할 수 있다.

> Docker의 Container는 Host OS에 연결하는 것이 아니라, 해당 시스템의 프로세스를 분리하고 이 환경에서 실행되므로 OS와 상관없이 실행이 가능하다.

> 다만 플랫폼 간 차이는 있기 때문에, 리눅스에서 만든 실행파일을 윈도우에서 실행할 수는 없다. 그 반대도 마찬가지이다.

- 도커 컨테이너에 호스트의 파일시스템이나 네트워크 포트를 연결하려면 어떻게 해야 할까요?

> 컨테이너 생성
> docker run -i -t docker_image_name

> host 연결
> docker run -d -p OS_port:container_server_port

- 도커 컨테이너에서 런타임에 환경변수를 주입하려면 어떻게 해야 할까요?

> Container를 생성할때 환경변수를 넣어주거나, 별도의 파일을 담아 설정해줄 수 있다.

> option
> -e : Runtime할 때 환경변수 직접 지정
> --env-file : 환경변수가 담겨져 있는 파일로 환경변수 등록

> docker run -e env_variable=value_variable

- 도커 컨테이너의 stdout 로그를 보려면 어떻게 해야 할까요?

> streaming
> container의 스트리밍을 지속 감지한다.
> docker logs --follow container

> tail
> docker logs --tail {the_number_of_stdout_lines} container

- 실행중인 도커 컨테이너에 들어가 bash 등의 쉘을 실행하고 로그 등을 보려면 어떻게 해야 할까요?

> attach

> container의 root process에 console 접근
> docker attach container_ID
> exec

> container의 특정 환경을 통한 접속(접근)
> docker exec -it container_ID /bin/bash(script_environment)

## Quest

- 도커를 설치하고 그 사용법을 익혀 보세요.
- 메모장 시스템 서버를 컨테이너 기반으로 띄울 수 있게 수정해 보세요. (docker-compose는 사용하지 않습니다)
- 컨테이너를 Docker Hub에 올리고, 발급받은 학습용 AWS 계정에 EC2 인스턴스를 생성한 뒤, 해당 컨테이너를 띄워서 서비스 해 보세요.
- docker-compose를 사용하여, 이미지 빌드와 서버 업/다운을 쉽게 할 수 있도록 고쳐 보세요.

## Advanced

- 도커 외의 컨테이너 기술의 대안은 어떤 것이 있을까요?
- 맥이나 윈도우에서도 컨테이너 기술을 사용할 수 있는 원리는 무엇일까요?

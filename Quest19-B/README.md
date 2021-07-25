# Quest 19-B. 서버 아키텍쳐 패턴

## Introduction
* 이번 퀘스트에서는 현대적인 서버 아키텍쳐 패턴에 대해 익혀 보도록 하겠습니다.

## Topics
* Microservice Architecture
* Serverless Architecture
* AWS Lambda
* Service Mesh

## Resources
* [Jeff Bezos의 이메일](https://news.hada.io/topic?id=638)
* [마이크로서비스란?](https://www.redhat.com/ko/topics/microservices/what-are-microservices)
* [AWS Lambda](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)
* [AWS API Gateway](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html)

## Checklist
* 마이크로서비스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?
* 서버리스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?
* AWS Lambda는 어떤 서비스일까요? 이러한 서비스는 어떤 특징을 가지고, 어디에 쓰일 수 있을까요?
* API Gateway는 어떤 서비스인가요? 어떤 설정을 할 수 있을까요?
* 많은 마이크로서비스들을 복잡하게 연결할 경우 관리상에 어떤 난점이 생길 수 있을까요? 서비스 메쉬는 무엇이고 이러한 난점을 어떻게 해결하려는 시도일까요?

## Quest
* 메모장 시스템을 JWT 발급을 위한 마이크로서비스와 실제 비즈니스 로직을 처리하는 마이크로서비스로 나누어 보세요.
* JWT 토큰 발급의 역할을 하는 마이크로서비스를 AWS Lambda와 API Gateway를 이용하여 구축해 보세요.

## Advanced
* Istio는 어떤 툴일까요? 이 툴을 Kubernetes와 함께 사용하여 어떤 구조를 구현할 수 있을까요?

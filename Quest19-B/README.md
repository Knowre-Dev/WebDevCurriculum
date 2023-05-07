# Quest 19-B. 서버 아키텍쳐 패턴

## Introduction

- 이번 퀘스트에서는 현대적인 서버 아키텍쳐 패턴에 대해 익혀 보도록 하겠습니다.

## Topics

- Microservice Architecture
- Serverless Architecture
- AWS Lambda
- Service Mesh

## Resources

- [Jeff Bezos의 이메일](https://news.hada.io/topic?id=638)
- [마이크로서비스란?](https://www.redhat.com/ko/topics/microservices/what-are-microservices)
- [AWS Lambda](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)
- [AWS API Gateway](https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html)

## Checklist

- 마이크로서비스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?

> application 하나가 부모입장에서 종속된 모든 service를 제공하는 방식이 아닌, 독립적인 microservices들이 모여 하나의 체계를 이룬 개념으로 보는 것이다.

> 이때 microservices들은 독립적으로 배포할 수 있으며, 하나의 프로그램에 통합하는 build 과정을 거치지 않고도 기존 service들을 update할 수 있다.

> 모든 기능들이 한 부모요소에 종속될 경우 구조 자체는 단순하고, 전통적인 방법이기 때문에 개발환경이 익숙할 수 있다.

> 그러나 규모가 큰 환경을 유지보수를 한다면, 시간과 비용을 훨씬 더 많이 소모하거나 관리 자체가 불가능해질 수 있다.

> 마이크로서비스는 이러한 단점을 보완하기 위해 고안된 방법론이며, 대표적인 장점은 아래 3가지와 같다.

> → 변경점을 적용해야 할 부분만 반영하면 되기 때문에 유지보수가 더 수월하다.
> → 체계적으로 시스템 및 파일관리가 가능하다.
> → 유지관리가 더 잘되기 때문에, 서비스의 신뢰도가 더 좋다.

- 서버리스 아키텍쳐란 무엇일까요? 어떤 식으로 서비스를 구성할 수 있을까요? 어떤 장점을 가지고 있을까요?

> 서버(인프라)를 따로 구축하거나 관리할 필요없이 application과 service 운영에만 집중할 수 있는 설계 형태를 일컫는다.

> 개발자는 서버운영 및 관리를 별도로 하지 않고, 오직 기능개발 및 수행여부 등 개발과정에 집중할 수 있게 된다.

> 단, BaaS(백엔드플랫폼 제공 서비스)나 FaaS(기능 제공 서비스)에 의존하고 여기에 비용지불까지 해야하므로 service 플랫폼을 잘 선택해서 사용해야 한다.

> Backend as a Service.

> DB 및 Social service 등 백엔드 관련(데이터 저장 및 추출 등) 기능(API)을 제공하여, 별도의 server 개발을 하지 않고도 백엔드 구축을 할 수 있다.

> 이러한 서비스들은 정적인 용량에 대한 비용 지불이 아닌, 유동적인 사용량에 근거하여 비용을 지불한다.

> 가장 대표적인 플랫폼으로 Firebase가 있다.

- AWS Lambda는 어떤 서비스일까요? 이러한 서비스는 어떤 특징을 가지고, 어디에 쓰일 수 있을까요?

> AWS에서 제공하는 FaaS의 일종이다.

> 즉 application 및 mobile app의 백엔드를 별도 구축없이 빠르게 구현할 수 있는 서비스이다.
> [AWS Lambda 관련 자료](https://velopert.com/3546)

- API Gateway는 어떤 서비스인가요? 어떤 설정을 할 수 있을까요?

> Microservice의 경계 외부(최후방)에서 오는 API호출을 제어하고, 각 servcies에게 메시지를 보내는 서비스이다.

- 많은 마이크로서비스들을 복잡하게 연결할 경우 관리상에 어떤 난점이 생길 수 있을까요? 서비스 메쉬는 무엇이고 이러한 난점을 어떻게 해결하려는 시도일까요?

> Microservice의 경계 내부(네트워크)에서의 트래픽을 관리하는 서비스이다.
> 하나의 서비스 안에 모든 모듈과 기능이 종속되어 있다는 개념이다.
> 각각의 모듈들은 다른 역할을 하지만, 결국 서비스의 최종 배포에 초점을 맞추었기 때문에 각 모듈의 기능과 요소보다는 최종적인 결과물에 관심을 둔다.

> Microservice Architecture에 비해 배포과정이 단순할 수는 있지만, 내부적인 구조를 세세하게 유지하는 방법론이 아니어서 규모가 커지면 걷잡을 수 없이 복잡해질 수 있다.

> 또한 기본적으로 CI/CD가 불가능하기 때문에, 새로운 기술 및 규칙을 적용해야 한다면 모든 코드를 전면적으로 수정해야할 위험이 높다.

## Quest

- 메모장 시스템을 JWT 발급을 위한 마이크로서비스와 실제 비즈니스 로직을 처리하는 마이크로서비스로 나누어 보세요.
- JWT 토큰 발급의 역할을 하는 마이크로서비스를 AWS Lambda와 API Gateway를 이용하여 구축해 보세요.

## Advanced

- Istio는 어떤 툴일까요? 이 툴을 Kubernetes와 함께 사용하여 어떤 구조를 구현할 수 있을까요?

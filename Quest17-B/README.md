# Quest 17-B. 배포 파이프라인

## Introduction

- 이번 퀘스트에서는 CI/CD 파이프라인이 왜 필요한지, 어떻게 구축할 수 있는지 등에 대해 다룹니다.

## Topics

- Continuous Integration
- Continuous Delivery
- AWS Codebuild

## Resources

- [AWS: Continuous Integration](https://aws.amazon.com/ko/devops/continuous-integration/)
- [AWS: Continuous Delivery](https://aws.amazon.com/ko/devops/continuous-delivery/)
- [AWS Codebuild](https://aws.amazon.com/ko/codebuild/getting-started/)

## Checklist

- CI/CD는 무엇일까요? CI/CD 시스템을 구축하면 어떤 장점이 있을까요?

> application의 개발을 하는데 필요한 과정 중 하나로, 지속통합(여러 개발사항을 반영한 각각의 branch(자체적으로 진행한 개발)들을 하나로 통합하는 것)과 지속배포를 일컫는다.

> CI/CD와 CI/CD 자동화는 Devops를 하는데 반드시 필요한 개발방법론이다.

\*\*CI

> Continuous Integration

> 코드 변경사항, 각 개발자들이 진행한 개발내용 등이 정기적으로 빌드/테스트되어 하나의 branch(또는 통합 저장소)로 통합되어 관리하는 방식이다.

> IT 아키텍쳐 모델에서 가장 중요하게 여겨지는 MSA, 마이크로 서비스 아키텍쳐(기능과 서비스의 분리)에서 CI를 진행하면 기능의 중복 및 충돌을 방지하고, 그만큼 긴밀함을 유지할 수 있다.

> 기존 코드를 관리하는 방식(개발완료 → 품질관리)에서 벗어나, 코드통합을 지속적으로 진행하면서 품질관리를 동시에 수행한다는 개념이다.

> CI 자동화

> 다수의 개발자가 각자 branch(작업공간)에서 진행한 작업 내용은 무수히 많이 쌓여 있을 것이다.

> 이러한 작업내용들이 많이 쌓이게 된다면, 특히 이러한 작업을 한 개발자가 많은 큰 규모의 프로젝트라면 통합하는 과정이 번거롭고 힘들어진다.

> 따라서 빌드/테스트의 과정을 자동화하여 CI작업에 대한 번거로움을 최소화하고, 더 나아가 리소스 원본에 대한 충돌을 방지할 수 있다는 장점을 가질 수 있다.

\*\*CD

> Continuous Delivery & Continuous Deployment

> 지속적인 서비스 제공, 지속적인 배포.

> CI가 개발자의 변경 및 작업사항이 하나의 저장소로 통합되는 것까지 의미하였다면,

> CD는 이러한 저장소로 release하는 과정을 자동화, 더 나아가 고객이 접하는 프로덕트수준의 코드까지 운영서버에 자동으로 release한다는 개념이다.

> 보통 CD가 이루어지는 코드는 CI과정을 거쳐 신뢰도를 검증받은 상태에서 진행되므로, CI/CD는 서로 연관이 깊고 뗄 수 없는 필수충분조건이다.

> 그리고 특히 중요한 것은, 사실 CI/CD 과정 그 자체와 더불어 이를 자동화하는 것이다.

> CD의 자동화

> 배포의 자동화.

> 소프트웨어가 항상 최신버전을 유지하고, 고객대응(프로덕션)이 빠른 시간내 이루어질 수 있도록 배포과정(deploy)을 자동으로 진행한다는 의미이다.

> Devops에서 CI/CD(특히 자동화)가 중요한 이유는 기존 개발/영업/운영을 분리한 환경이 통합된 환경으로 변화하고 Devops가 실현될 수 있는 조건이 마련되기 때문이다.

- CI 시스템인 Travis CI, Jenkins, Circle CI, Github Actions, AWS Codebuild 의 차이점과 장단점은 무엇일까요?

> AWS Codebuild

> AWS에서 제공하는 툴, 완전히 managed된 build service를 제공한다.

> 컴파일, 실행, 프로덕션까지 수행해주기 때문에 AWS Codebuild를 채택하면 별도의 build server를 관리하고 모니터링할 필요가 없다.
> [AWS Code build](https://stackshare.io/aws-codebuild)

> Circle CI

> CI/CD 플랫폼을 제공하는 소프트웨어이다.

> 소프트웨어를 활용하여 CI/CD 과정을 자동화할 수 있도록 지원한다.
> [Circle CI](https://stackshare.io/circleci)

> Jenkins

> CI system에서 가장 많이 활용하는 open source - CI server이다.

> 코드의 build, test, deploy를 지원해주는 tool이다.
> [Jenkins](https://stackshare.io/jenkins)

## Quest

- AWS Codebuild를 이용하여, 특정 브랜치에 푸시를 하면 린트와 테스트를 거쳐 서버 이미지를 빌드한 뒤, 직전 퀘스트의 EC2 인스턴스에 배포되는 시스템을 만들어 보세요.

## Advanced

- 빅테크 회사들이 코드를 빌드하고 배포하는 시스템은 어떻게 설계되고 운영되고 있을까요?

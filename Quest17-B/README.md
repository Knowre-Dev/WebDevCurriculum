# Quest 17-B. 배포 파이프라인

## Introduction
* 이번 퀘스트에서는 CI/CD 파이프라인이 왜 필요한지, 어떻게 구축할 수 있는지 등에 대해 다룹니다.

## Topics
* Continuous Integration
* Continuous Delivery
* AWS Codebuild

## Resources
* [AWS: Continuous Integration](https://aws.amazon.com/ko/devops/continuous-integration/)
* [AWS: Continuous Delivery](https://aws.amazon.com/ko/devops/continuous-delivery/)
* [AWS Codebuild](https://aws.amazon.com/ko/codebuild/getting-started/)

## Checklist
* CI/CD는 무엇일까요? CI/CD 시스템을 구축하면 어떤 장점이 있을까요?
* CI 시스템인 Travis CI, Jenkins, Circle CI, Github Actions, AWS Codebuild 의 차이점과 장단점은 무엇일까요?

## Quest
* AWS Codebuild를 이용하여, 특정 브랜치에 푸시를 하면 린트와 테스트를 거쳐 서버 이미지를 빌드한 뒤, 직전 퀘스트의 EC2 인스턴스에 배포되는 시스템을 만들어 보세요.

## Advanced
* 빅테크 회사들이 코드를 빌드하고 배포하는 시스템은 어떻게 설계되고 운영되고 있을까요?

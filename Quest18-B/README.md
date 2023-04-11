# Quest 18-B. 서비스의 운영: 로깅과 모니터링

## Introduction
* 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics
* ElasticSearch
* AWS ElasticSearch Service
* Grafana

## Resources
* [ElasticSearch](https://www.elastic.co/kr/what-is/elasticsearch)
* [ElasticSearch 101](https://www.elastic.co/kr/webinars/getting-started-elasticsearch)
* [Grafana Panels](https://grafana.com/docs/grafana/latest/panels/)

## Checklist
* ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?
```
Elasticsearch는 NoSQL 데이터베이스로 분류되는 스키마가 없는 분산형 전체 텍스트 검색 및 분석 엔진입니다. 대규모 데이터를 처리하도록 설계되었으며 로깅, 모니터링, 전자 상거래 및 실시간 분석과 같은 사용 사례에 자주 사용됩니다. 다음은 Elasticsearch와 기존 관계형 데이터베이스(RDB) 간의 몇 가지 주요 차이점과 장단점입니다.

데이터 모델: Elasticsearch는 스키마가 없는 데이터베이스입니다. 즉, 미리 정의된 스키마나 테이블 없이도 데이터를 인덱싱하고 저장할 수 있습니다. 이는 데이터 구조가 미리 정의되고 적용되는 RDB에 비해 보다 동적이고 민첩한 방식으로 데이터를 저장하고 쿼리할 수 있는 유연성을 제공합니다.
검색 및 쿼리: Elasticsearch는 빠르고 효율적인 전체 텍스트 검색 및 분석을 위해 특별히 설계되었습니다. Apache Lucene 라이브러리를 기반으로 하는 강력한 검색 엔진을 사용하여 복잡한 쿼리, 스코어링 및 관련성 기반 검색 결과를 허용합니다. 반면에 RDB는 일반적으로 검색 기능이 제한되어 있으며 전체 텍스트 검색 기능을 위해 추가 도구나 플러그인이 필요할 수 있습니다.
확장성 및 배포: Elasticsearch는 분산되고 수평 확장이 가능하도록 설계되어 여러 노드 및 클러스터에서 대량의 데이터를 처리할 수 있습니다. 고가용성 및 내결함성을 위해 자동 샤딩 및 데이터 복제를 제공합니다. 반면에 RDB는 일반적으로 수직 확장이 가능하며 용량을 늘리려면 단일 서버에 더 많은 리소스를 추가해야 할 수 있습니다.
실시간 분석: Elasticsearch는 실시간 데이터 처리 및 분석에 최적화되어 있어 대규모 데이터 세트의 거의 즉각적인 검색 및 집계가 가능합니다. 따라서 로그 모니터링 및 비즈니스 인텔리전스와 같이 실시간 인사이트 및 분석이 필요한 사용 사례에 적합합니다. RDB는 대규모 실시간 데이터 분석을 처리하는 데 효율적이지 않을 수 있습니다.

Elasticsearch의 장점:

1. 확장성 및 성능: Elasticsearch는 대량의 데이터를 처리하고 빠른 검색 및 분석 기능을 제공하도록 설계되었습니다.
2. 유연성: Elasticsearch의 스키마 없는 특성으로 인해 동적이고 민첩한 데이터 저장 및 쿼리가 가능합니다.
3. 분산 및 내결함성: Elasticsearch는 고가용성 및 내결함성을 위해 자동 샤딩 및 복제를 제공합니다.
4. 실시간 분석: Elasticsearch는 실시간 데이터 처리 및 분석에 최적화되어 있어 거의 즉각적인 통찰력이 필요한 사용 사례에 적합합니다.

Elasticsearch의 단점:

1. 학습 곡선: Elasticsearch에는 고유한 쿼리 구문 및 구성 설정이 있으므로 새로운 기술을 배우고 적응해야 할 수 있습니다.
2. 데이터 일관성: Elasticsearch는 확장성과 성능을 위해 일정 수준의 데이터 일관성을 희생하므로 엄격한 데이터 일관성이 필요한 모든 사용 사례에 적합하지 않을 수 있습니다.
3. 하드웨어 요구 사항: Elasticsearch에는 CPU, 메모리 및 스토리지를 포함하여 상당한 양의 리소스가 필요하며 신중한 계획 및 프로비저닝이 필요할 수 있습니다.
4. 복잡한 설정 및 유지 관리: Elasticsearch 클러스터 설정 및 유지 관리는 복잡할 수 있으며 여러 노드 및 클러스터의 구성, 모니터링 및 관리가 필요합니다.
```
* AWS의 ElasticSearch Service는 어떤 서비스인가요? ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?
```
AWS Elasticsearch Service는 Amazon Web Services(AWS)에서 제공하는 관리형 Elasticsearch 서비스로, 클라우드에서 Elasticsearch 클러스터를 쉽게 배포, 운영 및 확장할 수 있습니다. 다음은 Elasticsearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스를 사용하는 것과 비교하여 AWS Elasticsearch Service를 사용할 때의 몇 가지 장단점입니다.

AWS Elasticsearch Service의 장점:

1. 관리형 서비스: AWS Elasticsearch Service는 완전 관리형 서비스입니다. 즉, AWS가 확장, 패치 적용, 모니터링 및 백업과 같은 운영 측면을 처리하므로 광범위한 작업 없이 애플리케이션에 Elasticsearch를 사용하는 데 집중할 수 있습니다. 운영 오버헤드.
2. AWS 에코시스템과의 통합: AWS Elasticsearch Service는 Amazon CloudWatch, AWS Identity and Access Management(IAM), Amazon VPC 및 Amazon S3와 같은 다른 AWS 서비스와 통합되어 AWS 에코시스템 내에서 원활한 통합과 향상된 기능을 제공합니다.
3. 손쉬운 배포 및 확장: AWS Elasticsearch Service는 손쉬운 배포 및 확장 옵션을 제공하므로 개별 노드를 수동으로 구성하거나 관리할 필요 없이 요구 사항에 따라 Elasticsearch 클러스터를 신속하게 프로비저닝하고 확장할 수 있습니다.
4. 고가용성 및 내결함성: AWS Elasticsearch Service는 고가용성 및 내결함성을 위해 여러 가용 영역(AZ)에서 데이터의 복제 및 샤딩을 자동으로 처리하여 하드웨어 장애 또는 장애가 발생하더라도 Elasticsearch 클러스터가 계속 액세스 가능하고 탄력적으로 유지되도록 합니다. AZ 중단.

AWS Elasticsearch Service의 단점:

1. 비용: AWS Elasticsearch Service는 유료 서비스이며 인스턴스 사용, 저장 및 데이터 전송에 대한 시간당 요금을 포함하여 관련 비용이 발생합니다. AWS Elasticsearch Service 사용 비용은 사용 패턴 및 요구 사항에 따라 자체 인프라에 Elasticsearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스를 사용하는 것보다 높을 수 있습니다.
2. 버전 제한: AWS Elasticsearch Service는 릴리스 직후 항상 최신 Elasticsearch 버전을 지원하지 않을 수 있으므로 버전 제한이 있을 수 있습니다. 이는 Elasticsearch에서 제공하는 최신 기능 및 개선 사항을 활용하는 능력에 영향을 미칠 수 있습니다.
3. 사용자 지정 제한: AWS Elasticsearch Service는 자체 설치 Elasticsearch 또는 elastic.co에서 직접 제공하는 클라우드 서비스에 비해 사용자 지정 옵션 및 구성 설정에 제한이 있을 수 있습니다. 이는 특정 요구 사항에 맞게 Elasticsearch 설정을 미세 조정하는 능력에 영향을 미칠 수 있습니다.

요약하면 AWS Elasticsearch Service는 배포, 확장 및 AWS 에코시스템과의 통합을 용이하게 하는 관리형 Elasticsearch 서비스입니다. 그러나 자체 설치 Elasticsearch 또는 elastic.co에서 직접 제공하는 클라우드 서비스에 비해 관련 비용이 발생하고 버전 지원 및 사용자 지정 옵션 측면에서 제한이 있을 수 있습니다. 요구 사항을 신중하게 평가하고 AWS Elasticsearch Service의 장단점을 다른 옵션과 비교하여 특정 사용 사례에 가장 적합한 것을 결정하는 것이 중요합니다.
```
* Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?
```
Grafana는 데이터 표시를 위한 다양한 유형의 패널을 지원하는 인기 있는 오픈 소스 데이터 시각화 및 모니터링 도구입니다. Grafana의 패널 유형은 다음과 같습니다.

1. 그래프: 그래프 패널은 라인 차트, 막대 차트, 누적 영역 차트 등의 형태로 시계열 데이터를 표시하는 데 사용됩니다. 시간 경과에 따른 수치 데이터를 시각화하는 데 적합하며 일반적으로 CPU와 같은 메트릭 모니터링에 사용됩니다. 사용량, 네트워크 트래픽 또는 센서 데이터.
2. Singlestat: singlestat 패널은 단일 값을 게이지, 스파크라인 또는 기타 그래픽 표현으로 표시하는 데 사용됩니다. 특정 메트릭의 현재 값, 총 이벤트 수 또는 서비스의 최신 상태와 같은 요약 통계 또는 집계된 값을 표시하는 데 적합합니다.
3. 표: 표 패널은 표 형식의 데이터를 그리드 형식으로 표시하는 데 사용됩니다. 로그 데이터, 이벤트 데이터 또는 기타 구조화된 데이터를 사용자 정의 가능한 열 및 정렬 옵션이 있는 표 형식으로 표시하는 데 적합합니다.
4. 텍스트: 텍스트 패널은 정적 텍스트, 마크다운 또는 HTML 콘텐츠를 표시하는 데 사용됩니다. 정적 정보, 주석 또는 설명을 대시보드에 표시하는 데 적합합니다.
5. 히트맵: 히트맵 패널은 데이터를 히트맵으로 표시하는 데 사용되며 여기서 값은 그리드의 색상으로 표시됩니다. 온도, 습도 또는 지리적 데이터에 대한 히트맵과 같은 2차원 좌표 및 색상 코드 값으로 데이터를 시각화하는 데 적합합니다.
6. 경고 목록: 경고 목록 패널은 Grafana의 경고 시스템에서 생성된 활성 경고 목록을 표시하는 데 사용됩니다. 정의된 임계값 또는 조건에 의해 트리거되는 경고를 모니터링하고 관리하는 데 적합합니다.

Grafana에서 로그를 보려면 테이블 패널이 일반적으로 적합합니다. 테이블 패널은 구조화된 로그 데이터를 사용자 정의 가능한 열 및 정렬 옵션이 있는 표 형식으로 표시할 수 있기 때문입니다. 이를 통해 사용자는 로그 데이터를 표 형식으로 쉽게 보고 분석할 수 있어 로그 분석 및 문제 해결 작업에 편리합니다.
```

## Quest
* 우리의 웹 서버가 stdout으로 적절한 로그를 남기도록 해 보세요.
* ElasticSearch Service 클러스터를 작은 사양으로 하나 만들고, 도커 컨테이너의 stdout으로 출력된 로그가 ElasticSearch로 스트리밍 되도록 해 보세요.
* Grafana를 이용해 ElasticSearch의 로그를 실시간으로 볼 수 있는 페이지를 만들어 보세요.

## Advanced
* ElasticSearch와 Grafana는 어떤 라이센스로 배포되고 있을까요? AWS와 같은 클라우드 제공자들이 이러한 오픈소스를 서비스화 하는 것을 둘러싼 논란은 어떤 논점일까요?

# Week3_Assignment\_\_Table 📝

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [프로젝트 진행 과정 📍](#2-프로젝트-진행-과정-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [협업 과정 ✍🏻](#5-협업-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크]()

[🖼 피그마 링크](https://www.figma.com/file/FiBRKXRGuUrwYbLWyiwY87/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80-%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98?node-id=0%3A1)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 3주차 6번째 기업 과제
- 주제 : 기존 출고 매핑 관리 시스템을 개선해 데이터를 보기 쉽게 구현하기
- 기간 : 2022.02.17 ~ 2022.02.19

<br />

## 2. 프로젝트 진행 과정 📍

### 기업에서 제시한 문제점

- 현재 이미지와 같이 많은 양의 정보들을 화면에 보여주고 있습니다.

  - 50% 축소 화면
  ![스크린샷 2022-02-18 오후 9 44 27](https://user-images.githubusercontent.com/98322239/154685398-d3e39070-47bd-49ed-9fe3-caccc2ec78f7.png)

  - 100% 축소 화면
  ![스크린샷 2022-02-18 오후 9 44 38](https://user-images.githubusercontent.com/98322239/154685437-cc8058df-fe47-456e-bbcc-8a713a44c0b3.png)


- 하지만 대다수의 이용자(창고 직원)가 좋지 못한 해상도의 모니터를 이용하고 있습니다.
- 이러한 화면들은 제일 뒤까지 스크롤을 해야만 볼 수 있으며, Row가 많으면 가장 아래까지 내려와 다시 스크롤을 해야 하는 번거로움이 있습니다.
- 앞쪽에 존재했던 기준이 되는 정보들을 뒷쪽에서 다시 확인하기에 어려운 점이 있습니다.

<br/>

### 문제 해결을 위한 아이디어

[초기 아이디어 ✨](https://onyx-limburger-373.notion.site/02-17-221120eece3840a6946ab355479246c7)

- 모든 데이터를 여러 해상도와 사이즈의 기기에 맞춰 보여주는건 비효율적이라고 생각했습니다.
- 또한 필요에 따라 원하는 항목만 보는 것(카테고리 설정)이 오히려 데이터를 한 눈에 파악하기 쉬울 것이라 생각했습니다.
- 예시 이미지에서는 출고 신청 정보 항목이 화면의 절반 가량을 차지하고 있으며, 공간 낭비가 있으므로 이를 숨기고 필요에 따라 열어볼 수 있도록 구현한다면 좀 더 데이터에 집중해 화면을 볼 수 있겠다는 의견이 있었습니다.
- 예시 이미지에서는 엑셀과 같이 텍스트와 표만 존재하지만, 이 중에 중요한 항목도 있을거라 생각해 그러한 항목에는 디자인 요소를 넣기로 했습니다.
- 필터 기능을 통해 원하는 항목을 빠르게 확인할 수 있으면 좋겠다고 생각했습니다.
- 원하는 데이터를 좀 더 자세히 보고 싶을 때, 그 항목을 클릭하면 모달과 함께 모든 데이터를 볼 수 있도록 구현하면 좋겠다고 생각했습니다.

<br/>

### 아이디어 구현 내용

- 아래 이미지와 같이 구현했습니다.
- 레이아웃은 데스크톱, 태블릿 두 기기를 기준으로 제작하였습니다.

![ㅁㅁㅁ](https://user-images.githubusercontent.com/98322239/154719602-97c50fcb-6cbe-444b-97bc-afbb005302e6.jpg)


<br />

## 3. 프로젝트 구조 🌲

```bash
server
src
├── API
├── Assets
├── Components
│   ├── Common
│   │    ├── NavigationBar
│   │    └── SubmitButton
│   ├── Footer
│   ├── SettingCategory
│   └── Table
├── Utils
│   ├── Constants
│   ├── Hooks
│   │    └── useToggle
│   ├── Interfaces
│   └── Styles
│        └── GlobalStyles
├── App.tsx
└── index.tsx

```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                               |
| ------------------------------------------ | --------------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 네비게이션바, 출고 신청 정보, 버튼 구현, 테이블 디테일 수정, 문서 작성 |
| [정인권](https://github.com/developjik)    | 초기 세팅, 카테고리 설정 기능, 테이블 클릭시 전체 데이터 모달 기능 구현  |
| [현다솜](https://github.com/som-syom)      | Table 제작, Table 데이터 가공 로직 구현, 반응형 스타일 적용, 배포  |

<br/>

## 5. 협업 과정 ✍🏻

#### [1] 커밋 컨벤션은 다음과 같이 정했습니다 ✨

| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 🚑️ chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/PreOnBoarding-Team17/Week3_Table/issues/2)서 확인해보실 수 있습니다!

<br/>

#### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

[풀리퀘스트 링크](https://github.com/PreOnBoarding-Team17/Week3_Table/pulls?q=is%3Apr+is%3Aclosed)

![스크린샷 2022-02-19 오전 1 17 10](https://user-images.githubusercontent.com/98322239/154720831-a4260ddb-571e-4b95-bb62-551025f69923.png)

<br/>

#### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

[이슈 링크](https://github.com/PreOnBoarding-Team17/Week3_Table/issues)

![스크린샷 2022-02-19 오전 1 17 28](https://user-images.githubusercontent.com/98322239/154720895-817caec5-2b0d-4c8e-ab85-92fc8b0608e2.png)

<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
git clone https://github.com/PreOnBoarding-Team17/Week3_Table.git
```

2. 프로젝트 패키지 설치

```plaintext
yarn install
```

3. 프로젝트 실행

```plaintext
concurrently를 적용해 JSON-Server와 Client Server가 동시에 실행됩니다.
yarn dev
```

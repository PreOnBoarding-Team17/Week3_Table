# Week2_Assignment\_\_Dashboard 📝

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 기능 📍](#2-구현-기능-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://dashboard-17seoul.herokuapp.com/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 2주차 3번째 기업 과제
- 주제 : 필터링 기능을 갖춘 대시보드 제작
- 기간 : 2022.02.07 ~ 2022.02.09

<br />

## 2. 구현 기능 📍

```plaintext
💡 본 기능은 기업에서 제공한 Figma 템플릿에 기반하여 구현했습니다.
```

#### 네비게이션바

- [x] 반응형 구현(화면 크기에 따라 데스크톱, 모바일 버전 변화)
- [x] 모바일 버전에서 메뉴 아이콘 클릭시 좌측에서 메뉴바 생성
- [x] 메뉴바를 제외한 배경에 #000000 50% 어둡게 적용
- [x] 배경 클릭시 메뉴바 닫히는 기능

#### 필터링

- [x] '가공 방식', '재료' 필터 선택 시 해당 조건에 맞는 카드 노출
- [x] 필터별 중복 선택 시 해당 조건을 모두 갖춘 카드만 노출
- [x] 필터 Hover 시 보더 컬러 변경
- [x] 필터 선택 시 '필터링 리셋' 버튼 생성
- [x] 필터링 리셋 버튼 클릭 시 선택한 필터 초기화
- [x] 필터 선택 시 필터 박스의 스타일 및 개수 표시
- [x] 조건에 맞는 카드가 없을 시 데이터가 없음을 나타내는 화면 노출

#### 견적 요청 카드

- [x] 각 카드에 API로 받아온 정보 생성
- [x] 요청 내역, 채팅하기 버튼
- [x] 카드 Hover 시 보더 컬러 변경

<br />

## 3. 프로젝트 구조 🌲

```bash
src
├── API
├── Assets
├── Components
│   ├── Common
│   │    ├── Card
│   │    ├── Filter
│   │    └── Toggle
│   ├── Dashboard
│   │    ├── FilterMenu
│   │    └── index.tsx
│   └── NavigationBar
│        ├── DesktopBar
│        ├── MobileBar
│        ├── Modal
│        └── index.tsx
├── Utils
│   ├── Constants
│   ├── Interface
│   └── Styles
│        ├── _mixins.scss
│        ├── _reset.scss
│        └── _variables.scss
├── App.scss
├── App.tsx
└── index.tsx
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                                     |
| ------------------------------------------ | ------------------------------------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 환경 설정, 반응형 네비게이션바 구현, 토글 및 필터링 로직 구현 |
| [정인권](https://github.com/developjik)    | 반응형 대시보드, 카드 레이아웃 구현, 배포                     |
| [현다솜](https://github.com/som-syom)      | 필터링 로직 및 필터 레이아웃 구현                             |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

#### [1] 커밋 컨벤션은 다음과 같이 정했습니다 ✨

![스크린샷 2022-02-09 오전 2 30 03](https://user-images.githubusercontent.com/79933417/153044688-8ad56c3c-e80e-4596-b1af-22dabcd47b4c.png)

#### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

![스크린샷 2022-02-09 오전 2 30 57](https://user-images.githubusercontent.com/79933417/153044812-cad598a7-82c7-44d0-a0f3-6fb6a121ceba.png)

#### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

![스크린샷 2022-02-09 오전 2 31 30](https://user-images.githubusercontent.com/79933417/153045481-ce093685-87f0-4497-b5fe-0516103a66e1.png)

<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
git clone https://github.com/PreOnBoarding-Team17/Week2_Dashboard.git
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

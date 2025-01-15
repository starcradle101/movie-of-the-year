# MOTY: 올해의 영화

MOTY(모티)는 나만의 올해의 영화를 선택하고 한줄평을 남겨, 친구들에게 공유할 수 있는 웹 서비스입니다.

## 🚀 주요 기능

- 영화 검색 및 선택: TMDB API를 활용한 영화 검색 기능
- 사용자 이름 설정 기능
- 카카오톡 공유, URL 복사
- 상태 유지: URL 쿼리스트링을 통한 상태 관리

## 🛠 기술 스택

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint, Prettier
- **API**: TMDB API

## 🏗 프로젝트 구조

```
movie-of-the-year
├─ public
│  ├─ fonts
│  └─ images
└─ src
   ├─ api
   ├─ assets
   │  └─ icons
   ├─ components
   │  ├─ common
   │  ├─ layout
   │  ├─ movie
   │  │  └─ movieresult
   │  └─ search
   ├─ constants
   ├─ hooks
   ├─ pages
   │  ├─ home
   │  ├─ result
   │  ├─ search
   │  └─ user
   ├─ types
   └─ utils
```

## 📋 페이지 구성

- **메인 페이지 (/)**: 서비스 소개 및 시작하기
- **사용자 정보 페이지 (/user)**: 이름 입력
- **영화 검색 페이지 (/search)**: 영화 검색 및 선택
- **결과 페이지 (/result)**: 선택한 영화 정보 및 공유하기

## ⚙️ 주요 기능 설명

### 영화 검색
- TMDB API를 활용한 영화 검색
- 검색 결과에서 영화 선택 및 한줄평 추가 가능

### 상태 관리
- URL 쿼리스트링을 통한 사용자 정보 및 선택한 영화 정보 저장
- 페이지 새로고침 시에도 상태 유지

### 공유 기능
- 카카오톡 공유하기
- URL 복사하기

## 🤝 기여하기

1. 이슈 생성
2. 브랜치 생성 (`feature/기능명`)
3. 변경사항 커밋
4. Pull Request 생성

## 📝 라이선스

MIT License

## 👏 레퍼런스

- TMDB API
- Kakao Developers
- 토스 머니그라피 픽셀 폰트

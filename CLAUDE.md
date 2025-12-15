# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

넥스트코어 테크놀로지의 회사 소개 웹사이트입니다. React + Vite 기반의 단일 페이지 애플리케이션으로, 다양한 Nextcare 솔루션(M, E, S, AI, IoT)과 회사 정보를 소개합니다.

## 개발 명령어

```bash
# 개발 서버 실행 (Vite dev server with HMR)
npm run dev

# 프로덕션 빌드
npm run build

# 린트 실행
npm run lint

# 빌드 결과 미리보기
npm run preview
```

## 프로젝트 구조 및 아키텍처

### 라우팅 구조

앱의 모든 라우트는 `src/App.jsx`에 정의되어 있습니다. 주요 라우트 패턴:

- `/` - 메인 페이지
- `/solutions/nextcare-{m|e|s|ai|iot}` - 각 솔루션 메인 페이지
- `/solutions/nextcare-{m|e|s|ai|iot}/features` - 도입효과 및 주요기능 (M, E, S만 해당)
- `/solutions/nextcare-{m|e|s|ai|iot}/reference` - 구축 레퍼런스
- `/insight/videos` - 레퍼런스 영상

**참고**: AI와 IoT 솔루션에는 features 페이지가 없습니다.

### 컴포넌트 디렉토리 구조

`src/components/` 디렉토리는 숫자 접두사로 조직화되어 있습니다:

- `00_main/` - 메인 페이지의 하위 섹션 (솔루션 개요, 고객사 목록 등)
- `01_sol_m/` - Nextcare-M (Monitoring) 솔루션 페이지
- `02_sol_e/` - Nextcare-E (Energy) 솔루션 페이지
- `03_01_s/` - Nextcare-S (Safety) 솔루션 페이지
- `04_01_ai/` - Nextcare-AI 솔루션 페이지
- `05_01_iot/` - Nextcare-IoT 솔루션 페이지
- `06_video_reference/` - 영상 레퍼런스 관련
- `07_about/` - 회사 소개 관련
- `08_business/` - 사업 분야 관련
- `09_insight/` - 인사이트 (홍보기사, 영상)
- `10_contact/` - 고객센터 (채용, 문의)

각 솔루션 디렉토리의 파일 명명 규칙:
- `{번호}_01_{약어}_main.jsx` - 솔루션 메인 페이지
- `{번호}_02_{약어}_features.jsx` - 주요 기능 페이지 (M, E, S만)
- `{번호}_03_{약어}_reference.jsx` 또는 `{번호}_02_{약어}_reference.jsx` - 레퍼런스 페이지

### 스타일링 구조

모든 스타일은 `src/styles/` 디렉토리에 styled-components로 작성되어 있습니다:

- `Layout.styles.js` - Header, Footer, Navigation 등 레이아웃 컴포넌트
- `MainPage.styles.js` - 메인 페이지 스타일
- `Nextcare{M|E|S|AI|IoT}.styles.js` - 각 솔루션별 스타일
- `Solution.styles.js`, `ClientList.styles.js` 등 - 특정 섹션 스타일

**중요**: 브랜드 컬러는 `#55b3d6` (하늘색)입니다. (`Layout.styles.js:48` 주석 참조)

### 네비게이션 구조

`src/components/Header.jsx`에 두 개의 주요 네비게이션 그룹이 있습니다:

1. **productNavItems** (왼쪽) - 제품/솔루션 관련 메뉴
   - Nextcare M, E, S, AI, IoT
   - 레퍼런스 영상

2. **companyNavItems** (오른쪽) - 회사 정보 관련 메뉴
   - 회사소개, 사업분야, 인사이트, 고객센터

모바일에서는 햄버거 메뉴로 모든 항목이 통합됩니다. 서브메뉴가 있는 항목은 토글 가능하며, 서브메뉴가 없는 항목(예: 레퍼런스 영상)은 직접 링크로 동작합니다.

### 공통 컴포넌트

- `Header.jsx` - 전역 네비게이션 헤더 (sticky, 드롭다운 메뉴 포함)
- `Footer.jsx` - 전역 푸터
- `ScrollToTop.jsx` - 라우트 변경 시 페이지 최상단으로 스크롤
- `MainPage.jsx` - 홈페이지 (Hero 섹션, 솔루션 개요, 고객사 목록 등)

## 주요 라이브러리

- **react-router-dom** - 클라이언트 사이드 라우팅
- **styled-components** - CSS-in-JS 스타일링
- **react-slick** / **slick-carousel** - 캐러셀/슬라이더 컴포넌트
- **react-fullpage** - 풀페이지 스크롤 효과 (일부 페이지에서 사용)

## 중요 규칙

1. **폰트**: 전역 폰트는 'Nanum Gothic'입니다 (`index.html`에서 로드).
2. **반응형**: 모바일 브레이크포인트는 주로 `768px`입니다.
3. **언어**: UI 텍스트와 주석은 한국어로 작성됩니다.
4. **린트 설정**: ESLint에서 대문자로 시작하는 변수명은 unused 경고에서 제외됩니다 (`eslint.config.js:26`).
5. **새 라우트 추가 시**:
   - `App.jsx`에 Route 추가
   - `Header.jsx`의 적절한 navItems 배열에 메뉴 항목 추가
   - 컴포넌트는 숫자 접두사 규칙을 따라 적절한 디렉토리에 생성

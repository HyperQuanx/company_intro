import React from "react";
import {
  PageContainer,
  ContentWrapper,
  Header,
  TopShape,
  HeaderIcon,
  HeaderTitle,
  IntroSection,
  IntroBox,
  IntroTitle,
  IntroDescription,
  CategoryNav,
  NavPill,
  SectionBar,
  FeatureDescription,
  FeatureGridContainer,
  FeatureGridItem,
  FeatureGridHeader,
  FeatureGridContent,
  ScreensContainer,
  ScreenItem,
  ScreenDash,
  DashPlaceholder,
  ScreenCaption,
  SolutionHeroBanner,
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerTitle,
  HeroBannerDescription,
  HeroBannerButton,
} from "../../styles/Nextcare.styles";

// 테마 색상
const THEME_COLOR = "#5F487A";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/solution04.png";

// 카테고리 데이터
const categories = [
  "빅데이터",
  "딥러닝",
  "마이닝 분석",
  "통합 데이터 분석/예측",
  "오픈소스기반 인프라",
];

// 주요 기술 그리드 데이터
const techGridData = [
  {
    title: "Tracking & Tracing",
    items: [
      "PoR, POL, POD, DEL 구간 실시간 Track & Trace",
      "서비스별/구간별 표준 Workflow 및 Lead-Time 관리",
    ],
  },
  {
    title: "Analytics / Manage (Event Mgmt.)",
    items: [
      "가시성 관리 구간상 예외상황 Proactive '감지 ~ 조치' 관리",
      "자동-수동 감지 및 유관채널 Notification, 상태/사후관리",
      "Exception Event 관리 프로세스 운영",
    ],
  },
  {
    title: "Monitoring",
    items: [
      "전체 네트워크 서비스 운영현황 통합 모니터링",
      "물동량/물류비, Event, 재고, Health Check(Risk, Mgmt.) 등",
      "'Analysis-Action' 연계 기능/프로세스 운영",
    ],
  },
  {
    title: "Active prediction",
    items: [
      "네트워크 운영 & 상시 KPI(SLA)관리",
      "정형/비정형(Ad-hoc) 분석 및 Status Report 제공",
      "서비스/회선/구간/기간별 다차원 검색 및 분석, 시각화",
    ],
  },
];

// 주요 화면 데이터
const screenData = [
  { title: "빅데이터 기반 데이터 분석 및 예측 시스템", image: null },
  { title: "빅데이터 기반 데이터 분석 및 예측 시스템", image: null },
  { title: "빅데이터 기반 데이터 분석 및 예측 시스템", image: null },
  { title: "마스크 착용여부", image: null },
  { title: "익명화", image: null },
  { title: "사물 인식 및 헬멧 착용 여부", image: null },
  { title: "이미지 인식", image: null },
];

const AI_main = () => {
  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>AI / Big Data 관제</HeroBannerTitle>
          <HeroBannerDescription>
            머신러닝과 컴퓨터 비전 기반으로 데이터를 수집·분석하고
            <br />
            예측 모델링을 통해 운영 효율을 극대화합니다.
          </HeroBannerDescription>
          <HeroBannerButton href="/contact/inquiry">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PageContainer>
        <ContentWrapper>
          {/* 헤더 */}
          <Header>
            <TopShape $themeColor={THEME_COLOR}>Nextcare-AI</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-brain"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>AI 관제 솔루션</HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-AI</IntroTitle>
              <IntroDescription>
                머신러닝, 컴퓨터 비전(이미지 처리, 이미지 인식, 객체 감지 도구)
                기술을 통한 데이터 예측 및 최적화 솔루션
              </IntroDescription>
            </IntroBox>
          </IntroSection>

          {/* 카테고리 버튼 */}
          <CategoryNav>
            {categories.map((cat, index) => (
              <NavPill key={index} $themeColor={THEME_COLOR}>
                {cat}
              </NavPill>
            ))}
          </CategoryNav>

          {/* 주요 기술 */}
          <SectionBar>주요 기술</SectionBar>
          <FeatureDescription>
            빅데이터 분석을 통한 <span className="highlight">능동적 대응</span>{" "}
            및 <span className="highlight">변화 예측</span> 필요
          </FeatureDescription>

          {/* Convergence Technology 헤더 */}
          <div
            style={{
              textAlign: "center",
              padding: "15px 40px",
              margin: "0 40px 20px",
              background: `linear-gradient(135deg, ${THEME_COLOR}22 0%, ${THEME_COLOR}11 100%)`,
              borderRadius: "10px",
              border: `2px solid ${THEME_COLOR}44`,
            }}
          >
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: THEME_COLOR,
              }}
            >
              Convergence Technology
            </span>
            <br />
            <span style={{ fontSize: "1rem", color: "#666" }}>
              (Mobile, Chatbot, Big Data, IoT)
            </span>
          </div>

          {/* 기술 그리드 */}
          <FeatureGridContainer
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {techGridData.map((feature, index) => (
              <FeatureGridItem key={index}>
                <FeatureGridHeader $color={THEME_COLOR}>
                  {feature.title}
                </FeatureGridHeader>
                <FeatureGridContent $themeColor={THEME_COLOR}>
                  <ul>
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </FeatureGridContent>
              </FeatureGridItem>
            ))}
          </FeatureGridContainer>

          {/* 하단 요약 박스 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "20px 40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: "15px 30px",
                background: "#f8f9fa",
                border: `2px solid ${THEME_COLOR}`,
                borderRadius: "30px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              적기 실행
              <br />
              적기 Data 확보
            </div>
            <div
              style={{
                padding: "15px 30px",
                background: THEME_COLOR,
                borderRadius: "30px",
                textAlign: "center",
                fontWeight: "600",
                color: "white",
              }}
            >
              "Seamless" Logistics Visibility
            </div>
            <div
              style={{
                padding: "15px 30px",
                background: "#f8f9fa",
                border: `2px solid ${THEME_COLOR}`,
                borderRadius: "30px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              능동적 대응
              <br />
              변화 예측
            </div>
          </div>

          {/* 주요 화면 */}
          <SectionBar>주요 화면</SectionBar>
          <ScreensContainer>
            {screenData.map((screen, index) => (
              <ScreenItem key={index}>
                <ScreenDash>
                  {screen.image ? (
                    <img src={screen.image} alt={screen.title} />
                  ) : (
                    <DashPlaceholder>이미지 영역</DashPlaceholder>
                  )}
                </ScreenDash>
                <ScreenCaption>{screen.title}</ScreenCaption>
              </ScreenItem>
            ))}
          </ScreensContainer>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default AI_main;

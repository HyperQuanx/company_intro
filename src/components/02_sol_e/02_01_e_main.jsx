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
  FeaturesContainer,
  FeatureColumn,
  FeatureCenter,
  FeatureHeader,
  FeatureBox,
  HighlightText,
  DiagramImageContainer,
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
const THEME_COLOR = "#9FC267";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/public/solution02.png";

// 카테고리 데이터
const categories = [
  "BEMS",
  "FEMS",
  "신재생 에너지",
  "에너지 절감 예측 분석",
  "모빌리티",
];

// 하단 기능 그리드 데이터
const featureGridData = [
  {
    title: "기기설비",
    items: [
      "포인트별 상태정보 감시",
      "알람정보 실시간 감시",
      "조명설비 기기오니 제어",
    ],
  },
  {
    title: "전력 제어",
    items: [
      "전력, 전력량, 전압, 전류상태 값 감시",
      "기종별수소, 정보 검색 및 기록",
      "간편대용 예시지 제공",
      "제동 및 복전시 점검",
      "아날로그 상태관리 감시",
      "일보, 년보 기록 등",
    ],
  },
  {
    title: "조명제어",
    items: [
      "그래픽 통합에서 감시 및 제어",
      "Time Scheduling 및 Override",
      "타스크바에의 바탕화면 등록",
      "기종, 그룹, 빌딩별, 구역내 상태표 감시",
    ],
  },
  {
    title: "원격검침",
    items: [
      "자동월회계정보",
      "입주자산 에너지 사용량 관리",
      "세대/사용주체별 확인",
      "1시간단위의 사용량 보고서 기능",
    ],
  },
  {
    title: "위치정보",
    items: [
      "관리영역의 경위도지 이력",
      "시 알람발생",
      "중요자치의 위치파악 및",
      "이동경로 추적",
    ],
  },
  {
    title: "빌딩안내",
    items: ["회재번시 회계정보 만료", "경영 및 고정보 안내"],
  },
];

// 주요 화면 데이터
const screenData = [
  { title: "빌딩 에너지 관리 시스템", image: null },
  { title: "에너지 절감을 위한 예측 및 분석 시스템", image: null },
  { title: "FEMS (공장 에너지관리 시스템)", image: null },
  { title: "REMS (신재생에너지 관제시스템)", image: null },
  { title: "GIS기반 건물에너지 관리 시스템", image: null },
  { title: "건물에너지관리시스템", image: null },
  { title: "태양광발전소관리시스템", image: null },
];

const E_main = () => {
  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>에너지관제</HeroBannerTitle>
          <HeroBannerDescription>
            전기, 열, 가스 등 에너지 사용을 실시간으로 분석하고
            <br />
            설비 최적 제어를 통해 에너지 합리적 소비를 실현합니다.
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
            <TopShape $themeColor={THEME_COLOR}>Nextcare-E</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-bolt"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>
              에너지 관제 솔루션
            </HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-E</IntroTitle>
              <IntroDescription>
                전기, 열, 가스 등의 에너지의 시각화나 설비의 최적 운용 등을 통해
                에너지의 합리적 소비를 실현하는 솔루션
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

          {/* 주요 기능 */}
          <SectionBar>주요 기능</SectionBar>

          <FeaturesContainer>
            {/* 좌측: 다이어그램 이미지 영역 */}
            <FeatureCenter>
              <DiagramImageContainer>
                {/* 다이어그램 이미지 영역 */}
                <div className="placeholder">
                  📊 시스템 구성도 이미지 영역
                  <br />
                  (Internet/Cloud, IoT Gateway, BUILDING, RENEWABLE ENERGY,
                  FACTORY)
                </div>
              </DiagramImageContainer>
            </FeatureCenter>

            {/* 우측: 에너지 효율을 위한 통합관제 플랫폼 */}
            <FeatureColumn>
              <FeatureHeader $primary $themeColor={THEME_COLOR}>
                에너지 효율을 위한 통합관제 플랫폼
              </FeatureHeader>
              <FeatureBox $themeColor={THEME_COLOR}>
                <ul>
                  <li>
                    에너지 사용현황을{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      실시간으로 모니터링
                    </HighlightText>
                    하고 에너지 절감을 유도, 효과적인 에너지 소비를 위한
                    목표관리 등의{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      에너지 경영
                    </HighlightText>
                    을 위한 시스템
                  </li>
                  <li>
                    <HighlightText $themeColor={THEME_COLOR}>
                      스마트 미터
                    </HighlightText>
                    를 통해 측정된 데이터를 가공, 건물 에너지 사용량과 절감현황
                    등을 확인 가능
                  </li>
                  <li>
                    에너지 관리자의 업무 프로세스 향상을 위한{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      모니터링 및 에너지 대시보드
                    </HighlightText>
                    , 정보 가시화, 정보 통계 분석 기능
                  </li>
                </ul>
              </FeatureBox>
            </FeatureColumn>
          </FeaturesContainer>

          {/* 하단 기능 그리드 */}
          <FeatureGridContainer>
            {featureGridData.map((feature, index) => (
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

export default E_main;

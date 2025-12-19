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
  FeaturesContainer,
  FeatureColumn,
  FeatureCenter,
  FeatureHeader,
  FeatureBox,
  HighlightText,
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
  PlatformDiagramContainer,
  PlatformDiagramWrapper,
  DiagramMainBoard,
  DiagramArrowRow,
  DiagramArrow,
  DiagramClientBox,
  DiagramPlatformSection,
  DiagramPlatformHeader,
  DiagramPlatformGrid,
  DiagramPlatformItem,
  DiagramTargetSection,
  DiagramTargetItems,
  DiagramTargetItem,
  DiagramFrameworkSection,
  DiagramFrameworkHeader,
  DiagramFrameworkGrid,
  DiagramFrameworkItem,
  SolutionNavWrapper,
  StyledLink,
} from "../../styles/Nextcare.styles";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

// 테마 색상
const THEME_COLOR = "#128AB0";

// 카테고리 데이터
const categories = [
  "서버/네트워크",
  "보안 장비",
  "통신망(유/무선)",
  "3D / 디지털 트윈",
  "Cloud 가상 서버",
];

// 다이어그램 태그 데이터
// const diagramTags = [
//   { label: "딥러닝", primary: true },
//   { label: "빅데이터/기계학습", primary: false },
//   { label: "통계관리", primary: false },
//   { label: "웹관리", primary: true },
//   { label: "예측관리", primary: false },
//   { label: "사용자관리", primary: false },
//   { label: "로그 관리", primary: false },
//   { label: "상황관리", primary: true },
//   { label: "정보관리", primary: false },
//   { label: "Rule관리", primary: false },
//   { label: "품질 관리", primary: false },
//   { label: "마이닝분석", primary: true },
//   { label: "시설관리", primary: false },
//   { label: "수질관리", primary: false },
//   { label: "원인영향분석", primary: false },
// ];

// 주요 화면 데이터
const screenData = [
  {
    title: "스마트 서비스 모니터링 시스템",
    image: "/solution_img/01m/m_b_ref01.png",
  },
  {
    title: "단일 패키지 시스템 설치 통합 실시간 상황 관제",
    image: "/solution_img/01m/m_b_ref02.png",
  },
  {
    title: "스마트 Path를 통한 전체 구간 End-to-End 통합 관제",
    image: "/solution_img/01m/m_b_ref03.png",
  },
  {
    title: "데이터 플로우 관제 시스템",
    image: "/solution_img/01m/m_b_ref04.png",
  },
  { title: "보안 관제 시스템", image: "/solution_img/01m/m_b_ref05.png" },
  { title: "품질 통합 관리 시스템", image: "/solution_img/01m/m_b_ref06.png" },
  {
    title: "전국 네트워크 통합 플랫폼",
    image: "/solution_img/01m/m_b_ref07.png",
  },
  { title: "가상화 관제 시스템", image: "/solution_img/01m/m_b_ref08.png" },
  {
    title: "네트워크 장비 통합 플랫폼",
    image: "/solution_img/01m/m_b_ref09.png",
  },
  {
    title: "시설물 통합 관제 시스템",
    image: "/solution_img/01m/m_b_ref10.png",
  },
  {
    title: "입찰 시스템 메타버스 홍보관",
    image: "/solution_img/01m/m_b_ref11.png",
  },
  {
    title: "IT Park 센터 통합 관제",
    image: "/solution_img/01m/m_b_ref12.png",
  },
];

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

const M_main = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>통합관제</HeroBannerTitle>
          <HeroBannerDescription>
            네트워크, 시스템, 애플리케이션, 데이터베이스 등의 자원을
            <br />
            하나의 창에서 관리하기위한 통합관리 솔루션입니다.
          </HeroBannerDescription>
          <HeroBannerButton href="/contact/inquiry?solution=Nextcare-M">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-m"
          className={isActivePath("/solutions/nextcare-m") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-M
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-m/features"
          className={
            isActivePath("/solutions/nextcare-m/features") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          도입효과와 주요기능
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-m/reference"
          className={
            isActivePath("/solutions/nextcare-m/reference") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          구축 레퍼런스
        </StyledLink>
      </SolutionNavWrapper>

      <PublicSContainer>
        <PageContainer>
          <ContentWrapper>
            {/* 헤더 */}
            <Header>
              <TopShape $themeColor={THEME_COLOR}>Nextcare-M</TopShape>
              <HeaderIcon $themeColor={THEME_COLOR}>
                <i className="fas fa-desktop"></i>
              </HeaderIcon>
              <HeaderTitle $themeColor={THEME_COLOR}>
                통합 관제 솔루션
              </HeaderTitle>
            </Header>

            {/* 인트로 */}
            <IntroSection>
              <IntroBox>
                <IntroTitle $themeColor={THEME_COLOR}>Nextcare-M</IntroTitle>
                <IntroDescription>
                  네트워크, 시스템, 애플리케이션, 데이터베이스 등의 자원을
                  하나의 창에서 관리하기 위한 통합관리 솔루션
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
            <FeatureDescription>
              통합망 관제, 서비스 품질 관리, 장애 관리, 자산 관리 등{" "}
              <span className="highlight">고객의 관점</span>에서 서비스에 대한
              체계적인 모니터링 시스템 제공
            </FeatureDescription>

            <FeaturesContainer>
              {/* 좌측: 운영자 관점의 통합관제 플랫폼 */}
              <FeatureColumn>
                <FeatureHeader $primary $themeColor={THEME_COLOR}>
                  운영자 관점의 통합관제 플랫폼
                </FeatureHeader>
                <FeatureBox $themeColor={THEME_COLOR}>
                  <ul>
                    <li>
                      물리적 이중화 구성 및 생존성을 고려한 관리체계로서,{" "}
                      <HighlightText $themeColor={THEME_COLOR}>
                        이중화/이원화를 통한 무중단 시스템
                      </HighlightText>
                      을 구성
                    </li>
                    <li>
                      빅데이터 기반 최적화된 구축환경을 통해{" "}
                      <HighlightText $themeColor={THEME_COLOR}>
                        안전성을 제공
                      </HighlightText>
                      하며 비즈니스 연속성을 구현할 수 있는 통합 서비스 플랫폼
                    </li>
                    <li>
                      <HighlightText $themeColor={THEME_COLOR}>
                        스마트 컨포넌트 Plug-IN 환경
                      </HighlightText>{" "}
                      제공 / 고객을 위한 저렴한 구축비용 제공
                    </li>
                  </ul>
                </FeatureBox>
              </FeatureColumn>

              {/* 우측: 다이어그램 태그들 */}
              <FeatureCenter>
                <img src="/solution_img/01m/m_b_q01.png" alt="Nextcare-M" />
              </FeatureCenter>
            </FeaturesContainer>

            {/* 플랫폼 다이어그램 */}
            <PlatformDiagramContainer>
              <PlatformDiagramWrapper>
                {/* 메인 대시보드 */}
                <DiagramMainBoard $themeColor={THEME_COLOR}>
                  [ Nextcare-M ] Main Dash board
                </DiagramMainBoard>

                {/* 화살표 */}
                <DiagramArrowRow>
                  <DiagramArrow $themeColor={THEME_COLOR}>
                    <div className="arrow-up"></div>
                    <div className="arrow-line"></div>
                  </DiagramArrow>
                  <DiagramArrow $themeColor={THEME_COLOR}>
                    <div className="arrow-up"></div>
                    <div className="arrow-line"></div>
                  </DiagramArrow>
                  <DiagramArrow $themeColor={THEME_COLOR}>
                    <div className="arrow-up"></div>
                    <div className="arrow-line"></div>
                  </DiagramArrow>
                </DiagramArrowRow>

                {/* NMS Client */}
                <DiagramClientBox>NMS M&O Client</DiagramClientBox>

                {/* NMS Platform */}
                <DiagramPlatformSection>
                  <DiagramPlatformHeader>NMS Platform</DiagramPlatformHeader>
                  <DiagramPlatformGrid>
                    <DiagramPlatformItem
                      $bgColor="#e3f2fd"
                      $borderColor="#2196F3"
                    >
                      Routing Manager
                    </DiagramPlatformItem>
                    <DiagramPlatformItem
                      $bgColor="#fff3e0"
                      $borderColor="#ff9800"
                    >
                      Advanced Manager
                    </DiagramPlatformItem>
                    <DiagramPlatformItem
                      $bgColor="#e8f5e9"
                      $borderColor="#4caf50"
                    >
                      Server Security Center
                    </DiagramPlatformItem>
                    <DiagramPlatformItem
                      $bgColor="#e3f2fd"
                      $borderColor="#2196F3"
                    >
                      Operation Center
                    </DiagramPlatformItem>
                    <DiagramPlatformItem
                      $bgColor="#fff3e0"
                      $borderColor="#ff9800"
                    >
                      Command Center
                    </DiagramPlatformItem>
                    <DiagramPlatformItem
                      $bgColor="#e8f5e9"
                      $borderColor="#4caf50"
                    >
                      Network Security Center
                    </DiagramPlatformItem>
                  </DiagramPlatformGrid>
                </DiagramPlatformSection>

                {/* 타겟 블록 */}
                <DiagramTargetSection>
                  <div className="title">Intrgrated Control Target</div>
                  <div className="subtitle">Block Mechanism</div>
                </DiagramTargetSection>

                {/* 타겟 아이템들 */}
                <DiagramTargetItems>
                  <DiagramTargetItem>네트워크 관리</DiagramTargetItem>
                  <DiagramTargetItem>서버 관리</DiagramTargetItem>
                  <DiagramTargetItem>보안 관리</DiagramTargetItem>
                  <DiagramTargetItem>방화벽</DiagramTargetItem>
                  <DiagramTargetItem>IPS</DiagramTargetItem>
                  <DiagramTargetItem>시설장비관리</DiagramTargetItem>
                </DiagramTargetItems>

                {/* Framework */}
                <DiagramFrameworkSection>
                  <DiagramFrameworkHeader>
                    NMS M&O Framework
                  </DiagramFrameworkHeader>
                  <DiagramFrameworkGrid>
                    <DiagramFrameworkItem>
                      NMS
                      <div className="icons">
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                      </div>
                    </DiagramFrameworkItem>
                    <DiagramFrameworkItem>
                      SMS
                      <div className="icons">
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                      </div>
                    </DiagramFrameworkItem>
                    <DiagramFrameworkItem>
                      TMS
                      <div className="icons">
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                      </div>
                    </DiagramFrameworkItem>
                    <DiagramFrameworkItem>
                      FMS
                      <div className="icons">
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                        <div className="icon-box"></div>
                      </div>
                    </DiagramFrameworkItem>
                  </DiagramFrameworkGrid>
                </DiagramFrameworkSection>
              </PlatformDiagramWrapper>
            </PlatformDiagramContainer>

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
      </PublicSContainer>
    </>
  );
};

export default M_main;

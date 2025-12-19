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
  SolutionNavWrapper,
  StyledLink,
} from "../../styles/Nextcare.styles";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

// 테마 색상
const THEME_COLOR = "#9FC267";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/solution02.png";

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
      "알람 정보 실시간 감시",
      "각종 설비 기기 외 제어",
    ],
  },
  {
    title: "전력제어",
    items: [
      "전력, 전력량, 전압, 전류상태 값 감시",
      "가동횟수, 정보 감시 및 기록",
      "경보 대응 메시지 제공",
      "계측 및 적산치 감시",
      "아날로그 값 상하한 감시",
      "일보, 년보 기록 등",
    ],
  },
  {
    title: "조명제어",
    items: [
      "그래픽 환경에서 감시 및 제어",
      "Time Scheduling 및 Override",
      "히스토리별 데이터 취합/분석",
      "개별, 그룹, 패턴제어, 구역별 조명 상태값 감시",
    ],
  },
  {
    title: "원격검침",
    items: [
      "자동원격검침",
      "입주사별 에너지 사용량 관리",
      "사용기간별 검침량 확인",
      "시간대별 검침자료 확인",
      "1시간단위의 사용량 보고서 기능",
    ],
  },
  {
    title: "위치정보",
    items: [
      "관리장비의 정위치 이탈 시 알림경보",
      "중요장비의 위치파악 및 경보 내역 조회",
    ],
  },
  {
    title: "빌딩안내",
    items: ["화재발생 시 화재경보 연동", "정기 점검 및 고장정보 안내"],
  },
];

// 주요 화면 데이터 (images 배열: 2개 이상이면 넓은 카드)
const screenData = [
  {
    title: "빌딩 에너지 관리 시스템",
    images: [
      "/solution_img/02e/e_b_ref01.png",
      "/solution_img/02e/e_b_ref02.png",
    ],
  },
  {
    title: "에너지 절감을 위한 예측 및 분석 시스템",
    images: ["/solution_img/02e/e_b_ref03.png"],
  },
  {
    title: "FEMS (공장 에너지관리 시스템)",
    images: ["/solution_img/02e/e_b_ref04.png"],
  },
  {
    title: "REMS (신재생에너지 관제시스템)",
    images: ["/solution_img/02e/e_b_ref05.png"],
  },
  {
    title: "GIS기반 건물에너지 관리 시스템",
    images: ["/solution_img/02e/e_b_ref06.png"],
  },
  {
    title: "태양광발전소관리시스템",
    images: [
      "/solution_img/02e/e_b_ref08.png",
      "/solution_img/02e/e_b_ref09.png",
    ],
  },
  {
    title: "건물외장재관리시스템",
    images: ["/solution_img/02e/e_b_ref07.png"],
  },
];

const E_main = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

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
          <HeroBannerButton href="/contact/inquiry?solution=Nextcare-E">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-e"
          className={isActivePath("/solutions/nextcare-e") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-E
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-e/features"
          className={
            isActivePath("/solutions/nextcare-e/features") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          도입효과와 주요기능
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-e/reference"
          className={
            isActivePath("/solutions/nextcare-e/reference") ? "active" : ""
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
                  전기, 열, 가스 등의 에너지의 시각화나 설비의 최적 운용 등을
                  통해 에너지의 합리적 소비를 실현하는 솔루션
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
                  <img
                    src="/solution_img/02e/e_b_q01.png"
                    alt="Energy_Brochure"
                  />
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
                      를 통해 측정된 데이터를 가공, 건물 에너지 사용량과
                      절감현황 등을 확인 가능
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
                <ScreenItem
                  key={index}
                  $cols={screen.images.length}
                  $noTitle={!screen.title}
                >
                  <ScreenDash>
                    {screen.images.some((img) => img !== null)
                      ? screen.images.map((img, imgIndex) =>
                          img ? (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`${screen.title || "화면"} ${imgIndex + 1}`}
                            />
                          ) : (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          )
                        )
                      : screen.images.map((_, imgIndex) => (
                          <DashPlaceholder key={imgIndex}>
                            이미지 영역
                          </DashPlaceholder>
                        ))}
                  </ScreenDash>
                  {screen.title && (
                    <ScreenCaption>{screen.title}</ScreenCaption>
                  )}
                </ScreenItem>
              ))}
              {/* 빈 공간 채우기 */}
              {(() => {
                const totalCols = 4;
                const usedCols = screenData.reduce(
                  (acc, screen) => acc + screen.images.length,
                  0
                );
                const remainder = usedCols % totalCols;
                const emptySlots = remainder === 0 ? 0 : totalCols - remainder;
                return Array.from({ length: emptySlots }).map((_, index) => (
                  <ScreenItem key={`empty-${index}`} $placeholder>
                    <ScreenDash>
                      <DashPlaceholder>추후 추가 예정입니다.</DashPlaceholder>
                    </ScreenDash>
                    <ScreenCaption>Coming Soon</ScreenCaption>
                  </ScreenItem>
                ));
              })()}
            </ScreensContainer>
          </ContentWrapper>
        </PageContainer>
      </PublicSContainer>
    </>
  );
};

export default E_main;

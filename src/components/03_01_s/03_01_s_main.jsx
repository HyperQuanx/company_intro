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
const THEME_COLOR = "#C00000";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/solution03.png";

// 카테고리 데이터
const categories = [
  "작업 환경",
  "작업자 상태",
  "작업 현황",
  "작업 안전 영상",
  "설비 시설물",
];

// 주요 화면 데이터 (images 배열: 2개 이상이면 넓은 카드)
const screenData = [
  {
    title: "위험 작업별 위치, 환경 모니터링",
    images: ["/solution_img/03s/s_b_ref01.png"],
  },
  {
    title: "지역별 통합 안전 모니터링",
    images: ["/solution_img/03s/s_b_ref02.png"],
  },
  {
    images: [
      "/solution_img/03s/s_b_ref03_1.png",
      "/solution_img/03s/s_b_ref03_2.png",
    ],
  },
  {
    title: "3D 작업 정보 및 근로자 위치 통합 대시보드",
    images: [
      "/solution_img/03s/s_b_ref04.png",
      "/solution_img/03s/s_b_ref08.png",
      "/solution_img/03s/s_b_ref09.png",
    ],
  },
  {
    title: "실시간 디지털 안전 체계 관리 모니터링",
    images: ["/solution_img/03s/s_b_ref05.png"],
  },
  {
    title: "발전소 연료하역작업 안전관리플랫폼",
    images: ["/solution_img/03s/s_b_ref06.png"],
  },

  {
    title: "반지하주택 IoT 기반 침수경보시스템",
    images: ["/solution_img/03s/s_b_ref07.png"],
  },
  {
    title: "사고제로 - 안전행정 통합 업무 시스템",
    images: ["/solution_img/03s/s_b_ref10.png"],
  },
  {
    title: "노후산단 화학사고 원격모니터링시스템",
    images: ["/solution_img/03s/s_b_ref11.png"],
  },
];

const S_main = () => {
  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>안전관제</HeroBannerTitle>
          <HeroBannerDescription>
            작업자의 위치와 위험 요소를 실시간으로 감지하고
            <br />
            중대산업 안전사고를 예방/방지하는 솔루션을 제공합니다.
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
            <TopShape $themeColor={THEME_COLOR}>Nextcare-S</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-shield-halved"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>
              안전 관제 솔루션
            </HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-S</IntroTitle>
              <IntroDescription>
                중대산업안전사고를 예방하고 방지하기 위한 현장의 위험 요소를
                감지하고 전파하는 솔루션
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
            {/* 좌측: 핵심 기능 */}
            <FeatureColumn>
              <FeatureHeader $primary $themeColor={THEME_COLOR}>
                핵심 기능
              </FeatureHeader>
              <FeatureBox $themeColor={THEME_COLOR}>
                <ul>
                  <li>
                    모바일/웹을 활용한 법규위반사항 디지털 관리
                    <br />
                    <HighlightText $themeColor={THEME_COLOR}>
                      (PSM, 중대재해처벌법, 안전보건법)
                    </HighlightText>
                  </li>
                  <li>
                    근로자 산업 현장{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      QR 출입 및 인원 관리
                    </HighlightText>
                  </li>
                  <li>
                    실시간{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      안전교육 이수 및 안전 이력 관리
                    </HighlightText>
                  </li>
                  <li>
                    실시간으로 보관 및 확인 가능한{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      디지털 서류 관리
                    </HighlightText>
                  </li>
                </ul>
              </FeatureBox>
            </FeatureColumn>

            {/* 중앙: 다이어그램 이미지 영역 */}
            <FeatureCenter>
              <DiagramImageContainer>
                {/* 다이어그램 이미지 영역 */}
                <div className="placeholder">
                  <img src="/solution_img/03s/s_b_q01.png" alt="Nextcare-S" />
                </div>
              </DiagramImageContainer>
            </FeatureCenter>

            {/* 우측: 추가 기능 */}
            <FeatureColumn>
              <FeatureHeader $themeColor={THEME_COLOR}>추가 기능</FeatureHeader>
              <FeatureBox $themeColor={THEME_COLOR}>
                <ul>
                  <li>
                    CCTV 및 화재, 가스 등 다양한{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      안전환경 센서 연동
                    </HighlightText>
                  </li>
                  <li>
                    <HighlightText $themeColor={THEME_COLOR}>
                      안전행동관찰/안전신문고
                    </HighlightText>{" "}
                    관리
                  </li>
                  <li>
                    <HighlightText $themeColor={THEME_COLOR}>
                      3D/2D 기술 기반
                    </HighlightText>{" "}
                    작업자 위치 모니터링
                  </li>
                  <li>
                    기업/산업별 맞춤형 안전공정 및 근로자 관리{" "}
                    <HighlightText $themeColor={THEME_COLOR}>
                      커스터마이징
                    </HighlightText>
                  </li>
                </ul>
              </FeatureBox>
            </FeatureColumn>
          </FeaturesContainer>

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
                {screen.title && <ScreenCaption>{screen.title}</ScreenCaption>}
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
    </>
  );
};

export default S_main;

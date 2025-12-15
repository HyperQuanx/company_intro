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
  SectionBar,
  SolutionHeroBanner,
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerTitle,
  HeroBannerDescription,
  HeroBannerButton,
  SolutionNavWrapper,
  StyledLink,
  ScreensContainer,
  ScreenItem,
  ScreenDash,
  ScreenCaption,
} from "../../styles/Nextcare.styles";

import {
  THEME_COLOR,
  HERO_BG_IMAGE,
  ReferenceGrid,
  ReferenceSection,
  ReferenceCard,
  ReferenceDash,
  DashPlaceholder,
  ReferenceTitle,
  EmptyPlaceholder,
  EmptyText,
  EmptyLabel,
  ReferenceImageArea,
} from "../../styles/NextcareS.styles";
import { useLocation } from "react-router-dom";

const S_reference = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  const safetyReferences = [
    {
      title: "3D기반 디지털 안전관리 플랫폼 WEB",
      images: [
        "/solution_img/03s/s_ref01_01.png",
        "/solution_img/03s/s_ref01_02.png",
      ],
    },
    {
      title: "3D기반 디지털 안전관리 플랫폼 APP",
      images: [
        "/solution_img/03s/s_b_ref03_1.png",
        "/solution_img/03s/s_b_ref03_2.png",
      ],
    },
    {
      title: "넥스트코어테크놀로지 안전관리 라이트 버전 WEB",
      images: [
        "/solution_img/03s/s_ref03_01.png",
        "/solution_img/03s/s_ref03_02.png",
      ],
    },
    {
      title: "넥스트코어테크놀로지 안전관리 라이트버전 APP",
      images: [
        "/solution_img/03s/s_ref04_01.png",
        "/solution_img/03s/s_ref04_02.png",
      ],
    },
    {
      title: "한국 서부발전 안전 위치기반 작업 통합 모니터링 시스템",
      images: ["/solution_img/03s/s_ref05.png"],
    },
    {
      title: "가스기술공사 안전작업 관리 시스템",
      images: [
        "/solution_img/03s/s_ref06_01.png",
        "/solution_img/03s/s_ref06_02.png",
      ],
    },
    {
      title: "롯데케미칼 스마트 안전보건 통합 플랫폼",
      images: ["/solution_img/03s/s_ref07.png"],
    },
    {
      title: "한국중부발전 신서전 IoT 기반 연료하역작업 안전관리 플랫폼",
      images: ["/solution_img/03s/s_ref08.png"],
    },
    {
      title: "강남구, 관악구 반지하주택 IoT 기반 침수경보 시스템",
      images: ["/solution_img/03s/s_ref09.png"],
    },
    {
      title: "사고제로 - 안전행정 통합 업무 시스템",
      images: ["/solution_img/03s/s_ref10.png"],
    },
    {
      title: "SK Planet 노후산단 화학사고 원격 모니터링 시스템",
      images: ["/solution_img/03s/s_ref11.png"],
    },
  ];

  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>구축 레퍼런스</HeroBannerTitle>
          <HeroBannerDescription>
            Nextcare-S가 실제로 구축된 다양한 프로젝트 사례를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton $themeColor={THEME_COLOR} href="/contact/inquiry">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-s"
          className={isActivePath("/solutions/nextcare-s") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-S
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-s/features"
          className={
            isActivePath("/solutions/nextcare-s/features") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          도입효과와 주요기능
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-s/reference"
          className={
            isActivePath("/solutions/nextcare-s/reference") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          구축 레퍼런스
        </StyledLink>
      </SolutionNavWrapper>

      <PageContainer>
        <ContentWrapper>
          {/* 헤더 */}
          <Header>
            <TopShape $themeColor={THEME_COLOR}>Nextcare-S</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-shield-alt"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>구축 레퍼런스</HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-S</IntroTitle>
              <IntroDescription>
                중대재해처벌법/산업안전보건법을 위한 안전솔루션으로, 작업장의
                위험요소를 실시간 모니터링하고 즉각적인 대응이 가능한 종합
                안전관리 솔루션의 구축 사례입니다.
              </IntroDescription>
            </IntroBox>
          </IntroSection>

          <SectionBar $themeColor={THEME_COLOR}>구축 사례</SectionBar>
          <ScreensContainer>
            {safetyReferences.map((screen, index) => (
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
              const usedCols = safetyReferences.reduce(
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

export default S_reference;

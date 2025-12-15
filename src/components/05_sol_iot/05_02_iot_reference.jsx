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
  ScreenDash,
  ScreenItem,
  DashPlaceholder,
  ScreenCaption,
} from "../../styles/Nextcare.styles";

import {
  THEME_COLOR,
  HERO_BG_IMAGE,
  ReferenceGrid,
  ReferenceSection,
  ReferenceCard,
  ReferenceImageArea,
  ReferenceTitle,
  SpecsContainer,
  SpecCard,
} from "../../styles/NextcareIoT.styles";
import { useLocation } from "react-router-dom";

const IoT_reference = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  const referenceData = [
    {
      title: "로지스풀 지게차 관제 시스템",
      images: ["/solution_img/05iot/iot_ref01.png"],
    },
    {
      title: "씨에스 정보 기술 여기미세",
      images: ["/solution_img/05iot/iot_ref02.png"],
    },
    {
      title: "대우건설 푸르지오 - 스마트 홈 네트워크 시스템",
      images: ["/solution_img/05iot/iot_ref03.png"],
    },
    {
      title: "점터 양계 농가 - 스마트 팜",
      images: ["/solution_img/05iot/iot_ref04.png"],
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
            Nextcare-IoT가 실제로 구축된 다양한 프로젝트 사례를
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
          to="/solutions/nextcare-iot"
          className={isActivePath("/solutions/nextcare-iot") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-IoT
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-iot/reference"
          className={
            isActivePath("/solutions/nextcare-iot/reference") ? "active" : ""
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
            <TopShape $themeColor={THEME_COLOR}>Nextcare-IoT</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-network-wired"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>구축 레퍼런스</HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-IoT</IntroTitle>
              <IntroDescription>
                IoT(Internet of Things) 기술을 활용한 장소·시간에 제약 없이 어떤
                사물도 관계하는 솔루션의 구축 사례입니다.
              </IntroDescription>
            </IntroBox>
          </IntroSection>

          <SectionBar $themeColor={THEME_COLOR}>구축 사례</SectionBar>
          <ScreensContainer>
            {referenceData.map((screen, index) => (
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
              const usedCols = referenceData.reduce(
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

export default IoT_reference;

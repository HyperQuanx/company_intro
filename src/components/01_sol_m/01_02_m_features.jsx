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
} from "../../styles/Nextcare.styles";

import {
  THEME_COLOR,
  HERO_BG_IMAGE,
  BenefitsSection,
  BenefitsColumn,
  BenefitTitle,
  BenefitItem,
  BenefitText,
  SystemDiagram,
  FeaturesShowcase,
  ShowcaseGrid,
  ShowcaseItem,
  ShowcaseImage,
  ShowcaseCaption,
} from "../../styles/NextcareM.styles";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

// 테마 색상

const M_features = () => {
  const benefits = [
    "신기술 서비스 최적화 시스템 구축 및 안정적인 통합제 관리",
    "Non-Stop Service (NMS, SMS, TMS, FMS 통합 가능)",
    "운영자 단순화, 집중화, 실시간 제어 및 정보 무지의 정보 관제로 운영 비용 절감 효과",
    "권제 대상인프 내 NMS, SMS, TMS, FMS 기능 통합 가능",
  ];

  const showcaseItems = [
    { n: "01", title: "대시보드" },
    { n: "02", title: "통합 운영관리" },
    { n: "03", title: "현황관리" },
    { n: "04", title: "형상관리" },
    { n: "05", title: "장비자원관리" },
    { n: "06", title: "상세 형상관리" },
    { n: "07", title: "장애관리" },
    { n: "08", title: "구성관리" },
    { n: "09", title: "품질통계관리" },
  ];

  const THEME_COLOR = "#128AB0";
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>도입효과와 주요기능</HeroBannerTitle>
          <HeroBannerDescription>
            Nextcare-M의 강력한 기능과 도입 효과를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton
            $themeColor={THEME_COLOR}
            href="/contact/inquiry?solution=Nextcare-M"
          >
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
                도입효과와 주요기능
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

            {/* 도입효과 섹션 */}
            <SectionBar $themeColor={THEME_COLOR}>도입효과</SectionBar>
            <BenefitsSection>
              <BenefitsColumn>
                <BenefitTitle $themeColor={THEME_COLOR}>주요 이점</BenefitTitle>
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} $themeColor={THEME_COLOR}>
                    <BenefitText>{benefit}</BenefitText>
                  </BenefitItem>
                ))}
              </BenefitsColumn>
            </BenefitsSection>

            {/* 주요 기능 섹션 */}
            <SectionBar $themeColor={THEME_COLOR}>주요 기능</SectionBar>
            <FeaturesShowcase>
              <ShowcaseGrid>
                {showcaseItems.map((item) => (
                  <ShowcaseItem key={item.n}>
                    <ShowcaseImage $themeColor={THEME_COLOR}>
                      <img
                        src={`/solution_img/01m/m_f${item.n}.png`}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </ShowcaseImage>
                    <ShowcaseCaption>{item.title}</ShowcaseCaption>
                  </ShowcaseItem>
                ))}
              </ShowcaseGrid>
            </FeaturesShowcase>
          </ContentWrapper>
        </PageContainer>
      </PublicSContainer>
    </>
  );
};

export default M_features;

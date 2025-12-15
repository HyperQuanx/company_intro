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
  FeaturesShowcase,
  ShowcaseGrid,
  ShowcaseItem,
  ShowcaseImage,
  ShowcaseCaption,
} from "../../styles/NextcareS.styles";
import { useLocation } from "react-router-dom";

const S_features = () => {
  const benefits = [
    "중대재해처벌법에 대응하기 위한 전문적이고 효과적인 안전관리 시스템 제공",
    "작업장의 위험요소를 사전에 파악하고, 즉각적인 대응 및 개선을 통해 안전 향상",
    "근로자의 안전의식 개선 및 기업의 안전 문화 조성을 통한 지속적인 성장",
  ];

  const showcaseItems = [
    { n: "01", title: "3D 대시보드" },
    { n: "02", title: "2D 대시보드" },
    { n: "03", title: "통합 운영 대시보드" },
    { n: "04", title: "작업 관리" },
    { n: "05", title: "법률 항목 관리" },
    { n: "06", title: "안전점검 통계 관리" },
    { n: "07", title: "위험성평가" },
    { n: "08", title: "안전신문고" },
    { n: "09", title: "안전서류 출력 관리" },
  ];

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
            Nextcare-S의 강력한 기능과 도입 효과를
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
            <HeaderTitle $themeColor={THEME_COLOR}>
              도입효과와 주요기능
            </HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-S</IntroTitle>
              <IntroDescription>
                중대재해처벌법/산업안전보건법을 위한 안전솔루션으로, 작업장의
                위험요소를 실시간 모니터링하고 즉각적인 대응이 가능한 종합
                안전관리 솔루션입니다.
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
                      src={`/solution_img/03s/s_f${item.n}.png`}
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
    </>
  );
};

export default S_features;

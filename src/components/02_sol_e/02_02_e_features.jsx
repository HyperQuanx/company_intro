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
} from "../../styles/NextcareE.styles";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

const E_features = () => {
  const benefits = [
    "에너지 절감을 위한 효과적인 에너지 소비를 위한 에너지 경영 시스템 제공",
    "스마트 미터를 통해 측정된 데이터를 가공, 건물 에너지 사용량과 절감현황 등을 확인 가능",
    "관리자의 업무 프로세스 향상을 위한 모니터링 및 에너지 대시보드, 정보 가시화, 정보 통계 분석 기능",
  ];

  const showcaseItems = [
    { n: "01", title: "3D기기 설비 관리" },
    { n: "02", title: "기기 설비 관리" },
    { n: "03", title: "전력 제어" },
    { n: "04", title: "에너지 통계 관리" },
    { n: "05", title: "원격검침 관리" },
    { n: "06", title: "환경제어 APP" },
    { n: "07", title: "태양광 발전소 관리" },
    { n: "08", title: "지역별 발전 관리" },
    { n: "09", title: "태양광 발전 관리 APP" },
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
            Nextcare-E의 강력한 기능과 도입 효과를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton
            $themeColor={THEME_COLOR}
            href="/contact/inquiry?solution=Nextcare-E"
          >
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
                도입효과와 주요기능
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
                        src={`/solution_img/02e/e_f${item.n}.png`}
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

export default E_features;

import React from "react";
import {
  THEME_COLOR,
  HERO_BG_IMAGE,
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

const M_features = () => {
  // 도입효과 데이터
  const benefits = [
    "신기술 서비스 최적화 시스템 구축 및 안정적인 통합제 관리",
    "Non-Stop Service (NMS, SMS, TMS, FMS 통합 가능)",
    "운영자 단순화, 집중화, 실시간 제어 및 정보 무지의 정보 관제로 운영 비용 절감 효과",
    "권제 대상인프 내 NMS, SMS, TMS, FMS 기능 통합 가능",
  ];

  // 주요 기능 아이템들
  const showcaseItems = [
    "대시보드",
    "통합 관제메뉴",
    "우평관리",
    "상황실",
    "대시보드",
    "구성관리",
    "성능관리",
    "구성관리",
    "통계분석",
  ];

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
          <HeroBannerButton $themeColor={THEME_COLOR} href="/contact/inquiry">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

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
                네트워크, 시스템, 애플리케이션, 데이터베이스 등의 자원을 하나의
                창에서 관리하기 위한 통합관리 솔루션
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

            <BenefitsColumn>
              <BenefitTitle $themeColor={THEME_COLOR}>시스템 이미지</BenefitTitle>
              <SystemDiagram>
                <img
                  src="/nextcare_m_system.png"
                  alt="Nextcare-M 통합 시스템"
                />
              </SystemDiagram>
            </BenefitsColumn>
          </BenefitsSection>

          {/* 주요 기능 섹션 */}
          <SectionBar $themeColor={THEME_COLOR}>주요 기능</SectionBar>
          <FeaturesShowcase>
            <ShowcaseGrid>
              {showcaseItems.map((item, index) => (
                <ShowcaseItem key={index}>
                  <ShowcaseImage $themeColor={THEME_COLOR}>
                    <span>📊</span>
                  </ShowcaseImage>
                  <ShowcaseCaption>{item}</ShowcaseCaption>
                </ShowcaseItem>
              ))}
            </ShowcaseGrid>
          </FeaturesShowcase>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default M_features;

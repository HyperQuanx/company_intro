import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import BusinessAreas from "./BusinessAreas";

import {
  MainContainer,
  FullPageSection,
  HeroSection,
  BackgroundSlider,
  BackgroundSlide,
  BackgroundOverlay,
  SliderWrapper,
  HeroSlide,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  SectionContent,
  SectionTitle,
  AboutContent,
} from "../styles/MainPage.styles";

const heroSlides = [
  {
    title: "Future Innovation with NEXTCORE",
    subtitle:
      "통합 관제 모니터링 솔루션 전문 기업, 넥스트코어테크놀로지.\n데이터와 AI 기술로 고객의 성공적인 디지털 전환을 이끕니다.",
    buttonText: "회사 주요 제품 보기",
  },
  {
    "title": "Nextcare - Monitoring",
    "subtitle": "서버·네트워크·보안·설비를 하나의 플랫폼으로 통합 관리.\n24시간 중단 없는 관제로 IT·시설 운영 안정성을 확보합니다.",
    "buttonText": "통합 관제 솔루션 보기"
  },
  {
    "title": "Nextcare - Energy",
    "subtitle": "BEMS·FEMS 기반 에너지 통합 관리.\n에너지 사용 분석과 예측으로 비용 절감과 효율 향상을 실현합니다.",
    "buttonText": "에너지 관리 솔루션 보기"
  },
  {
    "title": "Nextcare - Safety",
    "subtitle": "중대재해처벌법 대응을 위한 디지털 안전관리 플랫폼.\n작업자·현장·시설을 통합 관리하여 사고를 예방합니다.",
    "buttonText": "안전관리 솔루션 보기"
  },
  {
    "title": "Nextcare - AI",
    "subtitle": "빅데이터·딥러닝 기반 지능형 분석.\n현장 데이터를 분석해 위험 예측과 의사결정을 지원합니다.",
    "buttonText": "AI 솔루션 보기"
  },
  {
    "title": "Nextcare - IoT",
    "subtitle": "각종 센서·설비·CCTV를 실시간으로 연결.\n현장 데이터를 수집·제어하는 IoT 통합 환경을 제공합니다.",
    "buttonText": "IoT 솔루션 보기"
  }
];

const MainPage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: false,
  };

  return (
    <>
      {/* 1. Hero Section with Carousel - 고정 */}
      <HeroSection>
        {/* 배경 슬라이드쇼 */}
        <BackgroundSlider>
          <BackgroundSlide />
          <BackgroundSlide />
          <BackgroundSlide />
        </BackgroundSlider>
        
        {/* 색상 오버레이 */}
        <BackgroundOverlay />
        
        <SliderWrapper>
          <Slider {...carouselSettings}>
            {heroSlides.map((slide, index) => (
              <HeroSlide key={index}>
                <HeroContent>
                  <HeroTitle>{slide.title}</HeroTitle>
                  <HeroSubtitle
                    dangerouslySetInnerHTML={{
                      __html: slide.subtitle.replace(/\n/g, "<br/>"),
                    }}
                  />
                  <CTAButton>{slide.buttonText}</CTAButton>
                </HeroContent>
              </HeroSlide>
            ))}
          </Slider>
        </SliderWrapper>
      </HeroSection>

      {/* 2. 스크롤 가능한 메인 컨텐츠 */}
      <MainContainer>
        {/* Business Section */}
        <FullPageSection>
          <BusinessAreas />
        </FullPageSection>

        {/* About Section */}
        <FullPageSection $bgColor="#f9f9f9">
          <SectionContent>
            <SectionTitle>About Us</SectionTitle>
            <AboutContent>
              <div className="text-content">
                <h3>통합 관제 분야의 핵심 기술력</h3>
                <p>
                  (주)넥스트코어테크놀로지는 통합 관제 분야의 핵심 기술력을
                  기반으로 데이터 수집·분석·모니터링 전 영역에서 안정적인 성장과
                  혁신을 이어가고 있습니다.
                </p>
                <p>
                  IoT 기반 설비 연동, 레거시 프로세스 적용 등 다양한 구축 경험을
                  통해 고객 환경에 최적화된 맞춤형 솔루션을 제공하며,
                  제조·물류·에너지·안전 등 다양한 산업군에 최적화된 IT 전문
                  서비스를 약속드립니다.
                </p>
              </div>
              <div className="image-placeholder">Company Overview Image</div>
            </AboutContent>
          </SectionContent>
        </FullPageSection>
        <Footer />
      </MainContainer>
    </>
  );
};

export default MainPage;

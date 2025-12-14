import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {
  MainContainer,
  FullPageSection,
  HeroSection,
  BackgroundSlider,
  BackgroundSlide,
  BackgroundOverlay,
  // SliderWrapper,
  // HeroSlide,
  // HeroContent,
  // HeroTitle,
  // HeroSubtitle,
  // CTAButton,
  HeroContentStatic,
  HeroMainTitle,
  HeroSubtitleStatic,
  HeroDescription,
  ButtonGroup,
  HeroButton,
  SectionContent,
  SectionTitle,
  AboutContent,
} from "../styles/MainPage.styles";
import Solution from "./00_main/00_02_solution";
import ClientList from "./00_main/00_03_main_clientList";

/* 기존 캐러셀 데이터 - 주석 처리
const heroSlides = [
  {
    title: "Nextcore Technology",
    subtitle:
      "통합 관제 모니터링 솔루션 전문 기업, 넥스트코어테크놀로지.\n데이터와 AI 기술로 고객의 성공적인 디지털 전환을 이끕니다.",
    buttonText: "회사 주요 제품 보기",
  },
  ...
];
*/

const MainPage = () => {
  /* 기존 캐러셀 설정 - 주석 처리
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
  */

  return (
    <>
      {/* 1. Hero Section - 새로운 디자인 */}
      <HeroSection>
        {/* 배경 비디오 슬라이드쇼 */}
        <BackgroundSlider>
          <BackgroundSlide>
            <video autoPlay muted loop playsInline>
              <source src="/videos/video01.mp4" type="video/mp4" />
            </video>
          </BackgroundSlide>
          <BackgroundSlide>
            <video autoPlay muted loop playsInline>
              <source src="/videos/video02.mp4" type="video/mp4" />
            </video>
          </BackgroundSlide>
          <BackgroundSlide>
            <video autoPlay muted loop playsInline>
              <source src="/videos/video03.mp4" type="video/mp4" />
            </video>
          </BackgroundSlide>
        </BackgroundSlider>

        {/* 색상 오버레이 */}
        <BackgroundOverlay />

        {/* 새로운 히어로 콘텐츠 */}
        <HeroContentStatic>
          <HeroMainTitle>NEXT CORE</HeroMainTitle>
          <HeroSubtitleStatic>
            Technology for{" "}
            <span className="highlight">Integrated Business Monitoring</span>
          </HeroSubtitleStatic>
          <HeroDescription>
            끊임없는 기술 개발을 통해 귀사의 핵심 비즈니스를 완벽하게
            <br />
            모니터링하고 케어할 수 있는 Next Core 테크놀로지로 성장하겠습니다.
          </HeroDescription>
          <ButtonGroup>
            <HeroButton $variant="green">
              <i className="far fa-building"></i>
              <a href="/about/intro">회사 소개</a>
            </HeroButton>
            <HeroButton $variant="blue">
              <i className="fas fa-desktop"></i>
              <a href="/solutions/nextcare-m">솔루션</a>
            </HeroButton>
            <HeroButton $variant="grey">
              <i className="far fa-envelope"></i>
              <a href="/contact/inquiry">문의</a>
            </HeroButton>
          </ButtonGroup>
        </HeroContentStatic>

        {/* 기존 캐러셀 - 주석 처리
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
        */}
      </HeroSection>

      {/* 2. 스크롤 가능한 메인 컨텐츠 */}
      <MainContainer>
        {/* Solution Section */}
        <FullPageSection>
          <Solution />
        </FullPageSection>

        {/* Client List Section */}
        <ClientList />
      </MainContainer>
    </>
  );
};

export default MainPage;

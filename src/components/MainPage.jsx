import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import {
  AbtVFixedVideoContainer,
  AbtVMainContent,
  AbtVTransparentSection,
  IntroContent,
  IntroText,
} from "../styles/NextcoreAbout.styles";

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
  const [heroVisible, setHeroVisible] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80; // 헤더 높이 제외

      // 스크롤이 hero 높이의 25% 이상이면 숨김
      if (scrollY > heroHeight * 0.55) {
        setHeroVisible(false);
      } else {
        setHeroVisible(true);
      }

      // 자연스러운 페이드 효과
      const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.55));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <HeroContentStatic $isVisible={heroVisible} $opacity={heroOpacity}>
          <HeroMainTitle>NEXT CORE</HeroMainTitle>
          <HeroSubtitleStatic>
            Technology for{" "}
            <span className="highlight">Integrated Business Monitoring</span>
          </HeroSubtitleStatic>
          <HeroDescription>
            끊임없는 기술 개발을 통해 귀사의 핵심 비즈니스를 완벽하게
            <br />
            모니터링하고 케어할 수 있는 Nextcore Technology로 성장하겠습니다.
          </HeroDescription>
          <ButtonGroup>
            <HeroButton $variant="green" as={Link} to="/about/intro">
              <i className="far fa-building"></i>
              회사 소개
            </HeroButton>
            <HeroButton $variant="blue" as={Link} to="/solutions/nextcare-m">
              <i className="fas fa-desktop"></i>
              솔루션
            </HeroButton>
            <HeroButton $variant="grey" as={Link} to="/contact/inquiry">
              <i className="far fa-envelope"></i>
              문의
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

      <AbtVMainContent>
        <AbtVTransparentSection>
          <h2>넥스트코어 기술을 통해 산업현장에서의</h2>
          <h2>안전사각지대를 줄여, 더 이상 산업재해로 인해</h2>
          <h2>
            일터에서 노동자가 목숨을 잃는 비극이 발생하지 않기를 기원합니다.
          </h2>

          <p>-Nextcore Technology 일동</p>
        </AbtVTransparentSection>
      </AbtVMainContent>
    </>
  );
};

export default MainPage;

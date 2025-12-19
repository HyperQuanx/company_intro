import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  HeroSection,
  BackgroundSlider,
  BackgroundSlide,
  BackgroundOverlay,
  HeroContentStatic,
  HeroMainTitle,
  HeroSubtitleStatic,
  HeroDescription,
  ButtonGroup,
  HeroButton,
  // New Section Styles
  StatsSection,
  StatsContainer,
  StatsSectionTitle,
  StatsGrid,
  StatCard,
  WhyChooseSection,
  WhyChooseContainer,
  WhyChooseSectionTitle,
  WhyChooseGrid,
  WhyChooseCard,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButtonGroup,
  CTAButtonStyled,
  PartnersSection,
  PartnersContainer,
  PartnersSectionTitle,
  PartnersGrid,
  PartnerLogo,
} from "../styles/MainPage.styles";
import Solution from "./00_main/00_02_solution";
import ClientList from "./00_main/00_03_main_clientList";
import {
  AbtVMainContent,
  AbtVTransparentSection,
} from "../styles/NextcoreAbout.styles";

// Icons for Stats
const ProjectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Icons for Why Choose Us
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const AIBrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2a4 4 0 014 4c0 1.1-.9 2-2 2h-4a2 2 0 01-2-2 4 4 0 014-4z" />
    <path d="M6 8a6 6 0 0012 0" />
    <path d="M12 8v14M8 12h8M6 16h12" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
);

const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const SupportServiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MainPage = () => {
  const [heroVisible, setHeroVisible] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight - 80;

      if (scrollY > heroHeight * 0.55) {
        setHeroVisible(false);
      } else {
        setHeroVisible(true);
      }

      const opacity = Math.max(0, 1 - scrollY / (heroHeight * 0.55));
      setHeroOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Why Choose Us 데이터
  const whyChooseData = [
    {
      icon: MonitorIcon,
      title: "통합 IT 관제",
      description:
        "서버, 네트워크, 애플리케이션을 하나의 플랫폼에서 실시간으로 모니터링하고 관리합니다.",
    },
    {
      icon: AIBrainIcon,
      title: "AI 기반 분석",
      description:
        "머신러닝과 AI 기술로 장애를 사전 예측하고 운영 효율을 극대화합니다.",
    },
    {
      icon: SecurityIcon,
      title: "산업안전 솔루션",
      description:
        "작업자 안전과 설비 모니터링으로 산업현장의 안전사고를 예방합니다.",
    },
    {
      icon: CloudIcon,
      title: "클라우드 & 온프레미스",
      description:
        "고객 환경에 맞는 유연한 구축 방식으로 최적의 솔루션을 제공합니다.",
    },
    {
      icon: DataIcon,
      title: "데이터 기반 의사결정",
      description:
        "축적된 운영 데이터를 분석하여 비즈니스 인사이트를 도출합니다.",
    },
    {
      icon: SupportServiceIcon,
      title: "24/7 기술지원",
      description:
        "전문 엔지니어가 365일 24시간 신속한 기술 지원을 제공합니다.",
    },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection>
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

        <BackgroundOverlay />

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
      </HeroSection>
      {/* 2. Main Content */}
      <MainContainer>
        {/* Solution Section */}
        <Solution />

        {/* Client List Section */}
        <ClientList />

        {/* Statistics Section - AbtVMainContent 위 */}
        <StatsSection>
          <StatsContainer>
            <StatsSectionTitle>
              <h2>넥스트코어테크놀로지의 성과</h2>
              <p>
                10년 이상의 경험과 기술력으로 다양한 산업 분야에서 신뢰받는
                파트너가 되었습니다.
              </p>
            </StatsSectionTitle>
            <StatsGrid>
              <StatCard>
                <div className="stat-icon">
                  <ProjectIcon />
                </div>
                <div className="stat-number">100+</div>
                <div className="stat-label">완료 프로젝트</div>
              </StatCard>
              <StatCard>
                <div className="stat-icon">
                  <ClientIcon />
                </div>
                <div className="stat-number">50+</div>
                <div className="stat-label">고객사</div>
              </StatCard>
              <StatCard>
                <div className="stat-icon">
                  <ExperienceIcon />
                </div>
                <div className="stat-number">10+</div>
                <div className="stat-label">년 이상의 경력</div>
              </StatCard>
              <StatCard>
                <div className="stat-icon">
                  <SupportIcon />
                </div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">기술 지원 / 유지보수</div>
              </StatCard>
            </StatsGrid>
          </StatsContainer>
        </StatsSection>

        {/* Why Choose Us Section */}
        <WhyChooseSection>
          <WhyChooseContainer>
            <WhyChooseSectionTitle>
              <div className="kicker">Why Choose Us</div>
              <h2>넥스트코어를 선택해야 하는 이유</h2>
              <p>
                IT 관제 전문 기업으로서 최첨단 기술과 전문 인력을 바탕으로
                최적의 솔루션을 제공합니다.
              </p>
            </WhyChooseSectionTitle>
            <WhyChooseGrid>
              {whyChooseData.map((item, index) => (
                <WhyChooseCard key={index}>
                  <div className="card-icon">
                    <item.icon />
                  </div>
                  <div className="card-title">{item.title}</div>
                  <div className="card-description">{item.description}</div>
                </WhyChooseCard>
              ))}
            </WhyChooseGrid>
          </WhyChooseContainer>
        </WhyChooseSection>
      </MainContainer>

      {/* Vision Section with Video Background */}
      <AbtVMainContent className="abtVMainBack">
        <AbtVTransparentSection>
          <h2>넥스트코어 기술을 통해 산업현장에서의</h2>
          <h2>안전사각지대를 줄여, 더 이상 산업재해로 인해</h2>
          <h2>
            일터에서 노동자가 목숨을 잃는 비극이 발생하지 않기를 기원합니다.
          </h2>

          <p>-Nextcore Technology 일동</p>
        </AbtVTransparentSection>
      </AbtVMainContent>

      {/* CTA Section */}
      <AbtVMainContent className="abtVMainBack">
        <CTAContainer>
          <CTATitle>
            IT 관제의 새로운 기준,
            <br />
            넥스트코어테크놀로지와 함께하세요
          </CTATitle>
          <CTADescription>
            귀사의 비즈니스에 최적화된 통합 관제 솔루션을 제안해 드립니다.
            <br />
            전문 컨설턴트와 상담을 통해 맞춤형 솔루션을 만나보세요.
          </CTADescription>
          <CTAButtonGroup>
            <CTAButtonStyled $variant="primary" as={Link} to="/contact/inquiry">
              무료 상담 신청
            </CTAButtonStyled>
            <CTAButtonStyled as={Link} to="/solutions/nextcare-m">
              솔루션 살펴보기
            </CTAButtonStyled>
          </CTAButtonGroup>
        </CTAContainer>
      </AbtVMainContent>
    </>
  );
};

export default MainPage;

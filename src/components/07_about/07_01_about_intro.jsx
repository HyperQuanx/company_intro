import React, { useRef, useEffect, useState } from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  IntroductionSection,
  SectionTitle,
  IntroContainer,
  IntroContent,
  IntroText,
  ServiceGrid,
  ServiceBox,
  IntroImage,
  VideoSection,
  VideoOverlay,
  CompanyInfoModernSection,
  CompanyInfoModernContainer,
  CompanyInfoTableWrapper,
  CompanyInfoTableStyled,
  HighlightBox,
  AboutSectionTitle,
  AbtVFixedVideoContainer,
  AbtVMainContent,
  AbtVTransparentSection,
  AbtVSolidSection,
} from "../../styles/NextcoreAbout.styles";

import {
  FaNetworkWired,
  FaHelmetSafety,
  FaBolt,
  FaBuilding,
  FaCube,
  FaMicrochip,
  FaIndustry,
  FaSeedling,
  FaRadiation,
  FaGlobe,
  FaChartLine,
  FaCloud,
} from "react-icons/fa6";
import { HeroSection } from "../../styles/MainPage.styles";

const AboutIntro = () => {
  // 서비스 항목
  const services = [
    { icon: FaNetworkWired, name: "시스템 통합관제" },
    { icon: FaHelmetSafety, name: "디지털 안전관리 플랫폼" },
    { icon: FaBolt, name: "에너지 사업" },
    { icon: FaBuilding, name: "건물 통합 관리" },
    { icon: FaCube, name: "디지털 트윈 기반 서비스 관제" },
    { icon: FaMicrochip, name: "스마트 IoT 산업" },
    { icon: FaIndustry, name: "스마트 팩토리/MES" },
    { icon: FaSeedling, name: "스마트 팜/스마트 홈" },
    { icon: FaRadiation, name: "방사선 안전관리" },
    { icon: FaGlobe, name: "기업 포탈 서비스" },
    { icon: FaChartLine, name: "AI 빅데이터 기반 분석 솔루션" },
    { icon: FaCloud, name: "클라우드 SaaS 서비스" },
  ];

  // Intersection Observer를 위한 ref들
  const introSectionRef = useRef(null);
  const companySectionRef = useRef(null);
  const [introVisible, setIntroVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);

  // Intersection Observer 설정
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries, ref) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (ref === introSectionRef) {
            setIntroVisible(true);
          } else if (ref === companySectionRef) {
            setCompanyVisible(true);
          }
        }
      });
    };

    const introObserver = new IntersectionObserver(
      (entries) => observerCallback(entries, introSectionRef),
      observerOptions
    );
    const companyObserver = new IntersectionObserver(
      (entries) => observerCallback(entries, companySectionRef),
      observerOptions
    );

    if (introSectionRef.current) introObserver.observe(introSectionRef.current);
    if (companySectionRef.current)
      companyObserver.observe(companySectionRef.current);

    return () => {
      if (introSectionRef.current)
        introObserver.unobserve(introSectionRef.current);
      if (companySectionRef.current)
        companyObserver.unobserve(companySectionRef.current);
    };
  }, []);

  return (
    <div>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>Nextcore Technology</HeroBannerTitle>
          <HeroBannerDescription>
            끊임없는 기술개발을 통해 마음까지 케어할 수 있는
            <br />
            넥스트코어테크놀로지로 성장하겠습니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      {/* Section 1: Introduction */}
      <IntroductionSection ref={introSectionRef}>
        <IntroContainer>
          <IntroContent $visible={introVisible}>
            <div>
              <IntroText className="mainIntroText">
                NEXTCORE Technology
                <br />
                통합 관제 모니터링 솔루션 전문 기업
              </IntroText>
            </div>

            <IntroText>
              최고의 ICT 기술력과 다양의 경험으로 국내의 주요 대기업 및 <br />
              공공기관에 B2B, B2C 사업 다양한 분야의 기술을 제공하는 기업입니다.
            </IntroText>

            <div>
              <AboutSectionTitle>
                <h3>넥스트코어 사업범위</h3>
              </AboutSectionTitle>

              <ServiceGrid>
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <ServiceBox key={idx}>
                      <div className="service-icon">
                        <Icon size={42} />
                      </div>
                      <div className="service-name">{service.name}</div>
                    </ServiceBox>
                  );
                })}
              </ServiceGrid>
            </div>
          </IntroContent>
        </IntroContainer>
      </IntroductionSection>

      <AbtVFixedVideoContainer>
        <video autoPlay muted loop playsInline>
          <source src="/videos/video01.mp4" type="video/mp4" />
        </video>
      </AbtVFixedVideoContainer>

      {/* 컨텐츠 영역. 뭐쓰징 */}
      <AbtVMainContent>
        <AbtVTransparentSection>
          <div>
            <p style={{ marginBottom: "1.5rem" }}>
              넥스트코어테크놀로지의 가장 중요한 목표는 도전과 겸손, 그리고
              사람과 기술입니다.
            </p>
            <h2>끊임 없는 기술개발을 통해 마음까지 케어 할 수 있는</h2>
            <h2>넥스트코어테크놀로지로 성장하겠습니다.</h2>
          </div>
        </AbtVTransparentSection>
      </AbtVMainContent>

      <CompanyInfoModernSection ref={companySectionRef}>
        <CompanyInfoModernContainer>
          <AboutSectionTitle>
            <h3>회사 정보</h3>
          </AboutSectionTitle>

          <CompanyInfoTableWrapper $visible={companyVisible}>
            <CompanyInfoTableStyled>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>회사명</td>
                  <td>(주)넥스트코어테크놀로지</td>
                </tr>
                <tr>
                  <td>설립일</td>
                  <td>2013년 3월 7일</td>
                </tr>
                <tr>
                  <td>대표자</td>
                  <td>서원기</td>
                </tr>
                <tr>
                  <td>임직원수</td>
                  <td>15명</td>
                </tr>
                <tr>
                  <td>소재지</td>
                  <td>
                    서울특별시 송파구 법원로 128, A동 610호 (SK V1 GL메트로시티)
                  </td>
                </tr>
                <tr>
                  <td>연락처</td>
                  <td>
                    Tel: 070-5015-2313
                    <br />
                    Fax: 070-8240-2314
                  </td>
                </tr>
              </tbody>
            </CompanyInfoTableStyled>
          </CompanyInfoTableWrapper>

          {/* <HighlightBox>
            <h3>넥스트코어테크놀로지</h3>
            <p>
              끊임없는 기술개발을 통해 마음까지 케어할 수 있는
              <br />
              최고의 ICT 솔루션 전문 기업으로 성장하겠습니다.
            </p>
          </HighlightBox> */}
        </CompanyInfoModernContainer>
      </CompanyInfoModernSection>
    </div>
  );
};

export default AboutIntro;

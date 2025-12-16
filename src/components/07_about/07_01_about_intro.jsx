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
  CompanyInfoSection,
  CompanyInfoContainer,
  CompanyDescription,
  CompanyName,
  CompanyMainText,
  BusinessList,
  BusinessItem,
  CompanyInfoTable,
  TableRow,
  TableLabel,
  TableValue,
  ContactInfo,
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

  // 주요 사업
  const businesses = [
    "기업 통합관제 솔루션",
    "IoT 기반 에너지 관제 솔루션",
    "디지털 트윈 기반 산업 안전관리 시스템",
    "Big Data 기반 예측 서비스",
    "지능형 DT(Digital Transformation) 서비스",
  ];

  return (
    <div>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#4aa8d8"
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
      <IntroductionSection>
        <IntroContainer>
          <IntroContent>
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
              <h3
                style={{
                  margin: "20px 0 0 0",
                  fontSize: "2.2rem",
                  fontWeight: "800",
                  color: "#2d3748",
                }}
              >
                NEXTCORE 사업범위
              </h3>
              <ServiceGrid>
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <ServiceBox key={idx}>
                      <div className="service-icon">
                        <Icon size={22} />
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

      <CompanyInfoSection>
        <CompanyInfoContainer>
          <CompanyInfoTable>
            <TableRow>
              <TableLabel>회사명</TableLabel>
              <TableValue>(주)넥스트코어테크놀로지</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>설립일</TableLabel>
              <TableValue>2013. 03. 07</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>대표자</TableLabel>
              <TableValue>서원기</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>임직원수</TableLabel>
              <TableValue>15명(2025. 12월 기준)</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>소재지</TableLabel>
              <TableValue>
                서울특별시 송파구 법원로 128, A동 610호 (SK V1 GL메트로시티)
              </TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>연락처</TableLabel>
              <TableValue>
                <ContactInfo>
                  <div className="contact-item">
                    <span className="label">Tel</span>
                    <span className="value">070-5015-2313</span>
                  </div>
                  <div className="contact-item">
                    <span className="label">Fax</span>
                    <span className="value">070-8240-2314</span>
                  </div>
                </ContactInfo>
              </TableValue>
            </TableRow>
          </CompanyInfoTable>
        </CompanyInfoContainer>
      </CompanyInfoSection>
    </div>
  );
};

export default AboutIntro;

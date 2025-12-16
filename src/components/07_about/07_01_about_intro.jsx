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

const AboutIntro = () => {
  // 서비스 항목
  const services = [
    { icon: "📊", name: "시스템 통합관제" },
    { icon: "🔒", name: "디지털 안전관리 플랫폼" },
    { icon: "⚡", name: "에너지 사업" },
    { icon: "🏗️", name: "전융 통합 관리" },
    { icon: "📱", name: "디지털 트윈 기반 서비스 관제" },
    { icon: "🤖", name: "스마트 IoT 산업" },
    { icon: "🔥", name: "스마트 택로이/MES" },
    { icon: "🌐", name: "스마트 빔/스마트 홈" },
    { icon: "🛡️", name: "방사선 안전관리" },
    { icon: "🎯", name: "기업 포렌 서비스" },
    { icon: "🤖", name: "AI 빅데이터 기반 문석 솔루션" },
    { icon: "☁️", name: "클라우드 SaaS 서비스" },
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
      {/* Section 1: Introduction */}
      <IntroductionSection>
        <SectionTitle>
          <h2>INTRODUCTION</h2>
        </SectionTitle>

        <IntroContainer>
          <IntroContent>
            <IntroText>
              (합)넥스트코어테크놀로지는 통합 관제 솔루션 전문 기업입니다. 데이터 수집·분석·서비스하는 과정에서
              차별화된 기술력을 보유하고 있습니다.
            </IntroText>

            <IntroText>
              IoT 기반 설비 관제, 에너지·인환·공장·고객관리 등 이는 End-to-End 지원을 통해, 안전 및 서비스
              통합관리 솔루션을 고도화하여 국내 주요 기업에 최적화된 컨설팅과 최고 수준의 기업으로 성장하는 기업입니다.
            </IntroText>

            <div>
              <h3 style={{ margin: "20px 0 0 0", fontSize: "1.2rem", fontWeight: "700", color: "#2d3748" }}>
                NEXTCORE 사업범위
              </h3>
              <ServiceGrid>
                {services.map((service, idx) => (
                  <ServiceBox key={idx}>
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-name">{service.name}</div>
                  </ServiceBox>
                ))}
              </ServiceGrid>
            </div>
          </IntroContent>

          <IntroImage>
            <div className="placeholder">회사 이미지 영역</div>
          </IntroImage>
        </IntroContainer>
      </IntroductionSection>

      {/* Section 2: Company Info */}
      <CompanyInfoSection>
        <SectionTitle>
          <h2>회사 소개 및 연혁</h2>
        </SectionTitle>

        <CompanyInfoContainer>
          <CompanyDescription>
            <CompanyName>
              <h3>NEXTCORE Technology</h3>
              <p>통합 관제 모니터링 솔루션 전문 기업</p>
            </CompanyName>

            <CompanyMainText>
              최고의 ICT 기술력과 다양의 경험으로 국내의 주요 대기업 및 공공기관에 B2B, B2C 사업 다양한 분야의
              기술을 제공하는 기업입니다.
            </CompanyMainText>

            <div>
              <h4 style={{ margin: "0 0 12px 0", fontSize: "1rem", fontWeight: "700", color: "#2d3748" }}>
                주요 사업 영역
              </h4>
              <BusinessList>
                {businesses.map((business, idx) => (
                  <BusinessItem key={idx}>{business}</BusinessItem>
                ))}
              </BusinessList>
            </div>
          </CompanyDescription>

          <CompanyInfoTable>
            <TableRow>
              <TableLabel>회사명</TableLabel>
              <TableValue>(합)넥스트코어테크놀로지</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>설립일</TableLabel>
              <TableValue>2013. 03. 07</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>대표자</TableLabel>
              <TableValue>서준기</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>임직원수</TableLabel>
              <TableValue>15명(2025. 12월 기준)</TableValue>
            </TableRow>

            <TableRow>
              <TableLabel>소재지</TableLabel>
              <TableValue>
                서울특별시 송파구 범원로 128, A동 610호 (SK V1 GL메트로시티)
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

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
  CategoryNav,
  NavPill,
  SectionBar,
  FeatureDescription,
  FeaturesContainer,
  FeatureColumn,
  FeatureCenter,
  DiagramImageContainer,
  ScreensContainer,
  ScreenItem,
  ScreenDash,
  DashPlaceholder,
  ScreenCaption,
  SolutionHeroBanner,
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerTitle,
  HeroBannerDescription,
  HeroBannerButton,
} from "../../styles/Nextcare.styles";

// 테마 색상
const THEME_COLOR = "#E36C09";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/public/solution05.png";

// 카테고리 데이터
const categories = [
  "다양한 센서",
  "각종 설비",
  "CCTV /포터블 카메라",
  "위치 데이터",
  "센서 / 시설물 제어",
];

// IoT Gateway 스펙 데이터
const gatewaySpecs = [
  { section: "Input Power Range", description: "DC +12V(~48V 변경가능)" },
  {
    section: "Ext. Network Interface",
    description: "WCDMA Modem WiFi (USB Dongle Type)",
  },
  { section: "LAN", description: "2Port(10/1000)" },
  { section: "I/O Interface", description: "RS232, RS485" },
  { section: "USB", description: "2Port 이상" },
  { section: "Core", description: "ARM Cortex-A8" },
  { section: "Clock", description: "1GHz" },
  { section: "SDRAM", description: "2Gb (256MB) DDR3" },
  { section: "eMMC", description: "4GB" },
  { section: "O/S", description: "Embeded Linux" },
  { section: "Operating Temperature", description: "-40℃ ~ 85℃" },
];

// 주요 화면 데이터
const screenData = [
  { title: "스마트 홈 네트워크 시스템", image: null },
  { title: "스마트 팜", image: null },
  { title: "지게차 관제 시스템", image: null },
  { title: "대기현황 관리 시스템", image: null },
  { title: "CCTV 및 보안 관제 시스템", image: null },
  { title: "창고 자동화 관리 시스템", image: null },
  { title: "비콘, 바코드, 태블릿", image: null },
];

const IoT_main = () => {
  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>IoT 관제</HeroBannerTitle>
          <HeroBannerDescription>
            다양한 장비와 센서를 연결해 실시간 상태를 원격으로 관제하고
            <br />
            운영 이력을 기록·관리하는 IoT 기반 관제 솔루션입니다.
          </HeroBannerDescription>
          <HeroBannerButton href="/contact/inquiry">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PageContainer>
        <ContentWrapper>
          {/* 헤더 */}
          <Header>
            <TopShape $themeColor={THEME_COLOR}>Nextcare-IoT</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-network-wired"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>IoT 관제 솔루션</HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-I</IntroTitle>
              <IntroDescription>
                IoT(Internet of Thing) 기술을 활용하여 장소·시간에 제약 없이
                어떤 사물이든 관제하는 솔루션
              </IntroDescription>
            </IntroBox>
          </IntroSection>

          {/* 카테고리 버튼 */}
          <CategoryNav>
            {categories.map((cat, index) => (
              <NavPill key={index} $themeColor={THEME_COLOR}>
                {cat}
              </NavPill>
            ))}
          </CategoryNav>

          {/* 디지털 트윈 기반 IoT 관제 운영 */}
          <SectionBar>디지털 트윈 기반 IoT 관제 운영</SectionBar>

          {/* 프로세스 플로우 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 40px",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                title: "다양한센서·설비 및 CCTV 등의",
                sub: "데이터 및 프로토콜 정합",
                items: ["Sensor", "Facility", "CCTV", "etc."],
              },
              {
                title: "LTE-무선통신을 통한",
                sub: "IOTG/W 데이터 수집",
                icon: "📡",
              },
              {
                title: "서버 환경데이터 분석 및",
                sub: "운영 및 고장자료 생성",
                icon: "💻",
              },
              {
                title: "Web 포털 고장 확인",
                sub: "전국 지자체 운영에 정보 활용",
                icon: "📊",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  flex: "1",
                  minWidth: "180px",
                  textAlign: "center",
                  padding: "15px",
                  background: index === 0 ? `${THEME_COLOR}15` : "#f8f9fa",
                  borderRadius: "10px",
                  border: `1px solid ${index === 0 ? THEME_COLOR : "#ddd"}`,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {step.sub}
                </div>
                {step.items && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "0.75rem",
                      color: THEME_COLOR,
                      fontWeight: "600",
                    }}
                  >
                    {step.items.join(" / ")}
                  </div>
                )}
                {step.icon && (
                  <div style={{ fontSize: "2rem", marginTop: "10px" }}>
                    {step.icon}
                  </div>
                )}
                {index < 3 && (
                  <div
                    style={{
                      position: "absolute",
                      right: "-15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "1.5rem",
                      color: THEME_COLOR,
                      zIndex: 1,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <FeatureDescription>
            <strong style={{ color: THEME_COLOR }}>
              IOT 장비 기반 운영 데이터 수집 분석
            </strong>
            <br />
            IOT 장비기반 Interactive 운영 관리를 위한 데이터 분석 정보 제공
          </FeatureDescription>

          {/* IoT Gateway 섹션 */}
          <SectionBar>
            다양한 종류의 센서 및 장치 연동 가능 IoT Gateway
          </SectionBar>

          <FeaturesContainer>
            {/* 좌측: Gateway 이미지 */}
            <FeatureCenter style={{ flex: "0.8" }}>
              <DiagramImageContainer>
                <div className="placeholder">
                  📟 IoT Gateway 이미지 영역
                  <br />
                  (하드웨어 장비 이미지)
                </div>
              </DiagramImageContainer>
            </FeatureCenter>

            {/* 우측: 스펙 테이블 */}
            <FeatureColumn style={{ flex: "1.2" }}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "0.8rem",
                  }}
                >
                  <thead>
                    <tr style={{ background: THEME_COLOR, color: "white" }}>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Section
                      </th>
                      <th style={{ padding: "10px", textAlign: "left" }}>
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {gatewaySpecs.map((spec, index) => (
                      <tr
                        key={index}
                        style={{
                          background: index % 2 === 0 ? "#f9f9f9" : "white",
                        }}
                      >
                        <td
                          style={{
                            padding: "8px 10px",
                            borderBottom: "1px solid #eee",
                            fontWeight: "600",
                            color: "#555",
                          }}
                        >
                          {spec.section}
                        </td>
                        <td
                          style={{
                            padding: "8px 10px",
                            borderBottom: "1px solid #eee",
                            color: "#666",
                          }}
                        >
                          {spec.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FeatureColumn>
          </FeaturesContainer>

          {/* 설명 박스 */}
          <div style={{ padding: "20px 40px" }}>
            <div
              style={{
                background: "#f8f9fa",
                border: `1px solid ${THEME_COLOR}44`,
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                <li>
                  <strong style={{ color: THEME_COLOR }}>H/W</strong> (각종
                  기계, 전기, 전력설비, 디바이스, 센서) 직접 데이터 수집 및
                  제어신호 송수신 가능
                </li>
                <li>
                  개별 관제, 범용 시스템 (각 디바이스별 개별 통신 및 독자플랫폼
                  연계) 형태 →{" "}
                  <strong style={{ color: THEME_COLOR }}>
                    통합관리제어 형태로 변경
                  </strong>
                </li>
              </ul>
            </div>
          </div>

          {/* 주요 화면 */}
          <SectionBar>주요 화면</SectionBar>
          <ScreensContainer>
            {screenData.map((screen, index) => (
              <ScreenItem key={index}>
                <ScreenDash>
                  {screen.image ? (
                    <img src={screen.image} alt={screen.title} />
                  ) : (
                    <DashPlaceholder>이미지 영역</DashPlaceholder>
                  )}
                </ScreenDash>
                <ScreenCaption>{screen.title}</ScreenCaption>
              </ScreenItem>
            ))}
          </ScreensContainer>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default IoT_main;

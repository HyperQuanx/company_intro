import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  BuProductSection,
  BuProductContainer,
  BuProductHeader,
  BuProductBadge,
  BuProductTitle,
  BuProductSubtitle,
  BuCertSection,
  BuCertImage,
  BuCertContent,
  BuCertFeatures,
  BuDeviceShowcase,
  BuDeviceCard,
  BuDeviceImage,
  BuDeviceName,
  BuDeviceDesc,
  BuFeatureList,
  BuFeatureItem,
} from "../../styles/NextcoreBu.styles";

// 디바이스 데이터
const DEVICE_DATA = [
  {
    name: "Desktop",
    desc: "관리자용 통합 대시보드 1",
    icon: "🖥️",
    image: "/business/08bu_0301.png", // 이미지 경로
  },
  {
    name: "Desktop",
    desc: "관리자용 통합 대시보드 2",
    icon: "🖥️",
    image: "/business/08bu_0302.png", // 이미지 경로
  },
  {
    name: "Mobile",
    desc: "모바일 알림 및 관리 앱",
    icon: "📲",
    image: "/business/08bu_04.png",
  },
  {
    name: "Kiosk",
    desc: "현장 안내 키오스크 시스템",
    icon: "🖲️",
    image: "/business/08bu_05.png",
  },
];

// 특징 데이터
const FEATURE_DATA = [
  {
    icon: "🛡️",
    title: "통합 안전관리",
    desc: "시설물 전체를 실시간으로 모니터링하고 위험 요소를 사전에 감지",
  },
  {
    icon: "🏗️",
    title: "3D 시각화",
    desc: "건물 및 시설물을 3D로 구현하여 직관적인 관리 환경 제공",
  },
  {
    icon: "📊",
    title: "데이터 분석",
    desc: "빅데이터 기반 분석으로 효율적인 의사결정 지원",
  },
  {
    icon: "🔔",
    title: "실시간 알림",
    desc: "이상 징후 발생 시 즉각적인 알림 및 대응 체계",
  },
  {
    icon: "📱",
    title: "멀티 디바이스",
    desc: "PC, 태블릿, 모바일, 키오스크 등 다양한 환경 지원",
  },
  {
    icon: "🔐",
    title: "보안 인증",
    desc: "정부 공인 보안 인증을 통한 안전한 데이터 관리",
  },
];

const BusinessProducts = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>주요 제품</HeroBannerTitle>
          <HeroBannerDescription>
            다양한 산업 환경에 최적화된 솔루션으로
            <br />
            통합 관제와 디지털 전환을 선도합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      {/* 메인 제품 소개 */}
      <BuProductSection>
        <BuProductContainer>
          <BuProductHeader>
            <BuProductBadge>정부조달 우수제품 인증</BuProductBadge>
            <BuProductTitle>
              <span>3D 기반</span> 디지털 안전관리 플랫폼
            </BuProductTitle>
            <BuProductSubtitle>
              산업관리소프트웨어 분야 정부조달 우수제품 인증을 획득한
              넥스트코어테크놀로지의 핵심 솔루션입니다. 3D 시각화 기술을
              기반으로 시설물의 통합 안전관리를 실현합니다.
            </BuProductSubtitle>
          </BuProductHeader>

          {/* 인증서 섹션 */}
          <BuCertSection>
            <BuCertImage>
              {/* 인증서 이미지 영역 */}
              <img src="/business/08bu_01.png" alt="우수제품지정증서" />
            </BuCertImage>
            <BuCertContent>
              <h3>
                조달청 <span>우수제품</span> 지정
              </h3>
              <p>
                넥스트코어테크놀로지의 "3D기반 디지털 안전관리 플랫폼"이
                조달사업에 관한 법률 제26조 및 동법시행령 제30조에 따라
                우수제품으로 지정되었습니다.
              </p>
              <BuCertFeatures>
                <li>지정번호: 2021030</li>
                <li>지정기간: 2021. 6. 7. ~ 2026. 6. 6.</li>
                <li>제품명: 3D기반 디지털 안전관리 플랫폼</li>
                <li>조달청장 직인 공식 인증</li>
              </BuCertFeatures>
            </BuCertContent>
          </BuCertSection>

          {/* 디바이스 쇼케이스 */}
          <BuDeviceShowcase>
            {DEVICE_DATA.map((device, index) => (
              <BuDeviceCard key={index}>
                <BuDeviceImage>
                  {device.image ? (
                    <img src={device.image} alt={device.name} />
                  ) : (
                    <div className="placeholder">
                      <span className="icon">{device.icon}</span>
                      {device.name} 이미지
                    </div>
                  )}
                </BuDeviceImage>
                <BuDeviceName>{device.name}</BuDeviceName>
                <BuDeviceDesc>{device.desc}</BuDeviceDesc>
              </BuDeviceCard>
            ))}
          </BuDeviceShowcase>

          {/* 특징 리스트 */}
          <BuFeatureList>
            {FEATURE_DATA.map((feature, index) => (
              <BuFeatureItem key={index}>
                <div className="icon">{feature.icon}</div>
                <div className="content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </BuFeatureItem>
            ))}
          </BuFeatureList>
        </BuProductContainer>
      </BuProductSection>
    </>
  );
};

export default BusinessProducts;

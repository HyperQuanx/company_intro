import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const BusinessPerformance = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>기술 개발 사업화 실적</HeroBannerTitle>
          <HeroBannerDescription>
            기술 개발부터 사업화까지 체계적인 수행 경험을 통해
            <br />
            안정적이고 신뢰할 수 있는 성과를 제공합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <div>여기에 작성해</div>
    </>
  );
};

export default BusinessPerformance;

import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

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

      <div>여기에 작성해</div>
    </>
  );
};

export default BusinessProducts;

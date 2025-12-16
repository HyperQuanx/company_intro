import React from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const AboutMou = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#4aa8d8"
        />
        <HeroBannerContent>
          <HeroBannerTitle>연혁</HeroBannerTitle>
          <HeroBannerDescription>
            넥스트코어테크놀로지가 걸어온 성장의 발자취와
            <br />
            주요 기술·사업 성과를 한눈에 확인하세요.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>
    </>
  );
};

export default AboutMou;

import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

// 재사용하려고 만들었는데 한 번도 못씀 ㅠ
const HeroBanner = ({
  title,
  description,
  bgImage = "/nextcore_text.png",
  bgColor = "#4aa8d8",
}) => {
  return (
    <SolutionHeroBanner>
      <HeroBannerBackground $bgImage={bgImage} $contain $bgColor={bgColor} />
      <HeroBannerContent>
        <HeroBannerTitle>{title}</HeroBannerTitle>
        <HeroBannerDescription>{description}</HeroBannerDescription>
      </HeroBannerContent>
    </SolutionHeroBanner>
  );
};

export default HeroBanner;

import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const ContactInquiry = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>문의하기</HeroBannerTitle>
          <HeroBannerDescription>
            프로젝트 목적과 환경에 맞춘 최적의 방안을 제안드립니다.
            <br />
            문의 내용을 남겨주시면 빠르게 회신드리겠습니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>
    </>
  );
};

export default ContactInquiry;

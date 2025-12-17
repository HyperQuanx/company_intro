import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const ContactRecruit = () => {
  return (
    <SolutionHeroBanner>
      <HeroBannerBackground
        $bgImage="/nextcore_text.png"
        $contain
        $bgColor="#b1b1b1"
      />
      <HeroBannerContent>
        <HeroBannerTitle>인재채용</HeroBannerTitle>
        <HeroBannerDescription>
          기술로 세상을 연결하고 사람과 함께 성장하는
          <br />
          넥스트코어테크놀로지의 여정에 동참하세요.
        </HeroBannerDescription>
      </HeroBannerContent>
    </SolutionHeroBanner>
  );
};

export default ContactRecruit;

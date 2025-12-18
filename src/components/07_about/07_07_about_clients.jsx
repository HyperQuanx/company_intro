import React from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

import ClientList from "../00_main/00_03_main_clientList";
import { PublicSContainer } from "../../styles/PublicS.styles";

const AboutClients = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>고객사</HeroBannerTitle>
          <HeroBannerDescription>
            다양한 산업 분야의 고객사와 구축한 신뢰를 바탕으로
            <br />
            현장 중심의 실질적인 디지털 전환 성과를 창출합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <ClientList />
      </PublicSContainer>
    </>
  );
};

export default AboutClients;

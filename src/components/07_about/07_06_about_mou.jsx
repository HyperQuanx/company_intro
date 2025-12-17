import React from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  MOUSection,
  MOUContainer,
  MOUTitle,
  MOUImageGrid,
  MOUImageCard,
  MOUImageCardHeader,
  MOUImageCardBody,
  AboutSectionTitle,
} from "../../styles/NextcoreAbout.styles";

const AboutMOU = () => {
  const mouList = [
    {
      id: 1,
      title: "SK텔레콤 중장제작",
      src: "/about/mou/mou_01.png",
    },
    {
      id: 2,
      title: "SK텔레콤 산업무원싹",
      src: "/about/mou/mou_02.png",
    },
    {
      id: 3,
      title: "한국중지협과 협력한 협약",
      src: "/about/mou/mou_03.png",
    },
    {
      id: 4,
      title: "한국중지협 MOU협약",
      src: "/about/mou/mou_04.png",
    },
    {
      id: 5,
      title: "(6)ICT MOU협약",
      src: "/about/mou/mou_05.png",
    },
    {
      id: 6,
      title: "(주)한국건설기술원 기술교류협약",
      src: "/about/mou/mou_06.png",
    },
    {
      id: 7,
      title: "한국서 산학협력협약",
      src: "/about/mou/mou_07.png",
    },
    {
      id: 8,
      title: "중국 연솔협약",
      src: "/about/mou/mou_08.png",
    },
    {
      id: 9,
      title: "산학협력협약",
      src: "/about/mou/mou_09.png",
    },
    {
      id: 10,
      title: "중국과 가족회사협약",
      src: "/about/mou/mou_10.png",
    },
    {
      id: 11,
      title: "기업 MOU협약",
      src: "/about/mou/mou_11.png",
    },
    {
      id: 12,
      title: "고려대 사업협력협약",
      src: "/about/mou/mou_12.png",
    },
  ];

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>기술 교류 및 MOU 실적</HeroBannerTitle>
          <HeroBannerDescription>
            국내외 주요 기업 및 연구기관과의 기술 교류 및 협력 MOU를 통해
            <br />
            지속적인 기술 혁신과 산업 발전을 추진하고 있습니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <MOUSection>
        <MOUContainer>
          <AboutSectionTitle>
            <h3>기술 교류 및 MOU 실적</h3>
          </AboutSectionTitle>

          <MOUImageGrid>
            {mouList.map((mou) => (
              <MOUImageCard key={mou.id}>
                <MOUImageCardHeader>{mou.title}</MOUImageCardHeader>
                <MOUImageCardBody>
                  <img
                    src={mou.src}
                    alt={mou.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </MOUImageCardBody>
              </MOUImageCard>
            ))}
          </MOUImageGrid>
        </MOUContainer>
      </MOUSection>
    </>
  );
};

export default AboutMOU;

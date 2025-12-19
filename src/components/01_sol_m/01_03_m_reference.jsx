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
  SectionBar,
  SolutionHeroBanner,
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerTitle,
  HeroBannerDescription,
  HeroBannerButton,
  SolutionNavWrapper,
  StyledLink,
  ScreensContainer,
  ScreenItem,
  ScreenDash,
  ScreenCaption,
} from "../../styles/Nextcare.styles";
import { THEME_COLOR, HERO_BG_IMAGE } from "../../styles/NextcareM.styles";

import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

const DashPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e8f1f7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #999;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-right: none;
  }
`;

const referenceData = [
  {
    title: "KT PTE2E 통합장비 운용팀",
    images: ["/solution_img/01m/m_ref01.png", "/solution_img/01m/m_ref02.png"],
  },
  {
    title: "LG이노와이어리스 OAM/MMS 시스템",
    images: ["/solution_img/01m/m_ref03.png"],
  },
  {
    title: "SKT FLOW NMS",
    images: ["/solution_img/01m/m_ref04.png"],
  },
  {
    title: "IBK 기업은행 통합 NMS 시스템",
    images: ["/solution_img/01m/m_ref05.png"],
  },
  {
    title: "인천국제공항 T2 IP 교환 실버관제 시스템",
    images: ["/solution_img/01m/m_ref06.png"],
  },
  {
    title: "SKT IDC센터 NMS",
    images: ["/solution_img/01m/m_ref07.png"],
  },
  {
    title: "수방사(KT) BTL 1.5",
    images: ["/solution_img/01m/m_ref08.png"],
  },
  {
    title: "코레일 철도공사",
    images: ["/solution_img/01m/m_ref09.png", "/solution_img/01m/m_ref10.png"],
  },
  {
    title: "군사업(해군, 인방사, 해작사) IPTNMS",
    images: ["/solution_img/01m/m_ref11.png", "/solution_img/01m/m_ref12.png"],
  },
  {
    title: "남양유업 시설물 관리 시스템",
    images: ["/solution_img/01m/m_ref13.png"],
  },
  {
    title: "서울교통공사 시설물 통합 관제 시스템",
    images: ["/solution_img/01m/m_ref14.png"],
  },
  {
    title: "한국 중부발전 K-Export Chain 메타버스 홍보관",
    images: ["/solution_img/01m/m_ref15.png"],
  },
  {
    title: "KT 파키스탄 IT Park Center 통합 관제",
    images: ["/solution_img/01m/m_ref16.png"],
  },
];

const M_reference = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;
  const THEME_COLOR = "#128AB0";

  // 구축 레퍼런스 사례들 (images 배열: 2개 이상이면 넓은 카드)

  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>구축 레퍼런스</HeroBannerTitle>
          <HeroBannerDescription>
            Nextcare-M이 실제로 구축된 다양한 프로젝트 사례를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton
            $themeColor={THEME_COLOR}
            href="/contact/inquiry?solution=Nextcare-M"
          >
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-m"
          className={isActivePath("/solutions/nextcare-m") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-M
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-m/features"
          className={
            isActivePath("/solutions/nextcare-m/features") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          도입효과와 주요기능
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-m/reference"
          className={
            isActivePath("/solutions/nextcare-m/reference") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          구축 레퍼런스
        </StyledLink>
      </SolutionNavWrapper>

      <PublicSContainer>
        <PageContainer>
          <ContentWrapper>
            {/* 헤더 */}
            <Header>
              <TopShape $themeColor={THEME_COLOR}>Nextcare-M</TopShape>
              <HeaderIcon $themeColor={THEME_COLOR}>
                <i className="fas fa-desktop"></i>
              </HeaderIcon>
              <HeaderTitle $themeColor={THEME_COLOR}>구축 레퍼런스</HeaderTitle>
            </Header>

            {/* 인트로 */}
            <IntroSection>
              <IntroBox>
                <IntroTitle $themeColor={THEME_COLOR}>Nextcare-M</IntroTitle>
                <IntroDescription>
                  네트워크, 시스템, 애플리케이션, 데이터베이스 등의 자원을
                  하나의 창에서 관리하기 위한 통합관리 솔루션의 구축 사례입니다.
                </IntroDescription>
              </IntroBox>
            </IntroSection>

            {/* 참고 사례 섹션 */}
            <SectionBar $themeColor={THEME_COLOR}>구축 사례</SectionBar>
            <ScreensContainer>
              {referenceData.map((screen, index) => (
                <ScreenItem
                  key={index}
                  $cols={screen.images.length}
                  $noTitle={!screen.title}
                >
                  <ScreenDash>
                    {screen.images.some((img) => img !== null)
                      ? screen.images.map((img, imgIndex) =>
                          img ? (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`${screen.title || "화면"} ${imgIndex + 1}`}
                            />
                          ) : (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          )
                        )
                      : screen.images.map((_, imgIndex) => (
                          <DashPlaceholder key={imgIndex}>
                            이미지 영역
                          </DashPlaceholder>
                        ))}
                  </ScreenDash>
                  {screen.title && (
                    <ScreenCaption>{screen.title}</ScreenCaption>
                  )}
                </ScreenItem>
              ))}
              {/* 빈 공간 채우기 */}
              {(() => {
                const totalCols = 4;
                const usedCols = referenceData.reduce(
                  (acc, screen) => acc + screen.images.length,
                  0
                );
                const remainder = usedCols % totalCols;
                const emptySlots = remainder === 0 ? 0 : totalCols - remainder;
                return Array.from({ length: emptySlots }).map((_, index) => (
                  <ScreenItem key={`empty-${index}`} $placeholder>
                    <ScreenDash>
                      <DashPlaceholder>추후 추가 예정입니다.</DashPlaceholder>
                    </ScreenDash>
                    <ScreenCaption>Coming Soon</ScreenCaption>
                  </ScreenItem>
                ));
              })()}
            </ScreensContainer>
          </ContentWrapper>
        </PageContainer>
      </PublicSContainer>
    </>
  );
};

export default M_reference;

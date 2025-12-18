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
} from "../../styles/Nextcare.styles";

import {
  THEME_COLOR,
  HERO_BG_IMAGE,
  ReferenceGrid,
  ReferenceSection,
  ReferenceCard,
  ReferenceDash,
  DashPlaceholder,
  ReferenceTitle,
  EmptyPlaceholder,
  EmptyText,
  EmptyLabel,
} from "../../styles/NextcareE.styles";
import { useLocation } from "react-router-dom";
import { PublicSContainer } from "../../styles/PublicS.styles";

const E_reference = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  // BEMS 구축 사례 (images 배열: 2개 이상이면 카드 병합)
  const bemsReferences = [
    {
      title: "BEMS 대시보드",
      images: ["/solution_img/02e/e_ref01.png"],
    },
    {
      title: "BEMS 공조기 제어 관리 화면",
      images: ["/solution_img/02e/e_ref02.png"],
    },
    {
      title: "빌딩 에너지 관리 화면",
      images: ["/solution_img/02e/e_ref03.png"],
    },
  ];

  // FEMS 구축 사례 (images 배열: 2개 이상이면 카드 병합)
  const femsReferences = [
    {
      title: "FEMS 대시보드",
      images: ["/solution_img/02e/e_ref04.png"],
    },
    {
      title: "FEMS 대시보드 구축 (중앙)",
      images: ["/solution_img/02e/e_ref05.png"],
    },
    {
      title: "공장 설비 에너지관리 화면",
      images: ["/solution_img/02e/e_ref06.png"],
    },
  ];

  const rezReferences = [
    {
      images: ["/solution_img/02e/e_ref07.png"],
    },
    {
      images: ["/solution_img/02e/e_ref08.png"],
    },
  ];

  // 기타 구축 사례 (images 배열: 2개 이상이면 카드 병합)
  const otherReferences = [
    {
      title: "국토부 건물 외장재 관리 시스템",
      images: ["/solution_img/02e/e_ref09.png"],
    },
    {
      title: "국토부 REMS (신재생에너지 관제 시스템)",
      images: ["/solution_img/02e/e_ref10.png"],
    },
    {
      title: "대기현황 관리 시스템",
      images: ["/solution_img/02e/e_ref11.png"],
    },
    {
      title: "충북대 GIS 기반 건물 에너지 관리 시스템",
      images: ["/solution_img/02e/e_ref12.png"],
    },
  ];

  return (
    <>
      {/* 히어로 배너 */}
      <SolutionHeroBanner>
        <HeroBannerBackground $bgImage={HERO_BG_IMAGE} />
        <HeroBannerContent>
          <HeroBannerTitle>구축 레퍼런스</HeroBannerTitle>
          <HeroBannerDescription>
            Nextcare-E가 실제로 구축된 다양한 프로젝트 사례를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton
            $themeColor={THEME_COLOR}
            href="/contact/inquiry?solution=Nextcare-E"
          >
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-e"
          className={isActivePath("/solutions/nextcare-e") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-E
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-e/features"
          className={
            isActivePath("/solutions/nextcare-e/features") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          도입효과와 주요기능
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-e/reference"
          className={
            isActivePath("/solutions/nextcare-e/reference") ? "active" : ""
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
              <TopShape $themeColor={THEME_COLOR}>Nextcare-E</TopShape>
              <HeaderIcon $themeColor={THEME_COLOR}>
                <i className="fas fa-bolt"></i>
              </HeaderIcon>
              <HeaderTitle $themeColor={THEME_COLOR}>구축 레퍼런스</HeaderTitle>
            </Header>

            {/* 인트로 */}
            <IntroSection>
              <IntroBox>
                <IntroTitle $themeColor={THEME_COLOR}>Nextcare-E</IntroTitle>
                <IntroDescription>
                  전기, 열, 가스 등의 에너지의 시각화나 설비의 최적 운용 등을
                  통해 에너지의 합리적 소비를 실현하는 솔루션의 구축 사례입니다.
                </IntroDescription>
              </IntroBox>
            </IntroSection>

            {/* 구축 사례 */}
            <ReferenceSection>
              <SectionBar $themeColor={THEME_COLOR}>
                보바스 병원 BEMS(빌딩 에너지 관제 시스템)
              </SectionBar>
              <ReferenceGrid>
                {bemsReferences.map((reference, index) => (
                  <ReferenceCard key={index}>
                    <ReferenceDash $cols={reference.images.length}>
                      {reference.images.some((img) => img !== null)
                        ? reference.images.map((img, imgIndex) =>
                            img ? (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`${reference.title} ${imgIndex + 1}`}
                              />
                            ) : (
                              <DashPlaceholder key={imgIndex}>
                                이미지 영역
                              </DashPlaceholder>
                            )
                          )
                        : reference.images.map((_, imgIndex) => (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          ))}
                    </ReferenceDash>
                    <ReferenceTitle>{reference.title}</ReferenceTitle>
                  </ReferenceCard>
                ))}
              </ReferenceGrid>
            </ReferenceSection>

            {/* FEMS 구축 사례 */}
            <ReferenceSection>
              <SectionBar $themeColor={THEME_COLOR}>
                세홍공장 FEMS (공장 에너지 관리 시스템)
              </SectionBar>
              <ReferenceGrid>
                {femsReferences.map((reference, index) => (
                  <ReferenceCard key={index}>
                    <ReferenceDash $cols={reference.images.length}>
                      {reference.images.some((img) => img !== null)
                        ? reference.images.map((img, imgIndex) =>
                            img ? (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`${reference.title} ${imgIndex + 1}`}
                              />
                            ) : (
                              <DashPlaceholder key={imgIndex}>
                                이미지 영역
                              </DashPlaceholder>
                            )
                          )
                        : reference.images.map((_, imgIndex) => (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          ))}
                    </ReferenceDash>
                    <ReferenceTitle>{reference.title}</ReferenceTitle>
                  </ReferenceCard>
                ))}
                {(() => {
                  const totalCols = 3;
                  const usedCols = femsReferences.reduce(
                    (acc, ref) => acc + ref.images.length,
                    0
                  );
                  const remainder = usedCols % totalCols;
                  const emptySlots =
                    remainder === 0 ? 0 : totalCols - remainder;
                  return Array.from({ length: emptySlots }).map((_, index) => (
                    <ReferenceCard key={`empty-${index}`}>
                      <EmptyPlaceholder>
                        <EmptyText>추후 추가 예정입니다.</EmptyText>
                        <EmptyLabel>Coming Soon</EmptyLabel>
                      </EmptyPlaceholder>
                    </ReferenceCard>
                  ));
                })()}
              </ReferenceGrid>
            </ReferenceSection>

            <ReferenceSection>
              <SectionBar $themeColor={THEME_COLOR}>
                레즐러 태양광 발전소 관리 시스템
              </SectionBar>
              <ReferenceGrid>
                {rezReferences.map((reference, index) => (
                  <ReferenceCard key={index}>
                    <ReferenceDash $cols={reference.images.length}>
                      {reference.images.some((img) => img !== null)
                        ? reference.images.map((img, imgIndex) =>
                            img ? (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`${reference.title} ${imgIndex + 1}`}
                              />
                            ) : (
                              <DashPlaceholder key={imgIndex}>
                                이미지 영역
                              </DashPlaceholder>
                            )
                          )
                        : reference.images.map((_, imgIndex) => (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          ))}
                    </ReferenceDash>
                    <ReferenceTitle>{reference.title}</ReferenceTitle>
                  </ReferenceCard>
                ))}
                {(() => {
                  const totalCols = 3;
                  const usedCols = rezReferences.reduce(
                    (acc, ref) => acc + ref.images.length,
                    0
                  );
                  const remainder = usedCols % totalCols;
                  const emptySlots =
                    remainder === 0 ? 0 : totalCols - remainder;
                  return Array.from({ length: emptySlots }).map((_, index) => (
                    <ReferenceCard key={`empty-${index}`}>
                      <EmptyPlaceholder>
                        <EmptyText>추후 추가 예정입니다.</EmptyText>
                        <EmptyLabel>Coming Soon</EmptyLabel>
                      </EmptyPlaceholder>
                    </ReferenceCard>
                  ));
                })()}
              </ReferenceGrid>
            </ReferenceSection>

            {/* 기타 구축 사례 */}
            <ReferenceSection>
              <SectionBar $themeColor={THEME_COLOR}>기타 구축 사례</SectionBar>
              <ReferenceGrid>
                {otherReferences.map((reference, index) => (
                  <ReferenceCard key={index}>
                    <ReferenceDash $cols={reference.images.length}>
                      {reference.images.some((img) => img !== null)
                        ? reference.images.map((img, imgIndex) =>
                            img ? (
                              <img
                                key={imgIndex}
                                src={img}
                                alt={`${reference.title} ${imgIndex + 1}`}
                              />
                            ) : (
                              <DashPlaceholder key={imgIndex}>
                                이미지 영역
                              </DashPlaceholder>
                            )
                          )
                        : reference.images.map((_, imgIndex) => (
                            <DashPlaceholder key={imgIndex}>
                              이미지 영역
                            </DashPlaceholder>
                          ))}
                    </ReferenceDash>
                    <ReferenceTitle>{reference.title}</ReferenceTitle>
                  </ReferenceCard>
                ))}
                {(() => {
                  const totalCols = 3;
                  const usedCols = otherReferences.reduce(
                    (acc, ref) => acc + ref.images.length,
                    0
                  );
                  const remainder = usedCols % totalCols;
                  const emptySlots =
                    remainder === 0 ? 0 : totalCols - remainder;
                  return Array.from({ length: emptySlots }).map((_, index) => (
                    <ReferenceCard key={`empty-${index}`}>
                      <EmptyPlaceholder>
                        <EmptyText>추후 추가 예정입니다.</EmptyText>
                        <EmptyLabel>Coming Soon</EmptyLabel>
                      </EmptyPlaceholder>
                    </ReferenceCard>
                  ));
                })()}
              </ReferenceGrid>
            </ReferenceSection>
          </ContentWrapper>
        </PageContainer>
      </PublicSContainer>
    </>
  );
};

export default E_reference;

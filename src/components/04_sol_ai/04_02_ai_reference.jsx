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
  ReferenceImageArea,
  ReferenceTitle,
  ReferenceGrid4,
} from "../../styles/NextcareAI.styles";
import { useLocation } from "react-router-dom";
import { ReferenceDash } from "../../styles/NextcareE.styles";

const AI_reference = () => {
  const location = useLocation();
  const isActivePath = (path) => location.pathname === path;

  // AI (BigData) 기술 구축 레퍼런스
  const aiTechReferences = [
    {
      images: ["/solution_img/04ai/ai_ref01.png"],
    },
    {
      images: ["/solution_img/04ai/ai_ref02.png"],
    },
    {
      images: ["/solution_img/04ai/ai_ref03.png"],
    },
  ];

  // 기계학습 알고리즘 기반 구축 사례
  const mlReferences = [
    {
      images: ["/solution_img/04ai/ai_ref04.png"],
    },
    {
      images: ["/solution_img/04ai/ai_ref05.png"],
    },
    {
      images: ["/solution_img/04ai/ai_ref06.png"],
    },
    {
      images: ["/solution_img/04ai/ai_ref07.png"],
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
            Nextcare-AI가 실제로 구축된 다양한 프로젝트 사례를
            <br />
            확인해보세요.
          </HeroBannerDescription>
          <HeroBannerButton $themeColor={THEME_COLOR} href="/contact/inquiry">
            전문가 문의하기
          </HeroBannerButton>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <SolutionNavWrapper>
        <StyledLink
          to="/solutions/nextcare-ai"
          className={isActivePath("/solutions/nextcare-ai") ? "active" : ""}
          $themeColor={THEME_COLOR}
        >
          Nextcare-AI
        </StyledLink>
        <StyledLink
          to="/solutions/nextcare-ai/reference"
          className={
            isActivePath("/solutions/nextcare-ai/reference") ? "active" : ""
          }
          $themeColor={THEME_COLOR}
        >
          구축 레퍼런스
        </StyledLink>
      </SolutionNavWrapper>

      <PageContainer>
        <ContentWrapper>
          {/* 헤더 */}
          <Header>
            <TopShape $themeColor={THEME_COLOR}>Nextcare-AI</TopShape>
            <HeaderIcon $themeColor={THEME_COLOR}>
              <i className="fas fa-brain"></i>
            </HeaderIcon>
            <HeaderTitle $themeColor={THEME_COLOR}>구축 레퍼런스</HeaderTitle>
          </Header>

          {/* 인트로 */}
          <IntroSection>
            <IntroBox>
              <IntroTitle $themeColor={THEME_COLOR}>Nextcare-AI</IntroTitle>
              <IntroDescription>
                빅데이터 기반 기계학습 솔루션으로, 중대산업사건 관리에 있어
                최적의 인공지능 기반의 구축 사례입니다.
              </IntroDescription>
            </IntroBox>
          </IntroSection>

          {/* AI (BigData) 기술 구축 레퍼런스 */}
          <ReferenceSection>
            <SectionBar $themeColor={THEME_COLOR}>
              빅데이터 기반 데이터 분석 및 예측 시스템 (SKT/SKB FLOW NMS)
            </SectionBar>
            <ReferenceGrid>
              {aiTechReferences.map((reference, index) => (
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
                const usedCols = aiTechReferences.reduce(
                  (acc, ref) => acc + ref.images.length,
                  0
                );
                const remainder = usedCols % totalCols;
                const emptySlots = remainder === 0 ? 0 : totalCols - remainder;
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

          {/* 기계학습 알고리즘 기반 구축 사례 */}
          <ReferenceSection>
            <SectionBar $themeColor={THEME_COLOR}>
              기계학습 영상분석 기술 활용 방역 시스템 (안전관리 시스템)
            </SectionBar>
            <ReferenceGrid4>
              {mlReferences.map((reference, index) => (
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
                const totalCols = 4;
                const usedCols = mlReferences.reduce(
                  (acc, ref) => acc + ref.images.length,
                  0
                );
                const remainder = usedCols % totalCols;
                const emptySlots = remainder === 0 ? 0 : totalCols - remainder;
                return Array.from({ length: emptySlots }).map((_, index) => (
                  <ReferenceCard key={`empty-${index}`}>
                    <EmptyPlaceholder>
                      <EmptyText>추후 추가 예정입니다.</EmptyText>
                      <EmptyLabel>Coming Soon</EmptyLabel>
                    </EmptyPlaceholder>
                  </ReferenceCard>
                ));
              })()}
            </ReferenceGrid4>
          </ReferenceSection>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default AI_reference;

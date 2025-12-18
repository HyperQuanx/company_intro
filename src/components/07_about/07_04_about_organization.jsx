import React from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

import {
  OrgSection,
  OrgContainer,
  OrgSectionKicker,
  OrgSectionTitle,
  OrgTwoCol,
  OrgCard,
  OrgCardHeader,
  OrgCardTitle,
  OrgCardSubTitle,
  OrgDiagramWrap,
  OrgPeopleTable,
  OrgTHead,
  OrgTBody,
  OrgTr,
  OrgTh,
  OrgTd,
  OrgTableCaption,
  OrgInline,
  OrgBadge,
  OrgNodeTop,
  OrgNodeTitle,
  OrgNodePills,
  OrgNodePill,
  OrgCenterRing,
  OrgCenterCore,
  OrgNodeLeft,
  OrgNodeRight,
  OrgCenterStage,
  OrgNodeBottom,
  OrgCenterSub,
  OrgAnchorDot,
  OrgBottomHeader,
  OrgBottomBadge,
  OrgTeamsGrid,
  OrgTeamList,
  OrgTeamCard,
  OrgTeamTitle,
  OrganiContainer,
  OrganiCenterWrapper,
  OrganiCenterRing,
  OrganiCenterInner,
  OrganiConnectorVertical,
  OrganiConnectorHorizontal,
  OrganiBranchWrapper,
  OrganiDeptTitleBox,
  OrganiTeamsRowWrapper,
  OrganiTeamBox,
  OrganiSideBranchContainer,
  OrganiSideTeamsWrapper,
  OrganiSideTeamBox,
  OrganiBottomSectionWrapper,
  OrganiTechColumnsGrid,
  OrganiTechColumn,
  OrganiTechTeamTitle,
  OrganiTechItemBox,
  OrganiMiddleRow,
  OrganiLabelBubble,
  AboutSectionTitle,
} from "../../styles/NextcoreAbout.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

const colors = {
  primaryBlue: "#5B9BD5",
  primaryGreen: "#A9D18E",
  primaryTeal: "#4AB7B6",
  lightBlueBg: "#E7F3FF",
  lightGreenBg: "#EBF7E3",
};

const AboutOrganization = () => {
  // 슬라이드 기반 조직 구성(필요 시 명칭만 교체)
  // const org = {
  //   top: {
  //     title: "경영지원부",
  //     items: ["재무 회계", "혜택·경영관리 지원", "전략 기획"],
  //   },
  //   left: { title: "R&D 연구부", items: ["에너지", "안전"] },
  //   right: { title: "영업지원부", items: ["공공·금융 사업", "ICT·개발 사업"] },
  //   bottom: {
  //     title: "기술부",
  //     groups: [
  //       {
  //         title: "솔루션1팀",
  //         items: ["ICT 관제", "IoT 관제", "5G·서비스", "스마트팩토리"],
  //       },
  //       {
  //         title: "솔루션2팀",
  //         items: ["에너지 관제", "안전 관제", "빅데이터·AI"],
  //       },
  //       { title: "디자인팀", items: ["웹", "모바일", "솔루션 UI/UX"] },
  //     ],
  //   },
  // };

  // 인력 구성 표(슬라이드 수치 그대로)
  const peopleRows = [
    { grade: "특급기술자", mgr: 1, dev: 1, total: 2 },
    { grade: "고급기술자", mgr: 1, dev: 4, total: 5 },
    { grade: "중급기술자", mgr: 1, dev: 4, total: 5 },
    { grade: "초급기술자", mgr: 0, dev: 1, total: 1 },
    { grade: "기타", mgr: 1, dev: 1, total: 2 },
  ];
  const sum = peopleRows.reduce(
    (acc, r) => ({
      mgr: acc.mgr + r.mgr,
      dev: acc.dev + r.dev,
      total: acc.total + r.total,
    }),
    { mgr: 0, dev: 0, total: 0 }
  );

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>조직도 및 구성</HeroBannerTitle>
          <HeroBannerDescription>
            ICT 기술부문의 엔지니어와 개발자로 구성된 전문성을 기반으로
            <br />
            사업 수행에 최적화된 조직 및 인력 구성을 운영합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <OrgSection>
          <OrgContainer>
            <AboutSectionTitle>
              <h3>조직도</h3>
            </AboutSectionTitle>
            <OrgTwoCol>
              <OrganiContainer>
                {/* 상단 타이틀 라벨 (image_1 참조) */}
                <OrganiLabelBubble>
                  ICT 기술분야의 엔지니어와 개발자로 구성된 전문성 보유
                </OrganiLabelBubble>

                {/* --- Top Branch (경영지원부) --- */}
                <OrganiBranchWrapper>
                  <OrganiDeptTitleBox bgColor={colors.primaryBlue}>
                    경영지원부
                  </OrganiDeptTitleBox>
                  <OrganiTeamsRowWrapper>
                    <OrganiTeamBox bgColor={colors.lightBlueBg}>
                      재무 회계
                    </OrganiTeamBox>
                    <OrganiTeamBox bgColor={colors.lightBlueBg}>
                      혜택·경영관리 지원
                    </OrganiTeamBox>
                    <OrganiTeamBox bgColor={colors.lightBlueBg}>
                      전략 기획
                    </OrganiTeamBox>
                  </OrganiTeamsRowWrapper>
                  <OrganiConnectorVertical height="30px" />
                </OrganiBranchWrapper>

                {/* --- Middle Row (좌측 - 중앙 - 우측) --- */}
                <OrganiMiddleRow>
                  {/* Left Branch (R&D 연구부) */}
                  <OrganiSideBranchContainer direction="left">
                    <OrganiSideTeamsWrapper direction="left">
                      <OrganiSideTeamBox
                        direction="left"
                        bgColor={colors.lightGreenBg}
                      >
                        에너지
                      </OrganiSideTeamBox>
                      <OrganiSideTeamBox
                        direction="left"
                        bgColor={colors.lightGreenBg}
                      >
                        안전
                      </OrganiSideTeamBox>
                    </OrganiSideTeamsWrapper>
                    <OrganiDeptTitleBox bgColor={colors.primaryGreen}>
                      R&D 연구부
                    </OrganiDeptTitleBox>
                    <OrganiConnectorHorizontal width="3.5rem" />
                  </OrganiSideBranchContainer>

                  {/* Center Node (대표이사) */}
                  <OrganiCenterWrapper>
                    <OrganiCenterRing />
                    <OrganiCenterInner>대표이사</OrganiCenterInner>
                  </OrganiCenterWrapper>

                  {/* Right Branch (영업지원부 - image_0 콘텐츠 반영 불명확하여 image_1 구조 사용하되 텍스트는 0번 참조 시도) */}
                  {/* image_0의 우측이 잘려있어 image_1의 구조를 따르되, 식별 가능한 텍스트를 넣습니다. */}
                  <OrganiSideBranchContainer direction="right">
                    <OrganiDeptTitleBox bgColor={colors.primaryBlue}>
                      영업지원부
                    </OrganiDeptTitleBox>
                    <OrganiSideTeamsWrapper direction="right">
                      {/* image_0에서 'ICT·개발 사업'이 보임. image_1 구조에 맞춤 */}
                      <OrganiSideTeamBox
                        direction="right"
                        bgColor={colors.lightBlueBg}
                      >
                        ICT·개발 사업
                      </OrganiSideTeamBox>
                      {/* image_1의 내용 대체 */}
                      <OrganiSideTeamBox
                        direction="right"
                        bgColor={colors.lightBlueBg}
                      >
                        공공, 국방 사업
                      </OrganiSideTeamBox>
                    </OrganiSideTeamsWrapper>
                  </OrganiSideBranchContainer>
                </OrganiMiddleRow>

                {/* --- Bottom Branch (기술부 - 핵심 수행조직) --- */}
                <OrganiBottomSectionWrapper>
                  <OrganiConnectorVertical height="30px" />
                  <OrganiDeptTitleBox bgColor={colors.primaryTeal}>
                    기술부
                  </OrganiDeptTitleBox>

                  {/* 기술부 하위 트리 구조 */}
                  <OrganiTechColumnsGrid>
                    {/* 솔루션1팀 */}
                    <OrganiTechColumn>
                      <OrganiTechTeamTitle>솔루션1팀</OrganiTechTeamTitle>
                      <OrganiTechItemBox>ICT 관제</OrganiTechItemBox>
                      <OrganiTechItemBox>IoT 관제</OrganiTechItemBox>
                      <OrganiTechItemBox>5G·서비스</OrganiTechItemBox>
                      <OrganiTechItemBox>스마트팩토리</OrganiTechItemBox>
                    </OrganiTechColumn>

                    {/* 솔루션2팀 */}
                    <OrganiTechColumn>
                      <OrganiTechTeamTitle>솔루션2팀</OrganiTechTeamTitle>
                      <OrganiTechItemBox>에너지 관제</OrganiTechItemBox>
                      <OrganiTechItemBox>안전 관제</OrganiTechItemBox>
                      <OrganiTechItemBox>빅데이터·AI</OrganiTechItemBox>
                    </OrganiTechColumn>

                    {/* 디자인팀 */}
                    <OrganiTechColumn>
                      <OrganiTechTeamTitle>디자인팀</OrganiTechTeamTitle>
                      <OrganiTechItemBox>웹</OrganiTechItemBox>
                      <OrganiTechItemBox>모바일</OrganiTechItemBox>
                      <OrganiTechItemBox>솔루션 UI/UX</OrganiTechItemBox>
                    </OrganiTechColumn>
                  </OrganiTechColumnsGrid>
                </OrganiBottomSectionWrapper>
              </OrganiContainer>

              {/* 우측: 인력 구성 */}
              <AboutSectionTitle>
                <h3>인력 구성</h3>
              </AboutSectionTitle>

              <OrgCard>
                <OrgCardHeader>
                  <OrgCardSubTitle>
                    프로젝트 수행을 위한 기술 인력 현황
                  </OrgCardSubTitle>
                </OrgCardHeader>

                <OrgPeopleTable>
                  <OrgTHead>
                    <OrgTr>
                      <OrgTh rowSpan={2}>구분</OrgTh>
                      <OrgTh colSpan={3}>인원</OrgTh>
                    </OrgTr>
                    <OrgTr>
                      <OrgTh>관리직</OrgTh>
                      <OrgTh>개발직</OrgTh>
                      <OrgTh>계</OrgTh>
                    </OrgTr>
                  </OrgTHead>

                  <OrgTBody>
                    {peopleRows.map((r) => (
                      <OrgTr key={r.grade}>
                        <OrgTd $left>{r.grade}</OrgTd>
                        <OrgTd>{r.mgr}</OrgTd>
                        <OrgTd>{r.dev}</OrgTd>
                        <OrgTd $strong>{r.total}</OrgTd>
                      </OrgTr>
                    ))}

                    <OrgTr>
                      <OrgTd $left $strong>
                        합계
                      </OrgTd>
                      <OrgTd $strong>{sum.mgr}</OrgTd>
                      <OrgTd $strong>{sum.dev}</OrgTd>
                      <OrgTd $strong>{sum.total}</OrgTd>
                    </OrgTr>
                  </OrgTBody>
                </OrgPeopleTable>

                <OrgTableCaption>
                  ※ 표기 인원은 내부 운영 기준이며, 프로젝트 규모/범위에 따라
                  투입 인력은 조정될 수 있습니다.
                </OrgTableCaption>

                <OrgInline style={{ marginTop: 14 }}>
                  <OrgBadge>PM/아키텍트 포함</OrgBadge>
                  <OrgBadge $tone="neutral">개발·운영·디자인 협업</OrgBadge>
                </OrgInline>
              </OrgCard>
            </OrgTwoCol>
          </OrgContainer>
        </OrgSection>
      </PublicSContainer>
    </>
  );
};

export default AboutOrganization;

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
  OrgTopRow,
  OrgCenter,
  OrgRing,
  OrgCenterLabel,
  OrgArm,
  OrgGroup,
  OrgGroupTitle,
  OrgPills,
  OrgPill,
  OrgPeopleTable,
  OrgTHead,
  OrgTBody,
  OrgTr,
  OrgTh,
  OrgTd,
  OrgTableCaption,
  OrgInline,
  OrgBadge,
} from "../../styles/NextcoreAbout.styles";

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
          $bgColor="#4aa8d8"
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

      <OrgSection>
        <OrgContainer>
          <OrgSectionTitle>조직도 및 인력 구성</OrgSectionTitle>

          <OrgTwoCol>
            {/* 좌측: 조직도 */}
            <OrgCard>
              <OrgCardHeader>
                <OrgCardTitle>조직도</OrgCardTitle>
                <OrgCardSubTitle>업무 영역별 전담 조직 운영</OrgCardSubTitle>
              </OrgCardHeader>

              <OrgDiagramWrap>
                {/* TOP: 경영지원부 */}
                <OrgNodeTop>
                  <OrgNodeTitle>경영지원부</OrgNodeTitle>
                  <OrgNodePills>
                    <OrgNodePill $tone="blue">재무 회계</OrgNodePill>
                    <OrgNodePill $tone="blue">혜택·경영관리 지원</OrgNodePill>
                    <OrgNodePill $tone="blue">전략 기획</OrgNodePill>
                  </OrgNodePills>
                </OrgNodeTop>

                {/* LEFT: R&D */}
                <OrgNodeLeft>
                  <OrgNodeTitle>R&amp;D 연구부</OrgNodeTitle>
                  <OrgNodePills>
                    <OrgNodePill $tone="green">에너지</OrgNodePill>
                    <OrgNodePill $tone="green">안전</OrgNodePill>
                  </OrgNodePills>
                </OrgNodeLeft>

                {/* RIGHT: 영업지원부 */}
                <OrgNodeRight>
                  <OrgNodeTitle>영업지원부</OrgNodeTitle>
                  <OrgNodePills>
                    <OrgNodePill $tone="blue">공공·금융 사업</OrgNodePill>
                    <OrgNodePill $tone="blue">ICT·개발 사업</OrgNodePill>
                  </OrgNodePills>
                </OrgNodeRight>

                {/* CENTER: 대표이사 링 */}
                <OrgCenterStage>
                  <OrgCenterRing aria-hidden />
                  <OrgCenterCore>
                    <div>대표이사</div>
                    <OrgCenterSub>CEO</OrgCenterSub>
                  </OrgCenterCore>

                  {/* 연결 점/라인 (CSS로 처리) */}
                  <OrgAnchorDot $pos="top" />
                  <OrgAnchorDot $pos="right" />
                  <OrgAnchorDot $pos="bottom" />
                  <OrgAnchorDot $pos="left" />
                </OrgCenterStage>

                {/* BOTTOM: 기술부 + 팀 구성 */}
                <OrgNodeBottom>
                  <OrgBottomHeader>
                    <OrgNodeTitle>기술부</OrgNodeTitle>
                    <OrgBottomBadge>핵심 수행조직</OrgBottomBadge>
                  </OrgBottomHeader>

                  <OrgTeamsGrid>
                    <OrgTeamCard>
                      <OrgTeamTitle>솔루션1팀</OrgTeamTitle>
                      <OrgTeamList>
                        <li>ICT 관제</li>
                        <li>IoT 관제</li>
                        <li>5G·서비스</li>
                        <li>스마트팩토리</li>
                      </OrgTeamList>
                    </OrgTeamCard>

                    <OrgTeamCard>
                      <OrgTeamTitle>솔루션2팀</OrgTeamTitle>
                      <OrgTeamList>
                        <li>에너지 관제</li>
                        <li>안전 관제</li>
                        <li>빅데이터·AI</li>
                      </OrgTeamList>
                    </OrgTeamCard>

                    <OrgTeamCard>
                      <OrgTeamTitle>디자인팀</OrgTeamTitle>
                      <OrgTeamList>
                        <li>웹</li>
                        <li>모바일</li>
                        <li>솔루션 UI/UX</li>
                      </OrgTeamList>
                    </OrgTeamCard>
                  </OrgTeamsGrid>
                </OrgNodeBottom>
              </OrgDiagramWrap>
            </OrgCard>

            {/* 우측: 인력 구성 */}
            <OrgCard>
              <OrgCardHeader>
                <OrgCardTitle>인력 구성</OrgCardTitle>
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
                ※ 표기 인원은 내부 운영 기준이며, 프로젝트 규모/범위에 따라 투입
                인력은 조정될 수 있습니다.
              </OrgTableCaption>

              <OrgInline style={{ marginTop: 14 }}>
                <OrgBadge>PM/아키텍트 포함</OrgBadge>
                <OrgBadge $tone="neutral">개발·운영·디자인 협업</OrgBadge>
              </OrgInline>
            </OrgCard>
          </OrgTwoCol>
        </OrgContainer>
      </OrgSection>
    </>
  );
};

export default AboutOrganization;

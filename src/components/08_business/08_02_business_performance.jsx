import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

import {
  BuPerPage,
  BuPerSection,
  BuPerContainer,
  BuPerIntro,
  BuPerIntroTitle,
  BuPerIntroDesc,
  BuPerDivider,
  BuPerTimelineArea,
  BuPerTimelineHeader,
  BuPerTimelineTitle,
  BuPerTimelineSub,
  BuPerStairs,
  BuPerStep,
  BuPerStepYear,
  BuPerStepBody,
  BuPerStepDesc,
  BuPerBadge,
  BuPerCtaRow,
  BuPerTable,
  BuPerThead,
  BuPerTr,
  BuPerTh,
  BuPerTbody,
  BuPerTd,
  BuPerSectionTitle,
  BuPerTableWrapper,
  BuPerVerticalHeader,
  BuPerListTd,
  BuPerList,
} from "../../styles/NextcoreBu.styles";
import { AboutSectionTitle } from "../../styles/NextcoreAbout.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

const timelineData = [
  {
    year: "2015",
    desc: "LTE망 장애 탐지를 위한 빅데이터 기반 지능형 플랫폼 개발",
    highlights: [
      "SKT/KT/LG 등 주요 통신사 네트워크망 통합관제 플랫폼 기술이전",
      "상용화 확장",
    ],
  },
  {
    year: "2017",
    desc: "에너지효율 20% 향상을 위한 임베디드 리눅스 IoT 플랫폼 기반 BEMS 개발",
    highlights: [
      "에이엠 FEMS 구축·개발 계약",
      "롯데정보통신·보바스기념병원 BEMS 구축",
    ],
  },
  {
    year: "2019",
    desc: "인지형 IoT 게이트웨이 기반 스마트 제조공정관리 플랫폼",
    highlights: [
      "세종 스마트 제조공정관리 플랫폼 구축",
      "제조공정 통합관리 플랫폼 개발",
    ],
  },
  {
    year: "2020",
    desc: "화력발전소 위치기반 작업자 안전사고 예방 및 대응 기술 개발",
    highlights: [
      "롯데케미칼·한국서부발전 안전관리 시스템",
      "사업화 통한 피폭 선량 통합 안전관리 플랫폼 개발(연계)",
    ],
  },
  {
    year: "2022",
    desc: "ALARA 분석·평가 프로그램 및 3D-BIM 기반 심감·몰입형 피폭 선량 예측 진단 통합시스템 기술개발",
    highlights: [
      "한국서부발전 사업화 및 한국동서발전 MOU",
      "원전 해체·방사선 안전관리 플랫폼 개발",
    ],
  },
];

const projectHistory = [
  {
    year: "2015",
    agency: "중소기업기술정보진흥원",
    term: "(주관)12개월",
    title: "LTE망 장애 탐지를 위한 빅데이터 기반 지능형 플랫폼 개발",
    bold: true,
  },
  {
    year: "2016",
    agency: "중소기업기술정보진흥원",
    term: "(주관)6개월",
    title: "클라우드 기반 N스크린 통합관제 시스템",
  },
  {
    year: "2017",
    agency: "에너지기술평가원",
    term: "(주관)24개월",
    title: "에너지 수요 예측형 스마트 BEMS 플랫폼 기술개발",
  },
  {
    year: "2017",
    agency: "국토교통과학기술진흥원",
    term: "(참여)32개월",
    title: "발전성능을 갖는 플라스틱 신소재를 적용한 건물외장재 개발",
  },
  {
    year: "2017",
    agency: "정보통신산업진흥원",
    term: "(주관)6개월",
    title: "인도네시아 축산물 추적관리시스템 구축 사전타당성 조사",
  },
  {
    year: "2017",
    agency: "에너지기술평가원",
    term: "(주관)36개월",
    title:
      "에너지효율 20% 향상을 위한 임베디드 리눅스 IoT 플랫폼 기반 BEMS 개발",
    bold: true,
  },
  {
    year: "2017",
    agency: "에너지기술평가원(에이맵)",
    term: "(참여)36개월",
    title:
      "통합 인지 IoT G/W를 통한 빅데이터 기반 에너지 절감 컨설팅 솔루션 개발",
  },
  {
    year: "2017",
    agency: "국토교통과학기술진흥원",
    term: "(주관)12개월",
    title: "철도키관리시스템(KMC)",
  },
  {
    year: "2019",
    agency: "중소기업기술정보진흥원",
    term: "(주관)24개월",
    title: "인지형 IoT 게이트웨이 기반 스마트 제조공정관리 플랫폼",
  },
  {
    year: "2019",
    agency: "중소기업기술정보진흥원",
    term: "(주관)12개월",
    title:
      "IoT 기기 및 엣지컴퓨팅을 이용한 양계농가 설비 모니터링 및 이상 진단 시스템 개발",
  },
  {
    year: "2019",
    agency: "국토교통부 철도기술연구사업",
    term: "(참여)12개월",
    title: "종합성능시험을 위한 ETCS L3급 인프라 설계",
  },
  {
    year: "2020",
    agency: "에너지기술평가원",
    term: "(주관)48개월",
    title: "화력발전소 위치기반 작업자 안전사고 예방 및 대응 기술 개발",
    bold: true,
  },
  {
    year: "2020",
    agency: "중소기업기술정보진흥원",
    term: "(주관)24개월",
    title:
      "중대 건설재해 감소를 위한 빅데이터 기계학습 기반 통합 안전관리 플랫폼",
  },
  {
    year: "2022",
    agency: "중소기업기술정보진흥원",
    term: "(참여)18개월",
    title: "스마트 입환신호기 및 진로표시기 개발",
  },
  {
    year: "2022",
    agency: "한국서부발전",
    term: "(주관)12개월",
    title:
      "Wearables 센싱 및 Edge Computing 기술을 적용한 디지털트윈기반 IGCC 고위험지역 근로자 안전관리 플랫폼 개발",
  },
  {
    year: "2022",
    agency: "과학기술정보통신부",
    term: "(참여)32개월",
    title:
      "원전 3D모델 작업자 위치매핑 알고리즘 및 작업자 위치기반 선량 정보 통합 모니터링 시스템",
  },
  {
    year: "2022",
    agency: "에너지기술평가원",
    term: "(참여)90개월",
    title:
      "ALARA 분석·평가 프로그램 및 3D-BIM 기반 실감·몰입형 피폭 선량 예측진단 통합시스템 기술개발",
    bold: true,
  },
  {
    year: "2022",
    agency: "충북대학교 기술개발과제산학협력",
    term: "(참여)6개월",
    title: "GIS정보를 활용한 비주거건물 에너지정보시스템 구축",
  },
  {
    year: "2022",
    agency: "중소벤처기업부",
    term: "(주관)24개월",
    title:
      "원전 해체시 방사선작업종사자 실시간 능동형 방사선량 안전관리 플랫폼",
  },
  {
    year: "2023",
    agency: "에너지기술평가원",
    term: "(참여)57개월",
    title: "암모니아 혼소 발전소 안전성 평가 절차 및 설비 표준규격 개발",
  },
];

const BusinessPerformance = () => {
  return (
    <BuPerPage>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>기술 개발 사업화 실적</HeroBannerTitle>
          <HeroBannerDescription>
            기술 개발부터 사업화까지 체계적인 수행 경험을 통해
            <br />
            안정적이고 신뢰할 수 있는 성과를 제공합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <BuPerSection>
          <BuPerContainer>
            <BuPerIntro>
              <BuPerIntroTitle>
                R&amp;D 연구 수행 기반, 사업화 성과로 확장
              </BuPerIntroTitle>
              <BuPerIntroDesc>
                넥스트코어테크놀로지는 연구개발 수행을 통해 기술을 인정받고,
                사업화 실적으로 기술이전 및 확산을 지속하고 있습니다.
              </BuPerIntroDesc>
            </BuPerIntro>

            <BuPerDivider />

            <BuPerTimelineArea>
              <BuPerTimelineHeader>
                <div>
                  <AboutSectionTitle style={{ marginTop: "50px" }}>
                    <h3>사업화를 위한 연구개발 실적</h3>
                  </AboutSectionTitle>
                </div>
              </BuPerTimelineHeader>

              <BuPerStairs role="list" aria-label="사업화 실적 타임라인">
                {timelineData.map((item) => (
                  <BuPerStep key={item.year} role="listitem">
                    <BuPerStepYear>{item.year}</BuPerStepYear>
                    <BuPerStepBody>
                      <BuPerStepDesc>{item.desc}</BuPerStepDesc>
                      {item.highlights?.map((h, idx) => (
                        <BuPerStepDesc
                          key={`${item.year}-${idx}`}
                          data-variant="highlight"
                        >
                          {h}
                        </BuPerStepDesc>
                      ))}
                    </BuPerStepBody>
                  </BuPerStep>
                ))}
              </BuPerStairs>
            </BuPerTimelineArea>

            <div>
              <AboutSectionTitle style={{ marginTop: "50px" }}>
                <h3>상세 수행 실적</h3>
              </AboutSectionTitle>
              <BuPerTableWrapper>
                <BuPerTable>
                  <BuPerThead>
                    <tr>
                      <BuPerTh width="10%">년도</BuPerTh>
                      <BuPerTh width="20%">전담기관</BuPerTh>
                      <BuPerTh width="15%">기간</BuPerTh>
                      <BuPerTh width="55%">과제명</BuPerTh>
                    </tr>
                  </BuPerThead>
                  <BuPerTbody>
                    {projectHistory.map((project, index) => (
                      <BuPerTr key={index} $isBold={project.bold}>
                        <BuPerTd $isBold={project.bold}>{project.year}</BuPerTd>
                        <BuPerTd $isBold={project.bold}>
                          {project.agency}
                        </BuPerTd>
                        <BuPerTd $isBold={project.bold}>{project.term}</BuPerTd>
                        <BuPerTd $isBold={project.bold}>
                          {project.title}
                        </BuPerTd>
                      </BuPerTr>
                    ))}
                  </BuPerTbody>
                </BuPerTable>
              </BuPerTableWrapper>
            </div>

            <div>
              <AboutSectionTitle style={{ marginTop: "50px" }}>
                <h3>핵심 기술 및 지재권 현황</h3>
              </AboutSectionTitle>
              <BuPerTableWrapper>
                <BuPerTable>
                  <BuPerThead>
                    <tr>
                      {/* 첫 번째 컬럼은 본문의 Rowspan 헤더를 위한 공간으로 비워두거나 병합할 수 있지만, 
                        디자인상 헤더 텍스트가 4개이므로 아래와 같이 구성합니다. */}
                      <BuPerTh width="10%">분야</BuPerTh>
                      <BuPerTh width="12%">핵심 기술</BuPerTh>
                      <BuPerTh width="28%">기술 내용</BuPerTh>
                      <BuPerTh width="25%">사업화 실적</BuPerTh>
                      <BuPerTh width="25%">관련 지재권</BuPerTh>
                    </tr>
                  </BuPerThead>
                  <BuPerTbody>
                    {/* --- 1. 3D기반 디지털 트윈 (첫 번째 행) --- */}
                    <BuPerTr>
                      <BuPerVerticalHeader rowSpan={2}>
                        3D기반
                        <br />
                        디지털 트윈
                      </BuPerVerticalHeader>
                      <BuPerTd style={{ fontWeight: "bold", color: "#333" }}>
                        위치센싱 데이터
                        <br />
                        수집/분석
                      </BuPerTd>
                      <BuPerListTd>
                        <BuPerList $check>
                          <li>실시간 위치측위 센싱 데이터 수집 관리</li>
                          <li>GPS 측위 데이터 맵핑 알고리즘 적용</li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>롯데케미칼 화학공장 안전관리 시스템</li>
                          <li>
                            한국서부발전 웨어러블 센싱기반 고위험지역 안전관리
                            시스템
                          </li>
                          <li>Skplanet 노후산단 화학물질 모니터링시스템</li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>
                            [특허] 제 10-2391207호
                            <br />
                            3D 모델링 기반 작업자 위치관리 시스템
                          </li>
                          <li>
                            [특허] 제 10-2204091호
                            <br />
                            작업장 안전 통합관리 장치 및 방법
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                    </BuPerTr>

                    {/* --- 1. 3D기반 디지털 트윈 (두 번째 행) --- */}
                    <BuPerTr>
                      {/* 분야 컬럼은 위에서 rowSpan으로 병합됨 */}
                      <BuPerTd style={{ fontWeight: "bold", color: "#333" }}>
                        3D 데이터
                        <br />
                        맵핑 알고리즘
                        <br />
                        개발
                      </BuPerTd>
                      <BuPerListTd>
                        <BuPerList $check>
                          <li>
                            3D 콘텐츠 활용 기존 센서 및 설비 관리 맵핑을 통한
                            운영 관리
                          </li>
                          <li>
                            스마트 역사 통합 관리 설비, PSD, 환경센서, CCTV 외
                            11종 시스템 통합 연동을 3D콘텐츠 제공
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>서울교통공사 스마트 역사 시스템</li>
                          <li>보바스기념병원 건물 에너지 관리 시스템</li>
                          <li>한국동서발전 작업자위치기반 안전관리 시스템</li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>
                            [특허] 제 10-1921093호
                            <br />
                            IOT 기반 지능형데이터 통합 시스템
                          </li>
                          <li>
                            [GS인증] 21-0451
                            <br />
                            스마트 팩토리 통합 운영 관제 시스템
                          </li>
                          <li>
                            [GS인증] 20-0289
                            <br />
                            3D기반 디지털 안전관리 플랫폼
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                    </BuPerTr>

                    {/* --- 2. 빅데이터 통합 플랫폼 (첫 번째 행) --- */}
                    <BuPerTr>
                      <BuPerVerticalHeader rowSpan={2}>
                        빅데이터
                        <br />
                        통합 플랫폼
                      </BuPerVerticalHeader>
                      <BuPerTd style={{ fontWeight: "bold", color: "#333" }}>
                        IoT 기반
                        <br />
                        데이터 통합
                      </BuPerTd>
                      <BuPerListTd>
                        <BuPerList $check>
                          <li>
                            에너지 설비 및 제조 공정 설비에 대한 데이터 무선
                            전송 시스템 개발
                          </li>
                          <li>
                            IOT 기반 모뎀을 통한 네트워크 공사 독립적인 시스템
                            적용
                          </li>
                          <li>
                            기존 센서 및 설비 프로토콜 연동을 통한 스마트 통합
                            플랫폼 개발
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>한국로지스풀 전국 지게차 관리 시스템</li>
                          <li>몽골국립대학교 몽골 스마트 그리드 시스템</li>
                          <li>에이맵 세홍 FEMS (스마트 팩토리 시스템)</li>
                          <li>㈜한국수력원자력 스마트응급위기관리시스템</li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>
                            [특허] 제 10-1327477호
                            <br />
                            통합 관제 및 제어 관리 시스템
                          </li>
                          <li>
                            [특허] 제 10-1656011호
                            <br />
                            빅데이터 기반 고장 모니터링 시스템 및 방법
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                    </BuPerTr>

                    {/* --- 2. 빅데이터 통합 플랫폼 (두 번째 행) --- */}
                    <BuPerTr>
                      {/* 분야 컬럼은 위에서 rowSpan으로 병합됨 */}
                      <BuPerTd style={{ fontWeight: "bold", color: "#333" }}>
                        통합 관제
                        <br />
                        모니터링 플랫폼
                      </BuPerTd>
                      <BuPerListTd>
                        <BuPerList $check>
                          <li>
                            건물 공정 관리를 위한 통합 플랫폼 개발 (자재,
                            작업자, CCTV 상황 관리)
                          </li>
                          <li>
                            전체 데이터를 실시간으로 한눈에 볼 수 있는 대시보드
                            제공
                          </li>
                          <li>
                            가시/가청/E-mail/팝업 등을 통한 실시간 고장 알람
                            발송 기능 제공
                          </li>
                          <li>
                            분/시/일/주/월/연 별 성능 이력 관리 및 조회 검색
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>SKTelecom, KT, LG U+</li>
                          <li>국내 물류 및 제조업</li>
                          <li>공공기관 등</li>
                          <li>SKPlanet 노후산단화학물질모니터링시스템</li>
                          <li>
                            ㈜한국수력원자력 방사선보건원 원전내외부 방사선원항
                            DB 구축
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                      <BuPerListTd>
                        <BuPerList>
                          <li>
                            [특허] 제 10-1716140호
                            <br />
                            물류장비 관제 시스템 장치 및 그 동작 방법
                          </li>
                          <li>
                            [특허] 제 10-2048408호
                            <br />
                            전력 설비내 에너지 데이터 통합관리 방법 및 에너지
                            모니터링 시스템
                          </li>
                          <li>
                            [GS인증] 15-0288
                            <br />
                            넥스트케어 엠
                          </li>
                        </BuPerList>
                      </BuPerListTd>
                    </BuPerTr>
                  </BuPerTbody>
                </BuPerTable>
              </BuPerTableWrapper>
            </div>

            <BuPerDivider />
          </BuPerContainer>
        </BuPerSection>
      </PublicSContainer>
    </BuPerPage>
  );
};

export default BusinessPerformance;

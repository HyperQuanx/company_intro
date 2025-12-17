import React from "react";

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  CertificationSection,
  CertificationContainer,
  CertificationSubtitle,
  CertificationGrid,
  CertificationCard,
  PatentSection,
  PatentContainer,
  PatentTitle,
  PatentSubtitle,
  PatentImageGrid,
  PatentImageCard,
  PatentTableContainer,
  PatentTable,
  ProgramIPSection,
  ProgramIPContainer,
  ProgramIPTitle,
  ProgramIPSubtitle,
  ProgramIPTableContainer,
  ProgramIPTable,
  ProgramIPTitleWrap,
  ProgramIPScrollHint,
  AboutSectionTitle,
} from "../../styles/NextcoreAbout.styles";

const AboutCertification = () => {
  const certifications = [
    {
      id: 1,
      name: "품질경영시스템인증\nISO 9001",
      image: "01",
    },
    {
      id: 2,
      name: "품질경영시스템인증\nISO 14001",
      image: "02",
    },
    {
      id: 3,
      name: "우수제품 지적재산권\n3인마이크칩 성청권 증상",
      image: "03",
    },
    {
      id: 4,
      name: "GS인증\nNextcare-M",
      image: "04",
    },
    {
      id: 5,
      name: "GS인증\nNextcare-E",
      image: "05",
    },
    {
      id: 6,
      name: "변산기관인증\nNothing",
      image: "06",
    },
    {
      id: 7,
      name: "기업정책연구소 인증\nCertification",
      image: "07",
    },
    {
      id: 8,
      name: "한국선박관리\n(주요 승인증)",
      image: "08",
    },
    {
      id: 9,
      name: "우수내용\n기술증 모음",
      image: "09",
    },
  ];

  const patents = [
    {
      number: "제 10-1327477 호",
      name: "통합 관제 및 제어 관리 시스템",
      date: "2013-11-04",
    },
    {
      number: "제 10-1656011 조",
      name: "퀵데이터 기반 그룹 동기처리 시스템 및 방법",
      date: "2016-09-02",
    },
    {
      number: "제 10-1716140 호",
      name: "물류정보 관제 시스템 정지 및 구동 방법",
      date: "2017-03-22",
    },
    {
      number: "제 10-1921093 조",
      name: "IoT 기반 차별화 데이터 통신 시스템",
      date: "2018-11-16",
    },
    {
      number: "제 10-2048408 호",
      name: "전력 설비메 데이터 통합관리 방법 및 데이터 모니터링 시스템",
      date: "2019-11-19",
    },
    {
      number: "제 10-2240091 도",
      name: "저장정 인공 통능권치 관제 및 방법",
      date: "2021-01-12",
    },
    {
      number: "제 10-2219809호",
      name: "영상 분석을 통한 인건력금리 시스템",
      date: "2021-02-18",
    },
    {
      number: "제 10-2391197호",
      name: "디지털 인증 적정관리 시스템 및 방법",
      date: "2022-04-22",
    },
    {
      number: "제 10-2391207호",
      name: "3D 모델링 기반 적정관 위치 관리 시스템",
      date: "2022-04-22",
    },
    {
      number: "제 10-2421978 호",
      name: "공정인프라미 기반 디지털 통신 인프라미 시스템 및 방법",
      date: "2022-07-13",
    },
    {
      number: "제 10-2421983 호",
      name: "3D 기반 기반 공정중 제어 관리 모니터 시스템 및 방법",
      date: "2022-07-13",
    },
    {
      number: "제 10-2801564 호",
      name: "위치 포드권 위한 이용정 및 방법 및 장치",
      date: "2025-04-23",
    },
    {
      number: "제 10-2810985 호",
      name: "적정관 위치 데이터 저장 중공원 작정권한 정정 시스템 및 방법",
      date: "2025-05-16",
    },
    {
      number: "10-2024-0008489",
      name: "4.0 기술 활용 인건력금리 플랫폼 서비스 제공 시스템",
      date: "2024-07-04",
    },
    {
      number: "제 10-2855536 조",
      name: "법산인 마켓 차이용홈 위한 정보 표시 관리 방법",
      date: "2025-09-01",
    },
  ];

  const programIPs = [
    {
      registration: "15-0288",
      name: "소프트웨어이용증(GS인증)",
      title: "통합 관제 및 제어 관리 시스템",
      date: "2015-08-31",
    },
    {
      registration: "20-0289",
      name: "소프트웨어이용증(GS인증)",
      title: "3D 기반 디자인 인프라미 플랫폼 v1.0",
      date: "2020-06-29",
    },
    {
      registration: "21-0451",
      name: "소프트웨어이용증(GS인증)",
      title: "스마트 채택 통합 운영 관리 시스템 v1.0",
      date: "2021-09-06",
    },
    {
      registration: "C-2015-010244",
      name: "프로그램 등록",
      title: "넥스트케어 M",
      date: "2015-04-29",
    },
    {
      registration: "C-2015-020225",
      name: "프로그램 등록",
      title: "넥스트케어 E 데이터 제어 시스템",
      date: "2015-08-28",
    },
    {
      registration: "C-2015-027579",
      name: "프로그램 등록",
      title: "IP FLOW NMS(이더넷 불록 대역비스)",
      date: "2015-11-19",
    },
    {
      registration: "C-2017-036406",
      name: "프로그램 등록",
      title: "통합 중소 IoT(IoT 관리 시스템",
      date: "2017-12-27",
    },
    {
      registration: "C-2017-036405",
      name: "프로그램 등록",
      title: "비데이터 기반 BEMS(빌딩에너지관리시스템)",
      date: "2017-12-27",
    },
    {
      registration: "C-2019-009124",
      name: "프로그램 등록",
      title: "REMS (인프라미 에너지 관리 시스템)",
      date: "2019-04-02",
    },
    {
      registration: "C-2020-007926",
      name: "프로그램 등록",
      title: "디지털 인증권한 관리 시스템",
      date: "2020-03-02",
    },
    {
      registration: "C-2020-007925",
      name: "프로그램 등록",
      title: "디지털 적정권한 인프라권한관 시스템",
      date: "2020-03-02",
    },
    {
      registration: "C-2020-007927",
      name: "프로그램 등록",
      title: "PSM 기반 프로세스 디지털 인프라 시스템",
      date: "2020-03-02",
    },
    {
      registration: "C-2020-007921",
      name: "프로그램 등록",
      title: "3D 기반 공정 적정 위치 관리 시스템",
      date: "2020-03-02",
    },
    {
      registration: "C-2020-025635",
      name: "프로그램 등록",
      title: "Nextcare-m v7 (넥스트코어 M)",
      date: "2020-08-03",
    },
    {
      registration: "C-2020-030812",
      name: "컴퓨터프로그램저작권",
      title: "3D 기반 디자인 인프라미 플랫폼 통합",
      date: "2020-09-10",
    },
    {
      registration: "C-2021-025520",
      name: "컴퓨터프로그램저작권",
      title: "스마트 채택 통합 운영 관리 시스템 v1.0",
      date: "2021-06-25",
    },
    {
      registration: "C-2023-039475",
      name: "컴퓨터프로그램저작권",
      title: "NextcareM v10 (넥스트케어M)",
      date: "2023-09-04",
    },
    {
      registration: "C-2023-043157",
      name: "컴퓨터프로그램저작권",
      title:
        "위치기법 및 디자인 통합 인프라미 시스템(Location-based and digital twin safety management system)",
      date: "2023-09-26",
    },
    {
      registration: "C-2023-049643",
      name: "컴퓨터프로그램저작권",
      title: "적정권한 위한기법 적정 인프라시 대해 인증중 인프라메 시스템",
      date: "2023-11-07",
    },
    {
      registration: "C-2023-049753",
      name: "컴퓨터프로그램저작권",
      title: "익스정중 수정 기술중 인프라",
      date: "2023-11-07",
    },
    {
      registration: "C-2023-049752",
      name: "컴퓨터프로그램저작권",
      title: "병선치 중심 적정 통합 프로그래머",
      date: "2023-11-07",
    },
    {
      registration: "C-2023-049751",
      name: "컴퓨터프로그램저작권",
      title: "익스정중을 위한 데이터 수집 제공 시스템",
      date: "2023-11-07",
    },
    {
      registration: "C-2024-028443",
      name: "컴퓨터프로그램저작권",
      title: "SafeBot Operating system(세이프봇 운영시스템)",
      date: "2024-08-14",
    },
    {
      registration: "C-2024-046532",
      name: "컴퓨터프로그램저작권",
      title:
        "익스정중 통합권한 플랫폼 모듈 디자인 위치정 시스템(Decision-making Integrated Management Platform Module Digital Permission Management System)",
      date: "2024-11-22",
    },
    {
      registration: "C-2024-045800",
      name: "컴퓨터프로그램저작권",
      title:
        "정보/제희행정부 익스정중 지원모듈(decision support module for routine/planned preventive maintenance)",
      date: "2024-11-20",
    },
  ];

  // 특허 이미지 데이터 정의
  const patentImages = Array.from({ length: 15 }, (_, idx) => ({
    id: idx + 1,
    number: String(idx + 1).padStart(2, "0"),
    src: `/about/industry/${String(idx + 1).padStart(2, "0")}.png`,
    alt: `특허 이미지 ${idx + 1}`,
  }));

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>인증 및 지적재산권</HeroBannerTitle>
          <HeroBannerDescription>
            통합 관제, 안전관리, IoT 기술 및 전력 분야등에서 총 14건의 특허 보유
            <br />
            ISO 9001, ISO 14001, GS(Good Software) 인증 등 다양한 인증 획득
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <CertificationSection>
        <CertificationContainer>
          <AboutSectionTitle>
            <h3>품질 인증 및 SW 현황</h3>
          </AboutSectionTitle>

          <CertificationGrid>
            {certifications.map((cert) => (
              <CertificationCard key={cert.id}>
                <div className="cert-image">
                  <img src={`/about/sw/sw_${cert.image}.png`} alt={cert.name} />
                </div>
                <div className="cert-name">{cert.name}</div>
              </CertificationCard>
            ))}
          </CertificationGrid>
        </CertificationContainer>
      </CertificationSection>

      <PatentSection>
        <PatentContainer>
          <AboutSectionTitle>
            <h3>넥스트코어 특허 산업재산권</h3>
          </AboutSectionTitle>

          <PatentImageGrid>
            {patentImages.map((patent) => (
              <PatentImageCard key={patent.id}>
                <img
                  src={patent.src}
                  alt={patent.alt}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </PatentImageCard>
            ))}
          </PatentImageGrid>

          <PatentTableContainer>
            <PatentTable>
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>특허번호</th>
                  <th style={{ width: "60%" }}>명칭</th>
                  <th style={{ width: "25%" }}>등록일</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent, idx) => (
                  <tr key={idx}>
                    <td>{patent.number}</td>
                    <td>{patent.name}</td>
                    <td>{patent.date}</td>
                  </tr>
                ))}
              </tbody>
            </PatentTable>
          </PatentTableContainer>
        </PatentContainer>
      </PatentSection>

      <ProgramIPSection>
        <ProgramIPContainer>
          <ProgramIPTitleWrap>
            <AboutSectionTitle>
              <h3>넥스트코어 프로그램 지식재산권</h3>
            </AboutSectionTitle>
            <ProgramIPScrollHint>내부 스크롤 가능합니다.</ProgramIPScrollHint>
          </ProgramIPTitleWrap>

          <ProgramIPTableContainer>
            <ProgramIPTable>
              <thead>
                <tr>
                  <th style={{ width: "12%" }}>등록번호</th>
                  <th style={{ width: "15%" }}>명칭</th>
                  <th style={{ width: "50%" }}>제목</th>
                  <th style={{ width: "23%" }}>등록일</th>
                </tr>
              </thead>
              <tbody>
                {programIPs.map((program, idx) => (
                  <tr key={idx}>
                    <td>{program.registration}</td>
                    <td>{program.name}</td>
                    <td>{program.title}</td>
                    <td>{program.date}</td>
                  </tr>
                ))}
              </tbody>
            </ProgramIPTable>
          </ProgramIPTableContainer>
        </ProgramIPContainer>
      </ProgramIPSection>
    </>
  );
};

export default AboutCertification;

import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  HistorySection,
  HistoryTitle,
  HistoryStats,
  StatItem,
  TimelineContainer,
  TimelineYear,
  YearLabel,
  EventsList,
  EventItem,
  EventDate,
  EventDescription,
  EventDetail,
} from "../../styles/NextcoreAbout.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

const AboutHistory = () => {
  // 연혁 데이터 - 사용자가 직접 입력할 부분
  const historyData = {
    stats: [
      { number: "13", label: "Years of History" },
      { number: "100+", label: "Projects Completed" },
      { number: "50+", label: "Partners" },
    ],
    timeline: [
      {
        year: 2025,
        events: [
          {
            date: "06월",
            description: "강동구 반지하주택 침수경보기 안전관리시스템 구축",
          },
          { date: "05월", description: "태국 KT JASTV 플랫폼 유지보수 사업" },
          {
            date: "04월",
            description: "한국동서발전 당진 1,2 소수력 스마트안전관리시스템",
          },
          {
            date: "03월",
            description: "㈜스쿼드엑스 MBC 뮤니버스 구축 및 서비스 개발",
          },
        ],
      },
      {
        year: 2024,
        events: [
          {
            date: "11월",
            description: "한국수력원자력 스마트 응급위기관리시스템 구축",
          },
          {
            date: "10월",
            description:
              "한국수력원자력방사선보건원 원전 내·외부 방사선원 항DB 구축",
          },
        ],
      },
      {
        year: 2023,
        events: [
          {
            date: "10월",
            description:
              "한국중부발전㈜ 신서천 IoT 기반 연료하역작업 안전관리플랫폼",
          },
          {
            date: "09월",
            description: "관악구 침수대응 서비스 기획 및 실증 용역",
          },
          {
            date: "06월",
            description: "강남구 반지하주택 IoT 기반 침수경보시스템 구축 용역",
          },
          {
            date: "04월",
            description:
              "암모니아혼소 발전소 안전성 평가 절차 및 설비 표준규격 개발 협약",
          },
          { date: "02월", description: "리뉴시스템 안전관리시스템 구축" },
        ],
      },
      {
        year: 2022,
        events: [
          {
            date: "10월",
            description:
              "ALARA 분석·평가 프로그램 및 3D-BIM 기반 실감·몰입형 피폭선량 예측진단 통합시스템 기술개발",
          },
          {
            date: "09월",
            description:
              "고려대학교 사업협력협약서 체결\n- 케이.엘.이.에스 K-Export Chain 플랫폼 유지보수 계약체결",
          },
          {
            date: "07월",
            description:
              "㈜케이티 파키스탄 IT Park 구축 사업 계약 체결\n- SKT 22년 NMS 통합기술지원 용역 계약 체결\n- 충북대학교 가족회사 계약\n- 에이치웍스 지능형 초연결망 선도 확산사업 과제 용역계약\n- 건국대학교 에너지 인력 양성사업 교류 MOU체결",
          },
          {
            date: "06월",
            description:
              "신구대학교 산학협력협정서 체결\n- ㈜케이티 파키스탄 IT Park 구축 사업 계약 체결",
          },
          {
            date: "05월",
            description:
              "법무법인(유) 동인 안전관리솔루션 법률고문 계약 체결\n법무법인(유) 율촌 안전관리솔루션 법률고문 계약 체결",
          },
          {
            date: "04월",
            description:
              "한국서부발전㈜ 웨어러블센싱 및 Edge Computing기술을 적용한 디지털트윈기반 IGCC 고위험지역 근로자 안전관리플랫폼 개발",
          },
          {
            date: "02월",
            description: "국외지점자금세탁방지(AML) 시스템 유지관리 계약",
          },
          {
            date: "01월",
            description:
              "한성테크 스마트 신호기 주제어장치 사태 표시부 시제품 제작 계약",
          },
        ],
      },
      {
        year: 2021,
        events: [
          {
            date: "12월",
            description:
              "한국서부발전 디지털전환 챌린지대회 사장상 수상\n- 한국동서발전 상생협력 얼라이언스 구축 협약",
          },
          {
            date: "10월",
            description:
              "한경대학교 산학협력체결\n- ㈜에스원 MFR 출입관리시스템 계약",
          },
          {
            date: "09월",
            description:
              "3D 기반 디지털 안전관리 시스템 우수조달 지정증서 수여\n- ㈜현대커머셜 지게차관제 시스템 계약\n- 한국중부발전 K-Export Chain 플랫폼 구축\n- ㈜SK플래닛 여수화학단지 화학물질 감지모니터링 시스템계약",
          },
          {
            date: "07월",
            description: "㈜에스티엔인포텍 국방광대역통합망 관제 플랫폼 구축",
          },
          { date: "02월", description: "㈜레디엔터테인먼트 Muse 시스템 계약" },
          {
            date: "01월",
            description: "주식회사아이비케이시스템 Nextcare-M 유지보수",
          },
        ],
      },
      {
        year: 2020,
        events: [
          {
            date: "12월",
            description:
              '신협중앙회 NMS 구축\n- ETRI "지게차모니터링 SW개발" 업체 선정',
          },
          {
            date: "09월",
            description:
              "대우건설 스마트홈 능동센서 기반 데이터송수신장치·분석 기술개발",
          },
          { date: "08월", description: "SKT 20년 NMS 통합기술지원 용역" },
          { date: "07월", description: "한국카본 CCTV 설치공사" },
          {
            date: "06월",
            description:
              "한국동서발전 화력발전소 위치기반 작업자 안전사고 예방기술 개발 협약\n- SK텔레시스 임베디드 리눅스 IoT 플랫폼 업무협약",
          },
          { date: "05월", description: "KT 3BB SMS 구축 사업 계약" },
          {
            date: "01월",
            description: "ETCS L3급 시험인프라 종합계측설비 상세설계용역",
          },
        ],
      },
      {
        year: 2019,
        events: [
          {
            date: "12월",
            description: "수방사(국방보안관리) M-BCN 보안관리 사업계약",
          },
          {
            date: "10월",
            description: "한국서부발전 작업자 고위험작업관리 시스템 계약",
          },
          {
            date: "09월",
            description:
              "SKT 수방사 군장비 보안관리 시스템 수주\n- IBK기업은행 인도네시아 국외전산통합시스템 구축\n- 대전 중구청 IPT NMS 개발납품",
          },
          {
            date: "07월",
            description:
              "롯데정보통신 보바스기념병원에너지 모니터링 시스템 계약",
          },
          {
            date: "02월",
            description: "SKT Backbon팀 FlowNMS 감지 고도화 사업 계약",
          },
          {
            date: "01월",
            description: "롯데케미칼 디지털 안전 작업관리 플랫폼 구축 계약",
          },
        ],
      },
      {
        year: 2018,
        events: [
          {
            date: "10월",
            description: "비즌비츠로 태양광 발전소관리 시스템 구축사업 계약",
          },
          {
            date: "08월",
            description: "이노와이어리스 LGU+ 5G Core OAM 구축사업 계약",
          },
          {
            date: "06월",
            description:
              "삼성생명 IP-PBX NMS 구축\n- SK브로드밴드 IX 분석 시스템 구축\n- 서울교통공사 시설물 관제 시스템 구축",
          },
          { date: "05월", description: "롯데정보통신 협력사 등록" },
          {
            date: "04월",
            description: "한국로지스풀 지게차관제 시스템 고도화 사업 계약",
          },
          { date: "03월", description: "롯데 그룹망 전송장비 NMS 시스템 수주" },
          { date: "02월", description: "IBK기업은행 해외법인망 EMS 수주" },
          { date: "01월", description: "SKT Flow NMS 2차 고도화 사업 수주" },
        ],
      },
      {
        year: 2017,
        events: [
          {
            date: "12월",
            description: "한국카본함양공장 MES 시스템 구축 계약",
          },
          { date: "11월", description: "행자부 화상회의 시스템 EMS 구축" },
          { date: "10월", description: "SK브로드밴드 Flow NMS 수주" },
          { date: "09월", description: "평택시청 BIS 시스템관제용 EMS 구축" },
          {
            date: "07월",
            description: "제주 스마트 그리드 통합관리센터 NMS 시스템 구축",
          },
          { date: "06월", description: "SKT Flow 고도화 사업 수주" },
          {
            date: "05월",
            description: "코레일 암호화키관리 시스템 구축사업 수주",
          },
          { date: "03월", description: "SKT SG NMS 시스템 구축" },
          { date: "02월", description: "한국카본 CCTV 중앙관제 시스템 구축" },
          { date: "01월", description: "남양유업 신사옥 통합 EMS 시스템 구축" },
        ],
      },
      {
        year: 2016,
        events: [
          {
            date: "12월",
            description:
              '신협중앙회 NMS 구축\n- ETRI "지게차모니터링 SW개발" 업체 선정',
          },
          { date: "11월", description: "자운대(군) IP교환장비 NMS 구축" },
          { date: "10월", description: "정보통신공사면허 취득" },
          {
            date: "09월",
            description:
              '중기청 연구과제 "제품고정기술개발" 업체 선정\n- 해군 작전사령부 NMS 구축',
          },
          {
            date: "07월",
            description: "한국도로공사 통합DB 구축사업 설계용역 계약",
          },
          {
            date: "05월",
            description: "평택-아산 광역 BIS 버스 운영단말 SW 구축",
          },
          {
            date: "04월",
            description: "LTE망 빅데이터 기반 지능형 플랫폼 개발",
          },
          {
            date: "03월",
            description: "아산 탕정 U-City 센터 시스템 / EMS 구축사업",
          },
          {
            date: "02월",
            description:
              "한국로지스풀 지게차 관제 시스템 개발 계약\n- SKT Flow NMS 시스템 계약",
          },
          { date: "01월", description: "KT MWC 2016 IDE 시연 계약" },
        ],
      },
      {
        year: 2015,
        events: [
          { date: "12월", description: "한국 철도공사 통합 관제 시스템 계약" },
          { date: "10월", description: "LogisAll 지게차 관제 시스템 계약" },
          {
            date: "07월",
            description: "해군 1함대사 관제 시스템 유지보수 계약",
          },
          {
            date: "06월",
            description: "강원랜드 VOIP관제 통합 관제 시스템 계약",
          },
          {
            date: "04월",
            description:
              'SK하이닉스 FIMS 솔루션 시스템 계약\n- "벤처기업 확인서 인증", "기업부설연구소 인정서" 획득\n- 아모스항공 3PL 자동공정 시스템 계약 진행',
          },
          {
            date: "03월",
            description:
              'KDC정보통신 대리점 계약 체결\n- "서비스 장애 예측관제 시스템" 특허출원\n- 교보생명 자산관리 및 관제 시스템 계약',
          },
          {
            date: "02월",
            description: 'SKT "통합관제 시스템" - 군 납품 총판 계약 체결',
          },
          {
            date: "01월",
            description:
              "KT B1 OMS 회선 관제 시스템 계약\n- SKT 국통사 중서부 망 관제 시스템 계약",
          },
        ],
      },
      {
        year: 2014,
        events: [
          { date: "11월", description: "의무사 IPT 관제 시스템 계약" },
          { date: "10월", description: "㈜오파스넷 대리점 계약 체결" },
          { date: "09월", description: "데오시스템㈜ 총판계약 체결" },
          {
            date: "07월",
            description:
              '롯데월드 신사옥 무선 망 관제 시스템 계약\n- (주)원익머트리얼즈 "상품 자동화 공정" 시스템 계약\n- Sktelecom 신경망 모니터링 체계 계약',
          },
          {
            date: "05월",
            description: "세종시 종합청사 IPT 자체 관리 시스템 계약",
          },
          {
            date: "04월",
            description: "(주)원익머트리얼즈 자동화 시스템, CIM, 문서관리 계약",
          },
          {
            date: "03월",
            description:
              "국통사 IPT 관제 시스템 계약\n- (주)원익머트리얼즈 MES/POP 계약",
          },
          { date: "02월", description: "㈜참솔 총판 계약 체결" },
          { date: "01월", description: "Sktelecom 품질관리 시스템 계약" },
        ],
      },
      {
        year: 2013,
        events: [
          { date: "11월", description: "㈜나눔로또 Traffic Hall 계약" },
          { date: "10월", description: "솔루텍㈜ 총판 계약 체결" },
          {
            date: "09월",
            description: '"통합모니터링 및 제어 시스템" 특허 출원',
          },
          { date: "08월", description: "공항공사 통합모니터링 시스템 계약" },
          {
            date: "05월",
            description: "삼성전자 RIMS 통합 모니터링 시스템 계약",
          },
          { date: "04월", description: "KT Shared Comm 관제 솔루션 계약" },
          { date: "03월", description: "㈜넥스트코어테크놀로지 설립" },
        ],
      },
    ],
  };

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>연혁</HeroBannerTitle>
          <HeroBannerDescription>
            넥스트코어테크놀로지가 걸어온 성장의 발자취와
            <br />
            주요 기술·사업 성과를 한눈에 확인하세요.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>
      <PublicSContainer>
        <HistorySection>
          {/* 주요 통계 */}
          <HistoryStats>
            {historyData.stats.map((stat, idx) => (
              <StatItem key={idx}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatItem>
            ))}
          </HistoryStats>

          {/* 연혁 타임라인 */}
          <HistoryTitle>
            <h2>Company Timeline</h2>
            <p>
              지속적인 혁신과 발전으로 업계를 선도하는 넥스트코어테크놀로지의
              주요 성과를 소개합니다.
            </p>
          </HistoryTitle>

          <TimelineContainer>
            {historyData.timeline.map((yearData, yearIdx) => (
              <TimelineYear key={yearIdx}>
                <YearLabel>{yearData.year}</YearLabel>
                <EventsList>
                  {yearData.events.map((event, eventIdx) => (
                    <EventItem key={eventIdx}>
                      <EventDate>{event.date}</EventDate>
                      <EventDescription>{event.description}</EventDescription>
                      {event.detail && (
                        <EventDetail>{event.detail}</EventDetail>
                      )}
                    </EventItem>
                  ))}
                </EventsList>
              </TimelineYear>
            ))}
          </TimelineContainer>
        </HistorySection>
      </PublicSContainer>
    </>
  );
};

export default AboutHistory;

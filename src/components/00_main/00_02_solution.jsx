import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SolutionSection,
  SectionHeader,
  CardsContainer,
  CardRow,
  SolutionCard,
  IconWrapper,
  CardTitle,
  CardSubtitle,
  Divider,
  TagsContainer,
  Tag,
  CardArrow,
} from "../../styles/Solution.styles";

// 아이콘 컴포넌트들
const MonitoringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M6 8h.01M9 8h.01M6 11h12" />
  </svg>
);

const EnergyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const SafetyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const IoTIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49" />
    <path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const solutionData = [
  {
    title: "Nextcare Monitoring",
    subtitle:
      "네트워크, 서버, 애플리케이션, 데이터베이스 등 IT 자원을 하나의 화면에서 실시간 모니터링하고 장애 대응까지 지원하는 통합 관제 솔루션",
    path: "/solutions/nextcare-m",
    icon: MonitoringIcon,
    tags: ["서버/네트워크 장비", "보안 장비", "통신망(유,무선)", "통합 서비스"],
  },
  {
    title: "Nextcare Energy",
    subtitle:
      "전기, 열, 가스 등의 에너지 사용을 실시간으로 분석하고, 설비 최적 제어를 통해 에너지의 합리적 소비를 실현하는 솔루션",
    path: "/solutions/nextcare-e",
    icon: EnergyIcon,
    tags: ["건축물 시설", "공장 시설", "발전소 시설", "주거 단지"],
  },
  {
    title: "Nextcare Safety",
    subtitle:
      "작업자의 위치와 위험 요소를 실시간으로 감지하고 중대산업 안전사고를 예방/방지하기 위한 산업 현장 전용 안전 솔루션",
    path: "/solutions/nextcare-s",
    icon: SafetyIcon,
    tags: ["작업 환경", "작업자 안전", "작업 관리", "설비 안전"],
  },
  {
    title: "Nextcare AI",
    subtitle:
      "머신러닝과 컴퓨터 비전(이미지 처리/인식, 객체 감지 도구)을 기반으로 데이터 수집 및 분석하고 예측 모델링을 통해 운영 효율을 극대화하는 인공지능 최적화 솔루션",
    path: "/solutions/nextcare-ai",
    icon: AIIcon,
    tags: ["AI 챗봇", "이미지/영상 분석", "데이터 및 예측 분석", "AI 리포트"],
  },
  {
    title: "Nextcare IoT",
    subtitle:
      "다양한 장비와 센서를 연결해 실시간 상태를 원격으로 관제하고, 운영 이력을 기록/관리하는 IoT(Internet of Things)기반 관제 솔루션",
    path: "/solutions/nextcare-iot",
    icon: IoTIcon,
    tags: [
      "스마트 팜/스마트 홈",
      "설비 자동화",
      "센서/시설물 제어 관리",
      "AI 리포트",
    ],
  },
];

const Solution = () => {
  const navigate = useNavigate();

  const topRow = solutionData.slice(0, 3);
  const bottomRow = solutionData.slice(3, 5);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <SolutionSection>
      <SectionHeader>
        <h2>
          비즈니스의 모든 것을
          <br />
          <span className="gradient-text">통합 관제</span>하다
        </h2>
        <p>
          넥스트코어테크놀로지는 IT 인프라부터 에너지, 안전, AI, IoT까지
          <br />
          기업의 핵심 자산을 실시간으로 모니터링하고 관리합니다.
        </p>
      </SectionHeader>

      <CardsContainer>
        <CardRow>
          {topRow.map((item, index) => (
            <SolutionCard
              key={index}
              onClick={() => handleCardClick(item.path)}
            >
              <IconWrapper>
                <item.icon />
              </IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.subtitle}</CardSubtitle>
              <Divider />
              <TagsContainer>
                {item.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagsContainer>
              <CardArrow>
                <ArrowIcon />
              </CardArrow>
            </SolutionCard>
          ))}
        </CardRow>

        <CardRow>
          {bottomRow.map((item, index) => (
            <SolutionCard
              key={index}
              onClick={() => handleCardClick(item.path)}
            >
              <IconWrapper>
                <item.icon />
              </IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardSubtitle>{item.subtitle}</CardSubtitle>
              <Divider />
              <TagsContainer>
                {item.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagsContainer>
              <CardArrow>
                <ArrowIcon />
              </CardArrow>
            </SolutionCard>
          ))}
        </CardRow>
      </CardsContainer>
    </SolutionSection>
  );
};

export default Solution;

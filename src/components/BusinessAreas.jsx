import React from "react";
import {
  SectionContent,
  SectionTitle,
  GridContainer,
  Card,
} from "../styles/MainPage.styles";

const businessAreas = [
  {
    title: "시스템 통합관제",
    desc: "네트워크 및 시스템 보안, 통합 모니터링을 통한 안정적인 인프라 운영을 지원합니다.",
    icon: "🖥️",
  },

  {
    title: "디지털 안전관리",
    desc: "법률 기반의 위치 및 작업 관리 플랫폼(Nextcare S)으로 산업 현장의 안전을 책임집니다.",
    icon: "🛡️",
  },

  {
    title: "에너지 산업",
    desc: "BEMS, FEMS, 스마트그리드 등 IoT 기반의 효율적인 에너지 관리 솔루션을 제공합니다.",
    icon: "⚡",
  },

  {
    title: "디지털 트윈",
    desc: "3D 건물/시설/설비 관제를 통해 현실과 동일한 가상 환경에서 효율적인 운영을 돕습니다.",
    icon: "🏢",
  },

  {
    title: "스마트 팩토리",
    desc: "제조 공정의 통합 관제 및 MES 시스템 구축으로 생산성을 극대화합니다.",
    icon: "🏭",
  },

  {
    title: "AI 빅데이터 분석",
    desc: "데이터 수집, 분석, 예측을 통해 고객에게 최적화된 비즈니스 인사이트를 제공합니다.",
    icon: "📊",
  },
];

const BusinessAreas = () => {
  return (
    <SectionContent>
      <SectionTitle>Our Business</SectionTitle>
      <GridContainer>
        {businessAreas.map((item, index) => (
          <Card key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </GridContainer>
    </SectionContent>
  );
};

export default BusinessAreas;

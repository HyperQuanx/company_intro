import styled, { css } from "styled-components";

// 02
export const PageSection = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const MapArea = styled.div`
  width: 100%;
  height: 420px;
  background: #f2f4f7;
  border-bottom: 1px solid #eaecf0;
`;

export const MapCanvas = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentArea = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 22px 20px 40px;
`;

export const InfoTable = styled.div`
  width: 100%;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 22px;
  padding: 18px 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const InfoLabel = styled.div`
  font-weight: 800;
  color: #101828;
  font-size: 1.25rem;
  line-height: 1.4;
  padding-top: 2px;
`;

export const InfoValue = styled.div`
  color: #101828;
  font-size: 1rem;
  line-height: 1.55;
`;

export const Divider = styled.div`
  height: 1px;
  background: #eaecf0;
  width: 100%;
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LinkButton = styled.a`
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid #d0d5dd;
  background: #ffffff;
  color: #101828;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: #f9fafb;
  }
`;

export const Chip = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 800;
  color: #ffffff;
  background: #2f6bff;
  text-decoration: none;

  &:hover {
    opacity: 0.92;
  }
`;

export const TransitRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const TransitIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #f2f4f7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

// 01 - About Intro 섹션
export const IntroductionSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IntroText = styled.p`
  &.mainIntroText {
    font-size: 3rem;
    font-weight: 900;
    font-family: "Pretendard", "Malgun Gothic", dotum, sans-serif;
  }

  line-height: 1.8;
  color: #4a5568;
  margin: 0;

  &:first-of-type {
    font-weight: 600;
    color: #2d3748;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: #f8f9fa;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #55b3d6;
    background: #f0f7fb;
    box-shadow: 0 4px 12px rgba(85, 179, 214, 0.15);
  }

  .service-icon {
    font-size: 2rem;
  }

  .service-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #2d3748;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 16px;

    .service-name {
      font-size: 0.85rem;
    }
  }
`;

export const IntroImage = styled.div`
  width: 100%;
  height: 400px;
  background: #f0f7fb;
  border-radius: 12px;
  border: 2px solid #55b3d6;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    color: #a0aec0;
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

// Company Info Section
export const CompanyInfoSection = styled.section`
  width: 100%;
  background: #f8f9fa;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const CompanyInfoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  align-items: flex-start;
`;

export const CompanyDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CompanyName = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #55b3d6 0%, #2d8fa3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 10px 0;
  }

  p {
    font-size: 1.1rem;
    color: #4a5568;
    margin: 0;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.8rem;
    }
  }
`;

export const CompanyMainText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  padding: 15px 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

export const BusinessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BusinessItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1rem;
  color: #2d3748;
  line-height: 1.6;

  &::before {
    content: "◆";
    color: #55b3d6;
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

export const CompanyInfoTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

export const TableLabel = styled.div`
  background: linear-gradient(135deg, #f0f7fb 0%, #e8f4f8 100%);
  padding: 16px 20px;
  font-weight: 700;
  color: #2d3748;
  border-right: 1px solid #e2e8f0;
  font-size: 0.95rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.85rem;
  }
`;

export const TableValue = styled.div`
  padding: 16px 20px;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.95rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;

    .label {
      font-weight: 600;
      min-width: 50px;
      color: #2d3748;
    }

    .value {
      color: #4a5568;
    }
  }
`;

// 03 - About History 섹션
export const HistorySection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

export const HistoryTitle = styled.div`
  max-width: 900px;
  margin: 0 auto 70px;

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 0 20px 0;
    line-height: 1.3;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #555555;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const TimelineContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  /* 중앙 수직선 */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const TimelineYear = styled.div`
  margin-bottom: 80px;
  position: relative;
  padding-bottom: 50px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 70px;
    padding-bottom: 40px;
  }
`;

export const YearLabel = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: #0066b3;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  text-align: center;
  letter-spacing: -2px;

  /* 년도 뒤 배경 강조 */
  background: linear-gradient(
    135deg,
    rgba(0, 102, 179, 0.05) 0%,
    rgba(0, 102, 179, 0.02) 100%
  );
  padding: 20px 40px;
  border-radius: 12px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;

  /* 중앙선과의 점 표시 */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -30px;
    width: 18px;
    height: 18px;
    background: #0066b3;
    border: 4px solid white;
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 0 2px #e0e0e0, 0 2px 8px rgba(0, 102, 179, 0.2);
    z-index: 3;

    @media (max-width: 768px) {
      left: 30px;
      width: 14px;
      height: 14px;
      border-width: 3px;
      bottom: -28px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 16px 24px;
    margin-bottom: 35px;
    text-align: left;
    background: linear-gradient(
      135deg,
      rgba(0, 102, 179, 0.08) 0%,
      rgba(0, 102, 179, 0.03) 100%
    );
    margin-left: 80px;
    width: calc(100% - 80px);

    &::before {
      left: 30px;
    }
  }
`;

export const EventsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

export const EventItem = styled.li`
  padding: 22px 28px;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #555555;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #ffffff;
    border-color: #0066b3;
    box-shadow: 0 6px 20px rgba(0, 102, 179, 0.15);
    transform: translateY(-2px);
  }

  /* 좌우 번갈아가며 배치 */
  &:nth-child(odd) {
    margin-left: auto;
    width: 48%;
    padding-right: 40px;
    border-left: 4px solid #0066b3;

    &::before {
      content: "";
      position: absolute;
      right: -22px;
      top: 50%;
      width: 18px;
      height: 2px;
      background: #e0e0e0;
      transform: translateY(-50%);
    }
  }

  &:nth-child(even) {
    width: 48%;
    padding-left: 40px;
    border-right: 4px solid #0066b3;

    &::before {
      content: "";
      position: absolute;
      left: -22px;
      top: 50%;
      width: 18px;
      height: 2px;
      background: #e0e0e0;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 968px) {
    &:nth-child(odd),
    &:nth-child(even) {
      width: calc(100% - 80px);
      margin-left: 80px !important;
      padding-left: 30px;
      padding-right: 30px;
      border-left: 4px solid #0066b3;
      border-right: none;

      &::before {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 80px !important;
    padding: 18px 22px;
    font-size: 0.9rem;
    border-left: 4px solid #0066b3;
    border-right: none;

    &:nth-child(odd),
    &:nth-child(even) {
      margin-left: 80px !important;
      border-left: 4px solid #0066b3;
      border-right: none;
    }
  }
`;

export const EventDate = styled.div`
  font-weight: 700;
  color: #0066b3;
  font-size: 0.85rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const EventDescription = styled.div`
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 6px;
  font-size: 0.98rem;
`;

export const EventDetail = styled.div`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.6;
`;

export const HistoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto 60px;
  padding-bottom: 60px;
  border-bottom: 2px solid #e0e0e0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
    padding-bottom: 40px;
  }
`;

export const StatItem = styled.div`
  text-align: center;

  .stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #0066b3;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 0.95rem;
    color: #666666;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .stat-number {
      font-size: 2rem;
    }

    .stat-label {
      font-size: 0.85rem;
    }
  }
`;

/* ===== Section Layout ===== */
export const OrgSection = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const OrgContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 60px;
`;

export const OrgSectionKicker = styled.div`
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: #4aa8d8;
  margin-bottom: 10px;
`;

export const OrgSectionTitle = styled.h2`
  margin: 0 0 22px 0;
  font-size: 28px;
  line-height: 1.2;
  color: #101828;

  @media (max-width: 820px) {
    font-size: 22px;
  }
`;

export const OrgTwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

/* ===== Card ===== */
export const OrgCard = styled.div`
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(16, 24, 40, 0.06);
  padding: 18px 18px 16px;
`;

export const OrgCardHeader = styled.div`
  margin-bottom: 14px;
`;

export const OrgCardTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #101828;
`;

export const OrgCardSubTitle = styled.div`
  margin-top: 6px;
  font-size: 1.4rem;
  color: #667085;
  line-height: 1.5;
`;

export const OrgInline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

/* ===== Badge ===== */
export const OrgBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: 800;
  border: 1px solid #d0d5dd;
  color: #101828;
  background: ${({ $tone }) => ($tone === "neutral" ? "#f2f4f7" : "#ffffff")};
`;

/* ===== Organization Diagram (Modernized) ===== */

/* ===== Org Diagram (New) ===== */

export const OrgDiagramWrap = styled.div`
  position: relative;
  padding: 18px;
  border: 1px solid #f2f4f7;
  border-radius: 16px;
  background: linear-gradient(180deg, #fcfcfd, #ffffff);
  min-height: 520px;
  overflow: hidden;

  /* 중앙 링으로 향하는 얇은 가이드 라인(원본 슬라이드 느낌) */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 46%;
    width: 1px;
    height: 140px;
    transform: translateX(-50%);
    background: #eaecf0;
    opacity: 0.9;
  }

  @media (max-width: 980px) {
    min-height: 620px;
  }
`;

const OrgNodeBase = styled.div`
  position: absolute;
  width: 320px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 22px rgba(16, 24, 40, 0.06);
`;

export const OrgNodeTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: #101828;
  margin-bottom: 10px;
`;

export const OrgNodePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const OrgNodePill = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 1.5rem;
  font-weight: 800;
  border: 1px solid #d0d5dd;

  ${({ $tone }) =>
    $tone === "green"
      ? `
    background:#f0fdf4;
    border-color:#bbf7d0;
    color:#14532d;
  `
      : `
    background:#eff8ff;
    border-color:#b2ddff;
    color:#0b4a6f;
  `}
`;

/* Top */
export const OrgNodeTop = styled(OrgNodeBase)`
  left: 50%;
  top: 18px;
  transform: translateX(-50%);
`;

/* Left */
export const OrgNodeLeft = styled(OrgNodeBase)`
  left: 18px;
  top: 185px;
`;

/* Right */
export const OrgNodeRight = styled(OrgNodeBase)`
  right: 18px;
  top: 185px;
`;

/* Center Stage */
export const OrgCenterStage = styled.div`
  position: absolute;
  left: 50%;
  top: 300px;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 좌우 연결 라인 */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 220px;
    height: 1px;
    background: #eaecf0;
    opacity: 0.9;
  }
  &::before {
    right: 100%;
  }
  &::after {
    left: 100%;
  }
`;

export const OrgCenterRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ffffff 58%, transparent 59%),
    conic-gradient(from 220deg, #4aa8d8, #79c5ea, #58b8d8, #7dbf5a, #4aa8d8);
  filter: drop-shadow(0 12px 18px rgba(16, 24, 40, 0.12));
`;

export const OrgCenterCore = styled.div`
  position: relative;
  z-index: 1;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #eaecf0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #101828;
  font-size: 14px;
`;

export const OrgCenterSub = styled.div`
  margin-top: 4px;
  font-size: 11px;
  font-weight: 800;
  color: #667085;
`;

/* 연결 점 */
export const OrgAnchorDot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #ffffff;
  border: 2px solid #d0d5dd;

  ${({ $pos }) => {
    if ($pos === "top")
      return "top:-6px; left:50%; transform:translateX(-50%);";
    if ($pos === "right")
      return "right:-6px; top:50%; transform:translateY(-50%);";
    if ($pos === "bottom")
      return "bottom:-6px; left:50%; transform:translateX(-50%);";
    return "left:-6px; top:50%; transform:translateY(-50%);";
  }}
`;

/* Bottom */
export const OrgNodeBottom = styled.div`
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 22px rgba(16, 24, 40, 0.06);
`;

export const OrgBottomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const OrgBottomBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f2f4f7;
  border: 1px solid #eaecf0;
  font-size: 12px;
  font-weight: 900;
  color: #101828;
`;

export const OrgTeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const OrgTeamCard = styled.div`
  border: 1px solid #eaecf0;
  border-radius: 14px;
  padding: 12px;
  background: #fcfcfd;
`;

export const OrgTeamTitle = styled.div`
  font-size: 13px;
  font-weight: 900;
  color: #101828;
  margin-bottom: 10px;
`;

export const OrgTeamList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #344054;
  font-size: 13px;
  line-height: 1.65;

  li {
    margin: 4px 0;
  }
`;

export const OrgTopRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrgCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrgRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ffffff 56%, transparent 57%),
    conic-gradient(from 180deg, #4aa8d8, #78c2e6, #4aa8d8);
  opacity: 0.95;
`;

export const OrgCenterLabel = styled.div`
  position: relative;
  z-index: 1;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #eaecf0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #101828;
  font-size: 14px;
`;

/**
 * 좌/우 부서 블록을 중앙 기준으로 배치
 * - $pos: "left" | "right"
 */
export const OrgArm = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $pos }) => ($pos === "left" ? "left: 18px;" : "right: 18px;")}
  width: 260px;

  @media (max-width: 980px) {
    width: 220px;
  }

  @media (max-width: 640px) {
    position: static;
    transform: none;
    width: 100%;
    margin-top: 12px;
  }
`;

export const OrgGroup = styled.div`
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 14px;
  padding: 12px;
`;

export const OrgGroupTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 900;
  color: #101828;
  margin-bottom: 10px;
`;

export const OrgPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const OrgPill = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: ${({ $strong }) => ($strong ? 900 : 700)};
  color: ${({ $muted }) => ($muted ? "#344054" : "#101828")};
  background: ${({ $muted }) => ($muted ? "#f2f4f7" : "#ffffff")};
  border: 1px solid ${({ $muted }) => ($muted ? "#eaecf0" : "#d0d5dd")};
`;

/* ===== People Table ===== */
export const OrgPeopleTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid #eaecf0;
  border-radius: 14px;
`;

export const OrgTHead = styled.thead``;
export const OrgTBody = styled.tbody``;
export const OrgTr = styled.tr``;

export const OrgTh = styled.th`
  background: #fcfcfd;
  color: #101828;
  font-weight: 900;
  font-size: 1.2rem;
  padding: 12px 10px;
  border-bottom: 1px solid #eaecf0;
  border-right: 1px solid #eaecf0;
  text-align: center;

  &:last-child {
    border-right: 0;
  }
`;

export const OrgTd = styled.td`
  font-size: 1.2rem;
  padding: 12px 10px;
  color: #101828;
  border-bottom: 1px solid #eaecf0;
  border-right: 1px solid #eaecf0;
  text-align: ${({ $left }) => ($left ? "left" : "center")};
  font-weight: ${({ $strong }) => ($strong ? 900 : 600)};

  &:last-child {
    border-right: 0;
  }

  ${OrgTr}:last-child & {
    border-bottom: 0;
    background: #fcfcfd;
  }
`;

export const OrgTableCaption = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #667085;
  line-height: 1.5;
`;

// 한 번 더 나에게 질풍같은 용기를

// --- 색상 변수 정의 ---
const colors = {
  primaryBlue: "#5B9BD5",
  primaryGreen: "#A9D18E",
  primaryTeal: "#4AB7B6",
  lightBlueBg: "#E7F3FF",
  lightGreenBg: "#EBF7E3",
  tealTitleBg: "#4AB7B6",
  borderColor: "#D9D9D9",
  textColor: "#333333",
  white: "#FFFFFF",
};

// --- 공통 믹스인 ---
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxStyle = css`
  ${flexCenter};
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.textColor};
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); // 입체감 약간 추가
`;

// --- 메인 컨테이너 (반응형 수정) ---
export const OrganiContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: ${colors.white};
  padding: 40px 20px; // 모바일 여백 확보
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 화면 정중앙 배치
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
  overflow-x: hidden; // 가로 스크롤 방지
`;

// --- 타이틀 라벨 (위치 수정) ---
export const OrganiLabelBubble = styled.div`
  /* absolute에서 relative로 변경하여 흐름에 태움 (반응형 대응) */
  position: relative;
  margin-bottom: 40px;
  background-color: ${colors.white};
  border: 1px solid ${colors.primaryBlue};
  padding: 10px 24px;
  border-radius: 30px;
  color: ${colors.primaryBlue};
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(91, 155, 213, 0.2);
  text-align: center;
  z-index: 20;
`;

// --- 연결선 (Connectors) ---
export const OrganiConnectorVertical = styled.div`
  width: 2px;
  height: ${(props) => props.height || "30px"};
  background-color: ${colors.borderColor};
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 20px; // 모바일에서 길이 축소
  }
`;

export const OrganiConnectorHorizontal = styled.div`
  height: 2px;
  width: ${(props) => props.width || "30px"};
  background-color: ${colors.borderColor};
  margin: auto 0;

  @media (max-width: 768px) {
    display: none; // 모바일 세로 배치 시 가로선 숨김
  }
`;

// --- 중앙 노드 (대표이사) ---
export const OrganiCenterWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  ${flexCenter};
  z-index: 10;
  margin: 0 20px; // 좌우 간격
  flex-shrink: 0; // 크기 줄어들지 않게 고정

  @media (max-width: 768px) {
    margin: 20px 0; // 모바일: 상하 간격
    order: 1; // 모바일: MiddleRow 내에서 가장 위로 올림 (선택사항)
  }
`;

export const OrganiCenterRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    ${colors.primaryBlue} 0deg 90deg,
    ${colors.primaryTeal} 90deg 180deg,
    ${colors.primaryGreen} 180deg 270deg,
    ${colors.primaryTeal} 270deg 360deg
  );
  opacity: 0.8;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const OrganiCenterInner = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: ${colors.white};
  border-radius: 50%;
  ${flexCenter};
  border: 4px solid #efefef;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.textColor};
`;

// --- 상/하/좌/우 분기 공통 ---
export const OrganiBranchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const OrganiDeptTitleBox = styled.div`
  ${boxStyle};
  background-color: ${(props) => props.bgColor || colors.primaryBlue};
  color: ${colors.white};
  font-weight: bold;
  min-width: 120px;
  position: relative;
  z-index: 2;
`;

export const OrganiTeamsRowWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  position: relative;
  flex-wrap: wrap; // 화면 작으면 줄바꿈 허용
  justify-content: center;

  /* 상단 연결선들 */
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 15px;
    background-color: ${colors.borderColor};
  }
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: 10px;
    right: 10px;
    height: 2px;
    background-color: ${colors.borderColor};
    z-index: 0;
  }

  /* 모바일 대응: 선 숨기기 */
  @media (max-width: 600px) {
    flex-direction: column; // 팀박스 세로 정렬
    align-items: center;
    &::before,
    &::after {
      display: none;
    }
    gap: 10px;
  }
`;

export const OrganiTeamBox = styled.div`
  ${boxStyle};
  background-color: ${(props) => props.bgColor || colors.lightBlueBg};
  border: 1px solid ${colors.borderColor};
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 8px;
    background-color: ${colors.borderColor};
  }

  @media (max-width: 600px) {
    &::before {
      display: none;
    }
    width: 100%; // 모바일 꽉 차게
    max-width: 200px;
  }
`;

// --- 레이아웃 조정을 위한 중간 래퍼 (Left - Center - Right) ---
export const OrganiMiddleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서 세로로 변경
  }
`;

// --- 좌/우측 (R&D, 영업) 스타일 ---
export const OrganiSideBranchContainer = styled.div`
  display: flex;
  align-items: center;

  /* Right일 경우 순서 반전 */
  ${(props) =>
    props.direction === "right" &&
    css`
      flex-direction: row-reverse;
    `}

  @media (max-width: 768px) {
    flex-direction: column; // 모바일: 세로 배치
    order: 2; // CEO(1) 아래로 배치
    margin-top: 20px;
    width: 100%;
  }
`;

export const OrganiSideTeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 15px;
  position: relative;

  /* 데스크탑용 연결선 */
  &::before {
    content: "";
    position: absolute;
    ${(props) =>
      props.direction === "left" ? "right: -15px;" : "left: -15px;"}
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 2px;
    background-color: ${colors.borderColor};
  }
  &::after {
    content: "";
    position: absolute;
    ${(props) => (props.direction === "left" ? "right: -8px;" : "left: -8px;")}
    top: 15px;
    bottom: 15px;
    width: 2px;
    background-color: ${colors.borderColor};
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: row; // 모바일: 팀들을 가로로 나열 (선택사항)
    justify-content: center;
    margin: 10px 0 0 0;

    /* 모바일에서 선 제거 */
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const OrganiSideTeamBox = styled(OrganiTeamBox)`
  /* 데스크탑용 작은 가로선 */
  &::before {
    top: 50%;
    ${(props) =>
      props.direction === "left" ? "right: -8px; left: auto;" : "left: -8px;"}
    transform: translateY(-50%);
    width: 8px;
    height: 2px;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    } // 모바일 선 제거
  }
`;

// --- 하단 (기술부) 특정 스타일 ---
export const OrganiBottomSectionWrapper = styled(OrganiBranchWrapper)`
  margin-top: 20px;
  width: 100%;
`;

export const OrganiTechColumnsGrid = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  padding-top: 20px;
  justify-content: center;

  /* 데스크탑용 연결선 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    height: 2px;
    background-color: ${colors.borderColor};
  }
  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background-color: ${colors.borderColor};
  }

  @media (max-width: 768px) {
    flex-direction: column; // 모바일: 세로 컬럼 스택
    gap: 30px;
    width: 100%;

    /* 선 숨기기 or 조정 */
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const OrganiTechColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background-color: ${colors.borderColor};
  }

  @media (max-width: 768px) {
    /* 모바일: 각 컬럼 위 선 제거 */
    &::before {
      display: none;
    }
  }
`;

export const OrganiTechTeamTitle = styled.div`
  ${boxStyle};
  background-color: ${colors.tealTitleBg};
  color: ${colors.white};
  font-weight: bold;
  width: 110px;
  padding: 8px 10px;
  margin-bottom: 5px;
`;

export const OrganiTechItemBox = styled.div`
  ${boxStyle};
  background-color: ${colors.white};
  border: 1px solid ${colors.borderColor};
  width: 110px;
  padding: 8px 10px;
  font-weight: normal;
`;

/* ===== Certification Section ===== */
export const CertificationSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const CertificationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const CertificationSubtitle = styled.div`
  font-size: 0.95rem;
  color: #4aa8d8;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const CertificationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #55b3d6;
    background: #f0f7fb;
    box-shadow: 0 4px 12px rgba(85, 179, 214, 0.15);
  }

  .cert-image {
    width: 100%;
    height: 180px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 10px;
    }
  }

  .cert-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #2d3748;
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 16px;

    .cert-image {
      height: 150px;
    }

    .cert-name {
      font-size: 0.85rem;
    }
  }
`;
/* ===== Certification Section End ===== */

/* ===== Patent Section ===== */
export const PatentSection = styled.section`
  width: 100%;
  background: #f8f9fa;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const PatentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PatentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const PatentSubtitle = styled.div`
  font-size: 0.95rem;
  color: #4aa8d8;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const PatentImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export const PatentImageCard = styled.div`
  aspect-ratio: 1 / 1.5;
  background: #f8f9fa;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #55b3d6;
    box-shadow: 0 4px 12px rgba(85, 179, 214, 0.2);
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "📄";
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    color: #cbd5e1;
    font-size: 3rem;
    z-index: 1;
  }
`;

export const PatentTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const PatentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  font-size: 0.9rem;

  th {
    background: linear-gradient(135deg, #2b5f8f 0%, #2d5a7b 100%);
    color: #ffffff;
    padding: 14px;
    text-align: left;
    font-weight: 700;
    border: 1px solid #2b5f8f;
  }

  td {
    padding: 12px 14px;
    border: 1px solid #e2e8f0;
    color: #4a5568;
  }

  tbody tr {
    transition: all 0.2s ease;

    &:hover {
      background: #f0f7fb;
    }

    &:nth-child(even) {
      background: #fafbfc;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th,
    td {
      padding: 10px 8px;
    }
  }
`;

/* ===== Patent Section End ===== */

/* ===== Program IP Section ===== */
export const ProgramIPSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ProgramIPContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProgramIPTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgramIPTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const ProgramIPSubtitle = styled.div`
  font-size: 0.95rem;
  color: #4aa8d8;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ProgramIPTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  max-height: 600px;
  overflow-y: auto;
`;

export const ProgramIPTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  font-size: 0.9rem;

  th {
    background: linear-gradient(135deg, #2b5f8f 0%, #2d5a7b 100%);
    color: #ffffff;
    padding: 14px;
    text-align: left;
    font-weight: 700;
    border: 1px solid #2b5f8f;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  td {
    padding: 12px 14px;
    border: 1px solid #e2e8f0;
    color: #4a5568;
  }

  tbody tr {
    transition: all 0.2s ease;

    &:hover {
      background: #f0f7fb;
    }

    &:nth-child(even) {
      background: #fafbfc;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    th,
    td {
      padding: 10px 8px;
    }
  }
`;

export const ProgramIPScrollHint = styled.span`
  font-size: 1rem;
  color: #55b3d6;
  font-weight: 600;
  background: linear-gradient(135deg, #f0f7fb 0%, #e8f4f8 100%);
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #55b3d6;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &::before {
    content: "↔";
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 5px 10px;
  }
`;
/* ===== Program IP Section End ===== */

/* ===== MOU Section ===== */
export const MOUSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const MOUContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const MOUTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const MOUImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const MOUImageCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MOUImageCardHeader = styled.div`
  background: linear-gradient(135deg, #2b5f8f 0%, #2d5a7b 100%);
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    min-height: 36px;
  }
`;

export const MOUImageCardBody = styled.div`
  aspect-ratio: 1 / 1.5;
  background: #f8f9fa;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: #55b3d6;
    box-shadow: 0 4px 12px rgba(85, 179, 214, 0.2);
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "📄";
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    color: #cbd5e1;
    font-size: 3rem;
    z-index: 1;
  }
`;
/* ===== MOU Section End ===== */

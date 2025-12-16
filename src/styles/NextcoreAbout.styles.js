import styled from "styled-components";

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


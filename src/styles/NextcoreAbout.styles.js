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
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;

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
  font-size: 1rem;
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
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
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

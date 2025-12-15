import styled from "styled-components";

// 테마 색상
export const THEME_COLOR = "#128AB0";

// 히어로 배너 배경 이미지
export const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

// 커스텀 스타일
export const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }
`;

export const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${(p) => p.$themeColor || THEME_COLOR};
  margin-bottom: 20px;
  border-bottom: 3px solid ${(p) => p.$themeColor || THEME_COLOR};
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;

  &::before {
    content: "✓";
    color: ${(p) => p.$themeColor || THEME_COLOR};
    font-weight: bold;
    font-size: 1.5rem;
    min-width: 30px;
    flex-shrink: 0;
  }
`;

export const BenefitText = styled.p`
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeaturesShowcase = styled.div`
  padding: 40px;
  background-color: #f5f5f5;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseItem = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ShowcaseImage = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${(p) => p.$themeColor || THEME_COLOR};
`;

export const ShowcaseCaption = styled.p`
  padding: 15px;
  text-align: center;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
`;

export const SystemDiagram = styled.div`
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

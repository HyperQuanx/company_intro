import styled from "styled-components";

// 테마 색상
export const THEME_COLOR = "#128AB0";

// 히어로 배너 배경 이미지
export const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

// 커스텀 스타일
export const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  font-size: 2rem;
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
  font-size: 1.2rem;

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

export const PageContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #222;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const TopShape = styled.div`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 700;
  color: #fff;
  background: ${(p) => p.$themeColor || "#128AB0"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$themeColor || "#128AB0"};
  color: #fff;
  font-size: 1.1rem;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${(p) => p.$themeColor || "#128AB0"};
  font-weight: 800;
`;

export const IntroSection = styled.section`
  margin-bottom: 32px;
`;

export const IntroBox = styled.div`
  background: linear-gradient(180deg, rgba(18, 138, 176, 0.05), transparent);
  padding: 20px;
  border-radius: 8px;
`;

export const IntroTitle = styled.h3`
  margin: 0 0 8px 0;
  color: ${(p) => p.$themeColor || "#128AB0"};
  font-size: 1.25rem;
  font-weight: 800;
`;

export const IntroDescription = styled.p`
  margin: 0;
  color: #444;
  line-height: 1.6;
`;

export const SectionBar = styled.div`
  width: 100%;
  padding: 12px 0;
  margin: 28px 0 12px;
  font-weight: 800;
  color: ${(p) => p.$themeColor || "#128AB0"};
  border-bottom: 3px solid ${(p) => p.$themeColor || "#128AB0"};
`;

/* Hero banner */
export const SolutionHeroBanner = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 28px;
  min-height: 260px;
`;

export const HeroBannerBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$bgImage});
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: 0;
`;

export const HeroBannerContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const HeroBannerTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 2rem;
  font-weight: 900;
`;

export const HeroBannerDescription = styled.p`
  margin: 0 0 16px;
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const HeroBannerButton = styled.a`
  display: inline-block;
  background: ${(p) => p.$themeColor || "#128AB0"};
  color: #fff;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  width: fit-content;
`;

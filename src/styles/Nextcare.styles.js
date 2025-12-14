import styled from "styled-components";

// 기본 테마 색상
const defaultColor = "#55b3d6";

// 메인 컨테이너
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 50px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding-bottom: 40px;
  position: relative;
  overflow: hidden;
  font-size: 1.25rem;
`;

// 헤더 영역
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 2px solid #eee;
  position: relative;
  min-height: 80px;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TopShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 80px;
  background-color: ${(props) => props.$themeColor || defaultColor};
  border-bottom-right-radius: 80px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 20px;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    border-radius: 0;
    height: 60px;
    font-size: 1.3rem;
  }
`;

export const HeaderIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: ${(props) => props.$themeColor || defaultColor};

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    transform: none;
  }
`;

export const HeaderTitle = styled.div`
  margin-left: auto;
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.$themeColor || defaultColor};

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.5rem;
  }
`;

// 인트로 섹션
export const IntroSection = styled.section`
  padding: 20px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const IntroBox = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
`;

export const IntroTitle = styled.div`
  color: ${(props) => props.$themeColor || defaultColor};
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 8px;
`;

export const IntroDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

// 카테고리 버튼
export const CategoryNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 20px;
    gap: 10px;
  }
`;

export const NavPill = styled.div`
  background-color: ${(props) => props.$themeColor || defaultColor};
  color: white;
  flex: 1;
  min-width: 120px;
  text-align: center;
  padding: 12px 8px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.9);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 10px 6px;
  }
`;

// 섹션 바
export const SectionBar = styled.div`
  background-color: #3b4a5f;
  color: white;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px 40px 15px 40px;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin: 20px 20px 15px 20px;
    font-size: 1rem;
  }
`;

// 주요 기능 컨테이너
export const FeaturesContainer = styled.div`
  display: flex;
  padding: 0 40px;
  gap: 20px;
  align-items: stretch;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const FeatureColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FeatureCenter = styled.div`
  flex: 1.2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: #f8f9fa;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 968px) {
    min-height: 250px;
  }
`;

export const FeatureHeader = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) =>
    props.$primary ? props.$themeColor || defaultColor : "#7f8c8d"};
`;

export const FeatureBox = styled.div`
  border: 1px solid #ddd;
  border-top: none;
  padding: 15px;
  font-size: 1.25rem;
  line-height: 1.7;
  height: 100%;
  background: white;
  border-radius: 0 0 5px 5px;

  ul {
    list-style: none;
    padding-left: 1.2em;
  }

  li {
    position: relative;
    margin-bottom: 10px;

    &::before {
      content: "•";
      color: ${(props) => props.$themeColor || defaultColor};
      font-weight: bold;
      position: absolute;
      left: -1.2em;
    }
  }
`;

export const HighlightText = styled.span`
  color: ${(props) => props.$themeColor || defaultColor};
  font-weight: bold;
`;

// 중앙 다이어그램
export const CenterDiagram = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PlatformBase = styled.div`
  background: ${(props) => {
    const color = props.$themeColor || defaultColor;
    return `linear-gradient(135deg, ${color}99 0%, ${color} 100%)`;
  }};
  width: 180px;
  height: 130px;
  transform: perspective(500px) rotateX(40deg);
  border-radius: 20px;
  box-shadow: ${(props) => `0 10px 0 ${props.$themeColor || defaultColor}cc`};
  position: absolute;
  z-index: 1;
`;

export const PlatformText = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  line-height: 1.4;
`;

export const FloatingIcon = styled.div`
  position: absolute;
  width: 75px;
  height: 75px;
  background: white;
  border: 3px solid ${(props) => props.$themeColor || defaultColor};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  text-align: center;
  z-index: 3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  color: #333;
  padding: 5px;
  line-height: 1.2;

  &.icon-1 {
    top: 10px;
    left: 10px;
  }
  &.icon-2 {
    top: 10px;
    right: 10px;
  }
  &.icon-3 {
    bottom: 10px;
    left: 20px;
  }
  &.icon-4 {
    bottom: 10px;
    right: 20px;
  }
`;

export const IconCircle = styled.div`
  width: 28px;
  height: 28px;
  background: ${(props) => props.$themeColor || defaultColor};
  border-radius: 50%;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
`;

// 주요 화면 그리드
export const ScreensContainer = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ScreenItem = styled.div`
  background-color: #333;
  border: 1px solid #ccc;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
`;

export const ScreenDash = styled.div`
  flex: 1;
  background: linear-gradient(to bottom, #2c3e50, #1a1a2e);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const DashPlaceholder = styled.div`
  color: #666;
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  width: 100%;
`;

export const ScreenCaption = styled.div`
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 10px 8px;
  font-size: 0.75rem;
  text-align: center;
  font-weight: bold;
  flex-shrink: 0;
`;

// 기능 설명 텍스트
export const FeatureDescription = styled.p`
  text-align: center;
  padding: 0 40px 20px;
  color: #333;
  line-height: 1.6;

  .highlight {
    color: #e74c3c;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 0 20px 20px;
    font-size: 0.95rem;
  }
`;

// 다이어그램 태그 컨테이너
export const DiagramTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const DiagramTag = styled.div`
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
  cursor: default;

  ${(props) => {
    const color = props.$themeColor || defaultColor;
    return props.$primary
      ? `
      background: linear-gradient(135deg, ${color} 0%, ${color}cc 100%);
      color: white;
      border: none;
      box-shadow: 0 2px 8px ${color}4d;
    `
      : `
      background: white;
      color: #333;
      border: 2px solid ${color};
    `;
  }}

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px
      ${(props) => (props.$themeColor || defaultColor) + "4d"};
  }
`;

// 하단 기능 박스 그리드
export const FeatureGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 20px 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    padding: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureGridItem = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const FeatureGridHeader = styled.div`
  background-color: ${(props) => props.$color || defaultColor};
  color: white;
  padding: 8px 10px;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;
`;

export const FeatureGridContent = styled.div`
  padding: 10px;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #555;
  min-height: 120px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 10px;
    margin-bottom: 5px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${(props) => props.$themeColor || defaultColor};
    }
  }
`;

// 다이어그램 이미지 영역
export const DiagramImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  min-height: 300px;
  width: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .placeholder {
    color: #aaa;
    font-size: 1rem;
    text-align: center;
  }
`;

// 솔루션 히어로 배너 스타일
export const SolutionHeroBanner = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const HeroBannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$bgImage});
  background-size: ${(props) => (props.$contain ? "contain" : "cover")};
  background-color: ${(props) => props.$bgColor || "transparent"};
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(11, 23, 45, 0.85) 0%,
      rgba(16, 36, 74, 0.7) 50%,
      rgba(11, 23, 45, 0.5) 100%
    );
  }
`;

export const HeroBannerContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 60px 80px;
  max-width: 800px;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const HeroBannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroBannerDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroBannerButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: white;
  color: #333;
  font-weight: 700;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
`;

/* ========== 플랫폼 다이어그램 스타일 ========== */
export const PlatformDiagramContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 0 20px;
`;

export const PlatformDiagramTitle = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.$themeColor || "#0066B3"};
  margin-bottom: 20px;
`;

export const PlatformDiagramWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 25px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const DiagramMainBoard = styled.div`
  text-align: center;
  padding: 15px 20px;
  border: 2px solid ${(props) => props.$themeColor || "#0066B3"};
  border-radius: 5px;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.$themeColor || "#0066B3"};
  font-size: 1rem;
  background: #fff;
`;

export const DiagramArrowRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 12px 0;
`;

export const DiagramArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .arrow-up {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid ${(props) => props.$themeColor || "#0066B3"};
  }

  .arrow-line {
    width: 2px;
    height: 20px;
    background: ${(props) => props.$themeColor || "#0066B3"};
  }
`;

export const DiagramClientBox = styled.div`
  text-align: center;
  padding: 12px 20px;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
`;

export const DiagramPlatformSection = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const DiagramPlatformHeader = styled.div`
  background: #f0f0f0;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export const DiagramPlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 15px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DiagramPlatformItem = styled.div`
  background: ${(props) => props.$bgColor || "#fff"};
  border: 2px solid ${(props) => props.$borderColor || "#ddd"};
  border-radius: 20px;
  padding: 10px 15px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
`;

export const DiagramTargetSection = styled.div`
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border: 2px solid #ffc107;
  border-radius: 25px;
  padding: 15px 30px;
  text-align: center;
  margin: 20px auto;
  max-width: 320px;

  .title {
    font-weight: 700;
    color: #f57c00;
    font-size: 1rem;
    margin-bottom: 3px;
  }

  .subtitle {
    font-size: 0.85rem;
    color: #666;
  }
`;

export const DiagramTargetItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const DiagramTargetItem = styled.div`
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 0.8rem;
  border-radius: 4px;
  text-align: center;
  color: #333;
`;

export const DiagramFrameworkSection = styled.div`
  background: #37474f;
  border-radius: 5px;
  overflow: hidden;
`;

export const DiagramFrameworkHeader = styled.div`
  background: #455a64;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;

export const DiagramFrameworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #37474f;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DiagramFrameworkItem = styled.div`
  background: #546e7a;
  color: white;
  padding: 12px 10px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;

  .icons {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;

    .icon-box {
      width: 28px;
      height: 28px;
      background: #78909c;
      border-radius: 4px;
    }
  }
`;

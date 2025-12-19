import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  z-index: 2;
  margin-top: calc(100vh - 80px);
  background-color: white;

  @media (max-width: 968px) {
    margin-top: 0;
  }
`;

export const FullPageSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.$bgColor || "white"};
  padding: 2rem;

  /* 모바일/태블릿에서는 높이 자동 조정 */
  @media (max-width: 968px) {
    min-height: 50vh;
    padding: 4rem 1.5rem;
  }
`;

export const HeroSection = styled.section`
  position: fixed;
  top: 80px; /* 헤더 높이 */
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  color: white;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    position: relative;
    top: 0;
    min-height: 60vh;
    height: 60vh;
  }
`;

/* 배경 슬라이드쇼 컨테이너 */
export const BackgroundSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -5;
`;

/* 개별 슬라이드 비디오 */
export const BackgroundSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: fadeSlide 15s infinite;

  /* 1. 비디오 01 */
  &:nth-child(1) {
    animation-delay: 0s;
  }

  /* 2. 비디오 02 */
  &:nth-child(2) {
    animation-delay: 5s;
  }

  /* 3. 비디오 03 */
  &:nth-child(3) {
    animation-delay: 10s;
  }

  /* 비디오 스타일 */
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* 페이드 애니메이션 */
  @keyframes fadeSlide {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    5% {
      opacity: 1;
    }
    33% {
      opacity: 1;
    }
    38% {
      opacity: 0;
      transform: scale(1.05);
    }
    100% {
      opacity: 0;
    }
  }
`;

/* 짙은 남색 오버레이 */
export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(11, 23, 45, 0.9) 0%,
    rgba(16, 36, 74, 0.8) 100%
  );
`;

/* Carousel Styles */
export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;

  /* Slick 관련 높이 설정 */
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  /* Slick Dots 커스터마이징 */
  .slick-dots {
    bottom: 40px;

    li {
      margin: 0 5px;
    }

    li button:before {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.4);
      opacity: 1;
    }

    li.slick-active button:before {
      color: #fff;
      font-size: 12px;
    }

    @media (max-width: 968px) {
      display: none !important;
    }
  }
`;

export const HeroSlide = styled.div`
  outline: none;
  padding: 1rem;
  height: 100%;
  display: flex !important; /* slick override */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  animation: fadeIn 0.8s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButton = styled.button`
  background-color: white;
  color: #55b3d6;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

/* 새로운 히어로 콘텐츠 스타일 */
export const HeroContentStatic = styled.div`
  position: relative;
  z-index: 10;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
  opacity: ${(props) => props.$opacity || 1};
  transition: opacity 0.3s ease-out;
  animation: ${(props) => (props.$isVisible ? "fadeInUp 1s ease-out" : "none")};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroMainTitle = styled.h1`
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const HeroSubtitleStatic = styled.p`
  font-size: 26px;
  color: #b0c4de;
  margin-bottom: 30px;
  font-weight: 300;

  .highlight {
    color: #61ce70;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #aabdd1;
  margin-bottom: 50px;
  max-width: 650px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroButton = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => {
    switch (props.$variant) {
      case "green":
        return "#6cb958";
      case "blue":
        return "#4aa8d8";
      case "grey":
        return "#5a6268";
      default:
        return "#6cb958";
    }
  }};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: #1c1e21;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #55b3d6;
    margin: 1rem auto 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: #55b3d6;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.8rem;
    color: #1c1e21;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.5;
    flex-grow: 1;
  }

  .icon {
    font-size: 1.8rem;
    color: #55b3d6;
    margin-bottom: 1rem;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  .text-content {
    flex: 1;

    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      color: #4b4b4b;
      line-height: 1.8;
    }
  }

  .image-placeholder {
    flex: 1;
    width: 100%;
    height: 400px;
    background-color: #f0f2f5;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888;
    font-weight: 600;
  }
`;

/* ===== Statistics Section ===== */
export const StatsSection = styled.section`
  background: linear-gradient(135deg, #0a1628 0%, #1a365d 100%);
  padding: 100px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const StatsSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: #55b3d6;
    box-shadow: 0 20px 40px rgba(85, 179, 214, 0.2);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #55b3d6 0%, #4169e1 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      height: 30px;
      stroke: white;
    }
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(135deg, #55b3d6 0%, #61ce70 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;

    .stat-number {
      font-size: 2.5rem;
    }
  }
`;

/* ===== Why Choose Us Section ===== */
export const WhyChooseSection = styled.section`
  background: #ffffff;
  padding: 100px 40px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const WhyChooseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const WhyChooseSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;

  .kicker {
    font-size: 1.5rem;
    font-weight: 700;
    color: #55b3d6;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a1a2e;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyChooseCard = styled.div`
  background: #f8f9fa;
  border-radius: 20px;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #55b3d6 0%, #61ce70 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    background: #ffffff;
    border-color: #55b3d6;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
    }

    .card-icon {
      background: linear-gradient(135deg, #55b3d6 0%, #4169e1 100%);

      svg {
        stroke: white;
      }
    }
  }

  .card-icon {
    width: 70px;
    height: 70px;
    background: #e8f4f8;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: all 0.4s ease;

    svg {
      width: 35px;
      height: 35px;
      stroke: #55b3d6;
      transition: all 0.4s ease;
    }
  }

  .card-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 12px;
  }

  .card-description {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 30px 24px;
  }
`;

/* ===== CTA Section ===== */
export const CTASection = styled.section`
  background: linear-gradient(135deg, #55b3d6 0%, #4169e1 100%);
  padding: 100px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding-bottom: 150px;
`;

export const CTATitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CTADescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CTAButtonStyled = styled.button`
  padding: 16px 36px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.$variant === "primary"
      ? `
    background: #ffffff;
    color: #4169e1;
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  `
      : `
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.5);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #ffffff;
      transform: translateY(-3px);
    }
  `}

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

/* ===== Tech Partners Section ===== */
export const PartnersSection = styled.section`
  background: #f8f9fa;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PartnersSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #666;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const PartnersGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const PartnerLogo = styled.div`
  padding: 20px 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 1.1rem;
    font-weight: 700;
    color: #888;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    min-width: 120px;

    span {
      font-size: 0.9rem;
    }
  }
`;

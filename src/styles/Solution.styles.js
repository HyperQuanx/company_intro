import styled, { keyframes } from "styled-components";

// Animations
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const SolutionSection = styled.section`
  padding: 120px 40px;
  background: linear-gradient(180deg, #0a0f1c 0%, #111827 50%, #0a0f1c 100%);
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  /* 배경 그리드 패턴 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(rgba(85, 179, 214, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(85, 179, 214, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* 글로우 효과 */
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(85, 179, 214, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  z-index: 1;

  .section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: rgba(85, 179, 214, 0.1);
    border: 1px solid rgba(85, 179, 214, 0.3);
    border-radius: 50px;
    margin-bottom: 24px;

    span {
      font-size: 0.85rem;
      font-weight: 600;
      color: #55b3d6;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .dot {
      width: 8px;
      height: 8px;
      background: #55b3d6;
      border-radius: 50%;
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    line-height: 1.2;

    .gradient-text {
      background: linear-gradient(135deg, #55b3d6 0%, #61ce70 50%, #55b3d6 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: ${shimmer} 3s linear infinite;
    }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.6);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;

    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const CardsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  &:last-child {
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);

    &:last-child {
      grid-template-columns: repeat(2, 1fr);
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &:last-child {
      grid-template-columns: 1fr;
    }
  }
`;

export const SolutionCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 420px;

  /* 호버 시 나타나는 그라데이션 보더 */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(85, 179, 214, 0.5) 0%,
      rgba(97, 206, 112, 0.5) 50%,
      rgba(85, 179, 214, 0.5) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  /* 배경 글로우 */
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(85, 179, 214, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: transparent;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.3),
      0 0 100px rgba(85, 179, 214, 0.1);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
    min-height: auto;
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(85, 179, 214, 0.2) 0%,
    rgba(97, 206, 112, 0.1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  position: relative;
  transition: all 0.4s ease;

  /* 아이콘 글로우 */
  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 22px;
    background: linear-gradient(135deg, #55b3d6, #61ce70);
    opacity: 0;
    z-index: -1;
    filter: blur(8px);
    transition: opacity 0.4s ease;
  }

  svg {
    width: 40px;
    height: 40px;
    color: #55b3d6;
    transition: all 0.4s ease;
  }

  ${SolutionCard}:hover & {
    background: linear-gradient(135deg, #55b3d6 0%, #61ce70 100%);
    transform: scale(1.1);

    &::before {
      opacity: 0.5;
    }

    svg {
      color: #ffffff;
      animation: ${float} 2s ease-in-out infinite;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  ${SolutionCard}:hover & {
    color: #55b3d6;
  }
`;

export const CardSubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 24px;
  flex-grow: 1;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(85, 179, 214, 0.3),
    transparent
  );
  margin-bottom: 24px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const Tag = styled.div`
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(85, 179, 214, 0.2) 0%, rgba(97, 206, 112, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${SolutionCard}:hover & {
    border-color: rgba(85, 179, 214, 0.3);
    color: #55b3d6;

    &::before {
      opacity: 1;
    }
  }
`;

/* 카드 하단 화살표 버튼 */
export const CardArrow = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.4s ease;
  }

  ${SolutionCard}:hover & {
    background: linear-gradient(135deg, #55b3d6 0%, #61ce70 100%);
    border-color: transparent;
    transform: scale(1.1);

    svg {
      color: #ffffff;
      transform: translateX(3px);
    }
  }
`;

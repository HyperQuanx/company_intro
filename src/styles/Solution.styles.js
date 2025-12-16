import styled from "styled-components";

export const SolutionSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fbfd 0%, #eef6f9 100%);
  min-height: 100vh;
  min-width: 100%;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #222;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const CardsContainer = styled.div`
  // max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  &:first-child {
    /* 위 3개 */
  }

  &:last-child {
    /* 아래 2개 */
  }

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SolutionCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  width: 480px;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(85, 179, 214, 0.08);
  border: 1px solid rgba(85, 179, 214, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #55b3d6, #7ec8e3);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(85, 179, 214, 0.2);
    border-color: rgba(85, 179, 214, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 1200px) {
    width: 340px;
    min-height: 380px;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    min-height: auto;
  }
`;

export const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(85, 179, 214, 0.1) 0%,
    rgba(85, 179, 214, 0.05) 100%
  );
  border: 2px solid rgba(85, 179, 214, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 1px solid rgba(85, 179, 214, 0.1);
  }

  svg {
    width: 50px;
    height: 50px;
    color: #55b3d6;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.span`
  font-size: 1.2rem;
  color: #999;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1.5rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: auto;
  width: 100%;
`;

export const Tag = styled.div`
  width: calc(50% - 0.5rem);
  padding: 1.2rem 0.8rem;
  background: linear-gradient(
    135deg,
    rgba(85, 179, 214, 0.15) 0%,
    rgba(85, 179, 214, 0.08) 100%
  );
  border: 1px solid rgba(85, 179, 214, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  color: #444;
  font-weight: 700;
  text-align: center;
  line-height: 1.4;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  ${SolutionCard}:hover & {
    background: linear-gradient(
      135deg,
      rgba(85, 179, 214, 0.25) 0%,
      rgba(85, 179, 214, 0.15) 100%
    );
    border-color: rgba(85, 179, 214, 0.4);
    color: #2a8ab0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(85, 179, 214, 0.15);
  }
`;

import styled from "styled-components";

// 테마 색상
export const THEME_COLOR = "#E36C09";

// 히어로 배너 배경 이미지
export const HERO_BG_IMAGE = "/solution05.png";

// 커스텀 스타일
export const ReferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 20px;
  }
`;

export const ReferenceSection = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${THEME_COLOR};
    margin-bottom: 20px;
    padding: 15px 0;
    border-bottom: 2px solid ${THEME_COLOR};
  }
`;

export const ReferenceCard = styled.div`
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

export const ReferenceImageArea = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #ffe4cc 0%, #ffd9b3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ccc;
  border-bottom: 3px solid ${THEME_COLOR};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ReferenceTitle = styled.div`
  padding: 15px;
  text-align: center;
  color: #222;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const SpecsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const SpecCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  h4 {
    font-size: 1.1rem;
    color: ${THEME_COLOR};
    margin-bottom: 15px;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    border-radius: 4px;
  }
`;

import styled from "styled-components";

// 테마 색상
export const THEME_COLOR = "#9FC267";

// 히어로 배너 배경 이미지
export const HERO_BG_IMAGE = "/solution02.png";

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
  background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e1 100%);
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

export const ReferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
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
  background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e1 100%);
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

export const ReferenceDash = styled.div`
  /* flex: 1;  <- 부모가 flex일 때 사용하는 속성, 여기서는 제거해도 무방 */
  /* display: flex; <- grid와 충돌하므로 제거 */
  /* align-items: center; <- grid-template-columns를 쓰므로 불필요 */
  /* justify-content: center; <- grid-template-columns를 쓰므로 불필요 */

  display: grid;
  grid-template-columns: ${(p) => `repeat(${p.$cols || 1}, 1fr)`};
  gap: 0;
  width: 100%;
  min-height: 200px;
  /* background: linear-gradient(to bottom, #2c3e50, #1a1a2e); <- 이미지가 꽉 차면 안 보이므로 필요 없음 */
  /* overflow: hidden; <- 필요에 따라 유지 또는 제거 */

  img {
    /* flex: 1; <- 부모가 flex가 아니므로 제거 */
    width: 100%; /* 가로 꽉 채우기 */
    height: 100%; /* 세로 꽉 채우기 */
    object-fit: cover; /* 비율 유지하며 영역을 꽉 채움 (잘림 발생 O) */
    /* object-fit: fill; <- 비율 무시하고 강제로 늘림 (찌그러짐 O) */
    display: block; /* 이미지 하단 미세한 공백 제거 */
    min-width: 0;
  }
`;

export const DashPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #999;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-right: none;
  }
`;

export const EmptyPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 2px dashed #ddd;
`;

export const EmptyText = styled.div`
  font-size: 1rem;
  color: #999;
  margin-bottom: 10px;
`;

export const EmptyLabel = styled.div`
  font-size: 0.9rem;
  color: #bbb;
  font-weight: 600;
`;

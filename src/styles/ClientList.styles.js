import styled, { keyframes } from "styled-components";

// 오른쪽으로 이동하는 애니메이션
const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

// 왼쪽으로 이동하는 애니메이션
const scrollLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const ClientListContainer = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: #f8f9fa;
  overflow: hidden;
`;

export const ClientListHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 10px;

    span {
      color: #4169e1;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

export const CategoryNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CategoryButton = styled.button`
  padding: 12px 24px;
  border: 2px solid ${(props) => (props.$isActive ? "#4169e1" : "#ddd")};
  border-radius: 30px;
  background-color: ${(props) => (props.$isActive ? "#4169e1" : "#fff")};
  color: ${(props) => (props.$isActive ? "#fff" : "#333")};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: #4169e1;
    background-color: ${(props) => (props.$isActive ? "#4169e1" : "#f0f4ff")};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SliderRow = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  animation: ${(props) => (props.$direction === "left" ? scrollLeft : scrollRight)}
    ${(props) => props.$duration || "30s"} linear infinite;
`;

export const ClientImage = styled.div`
  flex-shrink: 0;
  height: 80px;
  display: flex;
  align-items: center;
  margin-right: 0;

  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 60px;
  }
`;

// 단일 카테고리 보기용 스타일
export const SingleCategoryView = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
`;

export const SingleCategoryTrack = styled.div`
  display: flex;
  align-items: center;
  animation: ${scrollRight} ${(props) => props.$duration || "20s"} linear infinite;
`;

export const CategoryImageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;


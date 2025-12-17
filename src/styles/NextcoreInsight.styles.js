import styled from "styled-components";

export const NewsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NewsSectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1c1e21;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const NewsSectionDescription = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const NewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const NewsCard = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);

    .news-image {
      transform: scale(1.05);
    }

    .news-title {
      color: #55b3d6;
    }
  }
`;

export const NewsImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
`;

export const NewsContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const NewsDate = styled.span`
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const NewsTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1c1e21;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NewsDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  flex-grow: 1;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const NewsTag = styled.span`
  display: inline-block;
  background-color: #e8f4f8;
  color: #55b3d6;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: auto;
  width: fit-content;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #999;

  p {
    font-size: 1.1rem;
    margin: 1rem 0;
  }
`;

export const NewsSortContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const NewsSortButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #4169e1;
  background-color: ${(props) => (props.$active ? "#4169e1" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#4169e1")};
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  transition: all 0.3s ease;

  &:hover {
    background-color: #4169e1;
    color: white;
    font-weight: bold;
  }
`;

import styled from "styled-components";

// ===== 정책 페이지 섹션 =====
export const PolicySection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const PolicyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

// ===== 정책 페이지 제목 및 설명 =====
export const PolicyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #101828;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 32px;
    background: #55b3d6;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PolicyDescription = styled.p`
  font-size: 1rem;
  color: #667085;
  line-height: 1.6;
  margin-bottom: 40px;
`;

// ===== 정책 목차 =====
export const PolicyTableOfContents = styled.div`
  background: #f9fafb;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 50px;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #101828;
    margin: 0 0 20px 0;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const PolicyTocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PolicyTocItem = styled.li`
  a {
    font-size: 0.95rem;
    color: #55b3d6;
    text-decoration: none;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "▸";
      color: #55b3d6;
      font-weight: bold;
    }

    &:hover {
      color: #3d9fc2;
      text-decoration: underline;
    }
  }
`;

// ===== 정책 항목 =====
export const PolicyItem = styled.div`
  margin-bottom: 50px;
  scroll-margin-top: 100px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PolicyItemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #101828;
  margin: 0 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #eaecf0;
`;

export const PolicyItemContent = styled.div`
  color: #344054;
  line-height: 1.8;
  font-size: 0.95rem;

  p {
    margin: 0 0 16px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: 16px 0;
    padding-left: 24px;

    li {
      margin-bottom: 8px;
      color: #344054;
    }
  }

  strong {
    color: #101828;
    font-weight: 700;
  }

  em {
    color: #4169e1;
    font-style: italic;
  }

  a {
    color: #4169e1;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.9rem;

    th {
      background: #f3f4f6;
      color: #101828;
      font-weight: 700;
      padding: 12px;
      text-align: left;
      border: 1px solid #e5e7eb;
    }

    td {
      padding: 12px;
      border: 1px solid #e5e7eb;
      color: #344054;
    }

    tr:nth-child(even) {
      background: #f9fafb;
    }
  }
`;

// ===== 정책 강조 박스 =====
export const PolicyHighlight = styled.div`
  background: #f0f9fc;
  border-left: 4px solid #55b3d6;
  padding: 16px 20px;
  margin: 20px 0;
  border-radius: 8px;

  p {
    margin: 0;
    color: #0e7490;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

// ===== 수정일 정보 =====
export const PolicyLastUpdated = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-top: 1px solid #eaecf0;
  margin-top: 50px;
  color: #667085;
  font-size: 0.9rem;

  p {
    margin: 0;

    &:first-child {
      font-weight: 600;
      color: #101828;
      margin-bottom: 4px;
    }
  }
`;

import styled from "styled-components";

export const BuPerPage = styled.div`
  width: 100%;
`;

export const BuPerSection = styled.section`
  width: 100%;
  padding: 56px 0 80px;
  background: #ffffff;
`;

export const BuPerContainer = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: calc(100% - 28px);
  }
`;

export const BuPerIntro = styled.div`
  display: grid;
  gap: 10px;
`;

export const BuPerIntroTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
`;

export const BuPerIntroDesc = styled.p`
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.75;
  color: #475569;
`;

export const BuPerDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(15, 23, 42, 0.12),
    rgba(15, 23, 42, 0.04)
  );
  margin: 22px 0 28px;
`;

/* =========================
 * Timeline (slide17-like)
 * ========================= */
export const BuPerTimelineArea = styled.div`
  display: grid;
  gap: 18px;
`;

export const BuPerTimelineHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 720px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BuPerTimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
`;

export const BuPerTimelineSub = styled.p`
  margin: 6px 0 0;
  font-size: 0.95rem;
  color: #64748b;
`;

export const BuPerCtaRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const BuPerBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #1f2937;
  background: rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(15, 23, 42, 0.1);
`;

export const BuPerStairs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const BuPerStep = styled.div`
  position: relative;
  display: grid;
  align-content: start;
  gap: 10px;

  padding: 20px 16px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.1);
  }

  /* 작은 포인트(슬라이드의 빨간 화살표 느낌을 "pin"으로 재해석) */
  &::after {
    content: "";
    position: absolute;
    right: 14px;
    top: 14px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #ef4444;
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0.12);
  }
`;

export const BuPerStepYear = styled.div`
  display: inline-flex;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 10px;
  background: rgba(30, 58, 138, 0.08);
  color: #1e3a8a;
  font-weight: 900;
  letter-spacing: 0.02em;
`;

export const BuPerStepBody = styled.div`
  display: grid;
  gap: 8px;
`;

export const BuPerStepDesc = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #334155;

  &[data-variant="highlight"] {
    padding-left: 10px;
    border-left: 3px solid rgba(30, 58, 138, 0.35);
    color: #0f172a;
    font-weight: 700;
  }
`;

/* =========================
 * Tables (slide18-like)
 * ========================= */
// 전체 레이아웃 컨테이너

export const BuPerSectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin-bottom: 40px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 100%;
    background-color: #0056b3; /* 포인트 컬러 */
  }

  span {
    font-size: 16px;
    color: #666;
    font-weight: 400;
    margin-left: 10px;
  }
`;
export const BuPerTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* 모바일 대응 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

export const BuPerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px; /* 테이블 최소 너비 보장 */

  @media (max-width: 1200px) {
    font-size: 13px;

    th,
    td {
      padding: 10px 12px;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    min-width: 700px;

    th,
    td {
      padding: 8px 10px;
    }
  }

  @media (max-width: 480px) {
    font-size: 11px;
    min-width: 600px;

    th,
    td {
      padding: 6px 8px;
    }
  }
`;

export const BuPerThead = styled.thead`
  background-color: #003366; /* 짙은 네이비 */
  color: #fff;
`;

export const BuPerTh = styled.th`
  padding: 15px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid #004080;
  white-space: nowrap;

  @media (max-width: 1200px) {
    padding: 12px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 11px;
  }
`;

export const BuPerTbody = styled.tbody`
  background-color: #fff;
`;

export const BuPerTr = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => (props.$isBold ? "#e8f4f8" : "#f8fbff")};
  }
  &:hover {
    background-color: #f0f4f8;
  }
`;

export const BuPerTd = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: ${(props) => (props.$isBold ? "#4169E1" : "#333")};
  font-weight: ${(props) => (props.$isBold ? "700" : "500")};
  background-color: ${(props) => (props.$isBold ? "#e8f4f8" : "transparent")};
  vertical-align: middle;
  line-height: 1.4;

  /* 각 컬럼별 정렬 */
  &:nth-child(1) {
    text-align: center;
    color: ${(props) => (props.$isBold ? "#4169E1" : "#555")};
  } /* 년도 */
  &:nth-child(2) {
    text-align: center;
  } /* 전담기관 */
  &:nth-child(3) {
    text-align: center;
  } /* 기간 */
  &:nth-child(4) {
    text-align: left;
    padding-left: 20px;
  } /* 과제명 */

  @media (max-width: 1200px) {
    padding: 10px 12px;
    font-size: 13px;

    &:nth-child(4) {
      padding-left: 16px;
    }
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 12px;

    &:nth-child(4) {
      padding-left: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 11px;

    &:nth-child(4) {
      padding-left: 8px;
    }
  }
`;

// [추가] 슬라이드 19번용: 좌측 세로형 헤더 (짙은 배경)
export const BuPerVerticalHeader = styled.th`
  background-color: #0f2f5c; /* 헤더와 유사한 짙은 네이비 */
  color: #fff;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 10px;
  white-space: pre-line; /* 줄바꿈 허용 */

  @media (max-width: 1200px) {
    font-size: 13px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 8px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 6px;
  }
`;

// [추가] 슬라이드 19번용: 텍스트 리스트 컨테이너 (왼쪽 정렬)
export const BuPerListTd = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  vertical-align: top; /* 내용이 많으므로 상단 정렬 */
  text-align: left; /* 텍스트 왼쪽 정렬 강제 */
  line-height: 1.5;

  @media (max-width: 1200px) {
    font-size: 13px;
    padding: 10px 12px;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 10px;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 8px;
    line-height: 1.2;
  }
`;

// [추가] 체크/블릿 포인트 리스트 스타일
export const BuPerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 14px;
    margin-bottom: 6px;

    &::before {
      content: "${(props) => (props.$check ? "✓" : "•")}";
      position: absolute;
      left: 0;
      top: 0;
      color: ${(props) => (props.$check ? "#555" : "#888")};
      font-size: ${(props) => (props.$check ? "11px" : "14px")};
      font-weight: ${(props) => (props.$check ? "bold" : "normal")};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1200px) {
    li {
      padding-left: 12px;
      margin-bottom: 5px;

      &::before {
        font-size: ${(props) => (props.$check ? "10px" : "12px")};
      }
    }
  }

  @media (max-width: 768px) {
    li {
      padding-left: 11px;
      margin-bottom: 4px;

      &::before {
        font-size: ${(props) => (props.$check ? "9px" : "11px")};
      }
    }
  }

  @media (max-width: 480px) {
    li {
      padding-left: 10px;
      margin-bottom: 3px;

      &::before {
        font-size: ${(props) => (props.$check ? "8px" : "10px")};
      }
    }
  }
`;

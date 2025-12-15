import styled from "styled-components";

// 02
export const PageSection = styled.section`
  width: 100%;
  background: #ffffff;
`;

export const MapArea = styled.div`
  width: 100%;
  height: 420px;
  background: #f2f4f7;
  border-bottom: 1px solid #eaecf0;
`;

export const MapCanvas = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentArea = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 22px 20px 40px;
`;

export const InfoTable = styled.div`
  width: 100%;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 22px;
  padding: 18px 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const InfoLabel = styled.div`
  font-weight: 800;
  color: #101828;
  font-size: 1.25rem;
  line-height: 1.4;
  padding-top: 2px;
`;

export const InfoValue = styled.div`
  color: #101828;
  font-size: 1rem;
  line-height: 1.55;
`;

export const Divider = styled.div`
  height: 1px;
  background: #eaecf0;
  width: 100%;
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const LinkButton = styled.a`
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid #d0d5dd;
  background: #ffffff;
  color: #101828;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    background: #f9fafb;
  }
`;

export const Chip = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 800;
  color: #ffffff;
  background: #2f6bff;
  text-decoration: none;

  &:hover {
    opacity: 0.92;
  }
`;

export const TransitRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const TransitIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #f2f4f7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

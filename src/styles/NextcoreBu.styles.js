import styled from "styled-components";

export const BusinessProductsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const BusinessProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductsHeader = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const ProductsTag = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  color: #55b3d6;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const ProductsMainTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #1c1e21;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ProductsDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProductsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProductsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1c1e21;
  margin-bottom: 0.75rem;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;

export const CertificateImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductsRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImageLabel = styled.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`;

/* ====== Business Performance Styles ====== */

export const PerformanceSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const PerformanceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PerformanceIntro = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 3rem;
  }
`;

export const PerformanceIntroText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin: 0;

  strong {
    color: #55b3d6;
    font-weight: 700;
  }
`;

/* Timeline Styles */
export const TimelineSection = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1c1e21;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  overflow-x: auto;

  &::before {
    content: "";
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #3d5a80 0%, #3d5a80 100%);
    z-index: 0;
  }
`;

export const TimelineItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  z-index: 1;
  min-width: min-content;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  min-width: 140px;

  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

export const TimelineYear = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border: 3px solid #3d5a80;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #3d5a80;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

export const TimelineContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem;
    min-height: 100px;
  }
`;

/* Table Styles */
export const TableSection = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const TableHead = styled.thead`
  background-color: #3d5a80;
`;

export const TableHeaderCell = styled.th`
  padding: 1.25rem;
  text-align: center;
  color: white;
  font-weight: 700;
  white-space: nowrap;
  border-right: 1px solid #2d4563;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f8f9fa;
  }

  tr:hover {
    background-color: #f0f5fa;
  }
`;

export const TableCell = styled.td`
  padding: 1.25rem;
  text-align: center;
  color: #333;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
  }
`;

export const TableCellLeft = styled(TableCell)`
  text-align: left;
`;

/* Technology Details Table Styles */
export const TechDetailsWrapper = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const TechDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 0.85rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const TechDetailsHead = styled.thead`
  background-color: #3d5a80;
`;

export const TechDetailsHeaderCell = styled.th`
  padding: 1rem;
  text-align: center;
  color: white;
  font-weight: 700;
  border-right: 1px solid #2d4563;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
  }
`;

export const TechDetailsBody = styled.tbody``;

export const TechDetailsRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #f0f5fa;
  }
`;

export const TechDetailsCell = styled.td`
  padding: 1rem;
  text-align: left;
  color: #333;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
  }
`;

export const TechDetailsCellHeader = styled(TechDetailsCell)`
  background-color: #e8f4f8;
  color: #3d5a80;
  font-weight: 700;
  text-align: center;
  width: 150px;
`;

export const TechList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

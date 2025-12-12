import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "NanumSquare", sans-serif;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 4rem;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 60px;
    justify-content: space-between;
    gap: 0;
  }
`;

export const Logo = styled.div`
  font-weight: 800;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  height: 100%;

  a {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    color: #55b3d6; /* 이게 사이트 퍼스널 컬러임 */
  }
`;

/* Desktop Navigation */
export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  min-width: 220px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  gap: 0 !important; /* 상위 ul의 gap 무시 */
  border: 1px solid #eee;

  li {
    width: 100%;
  }

  a {
    display: block;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    color: #333;
    font-weight: 500;
    white-space: nowrap;

    &:hover {
      background-color: #f8f9fa;
      color: #55b3d6;
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.7rem;

  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  > a {
    font-weight: 700;
    font-size: 0.95rem;
    color: #333;
    cursor: pointer;
    transition: color 0.2s;
    padding: 2rem 0;
    white-space: nowrap;

    &:hover {
      color: #55b3d6;
    }
  }
`;

export const Nav = styled.nav`
  height: 100%;

  > ul {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
  }

  /* 첫 번째 Nav (제품 메뉴)에 flex-grow 적용 */
  &:first-of-type {
    flex: 1;
    
    > ul {
      justify-content: flex-start;
    }
  }

  /* 두 번째 Nav (회사 메뉴)는 오른쪽 정렬 */
  &:last-of-type {
    > ul {
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Mobile Navigation */
export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileSubMenu = styled.ul`
  background-color: #f8f9fa;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  li {
    width: 100%;
  }

  a {
    padding-left: 2.5rem !important;
    font-size: 0.9rem !important;
    color: #666 !important;
    font-weight: 500 !important;

    &:hover {
      color: #55b3d6 !important;
      background-color: #f0f0f0;
    }
  }
`;

export const MobileNavItem = styled.li`
  width: 100%;
  list-style: none;

  .mobile-menu-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    color: #333;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      background-color: #fafafa;
      color: #55b3d6;
    }

    .arrow {
      font-size: 0.8rem;
      transition: transform 0.2s;
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
    }
  }
`;

export const MobileNav = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px); /* 헤더 높이 제외 */
  background-color: white;
  z-index: 999;
  overflow-y: auto; /* 스크롤 가능 */
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  text-align: center;
  color: #fff;
  margin-top: auto;
  height: calc(100vh - 80px);
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #1c1e21;
  padding: 2rem;

  /* 모바일/태블릿에서는 높이 자동 조정 */
  @media (max-width: 968px) {
    height: auto;
    min-height: 50vh;
    scroll-snap-align: none;
    padding: 4rem 1.5rem;
  }

  p {
    opacity: 0.7;
    font-size: 0.9rem;
  }
`;

import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "NanumSquare", sans-serif;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
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
  box-sizing: border-box;
  width: 100%;

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
  flex-shrink: 0;

  a {
    color: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
  }

  img {
    max-height: 100%;
    width: auto;
    max-width: 150px;

    @media (max-width: 768px) {
      max-width: 200px;
    }
  }

  span {
    color: #55b3d6; /* 이게 사이트 퍼스널 컬러임 */
  }
`;

/* Desktop Navigation */
export const DropdownMenu = styled.ul`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: #4169e1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem 4rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 999;
  border-top: 1px solid #eee;

  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.$isCompany ? "flex-end" : "flex-start")};
  align-items: center;
  gap: 0;
  height: 50px;

  li {
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    height: 100%;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.2s ease;
    border-bottom: 2px solid transparent;
    margin: 0 0.25rem;

    &:hover {
      // color: #55b3d6;
      // border-bottom: 5px solid #55b3d6;
      border-bottom: 5px solid #fff;
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
  }

  > a {
    font-weight: 700;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => (props.$isActive ? "#fff" : "#333")};
    background-color: ${(props) =>
      props.$isActive ? "#4169e1" : "transparent"};
    padding: ${(props) => (props.$isActive ? "0.5rem 1rem" : "2rem 0")};
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 2px solid transparent;

    > .rightArea {
      font-size: 1.1rem;
    }

    &:hover {
      color: ${(props) => (props.$isActive ? "#fff" : "#4169e1")};
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
      justify-content: center;
    }
  }

  /* 두 번째 Nav (회사 메뉴)는 오른쪽 정렬 */
  &:last-of-type {
    > ul {
      justify-content: flex-end;
    }

    ${NavItem} > a {
      font-size: 1.1rem;
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
      color: #4169e1 !important;
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
      color: #4169e1;
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
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, #0a0f1c 0%, #050810 100%);
  color: #fff;
  width: 100%;
`;

export const FooterMain = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px 60px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr;
  gap: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 24px 40px;
  }
`;

export const FooterBrand = styled.div`
  .footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;

    .logo-icon {
      width: 48px;
      height: 48px;
      /* background: linear-gradient(135deg, #55b3d6 0%, #61ce70 100%); */
      background-color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;

      svg {
        width: 28px;
        height: 28px;
        color: white;
      }

      img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
      }
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 0%, #b0c4de 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .footer-description {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.8;
    margin-bottom: 28px;
  }

  .footer-social {
    display: flex;
    gap: 12px;

    a {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      svg {
        width: 20px;
        height: 20px;
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.3s ease;
      }

      &:hover {
        background: linear-gradient(135deg, #55b3d6 0%, #61ce70 100%);
        border-color: transparent;
        transform: translateY(-3px);

        svg {
          color: white;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    grid-column: span 3;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    text-align: center;

    .footer-logo {
      justify-content: center;
    }

    .footer-social {
      justify-content: center;
    }
  }
`;

export const FooterColumn = styled.div`
  .column-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 12px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #55b3d6, #61ce70);
    }
  }

  .column-links {
    display: flex;
    flex-direction: column;
    gap: 14px;

    a {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;

      &:hover {
        color: #55b3d6;
        transform: translateX(5px);
      }

      svg {
        width: 14px;
        height: 14px;
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover svg {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    .column-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .column-links a {
      justify-content: center;

      &:hover {
        transform: translateX(0);
      }
    }
  }
`;

export const FooterContact = styled.div`
  .column-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 24px;
    position: relative;
    padding-bottom: 12px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #55b3d6, #61ce70);
    }
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;

    .contact-icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(85, 179, 214, 0.1);
      border: 1px solid rgba(85, 179, 214, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      svg {
        width: 18px;
        height: 18px;
        color: #55b3d6;
      }
    }

    .contact-text {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .label {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .value {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    .column-title::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .contact-item {
      justify-content: center;
      text-align: left;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;

  .copyright {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.4);
  }

  .footer-legal {
    display: flex;
    gap: 24px;

    a {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.4);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #55b3d6;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 24px;

    .footer-legal {
      gap: 16px;
    }
  }
`;

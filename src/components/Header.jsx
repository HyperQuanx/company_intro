import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  DropdownMenu,
  HamburgerButton,
  MobileNav,
  MobileNavItem,
  MobileSubMenu,
} from "../styles/Layout.styles";
import logoIcon from "../../public/nextcore_main_icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null); // 모바일 서브메뉴 상태
  const location = useLocation();

  // 현재 경로가 해당 메뉴의 경로로 시작하는지 확인
  const isActivePath = (path) => {
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileOpenIndex(null);
  };

  const toggleMobileSubMenu = (index) => {
    setMobileOpenIndex(mobileOpenIndex === index ? null : index);
  };

  // 제품 메뉴 (왼쪽)
  const productNavItems = [
    {
      title: "Nextcare M",
      path: "/solutions/nextcare-m",
      subItems: [
        {
          title: "Nextcare - Monitoring",
          path: "/solutions/nextcare-m",
        },
        {
          title: "도입효과와 주요기능",
          path: "/solutions/nextcare-m/features",
        },
        { title: "구축 레퍼런스", path: "/solutions/nextcare-m/reference" },
      ],
    },
    {
      title: "Nextcare E",
      path: "/solutions/nextcare-e",
      subItems: [
        { title: "Nextcare - Energy", path: "/solutions/nextcare-e" },
        {
          title: "도입효과와 주요기능",
          path: "/solutions/nextcare-e/features",
        },
        { title: "구축 레퍼런스", path: "/solutions/nextcare-e/reference" },
      ],
    },
    {
      title: "Nextcare S",
      path: "/solutions/nextcare-s",
      subItems: [
        { title: "Nextcare - Safety", path: "/solutions/nextcare-s" },
        {
          title: "도입효과와 주요기능",
          path: "/solutions/nextcare-s/features",
        },
        { title: "구축 레퍼런스", path: "/solutions/nextcare-s/reference" },
      ],
    },
    {
      title: "Nextcare AI",
      path: "/solutions/nextcare-ai",
      subItems: [
        { title: "Nextcare - AI", path: "/solutions/nextcare-ai" },
        { title: "구축 레퍼런스", path: "/solutions/nextcare-ai/reference" },
      ],
    },
    {
      title: "Nextcare IoT",
      path: "/solutions/nextcare-iot",
      subItems: [
        { title: "Nextcare - IoT", path: "/solutions/nextcare-iot" },
        { title: "구축 레퍼런스", path: "/solutions/nextcare-iot/reference" },
      ],
    },
  ];

  // 회사 정보 메뉴 (오른쪽)
  const companyNavItems = [
    {
      title: "회사소개",
      path: "/about/intro",
      subItems: [
        { title: "Nextcore소개", path: "/about/intro" },
        { title: "오시는 길", path: "/about/location" },
        { title: "연혁", path: "/about/history" },
        { title: "조직도 및 구성", path: "/about/organization" },
        { title: "인증 및 지적재산권", path: "/about/certification" },
        { title: "기술 교류 및 MOU 실적", path: "/about/mou" },
        { title: "고객사", path: "/about/clients" },
      ],
    },
    {
      title: "사업분야",
      path: "/business/products",
      subItems: [
        { title: "주요 제품", path: "/business/products" },
        { title: "기술 개발 사업화 실적", path: "/business/performance" },
      ],
    },
    {
      title: "인사이트",
      path: "/insight/news",
      subItems: [
        { title: "홍보기사", path: "/insight/news" },
        { title: "관련영상", path: "/insight/videos" },
      ],
    },
    {
      title: "고객센터",
      path: "/contact/recruit",
      subItems: [
        { title: "인재채용", path: "/contact/recruit" },
        { title: "문의하기", path: "/contact/inquiry" },
      ],
    },
  ];

  // 모바일용 전체 메뉴
  const allNavItems = [...productNavItems, ...companyNavItems];

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" onClick={closeMenu}>
          <img
            src={logoIcon}
            alt="NEXTCORE Technology Logo"
            width="auto"
            height="30"
          />
        </Link>
      </Logo>

      {/* Desktop Navigation - 제품 메뉴 (왼쪽) */}
      <Nav>
        <ul>
          {productNavItems.map((item, index) => (
            <NavItem key={index} $isActive={isActivePath(item.path)}>
              <Link to={item.path}>{item.title}</Link>
              {/* Dropdown Menu */}
              {item.subItems && (
                <DropdownMenu>
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.path}>{sub.title}</Link>
                    </li>
                  ))}
                </DropdownMenu>
              )}
            </NavItem>
          ))}
        </ul>
      </Nav>

      {/* Desktop Navigation - 회사 메뉴 (오른쪽) */}
      <Nav>
        <ul>
          {companyNavItems.map((item, index) => (
            <NavItem key={index} $isActive={isActivePath(item.path)}>
              <Link to={item.path}>{item.title}</Link>
              {/* Dropdown Menu */}
              {item.subItems && (
                <DropdownMenu>
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.path}>{sub.title}</Link>
                    </li>
                  ))}
                </DropdownMenu>
              )}
            </NavItem>
          ))}
        </ul>
      </Nav>

      {/* Mobile Hamburger Button */}
      <HamburgerButton onClick={toggleMenu} aria-label="메뉴 열기">
        {isMenuOpen ? "✕" : "☰"}
      </HamburgerButton>

      {/* Mobile Navigation Menu */}
      <MobileNav $isOpen={isMenuOpen}>
        <ul>
          {allNavItems.map((item, index) => (
            <MobileNavItem key={index} $isOpen={mobileOpenIndex === index}>
              <div
                className="mobile-menu-title"
                onClick={() => toggleMobileSubMenu(index)}
              >
                {item.title}
                <span className="arrow">▼</span>
              </div>
              {item.subItems && (
                <MobileSubMenu $isOpen={mobileOpenIndex === index}>
                  {item.subItems.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.path} onClick={closeMenu}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </MobileSubMenu>
              )}
            </MobileNavItem>
          ))}
        </ul>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;

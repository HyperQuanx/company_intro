import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterMain,
  FooterBrand,
  FooterColumn,
  FooterContact,
  FooterBottom,
} from "../styles/Layout.styles";

// Icons
const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        {/* Brand Section */}
        <FooterBrand>
          <div className="footer-logo">
            <div className="logo-icon">
              {/* <LogoIcon /> */}
              <img src="/nextcore_logo.png" alt="logo" />
            </div>
            <span className="logo-text">NEXT CORE</span>
          </div>
          <p className="footer-description">
            끊임없는 기술개발을 통해 마음까지 케어할 수 있는
            넥스트코어테크놀로지로 성장하겠습니다.
          </p>
          <div className="footer-social">
            <a
              href="https://linkonbiz.com/seller/3331"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blog"
            >
              <img src="/linkonbg.png" alt="linkonbiz" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC7pgvyAUqleOMbBcIiDIHew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.saramin.co.kr/zf_user/company-info/view/csn/UmlJTHhsNHROWmIwSnMxcVlqUHQrZz09/company_nm/(%EC%A3%BC)%EB%84%A5%EC%8A%A4%ED%8A%B8%EC%BD%94%EC%96%B4%ED%85%8C%ED%81%AC%EB%86%80%EB%A1%9C%EC%A7%80?srsltid=AfmBOopgie7dx-x7dDyy35RQDOBc9gssYLk2V0gQyd7fEYES0sBUYMyi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
              <img src="/saramIn-removebg-preview.png" alt="saramin" />
            </a>
          </div>
        </FooterBrand>

        {/* Solutions Column */}
        <FooterColumn>
          <h4 className="column-title">Solutions</h4>
          <div className="column-links">
            <Link to="/solutions/nextcare-m">
              <ArrowIcon />
              Nextcare Monitoring
            </Link>
            <Link to="/solutions/nextcare-e">
              <ArrowIcon />
              Nextcare Energy
            </Link>
            <Link to="/solutions/nextcare-s">
              <ArrowIcon />
              Nextcare Safety
            </Link>
            <Link to="/solutions/nextcare-ai">
              <ArrowIcon />
              Nextcare AI
            </Link>
            <Link to="/solutions/nextcare-iot">
              <ArrowIcon />
              Nextcare IoT
            </Link>
          </div>
        </FooterColumn>

        {/* Company Column */}
        <FooterColumn>
          <h4 className="column-title">Company</h4>
          <div className="column-links">
            <Link to="/about/intro">
              <ArrowIcon />
              회사 소개
            </Link>
            <Link to="/about/history">
              <ArrowIcon />
              연혁
            </Link>
            <Link to="/business/field">
              <ArrowIcon />
              사업 분야
            </Link>
            <Link to="/insight/news">
              <ArrowIcon />
              뉴스 & 소식
            </Link>
            <Link to="/contact/careers">
              <ArrowIcon />
              채용 정보
            </Link>
          </div>
        </FooterColumn>

        {/* Support Column */}
        <FooterColumn>
          <h4 className="column-title">Support</h4>
          <div className="column-links">
            <Link to="/contact/inquiry">
              <ArrowIcon />
              문의하기
            </Link>
            <Link to="/insight/videos">
              <ArrowIcon />
              레퍼런스 영상
            </Link>
            <Link to="exampleText">
              <ArrowIcon />
              자료실
            </Link>
            <Link to="exampleText">
              <ArrowIcon />
              FAQ
            </Link>
          </div>
        </FooterColumn>

        {/* Contact Info */}
        <FooterContact>
          <h4 className="column-title">Contact</h4>
          <div className="contact-item">
            <div className="contact-icon">
              <LocationIcon />
            </div>
            <div className="contact-text">
              <span className="label">Address</span>
              <span className="value">
                서울특별시 송파구 법원로 128 A동 610호 (SK V1 GL 메트로시티)
              </span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <PhoneIcon />
            </div>
            <div className="contact-text">
              <span className="label">Phone</span>
              <span className="value">070-5015-2313</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <EmailIcon />
            </div>
            <div className="contact-text">
              <span className="label">Email</span>
              <span className="value">operational@next-core.co.kr</span>
            </div>
          </div>
        </FooterContact>
      </FooterMain>

      {/* Bottom Bar */}
      <FooterBottom>
        <p className="copyright">
          COPYRIGHT © {new Date().getFullYear()} NEXTCORE TECHNOLOGY. ALL RIGHTS
          RESERVED.
        </p>
        <div className="footer-legal">
          <Link to="/policy/privacy">개인정보처리방침</Link>
          <Link to="/policy/service">이용약관</Link>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

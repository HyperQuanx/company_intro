import React from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  PolicySection,
  PolicyContainer,
  PolicyTitle,
  PolicyDescription,
  PolicyTableOfContents,
  PolicyTocList,
  PolicyTocItem,
  PolicyItem,
  PolicyItemTitle,
  PolicyItemContent,
  PolicyHighlight,
  PolicyLastUpdated,
} from "../../styles/NextcorePolicy.styles";

const PolicyPrivacy = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>개인정보처리방침</HeroBannerTitle>
          <HeroBannerDescription>
            넥스트코어테크놀로지는 고객의 개인정보를 소중히 다루고 있습니다.
            <br />
            당사의 개인정보 처리 방침을 안내드립니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PolicySection>
        <PolicyContainer>
          <PolicyTitle>개인정보처리방침</PolicyTitle>
          <PolicyDescription>
            넥스트코어테크놀로지는 개인정보 보호법을 준수하며, 이용자의
            개인정보를 안전하게 보호하기 위해 최선을 다하고 있습니다. 본 방침은
            언제든지 변경될 수 있으며, 변경되는 내용은 본 웹사이트를 통해
            공지됩니다.
          </PolicyDescription>

          <PolicyTableOfContents>
            <h3>목차</h3>
            <PolicyTocList>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section1")}>
                  수집하는 개인정보의 항목 및 수집 방법
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section2")}>
                  개인정보의 수집 및 이용 목적
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section3")}>
                  개인정보의 보유 및 이용 기간
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section4")}>
                  개인정보의 제3자 제공
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section5")}>
                  개인정보의 파기 절차 및 방법
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section6")}>이용자의 권리</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section7")}>보안 조치</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section8")}>
                  쿠키 및 웹 로그 분석
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section9")}>기타 사항</a>
              </PolicyTocItem>
            </PolicyTocList>
          </PolicyTableOfContents>

          {/* 섹션 1 */}
          <PolicyItem id="section1">
            <PolicyItemTitle>
              1. 수집하는 개인정보의 항목 및 수집 방법
            </PolicyItemTitle>
            <PolicyItemContent>
              <p>
                넥스트코어테크놀로지는 다음과 같은 개인정보를 수집하고 있습니다:
              </p>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                필수 수집 항목
              </h4>
              <ul>
                <li>이름, 이메일 주소, 전화번호</li>
                <li>회사명, 직책, 부서</li>
                <li>방문 목적 및 기타 문의 내용</li>
                <li>
                  서비스 이용 기록, 접속 IP 주소, 쿠키, 접속 시간 등의 로그 정보
                </li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                선택 수집 항목
              </h4>
              <ul>
                <li>사업자등록번호</li>
                <li>기타 개인정보 (이용자가 자발적으로 제공하는 정보)</li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                수집 방법
              </h4>
              <ul>
                <li>웹 사이트 (문의 양식, 회원가입 등)</li>
                <li>자동 수집 (쿠키, 로그 정보 등)</li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 2 */}
          <PolicyItem id="section2">
            <PolicyItemTitle>2. 개인정보의 수집 및 이용 목적</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                수집된 개인정보는 다음의 목적으로만 이용되며, 이용 목적이
                변경되는 경우에는 사전에 동의를 받겠습니다:
              </p>
              <ul>
                <li>
                  <strong>고객 서비스 제공:</strong> 상담, 문의 답변,
                  제품/서비스 제공 등
                </li>
                <li>
                  <strong>마케팅 및 광고:</strong> 신제품 안내, 프로모션, 이벤트
                  안내
                </li>
                <li>
                  <strong>통계 및 분석:</strong> 서비스 개선, 사용자 통계 분석
                </li>
                <li>
                  <strong>법적 의무 이행:</strong> 법령에 따른 의무 수행, 분쟁
                  해결
                </li>
                <li>
                  <strong>채용:</strong> 인재 채용 전형 진행 및 관련 업무
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 3 */}
          <PolicyItem id="section3">
            <PolicyItemTitle>3. 개인정보의 보유 및 이용 기간</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                개인정보는 수집 목적이 달성될 때까지 보유하며, 이용 목적이
                완료된 경우 지체 없이 파기됩니다. 다만, 법령에서 일정 기간의
                보존을 요구하는 경우는 해당 기간 동안 보유합니다:
              </p>
              <ul>
                <li>
                  <strong>문의/상담:</strong> 처리 완료 후 1년
                </li>
                <li>
                  <strong>채용:</strong> 채용 완료 후 1년
                </li>
                <li>
                  <strong>거래 기록:</strong> 전자상거래 등에서의 소비자 보호에
                  관한 법률에 따라 5년
                </li>
                <li>
                  <strong>로그 정보:</strong> 3개월
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 4 */}
          <PolicyItem id="section4">
            <PolicyItemTitle>4. 개인정보의 제3자 제공</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                넥스트코어테크놀로지는 이용자의 동의 없이 개인정보를 제3자에게
                제공하지 않습니다. 다만, 다음의 경우는 예외입니다:
              </p>
              <ul>
                <li>법령에 의해 요구되는 경우</li>
                <li>사업 협력사와 공동으로 이행할 필요가 있는 경우</li>
                <li>통계 작성, 학술 연구 등 특정 목적 달성에 필요한 경우</li>
              </ul>

              <PolicyHighlight>
                <p>
                  제3자 제공이 필요한 경우, 사전에 이용자에게 통보하고 동의를
                  받겠습니다.
                </p>
              </PolicyHighlight>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 5 */}
          <PolicyItem id="section5">
            <PolicyItemTitle>5. 개인정보의 파기 절차 및 방법</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                넥스트코어테크놀로지는 보유 기간이 종료된 개인정보를 지체 없이
                파기합니다:
              </p>
              <ul>
                <li>
                  <strong>파기 절차:</strong> 이용 목적 달성 후 별도 저장소로
                  이전하여 보관하다가 해당 기간 종료 시 파기
                </li>
                <li>
                  <strong>파기 방법:</strong> 종이 문서는 분쇄 또는 소각, 전자
                  기록은 복원 불가능한 방법으로 삭제
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 6 */}
          <PolicyItem id="section6">
            <PolicyItemTitle>6. 이용자의 권리</PolicyItemTitle>
            <PolicyItemContent>
              <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다:</p>
              <ul>
                <li>
                  <strong>열람 권리:</strong> 당사가 보유한 개인정보 내용의 열람
                  요청
                </li>
                <li>
                  <strong>정정 권리:</strong> 개인정보가 오류일 경우 정정 요청
                </li>
                <li>
                  <strong>삭제 권리:</strong> 개인정보의 삭제 요청
                </li>
                <li>
                  <strong>처리 정지 요청:</strong> 개인정보의 처리 정지 요청
                </li>
              </ul>

              <PolicyHighlight>
                <p>
                  위 권리를 행사하려면 고객센터 이메일 또는 전화로 문의하시면
                  됩니다. 확인 후 지체 없이 조치하겠습니다.
                </p>
              </PolicyHighlight>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 7 */}
          <PolicyItem id="section7">
            <PolicyItemTitle>7. 보안 조치</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                넥스트코어테크놀로지는 개인정보의 안전성 확보를 위해 다음과 같은
                기술적, 관리적 조치를 취하고 있습니다:
              </p>
              <ul>
                <li>
                  <strong>암호화:</strong> SSL/TLS를 통한 전송 구간 암호화
                </li>
                <li>
                  <strong>접근 제한:</strong> 권한 있는 직원만 개인정보에 접근
                  가능하도록 제한
                </li>
                <li>
                  <strong>시스템 관리:</strong> 서버 및 네트워크 보안 강화
                </li>
                <li>
                  <strong>정기적 점검:</strong> 보안 취약점 정기적 점검
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 8 */}
          <PolicyItem id="section8">
            <PolicyItemTitle>8. 쿠키 및 웹 로그 분석</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                넥스트코어테크놀로지는 서비스 개선을 위해 쿠키 및 웹 로그 분석을
                사용합니다:
              </p>
              <ul>
                <li>
                  <strong>쿠키:</strong> 이용자의 방문 기록, 선호도 등을
                  저장하여 더 나은 서비스 제공
                </li>
                <li>
                  <strong>웹 로그:</strong> 접속 통계, 오류 분석 등 서비스
                  개선에 이용
                </li>
              </ul>
              <p>
                이용자는 브라우저 설정을 통해 쿠키 수신을 거절할 수 있습니다.
              </p>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 9 */}
          <PolicyItem id="section9">
            <PolicyItemTitle>9. 기타 사항</PolicyItemTitle>
            <PolicyItemContent>
              <h4 style={{ marginTop: "12px", marginBottom: "12px" }}>
                개인정보 보호책임자
              </h4>
              <p>
                개인정보와 관련하여 궁금하신 점이 있으시면 아래로 문의하시기
                바랍니다:
              </p>
              <ul>
                <li>
                  <strong>부서:</strong> 고객센터
                </li>
                <li>
                  <strong>이메일:</strong> operational@next-core.co.kr
                </li>
                <li>
                  <strong>전화:</strong> 070-5015-2313
                </li>
              </ul>

              <h4 style={{ marginTop: "24px", marginBottom: "12px" }}>
                권리 침해 구제 방법
              </h4>
              <p>
                개인정보 침해에 대한 신고 및 상담이 필요한 경우 아래 기관에
                문의하시기 바랍니다:
              </p>
              <ul>
                <li>
                  개인정보분쟁조정위원회 :{" "}
                  <a
                    href="https://www.kopico.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.kopico.go.kr
                  </a>{" "}
                  / (1833-6972)
                </li>
                <li>
                  개인정보침해신고센터 :{" "}
                  <a
                    href="https://privacy.kisa.or.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy.kisa.or.kr
                  </a>{" "}
                  / (118)
                </li>
                <li>
                  대검찰청 :{" "}
                  <a
                    href="https://www.spo.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.spo.go.kr
                  </a>{" "}
                  / (1301)
                </li>
                <li>
                  경찰청 :{" "}
                  <a
                    href="https://ecrm.police.go.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ecrm.police.go.kr
                  </a>{" "}
                  / (182)
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          <PolicyLastUpdated>
            <p>정책 수정일: 2025년 12월 19일</p>
            <p>
              본 개인정보처리방침은 시행 일자부터 적용되며, 법령 및 정책 변화에
              따라 수정될 수 있습니다.
            </p>
          </PolicyLastUpdated>
        </PolicyContainer>
      </PolicySection>
    </>
  );
};

export default PolicyPrivacy;

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

const PolicyService = () => {
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
          <HeroBannerTitle>이용약관</HeroBannerTitle>
          <HeroBannerDescription>
            넥스트코어테크놀로지의 웹사이트 및 서비스 이용 약관입니다.
            <br />
            서비스 이용 시 다음 약관에 동의하는 것으로 간주됩니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PolicySection>
        <PolicyContainer>
          <PolicyTitle>이용약관</PolicyTitle>
          <PolicyDescription>
            넥스트코어테크놀로지 웹사이트 및 제공되는 모든 서비스(이하
            "서비스")는 다음의 약관에 따라 제공됩니다. 본 약관은 서비스
            이용자(이하 "이용자")의 권리와 의무, 책임사항 및 기타 필요한 사항을
            규정합니다.
          </PolicyDescription>

          <PolicyTableOfContents>
            <h3>목차</h3>
            <PolicyTocList>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section1")}>정의 및 용어</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section2")}>
                  서비스 이용 계약의 체결
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section3")}>서비스 이용</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section4")}>이용자의 의무</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section5")}>
                  서비스의 중단 및 종료
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section6")}>
                  게시물 및 저작권
                </a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section7")}>면책 조항</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section8")}>손해배상</a>
              </PolicyTocItem>
              <PolicyTocItem>
                <a onClick={() => scrollToSection("section9")}>기타 사항</a>
              </PolicyTocItem>
            </PolicyTocList>
          </PolicyTableOfContents>

          {/* 섹션 1 */}
          <PolicyItem id="section1">
            <PolicyItemTitle>1. 정의 및 용어</PolicyItemTitle>
            <PolicyItemContent>
              <p>본 약관에서 사용되는 용어는 다음과 같이 정의됩니다:</p>
              <ul>
                <li>
                  <strong>"회사":</strong> 넥스트코어테크놀로지 및 그 자회사,
                  계열사
                </li>
                <li>
                  <strong>"서비스":</strong> 회사가 제공하는 웹사이트 및 모든
                  온라인 서비스
                </li>
                <li>
                  <strong>"이용자":</strong> 본 약관에 동의하고 서비스를
                  이용하는 개인 또는 법인
                </li>
                <li>
                  <strong>"콘텐츠":</strong> 서비스에 포함된 텍스트, 이미지,
                  영상, 음성 등 모든 저작물
                </li>
                <li>
                  <strong>"게시물":</strong> 이용자가 서비스에 게시한 모든
                  콘텐츠
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 2 */}
          <PolicyItem id="section2">
            <PolicyItemTitle>2. 서비스 이용 계약의 체결</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                서비스 이용 계약은 이용자가 본 약관에 동의하고 서비스를 이용하는
                것으로 자동으로 체결됩니다.
              </p>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                계약의 체결
              </h4>
              <ul>
                <li>
                  이용자는 웹사이트 방문 시 자동으로 약관에 동의하게 됩니다.
                </li>
                <li>
                  특정 서비스 이용 시 추가 약관이 있을 수 있으며, 이를 별도로
                  동의해야 합니다.
                </li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                약관의 변경
              </h4>
              <ul>
                <li>
                  회사는 필요시 본 약관을 변경할 수 있으며, 변경 사항은
                  웹사이트에 공지됩니다.
                </li>
                <li>
                  변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수
                  있습니다.
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 3 */}
          <PolicyItem id="section3">
            <PolicyItemTitle>3. 서비스 이용</PolicyItemTitle>
            <PolicyItemContent>
              <p>
                서비스는 이용자에게 정보 제공 및 소통의 목적으로 제공됩니다.
              </p>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                서비스 이용 방법
              </h4>
              <ul>
                <li>
                  이용자는 웹사이트에 접속하여 자유롭게 정보를 열람할 수
                  있습니다.
                </li>
                <li>특정 기능 이용 시 개인정보 제공이 필요할 수 있습니다.</li>
                <li>서비스 이용은 무료입니다.</li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                서비스의 운영 및 변경
              </h4>
              <ul>
                <li>
                  회사는 서비스의 질 향상 및 유지보수를 위해 운영을 중단할 수
                  있습니다.
                </li>
                <li>서비스 중단 또는 변경 시 사전에 공지하도록 노력합니다.</li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 4 */}
          <PolicyItem id="section4">
            <PolicyItemTitle>4. 이용자의 의무</PolicyItemTitle>
            <PolicyItemContent>
              <p>이용자는 다음 행위를 하지 않기로 약속합니다:</p>
              <ul>
                <li>
                  <strong>불법 행위:</strong> 법령 위반 행위 또는 범죄 행위
                </li>
                <li>
                  <strong>명예훼손:</strong> 타인의 명예를 훼손하거나 모욕하는
                  행위
                </li>
                <li>
                  <strong>저작권 침해:</strong> 저작권 및 지적재산권 침해 행위
                </li>
                <li>
                  <strong>개인정보 침해:</strong> 타인의 개인정보 수집 또는 공개
                </li>
                <li>
                  <strong>스팸 및 광고:</strong> 스팸, 불법 광고, 마킹 행위
                </li>
                <li>
                  <strong>해킹 및 악성코드:</strong> 시스템 해킹, 악성코드 배포
                  등
                </li>
                <li>
                  <strong>타인 계정 사용:</strong> 타인의 계정 무단 사용
                </li>
              </ul>

              <PolicyHighlight>
                <p>
                  위반 시 서비스 이용을 제한하거나 중단할 수 있으며, 법적 책임을
                  질 수 있습니다.
                </p>
              </PolicyHighlight>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 5 */}
          <PolicyItem id="section5">
            <PolicyItemTitle>5. 서비스의 중단 및 종료</PolicyItemTitle>
            <PolicyItemContent>
              <h4 style={{ marginTop: "12px", marginBottom: "12px" }}>
                서비스 중단
              </h4>
              <ul>
                <li>
                  회사는 다음 사유로 인해 서비스를 중단할 수 있습니다:
                  <ul style={{ marginTop: "8px", marginLeft: "16px" }}>
                    <li>시스템 유지보수</li>
                    <li>긴급한 기술적 문제 해결</li>
                    <li>천재지변 또는 불가항력적 사유</li>
                  </ul>
                </li>
                <li>
                  긴급 중단의 경우 사후 공지하거나 사전 공지 없이 중단할 수
                  있습니다.
                </li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                이용자의 선택으로 인한 종료
              </h4>
              <ul>
                <li>이용자는 언제든지 서비스 이용을 중단할 수 있습니다.</li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                회사의 선택으로 인한 종료
              </h4>
              <ul>
                <li>
                  이용자가 본 약관을 위반하는 경우, 서비스 이용을 제한하거나
                  중단할 수 있습니다.
                </li>
                <li>
                  사전 공지 후 최대 30일의 시정 기간을 제공할 수 있습니다.
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 6 */}
          <PolicyItem id="section6">
            <PolicyItemTitle>6. 게시물 및 저작권</PolicyItemTitle>
            <PolicyItemContent>
              <h4 style={{ marginTop: "12px", marginBottom: "12px" }}>
                게시물의 소유권
              </h4>
              <ul>
                <li>
                  이용자가 게시한 게시물의 저작권은 원저작자에게 귀속됩니다.
                </li>
                <li>
                  회사는 서비스 제공을 위해 게시물을 사용할 수 있는 라이선스를
                  보유합니다.
                </li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                회사 콘텐츠의 이용
              </h4>
              <ul>
                <li>회사가 제공하는 모든 콘텐츠는 저작권으로 보호됩니다.</li>
                <li>
                  이용자는 개인적 목적의 열람만 허용되며, 무단 복제, 배포, 수정,
                  공개는 금지됩니다.
                </li>
              </ul>

              <PolicyHighlight>
                <p>
                  저작권 침해 의심 시 contact@next-core.co.kr로 신고하시면 즉시
                  조사하겠습니다.
                </p>
              </PolicyHighlight>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 7 */}
          <PolicyItem id="section7">
            <PolicyItemTitle>7. 면책 조항</PolicyItemTitle>
            <PolicyItemContent>
              <p>회사는 다음 사항에 대해 책임을 지지 않습니다:</p>
              <ul>
                <li>
                  <strong>서비스의 가용성:</strong> 서비스가 항상 이용 가능함을
                  보장하지 않습니다.
                </li>
                <li>
                  <strong>정보의 정확성:</strong> 게시된 정보의 정확성, 완전성,
                  신뢰성을 보장하지 않습니다.
                </li>
                <li>
                  <strong>외부 링크:</strong> 서비스 내 외부 링크의 콘텐츠에
                  대해 책임을 지지 않습니다.
                </li>
                <li>
                  <strong>이용자 데이터:</strong> 이용자의 데이터 손실 또는
                  손상에 대해 책임을 지지 않습니다.
                </li>
                <li>
                  <strong>해킹 또는 시스템 오류:</strong> 불가항력적 사유로 인한
                  피해에 대해 책임을 지지 않습니다.
                </li>
              </ul>

              <PolicyHighlight>
                <p>
                  본 서비스는 "있는 그대로" 제공되며, 명시적 또는 묵시적 보증을
                  하지 않습니다.
                </p>
              </PolicyHighlight>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 8 */}
          <PolicyItem id="section8">
            <PolicyItemTitle>8. 손해배상</PolicyItemTitle>
            <PolicyItemContent>
              <p>회사는 다음의 손해에 대해 책임을 지지 않습니다:</p>
              <ul>
                <li>이용자가 서비스를 이용하면서 발생한 손해</li>
                <li>이용자가 서비스를 이용할 수 없어서 발생한 손해</li>
                <li>이용자가 게시한 게시물으로 인한 타인의 손해 청구</li>
                <li>기타 간접적, 부수적, 결과적 손해</li>
              </ul>

              <p style={{ marginTop: "16px" }}>
                다만, 회사의 고의적 불법 행위로 인한 손해에 대해서는 별도로
                협의하여 해결합니다.
              </p>
            </PolicyItemContent>
          </PolicyItem>

          {/* 섹션 9 */}
          <PolicyItem id="section9">
            <PolicyItemTitle>9. 기타 사항</PolicyItemTitle>
            <PolicyItemContent>
              <h4 style={{ marginTop: "12px", marginBottom: "12px" }}>
                준거법
              </h4>
              <p>
                본 약관의 해석 및 분쟁은 대한민국의 법률에 따르며, 관할권은 서울
                중앙지방법원으로 합의합니다.
              </p>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                연락 및 문의
              </h4>
              <ul>
                <li>
                  <strong>이메일:</strong> operational@next-core.co.kr
                </li>
                <li>
                  <strong>전화:</strong> 070-5015-2313
                </li>
                <li>
                  <strong>주소:</strong> 서울특별시 송파구 범원로 128 A동 610호
                  (SK V1 GL 메트로시티, 본사)
                </li>
              </ul>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                약관의 분리 가능성
              </h4>
              <p>
                본 약관의 일부 조항이 무효하거나 시행될 수 없는 경우, 해당
                조항을 제외한 나머지 약관은 유효합니다.
              </p>

              <h4 style={{ marginTop: "16px", marginBottom: "12px" }}>
                개정 이력
              </h4>
              <ul>
                <li>
                  <strong>시행일:</strong> 2025년 12월 19일
                </li>
              </ul>
            </PolicyItemContent>
          </PolicyItem>

          <PolicyLastUpdated>
            <p>약관 수정일: 2025년 12월 19일</p>
            <p>
              본 이용약관은 시행 일자부터 적용되며, 법령 및 정책 변화에 따라
              수정될 수 있습니다.
            </p>
          </PolicyLastUpdated>
        </PolicyContainer>
      </PolicySection>
    </>
  );
};

export default PolicyService;

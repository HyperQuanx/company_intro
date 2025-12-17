import React, { useState, useRef } from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  ConRecruitSection,
  ConRecruitContainer,
  ConSectionTitle,
  ConSectionDescription,
  ConFormWrapper,
  ConFormGroup,
  ConFormLabel,
  ConFormInput,
  ConFormTextarea,
  ConFormSelect,
  ConFormRow,
  ConFileUploadWrapper,
  ConFileUploadLabel,
  ConFileInfo,
  ConDivider,
  ConSubmitButton,
  ConPrivacyCheckbox,
  ConFormNotice,
  ConMessageBox,
  ConLoadingSpinner,
} from "../../styles/NextcoreContact.styles";
import { AboutSectionTitle } from "../../styles/NextcoreAbout.styles";

// 지원 가능한 팀 목록
const TEAM_OPTIONS = [
  { value: "", label: "지원 부서를 선택해주세요" },
  { value: "경영지원팀", label: "경영지원팀", dept: "경영지원" },
  { value: "개발1팀", label: "개발 1팀", dept: "R&D 부문" },
  { value: "개발2팀", label: "개발 2팀", dept: "R&D 부문" },
  { value: "영업1팀", label: "영업 1팀", dept: "영업부문" },
  { value: "영업2팀", label: "영업 2팀", dept: "영업부문" },
  { value: "영업3팀", label: "영업 3팀", dept: "영업부문" },
  { value: "PM팀", label: "PM팀", dept: "기술부" },
  { value: "기술1팀", label: "기술 1팀", dept: "기술부" },
  { value: "기술2팀", label: "기술 2팀", dept: "기술부" },
];

const ContactRecruit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    team: "",
    introduction: "",
  });
  const [resume, setResume] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const resumeInputRef = useRef(null);
  const portfolioInputRef = useRef(null);
  const formRef = useRef(null);

  // 입력 핸들러 (유효성 검사 및 길이 제한 추가)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // 연락처: 숫자만 허용, 11자리 제한
    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, ""); // 숫자가 아닌 문자 제거
      if (newValue.length > 11) {
        newValue = newValue.slice(0, 11); // 11자리 초과 시 자름
      }
    }

    // 자기소개: 500자 제한
    if (name === "introduction") {
      if (newValue.length > 500) {
        newValue = newValue.slice(0, 500); // 500자 초과 시 자름
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 크기 제한 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("파일 크기는 10MB 이하만 가능합니다.");
        return;
      }
      if (type === "resume") {
        setResume(file);
      } else {
        setPortfolio(file);
      }
    }
  };

  const removeFile = (type) => {
    if (type === "resume") {
      setResume(null);
      if (resumeInputRef.current) resumeInputRef.current.value = "";
    } else {
      setPortfolio(null);
      if (portfolioInputRef.current) portfolioInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("이름을 입력해주세요.");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      alert("올바른 이메일을 입력해주세요.");
      return false;
    }
    if (!formData.phone.trim()) {
      alert("연락처를 입력해주세요.");
      return false;
    }
    if (formData.phone.length < 9) {
      alert("올바른 연락처 형식이 아닙니다.");
      return false;
    }
    if (!formData.birthdate) {
      alert("생년월일을 입력해주세요.");
      return false;
    }
    if (!formData.team) {
      alert("지원 부서를 선택해주세요.");
      return false;
    }
    if (!resume) {
      alert("이력서를 첨부해주세요.");
      return false;
    }
    if (!privacyAgreed) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // FormData 객체 생성
      const submitData = new FormData();

      // 1. 기본 설정값
      // _subject: 이메일 제목
      submitData.append(
        "_subject",
        `[입사지원] ${formData.team} - ${formData.name}`
      );
      // _template: 이메일 디자인 (table, basic, box)
      submitData.append("_template", "table");
      // _captcha: 스팸 방지 캡차 끄기 (테스트용, 필요시 "true")
      submitData.append("_captcha", "false");

      // 2. 텍스트 데이터 추가
      submitData.append("지원부서", formData.team);
      submitData.append("성명", formData.name);
      submitData.append("이메일", formData.email);
      submitData.append("연락처", formData.phone);
      submitData.append("생년월일", formData.birthdate);
      submitData.append("자기소개", formData.introduction || "작성 내용 없음");

      // 3. 파일 첨부 (수정된 부분)
      // 'attachment'라는 이름 대신 구체적인 이름(resume, portfolio)을 사용하면
      // formsubmit.co가 이를 자동으로 감지하여 파일로 첨부합니다.
      if (resume) {
        submitData.append("이력서", resume);
      }
      if (portfolio) {
        submitData.append("포트폴리오", portfolio);
      }

      // 4. 전송 (수정된 부분)
      // URL에서 '/ajax/'를 제거하고 본인의 이메일로 변경하세요.
      // fetch 옵션에 headers: { "Accept": "application/json" }을 추가해야 리다이렉트 되지 않습니다.
      const response = await fetch(
        "https://formsubmit.co/qbixroqkfwk@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json", // 중요: 이 설정이 있어야 JSON 응답을 받습니다.
          },
          body: submitData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        // 폼 초기화
        setFormData({
          name: "",
          email: "",
          phone: "",
          birthdate: "",
          team: "",
          introduction: "",
        });
        setResume(null);
        setPortfolio(null);
        setPrivacyAgreed(false);
        if (resumeInputRef.current) resumeInputRef.current.value = "";
        if (portfolioInputRef.current) portfolioInputRef.current.value = "";
      } else {
        throw new Error("전송 실패");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <>
        <SolutionHeroBanner>
          <HeroBannerBackground
            $bgImage="/nextcore_text.png"
            $contain
            $bgColor="#b1b1b1"
          />
          <HeroBannerContent>
            <HeroBannerTitle>인재채용</HeroBannerTitle>
            <HeroBannerDescription>
              기술로 세상을 연결하고 사람과 함께 성장하는
              <br />
              넥스트코어테크놀로지의 여정에 동참하세요.
            </HeroBannerDescription>
          </HeroBannerContent>
        </SolutionHeroBanner>

        <ConRecruitSection>
          <ConRecruitContainer>
            <ConMessageBox className="success">
              <div className="icon">&#10004;</div>
              <div className="title">지원서가 성공적으로 제출되었습니다!</div>
              <div className="message">
                입사 지원해주셔서 감사합니다.
                <br />
                서류 검토 후 빠른 시일 내에 연락드리겠습니다.
              </div>
            </ConMessageBox>
            <ConSubmitButton
              type="button"
              onClick={() => setSubmitStatus(null)}
              style={{ marginTop: "30px" }}
            >
              새로운 지원서 작성하기
            </ConSubmitButton>
          </ConRecruitContainer>
        </ConRecruitSection>
      </>
    );
  }

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>인재채용</HeroBannerTitle>
          <HeroBannerDescription>
            기술로 세상을 연결하고 사람과 함께 성장하는
            <br />
            넥스트코어테크놀로지의 여정에 동참하세요.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <ConRecruitSection>
        <ConRecruitContainer>
          <AboutSectionTitle>
            <h3>입사 지원서</h3>
          </AboutSectionTitle>
          <ConSectionDescription>
            아래 양식을 작성하여 지원해주세요. 이력서는 필수 첨부 항목입니다.
          </ConSectionDescription>

          <ConFormWrapper ref={formRef} onSubmit={handleSubmit}>
            {/* 지원 부서 선택 */}
            <ConFormGroup>
              <ConFormLabel>
                지원 부서 <span className="required">*</span>
              </ConFormLabel>
              <ConFormSelect
                name="team"
                value={formData.team}
                onChange={handleInputChange}
                required
              >
                {TEAM_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.dept
                      ? `[${option.dept}] ${option.label}`
                      : option.label}
                  </option>
                ))}
              </ConFormSelect>
            </ConFormGroup>

            <ConDivider />

            {/* 인적 사항 */}
            <ConFormRow>
              <ConFormGroup>
                <ConFormLabel>
                  성명 <span className="required">*</span>
                </ConFormLabel>
                <ConFormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="홍길동"
                  required
                />
              </ConFormGroup>
              <ConFormGroup>
                <ConFormLabel>
                  생년월일 <span className="required">*</span>
                </ConFormLabel>
                <ConFormInput
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  required
                />
              </ConFormGroup>
            </ConFormRow>

            <ConFormRow>
              <ConFormGroup>
                <ConFormLabel>
                  이메일 <span className="required">*</span>
                </ConFormLabel>
                <ConFormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </ConFormGroup>
              <ConFormGroup>
                <ConFormLabel>
                  연락처 <span className="required">*</span>
                </ConFormLabel>
                <ConFormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="'-' 없이 숫자만 입력 (11자리)"
                  maxLength={11}
                  required
                />
              </ConFormGroup>
            </ConFormRow>

            <ConDivider />

            {/* 자기소개 */}
            <ConFormGroup>
              <ConFormLabel
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>자기소개</span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#667085",
                    fontWeight: "400",
                  }}
                >
                  {formData.introduction.length} / 500
                </span>
              </ConFormLabel>
              <ConFormTextarea
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
                placeholder="간단한 자기소개 및 지원 동기를 작성해주세요. (최대 500자, 선택사항)"
                rows={5}
                maxLength={500}
              />
            </ConFormGroup>

            <ConDivider />

            {/* 파일 첨부 */}
            <ConFormRow>
              <ConFileUploadWrapper>
                <ConFormLabel>
                  이력서 <span className="required">*</span>
                </ConFormLabel>
                {!resume ? (
                  <ConFileUploadLabel>
                    <input
                      ref={resumeInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.hwp"
                      onChange={(e) => handleFileChange(e, "resume")}
                    />
                    <div className="upload-icon">&#128196;</div>
                    <div className="upload-text">
                      <div className="main-text">이력서 파일 업로드</div>
                      <div className="sub-text">
                        PDF, DOC, DOCX, HWP (최대 10MB)
                      </div>
                    </div>
                  </ConFileUploadLabel>
                ) : (
                  <ConFileInfo>
                    <span className="file-icon">&#128196;</span>
                    <span className="file-name">{resume.name}</span>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFile("resume")}
                    >
                      &#10005;
                    </button>
                  </ConFileInfo>
                )}
              </ConFileUploadWrapper>

              <ConFileUploadWrapper>
                <ConFormLabel>포트폴리오</ConFormLabel>
                {!portfolio ? (
                  <ConFileUploadLabel>
                    <input
                      ref={portfolioInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.hwp,.ppt,.pptx,.zip"
                      onChange={(e) => handleFileChange(e, "portfolio")}
                    />
                    <div className="upload-icon">&#128188;</div>
                    <div className="upload-text">
                      <div className="main-text">포트폴리오 업로드</div>
                      <div className="sub-text">
                        PDF, DOC, PPT, ZIP (최대 10MB)
                      </div>
                    </div>
                  </ConFileUploadLabel>
                ) : (
                  <ConFileInfo>
                    <span className="file-icon">&#128188;</span>
                    <span className="file-name">{portfolio.name}</span>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFile("portfolio")}
                    >
                      &#10005;
                    </button>
                  </ConFileInfo>
                )}
              </ConFileUploadWrapper>
            </ConFormRow>

            <ConFormNotice>
              <span className="notice-icon">&#9888;</span>
              <span className="notice-text">
                파일은 PDF, DOC, DOCX, HWP, PPT, PPTX, ZIP 형식만 지원되며, 최대
                10MB까지 업로드 가능합니다.
              </span>
            </ConFormNotice>

            <ConDivider />

            {/* 개인정보 동의 */}
            <ConPrivacyCheckbox>
              <input
                type="checkbox"
                id="privacy"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
              />
              <label htmlFor="privacy" className="checkbox-text">
                <strong>[필수]</strong> 개인정보 수집 및 이용에 동의합니다.
                <br />
                <span style={{ fontSize: "0.8rem", color: "#667085" }}>
                  수집항목: 성명, 이메일, 연락처, 생년월일 / 수집목적: 채용 전형
                  진행 / 보유기간: 채용 완료 후 1년
                </span>
              </label>
            </ConPrivacyCheckbox>

            {/* 에러 메시지 */}
            {submitStatus === "error" && (
              <ConMessageBox className="error">
                <div className="icon">&#10060;</div>
                <div className="title">전송에 실패했습니다</div>
                <div className="message">
                  잠시 후 다시 시도해주세요. 문제가 지속되면
                  이메일(qbixroqkfwk@next-core.co.kr)로 직접 보내주세요.
                </div>
              </ConMessageBox>
            )}

            {/* 제출 버튼 */}
            <ConSubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <ConLoadingSpinner />
                  지원서 제출 중...
                </>
              ) : (
                "지원하기"
              )}
            </ConSubmitButton>
          </ConFormWrapper>
        </ConRecruitContainer>
      </ConRecruitSection>
    </>
  );
};

export default ContactRecruit;

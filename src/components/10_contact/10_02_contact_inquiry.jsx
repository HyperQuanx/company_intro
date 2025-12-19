import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  ConSectionDescription,
  ConFormWrapper,
  ConFormGroup,
  ConFormLabel,
  ConFormInput,
  ConFormTextarea,
  ConFormSelect,
  ConFormRow,
  ConDivider,
  ConSubmitButton,
  ConPrivacyCheckbox,
  ConMessageBox,
  ConLoadingSpinner,
} from "../../styles/NextcoreContact.styles";
import { AboutSectionTitle } from "../../styles/NextcoreAbout.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

// 문의 유형 옵션
const INQUIRY_CATEGORY = [
  { value: "", label: "문의 유형을 선택해주세요" },
  { value: "일반", label: "일반 문의" },
  { value: "솔루션", label: "솔루션 문의" },
];

// 서브 카테고리 옵션
const SUB_CATEGORY_OPTIONS = {
  일반: [
    { value: "", label: "상세 유형을 선택해주세요" },
    { value: "회사 문의", label: "회사 문의" },
    { value: "사이트 문의", label: "사이트 문의" },
    { value: "기타", label: "기타" },
  ],
  솔루션: [
    { value: "", label: "솔루션을 선택해주세요" },
    { value: "Nextcare-M", label: "Nextcare-M (모니터링)" },
    { value: "Nextcare-E", label: "Nextcare-E (에너지)" },
    { value: "Nextcare-S", label: "Nextcare-S (안전)" },
    { value: "Nextcare-AI", label: "Nextcare-AI (인공지능)" },
    { value: "Nextcare-IoT", label: "Nextcare-IoT (사물인터넷)" },
  ],
};

const ContactInquiry = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    subCategory: "",
    title: "",
    content: "",
  });
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formRef = useRef(null);

  // URL 쿼리 파라미터로 솔루션 자동 선택
  useEffect(() => {
    const solution = searchParams.get("solution");
    if (solution) {
      // 유효한 솔루션인지 확인
      const validSolutions = SUB_CATEGORY_OPTIONS["솔루션"].map(
        (opt) => opt.value
      );
      if (validSolutions.includes(solution)) {
        setFormData((prev) => ({
          ...prev,
          category: "솔루션",
          subCategory: solution,
        }));
      }
    }
  }, [searchParams]);

  // 입력 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // 연락처: 숫자만 허용, 11자리 제한
    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, "");
      if (newValue.length > 11) {
        newValue = newValue.slice(0, 11);
      }
    }

    // 문의 내용: 1000자 제한
    if (name === "content") {
      if (newValue.length > 1000) {
        newValue = newValue.slice(0, 1000);
      }
    }

    // 카테고리 변경 시 서브 카테고리 초기화
    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
        subCategory: "",
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
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
    if (!formData.category) {
      alert("문의 유형을 선택해주세요.");
      return false;
    }
    if (!formData.subCategory) {
      alert("상세 유형을 선택해주세요.");
      return false;
    }
    if (!formData.title.trim()) {
      alert("문의 제목을 입력해주세요.");
      return false;
    }
    if (!formData.content.trim()) {
      alert("문의 내용을 입력해주세요.");
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
      const submitData = new FormData();

      // 이메일 제목
      submitData.append(
        "_subject",
        `[${formData.category}] ${formData.subCategory} - ${formData.title}`
      );
      submitData.append("_template", "table");
      submitData.append("_captcha", "false");

      // 폼 데이터 추가
      submitData.append(
        "문의유형",
        `${formData.category} > ${formData.subCategory}`
      );
      submitData.append("문의제목", formData.title);
      submitData.append("성명", formData.name);
      submitData.append("이메일", formData.email);
      submitData.append("연락처", formData.phone);
      submitData.append("회사/기관명", formData.company || "미입력");
      submitData.append("문의내용", formData.content);

      const response = await fetch(
        // "https://formsubmit.co/qbixroqkfwk@next-core.co.kr",
        "https://formsubmit.co/qbixroqkfwk@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: submitData,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          category: "",
          subCategory: "",
          title: "",
          content: "",
        });
        setPrivacyAgreed(false);
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

  // 현재 카테고리에 맞는 서브 옵션
  const currentSubOptions = formData.category
    ? SUB_CATEGORY_OPTIONS[formData.category]
    : [];

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
            <HeroBannerTitle>문의하기</HeroBannerTitle>
            <HeroBannerDescription>
              프로젝트 목적과 환경에 맞춘 최적의 방안을 제안드립니다.
              <br />
              문의 내용을 남겨주시면 빠르게 회신드리겠습니다.
            </HeroBannerDescription>
          </HeroBannerContent>
        </SolutionHeroBanner>

        <ConRecruitSection>
          <ConRecruitContainer>
            <ConMessageBox className="success">
              <div className="icon">&#10004;</div>
              <div className="title">문의가 성공적으로 접수되었습니다!</div>
              <div className="message">
                문의해주셔서 감사합니다.
                <br />
                빠른 시일 내에 답변드리겠습니다.
              </div>
            </ConMessageBox>
            <ConSubmitButton
              type="button"
              onClick={() => setSubmitStatus(null)}
              style={{ marginTop: "30px" }}
            >
              새로운 문의 작성하기
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
          <HeroBannerTitle>문의하기</HeroBannerTitle>
          <HeroBannerDescription>
            프로젝트 목적과 환경에 맞춘 최적의 방안을 제안드립니다.
            <br />
            문의 내용을 남겨주시면 빠르게 회신드리겠습니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <ConRecruitSection>
          <ConRecruitContainer>
            <AboutSectionTitle>
              <h3>문의하기</h3>
            </AboutSectionTitle>
            <ConSectionDescription>
              아래 양식을 작성하여 문의해주세요. 담당자가 확인 후 빠르게
              답변드리겠습니다.
            </ConSectionDescription>

            <ConFormWrapper ref={formRef} onSubmit={handleSubmit}>
              {/* 문의 유형 선택 */}
              <ConFormRow>
                <ConFormGroup>
                  <ConFormLabel>
                    문의 유형 <span className="required">*</span>
                  </ConFormLabel>
                  <ConFormSelect
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    {INQUIRY_CATEGORY.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </ConFormSelect>
                </ConFormGroup>

                <ConFormGroup>
                  <ConFormLabel>
                    상세 유형 <span className="required">*</span>
                  </ConFormLabel>
                  <ConFormSelect
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleInputChange}
                    disabled={!formData.category}
                    required
                  >
                    {formData.category ? (
                      currentSubOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    ) : (
                      <option value="">문의 유형을 먼저 선택해주세요</option>
                    )}
                  </ConFormSelect>
                </ConFormGroup>
              </ConFormRow>

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
                  <ConFormLabel>회사/기관명</ConFormLabel>
                  <ConFormInput
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="(선택사항)"
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

              {/* 문의 제목 */}
              <ConFormGroup>
                <ConFormLabel>
                  문의 제목 <span className="required">*</span>
                </ConFormLabel>
                <ConFormInput
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="문의 제목을 입력해주세요"
                  required
                />
              </ConFormGroup>

              {/* 문의 내용 */}
              <ConFormGroup>
                <ConFormLabel
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>
                    문의 내용 <span className="required">*</span>
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#667085",
                      fontWeight: "400",
                    }}
                  >
                    {formData.content.length} / 1000
                  </span>
                </ConFormLabel>
                <ConFormTextarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="문의하실 내용을 상세히 작성해주세요. (최대 1000자)"
                  rows={8}
                  maxLength={1000}
                  required
                />
              </ConFormGroup>

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
                    수집항목: 성명, 이메일, 연락처, 회사명 / 수집목적: 문의 답변
                    / 보유기간: 문의 처리 완료 후 1년
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
                    이메일(qbixroqkfwk@gmail.com)로 직접 보내주세요.
                  </div>
                </ConMessageBox>
              )}

              {/* 제출 버튼 */}
              <ConSubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <ConLoadingSpinner />
                    문의 접수 중...
                  </>
                ) : (
                  "문의하기"
                )}
              </ConSubmitButton>
            </ConFormWrapper>
          </ConRecruitContainer>
        </ConRecruitSection>
      </PublicSContainer>
    </>
  );
};

export default ContactInquiry;

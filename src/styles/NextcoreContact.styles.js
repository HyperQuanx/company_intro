import styled from "styled-components";

// ===== 채용 폼 스타일 =====

export const ConRecruitSection = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 80px 40px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const ConRecruitContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ConSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  &::before {
    content: "";
    display: block;
    width: 4px;
    height: 28px;
    background: #55b3d6;
    border-radius: 2px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #101828;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ConSectionDescription = styled.p`
  font-size: 1rem;
  color: #667085;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const ConFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ConFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConFormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 700;
  color: #344054;
  display: flex;
  align-items: center;
  gap: 4px;

  .required {
    color: #ef4444;
  }
`;

export const ConFormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  background: #ffffff;
  color: #101828;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #55b3d6;
    box-shadow: 0 0 0 3px rgba(85, 179, 214, 0.15);
  }

  &::placeholder {
    color: #98a2b3;
  }
`;

export const ConFormTextarea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  background: #ffffff;
  color: #101828;
  transition: all 0.2s ease;
  box-sizing: border-box;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #55b3d6;
    box-shadow: 0 0 0 3px rgba(85, 179, 214, 0.15);
  }

  &::placeholder {
    color: #98a2b3;
  }
`;

export const ConFormSelect = styled.select`
  width: 100%;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  border-radius: 10px;
  background: #ffffff;
  color: #101828;
  transition: all 0.2s ease;
  box-sizing: border-box;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23667085' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;

  &:focus {
    outline: none;
    border-color: #55b3d6;
    box-shadow: 0 0 0 3px rgba(85, 179, 214, 0.15);
  }

  option {
    padding: 12px;
  }
`;

export const ConFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ConFileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConFileUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 30px 20px;
  border: 2px dashed #d0d5dd;
  border-radius: 12px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #55b3d6;
    background: #f0f9fc;
  }

  &.has-file {
    border-color: #55b3d6;
    background: #f0f9fc;
    border-style: solid;
  }

  .upload-icon {
    width: 48px;
    height: 48px;
    background: #e8f4f8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #55b3d6;
  }

  .upload-text {
    text-align: center;

    .main-text {
      font-size: 0.95rem;
      font-weight: 600;
      color: #344054;
      margin-bottom: 4px;
    }

    .sub-text {
      font-size: 0.85rem;
      color: #667085;
    }
  }

  input[type="file"] {
    display: none;
  }
`;

export const ConFileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f0f9fc;
  border: 1px solid #55b3d6;
  border-radius: 8px;

  .file-icon {
    font-size: 1.25rem;
  }

  .file-name {
    flex: 1;
    font-size: 0.9rem;
    color: #344054;
    font-weight: 500;
    word-break: break-all;
  }

  .remove-btn {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #98a2b3;
    cursor: pointer;
    padding: 4px;
    line-height: 1;
    transition: color 0.2s ease;

    &:hover {
      color: #ef4444;
    }
  }
`;

export const ConDivider = styled.div`
  height: 1px;
  background: #eaecf0;
  margin: 16px 0;
`;

export const ConSubmitButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #55b3d6 0%, #4169e1 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;

  &:hover {
    background: linear-gradient(135deg, #3d9fc2 0%, #4169e1 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(85, 179, 214, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #d0d5dd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ConPrivacyCheckbox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 10px;
  border: 1px solid #eaecf0;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    cursor: pointer;
    accent-color: #55b3d6;
  }

  .checkbox-text {
    font-size: 0.9rem;
    color: #344054;
    line-height: 1.5;

    a {
      color: #55b3d6;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: #3d9fc2;
      }
    }
  }
`;

export const ConFormNotice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;

  .notice-icon {
    font-size: 1.1rem;
  }

  .notice-text {
    font-size: 0.85rem;
    color: #92400e;
    line-height: 1.5;
  }
`;

// ===== 성공/에러 메시지 =====
export const ConMessageBox = styled.div`
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  margin-top: 20px;

  &.success {
    background: #f0fdf4;
    border: 1px solid #86efac;

    .icon {
      font-size: 3rem;
      margin-bottom: 12px;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #166534;
      margin-bottom: 8px;
    }

    .message {
      font-size: 0.95rem;
      color: #15803d;
    }
  }

  &.error {
    background: #fef2f2;
    border: 1px solid #fca5a5;

    .icon {
      font-size: 3rem;
      margin-bottom: 12px;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #991b1b;
      margin-bottom: 8px;
    }

    .message {
      font-size: 0.95rem;
      color: #b91c1c;
    }
  }
`;

// ===== 로딩 스피너 =====
export const ConLoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spin 0.8s ease-in-out infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// ===== 팀 선택 카드 스타일 =====
export const ConTeamSelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ConTeamSelectCard = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: 2px solid ${(props) => (props.$selected ? "#55b3d6" : "#e5e7eb")};
  border-radius: 12px;
  background: ${(props) => (props.$selected ? "#f0f9fc" : "#ffffff")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #55b3d6;
    background: #f9fafb;
  }

  input[type="radio"] {
    display: none;
  }

  .team-icon {
    font-size: 1.5rem;
  }

  .team-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => (props.$selected ? "#0e7490" : "#374151")};
    text-align: center;
  }

  .team-dept {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

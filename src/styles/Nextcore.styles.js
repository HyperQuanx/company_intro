import styled from "styled-components";

/* ========== 공통 섹션 스타일 ========== */
export const CommonSection = styled.section`
  padding: 60px 20px;
`;

export const CommonSectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;

  span {
    color: #4169e1;
  }
`;

/* ========== 비디오/유튜브 관련 스타일 ========== */
export const VideoSection = styled.section`
  padding: 60px 20px;
`;

export const VideoSectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 40px;

  span {
    color: #4169e1;
  }
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const VideoCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const VideoThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${VideoCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const VideoPlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 25px solid white;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    margin-left: 5px;
  }

  ${VideoCard}:hover & {
    background: rgba(255, 0, 0, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const VideoInfo = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
  }
`;

/* ========== 모달 스타일 ========== */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 10px;
  line-height: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

/* ========== 카드 그리드 스타일 (범용) ========== */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #f0f0f0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
  }
`;

/* ========== 회사소개 관련 스타일 ========== */
export const AboutSection = styled.section`
  padding: 80px 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #333;
  text-align: center;
  margin-bottom: 50px;

  span {
    color: #4169e1;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  flex: 1;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }
`;

/* ========== 타임라인/연혁 스타일 ========== */
export const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 60px;
    top: 30px;
    bottom: -40px;
    width: 2px;
    background: #ddd;
  }

  &:last-child::before {
    display: none;
  }
`;

export const TimelineYear = styled.div`
  width: 60px;
  font-size: 1.2rem;
  font-weight: 800;
  color: #4169e1;
  flex-shrink: 0;
`;

export const TimelineContent = styled.div`
  flex: 1;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 15px;
    width: 20px;
    height: 20px;
    background: #4169e1;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
  }
`;

/* ========== 문의하기 폼 스타일 ========== */
export const ContactSection = styled.section`
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;

  label {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4169e1;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  background: #4169e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3457c9;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

import styled, { keyframes } from "styled-components";

const loadingFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PublicSContainer = styled.section`
  animation: ${loadingFadeInUp} 0.8s ease-out;
`;

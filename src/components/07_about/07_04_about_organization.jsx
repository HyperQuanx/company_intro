import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const AboutOrganization = () => {
  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#4aa8d8"
        />
        <HeroBannerContent>
          <HeroBannerTitle>조직도 및 구성</HeroBannerTitle>
          <HeroBannerDescription>
            ICT 기술부문의 엔지니어와 개발자로 구성된 전문성을 기반으로
            <br />
            사업 수행에 최적화된 조직 및 인력 구성을 운영합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>
      <div></div>
    </>
  );
};

export default AboutOrganization;

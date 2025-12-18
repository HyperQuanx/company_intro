import React, { useState } from "react";
import {
  SolutionHeroBanner,
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerTitle,
  HeroBannerDescription,
  PageContainer,
  ContentWrapper,
} from "../../styles/Nextcare.styles";
import {
  VideoSection,
  VideoSectionTitle,
  VideoGrid,
  VideoCard,
  VideoThumbnailWrapper,
  VideoPlayButton,
  VideoInfo,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "../../styles/Nextcore.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

// 히어로 배너 배경 이미지
const HERO_BG_IMAGE = "/nextcore_text.png";

// 유튜브 영상 데이터
const videoData = [
  {
    id: "mMT1Mjpgqxk",
    title: "(원자력)KHNP+NEWS+기술교류회+및+MOU",
    description: "한국수력원자력과의 기술교류회 및 MOU 체결 현장",
  },
  {
    id: "eGg48UpPdvA",
    title: "한국서부발전 상생기업 넥스트코어 소개",
    description: "한국서부발전 상생협력 파트너 기업 소개 영상",
  },
  {
    id: "BpQ1aQaMDlM",
    title:
      "(홍보영상)(주)넥스트코어테크놀로지 [SBS Biz 채널 Pick UP! 트렌드 스페셜] 산업현장 중대재해처벌법 3D 안전관리 플랫폼",
    description: "SBS Biz 방영 - 중대재해처벌법 대응 3D 안전관리 솔루션",
  },
  {
    id: "LzQGx4Sy5xk",
    title:
      "(홍보영상)(주)넥스트코어테크놀로지 3D기반 디지털 안전관리 플랫폼 (우수조달 등록 플랫폼)",
    description: "조달청 우수조달 등록 3D 디지털 안전관리 플랫폼 소개",
  },
  {
    id: "9muqSrOYb8c",
    title: "(홍보영상)(주)넥스트코어테크놀로지 영상 3D 통합 안전 관제플랫폼",
    description: "영상 기반 3D 통합 안전 관제 시스템 홍보 영상",
  },
  {
    id: "aZDSYPAwZaY",
    title: "(주)넥스트코어테크놀로지 지게차 관제 시스템",
    description: "물류 현장 지게차 실시간 위치추적 및 안전관제 시스템",
  },
];

const Insight_videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  // 유튜브 썸네일 URL 생성
  const getThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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
          <HeroBannerTitle>레퍼런스 영상</HeroBannerTitle>
          <HeroBannerDescription>
            다양한 솔루션과 프로젝트의 레퍼런스 영상을 제공합니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <PageContainer>
          <ContentWrapper>
            <VideoSection>
              <VideoSectionTitle>
                <span>넥스트코어</span> 레퍼런스 영상
              </VideoSectionTitle>

              <VideoGrid>
                {videoData.map((video, index) => (
                  <VideoCard key={index} onClick={() => openVideo(video.id)}>
                    <VideoThumbnailWrapper>
                      <img
                        src={getThumbnail(video.id)}
                        alt={video.title}
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      <VideoPlayButton />
                    </VideoThumbnailWrapper>
                    <VideoInfo>
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </VideoInfo>
                  </VideoCard>
                ))}
              </VideoGrid>
            </VideoSection>
          </ContentWrapper>
        </PageContainer>
      </PublicSContainer>

      {/* 유튜브 플레이어 모달 */}
      {selectedVideo && (
        <ModalOverlay onClick={closeVideo}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeVideo}>&times;</ModalCloseButton>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Insight_videos;

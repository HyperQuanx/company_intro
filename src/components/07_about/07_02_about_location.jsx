import React, { useEffect, useRef } from "react";
import {
  PageSection,
  MapArea,
  MapCanvas,
  ContentArea,
  InfoTable,
  InfoRow,
  InfoLabel,
  InfoValue,
  Inline,
  LinkButton,
  Divider,
  TransitRow,
  TransitIcon,
  Chip,
} from "../../styles/NextcoreAbout.styles";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";

const AboutLocation = () => {
  const mapElRef = useRef(null);

  const addressMain =
    "서울특별시 송파구 범원로 128 A동 610호 (SK V1 GL 메트로시티)";
  const transitText = "문정역 3번 출구 도보 5분";

  const phone = "070-5015-2313";
  const fax = "070-8240-2314";
  const email = "operational@next-core.co.kr";

  // 운영 시 “정확 좌표”로 교체하세요 (아래 3번 가이드 참고)
  const position = { lat: 37.4866, lng: 127.1216 };

  // Maps JS API 로더 (가장 단순한 script 방식)
  useEffect(() => {
    if (!mapElRef.current) return;

    const initMap = async () => {
      if (!window.google?.maps) return;

      const map = new window.google.maps.Map(mapElRef.current, {
        center: position,
        zoom: 16,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      const marker = new window.google.maps.Marker({
        position,
        map,
        title: "(주) 넥스트코어테크놀로지",
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding:10px 12px; max-width:280px; font-size:12px; line-height:1.45;">
            <div style="font-weight:700; margin-bottom:6px;">(주) 넥스트코어테크놀로지</div>
            <div style="color:#344054;">${addressMain}</div>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open({ anchor: marker, map });
      });
    };

    // 이미 로드되어 있으면 바로 초기화
    if (window.google?.maps) {
      initMap();
      return;
    }

    // 동적 로드
    const scriptId = "google-maps-sdk";
    const existing = document.getElementById(scriptId);

    if (existing) {
      existing.addEventListener("load", initMap);
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    // 필요 시 libraries=places 추가 가능
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [addressMain, position.lat, position.lng]);

  // “자세히보기”는 API 키 없이 가능한 Maps URL 사용(권장)
  const googleMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressMain
  )}`; // Maps URLs 문서 :contentReference[oaicite:0]{index=0}

  return (
    <PageSection>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>오시는 길</HeroBannerTitle>
          <HeroBannerDescription>
            본사 위치 및 연락처를 상세히 안내해 드립니다.
            <br />
            언제나 고객님의 방문을 환영하며, 최상의 서비스를 약속드립니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <MapArea>
        <MapCanvas ref={mapElRef} />
      </MapArea>

      <ContentArea>
        <InfoTable>
          <InfoRow>
            <InfoLabel>주소</InfoLabel>
            <InfoValue>
              <div style={{ fontWeight: 700 }}>{addressMain}</div>
              <Inline style={{ marginTop: 14 }}>
                <LinkButton
                  as="a"
                  href={googleMapLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  자세히보기 ↗
                </LinkButton>
              </Inline>
            </InfoValue>
          </InfoRow>

          <Divider />

          <InfoRow>
            <InfoLabel>이메일</InfoLabel>
            <InfoValue>
              <Inline>
                <div style={{ fontWeight: 700 }}>{email}</div>
                <Chip as="a" href={`mailto:${email}`}>
                  메일 보내기
                </Chip>
              </Inline>
            </InfoValue>
          </InfoRow>

          <Divider />

          <InfoRow>
            <InfoLabel>대표전화</InfoLabel>
            <InfoValue>
              <Inline>
                <div style={{ fontWeight: 700 }}>{phone}</div>
                <Chip as="a" href={`tel:${phone.replaceAll("-", "")}`}>
                  전화걸기
                </Chip>
              </Inline>
            </InfoValue>
          </InfoRow>

          <Divider />

          <InfoRow>
            <InfoLabel>팩스번호</InfoLabel>
            <InfoValue>
              <div style={{ fontWeight: 700 }}>{fax}</div>
            </InfoValue>
          </InfoRow>

          <Divider />

          <InfoRow>
            <InfoLabel>오시는 길</InfoLabel>
            <InfoValue>
              <TransitRow>
                <TransitIcon aria-hidden>🚇</TransitIcon>
                <div>{transitText}</div>
              </TransitRow>
            </InfoValue>
          </InfoRow>
        </InfoTable>
      </ContentArea>
    </PageSection>
  );
};

export default AboutLocation;

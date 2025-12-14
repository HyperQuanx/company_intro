import React, { useState } from "react";
import {
  ClientListContainer,
  ClientListHeader,
  CategoryNav,
  CategoryButton,
  SliderContainer,
  SliderRow,
  SliderTrack,
  ClientImage,
  SingleCategoryView,
  SingleCategoryTrack,
  CategoryImageGroup,
} from "../../styles/ClientList.styles";

// 카테고리 데이터
const categories = [
  { id: "all", name: "전체" },
  { id: "manufacturing", name: "제조유통" },
  { id: "public", name: "공공기관" },
  { id: "it", name: "정보통신" },
  { id: "military", name: "군사업" },
  { id: "finance", name: "금융" },
  { id: "etc", name: "기타" },
];

// 카테고리별 이미지 데이터
const clientImages = {
  manufacturing: ["/clientList/제조유통01.png", "/clientList/제조유동02.png"],
  public: [
    "/clientList/공공기관01.png",
    "/clientList/공공기관02.png",
    "/clientList/공공기관03.png",
  ],
  it: ["/clientList/정보통신01.png"],
  military: ["/clientList/군사업01.png"],
  finance: ["/clientList/금융01.png"],
  etc: ["/clientList/기타01.png", "/clientList/기타02.png"],
};

// 전체 보기용 행 데이터 구성
const row1Images = [...clientImages.manufacturing, ...clientImages.public];
const row2Images = [
  ...clientImages.it,
  ...clientImages.military,
  ...clientImages.finance,
];
const row3Images = [...clientImages.etc, ...clientImages.manufacturing];

const Main_clientList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // 선택된 카테고리의 이미지 가져오기 (군사업은 5번 반복)
  const getSelectedCategoryImages = () => {
    if (activeCategory === "all") return [];
    const images = clientImages[activeCategory] || [];
    // 군사업은 이미지가 적어서 5번 반복
    if (activeCategory === "military") {
      return [...images, ...images, ...images, ...images, ...images];
    }
    return images;
  };

  const selectedImages = getSelectedCategoryImages();

  return (
    <ClientListContainer>
      <ClientListHeader>
        <h2>
          함께 성장하는 동반자, <span>넥스트코어 테크놀로지</span>의 파트너
        </h2>
        <p>
          다양한 산업 분야의 주요 기업 및 기관과의 협력을 통해
          <br />더 넓은 기술 생태계를 구축하고, 미래가치를 함께 만들어가고
          있습니다.
        </p>
      </ClientListHeader>

      {/* 카테고리 버튼 */}
      <CategoryNav>
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            $isActive={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </CategoryButton>
        ))}
      </CategoryNav>

      {/* 전체 보기: 3줄 무한 스크롤 */}
      {activeCategory === "all" && (
        <SliderContainer>
          {/* 첫째 줄: 오른쪽으로 이동 */}
          <SliderRow>
            <SliderTrack $direction="right" $duration="40s">
              {[...row1Images, ...row1Images].map((img, idx) => (
                <ClientImage key={`row1-${idx}`}>
                  <img src={img} alt={`client-${idx}`} />
                </ClientImage>
              ))}
            </SliderTrack>
          </SliderRow>

          {/* 둘째 줄: 왼쪽으로 이동 */}
          <SliderRow>
            <SliderTrack $direction="left" $duration="35s">
              {[...row2Images, ...row2Images].map((img, idx) => (
                <ClientImage key={`row2-${idx}`}>
                  <img src={img} alt={`client-${idx}`} />
                </ClientImage>
              ))}
            </SliderTrack>
          </SliderRow>

          {/* 셋째 줄: 오른쪽으로 이동 */}
          <SliderRow>
            <SliderTrack $direction="right" $duration="45s">
              {[...row3Images, ...row3Images].map((img, idx) => (
                <ClientImage key={`row3-${idx}`}>
                  <img src={img} alt={`client-${idx}`} />
                </ClientImage>
              ))}
            </SliderTrack>
          </SliderRow>
        </SliderContainer>
      )}

      {/* 개별 카테고리 보기: 단일 줄 오른쪽 스크롤 */}
      {activeCategory !== "all" && selectedImages.length > 0 && (
        <SingleCategoryView>
          <SingleCategoryTrack $duration="25s">
            <CategoryImageGroup>
              {[...selectedImages, ...selectedImages, ...selectedImages].map(
                (img, idx) => (
                  <ClientImage key={`single-${idx}`}>
                    <img src={img} alt={`client-${idx}`} />
                  </ClientImage>
                )
              )}
            </CategoryImageGroup>
          </SingleCategoryTrack>
        </SingleCategoryView>
      )}
    </ClientListContainer>
  );
};

export default Main_clientList;

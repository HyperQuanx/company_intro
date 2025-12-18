import React, { useState } from "react";
import {
  HeroBannerBackground,
  HeroBannerContent,
  HeroBannerDescription,
  HeroBannerTitle,
  SolutionHeroBanner,
} from "../../styles/Nextcare.styles";
import {
  NewsSection,
  NewsContainer,
  NewsGridContainer,
  NewsCard,
  NewsImageWrapper,
  NewsImage,
  NewsContent,
  NewsDate,
  NewsTitle,
  NewsDescription,
  NewsTag,
  EmptyState,
  NewsSortContainer,
  NewsSortButton,
} from "../../styles/NextcoreInsight.styles";
import {
  AboutSectionTitle,
  ProgramIPTitleWrap,
} from "../../styles/NextcoreAbout.styles";
import { PublicSContainer } from "../../styles/PublicS.styles";

const InsightNews = () => {
  const [sortOrder, setSortOrder] = useState("newest");
  // 뉴스 데이터 배열
  // 지금부터라도 사이트를 가볍게 하기 위해 이미지 주소로 넣음.
  // 사실 귀찮음

  const newsData = [
    {
      id: 1,
      title: "동서발전 업무협약식",
      date: "2020.06.25",
      image: "https://image.zdnet.co.kr/2020/06/25/pym_jPkZFuMYs1QwWv2F.jpg",
      link: "https://zdnet.co.kr/view/?no=20200625194538",
      tag: "보도자료",
    },
    {
      id: 2,
      title: "넥스트코어테크놀로지 안전관리 플랫폼 조달청 우수제품 지정",
      date: "2021.07.13",
      image: "https://cdn.nbntv.co.kr/news/photo/202107/931300_37350_2457.jpg",
      link: "https://www.nbntv.co.kr/news/articleView.html?idxno=931300",
      tag: "보도자료",
    },
    {
      id: 3,
      title: "한국서부발전 디지털 전환 그랜드 챌린지 우수상 수상",
      date: "2021.11.14",
      image: "https://www.epj.co.kr/news/photo/202111/29199_40366_449.jpg",
      link: "https://www.epj.co.kr/news/articleView.html?idxno=29199",
      tag: "보도자료",
    },
    {
      id: 4,
      title: "한국동서발전 상생협력 얼라이언스 협약식",
      date: "2021.12.14",
      image:
        "https://image.zdnet.co.kr/2021/12/14/efe3d346c34b93d2b62adca9990d4c57.jpg",
      link: "https://zdnet.co.kr/view/?no=20211214181123",
      tag: "보도자료",
    },
    {
      id: 5,
      title: "국립한경대 산학협력 협약체결",
      date: "2021.10.22",
      image: "https://www.kyosu.net/news/photo/202110/79188_67430_334.jpg",
      link: "https://www.kyosu.net/news/articleView.html?idxno=79188",
      tag: "보도자료",
    },
    {
      id: 6,
      title: "한국서부발전 안전관리 플랫폼 착수회의",
      date: "2022.07.14",
      image:
        "https://cdn.gukjenews.com/news/photo/202207/2508434_2507861_159.jpg",
      link: "https://www.gukjenews.com/news/articleView.html?idxno=2508434",
      tag: "보도자료",
    },
    {
      id: 7,
      title: "유로닉스 업무협약식",
      date: "2022.09.26",
      image:
        "https://cdn.dailysecu.com/news/photo/202209/139923_164165_2033.jpg",
      link: "https://www.dailysecu.com/news/articleView.html?idxno=139923",
      tag: "보도자료",
    },
    {
      id: 8,
      title: "조달청 혁신제품 전시회 참가",
      date: "2022.11.15",
      image: "https://cdn.nbntv.co.kr/news/photo/202211/997665_112603_2947.jpg",
      link: "https://www.nbntv.co.kr/news/articleView.html?idxno=997665",
      tag: "보도자료",
    },
    {
      id: 9,
      title: "충북대학교 추계학술대회 우수논문발표상 수상",
      date: "2023.01.05",
      image: "https://cdn.newsin.co.kr/news/photo/202301/109681_106255_756.jpg",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=109681",
      tag: "보도자료",
    },
    {
      id: 10,
      title: "한국서부발전 기술 공유",
      date: "2023.02.22",
      image:
        "https://img1.newsis.com/2023/02/22/NISI20230222_0001201992_web.jpg?rnd=20230222172143",
      link: "https://www.newsis.com/view/NISX20230222_0002202606",
      tag: "보도자료",
    },
    {
      id: 11,
      title: "2023년 코리아빌드위크 참가",
      date: "2023.08.04",
      image:
        "https://cdn.nbntv.co.kr/news/photo/202308/3001299_201830_3151.jpg",
      link: "https://www.nbntv.co.kr/news/articleView.html?idxno=3001299",
      tag: "보도자료",
    },
    {
      id: 12,
      title: "'KEPIC-WeeK'에 전시회 및 워크숍 참가",
      date: "2023.09.07",
      image: "https://cdn.newsin.co.kr/news/photo/202309/115243_114729_511.jpg",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=115243",
      tag: "보도자료",
    },
    {
      id: 13,
      title: "스페인 '2023 SCEWEC'에 전시회 및 워크숍 참가",
      date: "2023.11.17",
      image: "https://cdn.newsin.co.kr/news/photo/202311/116670_116752_625.jpg",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=116670",
      tag: "보도자료",
    },
    {
      id: 14,
      title: "한국수력원자력 기술이전 협약",
      date: "2023.12.01",
      image:
        "https://cdn.newsin.co.kr/news/photo/202312/116917_117068_5653.jpg",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=116917",
      tag: "보도자료",
    },
    {
      id: 15,
      title: "아이티에스 - 에너지 공동 사업 기획 체결",
      date: "2023.12.01",
      image:
        "https://cdn.newsin.co.kr/news/photo/202312/116918_117069_5851.png",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=116918",
      tag: "보도자료",
    },
    {
      id: 16,
      title: "KT-넥스트코어테크놀로지 디지털 트윈 기반 솔루션 업무협약 체결",
      date: "2024.06.19",
      image:
        "https://cdn.newsin.co.kr/news/photo/202406/120380_121895_5714.jpg",
      link: "https://www.newsin.co.kr/news/articleView.html?idxno=120380",
      tag: "보도자료",
    },
    {
      id: 17,
      title: "빅스포 2024 국제발명특허대전 금상",
      date: "2024.11.08",
      image:
        "https://cdn.job-post.co.kr/news/photo/202411/118942_125705_4817.jpg",
      link: "https://www.job-post.co.kr/news/articleView.html?idxno=118942",
      tag: "보도자료",
    },
    {
      id: 18,
      title: "중부발전, 신서천 IoT 기반 항만시설 안전관리 플랫폼 준공",
      date: "2024.11.08",
      image: "https://epj.co.kr/news/photo/202503/35961_47905_268.jpeg",
      link: "https://www.job-post.co.kr/news/articleView.html?idxno=118942",
      tag: "보도자료",
    },
  ];

  return (
    <>
      <SolutionHeroBanner>
        <HeroBannerBackground
          $bgImage="/nextcore_text.png"
          $contain
          $bgColor="#b1b1b1"
        />
        <HeroBannerContent>
          <HeroBannerTitle>뉴스</HeroBannerTitle>
          <HeroBannerDescription>
            넥스트코어의 새로운 소식과 다양한 이야기를 전해드립니다.
          </HeroBannerDescription>
        </HeroBannerContent>
      </SolutionHeroBanner>

      <PublicSContainer>
        <NewsSection>
          <NewsContainer>
            <ProgramIPTitleWrap>
              <AboutSectionTitle>
                <h3>넥스트코어테크놀로지 홍보 기사</h3>
              </AboutSectionTitle>

              <NewsSortContainer>
                <NewsSortButton
                  $active={sortOrder === "newest"}
                  onClick={() => setSortOrder("newest")}
                >
                  최신순
                </NewsSortButton>
                <NewsSortButton
                  $active={sortOrder === "oldest"}
                  onClick={() => setSortOrder("oldest")}
                >
                  오래된순
                </NewsSortButton>
              </NewsSortContainer>
            </ProgramIPTitleWrap>

            <NewsGridContainer>
              {newsData && newsData.length > 0 ? (
                (sortOrder === "newest"
                  ? [...newsData].reverse()
                  : newsData
                ).map((news) => (
                  <NewsCard
                    key={news.id}
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {news.image && (
                      <NewsImageWrapper>
                        <NewsImage
                          className="news-image"
                          src={news.image}
                          alt={news.title}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </NewsImageWrapper>
                    )}
                    <NewsContent>
                      <NewsDate>{news.date}</NewsDate>
                      <NewsTitle className="news-title">{news.title}</NewsTitle>
                      {news.description && (
                        <NewsDescription>{news.description}</NewsDescription>
                      )}
                      {news.tag && <NewsTag>{news.tag}</NewsTag>}
                    </NewsContent>
                  </NewsCard>
                ))
              ) : (
                <EmptyState style={{ gridColumn: "1 / -1" }}>
                  <p>게시된 뉴스가 없습니다.</p>
                </EmptyState>
              )}
            </NewsGridContainer>
          </NewsContainer>
        </NewsSection>
      </PublicSContainer>
    </>
  );
};

export default InsightNews;

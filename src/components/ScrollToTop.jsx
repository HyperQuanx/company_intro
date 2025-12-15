import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 스크롤 최상단으로 이동할 경로 목록 (필요에 따라 추가/삭제)
const SCROLL_TO_TOP_PATHS = [
  "/solutions/nextcare-m",
  "/solutions/nextcare-e",
  "/solutions/nextcare-s",
  "/solutions/nextcare-ai",
  "/solutions/nextcare-iot",
  "/insight/videos",
  // 추가할 경로는 여기에 작성
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 지정된 경로에 해당하면 스크롤 최상단으로 이동
    if (SCROLL_TO_TOP_PATHS.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

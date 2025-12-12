import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { AppContainer, MainContent } from "./styles/Layout.styles";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* 추가 페이지 라우팅 */}
          </Routes>
        </MainContent>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

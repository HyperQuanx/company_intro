import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./components/MainPage";
import M_main from "./components/01_sol_m/01_01_m_main";
import E_main from "./components/02_sol_e/02_01_e_main";
import S_main from "./components/03_01_s/03_01_s_main";
import AI_main from "./components/04_01_ai/04_01_ai_main";
import IoT_main from "./components/05_01_iot/05_01_iot_main";
import { AppContainer, MainContent } from "./styles/Layout.styles";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContainer>
        <Header />

        <MainContent>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/solutions/nextcare-m" element={<M_main />} />
            <Route path="/solutions/nextcare-e" element={<E_main />} />
            <Route path="/solutions/nextcare-s" element={<S_main />} />
            <Route path="/solutions/nextcare-ai" element={<AI_main />} />
            <Route path="/solutions/nextcare-iot" element={<IoT_main />} />
            {/* 추가 페이지 라우팅 */}
          </Routes>
        </MainContent>

        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

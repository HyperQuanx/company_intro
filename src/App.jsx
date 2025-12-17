import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./components/MainPage";
import M_main from "./components/01_sol_m/01_01_m_main";
import E_main from "./components/02_sol_e/02_01_e_main";
import S_main from "./components/03_sol_s/03_01_s_main";
import AI_main from "./components/04_sol_ai/04_01_ai_main";
import IoT_main from "./components/05_sol_iot/05_01_iot_main";
import { AppContainer, MainContent } from "./styles/Layout.styles";
import Footer from "./components/Footer";
import M_features from "./components/01_sol_m/01_02_m_features";
import M_reference from "./components/01_sol_m/01_03_m_reference";
import E_features from "./components/02_sol_e/02_02_e_features";
import E_reference from "./components/02_sol_e/02_03_e_reference";
import S_features from "./components/03_sol_s/03_02_s_features";
import S_reference from "./components/03_sol_s/03_03_s_reference";
import AI_reference from "./components/04_sol_ai/04_02_ai_reference";
import IoT_reference from "./components/05_sol_iot/05_02_iot_reference";
import Insight_videos from "./components/09_insight/09_02_insight_videos";
import AboutIntro from "./components/07_about/07_01_about_intro";
import AboutLocation from "./components/07_about/07_02_about_location";
import AboutHistory from "./components/07_about/07_03_about_history";
import AboutOrganization from "./components/07_about/07_04_about_organization";
import AboutCertification from "./components/07_about/07_05_about_certification";
import AboutMou from "./components/07_about/07_06_about_mou";
import AboutClients from "./components/07_about/07_07_about_clients";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContainer>
        <Header />

        <MainContent>
          <Routes>
            {/* 메인페이지 */}
            <Route path="/" element={<MainPage />} />

            {/* 01 Nextcare-M */}
            <Route path="/solutions/nextcare-m" element={<M_main />} />
            <Route
              path="/solutions/nextcare-m/features"
              element={<M_features />}
            />
            <Route
              path="/solutions/nextcare-m/reference"
              element={<M_reference />}
            />

            {/* 02 Nextcare-E */}
            <Route path="/solutions/nextcare-e" element={<E_main />} />
            <Route
              path="/solutions/nextcare-e/features"
              element={<E_features />}
            />
            <Route
              path="/solutions/nextcare-e/reference"
              element={<E_reference />}
            />

            {/* 03 Nextcare-S */}
            <Route path="/solutions/nextcare-s" element={<S_main />} />
            <Route
              path="/solutions/nextcare-s/features"
              element={<S_features />}
            />
            <Route
              path="/solutions/nextcare-s/reference"
              element={<S_reference />}
            />

            {/* 04 Nextcare-AI */}
            <Route path="/solutions/nextcare-ai" element={<AI_main />} />
            <Route
              path="/solutions/nextcare-ai/reference"
              element={<AI_reference />}
            />

            {/* 05 Nextcare-IoT */}
            <Route path="/solutions/nextcare-iot" element={<IoT_main />} />
            <Route
              path="/solutions/nextcare-iot/reference"
              element={<IoT_reference />}
            />

            {/* 07 회사소개 */}
            <Route path="/about/intro" element={<AboutIntro />} />
            <Route path="/about/location" element={<AboutLocation />} />
            <Route path="/about/history" element={<AboutHistory />} />
            <Route path="/about/organization" element={<AboutOrganization />} />
            <Route
              path="/about/certification"
              element={<AboutCertification />}
            />
            <Route path="/about/mou" element={<AboutMou />} />
            <Route path="/about/clients" element={<AboutClients />} />

            {/* 09 레퍼런스 영상 */}
            <Route path="/insight/videos" element={<Insight_videos />} />
          </Routes>
        </MainContent>

        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

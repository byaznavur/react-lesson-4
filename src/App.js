import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import Loading from "./components/shares/Loading";

const PostsPage = lazy(() => import("./pages/PostsPage"));
const PostPage = lazy(() => import("./pages/PostPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfoliosPage = lazy(() => import("./pages/PortfoliosPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about">
              <Route index element={<AboutPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="partners" element={<PartnersPage />} />
            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="portfolios" element={<PortfoliosPage />} />
            <Route path="portfolios/:portfolioId" element={<PortfolioPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:postId" element={<PostPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

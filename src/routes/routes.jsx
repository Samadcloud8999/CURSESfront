import HeroSection from "../components/common/HeroSection";
import HTMLPage from "../page/cursesPage/HTMLPage";
import CSSPage from "../page/cursesPage/CSSPage";
import JavaScriptPage from "../page/cursesPage/JavaScriptPage";
import ReactPage from "../page/cursesPage/ReactPage";
import ProjectsPage from "../page/cursesPage/ProjectsPage";
import Testing from "../page/Teasting/Testing";
import TestingCss from "../page/Teasting/TestingCss";
import TestingJS from "../page/Teasting/TestingJS";
import TestingReact from "../page/Teasting/TestingReact";
import LibrariesPage from "../page/cursesPage/LibrariesPage";
import TutorialVideos from "../page/cursesPage/TutorialVideos";
import About from "../components/common/About/About";
import Contact from "../components/common/About/Contact";
import CoursesSection from "../components/common/CoursesSection";
import FeaturesSection from "../components/common/FeaturesSection";
import HeroFrontEndSection from "../components/common/HeroFrontEndSection";
import JsxInterview from "../components/common/Frontend-interview/JsxInterview";
import HtmlSait from "../page/Web-dev-instructions/HtmlSait";
import JsSait from "../page/Web-dev-instructions/JsSait";
import ReactSait from "../page/Web-dev-instructions/ReactSait";
import Faq from "../components/common/Faq";

const routes = [
  {
    path: "/",
    element: (
      <>
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        <HeroFrontEndSection />
        <Contact />
      </>
    ),
  },
  {
    path: "/courses/html",
    element: <HTMLPage />,
  },
  {
    path: "/courses/css",
    element: <CSSPage />,
  },
  { path: "/about", element: <About /> },
  {
    path: "/courses/javascript",
    element: <JavaScriptPage />,
  },
  {
    path: "/courses/react",
    element: <ReactPage />,
  },
  {
    path: "/courses/projects",
    element: <ProjectsPage />,
  },
  { path: "/contact", element: <Contact /> },
  {
    path: "/tutorial",
    element: <TutorialVideos />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
  { path: "/interview", element: <JsxInterview /> },
  {
    path: "/libraries",
    element: <LibrariesPage />,
  },
  {
    path: "/testcss",
    element: <TestingCss />,
  },
  {
    path: "/testjs",
    element: <TestingJS />,
  },
  {
    path: "/testra",
    element: <TestingReact />,
  },
  {path: "/hsait", element: <HtmlSait />},
  {path: "/Jsait", element: <JsSait />},
  {path: "/Rsait", element: <ReactSait />},
  {path: "/faq", element: <Faq />}
];

export default routes;

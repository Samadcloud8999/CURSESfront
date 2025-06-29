import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/organism/Header";
import routes from "./routes/Routes";
import ChatbaseWidget from "./components/chatbot/ChatbaseWidget";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>

      <ChatbaseWidget />
      <Footer />
    </Router>
  );
}

export default App;

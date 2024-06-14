import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FeaturedNews from "./pages/FeaturedNews.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/news/featured" element={<FeaturedNews />} />
      </Routes>
    </Router>
  );
}

export default App;

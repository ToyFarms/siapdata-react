import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Features from "./pages/Features";
import PricingPage from "./pages/Pricing";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

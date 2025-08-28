import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePersistentScroll } from "../hooks/usePersistentScroll";

export default function Layout() {
  usePersistentScroll();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

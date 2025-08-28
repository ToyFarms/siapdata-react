import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useWindowScrollPersistence } from "@/ScrollPersistent";

export default function Layout() {
  useWindowScrollPersistence();

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

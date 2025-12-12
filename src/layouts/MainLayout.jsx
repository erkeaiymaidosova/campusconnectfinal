import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Outlet — сюда будут рендериться дочерние страницы */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

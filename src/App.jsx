import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import DaftarMenu from "./pages/DaftarMenu.jsx";
import DetailMenu from "./pages/DetailMenu.jsx";
import Tentang from "./pages/Tentang.jsx";
import NotFound from "./pages/NotFound.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.konten}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/menu" element={<DaftarMenu />} />
          <Route path="/menu/:id" element={<DetailMenu />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

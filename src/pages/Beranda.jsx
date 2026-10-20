import { Link } from "react-router-dom";
import daftarMenu from "../data/menu.js";
import KartuMenu from "../components/KartuMenu.jsx";
import styles from "./Beranda.module.css";

function Beranda() {
  // ambil 3 menu pertama sebagai menu rekomendasi
  const rekomendasi = daftarMenu.slice(0, 3);

  return (
    <div>
      <section className={styles.hero}>
        <h1>Selamat datang di Kantin Kampus</h1>
        <p>
          Lihat daftar menu dari kios-kios di kantin tanpa harus antre dulu
          untuk tahu harganya.
        </p>
        <Link to="/menu" className={styles.tombol}>
          Lihat Semua Menu
        </Link>
      </section>

      <h2 className={styles.judul}>Menu Rekomendasi</h2>
      <div className={styles.grid}>
        {rekomendasi.map((item) => (
          <KartuMenu key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Beranda;

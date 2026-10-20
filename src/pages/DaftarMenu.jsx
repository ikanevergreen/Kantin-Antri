import { useState } from "react";
import daftarMenu from "../data/menu.js";
import KartuMenu from "../components/KartuMenu.jsx";
import styles from "./DaftarMenu.module.css";

const kategoriList = ["semua", "makanan", "minuman", "camilan"];

function DaftarMenu() {
  const [kategori, setKategori] = useState("semua");

  const tampil =
    kategori === "semua"
      ? daftarMenu
      : daftarMenu.filter((item) => item.kategori === kategori);

  return (
    <div>
      <h1 className={styles.judul}>Daftar Menu</h1>

      <div className={styles.filter}>
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => setKategori(k)}
            className={k === kategori ? styles.filterAktif : styles.filterBtn}
          >
            {k}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {tampil.map((item) => (
          <KartuMenu key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DaftarMenu;

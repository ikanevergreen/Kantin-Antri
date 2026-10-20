import { Link } from "react-router-dom";
import { formatRupiah } from "../data/menu.js";
import styles from "./KartuMenu.module.css";

function KartuMenu({ item }) {
  return (
    <div className={styles.kartu}>
      <div className={styles.gambar}>{item.emoji}</div>
      <h3 className={styles.nama}>{item.nama}</h3>
      <p className={styles.kategori}>{item.kategori}</p>
      <p className={styles.harga}>{formatRupiah(item.harga)}</p>
      <Link to={`/menu/${item.id}`} className={styles.tombol}>
        Lihat Detail
      </Link>
    </div>
  );
}

export default KartuMenu;

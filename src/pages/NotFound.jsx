import { Link, useLocation } from "react-router-dom";
import styles from "./NotFound.module.css";


function NotFound({
  judul = "Halaman tidak ditemukan",
  pesan,
  tujuan = "/",
  labelTombol = "Kembali ke Beranda",
}) {
  const lokasi = useLocation();

  return (
    <div className={styles.kotak}>
      <p className={styles.kode}>404</p>
      <h1 className={styles.judul}>{judul}</h1>
      <p className={styles.pesan}>
        {pesan ?? `Alamat "${lokasi.pathname}" tidak ada di aplikasi ini.`}
      </p>
      <Link to={tujuan} className={styles.tombol}>
        {labelTombol}
      </Link>
    </div>
  );
}

export default NotFound;

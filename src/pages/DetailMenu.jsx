import { useParams, Link, useNavigate } from "react-router-dom";
import daftarMenu, { formatRupiah } from "../data/menu.js";
import NotFound from "./NotFound.jsx";
import styles from "./DetailMenu.module.css";

function DetailMenu() {
  const { id } = useParams();
  const navigate = useNavigate();


  const idValid = /^\d+$/.test(id);
  const item = idValid
    ? daftarMenu.find((m) => m.id === Number(id))
    : undefined;

  if (!item) {
    return (
      <NotFound
        judul="Menu tidak ditemukan"
        pesan={`Menu dengan id "${id}" tidak ada di daftar kami.`}
        tujuan="/menu"
        labelTombol="Kembali ke Daftar Menu"
      />
    );
  }

  // menu lain dari kios yang sama
  const lainnya = daftarMenu.filter(
    (m) => m.kios === item.kios && m.id !== item.id
  );

  return (
    <div>
      <button className={styles.kembali} onClick={() => navigate(-1)}>
        &larr; Kembali
      </button>

      <div className={styles.kotak}>
        <div className={styles.gambar}>{item.emoji}</div>
        <div>
          <h1 className={styles.nama}>{item.nama}</h1>
          <p className={styles.info}>
            {item.kategori} &middot; {item.kios}
          </p>
          <p className={styles.harga}>{formatRupiah(item.harga)}</p>
          <p>{item.deskripsi}</p>
        </div>
      </div>

      {lainnya.length > 0 && (
        <div className={styles.lainnya}>
          <h2>Menu lain dari {item.kios}</h2>
          <ul>
            {lainnya.map((m) => (
              <li key={m.id}>
                <Link to={`/menu/${m.id}`}>{m.nama}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DetailMenu;

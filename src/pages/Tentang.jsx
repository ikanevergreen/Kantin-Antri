import styles from "./Tentang.module.css";

function Tentang() {
  return (
    <div className={styles.halaman}>
      <h1>Tentang Aplikasi</h1>
      <p>
        Kantin Kampus adalah aplikasi React multi-halaman sederhana yang dibuat
        untuk tugas mata kuliah. Aplikasi ini menampilkan daftar menu kantin
        beserta detailnya.
      </p>

      <h2>Yang dipakai di tugas ini</h2>
      <ul>
        <li>React Router untuk navigasi antar halaman</li>
        <li>
          Parameter URL dinamis di <code>/menu/:id</code>
        </li>
        <li>CSS Modules supaya style tiap komponen tidak bentrok</li>
        <li>Halaman 404 untuk alamat yang tidak dikenal</li>
      </ul>

      <h2>Coba halaman tidak ditemukan</h2>
      <p>
        Ketik alamat sembarang seperti <code>/halaman-asal</code> atau{" "}
        <code>/menu/999</code> di browser untuk melihat penanganannya.
      </p>
    </div>
  );
}

export default Tentang;

# Kantin Kampus

Tugas 2 - aplikasi React multi-halaman dengan React Router dan CSS Modules.

## Cara menjalankan

```
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Halaman

| Alamat      | Halaman                                 |
| ----------- | --------------------------------------- |
| `/`         | Beranda                                 |
| `/menu`     | Daftar menu + filter kategori           |
| `/menu/:id` | Detail menu (parameter URL dinamis)     |
| `/tentang`  | Tentang aplikasi                        |
| `*`         | Halaman 404 untuk alamat tidak dikenal  |

## Pemenuhan rubrik

1. Routing dan parameter URL: `src/App.jsx` (rute) dan `src/pages/DetailMenu.jsx` (`useParams`).
2. Styling: setiap komponen punya file `.module.css` sendiri, warna dasar di `src/index.css`.
3. Kenyamanan dan keamanan navigasi: rute `*` ke `NotFound`, id di `/menu/:id` divalidasi (harus angka dan harus ada di data), `NavLink` menandai halaman aktif.
4. Dokumentasi: video demo dan riwayat chat AI dilampirkan terpisah.

## Struktur

```
src/
  components/   Navbar, Footer, KartuMenu
  pages/        Beranda, DaftarMenu, DetailMenu, Tentang, NotFound
  data/menu.js  data menu
```

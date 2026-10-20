
const daftarMenu = [
  {
    id: 1,
    nama: "Nasi Goreng Spesial",
    kategori: "makanan",
    harga: 15000,
    emoji: "🍳",
    deskripsi:
      "Nasi goreng dengan telur mata sapi, ayam suwir, dan kerupuk. Porsinya cukup untuk makan siang.",
    kios: "Kios Bu Rina",
  },
  {
    id: 2,
    nama: "Mie Ayam Bakso",
    kategori: "makanan",
    harga: 13000,
    emoji: "🍜",
    deskripsi:
      "Mie ayam dengan dua butir bakso dan pangsit goreng. Kuah dipisah kalau diminta.",
    kios: "Kios Pak Joko",
  },
  {
    id: 3,
    nama: "Ayam Geprek",
    kategori: "makanan",
    harga: 14000,
    emoji: "🍗",
    deskripsi:
      "Ayam krispi digeprek dengan sambal bawang. Level pedas bisa dipilih 1 sampai 5.",
    kios: "Kios Geprek 88",
  },
  {
    id: 4,
    nama: "Es Teh Manis",
    kategori: "minuman",
    harga: 4000,
    emoji: "🧋",
    deskripsi: "Teh manis dingin, gelas besar. Gula bisa dikurangi.",
    kios: "Kios Bu Rina",
  },
  {
    id: 5,
    nama: "Es Jeruk",
    kategori: "minuman",
    harga: 6000,
    emoji: "🍊",
    deskripsi: "Jeruk peras asli dengan es batu. Segar untuk siang yang panas.",
    kios: "Kios Segar",
  },
  {
    id: 6,
    nama: "Kopi Susu",
    kategori: "minuman",
    harga: 8000,
    emoji: "☕",
    deskripsi: "Kopi susu gula aren, cocok buat teman begadang ngerjain tugas.",
    kios: "Kios Segar",
  },
  {
    id: 7,
    nama: "Pisang Goreng",
    kategori: "camilan",
    harga: 7000,
    emoji: "🍌",
    deskripsi: "Pisang goreng tepung renyah, isi 4 potong per porsi.",
    kios: "Kios Pak Joko",
  },
  {
    id: 8,
    nama: "Risol Mayo",
    kategori: "camilan",
    harga: 5000,
    emoji: "🥟",
    deskripsi: "Risol isi sayur, telur, dan mayones. Digoreng saat dipesan.",
    kios: "Kios Geprek 88",
  },
];

export function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

export default daftarMenu;

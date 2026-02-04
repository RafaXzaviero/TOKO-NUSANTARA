# Toko Online Nusantara 🛒

Aplikasi e-commerce modern yang dibangun dengan React, Tailwind CSS, dan Vite. Platform belanja online yang menyediakan pengalaman berbelanja yang intuitif dan responsif untuk produk-produk lokal Indonesia.

## ✨ Fitur Utama

- **🏠 Halaman Utama**: Hero section dengan produk unggulan dan kategori
- **🛍️ Katalog Produk**: Grid produk dengan filter kategori dan pencarian
- **❤️ Wishlist**: Simpan produk favorit untuk dibeli nanti
- **🛒 Keranjang Belanja**: Tambah, kurangi, dan hapus item dengan mudah
- **💳 Checkout**: Proses pembayaran dengan promo code (DISKON50)
- **👤 Sistem Login**: Demo login sebagai Pembeli atau Admin
- **⚙️ Dashboard Admin**: Kelola produk (tambah, edit, hapus)
- **📱 Responsive Design**: Optimal di desktop, tablet, dan mobile
- **🎨 UI Modern**: Desain dengan Tailwind CSS dan animasi smooth

## 🚀 Teknologi yang Digunakan

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Build Tool**: Vite dengan Rolldown
- **Linting**: ESLint
- **Package Manager**: npm

## 📋 Prasyarat

- Node.js (versi 16 atau lebih baru)
- npm atau yarn

## 🛠️ Instalasi dan Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/RafaXzaviero/TOKO-NUSANTARA.git
cd toko-online
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah digunakan).

### 4. Build untuk Production (Opsional)

```bash
npm run build
npm run preview
```

## 🎯 Cara Menggunakan Aplikasi

### Sebagai Pembeli:
1. **Login**: Klik "Masuk Akun" dan pilih "Masuk sebagai Pembeli"
2. **Jelajahi Produk**: Scroll atau gunakan search bar untuk mencari produk
3. **Filter Kategori**: Klik kategori di bagian atas untuk filter produk
4. **Tambah ke Keranjang**: Klik ikon "+" pada produk
5. **Lihat Keranjang**: Klik ikon keranjang di navbar
6. **Checkout**: Masukkan detail pengiriman dan gunakan kode promo "DISKON50" untuk diskon 50%
7. **Pembayaran**: Pilih metode pembayaran (simulasi)

### Sebagai Admin:
1. **Login**: Klik "Masuk Akun" dan pilih "Masuk sebagai Admin Toko"
2. **Dashboard**: Akses menu Dashboard untuk melihat daftar produk
3. **Tambah Produk**: Klik "Tambah Produk" untuk menambah item baru
4. **Edit/Hapus Produk**: Gunakan ikon edit/hapus pada tabel produk

## 📱 Antarmuka Pengguna (UI)

### Halaman Utama
- Hero section dengan background gradient dan call-to-action
- Kategori produk dengan tab navigasi
- Grid produk dengan card yang menarik
- Search bar untuk pencarian cepat

### Halaman Keranjang
- List item dengan quantity controls
- Summary biaya dengan pajak dan diskon
- Tombol checkout yang prominent

### Halaman Checkout
- Form alamat pengiriman
- Pilihan metode pembayaran
- Input kode promo
- Rincian biaya final

### Dashboard Admin
- Tabel produk dengan aksi CRUD
- Form modal untuk tambah/edit produk
- Statistik produk aktif

## 🏗️ Struktur Proyek

```
toko-online/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Komponen utama aplikasi
│   ├── App.css          # Styling tambahan
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # Entry point React
├── index.html           # Template HTML
├── package.json         # Dependencies dan scripts
├── tailwind.config.js   # Konfigurasi Tailwind
├── postcss.config.js    # Konfigurasi PostCSS
├── vite.config.js       # Konfigurasi Vite
└── README.md            # Dokumentasi ini
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 📞 Kontak

- **Developer**: RafaXzaviero
- **GitHub**: [https://github.com/RafaXzaviero](https://github.com/RafaXzaviero)
- **Repository**: [https://github.com/RafaXzaviero/TOKO-NUSANTARA](https://github.com/RafaXzaviero/TOKO-NUSANTARA)

---

⭐ Jika Anda menyukai proyek ini, jangan lupa beri star di GitHub!

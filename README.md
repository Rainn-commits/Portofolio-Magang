# Rainn — Portfolio

Website portofolio pribadi Rainn, mahasiswa Informatika di UNIPMA (Universitas PGRI Madiun). Menampilkan profil, keahlian, dan project yang sudah dikerjakan.

Dibangun dari template [Stellar](https://html5up.net/stellar) (HTML5 UP) dengan tema custom bioluminescence — dimodifikasi warna, layout, dan interaksi (starfield/particle glow, scroll-reveal animation, animated stat counter).

## Halaman

- **Home** (`index.html`) — perkenalan singkat, ringkasan keahlian, statistik
- **About** (`about.html`) — bio, skill, timeline pendidikan & pengalaman, sertifikat
- **Project** (`project.html`) — showcase project dengan link ke source code
- **Contact** (`contact.html`) — form kontak dan info sosial media

## Project yang Ditampilkan

| Project | Deskripsi | Repo |
|---|---|---|
| Sistem Informasi Mahasiswa | Aplikasi CRUD data mahasiswa, PHP native + MySQL | [CRUD-Web](https://github.com/Rainn-commits/CRUD-Web) |
| Expert System — Deteksi Kesehatan | Sistem pakar Fuzzy Logic (Heart Rate & SpO₂), Laravel + Vue 3 | [Health-Detection-System](https://github.com/Rainn-commits/Health-Detection-System) |
| Sistem Pakar Prediksi Hasil Tanam | Fuzzy Logic prediksi hasil tanam dari data tanah & lingkungan, Java + JS | [Prediksi-Hasil-Tanam](https://github.com/Rainn-commits/Prediksi-Hasil-Tanam) |

## Struktur Folder

```
├── index.html          # Halaman Home
├── about.html           # Halaman About
├── project.html         # Halaman Project
├── contact.html         # Halaman Contact
├── assets/
│   ├── css/
│   │   ├── main.css      # CSS dasar dari template Stellar
│   │   └── galaxy.css    # Custom theme (bioluminescence, timeline, stats, dll)
│   ├── js/
│   │   ├── main.js       # JS bawaan template
│   │   └── galaxy.js     # Scroll-reveal & animated counter
│   └── cv/               # File CV (PDF)
└── images/
    └── certificates/      # Gambar sertifikat
```

## Menjalankan Secara Lokal

Cukup buka `index.html` langsung di browser, atau pakai Live Server (ekstensi VS Code) untuk auto-reload saat development.

## Deploy

Website ini di-hosting lewat **GitHub Pages**:

1. Settings → Pages
2. Source: branch `main`, folder `/ (root)`
3. Link aktif: `https://rainn-commits.github.io/NAMA_REPO/`

## Kredit

Template dasar: [Stellar by HTML5 UP](https://html5up.net/stellar), lisensi [CCA 3.0](https://html5up.net/license).

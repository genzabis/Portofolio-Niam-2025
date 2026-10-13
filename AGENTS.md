# UNIVERSAL PRODUCT DESIGN & FRONTEND QUALITY RULES
## Anti–AI-Slop Standard — untuk semua website dan aplikasi

> **Status:** Instruksi kerja permanen untuk AI coding/design agent.  
> **Cakupan:** Website, web app, mobile app, SaaS, dashboard, admin panel, e-commerce, portal, sistem internal, landing page, dan produk digital lainnya.  
> **Bukan:** Permintaan untuk memakai satu gaya visual yang sama di semua proyek.

---

## 0. Misi dan urutan prioritas

Bangun antarmuka yang **terasa dirancang dengan sengaja oleh desainer produk yang kompeten**, bukan hasil template AI generik. Utamakan **kejelasan, karakter, konsistensi, kegunaan, dan kualitas implementasi** ketimbang hiasan visual.

**Urutan prioritas saat aturan bertabrakan:**

1. Tujuan dan instruksi eksplisit pengguna untuk tugas saat ini.
2. Referensi desain, brand guidelines, design system, dan pola UI proyek yang sudah ada.
3. Aksesibilitas, kebenaran data, keamanan, dan fungsi produk.
4. Aturan kualitas dalam dokumen ini.
5. Preferensi estetika bawaan model/AI.

**Jangan mengganti identitas visual yang sudah ada hanya karena punya ide desain lain.** Jika proyek sudah memiliki desain yang solid, lanjutkan bahasa desain tersebut. Jika proyek baru belum punya arahan, pilih arah desain yang sesuai konteks—bukan gaya default yang dipakai untuk segala hal.

## 1. Pahami produk sebelum mendesain

Sebelum menulis UI, tentukan secara internal:

- **Produk:** Apa yang dibuat dan masalah nyata apa yang diselesaikan?
- **Pengguna utama:** Siapa yang memakai, dalam konteks apa, dan seberapa sering?
- **Tugas inti:** Apa 1–3 tindakan terpenting di layar ini?
- **Tipe pengalaman:** Marketing, transaksi, konten, produktivitas, analitik, administrasi, atau campuran?
- **Konteks perangkat:** Mobile-first, desktop-first, atau lintas-perangkat?
- **Aset & batasan:** Brand, komponen lama, data, logo, font berlisensi, platform, dan library yang sudah digunakan?

Jika informasi cukup, **ambil keputusan yang masuk akal dan kerjakan**. Jangan bertanya berulang untuk hal kecil. Tanyakan hanya keputusan yang benar-benar mengubah arah produk atau tidak aman untuk diasumsikan.

Tentukan **satu arah visual yang spesifik**, misalnya “editorial tenang dan terpercaya”, “enterprise efisien dan padat informasi”, atau “consumer-friendly yang ceria tetapi terkontrol”. Jangan menggabungkan semua tren desain sekaligus.

## 2. Prinsip utama: keputusan desain harus punya alasan

Setiap bagian UI harus punya fungsi: menjelaskan, memandu, membandingkan, memberi umpan balik, membangun kepercayaan, atau membantu pengguna bertindak.

- Bangun **hierarki visual yang jelas**: yang penting paling mudah terlihat, yang sekunder mendukung, yang jarang dipakai tidak mendominasi.
- Gunakan **whitespace secara sengaja** untuk membentuk kelompok dan ritme. Ruang kosong bukan pengganti struktur.
- Pilih **komposisi yang sesuai konten**, bukan otomatis membuat semua halaman simetris atau semuanya berbentuk kartu.
- Utamakan **keterbacaan, keterpindaian, dan alur kerja** daripada tampilan yang hanya cantik saat di-screenshot.
- Kurangi noise visual. Jika elemen dekoratif tidak mendukung tujuan atau identitas merek, hapus.
- Ciptakan karakter dari **tipografi, proporsi, komposisi, konten, dan detail**—bukan dari efek visual berlebihan.

**Prinsip penentu:** *Purposeful, not ornamental. Distinctive, not gimmicky. Usable, not just impressive.*

## 3. Aturan visual yang wajib dijaga

### 3.1 Layout dan spacing

- Gunakan grid, alignment, spacing scale, dan container yang konsisten; jangan mengandalkan nilai acak di setiap komponen.
- Tentukan lebar konten berdasarkan jenis layar. Form dan artikel membutuhkan lebar baca terbatas; tabel analitik mungkin memerlukan ruang lebih luas.
- Buat grouping dari jarak, alignment, dan tipografi. **Jangan menambahkan card/border hanya agar terlihat ada struktur.**
- Bedakan section secara halus ketika diperlukan. Jangan membuat setiap section berlatar warna berbeda tanpa alasan.
- Jaga densitas informasi sesuai konteks: dashboard kerja boleh padat tetapi teratur; landing page dapat lebih lapang; aplikasi mobile perlu prioritas tindakan yang tegas.
- Hindari header raksasa yang menghabiskan viewport ketika pengguna sebenarnya ingin langsung menyelesaikan tugas.

### 3.2 Tipografi

- Gunakan sistem tipografi yang jelas: display/heading, subheading, body, label, caption, serta angka/data bila relevan.
- Buat skala ukuran, weight, line-height, dan letter-spacing yang **konsisten dan proporsional**.
- Prioritaskan kualitas typography sebelum menambah gradien, shadow, atau animasi.
- Jangan memakai terlalu banyak keluarga font/weight; gunakan font yang tersedia dan legal digunakan.
- Hindari headline generik yang terlalu besar, terlalu bold, dan terpusat jika tidak sesuai dengan produk.
- Optimalkan angka, satuan, tanggal, persentase, dan kolom data agar mudah dipindai dan dibandingkan.

### 3.3 Warna

- Mulai dari palet netral yang matang, lalu tambahkan warna aksen **secara fungsional dan terarah**.
- Definisikan token warna berdasarkan peran: background, surface, text, muted, border, primary, accent, success, warning, danger, focus.
- Gunakan warna untuk membedakan prioritas, status, dan interaksi. Jangan menjadikan semua elemen sebagai fokus utama.
- Jangan otomatis memilih **ungu–biru neon, gradient mencolok, atau glowing effect** hanya karena “modern”.
- Pertahankan kontras yang layak; jangan mengorbankan keterbacaan demi kesan minimalis.
- Dark mode hanya jika diminta atau cocok untuk produk; jangan mengasumsikannya sebagai pilihan paling premium.

### 3.4 Komponen dan detail

- Gunakan radius, border, shadow, icon stroke, ukuran kontrol, dan gaya interaksi yang konsisten.
- Tombol primer harus benar-benar terasa primer; aksi sekunder dan destruktif punya penekanan yang sesuai.
- Jangan menumpuk outline + shadow + background tint + blur pada komponen tanpa alasan.
- Icon harus punya makna; hindari icon/emoji dekoratif di setiap judul atau kartu.
- Gunakan ilustrasi, foto, atau visual khusus **hanya jika membantu komunikasi dan sesuai identitas**. Jangan memasukkan stock photo sebagai pengisi ruang.
- Hindari card yang semuanya memiliki bentuk, ukuran, dan penempatan identik jika kontennya membutuhkan hierarki berbeda.

## 4. Pola “AI slop” yang harus dikenali dan dihindari

**Jangan menggunakan hal berikut sebagai default otomatis:**

1. Hero di tengah dengan headline klise, gradien ungu-biru, glow/orb besar, dan dua tombol CTA tanpa diferensiasi produk.
2. Semua konten dibuat menjadi deretan kartu bundar dengan shadow yang sama.
3. Setiap halaman memakai pola “judul → tiga feature cards → testimoni generik → CTA” tanpa alasan.
4. Glassmorphism, neon border, bento grid, blur, gradient mesh, dan animasi masuk yang tidak mendukung tugas.
5. Font sangat besar, whitespace berlebihan, dan informasi penting yang tersembunyi jauh di bawah fold.
6. Ikon yang tidak bermakna, dekorasi titik/grid random, ilustrasi abstrak generik, dan emoji berulang.
7. Copywriting kosong seperti “Revolutionize your workflow”, “Seamless experience”, atau kalimat bombastis tanpa manfaat nyata.
8. Grafik/dashboard berisi angka fiktif yang tampak seperti data asli; label yang tidak jelas; grafik tanpa satuan.
9. Semua elemen terlalu simetris, terlalu seragam, dan tidak memiliki titik fokus yang khas.
10. Interaksi palsu: tombol yang tidak melakukan apa pun, filter dekoratif, loading screen buatan, atau tautan placeholder yang disamarkan.

**Ini bukan larangan mutlak.** Gradien, kartu, bento, motion, atau glass effect bisa dipakai bila benar-benar mendukung brand, konten, atau interaksi. Yang dilarang adalah **pemakaian refleks tanpa justifikasi**.

## 5. Sesuaikan dengan jenis produk

| Jenis produk | Yang harus lebih diutamakan |
|---|---|
| Landing page / marketing | Narasi yang khas, manfaat konkret, visual relevan, CTA jelas, identitas brand |
| Dashboard / BI | Ketepatan data, hierarki metrik, label/satuan, keterbandingan, filter, densitas yang sehat |
| Admin panel / enterprise | Efisiensi tugas, tabel yang bagus, pencarian, filter, bulk action, status, auditability |
| E-commerce | Kualitas informasi produk, gambar, harga, opsi, kepercayaan, alur pembelian |
| Portal pendidikan / publik | Navigasi jelas, aksesibilitas, bahasa sederhana, kebutuhan pengguna beragam |
| Mobile app | Ergonomi jempol, navigasi ringkas, responsivitas, feedback, keadaan koneksi |
| Editor / productivity app | Fokus kerja, keyboard support, status penyimpanan, pengurangan gangguan |

**Jangan memaksakan estetika marketing ke dalam sistem administrasi, atau dashboard enterprise ke landing page brand.**

## 6. Konten dan UX adalah bagian dari desain

- Gunakan **microcopy yang spesifik, natural, ringkas, dan membantu**. Hindari jargon pemasaran bawaan AI.
- Label tombol harus menjelaskan aksi: “Simpan perubahan”, “Unduh laporan”, “Tambah peserta”—bukan selalu “Get Started”.
- Jika data contoh diperlukan, tandai jelas sebagai **data contoh/simulasi**. Jangan mengarang performa bisnis, testimoni, logo pelanggan, rating, atau statistik seolah nyata.
- Rancang keadaan **loading, empty, error, success, disabled**, validasi formulir, dan konfirmasi tindakan penting.
- Jangan hanya merancang happy path; pertimbangkan input panjang, nama panjang, data kosong, data banyak, kegagalan jaringan, dan kebutuhan pengguna baru.
- Hindari pola manipulatif/dark patterns. Kebenaran dan kejelasan lebih penting daripada conversion trick.

## 7. Responsiveness dan aksesibilitas adalah syarat selesai

- Desain harus bekerja di ukuran kecil, menengah, dan besar; jangan hanya cantik di layar desktop lebar.
- Uji paling tidak layout sekitar **360 px, 768 px, dan 1440 px** jika platform/alat memungkinkan; gunakan breakpoint sesuai konten, bukan angka dogmatis.
- Pastikan tidak ada horizontal overflow yang tidak disengaja, teks terpotong, tombol tertutup, atau tabel menjadi tidak dapat digunakan.
- Gunakan struktur semantik, label form, teks alternatif yang relevan, fokus keyboard terlihat, urutan tab logis, dan feedback yang dapat diakses.
- Targetkan **WCAG 2.2 AA**: kontras teks normal minimal 4.5:1, teks besar minimal 3:1, serta jangan menyampaikan informasi hanya lewat warna (dengan pengecualian WCAG yang berlaku).
- Area sentuh harus nyaman pada perangkat mobile; pertimbangkan minimal **44×44 CSS px** sebagai target ergonomi jika layak.
- Hormati `prefers-reduced-motion`, hindari animasi mengganggu, dan pertahankan performa yang responsif.
- Jangan menganggap “mobile responsive” cukup jika komponen hanya diperkecil tanpa memikirkan prioritas informasi.

## 8. Aturan implementasi untuk AI coding

- **Inspect before edit:** baca struktur proyek, komponen yang ada, styling, aset, dependensi, design tokens, dan konvensi kode sebelum mengubah UI.
- **Reuse before reinvent:** gunakan komponen dan token yang sudah ada; jangan membuat sistem visual paralel di dalam proyek yang sama.
- Jangan mengubah framework, library utama, atau arsitektur proyek hanya untuk mengejar tampilan kecuali ada alasan teknis yang jelas dan disetujui.
- Gunakan solusi yang sederhana, maintainable, responsif, dan mudah diteruskan pengembang lain.
- Bangun komponen reusable ketika ada pola nyata yang berulang; hindari abstraksi berlebihan untuk komponen sekali pakai.
- Pertahankan behavior yang telah bekerja. Perbaikan visual **tidak boleh merusak data, navigasi, form, aksesibilitas, atau business logic**.
- Jangan memasukkan dependensi besar hanya untuk satu efek kosmetik; jangan memakai animasi/transisi berat tanpa nilai UX.
- Jangan menciptakan tombol, data, fitur, atau integrasi yang tidak benar-benar ada lalu mengklaim semuanya berfungsi.
- Jika proyek menggunakan design tokens, ikuti tokens. Jika belum ada dan proyek cukup besar, bangun fondasi kecil yang konsisten; jangan overengineer.

## 9. Workflow wajib AI: pahami → arahkan → kerjakan → verifikasi

### Tahap A — Audit singkat

Sebelum mengimplementasikan desain, pahami konteks dan identifikasi:

- Apa tujuan layar?
- Apa prioritas utama pengguna?
- Apa yang sudah bagus dan perlu dipertahankan?
- Apa yang terlihat generik, membingungkan, tidak konsisten, atau kurang lengkap?

**Jangan menghabiskan waktu membuat esai audit jika pengguna sudah meminta langsung dikerjakan.** Cukup ringkas bila perlu, lalu lanjut ke kode.

### Tahap B — Tetapkan arah desain

Untuk **proyek baru**, tetapkan karakter visual dalam 2–4 kata dan keputusan yang mendukungnya: komposisi, tipografi, warna, densitas, dan pola interaksi.

Untuk **proyek dengan desain/reference**, jadikan referensi itu acuan. **Jangan redesain tanpa diminta.**

### Tahap C — Implementasi

- Kerjakan layar/komponen yang diminta hingga lengkap, bukan hanya hero atau bagian atas halaman.
- Jaga konsistensi spacing, typography, alignment, dan interaksi.
- Pastikan komponen penting memiliki state relevan.
- Jangan mengganti fungsi nyata dengan mock hanya untuk mengejar screenshot.

### Tahap D — Verifikasi visual dan fungsi

Jika lingkungan mendukung, jalankan aplikasi, ambil screenshot, dan bandingkan dengan target/reference di viewport yang sama. Periksa:

1. **Hierarchy:** fokus utama terlihat dalam 3 detik?
2. **Alignment:** tepi, grid, jarak, dan proporsi konsisten?
3. **Typography:** skala, weight, wrapping, dan line-height sesuai?
4. **Density:** terlalu banyak kartu, dekorasi, atau ruang kosong?
5. **Color:** aksen terarah, kontras layak, tidak monoton/berlebihan?
6. **Responsive:** berfungsi di mobile, tablet, desktop?
7. **Interaction:** semua kontrol yang terlihat bisa digunakan?
8. **States:** empty/loading/error/success ditangani?
9. **Accessibility:** keyboard, focus, label, semantic, motion?
10. **Integrity:** fitur, data, dan fungsi lama tetap berjalan?

Perbaiki berdasarkan **temuan nyata**, bukan dengan menambahkan dekorasi baru secara acak. Jika tidak punya akses untuk menjalankan atau melihat hasilnya, **katakan jujur bagian mana yang belum diverifikasi**.

## 10. Mode khusus: jika ada screenshot atau desain referensi

Aktifkan **reference-fidelity mode**:

- Referensi adalah sumber kebenaran untuk komposisi, urutan, ukuran relatif, spacing, radius, warna, tipografi, dan detail yang terlihat.
- Jangan menggantinya dengan desain “lebih modern” menurut selera AI.
- Bandingkan pada **viewport yang sama**. Gunakan screenshot diff/pengukuran jika alat tersedia.
- Utamakan akurasi layout dan typography sebelum micro-decoration.
- Pertahankan responsive behavior dan accessibility; jika harus berbeda demi perangkat kecil, lakukan adaptasi yang rasional.
- Jika aset/font asli tidak ada, jelaskan alternatif dan keterbatasannya, jangan diam-diam mengganti lalu menyebutnya 100% sama.
- **Jangan mengklaim pixel-perfect atau “95% akurat” tanpa pengujian aktual.**

## 11. Definition of Done — Quality Gate

Sebuah UI belum selesai sampai jawaban berikut masuk akal:

- [ ] Terasa spesifik untuk **produk dan penggunanya**, bukan template yang bisa ditempel ke semua industri.
- [ ] Tugas dan tindakan utama jelas dalam beberapa detik.
- [ ] Hierarki, komposisi, tipografi, dan densitas informasi terkontrol.
- [ ] Tidak ada gradien, glow, shadow, kartu, ikon, atau animasi yang sekadar mengisi ruang.
- [ ] Spacing, warna, radius, dan komponen konsisten dengan sistem desain proyek.
- [ ] Copywriting konkret; tidak ada jargon kosong, lorem ipsum, atau angka fiktif yang dipresentasikan sebagai fakta.
- [ ] Tampilan bekerja di layar kecil serta layar besar.
- [ ] Kontrol interaktif benar-benar berfungsi; state penting tersedia.
- [ ] Aksesibilitas dasar, keterbacaan, dan performa diperhatikan.
- [ ] Tidak ada regresi fungsi atau data yang sudah berjalan.
- [ ] Jika alat memungkinkan, hasil sudah dirender dan diperiksa—bukan hanya diasumsikan bagus dari kode.
- [ ] Klaim penyelesaian dan pengujian sesuai hal yang benar-benar telah dilakukan.

Jika satu poin gagal, lakukan perbaikan sebelum menyebut pekerjaan selesai, atau laporkan keterbatasannya secara eksplisit.

## 12. Format komunikasi AI saat mengerjakan tugas

**Sebelum mulai (singkat, jika tugas cukup kompleks):**

- Ringkasan tujuan pengguna.
- Arah desain dan apa yang akan dipertahankan.
- Fokus perubahan yang paling penting.

**Sesudah implementasi:**

- Apa yang diubah dan mengapa.
- Apa yang diverifikasi (build, test, screenshot, responsive, dsb.).
- Apa yang belum diverifikasi atau masih menjadi batasan.

Hindari narasi panjang dan janji yang tidak didukung hasil. **Tunjukkan kualitas melalui implementasi.**

---

## Instruksi penutup untuk agent

**Jangan menghasilkan “AI-looking UI” sebagai default.** Hasil harus terasa seperti produk sungguhan: punya tujuan, karakter yang tepat, detail matang, konten masuk akal, dan interaksi yang bisa dipakai. Tidak perlu ramai, futuristis, atau “wow” di setiap layar. Terkadang desain terbaik justru sederhana, tenang, dan sangat presisi.

**Saat ragu, pilih solusi yang lebih jelas, lebih jujur, lebih konsisten, dan lebih berguna daripada solusi yang lebih dekoratif.**

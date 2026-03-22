# 🧮 Catatan Belajar: Project Kalkulator

> Dokumen ini adalah panduan belajar untuk project kalkulator.
> Dibuat step-by-step supaya mudah dipahami dan bisa dibaca ulang kapan saja.

---

## 📁 Struktur File

```
Calculator/
├── index.html    → Struktur & konten halaman (kerangka)
├── style.css     → Tampilan visual (warna, layout, ukuran)
└── script.js     → Logika & interaksi (klik tombol, hitung)
```

**Analogi:** HTML = tulang, CSS = kulit & baju, JS = otak & otot

---

## 🎨 CSS yang Sudah Dipelajari

### 1. Struktur Dasar CSS

```css
selector {
    property: value;
}
```

| Istilah | Artinya | Contoh |
|---------|---------|--------|
| **Selector** | Elemen mana yang mau di-style | `body`, `.calculator`, `button` |
| **Property** | Apa yang mau diubah | `background-color`, `padding` |
| **Value** | Nilainya berapa/apa | `#313E17`, `12px`, `center` |

---

### 2. Jenis-Jenis Selector

```css
/* Element selector — targetin semua elemen <button> */
button { }

/* Class selector — targetin elemen dengan class tertentu */
.btn-number { }

/* Gabungan class — targetin beberapa class sekaligus */
.btn-clear,
.special,
.btn-result {
    grid-column: span 2;
}
```

> [!WARNING]
> **Penting:**
> - `.btn` → cari elemen dengan `class="btn"` (harus PERSIS)
> - `button` → cari SEMUA elemen `<button>` (pakai nama elemen)
> - `.btn` ≠ `.btn-number` (CSS tidak cocokkan sebagian nama!)

---

### 3. Multiple Class (Satu Elemen, Banyak Class)

```html
<!-- Elemen ini punya 2 class: "btn" dan "btn-number" -->
<button class="btn btn-number">7</button>

<!-- Elemen ini punya 3 class: "btn", "btn-number", dan "special" -->
<button class="btn btn-number special">0</button>
```

**Kenapa pakai multiple class?**
- `btn` → style dasar (bentuk, padding, font)
- `btn-number` → style khusus (warna angka)
- `special` → style tambahan (lebar 2 kolom)

> [!TIP]
> Ini lebih baik daripada menulis style yang sama berulang-ulang! (DRY = Don't Repeat Yourself)

---

### 4. Flexbox — Posisi di Tengah Layar

```css
body {
    display: flex;            /* Aktifkan flexbox */
    justify-content: center;  /* Horizontal → tengah */
    align-items: center;      /* Vertikal → tengah */
    min-height: 100vh;        /* Tinggi = selayar penuh */
}
```

**Kenapa butuh `min-height: 100vh`?**

`align-items: center` butuh tahu "tengah dari apa?".
Tanpa `min-height`, body tingginya cuma seisi konten — nggak ada ruang untuk ditengahkan.
`100vh` = 100% tinggi layar (viewport height).

```
┌──────────────────────────┐
│                          │
│                          │
│     ┌──────────────┐     │  ← align-items: center
│     │  KALKULATOR  │     │
│     └──────────────┘     │
│                          │  ← justify-content: center
│                          │
└──────────────────────────┘
         100vh
```

---

### 5. CSS Grid — Menyusun Tombol

```css
.buttonSection {
    display: grid;
    grid-template-columns: repeat(5, 1fr);  /* 5 kolom, sama lebar */
    gap: 8px;                                /* jarak antar tombol */
}
```

| Property | Artinya |
|----------|---------|
| `display: grid` | Aktifkan mode grid |
| `repeat(5, 1fr)` | Buat 5 kolom, masing-masing 1 bagian (fraction) |
| `gap: 8px` | Jarak antar sel grid = 8px |
| `grid-column: span 2` | Elemen ini memakan 2 kolom |

**Layout grid kalkulator:**

```
┌─────┬─────┬─────┬───────────┐
│  7  │  8  │  9  │    AC     │  ← AC span 2
├─────┼─────┼─────┼─────┬─────┤
│  4  │  5  │  6  │  +  │  -  │
├─────┼─────┼─────┼─────┼─────┤
│  1  │  2  │  3  │  *  │  /  │
├───────────┼─────┼───────────┤
│     0     │  .  │     =     │  ← 0 dan = span 2
└───────────┴─────┴───────────┘
```

---

### 6. CSS Specificity (Urutan Prioritas)

```css
/* ❌ SALAH — .btn di bawah menimpa semua warna! */
.btn-operator { background-color: #84b919; }
.btn-clear    { background-color: #d30e0e; }
.btn          { background-color: #313E17; }  /* ← Yang ini menang! */

/* ✅ BENAR — Tulis yang umum dulu, spesifik belakangan */
.btn          { background-color: #313E17; }  /* ← Dasar */
.btn-operator { background-color: #84b919; }  /* ← Override */
.btn-clear    { background-color: #d30e0e; }  /* ← Override */
```

> [!IMPORTANT]
> **Aturan:** Kalau 2 selector punya tingkat spesifisitas yang SAMA
> (misal: sama-sama 1 class), maka yang **terakhir ditulis = menang**.
>
> Analogi: Pakai kaos dulu (umum), baru pakai jaket di atasnya (spesifik).

---

### 7. Property CSS yang Sudah Dipakai

| Property | Fungsi | Contoh Value |
|----------|--------|-------------|
| `background-color` | Warna latar belakang | `#313E17`, `black` |
| `color` | Warna teks | `white`, `black` |
| `margin` | Jarak LUAR elemen | `0`, `12px` |
| `padding` | Jarak DALAM elemen | `12px`, `12px 16px` |
| `border-radius` | Sudut melengkung | `8px`, `12px` |
| `border` | Garis tepi | `none` |
| `width` | Lebar elemen | `400px` |
| `min-height` | Tinggi minimal | `100vh` |
| `font-size` | Ukuran teks | `medium`, `28px` |
| `text-align` | Rata teks | `right`, `center` |
| `cursor` | Bentuk kursor | `pointer` |
| `display` | Mode layout | `flex`, `grid` |

**Padding shorthand:**

```css
padding: 12px;          /* semua sisi 12px */
padding: 12px 16px;     /* atas-bawah 12px, kiri-kanan 16px */
padding: 8px 12px 16px; /* atas 8px, kiri-kanan 12px, bawah 16px */
```

---

## 🎨 Tema Warna Kalkulator

```
Body (background)  → #313E17 (hijau gelap)
Calculator (kotak) → #4C5C2D (hijau medium)
Display (layar)    → #FFDE42 (kuning cerah) + teks hitam
Tombol angka       → #313E17 (hijau gelap) + teks putih
Tombol operator    → #84b919 (hijau lime) + teks putih
Tombol AC          → #d30e0e (merah) + teks putih
```

---

## 📋 Checklist Progress

### ✅ Sudah Selesai
- [x] Background halaman gelap + centering (Flexbox)
- [x] Kotak kalkulator (width, background, border-radius, padding)
- [x] Layar display (warna, text-align right, padding, margin)
- [x] Grid layout untuk tombol (5 kolom)
- [x] Tombol span 2 kolom (AC, 0, =)
- [x] Warna berbeda per jenis tombol
- [x] Shared class `.btn` untuk style dasar

### 🔲 Belum Dikerjakan (Sesi Berikutnya)
- [ ] **Hover effect** — Tombol berubah warna saat mouse di atasnya
- [ ] **Transition** — Perubahan warna jadi smooth/halus
- [ ] **Active state** — Efek saat tombol ditekan
- [ ] **Box shadow** — Bayangan untuk kedalaman
- [ ] **Font yang lebih bagus** — Pakai Google Fonts
- [ ] **Responsive design** — Tampilan bagus di HP
- [ ] **Fix tombol "."** — Perlu update JavaScript untuk class `btn-decimal`
- [ ] **Hapus comment lama** — Bersihkan kode CSS (baris 48-58)

---

## 🔧 Bug yang Perlu Diperbaiki

### 1. Tombol "." (Decimal) — JavaScript belum handle

Tombol titik sekarang punya class `btn-decimal`, tapi JavaScript cuma handle:
- `.btn-number` → input angka
- `.btn-operator` → operator

**Solusi:** Tambah event listener untuk `.btn-decimal` di `script.js`

### 2. Comment lama di CSS

Ada comment block lama (baris 48-58) yang sudah tidak dipakai. Boleh dihapus biar rapi.

---

## 💡 Tips & Trik

### Cara Cepat Cek CSS di Browser
1. Buka kalkulator di browser
2. Klik kanan → **Inspect** (atau tekan `F12`)
3. Di panel Elements, klik elemen yang mau dicek
4. Di panel Styles (kanan), kamu bisa lihat CSS yang aktif
5. Kamu bisa **edit langsung di browser** untuk eksperimen!

### Warna Hex

```
#000000 = hitam penuh
#FFFFFF = putih penuh
#222    = abu-abu sangat gelap (shorthand dari #222222)
#333    = abu-abu gelap
#444    = abu-abu medium
```

Format: `#RRGGBB` (Red, Green, Blue), masing-masing 00-FF

---

## 📚 Referensi Belajar

- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) — Dasar CSS
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) — Panduan Grid lengkap
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — Panduan Flexbox lengkap
- [Color Picker](https://htmlcolorcodes.com/color-picker/) — Untuk pilih warna

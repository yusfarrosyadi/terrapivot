# 🌍 TerraPivot - GeoSpatial Tools (Frontend UI)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)

🌍 **Choose Language / Pilih Bahasa:**
[🇬🇧 English](#-english-version) | [🇮🇩 Bahasa Indonesia](#-versi-bahasa-indonesia)

---

## 🇬🇧 English Version

Welcome to the frontend repository of **TerraPivot**, a comprehensive web-based geospatial toolkit designed to simplify spatial data processing for GIS professionals and surveyors directly from the browser.

🚀 **[CLICK HERE TO TRY TERRAPIVOT LIVE!](https://yusfarrosyadi.github.io/terrapivot/)**

### ✨ Currently Available Features
**1. Format Conversion 🔄**
- **Vector Converter**: Convert between SHP, GeoJSON, KML, and Geopackage.
- **CSV to Spatial**: Convert spreadsheet coordinates (Decimal) to GIS-ready point data.
- **DMS to DD**: Batch convert Degrees-Minutes-Seconds (DMS) field measurements to Decimal Degrees.
- **Spatial to Table**: Extract attributes and coordinates from spatial files to Excel/CSV.

**2. Projection & Coordinates 📍**
- **Projection & Coordinates**: Transform coordinate systems (WGS84 ↔ UTM ↔ TM3) with auto-zone detection and batch processing support.

### 📦 Supported Formats
*   **Vector**: Shapefile (.zip), GeoJSON, KML, GeoPackage (.gpkg).
*   **Table**: CSV (comma/semicolon), Excel (.xlsx).
*   **Projection**: WGS84 (EPSG:4326), UTM (1-60 N/S), TM3 (Indonesian zones).

### 🚀 Coming Soon (Roadmap)
- [ ] **Coordinate Converter**: Instant manual coordinate conversion (DD, DMS, UTM, TM3).
- [ ] **Geometry Ops**: Fix, Simplify, Dissolve, Merge, Centroid Extractor.
- [ ] **Attribute Management**: Text Case Converter, Field Standardizer, Area/Length Calculator.
- [ ] **External Data Integration**: OSM Extractor, DEM Downloader, GEE Imagery Preview.

### ⚙️ Application Architecture
This repository contains the **Client-Side / Frontend** built with HTML5, CSS3, and Vanilla JavaScript without heavy frameworks for fast access. Spatial processing is handled by a separate Python **Backend API** (FastAPI & GeoPandas).
🔗 **API Engine URL:** `https://yusfar-terrapivot-api.hf.space`

### 👨‍💻 Author & Disclaimer
Developed by **[Yusfar Rosyadi](https://github.com/yusfarrosyadi)** — a Mapping Surveyor with a background in Cartography and Remote Sensing from Universitas Gadjah Mada (UGM), currently serving at the Geospatial Information Agency (BIG) of Indonesia.

*Disclaimer: TerraPivot is an independent, open-source personal project. It does not represent the official views, products, policies, or endorsements of the Geospatial Information Agency (BIG) or any affiliated institutions.*

---

## 🇮🇩 Versi Bahasa Indonesia

Selamat datang di repositori antarmuka (frontend) **TerraPivot**, *web-based geospatial toolkit* "sapu jagat" yang dirancang khusus untuk mempermudah pekerjaan para praktisi GIS dan surveyor pemetaan di lapangan langsung dari *browser*.

🚀 **[KLIK DI SINI UNTUK MENCOBA TERRAPIVOT SECARA LIVE!](https://yusfarrosyadi.github.io/terrapivot/)**

### ✨ Fitur yang Tersedia Saat Ini
**1. Format Conversion 🔄**
- **Vector Converter**: Konversi cepat antar format spasial (SHP, GeoJSON, KML, Geopackage).
- **CSV to Spatial**: Memetakan tabel koordinat desimal X/Y menjadi data spasial.
- **DMS to DD**: Konversi otomatis secara massal data pengukuran lapangan Derajat-Menit-Detik (DMS) ke Desimal.
- **Spatial to Table**: Mengekstrak atribut dan koordinat menjadi file tabel Excel/CSV murni.

**2. Projection & Coordinates 📍**
- **Proyeksi & Koordinat**: Panel transformasi sistem koordinat WGS 84 ↔ UTM ↔ TM3 (Single & Batch File) dengan fitur *auto-detect* CRS.

### 📦 Format yang Didukung
*   **Vektor**: Shapefile (.zip), GeoJSON, KML, GeoPackage (.gpkg).
*   **Tabel**: CSV (koma/titik koma), Excel (.xlsx).
*   **Proyeksi**: WGS84 (EPSG:4326), UTM (1-60 N/S), TM3 (Zona Indonesia).

### 🚀 Rencana Fitur Mendatang (Roadmap)
- [ ] **Konverter Koordinat**: Konversi manual instan (DD, DMS, UTM, TM3).
- [ ] **Geometry Ops**: Perbaikan geometri, penyederhanaan poligon, dissolve, dan centroid.
- [ ] **Manajemen Atribut**: Konversi *text case*, standarisasi kolom, kalkulator luas/panjang.
- [ ] **External Data Sourcing**: Ekstraksi OSM, unduh DEM SRTM, pratinjau citra GEE.

### ⚙️ Arsitektur Aplikasi
Repositori ini dikhususkan untuk sisi **Client-Side / Frontend** yang dibangun menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa framework tambahan agar ringan dan cepat diakses. Pemrosesan komputasi geospasial terhubung (*fetch*) langsung dengan **Backend API** berbasis Python (FastAPI & GeoPandas).
🔗 **URL Mesin API:** `https://yusfar-terrapivot-api.hf.space`

### 👨‍💻 Penulis & Penafian (Disclaimer)
Dikembangkan oleh **[Yusfar Rosyadi](https://github.com/yusfarrosyadi)** — seorang Surveyor Pemetaan dengan latar belakang Kartografi dan Penginderaan Jauh dari Universitas Gadjah Mada (UGM), yang saat ini bertugas di Badan Informasi Geospasial (BIG).

*Disclaimer: TerraPivot adalah proyek inisiatif pribadi yang bersifat sumber terbuka (open-source). Proyek ini murni merupakan dedikasi pengembang untuk komunitas GIS dan tidak mewakili pandangan, produk resmi, kebijakan, maupun dukungan dari Badan Informasi Geospasial (BIG) ataupun institusi terkait lainnya.*

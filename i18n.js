// ====================================================
// NAMA FILE: frontend/i18n.js
// FUNGSI   : Sistem penerjemah bilingual (ID & EN)
//            untuk TerraPivot.
// ====================================================

const translations = {
    // ==========================================
    // ID: BAHASA INDONESIA
    // ==========================================
    "id": {
        // -- Sidebar --
        "app_name": "TerraPivot",
        "dashboard": "🏠 Dashboard",
        "format_converter": "📁 Format Converter",
        "projection": "📍 Projection",
        "geometry_ops": "🔧 Geometry Ops (Segera)",
        "attribute": "📊 Atribut (Segera)",
        "external_data": "🌐 External Data (Segera)",

        // -- Dashboard --
        "dashboard_title": "TerraPivot",
        "dashboard_subtitle": "GeoSpatial Tools - Semua utilitas spasial yang lu butuhin, ada di sini.",
        "category_format": "1. Format Conversion",
        "vector_title": "Vector Converter",
        "vector_desc": "Konversi cepat antar format SHP, GeoJSON, KML, dan Geopackage.",
        "csv_title": "CSV to Spatial",
        "csv_desc": "Ubah tabel koordinat Excel/CSV jadi data spasial point.",
        "dms_title": "DMS to DD",
        "dms_desc": "Konversi derajat-menit-detik dari tabel lapangan ke Desimal (DD).",
        "s2t_title": "Spatial to Table",
        "s2t_desc": "Ekstrak atribut, koordinat (WGS84 & UTM) dari Spasial ke Excel murni.",
        "category_projection": "2. Projection & Coordinates",
        "projection_title": "Proyeksi & Koordinat",
        "projection_desc": "Transformasi WGS84, UTM, TM3, deteksi zona otomatis, dan pemrosesan batch.",
        "footer": "© 2026 TerraPivot. Dibuat dengan ❤️",

        // -- Format Converter: Tab Header --
        "tab_vector": "🔄 Vector Converter",
        "tab_csv": "📍 CSV to Spatial",
        "tab_dms": "📐 DMS to DD",
        "tab_s2t": "📄 Spatial to Table",

        // -- Format Converter: Vector Converter --
        "vec_desc": "Upload SHP (Zip), GeoJSON, KML, atau GPKG. Preview otomatis muncul.",
        "vec_opt_geojson": "Convert ke GeoJSON",
        "vec_opt_shp": "Convert ke SHP (Zip)",
        "vec_opt_kml": "Convert ke KML",
        "vec_opt_gpkg": "Convert ke Geopackage",
        "vec_download": "⬇️ Download",
        "vec_wait": "⚪ Menunggu file...",
        "vec_loading": "⏳ Membaca file dan memuat preview peta...",
        "vec_preview_ok": "✅ Preview siap! Silakan pilih format dan download.",
        "vec_error": "❌ Gagal menampilkan preview: ",
        "vec_convert_ok": "✅ Berhasil download file",

        // -- Format Converter: CSV to Spatial --
        "csv_desc": "Upload tabel koordinat (Desimal), pilih kolomnya, preview titik di peta, lalu download.",
        "csv_col_x": "Kolom X (Bujur/Lon):",
        "csv_col_y": "Kolom Y (Lintang/Lat):",
        "csv_col_z": "Kolom Z (Elevasi):",
        "csv_col_name": "Kolom Nama (Label KML):",
        "csv_col_none": "-- Tidak Ada (2D) --",
        "csv_name_none": "-- Default / Index --",
        "csv_format_out": "Format Output:",
        "csv_opt_shp": "SHP (Zip)",
        "csv_opt_geojson": "GeoJSON",
        "csv_opt_kml": "KML",
        "csv_opt_gpkg": "Geopackage",
        "csv_preview_btn": "👀 Preview Peta",
        "csv_download_btn": "⬇️ Download File",
        "csv_wait": "⚪ Menunggu file CSV/Excel...",
        "csv_loading": "⏳ Membaca isi tabel...",
        "csv_loaded": "✅ Tabel terbaca. Pilih parameter dan klik Preview atau Download.",
        "csv_error": "❌ Gagal baca tabel: ",
        "csv_proc_prev": "⏳ Sedang memuat preview...",
        "csv_proc_down": "⏳ Mengonversi ke",
        "csv_preview_ok": "✅ Preview berhasil! Coba klik titik di peta buat liat datanya.",
        "csv_download_ok": "✅ Berhasil download file",

        // -- Format Converter: DMS to DD --
        "dms_desc": "Konversi data pengukuran lapangan (Derajat-Menit-Detik) jadi Desimal secara massal.",
        "dms_col_x": "Kolom X (Bujur DMS):",
        "dms_col_y": "Kolom Y (Lintang DMS):",
        "dms_col_name": "Kolom Nama (Label KML):",
        "dms_name_none": "-- Default / Index --",
        "dms_format_out": "Format Output:",
        "dms_opt_shp": "SHP (Zip)",
        "dms_opt_geojson": "GeoJSON",
        "dms_opt_kml": "KML",
        "dms_opt_gpkg": "Geopackage",
        "dms_preview_btn": "👀 Preview Peta",
        "dms_download_btn": "⬇️ Convert & Download",
        "dms_wait": "⚪ Menunggu file data DMS...",
        "dms_loading": "⏳ Membaca isi tabel DMS...",
        "dms_loaded": "✅ Tabel DMS terbaca. Pilih parameter dan klik Convert.",
        "dms_error": "❌ Gagal baca tabel: ",
        "dms_proc_prev": "⏳ Konversi & memuat preview...",
        "dms_proc_down": "⏳ Mengonversi DMS ke",
        "dms_preview_ok": "✅ Konversi DMS berhasil! Cek titiknya di peta.",
        "dms_download_ok": "✅ Berhasil convert dan download file",

        // -- Format Converter: Spatial to Table --
        "s2t_desc": "Upload file Spasial (SHP, GeoJSON, dll), kita ekstrak Atribut dan Koordinatnya jadi Tabel Excel/CSV.",
        "s2t_opt_excel": "Tabel Excel (.xlsx) - PALING AMAN",
        "s2t_opt_csv_comma": "CSV - Koma (,)",
        "s2t_opt_csv_semi": "CSV - Titik Koma (;)",
        "s2t_preview_btn": "👁️ Preview Tabel",
        "s2t_download_btn": "⬇️ Download File",
        "s2t_wait": "⚪ Menunggu file spasial...",
        "s2t_loading": "⏳ Memproses...",
        "s2t_preview_ok": "✅ Preview tabel berhasil ditampilkan dengan koordinat UTM (Maksimal 100 baris).",
        "s2t_download_ok": "✅ Mantap! Berhasil ekstrak dan download tabel.",
        "s2t_error": "❌ Gagal ekstrak: ",

        // -- Projection: Umum --
        "proj_title": "🌐 Proyeksi & Koordinat",
        "proj_desc": "Transformasi WGS84, UTM, TM3, deteksi zona otomatis, dan pemrosesan batch.",
        "proj_src_crs": "Sumber CRS:",
        "proj_tgt_crs": "Target CRS:",
        "proj_preview_btn": "👀 Preview Peta",
        "proj_download_btn": "⬇️ Download Hasil",
        "proj_wait": "⚪ Menunggu file...",
        "proj_proc_prev": "Memproses preview...",
        "proj_proc_down": "Memproses konversi...",
        "proj_preview_ok": "✅ Preview berhasil!",
        "proj_download_ok": "✅ File hasil konversi berhasil diunduh.",
        "proj_detect": "⏳ Mendeteksi CRS file...",
        "proj_detect_ok": "✅ CRS terdeteksi: ",
        "proj_detect_manual": "⚠️ File tidak memiliki CRS. Silakan pilih sumber CRS secara manual.",
        "proj_detect_unknown": "⚠️ CRS terdeteksi: ",
        "proj_detect_failed": "❌ Gagal mendeteksi CRS: ",
        "proj_ready": "✅ File siap. Silakan pilih target CRS dan format output.",
        "proj_zone_label": "Zona:",
        "proj_output_format": "Format Output:",

        // -- Projection: Tab Single --
        "tab_single": "📄 File Tunggal",

        // -- Projection: Tab Batch --
        "tab_batch": "📦 Batch Reprojector",
        "batch_desc": "Upload file ZIP berisi banyak shapefile. Semua shapefile harus memiliki CRS yang valid. Hasilnya akan diunduh dalam satu ZIP.",
        "batch_process_btn": "⬇️ Proses & Download",
        "batch_detect": "⏳ Mendeteksi CRS batch...",
        "batch_ready": "✅ File batch siap.",
        "batch_no_crs": "⚠️ Tidak dapat mendeteksi CRS. Pastikan file memiliki proyeksi yang sama.",
        "batch_detect_failed": "❌ Gagal mendeteksi CRS batch: ",

                // -- Coordinate Converter (Coming Soon / Soon) --
        "coord_title": "Konverter Koordinat",
        "coord_desc": "Masukkan koordinat manual (DD, DMS, UTM, TM3) dan dapatkan semua format lainnya secara instan. (Segera)",
        
        // -- Kategori 3: Geometry Ops --
        "category_geometry": "3. Geometry Ops",
        "fix_simplify_title": "Fix & Simplify",
        "fix_simplify_desc": "Perbaikan geometri dan penyederhanaan poligon. (Segera)",
        "dissolve_merge_title": "Dissolve & Merge",
        "dissolve_merge_desc": "Gabung poligon berdasarkan atribut. (Segera)",
        "centroid_title": "Centroid Extractor",
        "centroid_desc": "Ambil titik tengah dari poligon. (Segera)",
        
        // -- Kategori 4: Atribut & Standarisasi --
        "category_attribute": "4. Atribut & Standarisasi",
        "text_case_title": "Text Case Converter",
        "text_case_desc": "Ubah teks atribut jadi UPPERCASE, lowercase, atau Title Case. (Segera)",
        "field_standard_title": "Field Standardizer",
        "field_standard_desc": "Rename, hapus, atau urutkan kolom atribut secara massal. (Segera)",
        "area_length_title": "Area & Length Calculator",
        "area_length_desc": "Hitung luas (Ha) atau panjang (km) otomatis. (Segera)",
        
        // -- Kategori 5: External Data Sourcing --
        "category_external": "5. External Data Sourcing",
        "osm_extract_title": "OSM Quick Extractor",
        "osm_extract_desc": "Tarik data OpenStreetMap sesuai area. (Segera)",
        "dem_download_title": "Elevation DEM Downloader",
        "dem_download_desc": "Download DEM (SRTM) berdasarkan poligon. (Segera)",
        "gee_preview_title": "GEE Imagery Preview",
        "gee_preview_desc": "Lihat citra satelit terbaru dari Google Earth Engine. (Segera)",
    },

    // ==========================================
    // EN: BAHASA INGGRIS
    // ==========================================
    "en": {
        // -- Sidebar --
        "app_name": "TerraPivot",
        "dashboard": "🏠 Dashboard",
        "format_converter": "📁 Format Converter",
        "projection": "📍 Projection",
        "geometry_ops": "🔧 Geometry Ops (Soon)",
        "attribute": "📊 Attribute (Soon)",
        "external_data": "🌐 External Data (Soon)",

        // -- Dashboard --
        "dashboard_title": "TerraPivot",
        "dashboard_subtitle": "GeoSpatial Tools - All the spatial utilities you need, right here.",
        "category_format": "1. Format Conversion",
        "vector_title": "Vector Converter",
        "vector_desc": "Quick conversion between SHP, GeoJSON, KML, and Geopackage formats.",
        "csv_title": "CSV to Spatial",
        "csv_desc": "Convert Excel/CSV coordinate tables into spatial point data.",
        "dms_title": "DMS to DD",
        "dms_desc": "Convert field measurement tables from DMS to Decimal Degrees.",
        "s2t_title": "Spatial to Table",
        "s2t_desc": "Extract attributes, coordinates (WGS84 & UTM) from spatial files to clean Excel.",
        "category_projection": "2. Projection & Coordinates",
        "projection_title": "Projection & Coordinates",
        "projection_desc": "Transform WGS84, UTM, TM3, auto-detect zone, and batch processing.",
        "footer": "© 2026 TerraPivot. Made with ❤️",

        // -- Format Converter: Tab Header --
        "tab_vector": "🔄 Vector Converter",
        "tab_csv": "📍 CSV to Spatial",
        "tab_dms": "📐 DMS to DD",
        "tab_s2t": "📄 Spatial to Table",

        // -- Format Converter: Vector Converter --
        "vec_desc": "Upload SHP (Zip), GeoJSON, KML, or GPKG. Auto preview on map.",
        "vec_opt_geojson": "Convert to GeoJSON",
        "vec_opt_shp": "Convert to SHP (Zip)",
        "vec_opt_kml": "Convert to KML",
        "vec_opt_gpkg": "Convert to Geopackage",
        "vec_download": "⬇️ Download",
        "vec_wait": "⚪ Waiting for file...",
        "vec_loading": "⏳ Reading file and loading map preview...",
        "vec_preview_ok": "✅ Preview ready! Choose output format and download.",
        "vec_error": "❌ Preview failed: ",
        "vec_convert_ok": "✅ File downloaded successfully",

        // -- Format Converter: CSV to Spatial --
        "csv_desc": "Upload a coordinate table (Decimal Degrees), select columns, preview points, then download.",
        "csv_col_x": "X Column (Longitude):",
        "csv_col_y": "Y Column (Latitude):",
        "csv_col_z": "Z Column (Elevation):",
        "csv_col_name": "Name Column (KML Label):",
        "csv_col_none": "-- None (2D) --",
        "csv_name_none": "-- Default / Index --",
        "csv_format_out": "Output Format:",
        "csv_opt_shp": "SHP (Zip)",
        "csv_opt_geojson": "GeoJSON",
        "csv_opt_kml": "KML",
        "csv_opt_gpkg": "Geopackage",
        "csv_preview_btn": "👀 Map Preview",
        "csv_download_btn": "⬇️ Download File",
        "csv_wait": "⚪ Waiting for CSV/Excel file...",
        "csv_loading": "⏳ Reading table...",
        "csv_loaded": "✅ Table read successfully. Choose parameters, then Preview or Download.",
        "csv_error": "❌ Failed to read table: ",
        "csv_proc_prev": "⏳ Loading preview...",
        "csv_proc_down": "⏳ Converting to",
        "csv_preview_ok": "✅ Preview ready! Click on points to see attribute data.",
        "csv_download_ok": "✅ File downloaded successfully",

        // -- Format Converter: DMS to DD --
        "dms_desc": "Batch convert field survey data (Degrees-Minutes-Seconds) to Decimal Degrees.",
        "dms_col_x": "X Column (Longitude DMS):",
        "dms_col_y": "Y Column (Latitude DMS):",
        "dms_col_name": "Name Column (KML Label):",
        "dms_name_none": "-- Default / Index --",
        "dms_format_out": "Output Format:",
        "dms_opt_shp": "SHP (Zip)",
        "dms_opt_geojson": "GeoJSON",
        "dms_opt_kml": "KML",
        "dms_opt_gpkg": "Geopackage",
        "dms_preview_btn": "👀 Map Preview",
        "dms_download_btn": "⬇️ Convert & Download",
        "dms_wait": "⚪ Waiting for DMS file...",
        "dms_loading": "⏳ Reading DMS table...",
        "dms_loaded": "✅ DMS table read. Choose parameters, then Convert.",
        "dms_error": "❌ Failed to read table: ",
        "dms_proc_prev": "⏳ Converting & loading preview...",
        "dms_proc_down": "⏳ Converting DMS to",
        "dms_preview_ok": "✅ DMS conversion successful! Check the points on map.",
        "dms_download_ok": "✅ Converted and downloaded successfully",

        // -- Format Converter: Spatial to Table --
        "s2t_desc": "Upload a spatial file (SHP, GeoJSON, etc.), extract attributes and coordinates to an Excel/CSV table.",
        "s2t_opt_excel": "Excel Table (.xlsx) - SAFEST",
        "s2t_opt_csv_comma": "CSV - Comma (,)",
        "s2t_opt_csv_semi": "CSV - Semicolon (;)",
        "s2t_preview_btn": "👁️ Preview Table",
        "s2t_download_btn": "⬇️ Download File",
        "s2t_wait": "⚪ Waiting for spatial file...",
        "s2t_loading": "⏳ Processing...",
        "s2t_preview_ok": "✅ Table preview loaded successfully with UTM coordinates (max 100 rows).",
        "s2t_download_ok": "✅ Great! Table extracted and downloaded.",
        "s2t_error": "❌ Extraction failed: ",

        // -- Projection: Umum --
        "proj_title": "🌐 Projection & Coordinates",
        "proj_desc": "Transform WGS84, UTM, TM3, auto-detect zone, and batch processing.",
        "proj_src_crs": "Source CRS:",
        "proj_tgt_crs": "Target CRS:",
        "proj_preview_btn": "👀 Map Preview",
        "proj_download_btn": "⬇️ Download Result",
        "proj_wait": "⚪ Waiting for file...",
        "proj_proc_prev": "Processing preview...",
        "proj_proc_down": "Processing conversion...",
        "proj_preview_ok": "✅ Preview successful!",
        "proj_download_ok": "✅ Result file downloaded.",
        "proj_detect": "⏳ Detecting file CRS...",
        "proj_detect_ok": "✅ CRS detected: ",
        "proj_detect_manual": "⚠️ File has no CRS. Please select source CRS manually.",
        "proj_detect_unknown": "⚠️ CRS detected: ",
        "proj_detect_failed": "❌ Failed to detect CRS: ",
        "proj_ready": "✅ File ready. Choose target CRS and output format.",
        "proj_zone_label": "Zone:",
        "proj_output_format": "Output Format:",

        // -- Projection: Tab Single --
        "tab_single": "📄 Single File",

        // -- Projection: Tab Batch --
        "tab_batch": "📦 Batch Reprojector",
        "batch_desc": "Upload a ZIP file containing multiple shapefiles. All shapefiles must have a valid CRS. The result will be downloaded as a single ZIP.",
        "batch_process_btn": "⬇️ Process & Download",
        "batch_detect": "⏳ Detecting batch CRS...",
        "batch_ready": "✅ Batch file ready.",
        "batch_no_crs": "⚠️ Could not detect CRS. Make sure all files have the same projection.",
        "batch_detect_failed": "❌ Batch CRS detection failed: ",

                // -- Coordinate Converter (Coming Soon / Soon) --
        "coord_title": "Coordinate Converter",
        "coord_desc": "Enter manual coordinates (DD, DMS, UTM, TM3) and get all other formats instantly. (Soon)",
        
        // -- Category 3: Geometry Ops --
        "category_geometry": "3. Geometry Ops",
        "fix_simplify_title": "Fix & Simplify",
        "fix_simplify_desc": "Repair geometry and simplify polygons. (Coming Soon)",
        "dissolve_merge_title": "Dissolve & Merge",
        "dissolve_merge_desc": "Merge polygons based on attributes. (Coming Soon)",
        "centroid_title": "Centroid Extractor",
        "centroid_desc": "Extract centroids from polygons. (Coming Soon)",
        
        // -- Category 4: Attribute & Standardization --
        "category_attribute": "4. Attribute & Standardization",
        "text_case_title": "Text Case Converter",
        "text_case_desc": "Convert attribute text to UPPERCASE, lowercase, or Title Case. (Coming Soon)",
        "field_standard_title": "Field Standardizer",
        "field_standard_desc": "Batch rename, delete, or reorder attribute columns. (Coming Soon)",
        "area_length_title": "Area & Length Calculator",
        "area_length_desc": "Calculate area (Ha) or length (km) automatically. (Coming Soon)",
        
        // -- Category 5: External Data Sourcing --
        "category_external": "5. External Data Sourcing",
        "osm_extract_title": "OSM Quick Extractor",
        "osm_extract_desc": "Fetch OpenStreetMap data by area. (Coming Soon)",
        "dem_download_title": "Elevation DEM Downloader",
        "dem_download_desc": "Download DEM (SRTM) based on polygon. (Coming Soon)",
        "gee_preview_title": "GEE Imagery Preview",
        "gee_preview_desc": "Preview latest satellite imagery from Google Earth Engine. (Coming Soon)",
    },
};

/**
 * Fungsi untuk menerapkan bahasa ke seluruh halaman.
 * Mencari semua elemen dengan atribut 'data-i18n' dan mengganti teksnya
 * sesuai dengan kamus bahasa yang dipilih.
 * @param {string} lang - Kode bahasa ('id' atau 'en')
 */
function applyLanguage(lang) {
    // Simpan preferensi bahasa ke localStorage biar ingat
    localStorage.setItem('terrapivot_lang', lang);

    // Ambil semua elemen yang punya atribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n'); // Ambil kunci terjemahan
        // Cek apakah ada terjemahan untuk kunci ini
        if (translations[lang] && translations[lang][key]) {
            // Khusus untuk input/textarea, gunakan placeholder. Selain itu innerText/HTML.
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update tombol switch bahasa (kedua tombol bendera)
    const btnId = document.getElementById('btn-lang-id');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnId && btnEn) {
        if (lang === 'id') {
            btnId.classList.add('lang-active');
            btnEn.classList.remove('lang-active');
        } else {
            btnEn.classList.add('lang-active');
            btnId.classList.remove('lang-active');
        }
    }

    // Panggil fungsi update tampilan CRS jika ada (khusus halaman proyeksi)
    if (typeof updateDetectedCrsDisplay === 'function') {
        updateDetectedCrsDisplay();
    }
}

/**
 * Fungsi untuk mengganti bahasa (dipanggil saat tombol diklik)
 * @param {string} lang - Kode bahasa yang akan diaktifkan
 */
function switchLanguage(lang) {
    applyLanguage(lang);
}

// ====================================================
// INISIALISASI: Jalankan saat halaman selesai dimuat
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Baca preferensi bahasa dari localStorage, atau default 'id'
    const savedLang = localStorage.getItem('terrapivot_lang') || 'id';
    applyLanguage(savedLang);
});
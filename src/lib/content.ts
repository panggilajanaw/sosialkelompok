export type Category = "Lingkungan" | "Ekonomi" | "Aksi Sosial";
export type SocialLink = { platform: "Instagram" | "TikTok" | "YouTube"; url: string; handle: string };
export type Creator = { slug: string; name: string; handle: string; bio: string; banner: string; initials: string; socials: SocialLink[] };
export type StorySection = { heading: string; body: string };
export type Story = { slug: string; title: string; summary: string; category: Category; creatorSlug: string; image: string; platform: "TikTok" | "YouTube"; sourceUrl: string; readTime: string; dateLabel: string; sections: StorySection[] };

export const creators: Creator[] = [
  {
    slug: "jerhemy-owen", name: "Jerhemy Owen", handle: "Kreator lingkungan", bio: "Kreator yang mengangkat isu lingkungan melalui aksi nyata, edukasi, dan eksperimen yang mudah diikuti. Kontennya mengajak penonton melihat bahwa persoalan lingkungan bukan cuma wacana besar, tetapi juga berkaitan dengan pilihan sehari-hari, pengelolaan sampah, dan cara kita merawat ruang hidup bersama.", banner: "/images/creators/jerhemy-owen/profilejeremy.jpg", initials: "JO",
    socials: [
      { platform: "TikTok", handle: "@jerhemynemoo", url: "https://www.tiktok.com/@jerhemynemoo" },
      { platform: "Instagram", handle: "@jerhemynemo", url: "https://www.instagram.com/jerhemynemo/?hl=id" },
      { platform: "YouTube", handle: "Jerhemy Owen", url: "https://www.youtube.com/channel/UC21pkf6L9UjBp8CIPDVzLUw/about?view_as=public" }
    ]
  },
  {
    slug: "ferry-irwandi", name: "Ferry Irwandi", handle: "Kreator dan komunikator publik", bio: "Kreator dan komunikator publik yang membahas isu sosial, ekonomi, dan peristiwa yang berdampak pada masyarakat. Kontennya menjadi pintu masuk untuk memahami konteks suatu isu, mengajukan pertanyaan kritis, serta membedakan informasi, opini, dan hal yang masih perlu diverifikasi.", banner: "/images/creators/ferry-irwandi/profileferry.jpg", initials: "FI",
    socials: [
      { platform: "TikTok", handle: "@irwandiferry", url: "https://www.tiktok.com/@irwandiferry" },
      { platform: "Instagram", handle: "@irwandiferry", url: "https://www.instagram.com/irwandiferry/" },
      { platform: "YouTube", handle: "@ferryirwandi", url: "https://www.youtube.com/@ferryirwandi" }
    ]
  }
];

export const stories: Story[] = [
  {
    slug: "hutan-palangkaraya-karhutla", title: "Hutan Palangkaraya yang Hangus Dilalap Karhutla",
    summary: "Kebakaran hutan dan lahan (karhutla) dapat mengubah kawasan yang sebelumnya hijau menjadi lahan terbuka, kering, dan rentan mengalami kerusakan lanjutan. Cerita ini menjadi pengantar untuk memahami bahwa dampak kebakaran tidak berhenti saat api padam: vegetasi perlu pulih, habitat satwa dapat terganggu, dan asap berpotensi memengaruhi kualitas udara serta aktivitas warga di sekitar lokasi.",
    category: "Lingkungan", creatorSlug: "jerhemy-owen", image: "/images/creators/jerhemy-owen/jeremy1.jpg", platform: "TikTok", sourceUrl: "https://vt.tiktok.com/ZSgShWNuM/", readTime: "4 menit", dateLabel: "26 September 2026",
    sections: [
      { heading: "Apa yang terlihat dari perubahan lahan?", body: "Lahan bekas kebakaran bisa terlihat gersang karena tumbuhan penutup tanah dan semak telah rusak. Pada kawasan tertentu, kebakaran juga dapat memengaruhi lapisan organik tanah dan memperlambat pemulihan ekosistem. Kondisi sebenarnya berbeda-beda menurut jenis lahan, intensitas api, cuaca, dan upaya pemulihan setelah kejadian." },
      { heading: "Dampaknya meluas ke manusia dan alam", body: "Asap dari kebakaran dapat mengurangi kenyamanan dan kualitas udara, sedangkan kerusakan vegetasi mengganggu tempat hidup satwa dan fungsi ekologis kawasan. Jika kebakaran terjadi berulang, pemulihan bisa semakin sulit. Karena itu, pencegahan, pemantauan titik api, dan penanganan yang aman lebih penting daripada hanya berfokus pada gambar kerusakan setelah kejadian." },
      { heading: "Apa yang bisa dipelajari?", body: "Saat melihat video tentang karhutla, periksa waktu dan lokasi kejadian, cari keterangan dari sumber resmi, dan jangan menyimpulkan penyebab kebakaran hanya dari satu cuplikan. Upaya pencegahan juga perlu menyesuaikan kondisi setempat, termasuk pengelolaan lahan dan perlindungan kawasan yang rawan terbakar." }
    ]
  },
  {
    slug: "pabrik-mini-daur-ulang-plastik", title: "Mengubah Sampah Plastik Menjadi Barang Bernilai",
    summary: "Eksperimen daur ulang plastik menunjukkan bagaimana botol atau tutup plastik tertentu dapat diproses menjadi bahan untuk produk baru, misalnya gantungan kunci. Proses seperti ini membantu memperlihatkan bahwa sebagian sampah masih memiliki nilai guna, tetapi pengolahannya membutuhkan pemilahan, kebersihan bahan, alat yang sesuai, dan perhatian serius pada keselamatan.",
    category: "Lingkungan", creatorSlug: "jerhemy-owen", image: "/images/creators/jerhemy-owen/jeremy2.jpg", platform: "YouTube", sourceUrl: "https://www.youtube.com/watch?v=cX3YhGYoHjM", readTime: "4 menit", dateLabel: "Eksperimen daur ulang",
    sections: [
      { heading: "Dari sampah menjadi bahan baru", body: "Dalam proses daur ulang mekanis, plastik biasanya dipilah berdasarkan jenisnya, dibersihkan, lalu dipotong atau dicacah sebelum diproses lebih lanjut. Hasil akhirnya bergantung pada jenis plastik, kondisi bahan, teknologi, dan standar keselamatan yang digunakan. Tidak semua plastik cocok diproses dengan cara yang sama." },
      { heading: "Daur ulang bukan satu-satunya jawaban", body: "Mengubah sampah menjadi barang baru dapat memperpanjang masa guna material, tetapi tidak menghilangkan seluruh dampak lingkungan. Proses pengolahan tetap membutuhkan energi dan dapat menghasilkan sisa bahan. Karena itu, mengurangi plastik sekali pakai dan menggunakan kembali barang yang masih layak tetap menjadi langkah penting." },
      { heading: "Ide sederhana untuk lingkungan sekolah", body: "Kelompok dapat memulai dari audit sampah: catat jenis plastik yang paling sering ditemukan, cari tahu apakah tersedia fasilitas pengumpulan yang menerima jenis tersebut, lalu buat sistem pemilahan yang jelas. Eksperimen dengan alat panas atau mesin sebaiknya hanya dilakukan oleh orang yang terlatih dengan perlindungan yang sesuai." }
    ]
  },
  {
    slug: "gerakan-tanam-10000-pohon", title: "Gerakan Tanam 10.000 Pohon untuk Memulihkan Lahan Kritis",
    summary: "Gerakan penanaman pohon di kawasan hulu Ciliwung menggambarkan upaya bersama untuk memperbaiki tutupan vegetasi dan meningkatkan kepedulian terhadap daerah aliran sungai. Angka bibit yang ditanam dapat menjadi penanda skala kegiatan, tetapi keberhasilan jangka panjang juga ditentukan oleh kecocokan jenis tanaman, kondisi tanah, perawatan, dan pemantauan setelah penanaman.",
    category: "Lingkungan", creatorSlug: "jerhemy-owen", image: "/images/creators/jerhemy-owen/jeremy3.jpg", platform: "YouTube", sourceUrl: "https://www.youtube.com/watch?v=dQ__BrVGrZI", readTime: "4 menit", dateLabel: "Aksi penghijauan",
    sections: [
      { heading: "Mengapa kawasan hulu perlu dijaga?", body: "Kawasan hulu merupakan bagian penting dari daerah aliran sungai. Tutupan vegetasi dan kondisi tanah dapat membantu mengatur peresapan air serta mengurangi erosi, walaupun hasilnya dipengaruhi banyak faktor, seperti kemiringan lahan, jenis tanah, dan pola hujan. Kerusakan lahan perlu ditangani dengan pendekatan yang sesuai dengan kondisi lokal." },
      { heading: "Menanam saja belum cukup", body: "Bibit yang baru ditanam masih rentan terhadap kekeringan, gangguan, dan kondisi tanah yang tidak cocok. Pemilihan spesies lokal, jarak tanam, perawatan, dan keterlibatan warga sekitar menjadi bagian penting dari pemulihan. Keanekaragaman tanaman juga perlu dipertimbangkan agar kegiatan tidak sekadar mengejar satu angka." },
      { heading: "Bagaimana mengukur hasilnya?", body: "Program penghijauan dapat dievaluasi dengan mencatat jumlah bibit yang bertahan hidup, pertumbuhannya dari waktu ke waktu, dan perubahan kondisi lokasi. Bagi pelajar, prinsip ini bisa diterapkan pada kegiatan kecil: dokumentasikan lokasi, jadwalkan perawatan, dan bandingkan perkembangan tanaman secara berkala." }
    ]
  },
  {
    slug: "status-pasar-modal-indonesia", title: "Ancaman Penurunan Status Pasar Modal Indonesia",
    summary: "Pembahasan tentang status pasar modal berkaitan dengan kepercayaan investor, keterbukaan informasi, struktur kepemilikan saham, pengawasan, dan integritas perdagangan. Isu ini penting karena pasar modal menjadi salah satu tempat perusahaan memperoleh pendanaan dan masyarakat berinvestasi, sehingga informasi yang transparan dan aturan yang ditegakkan secara konsisten sangat dibutuhkan.",
    category: "Ekonomi", creatorSlug: "ferry-irwandi", image: "/images/creators/ferry-irwandi/ferry1.jpg", platform: "YouTube", sourceUrl: "https://www.youtube.com/watch?v=hsZzNqL2yVA", readTime: "5 menit", dateLabel: "Analisis ekonomi",
    sections: [
      { heading: "Mengapa transparansi penting?", body: "Investor membutuhkan informasi yang memadai agar dapat menilai risiko dan mengambil keputusan secara sadar. Informasi mengenai kepemilikan, transaksi, dan kinerja perusahaan membantu pasar bekerja lebih terbuka. Ketika informasi sulit diverifikasi atau tidak disampaikan secara setara, kepercayaan terhadap mekanisme pasar dapat menurun." },
      { heading: "Pengawasan dan integritas pasar", body: "Pengawasan bertujuan menjaga perdagangan berjalan sesuai aturan dan menindak pelanggaran. Pembicaraan tentang manipulasi pasar, kepemilikan saham, atau perubahan klasifikasi perlu merujuk pada pengumuman resmi, metodologi lembaga terkait, dan tanggal informasi diterbitkan. Istilah yang terdengar serupa bisa memiliki definisi dan konsekuensi berbeda." },
      { heading: "Cara membaca isu ekonomi secara kritis", body: "Pisahkan fakta yang dapat diperiksa dari interpretasi dan prediksi. Bandingkan beberapa sumber tepercaya, cek konteks angka, dan perhatikan apakah sebuah klaim sudah dikonfirmasi oleh lembaga berwenang. Ringkasan ini bersifat edukatif, bukan saran investasi atau ajakan untuk membeli maupun menjual instrumen keuangan." }
    ]
  },
  {
    slug: "misi-bantuan-karhutla-kalimantan", title: "Misi Bantuan Karhutla Kalimantan",
    summary: "Respons terhadap karhutla tidak hanya berkaitan dengan pemadaman api, tetapi juga koordinasi, kebutuhan logistik, perlindungan warga, dan dukungan bagi tim yang bekerja di lapangan. Dokumentasi bantuan dapat memperlihatkan bagaimana obat-obatan, perlengkapan, dan kebutuhan dasar disalurkan, sekaligus mengingatkan bahwa bantuan perlu disesuaikan dengan kondisi serta kebutuhan yang benar-benar ada.",
    category: "Aksi Sosial", creatorSlug: "ferry-irwandi", image: "/images/creators/ferry-irwandi/ferry2.jpg", platform: "YouTube", sourceUrl: "https://www.youtube.com/watch?v=-W8l4tLeLwY", readTime: "5 menit", dateLabel: "Respons lapangan",
    sections: [
      { heading: "Bantuan perlu menjawab kebutuhan nyata", body: "Kebutuhan di lapangan dapat berbeda antara satu lokasi dan lokasi lain. Dukungan bisa berupa perlengkapan keselamatan, kebutuhan dasar, layanan kesehatan, atau logistik bagi petugas dan warga terdampak. Koordinasi dengan pihak yang memahami situasi setempat membantu mengurangi risiko bantuan tidak sesuai kebutuhan." },
      { heading: "Keselamatan dan koordinasi adalah kunci", body: "Karhutla dapat menimbulkan kondisi berbahaya, terutama saat asap pekat dan api sulit diprediksi. Penanganan langsung harus dilakukan oleh petugas terlatih dengan peralatan yang sesuai. Masyarakat dapat membantu melalui jalur yang terkoordinasi, menyebarkan informasi yang telah diverifikasi, dan mengikuti arahan otoritas setempat." },
      { heading: "Menilai gerakan kemanusiaan dengan bijak", body: "Sebelum berdonasi atau menyebarkan ajakan bantuan, periksa identitas penyelenggara, rincian kebutuhan, cara penyaluran, dan laporan penggunaan dana bila tersedia. Dokumentasi merupakan cara untuk memahami sebuah kegiatan, tetapi informasi tentang skala dampak dan hasil bantuan tetap perlu didukung keterangan yang jelas." }
    ]
  }
];

export const getCreator = (slug: string) => creators.find((creator) => creator.slug === slug);
export const getStory = (slug: string) => stories.find((story) => story.slug === slug);
export const getCreatorStories = (slug: string) => stories.filter((story) => story.creatorSlug === slug);

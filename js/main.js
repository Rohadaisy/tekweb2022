const api = "https://myapi.rohadaisy.my.id/index.php/"
Vue.createApp({
    data() {
      return {
        navbar: {
          title: "Hello World!!",
          description: "This is my first portofolio website. Let's get to know who I am",
          menu: {
            home: {
              url: "/Syalala/index.html",
              title: "Home",
            },
            about: {
              url: "/Syalala/menu/about.html",
              title: "About",
            },
            projects: {
              url: "/Syalala/menu/projects.html",
              title: "Projects",
            },
            contact: {
              url: "/Syalala/menu/contact.html",
              title: "Contact",
            },
            artikel: {
              url: "/Syalala/menu/artikel.html",
              title: "Articles",
            },
          },
        },
        jumbotron: {
          imageProfile: "./bahan/aisy.jpg",
          nama: "Rohadatul Aisy",
          role: "a Student at Ahmad Dahlan University | Majoring in Information System",
        },
        about: {
          judul:"About",
          hero: "./bahan/aisy.jpg",
          tentang: "Rohadatul Aisy",
          penulis: "Oleh",
          a: {
            url: "https://instagram.com/rohadaisy/",
            nama: " Rohadatul Aisy ",
          },
          deskripsi:
            "Lebih dalam mengenal tentang diriku. Nama saya Rohadatul Aisy biasa dipanggil Aisy. Saya berasal dari sebuah desa di Kabupaten Jember, Jawa Timur. Merantau untuk bersekolah ke Yogyakarta hanya karena menantang diri untuk keluar dari zona nyaman, walaupun sebenarnya juga karena dipaksakan keadaan. Tapi sekarang saya bersyukur telah membuat keputusan tersebut, dan saya sangat berterima kasih kepada keadaan karena telah membentuk diri saya yang sekarang. Everything that happens is not in vain, but because there is a reason and a lesson",
          deskripsi2:
            "Saya sebagai salah satu mahasiswa di jurusan Sistem Informasi Fakultas Sains dan Teknologi Terapan adalah sebuah hal yang tidak terencana. Niat awal memilih jurusan ini adalah agar terhindar dari hal-hal yang berhubungan dengan Fisika, tapi malah dipertemukan dengan mata kuliah fisika di semester satu. Berhubungan dengan bahasa pemrograman menjadi hal baru untuk saya, walaupun tidak jarang sering mengeluh tetapi ini menjadi tantangan tersendiri untuk saya. Don't regret the decisions you have made. Do it, make it a lesson in your life",
  
          hardskill: "Hard Skill",
        },
        projek: {
          nama: "My Project",
          projek1: {
            url: "./bahan/projek1.png",
            desk1: "Ini projek pertama saya, yaitu prototype aplikasi perjalanan. Projek ini dibuat untuk memenuhi tugas akhir mata kuliah IMK.",
          },
          projek2: {
            url: "./bahan/projek2.png",
            desk2: "Berikut adalah projek kedua saya yaitu membuat sebuah website untuk memenuhimtugas akhir mata kuliah teknologi web.",
          },
        },
        contact: {
          judul: "Contact Me",
          nama: {
            judul: "Nama Lengkap",
          },
          email: {
            judul: "Email",
          },
          pesan: {
            judul: "Pesan",
          },
          kirim: {
            judul: "Kirim",
          },
        },
        footer: {
          url: "https://www.instagram.com/rohadaisy/",
          nama: "Rohadatul Aisy",
        },
      };
    },
    methods: {
        getUser() {
          axios
            .get(
              api+"users"
              )
            .then((res) => {
              console.log(res.data); //melihat respon data pada console browser
              this.user = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
              console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        },
        getAbout() {
          axios
            .get(
              api+"portofolio"
              )
            .then((res) => {
              console.log(res.data); //melihat respon data pada console browser
              this.aboutss = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
              console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        },
        getArtikel() {
          axios
            .get(
              api+"artikel"
              )
            .then((res) => {
              console.log(res.data); //melihat respon data pada console browser
              this.artikelnya = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
              console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        },
    },
    beforeMount() {
        this.getUser(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
        this.getAbout(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
        this.getArtikel(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
        this.ambiljudul();
      },
  }).mount("#app");

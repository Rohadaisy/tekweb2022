
<!--  Tabel Users -->

GET: /users

data: [
    {
        "id": "1",
        "nama": "Rohadatul Aisy",
        "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
        "deskripsi": "a Student at Ahmad Dahlan University | Majoring in Information System"
        },
        {
        "id": "2",
        "nama": "Kim Daisy",
        "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
        "deskripsi": "a Student at Seoul National University | Majoring in Information System"
    }
]


GET: /users/[1]

data:{
    "id": "1",
    "nama": "Rohadatul Aisy",
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "a Student at Ahmad Dahlan University | Majoring in Information System"
}

POST: /users

data:{
    "nama": "Daisy",
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "a Student at Seoul National University | Majoring in Information System"
    }


PUT: /users[2]

data:{
    "id": "2",
    "nama": "Kim Daisy",
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "a Student at Seoul National University | Majoring in Information System"
    }



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
    {
        "id": "1",
        "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
        "deskripsi": "Ini projek pertama saya, yaitu prototype aplikasi perjalanan. Projek ini dibuat untuk memenuhi tugas akhir mata kuliah IMK."
        },
        {
        "id": "2",
        "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
        "deskripsi": "yaitu membuat sebuah website untuk memenuhimtugas akhir mata kuliah teknologi web."
        }
]

GET: /portofolio/[1]

data:{
    "id": "1",
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "Ini projek pertama saya, yaitu prototype aplikasi perjalanan. Projek ini dibuat untuk memenuhi tugas akhir mata kuliah IMK."
    }


POST: /portofolio

data:{
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "Berikut adalah projek kedua saya yaitu membuat sebuah website untuk memenuhimtugas akhir mata kuliah teknologi web."
    }

PUT: /portofolio/[2]

data:{
    "id": "2",
    "gambar": "https://rohadaisy.my.id/bahan/aisy.jpg",
    "deskripsi": "yaitu membuat sebuah website untuk memenuhimtugas akhir mata kuliah teknologi web."
    }


<!--  Tabel Artikel -->

GET: /artikel

data:[
    {
        "id": "1",
        "title": "Skin Care",
        "gambar": "https://rohadaisy.my.id/bahan/skin.jpg",
        "sub_title": "Sepenting apa sih skincare itu?",
        "desk": "Penggunaan skincare secara rutin akan memberikan banyak manfaat untuk kulit wajahmu. Karena jika kamu tidak menggunakan skincare, kulit wajahmu akan nampak seperti tidak terawat."
        },
        {
        "id": "2",
        "title": "Miaww",
        "gambar": "https://rohadaisy.my.id/bahan/kucing.jpg",
        "sub_title": "Kucing sebagai hewan yang istimewa",
        "desk": "Keistimewaan kucing dalam Islam dapat dilihat dari hadis Nabi dan peninggalan-peninggalan Islam. Dalam tradisi Islam, kucing dikagumi karena kebersihannya."
        },
        {
        "id": "3",
        "title": "Web Developer",
        "gambar": "https://rohadaisy.my.id/bahan/web.jpg",
        "sub_title": "Apasih Web Developer itu?",
        "desk": "avaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome."
        }
]


GET: /artikel/[2]

data:{
    "id": "2",
    "title": "Miaww",
    "gambar": "https://rohadaisy.my.id/bahan/kucing.jpg",
    "sub_title": "Kucing sebagai hewan yang istimewa",
    "desk": "Keistimewaan kucing dalam Islam dapat dilihat dari hadis Nabi dan peninggalan-peninggalan Islam. Dalam tradisi Islam, kucing dikagumi karena kebersihannya."
    }


POST: /artikel

data:{
    "title": "Web Developer",
    "gambar": "https://rohadaisy.my.id/bahan/web.jpg",
    "sub_title": "Apasih Web Developer itu?",
    "desk": "avaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome."
    }


PUT: /artikel/[2]

data:{
    "id": "2",
    "title": "Miaww",
    "gambar": "https://rohadaisy.my.id/bahan/kucing.jpg",
    "sub_title": "Kucing sebagai hewan yang istimewa",
    "desk": "Keistimewaan kucing dalam Islam dapat dilihat dari hadis Nabi dan peninggalan-peninggalan Islam. Dalam tradisi Islam, kucing dikagumi karena kebersihannya."
    }

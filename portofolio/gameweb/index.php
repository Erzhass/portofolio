<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Permainan</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
    body {
        padding-top: 56px;
    }

    .jumbotron {
        background-color: #f8f9fa;
        padding: 2rem 1rem;
        margin-bottom: 2rem;
    }
    </style>
</head>

<body>
    <!-- Navigasi -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Belial</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="showSection('home')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" onclick="showSection('about')">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#conta" onclick="showSection('contact')">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.php" onclick="showLogin()">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-4">

        <div class="jumbotron text-center">
            <h1 class="display-4">Selamat Datang </h1>
            <p class="lead">Kami menyediakan sedikit permainan untuk anda</p>
            <p class="lead">Pilih permainan favorit Anda dan mulai bermain!</p>

        </div>

        <div id="menu" class="text-center mb-4">
            <button class="btn btn-primary m-2" onclick="loadGame('tebakAngka')">Tebak Angka</button>
            <button class="btn btn-success m-2" onclick="loadGame('klikCepat')">Game Klik Cepat</button>
            <button class="btn btn-info m-2" onclick="loadGame('tangkapKotak')">Tangkap Kotak</button>
            <button class="btn btn-primary m-2" onclick="loadGame('memoryCard')">Memory Card</button>
            <button class="btn btn-warning m-2" onclick="loadGame('whackAMole')">Whack-a-Mole</button>
            <button class="btn btn-danger m-2" onclick="loadGame('bubblePop')">Bubble Pop</button>
            <button class="btn btn-success m-2" onclick="loadGame('snake')">Snake Game</button>
            <button class="btn btn-success m-2" onclick="loadGame('puzzleSlide');">puzzle slide</button>
        </div>

        <div id="game-container" class="mb-4">
            <!-- Permainan akan ditampilkan di sini -->
        </div>

        <div id="about">
            <div class="container my-5">
                <div class="row about-section">
                    <div class="col-md-8 about-text">
                        <h1 class="mb-4">Tentang Saya</h1>
                        <p class="lead">
                            Selamat datang di halaman tentang saya! Saya adalah seorang pengembang web yang bersemangat
                            dan kreatif dengan keahlian dalam HTML, CSS, dan JavaScript. Saya selalu bersemangat untuk
                            belajar teknologi baru dan menerapkannya dalam proyek-proyek inovatif.
                        </p>
                        <p>
                            Dengan pengalaman dalam pengembangan aplikasi web responsif dan user-friendly, saya selalu
                            berusaha untuk menciptakan solusi yang efisien dan elegan. Saya percaya bahwa kode yang
                            bersih dan terstruktur adalah kunci untuk membuat aplikasi yang mudah dipelihara dan
                            dikembangkan.
                        </p>
                        <p>
                            Di luar dunia coding, saya juga menikmati [hobi atau minat Anda]. Saya percaya bahwa
                            keseimbangan antara pekerjaan dan kehidupan pribadi sangat penting untuk kreativitas
                            dan produktivitas.
                        </p>
                        <button class="btn btn-custom mt-3">Hubungi Saya</button>
                    </div>
                    <div class="col-md-4 about-image d-flex align-items-center justify-content-center">
                        <img src="gam.jpg" alt="Foto Saya" class="img-fluid rounded-circle" style="max-width: 250px;">
                    </div>
                </div>
            </div>
        </div>

        <div id="conta">
            <div id="contact" class="mb-4">
                <h2>Contact Us</h2>
                <p>Jika ada pertanyaan, hubungi kami melalui email di info@gamecenter.com</p>
            </div>
        </div>

        <div class="container">
            <div class="contact-container">
                <div class="contact-header">
                    <h1>Hubungi Saya</h1>
                    <p class="lead">Silakan hubungi saya melalui salah satu kontak di bawah ini</p>
                </div>

                <div class="contact-info">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-item">
                                <i class="fab fa-whatsapp contact-icon whatsapp-icon"></i>
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/6289603309335" class="contact-link">+62 896-0330-9335</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-item">
                                <i class="fas fa-phone-alt contact-icon phone-icon"></i>
                                <h4>Telepon</h4>
                                <a href="tel:6289603309335" class="contact-link">+62 896-0330-9335</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-item">
                                <i class="fas fa-envelope contact-icon email-icon"></i>
                                <h4>Email</h4>
                                <a href="mailto:falzagaming12@gmail.com"
                                    class="contact-link">falzagaming12@gmail.com</a>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt contact-icon location-icon"></i>
                                <h4>Lokasi</h4>
                                <p class="mb-0">Jl. Barito III Perumahan Alam Barito Asri No.1 Nganjuk</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="social-media">
                    <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap Bundle with Popper -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>
</body>

</html>
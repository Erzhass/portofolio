<?php
$host = 'localhost'; // Host database
$user = 'root'; // Username default XAMPP
$password = ''; // Password default XAMPP (kosong)
$dbname = 'my_database'; // Nama database yang dibuat

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
<?php
// Koneksi ke database
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'my_database';

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$message = ""; // Variabel untuk pesan

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password

    // Cek apakah username sudah ada
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $message = "Username sudah digunakan.";
    } else {
        // Insert pengguna baru
        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
        if ($conn->query($sql) === TRUE) {
            $message = "Pendaftaran berhasil! Silakan login.";
        } else {
            $message = "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }

    .container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 30px;
        width: 350px;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #555;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }

    input[type="submit"] {
        background-color: #007bff;
        /* Biru */
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
        background-color: #0062cc;
        /* Biru lebih gelap */
    }

    p {
        text-align: center;
        margin-top: 20px;
        color: #555;
    }

    a {
        color: #007bff;
        /* Biru */
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }


    .message {
        text-align: center;
        margin-top: 20px;
        color: #d9534f;
        /* Warna merah untuk pesan error */
        font-size: 16px;
    }
    </style>
</head>

<body>

    <body>
        <form method="POST" action="">
            <h2>Form Signup</h2><br>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" required><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Signup">
            <p>Sudah punya akun? <a href="login.php">Login di sini</a>.</p>
        </form>
        <div class="message">
            <?php echo $message; ?>
        </div>
    </body>


</body>

</html>
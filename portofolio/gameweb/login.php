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

session_start(); // Mulai session
$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Ambil data pengguna dari database
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // Verifikasi password
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username; // Simpan username ke session
            header("Location: index.php"); // Redirect ke index
            exit(); // Keluar setelah redirect
        } else {
            $message = "Password salah.";
        }
    } else {
        $message = "Username tidak ditemukan.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
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
    }

    p {
        text-align: center;
        margin-top: 20px;
        color: #555;
    }

    a {
        color: #007bff;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }




    div.message {
        color: red;
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
    }
    </style>
</head>

<body>

    <form method="POST" action="">
        <h2>Form Login</h2> <br>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
        <div style="margin-top: 10px; color: red; text-align: center;">
            <?php if (!empty($message)) echo $message; ?>
        </div>
        <p>Belum punya akun? <a href="signup.php">Daftar di sini</a>.</p><br>
    </form>

    <div class="message">
        <?php if (!empty($message)) echo $message; ?>
    </div>


</body>

</html>
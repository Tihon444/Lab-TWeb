<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mercedes_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Eroare conexiune DB: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    if (empty($email) || empty($password)) {
        echo "Toate câmpurile sunt obligatorii!";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email invalid!";
        exit;
    }

    $stmt = $conn->prepare("SELECT id, fullname, password_hash FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $fullname, $password_hash_db);
        $stmt->fetch();

        if (password_verify($password, $password_hash_db)) {
            $_SESSION["user_id"] = $id;
            $_SESSION["fullname"] = $fullname;
            $_SESSION["email"] = $email;

            echo "success";
            exit;
        } else {
            echo "Parola incorectă!";
            exit;
        }
    } else {
        echo "Emailul nu există!";
        exit;
    }

    $stmt->close();
}

$conn->close();
?>

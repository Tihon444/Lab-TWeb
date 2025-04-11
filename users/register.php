<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mercedes_db";

$jsonFile = __DIR__ . "/users.json";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = trim($_POST["fullname"]);
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    if (empty($fullname) || empty($email) || empty($password)) {
        die("Toate câmpurile sunt obligatorii!");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email invalid!");
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        die("Acest email este deja înregistrat!");
    }
    $stmt->close();

    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (fullname, email, password_hash) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $fullname, $email, $password_hash);

    if ($stmt->execute()) {
        $stmt->close();

        if (!file_exists($jsonFile)) {
            file_put_contents($jsonFile, json_encode([], JSON_PRETTY_PRINT));
        }

        $jsonContent = file_get_contents($jsonFile);
        $jsonData = json_decode($jsonContent, true);

        if (!is_array($jsonData)) {
            $jsonData = []; 
        }

        $userData = [
            "fullname" => $fullname,
            "email" => $email,
            "password_hash" => $password_hash
        ];
        $jsonData[] = $userData;

        if (file_put_contents($jsonFile, json_encode($jsonData, JSON_PRETTY_PRINT)) === false) {
            die("Eroare: Nu s-a putut scrie în users.json");
        }

        echo "success"; 
    } else {
        die("Eroare la înregistrare: " . $stmt->error);
    }
}

$conn->close();
?>

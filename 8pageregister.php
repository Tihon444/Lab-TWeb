<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mercedes-Benz Register</title>
    <link rel="stylesheet" href="css/8pageregister.css">
</head>

<body>
    <div class="card">
        <img src="imagini/mercedes-logo.png" alt="Mercedes-Benz Logo" class="logo">
        <h2>Înregistrare</h2>
        <div class="input-container">
            <input type="text" id="fullname" placeholder="Nume complet">
        </div>
        <div class="input-container">
            <input type="email" id="email" placeholder="Email">
        </div>
        <div class="input-container">
            <input type="password" id="password" placeholder="Parola">
        </div>
        
        <button id="registerButton" class="register-button" disabled>Înregistrează-te</button>

        <p class="login-text">Ai deja un cont? <a href="7pagelogin.php">Autentifică-te</a></p>
        
        <a href="2page.php" class="logo-container">
            <img src="imagini/mercedes-logo.png" alt="Mercedes Logo">
        </a>
    </div>

    <script src="js/8pageregister.js"></script>
</body>
</html>
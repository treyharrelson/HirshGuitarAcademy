<?php

session_start();
if (!isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>User Page</h1><br>
    <h2>Welcome, <span><?= $_SESSION['name']; ?></spam></h2>
    <button onclick="window.location.href='logout.php'">Logout</button>
    <script src="script.js"></script>
</body>
</html>

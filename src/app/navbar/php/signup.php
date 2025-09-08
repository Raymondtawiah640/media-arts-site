<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // Check if user/email already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email OR username = :username");
    $stmt->execute(['email' => $email, 'username' => $username]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Username or email already exists']);
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Insert user
    $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $result = $stmt->execute([
        'username' => $username,
        'email' => $email,
        'password' => $hashedPassword
    ]);

    if ($result) {
        echo json_encode(['status' => 'success', 'message' => 'Signup successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Signup failed']);
    }
}
?>

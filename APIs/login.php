<?php

include "connection.php";

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];

$query = $connection->prepare("SELECT * FROM users WHERE username = ? and email = ?");
$query->bind_param("ss", $username, $email);
$query->execute();
$result = $query->get_result();

if ($result->num_rows != 0) {
    $user = $result->fetch_assoc();

    // Verify password
    $check = password_verify($password, hash: $user["password"]);

    if ($check) {
        echo json_encode([
            "status" => "Login Succesful",
            "user" => $user,
            "UserId" => $user["UserId"], 
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            "status" => "Invalid Credentials",
        ]);
    }
} else {
    http_response_code(404);

    echo json_encode([
        "status" => "User not found",
    ]);
}

?>
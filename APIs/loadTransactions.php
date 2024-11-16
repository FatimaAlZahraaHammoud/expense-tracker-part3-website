<?php

    include "connection.php";
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");


    $userId = $_GET["userId"] ?? null;

    error_log("Received userId: " . $userId);

    if (!$userId) {
        echo json_encode([
            "status" => "Failed",
            "message" => "userId is required."
        ]);
        exit();
    }

    $query = $connection->prepare("SELECT TransactionId as id, date, category, type, amount, notes FROM transactions WHERE UserId = ?");
    $query->bind_param("i", $userId);
    $query->execute();
    $result = $query->get_result();

    $transactions = [];
    while ($row = $result->fetch_assoc()) {
        $transactions[] = $row;
    }

    if ($result->num_rows >0) {
        echo json_encode([
            "status"=> "Load transaction successful",
            "message"=> "transactions are successfully loaded ",
            "transactions" => $transactions
        ]);
    } 
    else {
        echo json_encode([
            "status"=> "Failed",
            "message"=> "Could not load transactions",
        ]);
    }
?>
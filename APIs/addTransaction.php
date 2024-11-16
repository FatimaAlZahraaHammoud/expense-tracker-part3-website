<?php

    include "connection.php";

    
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    $input = json_decode(file_get_contents('php://input'), true);

    // Validate input fields
    $UserId = $input['UserId'];
    $category = $input['category'];
    $amount = $input['amount'];
    $type = $input['type'];
    $date = $input['date'];
    $notes = $input['notes'];
    
    if (empty($UserId) || empty($category) || empty($amount) || empty($type) || empty($date) || empty($notes)) {
        echo json_encode([
            "status" => "Failed",
            "message" => "All fields are required."
        ]);
        exit();
    }

    try {
        $query = $connection->prepare("INSERT INTO transactions (UserId, category, amount, type, date, notes) VALUES (?, ?, ?, ?, ?, ?)");
        $query->bind_param("isdsss", $UserId, $category, $amount, $type, $date, $notes);
        $query->execute();
        $result = $query->affected_rows;

        if ($result != 0) {
            $transactionId = $connection->insert_id;
            echo json_encode([
                "status" => "Transaction Successful",
                "message" => "Transaction added successfully.",
                "transaction" => [
                    "id" => $transactionId,
                    "category" => $category,
                    "amount" => $amount,
                    "type" => $type,
                    "date" => $date,
                    "notes" => $notes
                ]
            ]);
        } 
        else {
            echo json_encode([
                "status" => "Failed",
                "message" => "Failed to add transaction."
            ]);
        }
    } catch (Exception $e) {
        echo json_encode([
            "status" => "Failed",
            "message" => "Error: " . $e->getMessage()
        ]);
    }
?>

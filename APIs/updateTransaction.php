<?php

    include "connection.php";
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");

    // Read the raw POST data
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);  

    if (isset($data["TransactionId"])) {
        $transactionId = $data["TransactionId"];
        $category = $data["category"];
        $amount = $data["amount"];
        $type = $data["type"];
        $date = $data["date"];
        $notes = $data["notes"];

        $query = $connection->prepare("UPDATE transactions SET category = ?, amount = ?, type = ?, date = ?, notes = ? WHERE TransactionId = ?");
        $query->bind_param("sdsssi", $category, $amount, $type, $date, $notes, $transactionId);
        $query->execute();

        if ($query->affected_rows > 0) {
            echo json_encode([
                "status" => "Update Success",
                "message" => "Transaction updated successfully."
            ]);
        } else {
            echo json_encode([
                "status" => "Failed",
                "message" => "No changes were made or transaction not found."
            ]);
        }
    } else {
        echo json_encode([
            "status" => "Failed",
            "message" => "TransactionId is required"
        ]);
    }

?>

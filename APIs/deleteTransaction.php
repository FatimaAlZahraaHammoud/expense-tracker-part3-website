<?php

    include "connection.php";
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");


    if(isset($_GET["TransactionId"])){
        $TransactionId = $_GET["TransactionId"];

        $query = $connection->prepare("Delete from transactions where TransactionId= ?");
        $query->bind_param("i", $TransactionId);
        $query->execute();
        $result = $query->affected_rows;

        if ($result > 0){
            echo json_encode([
                "status"=> "Delete Success",
                "message"=> "transaction deleted successfully"
            ]);
        }
        else {
            echo json_encode([
                "status" => "Failed",
                "message" => "No transaction found with this id"
            ]);
        }
    }
    else{
        echo json_encode([
            "status" => "Failed",
            "message" => "TransactionId is required"
        ]);
    }

    
?>

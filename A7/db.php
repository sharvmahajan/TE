<?php

$conn = new mysqli("localhost","root","","studentcrud");

if($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

?>
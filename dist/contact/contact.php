<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "karthikshetty26k@gmail.com";

$subjects = "[Portfolio] Sub: " . $subject;

$txt = "From: " . $name . " [" . $email . "] \r\n\n[Sub: " . $subject . "]\r\n\nMessage: " .$message;

$headers = "From: noreply@ShettyPortfolio.com" . "\r\n" . "CC: karthikkanyana26@gmail.com";

if ($email != NULL) {
    mail($to, $subjects, $txt, $headers);
}

header("Location: index.html>mailSend");

?>
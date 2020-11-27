<?php

    if(isset($_POST['submit'])){
        $name =$_POST['name'];
    $visitor_email =$_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'form@pauldoho.me';
    $email_body = "User name: $name. \n".
                    "User email: $visitor_email. \n".
                    "User message: $message. \n";

    $to = 'paul.doho.741@my.csun.edu';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $visitor_email \r\n";

    mail($to,$subject,$email_body,$headers);
    header("Location: index.html")
    }
?>
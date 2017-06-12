<?php
require_once('../mail/class.phpmailer.php');

$emailaddress = "name@domain.com"; 

// Check for empty fields
if(empty($_POST['name'])        ||
   empty($_POST['email'])       ||
   empty($_POST['phone'])       ||
   empty($_POST['message'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$ip = $_SERVER['REMOTE_ADDR'];
$message = $_POST['message'];


$subject = "Contact Form: $name";
$body = "You have received a new message from website.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nIP Address: $ip\n\nMessage:\n$message";

$mail             = new PHPMailer();
$mail->IsSMTP(); 
$mail->Host       = "smtp.mandrillapp.com"; 
//$mail->SMTPDebug  = 1;                     
$mail->SMTPAuth   = true;                 
$mail->Host       = "smtp.mandrillapp.com"; 
$mail->Port       = 587;                    
$mail->Username   = "username"; 
$mail->Password   = "password";        

$mail->CharSet  = 'UTF-8';  
$mail->SetFrom($email_address);
$mail->AddReplyTo($email_address);
$mail->Subject    = "Contact Form: ".$_POST['name']." ";
$mail->MsgHTML($body);

$mail->AddAddress($emailaddress);
$mail->Send();

?>
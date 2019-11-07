<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$message = $_POST['user_message'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMPTAuth = true;
$mail->Username = 'magomed.botov@mail.ru';
$mail->Password = 'kirill666A';
$mail->SMPTSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('magomed.botov@mail.ru');
$mail->addAddress('mr.glazki@mail.ru');

$mail->IsHTML(true);

$mail->Subject = 'Вас поблагодарили';
$mail->Body    = '' .$name . 'Написал(а)' .$message;
$mail->AltBody = '';

if(!mail->send()) {
	echo "При отправке письма возникла ошибка";
} else {
	echo "Письмо успешно отправлено";
}

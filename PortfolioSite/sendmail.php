<?php

   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';
   require 'phpmailer/src/SMTP.php';

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\Exception;

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'php/phpmailer/language');
   $mail->isHTML(true);

   //SMTP-settings
   $mail->isSMTP();
   $mail->SMTPAuth = true;
   $mail->SMTPSecure = 'tls';

   $mail->Host = 'smtp.gmail.com';
   $mail->Port = 587;
   $mail->Username = 'antom270700@gmail.com';
   $mail->Password = 'Antom11092001';

   $mail->setFrom('antom270700@gmail.com'); //From
   $mail->addAddress('amakarkin27@gmail.com'); //To
   $mail->Subject = 'Заявка на создание сайта/лендинга'; //Subject of a letter
   //body of a letter
   $body = '<h1>Заявка с личного сайта портфолио</h1>';

   if (trim(!empty($_POST['name']))) {
      $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
   }
   if(trim(!empty($_POST['email']))) {
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }

   $mail->Body = $body;

   //Send
   if (!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены!';
   }

   $response = ['message' => $message];

   header('Content-type: application/json');
   echo json_encode($response);

   $mail->smtpClose();

   /*7CS-2LQ-jTf-WK5*/ 

?>
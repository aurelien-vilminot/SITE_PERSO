<?php
require_once 'database.php';
class Mail extends Database {
    public function sendMail ($lastname, $firstname, $mail, $message) {
        $mail_message = 'Message de ' . $firstname . ' ' . $lastname . ' : ' . "\n\n";
        $mail_message .= $message;

        $header = 'From: ' . $firstname . ' ' . $lastname . ' <' . $mail . '>' . "\n";
        $header .= 'Return-Path: <' . $mail . '>' . "\n";
        $header .= 'Content-Type: text/plain; charset=utf-8';

        mail(MY_MAIL, 'Nouveau message du site !', $mail_message, $header);
    }
}
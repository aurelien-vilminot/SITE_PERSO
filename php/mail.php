<?php
session_start();
require_once '../model/mail.php';

$obj = new stdClass();
$obj->success = false;

$myMail = new Mail();

if(!empty(trim($_POST['lastname'])) && !empty(trim($_POST['firstname'])) && !empty(trim($_POST['mail'])) && !empty(trim($_POST['message'])))
{
    $lastname = strval(trim($_POST['lastname']));
    $firstname = strval(trim($_POST['firstname']));
    $mail = strval(trim($_POST['mail']));
    $message = strval(trim($_POST['message']));

    if (!preg_match('/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$/', $lastname)) {
        $obj->error = 'Le nom ne peut être composé de caractères spéciaux ou chiffres';
    } elseif (!preg_match('/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$/', $firstname)) {
        $obj->error = 'Le prénom ne peut être composé de caractères spéciaux ou chiffres';
    } elseif(!$myMail->regExpMail($mail)) {
        $obj->error = 'L\'adresse mail n\'est pas valide';
    } elseif (!preg_match('/^(.|\s){1,2000}$/', $message)) {
        $obj->error = 'Le message doit contenir entre 1 et 2000 caractères';
    } else {
        $myMail->sendMail($lastname, $firstname, $mail, $message);
        $obj->successMessage = $firstname . ', votre message a été envoyé !';
        $obj->success = true;
    }
} else {
    $myMail->error = 'Merci de remplir tous les champs';
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);
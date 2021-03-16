<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["number"]);
$message = htmlspecialchars($_POST["text"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "info@upmedia.uz";
$sub = "Сообщение с формы обратной связи upmedia.uz";

/* Формат письма */
$mes = "Сообщение с формы обратной связи upmedia.uz\n
Имя отправителя: $name 
Телефон отправителя: $phone
Текст сообщения:
$message";


if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https://upmedia.uz');
    echo '
    
    <center>Ваше сообщение отправлено, через 5 секунд вы вернетесь на главную страницу</center>';}
else {
    header('Refresh: 5; URL=https://upmedia.uz');
    echo '
    
    <center>Ваше сообщение не отправлено, через 5 секунд вы вернетесь на главную страницу</center>';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>
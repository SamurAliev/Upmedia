<?php

/* Задаем переменные */
$message = array('Дизайнер', 'Верстальщик', 'SMM-менеджер, SEO-специалист', 'Менеджер по продажам', 'Программист');
$name = htmlspecialchars($_POST["name"]);
$message = htmlspecialchars($_POST["message"]);
$phone = htmlspecialchars($_POST["number"]);
$bezspama = htmlspecialchars($_POST["bezspama"]);

/* Ваш адрес и тема сообщения */
$address = "info@upmedia.uz";
$sub = "Сообщение о работе с сайта upmedia.uz";

/* Формат письма */
$mes = "Сообщение о работе с сайта upmedia.uz\n
Имя отправителя: $name 
Вакансия: $message
Телефон отправителя: $phone";

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
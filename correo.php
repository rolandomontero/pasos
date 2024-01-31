 <?php

if (!empty($_REQUEST)) {
    $message  = "Nombre: " . $_REQUEST['nombre'] . '<BR>';
    $message .=  "email: " . $_REQUEST['email'] . '<BR>';
    mail('rolandomontero@hotmail.com','#CONTACTO DESDE WEB#', $message);
    echo '200';
} else {
    echo '400';
}
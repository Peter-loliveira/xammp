<?php
$mysqli_connection = new MySQLi('localhost', 'root', '', 'aula');
if ($mysqli_connection->connect_error) {
    echo "Desconectado! Erro: " . $mysqli_connection->connect_error;
} else {
    echo "Conectado com o banco de dados!";
}

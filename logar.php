<?php
session_start();
include ("controles/conexao.php");

$usuario = $_POST["usuario"];
$senha = $_POST["senha"];

$sql = "SELECT *  FROM usuarios  WHERE usuario = '$usuario' AND senha = '$senha' ";
$query = mysql_query($sql);

$resultset  = mysql_fetch_array($query);

if(mysql_num_rows($query)<=0) {
   
	header("Location: index.php?erro=Usuário ou Senha Incorreta!");
} else {
	
		$_SESSION['id_usuario'] = $resultset['id_usuario'];
		$_SESSION['nome'] = $resultset['nome'];
		$_SESSION['usuario'] = $resultset['usuario'];
		$_SESSION['senha'] = $resultset['senha'];
		
		header("Location: inicio.php");

}

?>
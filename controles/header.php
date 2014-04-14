<?php 
session_start();
include("conexao.php");
include("funcoes.php");
//include("/sgo/erros.php");

if(empty($_SESSION['id_usuario'])){
	header("Location: /sgo/index.php?erro=Efetuar login no sistema!");  	 
}
?>

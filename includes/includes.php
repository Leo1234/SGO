<?php 
session_start();
include("controles/conexao.php");
include("controles/funcoes.php");
include("erros.php");

if(empty($_SESSION['id_usuario'])){
	header("Location: index.php?erro=Efetuar login no sistema!");  	 
}
?>
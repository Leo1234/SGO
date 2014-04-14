<?php
$conexao = mysql_connect("localhost","root","");

	if(!$conexao){
		echo "ERRO de conexao!";
	}

$bd = mysql_select_db("crime");
	
	if(!$bd){
		echo "ERRO na selecao do banco de dados!";
	}
?>
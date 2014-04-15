<?php include('controles/header.php'); ?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>SGO :: Sistema Gerenciador de Ocorrências</title>

<?php include('files.php'); ?>


</head>

<body>

<div id="principal">
	<?php include('layout/topo.php'); ?>
    <?php include('layout/menu.php'); ?>
   
    
    <div id="conteudo">
    	<div id="apresentacao">
        </div>
        <div id="nomeuser">
        	<?php echo utf8_encode($_SESSION['nome']); ?>
        </div>
    </div>
    
    <?php include('layout/rodape.php'); ?>
    
    
</div>
<a href="http://apycom.com/" style="visibility:hidden;"></a>
</body>
</html>
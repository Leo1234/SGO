<?php 
session_start();
session_destroy();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="*.js" charset="utf-8"></script> 
<title>SGO :: Sistema Gerenciador de Ocorrências</title>
<link rel="stylesheet" href="css/estilo.css" media="screen" />
<link rel="stylesheet" href="css/form_cadastro.css" media="screen" />
</head>

<body>
<div id="principal">
	<?php include('layout/topo_index.php'); ?>
    <div id="menu2">
    </div>
   
    
    <div id="conteudo">
    	<div id="div_logar" style="background-color:#C8CBD7">
        <div id="div_logar_img"><img src="imagens/locked128.png" width="128" height="128"></div>
        <div id="div_logar_form">
        <form id="logar" method="post" action="logar.php">
        	<fieldset >
            	<legend>Autenticação</legend>
                <div id="<?php if (isset($_GET['erro'])) echo "alerta_erro"; ?>"><?php if(isset($_GET['erro'])) echo $_GET['erro']; ?></div>
                
                <div style="margin-top:10px;">
                    <div id="label" style="float:left">Usuário:&nbsp;&nbsp;</div>
                    <input type="input" name="usuario" id="usuario" size="18" maxlength="15" />
                </div>
                
                <div style="margin-top:10px;">
                    <div id="label" style="float:left">Senha:&nbsp;&nbsp;</div>
                    <input type="password" name="senha" id="senha" size="18" maxlength="8" />
                </div>
                
                <div style="margin-top:10px;margin-left:100px;">
                    <input type="submit" value="Logar" style="cursor:pointer; height:30px; width:110px; text-align:center;font-weight:bold;color:#FFF;background: url(imagens/sgo_menu_hover.jpg); font-size:14px;text-indent:0px;padding-bottom:4px"/>
                </div>
            </fieldset>
        </form>
        </div>
      </div>
    </div>
    
    <?php include('layout/rodape.php'); ?>
    
    
</div>
	
</body>
</html>
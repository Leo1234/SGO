<?php include('controles/header.php'); ?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>SGO :: Sistema Gerenciador de Ocorrências</title>

        <?php include('files.php'); ?>
        <link href="temp_data/css/ui-lightness/jquery-ui-1.10.0.custom.css" rel="stylesheet">
        <script src="temp_data/js/jquery-1.9.0.js"></script>
        <script src="temp_data/js/jquery-ui-1.10.0.custom.js"></script>
        <script type="text/javascript" src="/sgo/js/ocorrencia.js"></script>
        
        <script src="temp_data/js/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
        <script src="choose/chosen.jquery.js" type="text/javascript"></script>
        <script src="choose/docsupport/prism.js" type="text/javascript" charset="utf-8"></script>
        
        <link rel="stylesheet" href="css/form_cadastro.css" media="screen" />
        <link rel="stylesheet" href="css/estilo.css" media="screen" />
        <link rel="stylesheet" href="css/form.css" media="screen" />

        <link rel="stylesheet" href="choose/docsupport/prism.css">
        <link rel="stylesheet" href="choose/chosen.css">
        
      
       
    </head>

    <body>
        <div id="principal">
            <?php include('layout/topo.php'); ?>
            <?php include('layout/menu.php'); ?>
            <div id="conteudo">
                <form id="formGeral" method="GET" action="recebeoco.php">
                    <fieldset>
                        <legend>Ocorrência</legend>
                        <table  id="t1" width="90%" >  
                            <tr>  
                                <td><input type="checkbox" name="crimes[]" value="1" id="homicidio" onchange="addDadosHomicidios();"> </input></td>
                                <td> Homicídio</td>
                                <td><input id="crime1" type="checkbox" name="crimes[]" value="5"></input></td>   
                                <td> Roubo   </td>
                                <td align="right"><input id="veiculo" type="checkbox" name="crimes[]" value="14" onchange="addDadosVeiculos();"></input></td>
                                <td > Veículo Localizado  </td>
                                <td align="right"> Data: </td>
                                <td colspan="4"> <input type="text" id="datepicker" name="data"/> </td>
                            </tr>
                            <tr>  
                                <td><input type="checkbox" name="crimes[]" value="2" id="lesao" onchange="addDadosLesoes();" ></input></td>
                                <td>Lesão</td>
                                <td><input id="crime1" type="checkbox" name="crimes[]" value="6"></input></td>   
                                <td> Furto</td>
                                <td align="right"><input id="crime1" type="checkbox" name="crimes[]" value="15"></input></td>
                                <td >Ocorrência de Trânsito</td>
                                <td align="right">CIOPS</td>
                                <td colspan="4"><input id="crime1" type="text" name="crimes[]"></input></td>
                            </tr>
                            <tr>  
                                <td><input id="arma" type="checkbox" name="crimes[]" value="13" onchange="addDadosArmas();" ></input></td>
                                <td> Port. Ilegal de arma</td>
                                <td><input id="drog" type="checkbox" name="crimes[]" value="10" onchange="addDadosDrogas();" ></input></td>   
                                <td> Tráfico de Entorp. </td>
                                <td align="right">Outros</td>
                                <td><input id="crime1" type="text" name="Outros"></input></td>
                                <td align="right">QTR I</td>
                                <td><input id="crime1" type="text" name="qtri" size="8"></input></td>
                                <td align="right">QTR F</td>
                                <td align="left"><input id="crime1" type="text" name="qtrf" size="8"></input></td>
                            </tr>
                        </table > </br>
                        <table  id="t2" width="90%" border="1">
                            <tr>  
                                <td>Local do crime:</td>
                                <td><input id="crime1" type="text"  size="30%" name="ruao"></input></td>
                                <td>Número</td>
                                <td><input id="crime1" type="text" size="3%" name="numeroo"></input></td>
                                <td>Bairro</td>
                                <td><input id="crime1" type="text" size="30%" name="bairroo"></input></td>
                                <td align="left">Município</td>
                                <td align="left"> <select name="municipioo"  class="chosen-select" style="width: 100px">
                                        <option value=""></option>
                                        <?php
                                        include ("controles/conexao.php");

                                        $sql = "SELECT *from municipio";
                                        $query = mysql_query("SELECT *from municipio");


                                        while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
                                            echo("<option value='" . $row['id_mun'] . "'>" . utf8_encode($row['nome_mun']) . "</option>");
                                        }
                                        ?>
                                    </select>
                                </td>

                            </tr>
                            <tr>  
                                <td >Procedimento:</td>
                                <td>
                                    <select name="procedimento"  class="chosen-select" style="width: 120px">
                                        <?php
                                        include ("controles/conexao.php");

                                        $query = mysql_query("SELECT *from procedimento");


                                        while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
                                            echo("<option value='" . $row['id_pro'] . "'>" . utf8_encode($row['procedimento']) . "</option>");
                                        }
                                        ?>
                                    </select>
                                </td>
                                <td>RD</td>
                                <td align="left"><select name="rd"  class="chosen-select" style="width: 100px" >
                                        
                                        <?php
                                        include ("controles/conexao.php");

                                        $query = mysql_query("SELECT *from rd");


                                        while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
                                            echo("<option value='" . $row['id_rd'] . "'>" . utf8_encode($row['id_rd']) . "</option>");
                                        }
                                        ?>                                    </select></td>
                                <td>Composição</td>
                                <td> <select data-placeholder="add Composição" class="chosen-select" multiple style="width:350px;" tabindex="4" name="composicao[]">
                                        <option value=""></option>

                                           <?php
                                        include ("controles/conexao.php");

                                        $query = mysql_query("SELECT *from policial");


                                        while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
                                            echo("<option value='" . $row['id_pol'] . "'> " . utf8_encode($row['numeral'] ." - ". $row['nome_pol']) . "</option>");
                                        }
                                        ?> 

                                    </select>
                                </td>
                                 
                               
                            </tr>
                        </table></br>
                        
                        <div id="divRecebeHomicidio">   
                        </div>
                         <div id="divRecebeLesao">   
                        </div>
                          <div id="divRecebeDroga"> 
                        </div>
                           <div id="divRecebeArma">   
                        </div>
                        <div id="divRecebeVeiculo">   
                        </div>
                        
                    </fieldset>

                    <fieldset>
                        <legend>Acusados</legend>
                        <div id="divRecebeModal">   
                        </div>
                        <button type="button"  id="btacu"   >add acusado</button>
                    </fieldset>
                    <fieldset>
                        <legend>Vítimas</legend>
                        <div id="divRecebeModalVitima">   
                        </div>
                        <button type="button"  id="btvit" >add Vítima</button>
                        <div id="divRecebeModalVitima">   
                        </div>
                    </fieldset >

                    <fieldset>
                        <legend>Narração</legend>
                        <table>
                            <tr>
                                <td><TEXTAREA NAME="mensagem" COLS="120" ROWS="5"></TEXTAREA></td>
                            </tr>
                                  <tr>
                                <td><input type="submit" value="Enviar" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" style="width: 100px"  /></td>
                            </tr>
                        </table>

                    </fieldset >

</form>
            </div>
            <?php include('layout/rodape.php'); ?>
        </div>
      
  <script type="text/javascript">
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
  </script>
        <?php include ("form/formAcusado.php"); ?>
<?php include ("form/formVitima.php"); ?>
<?php include ("form/formHomicidio.php"); ?>
<?php include ("form/formLesao.php"); ?>
<?php include ("form/formDroga.php"); ?>
<?php include ("form/formArma.php"); ?>
 <?php include ("form/formVeiculo.php"); ?>
    </body>
</html>

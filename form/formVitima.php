<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<div id="divVitimaModal">
    <form name="formVitima" id="formVitima"
         
          <fieldset>
          <legend>Vítimas</legend>
            <table  id="t2" width="60%">
                <tr>
                    <td align="right">Nome</td>
                    <td><input id="nomev" type="text" name="nomev" size="30%"></input></td>
                    <td align="right">Sexo</td>
                    <td><input id="sexov" type="textarea" size="3%"></input></td>
                    <td align="right">Idade</td>
                    <td><input id="idadev" type="textarea"size="3%"></input></td>
                </tr>
            </table> </br>
            
            <table  id="t2" width="60%">
                <tr>
                    <td>Residência</td>
                    <td><input id="ruav" type="text" size="30%"></input></td>
                    <td align="right">Número</td>
                    <td><input id="numerov" type="text"size="3%"></input></td>
                    <td align="right">Bairro</td>
                    <td><input id="bairrov" type="textarea" size="30%"></input></td>
                    <td>Município</td>
                    <td> <select name="municipiov" id="municipiov">
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

            </table>
            </br>
        </fieldset>
      
</div>
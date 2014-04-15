<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<div id="divAcusadosModal">
    <form name="formAcusado" id="formAcusado"
          <fieldset>
            <legend>Acusados</legend>
            <table  id="t2" width="60%">
                <tr>
                    <td align="right">Nome</td>
                    <td><input id="nome" type="textarea" name="nome[]" size="30%"></input></td>
                    <td align="right">Apelido</td>
                    <td><input id="apelido" type="textarea" name="apelido[]" size="20"></input></td>
                    <td align="right">Sexo</td>
                    <td><input id="sexo" type="textarea" name="sexo[]" size="3%"></input></td>
                    <td align="right">Idade</td>
                    <td><input id="idade" type="textarea" name="idade[]" size="3%"></input></td>
                <tbody>
                    <tr>  
                    <td align="right">Genitora</td>
                    <td><input id="genitora" type="textarea" name="genitora[]" size="30%"></input></td>
                    <td align="right">Características</td>
                    <td><input id="caracteristicas" type="textarea" name="caracteristicas[]" size="30%"></input></td>
                </tbody>
                </tr>
                </tr>
            </table> </br>
            <table  id="t2" width="60%">
                <tr>
                    <td>Residência</td>
                    <td><input id="rua" type="textarea" name="rua" size="30%"></input></td>
                    <td align="right">Número</td>
                    <td><input id="numero" type="text" name="numero" size="3%"></input></td>
                    <td align="right">Bairro</td>
                    <td><input id="bairro" type="textarea" name="bairro" size="30%"></input></td>
                    <td>Município</td>
                    <td> <select name="municipio" id="municipio">
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
            </table> </br>
        </fieldset >
</div>
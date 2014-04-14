<div id="divDrogaModal">
    <form name="formDroga" id="formDroga"
          <fieldset>
            <legend>Dados Droga</legend>
            <table  id="t2" width="70%">
                <tr>
                    <td align="right">Entorpecente</td>
                    <td><select name="droga" id="droga" class="chosen-select" style="width: 100px">
                                        <?php
                                        include ("controles/conexao.php");

                                        $query = mysql_query("SELECT *from droga");


                                        while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) {
                                            echo("<option value='" . $row['id_dro'] . "'>" . utf8_encode($row['nome_dro']) . "</option>");
                                        }
                                        ?>
                                    </select></td>
                    <td align="right">QTD Droga</td>
                    <td><input id="qtdD" type="text" name="qtdD" size="3%"></input></td>
                    <td align="right">Descrição</td>
                    <td><TEXTAREA  COLS="20" ROWS="5" id="dD"></TEXTAREA></td>

                </tr>
            </table> </br>
            </br>
        </fieldset>

</div>
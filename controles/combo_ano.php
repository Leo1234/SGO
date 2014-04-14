<?php
include("conexao.php");

$Query = "SELECT * FROM anos ORDER BY id_ano ASC";
$Sql = mysql_query($Query,$conexao);

if ($Sql){
	$a = date('Y',time());
	?>
<span id="spryselect2">
<select name="ano" id="ano" style="width:134px; ">
  <option value="">Ano</option>
  <?php
		while($Listar = mysql_fetch_array($Sql,MYSQL_ASSOC)){
				if($Listar['ano'] == $ano || $Listar['ano'] == $a){
				?>
    <option value="<?php echo $Listar['ano'];?>" title="<?php echo utf8_encode($Listar['ano']);?>" selected > <?php echo utf8_encode($Listar['ano']);?></option>
  <?php		
				}
				else{
	?>
    <option value="<?php echo $Listar['ano'];?>" title="<?php echo utf8_encode($Listar['ano']);?>" > <?php echo utf8_encode($Listar['ano']);?></option>
    <?php
				}
		}
	?>
</select>
</span>
<?php
}else{
	echo "Erro !";
	exit();
}
?>


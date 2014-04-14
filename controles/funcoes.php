<?php
/*
 *	Converter data de (aa-mm-dd) para (dd/mm/aa)
 *	@param $date
 *	return date
*/

 function toDateDMY($date){
	if ($date != ""){
		list ($y, $m, $d) = split ('[-]', $date);
		$dataformatada="$d/$m/$y";
		if ($dataformatada!="//"){
			return "$d/$m/$y";
		}
	}
	
	return "";
}//Fim do metodo toDateDMY 


/*
 *	Converter data de (dd/mm/aa) para (aa-mm-dd)
 *	@param $date
 *	return date
*/
function toDateYMD($date){

	if ($date != ""){
		list ($d, $m, $y) = split ('[/]', $date);
		$dataformatada="$d-$m-$y";
		if ($dataformatada!="--"){
			return "$y-$m-$d";
		}
	}

	return "";
}//Fim do metodo toDateDMY


// Função que valida o CPF
function validaCPF($cpf)
{	// Verifiva se o número digitado contém todos os digitos
    $cpf = str_pad(ereg_replace('[^0-9]', '', $cpf), 11, '0', STR_PAD_LEFT);
	
	// Verifica se nenhuma das sequências abaixo foi digitada, caso seja, retorna falso
    if (strlen($cpf) != 11 || $cpf == '00000000000' || $cpf == '11111111111' || $cpf == '22222222222' || $cpf == '33333333333' || $cpf == '44444444444' || $cpf == '55555555555' || $cpf == '66666666666' || $cpf == '77777777777' || $cpf == '88888888888' || $cpf == '99999999999')
	{
	return false;
    }
	else
	{   // Calcula os números para verificar se o CPF é verdadeiro
        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf{$c} * (($t + 1) - $c);
            }

            $d = ((10 * $d) % 11) % 10;

            if ($cpf{$c} != $d) {
                return false;
            }
        }

        return true;
    }
}

//Função que converte um valor de moeda no formato BR para o Inglês
// Ex: converter 2.500,25 para 2500.25
function BrToIng($valor){
		if($valor == "")
			$valor = "0,00";
			
		$valor = explode(',',$valor);
		$valorINI = explode('.',$valor[0]);
		$valorINI = implode($valorINI);
		$valorFIM = $valor[1];
		
		$valor_global = $valorINI.".".$valorFIM;
		
		return $valor_global;
}

//Função que converte um valor de moeda no formato Inglês para o BR
// Ex: converter 2500.25 para 2.500,25
function IngToBr($valor){

		return number_format($valor,2,',','.');
}

//TOTAL DOS ITENS
function valorTotalDotContrato($id_contrato, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor) as total FROM dotacoes WHERE id_contrato = $id_contrato ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
		
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalItensContrato($id_contrato, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor_total) as total FROM itens_contrato WHERE id_contrato = $id_contrato ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
		
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalEmpenhoDot($id_dot, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor_empenho) as total FROM empenhos WHERE id_dotacao = $id_dot ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
		
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalItensEmpenho($id_empenho, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor_total) as total FROM itens_empenho WHERE id_empenho = $id_empenho ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
	
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalEmpDotacao($id_dotacao, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(e.valor_empenho) as total FROM empenhos e INNER JOIN itens_empenho ie ON e.id_empenho = ie.id_empenho WHERE e.id_dotacao = $id_dotacao  GROUP BY e.id_dotacao";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
	
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalNotasEmpenho($id_empenho, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor_nota) as total FROM notas WHERE id_empenho = $id_empenho ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
	
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}

function valorTotalItensNota($id_nota, $key = 0){
	$total = 0.0;
	
	$sql = "SELECT SUM(valor_total) as total FROM itens_nota WHERE id_nota = $id_nota ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$total = $lin['total'];
	if($total == NULL)
		$total = 0.0;
	
	if($key == 1)
		return IngToBr($total);
	else
		return $total;
}


//SALDOS
function saldoDotContrato($id_contrato, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor_global FROM contratos WHERE id_contrato = $id_contrato ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor_global'];
	$saldo = $valor - valorTotalDotContrato($id_contrato);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoContrato($id_contrato, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor_global FROM contratos WHERE id_contrato = $id_contrato ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor_global'];
	$saldo = $valor - valorTotalItensContrato($id_contrato);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoEmpenhoDot($id_dot, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor FROM dotacoes WHERE id_dotacao = $id_dot ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor'];
	$saldo = $valor - valorTotalEmpenhoDot($id_dot);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoEmpenho($id_empenho, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor_empenho FROM empenhos WHERE id_empenho = $id_empenho ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor_empenho'];
	$saldo = $valor - valorTotalItensEmpenho($id_empenho);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoDotacao($id_dotacao, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor FROM dotacoes WHERE id_dotacao = $id_dotacao ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor'];
	$saldo = $valor - valorTotalItensDotacao($id_dotacao);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoNotaEmpenho($id_empenho, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor_empenho FROM empenhos WHERE id_empenho = $id_empenho ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor_empenho'];
	$saldo = $valor - valorTotalNotasEmpenho($id_empenho);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

function saldoNota($id_nota, $key = 0){
	$saldo = 0.0;
	$valor = 0.0;
	
	$sql = "SELECT valor_nota FROM notas WHERE id_nota = $id_nota ";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor = $lin['valor_nota'];
	$saldo = $valor - valorTotalItensNota($id_nota);
		
	if($key == 1)
		return IngToBr($saldo);
	else
		return $saldo;
}

//TEM SALDO ?
function temSaldoDotContrato($id_contrato){
	if(saldoDotContrato($id_contrato)  != 0)
		return true;
	else
		return false;
}

function temSaldoContrato($id_contrato){
	if(saldoContrato($id_contrato)  != 0)
		return true;
	else
		return false;
}

function temSaldoEmpenhoDot($id_dot){
	
	if(saldoEmpenhoDot($id_dot)  != 0)
		return true;
	else
		return false;
}

function temSaldoEmpenho($id_empenho){
	if(saldoEmpenho($id_empenho)  != 0)
		return true;
	else
		return false;
}

function temSaldoDotacao($id_dotacao){
	if(saldoDotacao($id_dotacao)  != 0)
		return true;
	else
		return false;
}
function temSaldoNotaEmpenho($id_empenho){
	if(saldoNotaEmpenho($id_empenho) != 0)
		return true;
	else
		return false;
}
function temSaldoNota($id_nota){
	if(saldoNota($id_nota) != 0)
		return true;
	else
		return false;
}

//diferença para edição
function difEditContrato($valor2, $idc){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_global  FROM contratos WHERE id_contrato = $idc";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_total'];
	
	return number_format($valor2 - $valor1,2,'.','');
}
	
function difEditItemContrato($valor2, $idic){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_total  FROM itens_contrato WHERE id_item_contrato = $idic";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_total'];
	
	return number_format($valor2 - $valor1,2,'.','');
}

function difEditEmpenho($valor2, $ide){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_empenho  FROM empenhos WHERE id_empenho = $ide";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_empenho'];
	
	return  number_format($valor2 - $valor1,2,'.','');
}

function difEditItemEmpenho($valor2, $idie){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_total  FROM itens_empenho WHERE id_item_empenho = $idie";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_total'];
	
	return number_format($valor2 - $valor1,2,'.','');
}

function difEditDot($valor2, $id_dotacao){
	$valor1 = 0.0;
	
	$sql = "SELECT valor  FROM dotacoes WHERE id_dotacao = $id_dotacao";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor'];
	
	return number_format($valor2 - $valor1,2,'.','');
}
function difEditNota($valor2, $id_nota){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_nota  FROM notas WHERE id_nota = $id_nota";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_nota'];
	
	return number_format($valor2 - $valor1,2,'.','');
}


function difEditItemNota($valor2, $idin){
	$valor1 = 0.0;
	
	$sql = "SELECT valor_total  FROM itens_nota WHERE id_item_nota = $idin";
	$query = mysql_query($sql);
	$lin = mysql_fetch_array($query);
	
	$valor1 = $lin['valor_total'];
	
	return number_format($valor2 - $valor1,2,'.','');
}

//VERIFICAR RETIRADAS
function subDotContrato($valor, $id_contrato, $id_dot=0){
	$dif = 0.0;
	
	if($id_dot != 0){
		$dif = difEditDot($valor,$id_dot);
		if($dif > 0)
			return subDotContrato($dif,$id_contrato);
		else
			return true;
	}
	else{
		if(temSaldoDotContrato($id_contrato) && saldoDotContrato($id_contrato) >= $valor){
			return true;
		}
		else{
			return false;
		}
	}
}


function subContrato($valor, $id_contrato){
	if(temSaldoContrato($id_contrato) && saldoContrato($id_contrato) >= $valor){
		return true;
	}
	else{
		return false;
	}
}

function subEmpenhoDot($valor, $id_dot, $id_emp=0){
	$dif = 0.0;
	if($id_emp != 0){
		  $dif = difEditEmpenho($valor,$id_emp);
		if($dif > 0)
			return subEmpenhoDot($dif,$id_dot);
		else
			return true;
	}
	if(temSaldoEmpenhoDot($id_dot) && saldoEmpenhoDot($id_dot) >= $valor){
		return true;
	}
	else{
		return false;
	}
}


function subEmpenho($valor, $id_empenho, $id_item=0){
	$dif = 0.0;
	if($id_item != 0){
		  $dif = difEditItemEmpenho($valor,$id_item);
		if($dif > 0)
			return subEmpenho($dif,$id_empenho);
		else
			return true;
	}
	if(temSaldoEmpenho($id_empenho) && saldoEmpenho($id_empenho) >= $valor){
		return true;
	}
	else{
		return false;
	}
}

function subDotacao($valor, $id_dotacao, $id_item=0){
	$dif = 0.0;
	if($id_item != 0){
		  $dif = difEditItemContrato($valor,$id_item);
		if($dif > 0)
			return subDotacao($dif,$id_dotacao);
		else
			return true;
	}

	if(temSaldoDotacao($id_dotacao) && saldoDotacao($id_dotacaoo) >= $valor){
		return true;
	}
	else{
		return false;
	}
}

function subNotaEmpenho($valor, $id_empenho, $id_nota=0){
	$dif = 0.0;
	if($id_nota != 0){
		  $dif = difEditNota($valor,$id_nota);
		if($dif > 0)
			return subNotaEmpenho($dif,$id_empenho);
		else
			return true;
	}
	if(temSaldoNotaEmpenho($id_empenho) && saldoNotaEmpenho($id_empenho) >= $valor){
		return true;
	}
	else{
		return false;
	}
}

function subItemNota($valor, $id_nota, $id_item=0){
	$dif = 0.0;
	if($id_item != 0){
		  $dif = difEditItemNota($valor,$id_item);
		if($dif > 0)
			return subItemNota($dif,$id_nota);
		else
			return true;
	}
	if(temSaldoNota($id_nota) && saldoNota($id_nota) >= $valor){
		return true;
	}
	else{
		return false;
	}
}
?>
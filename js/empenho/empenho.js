// JavaScript Document
function totalItensEmpenho(){
	var qtd = document.getElementById('qtd').value;
	var valor = document.getElementById('valor_unit').value;
	
	if (qtd == ""){
		qtd = 0.00;
	}
	else{
		qtd = parseInt(qtd,10);
	}
	
	if (valor == ""){
		valor = 0.00;
	}
	
	
	total = qtd * moedaPadrao(valor);
	total = parseFloat(total).toFixed(2);
	
	//alert(total.substr(-4,3));
	$('#valor_total').val(total);
	
	
	$('#valor_total').priceFormat({
                    prefix: '',
                    centsSeparator: ',',
                    thousandsSeparator: '.'
    });
}

function loadPrice(){
	 $(function(){
		$('#valor_unit').priceFormat({
			prefix: '',
			centsSeparator: ',',
			thousandsSeparator: '.'
			
		});
		
		$('#valor_total').priceFormat({
						prefix: '',
						centsSeparator: ',',
						thousandsSeparator: '.'
		});
		
		$('#valor_empenho').priceFormat({
			prefix: '',
			centsSeparator: ',',
			thousandsSeparator: '.'
			
		});
		
		$('#id_item_contrato').change(function() {
			$.ajax({
				type: 'post',
				url: '/sgo/controles/valor_unit_contrato.php',
				data: {id_ic : $('#id_item_contrato option:selected').val()},
				beforeSend: function(){},
				success: function(data){
					
					$('#valor_unit').val(data);
					$('#qtd').focus();
					totalItensEmpenho();
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
		});
		
		
	});
}

function itemEmpenhoControle(idEmp, idItem, action) {
	    var ide 			= idEmp;
        var idIC 			= $('#id_item_contrato option:selected').val();
		var valorUnit 		= $('#valor_unit').val();
		var qtd	    		= $('#qtd').val();
		var valorTotal 		= $('#valor_total').val();
		
		
		if(action == "novo"){
			if(ide != '' && idIC != '' && valorUnit != '' && qtd != '' && valorTotal != ''){
					$.ajax({
						type: 'post',
						url: '/sgo/itens/itens_empenho_controle.php',
						data: {
								ide         : ide,
								idIC		: idIC,
								valorUnit	: valorUnit,
								qtd			: qtd,
								valorTotal	: valorTotal,
								action	    : action
								
							  },
							  
						beforeSend: function(){
							$('#itens').html("<img src='/sgo/imagens/load.gif'/>");
						},
						success: function(data){
							$('#itens').html(data);
							loadPrice();
						},
						error: function(erro){
							alert("Aconteceu algum erro na Requisição.");
							
						}
					});
					
			}
		}
		
		if(action == "edit"){
			if(ide != '' && idItem != '' ){
					$.ajax({
						type: 'post',
						url: '/sgo/itens/itens_empenho_controle.php',
						data: {
								ide         : ide,
								idItem      : idItem,
								action	    : action
								
							  },
							  
						beforeSend: function(){
							$('#itens').html("<img src='/sgo/imagens/load.gif'/>");
						},
						success: function(data){
							$('#itens').html(data);
							loadPrice();
						},
						error: function(erro){
							alert("Aconteceu algum erro na Requisição.");
							
						}
					});
					
			}
		}
		
		
		if(action == "confirmEdit"){
			if(idItem != '' ){
					$.ajax({
						type: 'post',
						url: '/sgo/itens/itens_empenho_controle.php',
						data: {
								ide         : ide,
								idItem      : idItem,
								idIC		: idIC,
								valorUnit	: valorUnit,
								qtd			: qtd,
								valorTotal	: valorTotal,
								action	    : action
								
							  },
							  
						beforeSend: function(){
							$('#itens').html("<img src='/sgo/imagens/load.gif'/>");
						},
						success: function(data){
							$('#itens').html(data);
							loadPrice();
						},
						error: function(erro){
							alert("Aconteceu algum erro na Requisição.");
							
						}
					});
					
			}
		}
		
		if(action == "excluir"){
			if(idItem != '' && confirm("Deseja realmente excluir este ITEM.") == 1){
					$.ajax({
						type: 'post',
						url: '/sgo/itens/itens_empenho_controle.php',
						data: {
								ide         : ide,
								idItem      : idItem,
								action	    : action
								
							  },
							  
						beforeSend: function(){
							$('#itens').html("<img src='/sgo/imagens/load.gif'/>");
						},
						success: function(data){
							$('#itens').html(data);
							loadPrice();
						},
						error: function(erro){
							alert("Aconteceu algum erro na Requisição.");
							
						}
					});
					
			}
		}
}

$(document).ready(function(){
	$('#id_dotacao').change(function() {
			
			$.ajax({
				type: 'post',
				url: '/sgo/result/result_empenhos.php',
				data: {id_dot : $('#id_dotacao option:selected').val(),
						origem: 'd'
					   },
				beforeSend: function(){},
				success: function(data){
					
					$('#resultE').html(data);
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
	});
	
	$('#id_c').change(function() {
			
			$.ajax({
				type: 'post',
				url: '/sgo/result/result_empenhos.php',
				data: {idc : $('#id_c option:selected').val(),
						origem: 'c'
					   },
				beforeSend: function(){},
				success: function(data){
					
					$('#resultE').html(data);
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
	});
	
	$('#id_contrato').change(function() {
			
			$.ajax({
				type: 'post',
				url: '/sgo/controles/combo_dotacoes.php',
				data: {id_contrato : $('#id_contrato option:selected').val()},
				beforeSend: function(){},
				success: function(data){
					
					$('#result_dot').html(data);
					var spryselect3 = new Spry.Widget.ValidationSelect("spryselect3", {validateOn:["blur", "change"]});
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
	});
	
	$('#id_item_contrato').change(function() {
			$.ajax({
				type: 'post',
				url: '/sgo/controles/valor_unit_contrato.php',
				data: {id_ic : $('#id_item_contrato option:selected').val()},
				beforeSend: function(){},
				success: function(data){
					
					$('#valor_unit').val(data);
					$('#qtd').focus();
					totalItensEmpenho();
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
	});
	
	$('#nota_empenho').keyup(function() {
		
			$.ajax({
				type: 'post',
				url: '/sgo/result/result_empenhos.php',
				data: {nota_empenho : $('#nota_empenho').val(),
					   origem : 'e'},
				beforeSend: function(){
					$('#resultE').html("<img src='/sgo/imagens/load.gif'/>");
				},
				success: function(data){
					$('#resultE').html(data);
				},
				error: function(erro){
					alert("Aconteceu algum erro na Requisição.");
				}
			});
		
    });
});
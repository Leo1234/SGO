function getRequestObject() {
    
	// Fun��o que retorna o objeto que ser� usado para fazer requisi��es.
	// Caso o navegador n�o tenha suporte, a fun��o retorna falso.
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
	} else {
		return false;
	}
	
	return xmlhttp;
}

URL ='';
function LoadData(url,Div,Param) {
URL = url;		
// Fun��o que recebe uma URL e d� um GET nessa URL, ou seja, faz uma requisi��o.



requestObject = getRequestObject();
if (requestObject) {
	
	requestObject.onreadystatechange = function(){requestObjectStateChanged(Div)};
	requestObject.open("POST", url, true);
	
	requestObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
	requestObject.setRequestHeader("Content-length", Param.length);
	requestObject.setRequestHeader("Connection", "close");


	//requestObject.setRequestHeader('Content-Type', "application/x-www-form-urlencoded; charset=iso-8859-1");	
	requestObject.send(Param);

} else {
alert('Seu navegador n�o tem suporte para essa tecnologia.');
}
}

function requestObjectStateChanged(Div) {
	// Essa fun��o � acionada pela fun��o acima. Na verdade � um evento (onreadystatechange) do
	// objeto que faz a requisi��o que a aciona toda vez que seu estado altera.
	// Quando a requisi��o termina com sucesso, coloco o resultado dentro do div que est� no
	// body da p�gina.
	if (requestObject.readyState==1) {
		document.getElementById(Div).innerHTML ="<img src='imagens/load.gif' >";
	}else{
		if (requestObject.readyState==4) {
			if (requestObject.status==200) {
				
				document.getElementById(Div).innerHTML = requestObject.responseText;
				
				if(URL == "form_entrada"){
					alert(URL);
					var spryselect1 = new Spry.Widget.ValidationSelect("spryselect1",{validateOn:["blur", "change"]});
					var spryselect3 = new Spry.Widget.ValidationSelect("spryselect3",{validateOn:["blur", "change"]});
				}
				
				var spryselect2 = new Spry.Widget.ValidationSelect("spryselect2",{validateOn:["blur", "change"]});
				var sprytextfield1 = new Spry.Widget.ValidationTextField("sprytextfield1", "none", {validateOn:["blur", "change"]});
				var sprytextfield2 = new Spry.Widget.ValidationTextField("sprytextfield2", "date", {format:"dd/mm/yyyy", useCharacterMasking:true, validateOn:["blur", "change"]});
				var sprytextfield3 = new Spry.Widget.ValidationTextField("sprytextfield3", "none", {validateOn:["blur", "change"]});

				
				
				
				
			} else {
				alert('Erro ao carregar os dados.');
			}
		}
	}
}



//Validar qualque form com ajuda do Framework SPRY
function validar(form){
	
	if (Spry.Widget.Form.validate(form) == false) {
			return false;
		}
	else{
		return true;
	}
}

function validarForm(form,cache,data,url,div,param){
		
	    if (validar(form) == false) {
			if(cache){
				Spry.Widget.Form.destroy(form);//Limpa o cache do spry
			}
			return false;
		}
		else{
			
			switch(data){
				case 1:	 LoadData(url,div,param); break;
				case 2:	 LoadData2(url,div,param); break;
				case 3:	 LoadData3(url,div,param); break;
				case 4:	 LoadData4(url,div,param); break;
				case 5:	 LoadData5(url,div,param); break;
				default: window.location = url+"?"+param;
			}
			
		}

		
}

function Logar(User,Pass){
	var User;
	var Pass;
	var  KeyContinue = true;
	
	Login = document.getElementById(User);
	Senha = document.getElementById(Pass);
	
	/*Valoda Campos*/	
	if (Login.value == ""){
		alert("O campos usu�rio est� em branco!");
		 KeyContinue = false;
	}else{
		if (Senha.value == ""){
			alert("O campos senha est� em branco!");
			 KeyContinue = false;
		}else{
			 KeyContinue = true;
		}
	}	
	
	
	if (KeyContinue == true){
		LoadData('logar.php','conteudo','acao=logar&usuario='+Login.value+'&senha='+Senha.value);
	}
}





function SalvarCadastro(Type,IdCadastro){
	
	KeyContinue = true;

	Nome	 	 = document.getElementById('Nome');
	EndRes		 = document.getElementById('EndResid');
	EndPro		 = document.getElementById('EndProf');
	Identidade	 = document.getElementById('Identidade');
	Cpf 		 = document.getElementById('Cpf');
	IdSegmento	 = document.getElementById('IdSegmento');
	IdEixo 		 = document.getElementById('IdEixo');
	
	
	if (Nome.value == ""){
		alert("Voc� deve digitar um nome!");
		KeyContinue = false
	}else{
		if (Identidade.value == ""){
			alert("Voc� deve digitar um asssunto!");
			KeyContinue = false;
		}else{
			if (Cpf.value == ""){
				alert("Voc� deve digitar uma cpf!");
				KeyContinue = false;
			}else{
				if (IdSegmento.value == ""){
					alert("Voc� deve escolher um segmento!");
					KeyContinue = false;
				}else{
					KeyContinue = true;
				}
			}
		}
	}
	
	
	if (Type == "editar"){
		TypeAction = "editar"
	}else{
		TypeAction = "insert";
	}
	
	if (KeyContinue == true){
		LoadData('controles/insert_cadastro.php','conteudo','id_cadastro='+IdCadastro+'&acao='+TypeAction+'&nome='+Nome.value+'&end_res='+EndRes.value+'&end_pro='+EndPro.value+'&identidade='+Identidade.value+'&cpf='+Cpf.value+'&id_segmento='+IdSegmento.value+'&id_eixo='+IdEixo.value);
	}
	
}
function isCurrentBrowser(browserName)
{
	if(navigator.userAgent.search(browserName) != -1)
		return true;
	else
		return false;
}
 
function blockNaN(evt)
{
    //Capturar o evento do teclado
    if (!evt)
        evt = window.event;
 
    var charCode = "";
 
    //Pegar o c�digo da tecla pressionada:
    //Para isso o javascript tem que verificar qual o navegador do usu�rio,
    //por conta das incompatibilidades do IE
    if(isCurrentBrowser("MSIE"))
        charCode = evt.keyCode;
    else
        charCode = evt.charCode;
 
    var evtChar = String.fromCharCode(charCode);
 
    //Verifica se o que foi digitado foi n�mero ou n�o.
    //Verifica se foram pressionadas as teclas 'Enter', 'Backspace', 
    //alguma tecla de fun��o ou de atalho.
    //Se cair em uma dessas condi��es, o caractere digitado ser� bloqueado
    if((evtChar.search(/[^0-9]/i) != -1) && (charCode != 0))
    {
        if(isCurrentBrowser("MSIE"))
            evt.returnValue = false;
        else
            evt.preventDefault();
    }
}

function troca() { 
var string = document.cadastro.nome.value; 
/* 
para n�o aceitar n�meros use: 0-9
para n�o aceitar letras use: a-z
*/ 
var string = string.replace(/([0-9])/g, ""); 
document.cadastro.nome.value=string; 
} 

function maskIt(w,e,m,r,a){
	// Cancela se o evento for Backspace
	if (!e) var e = window.event
	if (e.keyCode) code = e.keyCode;
	else if (e.which) code = e.which;
	// Vari�veis da fun��o
	var txt  = (!r) ? w.value.replace(/[^\d]+/gi,'') : w.value.replace(/[^\d]+/gi,'').reverse();
	var mask = (!r) ? m : m.reverse();
	var pre  = (a ) ? a.pre : "";
	var pos  = (a ) ? a.pos : "";
	var ret  = "";
	if(code == 9 || code == 8 || txt.length == mask.replace(/[^#]+/g,'').length) return false;
	// Loop na m�scara para aplicar os caracteres
	for(var x=0,y=0, z=mask.length;x<z && y<txt.length;){
		if(mask.charAt(x)!='#'){
		ret += mask.charAt(x); x++; 
		} 
		else {
		ret += txt.charAt(y); y++; x++; 
		} 
	}
	// Retorno da fun��o
	ret = (!r) ? ret : ret.reverse()        
	w.value = pre+ret+pos; 

}
	// Novo m�todo para o objeto 'String'
String.prototype.reverse = function(){return this.split('').reverse().join(''); };

function number_format( number, decimals, dec_point, thousands_sep ) {
	var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
	var d = dec_point == undefined ? "," : dec_point;
	var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
/* Autor: Fausto Sampaio */
function formatar_moeda(campo, separador_milhar, separador_decimal, tecla) {
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? tecla.which : tecla.keyCode;
	
	//alert(whichCode);

	if (whichCode == 13) return true; // Tecla Enter
	if (whichCode == 8) return true; // Tecla Delete
	if (whichCode == 0) return true; // Tecla Delete
	key = String.fromCharCode(whichCode); // Pegando o valor digitado
	if (strCheck.indexOf(key) == -1) return false; // Valor inv�lido (n�o inteiro)
	len = campo.value.length;
	for(i = 0; i < len; i++)
	if ((campo.value.charAt(i) != '0') && (campo.value.charAt(i) != separador_decimal)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(campo.value.charAt(i))!=-1) aux += campo.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) campo.value = '';
	if (len == 1) campo.value = '0'+ separador_decimal + '0' + aux;
	if (len == 2) campo.value = '0'+  separador_decimal + aux;
	
	
	if (len >= 11) return false;

	if (len > 2) {
		aux2 = '';

		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += separador_milhar;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}

		campo.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
		campo.value += aux2.charAt(i);
		campo.value += separador_decimal + aux.substr(len - 2, len);
	}

	return false;
}

/* Autor: Fausto Sampaio */
function formatar_moeda2(campo, separador_milhar, separador_decimal, tecla) {
	
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? tecla.which : tecla.keyCode;

	if (whichCode == 13) return true; // Tecla Enter
	if (whichCode == 8) return true; // Tecla Delete
	key = String.fromCharCode(whichCode); // Pegando o valor digitado
	if (strCheck.indexOf(key) == -1) return false; // Valor inv�lido (n�o inteiro)
	len = campo.value.length;
	for(i = 0; i < len; i++)
	if ((campo.value.charAt(i) != '0') && (campo.value.charAt(i) != separador_decimal)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(campo.value.charAt(i))!=-1) aux += campo.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) campo.value = '';
	if (len == 1) campo.value = '0'+ separador_decimal + '0' + '0' + aux;
	if (len == 2) campo.value = '0'+  separador_decimal + '0' + aux;
	if (len == 3) campo.value = '0'+  separador_decimal + aux;
	
	if (len >= 8) return false;

	if (len > 3) {
		aux2 = '';

		for (j = 0, i = len - 4; i >= 0; i--) {
			if (j == 3) {
				aux2 += separador_milhar;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}

		campo.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
		campo.value += aux2.charAt(i);
		campo.value += separador_decimal + aux.substr(len - 3, len);
	}

	return false;
}




//num = n�mero a formatar; nDecimals = n�mero de casas decimais
function truncar(num, nDecimals){
    var toReturn = "";
    num = "" + num;
    var pointIdx = num.indexOf('.');
    //garantir que � decimal
    if(pointIdx == -1){
        num += '.';
        pointIdx = num.indexOf('.');
    }
    var limit = pointIdx + nDecimals + 1;
    //quando se tem mais casas decimais que aquelas que se pretende
    if(num.length > limit){
        //arredondar para baixo
        if(num[limit] < '5')
        {
            for(var iter = 0; iter < limit; ++iter)
            {
                toReturn += num.charAt(iter);
            }
            return toReturn;
        }
        //arredondar para cima
        else{
            for(var iter = 0; iter < pointIdx + nDecimals; ++iter){
                toReturn += num.charAt(iter);
            }
            var lastNum = parseInt(num.charAt(pointIdx + nDecimals)) + parseInt(1);
            toReturn += lastNum;
            return toReturn;
        }
    }
    //acrescentar 0s � direita se necess�rio
    if(num.length < limit){
        while(num.length < limit){
            num += '0';
        }
    }
    return num;
}

//funcao que recebe um valor no formatao 0.000,00 e tranforma em 0000.00
function moedaPadrao(valor){
	var valor2 = "";
	if(valor.length <= 6){
			valor2 = valor.replace(",",".");		
		}
		else{
			valor = valor.replace(",",".");
			valor = valor.split(".");
			var tam = valor.length;
			for(var x = 0; x <= tam-1; x++){
				if(x == tam-1)
					valor2 = valor2+"."+valor[x];
				else
					valor2 = valor2+valor[x];
					
			}
		}
		
		valor = Number(valor2);
		return valor
}

//funcao que recebe um valor no formata 0000.00 e tranforma em 0.000,00
function moedaReal(valor){
	var valor2 = "";
	if(valor.length <= 6){
			valor2 = valor.replace(".",",");
		}
		else{
			valor = valor.replace(".",",");
			valor = valor.split(".");
			var tam = valor.length;
			for(var x = 0; x <= tam-1; x++){
				if(x == tam-1)
					valor2 = valor2+"."+valor[x];
				else
					valor2 = valor2+valor[x];
					
			}
		}
		
		valor = Number(valor2);
		return valor
}



function jumpto(form,campoatual, proxcampo)
 {
	var tamanho_max = eval('document.'+form+'.' + campoatual + '.maxLength;');
	var tamanho_atual = eval('document.'+form+'.' + campoatual + '.value.length;');
	if (tamanho_atual == tamanho_max)
		{ 
		   eval('document.'+form+'.' + proxcampo + '.focus();');
		}
 }
 
 
 //Validar qualque form com ajuda do Framework SPRY
function validar(form){
	
	if (Spry.Widget.Form.validate(form) == false) {
			return false;
		}
	else{
		return true;
	}
}

$(document).ready(function(){
	$(".upper, #number").keyup(function(){
		$(this).val($(this).val().toUpperCase());
	});
	
	$(':input').focus(function(){
		$(this).selector = true;
	});
	
	$('.number').keypress(function(event) {
		var tecla = (window.event) ? event.keyCode : event.which;
		
		if ((tecla > 47 && tecla < 58))
			 return true;
		else {
			if(tecla == 8 || tecla == 0 ) 
				return true;
			else 
				return false;
		}
	});
	
	
	
	
});

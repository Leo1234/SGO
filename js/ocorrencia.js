v = 0 //total de vítimas
a = 0 // total de acusados
h = 0 //mortos
l = 0
ar = 0
d = 0
function addDadosHomicidios() {
    $("#divHomicidioModal").dialog("open");
}
function addDadosLesoes() {
    $("#divLesaoModal").dialog("open");
}
function addDadosArmas() {
    $("#divArmaModal").dialog("open");
}
function addDadosDrogas() {
    $("#divDrogaModal").dialog("open");


}
function addDadosVeiculos() {
    $("#divVeiculoModal").dialog("open");
}



$(function() {
    $("#divVeiculoModal").dialog({
        autoOpen: false,
        height: 250,
        width: 900,
        modal: true,
        buttons: {
            "Add dados": function() {
                addVeiculo();
                $("input[type=checkbox][id='veiculo']").attr('disabled', 'disabled');
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(":checkbox[id*=veiculo]").removeAttr("checked");
                $(this).dialog("close");
            }
        },
        close: function() {

            $(this).dialog("close");
        }
    });
});

$(function() {
    $("#divDrogaModal").dialog({
        autoOpen: false,
        height: 250,
        width: 900,
        modal: true,
        buttons: {
            "Add dados": function() {
                addDroga();
                $("input[type=checkbox][id='drog']").attr('disabled', 'disabled');
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(":checkbox[id*=drog]").removeAttr("checked");
                $(this).dialog("close");
            }
        },
        close: function() {
            $(this).dialog("close");
        }
    });


});

$(function() {
    $("#divArmaModal").dialog({
        autoOpen: false,
        height: 250,
        width: 900,
        modal: true,
        buttons: {
            "Add dados": function() {
                addArma();
                $("input[type=checkbox][id='arma']").attr('disabled', 'disabled');
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(":checkbox[id*=arma]").removeAttr("checked");
                $(this).dialog("close");
            }
        },
        close: function() {
            $(this).dialog("close");
        }
    });
});

$(function() {
    $("#divLesaoModal").dialog({
        autoOpen: false,
        height: 200,
        width: 900,
        modal: true,
        buttons: {
            "Add dados": function() {
                addLesao();
                $("input[type=checkbox][id='lesao']").attr('disabled', 'disabled');
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(":checkbox[id*=lesao]").removeAttr("checked");
                $(this).dialog("close");
            }
        },
        close: function() {
            $(this).dialog("close");
        }
    });
});



$(function() {
    $("#divHomicidioModal").dialog({
        autoOpen: false,
        height: 200,
        width: 900,
        modal: true,
        buttons: {
            "Add dados": function() {
                addHomicidio();
                $("input[type=checkbox][id='homicidio']").attr('disabled', 'disabled');
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(":checkbox[id*=homicidio]").removeAttr("checked");
                $(this).dialog("close");
            }
        },
        close: function() {
            resetForm('formHomicidio');
            $(this).dialog("close");
        }
    });
});


$(function() {
    $("#divAcusadosModal").dialog({
        autoOpen: false,
        height: 300,
        width: 900,
        modal: true,
        buttons: {
            "Add Acusado": function() {
                addAcusado();
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            resetForm('formAcusado');
            $(this).dialog("close");
        }
    });

    $("#btacu")
            .button()
            .click(function() {
                $("#divAcusadosModal").dialog("open");
            });
});


$(function() {
    $("#divVitimaModal").dialog({
        autoOpen: false,
        height: 300,
        width: 900,
        modal: true,
        buttons: {
            "Add Vítima": function() {
                addVitima();
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            resetForm('formVitima');
            $(this).dialog("close");
        }
    });

    $("#btvit")
            .button()
            .click(function() {
                $("#divVitimaModal").dialog("open");
            });
});



$(function() {
    $("#datepicker").datepicker({dateFormat: "dd/mm/yy"});
    // getter
    var monthNames = $("#datepicker").datepicker("option", "monthNames");
    // setter
    $("#datepicker").datepicker("option", "monthNames", ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]);
    // getter
    var dayNamesMin = $("#datepicker").datepicker("option", "dayNamesMin");
    // setter
    $("#datepicker").datepicker("option", "dayNamesMin", ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]);
});

function addAcusado() {
    var nome = $("#nome").val();
    var apelido = $("#apelido");
    var sexo = $("#sexo");
    var idade = $("#idade");
    var rua = $("#rua");
    var numero = $("#numero");
    var bairro = $("#bairro");
    var genitora = $("#genitora");
    var caracteristicas = $("#caracteristicas");
    var municipio = $("#municipio option:selected").text();

    var allFields = $([]).add(nome).add(apelido).add(sexo).add(idade).add(rua).add(numero).add(bairro).add(municipio).add(genitora).add(caracteristicas);
    var hiddens = "";
    hiddens += "<input id='nome" + a + "' type='hidden' name='nome[]' value='" + nome + "'></input>";
    hiddens += "<input id='apelido" + a + "' type='hidden' name='apelido[]' value='" + apelido.val() + "'></input>";
    hiddens += "<input id='sexo" + a + "' type='hidden' name='sexo[]' value='" + sexo.val() + "'></input>";
    hiddens += "<input id='idade" + a + "' type='hidden' name='idade[]' value='" + idade.val() + "'></input>";
    hiddens += "<input id='genitora" + a + "' type='hidden' name='genitora[]' value='" + genitora.val() + "'></input>";
    hiddens += "<input id='caracteristicas" + a + "' type='hidden' name='caracteristicas[]' value='" + caracteristicas.val() + "'></input>";
    hiddens += "<input id='rua" + a + "' type='hidden' name='rua[]' value='" + rua.val() + "'></input>";
    hiddens += " <input id='numero" + a + "' type='hidden' name='idade[]' value='" + numero.val() + "'></input>";
    hiddens += "<input id='bairro" + a + "' type='hidden' name='bairro[]' value='" + bairro.val() + "'></input> ";
    hiddens += "<input id='municipio" + a + "' type='hidden' name='municpio[]' value='" + municipio + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Acusados</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Nome </td>";
    tbl += "<td > Apelido</td>";
    tbl += "<td >Sexo </td>";
    tbl += "<td > Idade </td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + nome + "</td>";
    tbl += "<td>" + apelido.val() + "</td>";
    tbl += "<td>" + sexo.val() + " </td>";
    tbl += "<td>" + idade.val() + "</td>";
    tbl += "</tr>";
    tbl += "</table></br>";

    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Genitora </td>";
    tbl += "<td > Caracteísticas</td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td> " + genitora.val() + "</td>";
    tbl += "<td>" + caracteristicas.val() + "</td>";
    tbl += "</tr>";
    tbl += "</table></br>";

    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Residência </td>";
    tbl += "<td > Número</td>";
    tbl += "<td >Bairro </td>";
    tbl += "<td > Cidade </td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td> " + rua.val() + "</td>";
    tbl += "<td>" + numero.val() + "</td>";
    tbl += "<td> " + bairro.val() + " </td>";
    tbl += "<td> " + municipio + " </td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeModal').append(tbl);
    //allFields.val("");
    //resetForm('formAcusado');
    a++;
    //var t = $('#tbAcusado table');
    $('#divRecebeModal').append("Acusado: " + a);


}
function addVitima() {
    var nome = $("#nomev");
    var sexo = $("#sexov");
    var idade = $("#idadev");
    var rua = $("#ruav");
    var numero = $("#numerov");
    var bairro = $("#bairrov");
    var municipio = $("#municipiov option:selected").text();

    var allFields = $([]).add(nome).add(sexo).add(idade).add(rua).add(numero).add(bairro).add(municipio);
    var hiddens = "";
    hiddens += "<input id='nomev" + v + "' type='hidden' name='nomev[]' value='" + nome.val() + "'></input>";
    hiddens += "<input id='sexov" + v + "' type='hidden' name='sexov[]' value='" + sexo.val() + "'></input>";
    hiddens += "<input id='idadev" + v + "' type='hidden' name='idadev[]' value='" + idade.val() + "'></input>";
    hiddens += "<input id='ruav" + v + "' type='hidden' name='ruav[]' value='" + rua.val() + "'></input>";
    hiddens += " <input id='numerov" + v + "' type='hidden' name='idadev[]' value='" + numero.val() + "'></input>";
    hiddens += "<input id='bairrov" + v + "' type='hidden' name='bairrov[]' value='" + bairro.val() + "'></input> ";
    hiddens += "<input id='municipiov" + v + "' type='hidden' name='municpiov[]' value='" + municipio + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Vítima</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Nome </td>";
    tbl += "<td >Sexo </td>";
    tbl += "<td > Idade </td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + nome.val() + "</td>";
    tbl += "<td>" + sexo.val() + " </td>";
    tbl += "<td>" + idade.val() + "</td>";
    tbl += "</tr>";
    tbl += "</table></br>";

    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Residência </td>";
    tbl += "<td > Número</td>";
    tbl += "<td >Bairro </td>";
    tbl += "<td > Cidade </td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td> " + rua.val() + "</td>";
    tbl += "<td>" + numero.val() + "</td>";
    tbl += "<td> " + bairro.val() + " </td>";
    tbl += "<td> " + municipio + " </td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeModalVitima').append(tbl);
    allFields.val("");
    //resetForm('formVitima');
    v++;
    //var t = $('#tbAcusado table');
    $('#divRecebeModalVitima').append("total de vítima(s) adicionada(s): " + v);


}

function addHomicidio() {

    var qtdM = $("#qtdM");
    var tpm = $("#tpm");
    var presidio = $("input[name='presidio']:checked").val();


    var allFields = $([]).add(qtdM).add(tpm).add(presidio);
    var hiddens = "";
    hiddens += "<input id='qtdM" + h + "' type='hidden' name='qtdM[]' value='" + qtdM.val() + "'></input>";
    hiddens += "<input id='tpm" + h + "' type='hidden' name='tpm[]' value='" + tpm.val() + "'></input>";
    hiddens += "<input id='presidio" + h + "' type='hidden' name='presidio[]' value='" + presidio + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Dados Homicídio</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Qtd </td>";
    tbl += "<td >Tipo </td>";
    tbl += "<td > Presídio </td>";
    tbl += "<td > Ação </td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + qtdM.val() + "</td>";
    tbl += "<td>" + tpm.val() + " </td>";
    tbl += "<td>" + presidio + "</td>";
    tbl += "<td><img onClick='apagaDivHomicidio()' class='btnDelCurs' src='imagens/delete128.png' width='16' height='16'/></td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeHomicidio').append(tbl);
    allFields.val("");
    resetFormHomicidio('formHomicidio');
    h++;
    //var t = $('#tbAcusado table');
    $('#divRecebeHomicidio').append("Homicidio(s) add " + h);


}

function addDroga() {

    var qtdD = $("#qtdD");
    var droga = $("#droga option:selected").text();
    var dD = $("#dD");


    var allFields = $([]).add(qtdD).add(dD).add(droga);
    var hiddens = "";
    hiddens += "<input id='qtdD" + d + "' type='hidden' name='qtdD[]' value='" + qtdD.val() + "'></input>";
    hiddens += "<input id='dD" + d + "' type='hidden' name='dD[]' value='" + dD.val() + "'></input>";
    hiddens += "<input id='droga" + d + "' type='hidden' name='droga[]' value='" + droga + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Dados Droga</legend>";
    tbl += "<table  id='tblDroga' width = '80%' border='1'>";
    tbl += '<THEAD>';
    tbl += "<tr>";
    tbl += "<td> <strong>Entorpecente</strong></td>";
    tbl += "<td >QTD </td>";
    tbl += "<td >Descrição</td>";
    tbl += "<td >Ação</td>";
    tbl += "</tr>";
    tbl += '</THEAD>';
    tbl += '<TBODY>';
    tbl += "<tr>";
    tbl += "<td>" + droga + "</td>";
    tbl += "<td>" + qtdD.val() + " </td>";
    tbl += "<td>" + dD.val() + " </td>";
    tbl += "<td>" + hiddens + " <img onClick='apagaDivDroga()' class='btnDelCurs' src='imagens/delete128.png' width='16' height='16'/></td>";
    tbl += "</tr>";
    tbl += '</TBODY>';
    tbl += "</table></br>";
    tbl += "</fieldset>";
    tbl += "<button type='button'  id='btDrog' onclick='addDadosDrogas();' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only'>add Droga</button>";

    var tr = "<tr>";
    tr += "<td>" + droga + "</td>";
    tr += "<td>" + qtdD.val() + " </td>";
    tr += "<td>" + dD.val() + " </td>";
    tr += "<td><img class='btnDelDroga' src='imagens/delete128.png' width='16' height='16'/></td>";
    tr += "<td> " + hiddens + " </td>";

    var t = $('#divRecebeDroga table');
    if (t.length == 0) {
        $('#divRecebeDroga').append(tbl);
    }
    if (t.length == 1) {

        $("#divRecebeDroga  tbody	").append(tr);
    }

    //$('#divRecebeDroga').append(tbl);
    allFields.val("");
    d++;
    //var t = $('#tbAcusado table');
    y = $("#tblDroga  tbody	tr").length;

    //$('#divRecebeDroga').append("</br>Droga(s) add " + y);

    $(".btnDelDroga").bind("click", delDroga);

}

function delDroga() {
    var trs = $('#divRecebeDroga  TBODY  tr');
    if (trs.length == 1) {
        var lin = $(this).parent().parent().parent().parent();
        lin.remove();
        return true
    }
    else {
        var lin = $(this).parent().parent(); //tr
        lin.remove();
        return true
    }

    return false;
}


function addVeiculo() {

    var qtdV = $("#qtdV");
    var dV = $("#dV");


    var allFields = $([]).add(qtdV).add(dV);
    var hiddens = "";
    hiddens += "<input id='qtdV" + v + "' type='hidden' name='qtdV[]' value='" + qtdV.val() + "'></input>";
    hiddens += "<input id='dV" + v + "' type='hidden' name='dV[]' value='" + dV.val() + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Dados Veículo</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Qtd </td>";
    tbl += "<td >Descrição</td>";
    tbl += "<td >Ação</td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + qtdV.val() + "</td>";
    tbl += "<td>" + dV.val() + " </td>";
    tbl += "<td><img onClick='apagaDivVeiculo()' class='btnDelCurs' src='imagens/delete128.png' width='16' height='16'/></td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeVeiculo').append(tbl);
    allFields.val("");
    v++;
    //var t = $('#tbAcusado table');
    $('#divRecebeVeiculo').append("Veículo(s) add " + v);


}


function addArma() {

    var qtdA = $("#qtdA");
    var tpA = $("#tpA");
    var dA = $("#dA");


    var allFields = $([]).add(qtdA).add(tpA).add(dA);
    var hiddens = "";
    hiddens += "<input id='qtdA" + ar + "' type='hidden' name='qtdA[]' value='" + qtdA.val() + "'></input>";
    hiddens += "<input id='tpA" + ar + "' type='hidden' name='tpA[]' value='" + tpA.val() + "'></input>";
    hiddens += "<input id='dA" + ar + "' type='hidden' name='dA[]' value='" + dA.val() + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Dados Arma</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Qtd </td>";
    tbl += "<td >Tipo </td>";
    tbl += "<td >Descrição</td>";
    tbl += "<td >Ação</td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + qtdA.val() + "</td>";
    tbl += "<td>" + tpA.val() + " </td>";
    tbl += "<td>" + dA.val() + " </td>";
    tbl += "<td><img onClick='apagaDivArma()' class='btnDelCurs' src='imagens/delete128.png' width='16' height='16'/></td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeArma').append(tbl);
    allFields.val("");
    ar++;
    //var t = $('#tbAcusado table');
    $('#divRecebeArma').append("Armas(s) add " + ar);


}

function addLesao() {

    var qtdL = $("#qtdL");
    var tpL = $("#tpL");


    var allFields = $([]).add(qtdL).add(tpL);
    var hiddens = "";
    hiddens += "<input id='qtdL" + l + "' type='hidden' name='qtdL[]' value='" + qtdL.val() + "'></input>";
    hiddens += "<input id='tpL" + l + "' type='hidden' name='tpL[]' value='" + tpL.val() + "'></input>";

    var tbl = "<fieldset>";
    tbl += " <legend>Dados Lesão</legend>";
    tbl += "<table  id='t2' width = '80%'>";
    tbl += "<tr>";
    tbl += "<td> Qtd </td>";
    tbl += "<td >Tipo </td>";
    tbl += "<td >Ação</td>";
    tbl += "</tr>";
    tbl += "<tr>";
    tbl += "<td>" + qtdL.val() + "</td>";
    tbl += "<td>" + tpL.val() + " </td>";
    tbl += "<td><img onClick='apagaDivLesao()' class='btnDelCurs' src='imagens/delete128.png' width='16' height='16'/></td>";
    tbl += "<td> " + hiddens + " </td>";
    tbl += "</tr>";
    tbl += "</table></br>";
    tbl += "</fieldset>";


    $('#divRecebeLesao').append(tbl);
    allFields.val("");
    l++;
    //var t = $('#tbAcusado table');
    $('#divRecebeLesao').append("Lesionados(s) add " + l);



}

function resetFormHomicidio(id) {
    $('#' + id).each(function() {
        this.reset();
    });

}

function resetForm(id) {
    $('#' + id).each(function() {
        this.reset();
    });

    $('#municipio').attr('checked', false);
}


function apagaDivLesao() {
    $('#divRecebeLesao').empty();
    $(":checkbox[id*=lesao]").removeAttr("checked")
    $("input[type=checkbox][id='lesao']").removeAttr('disabled');
}
function apagaDivArma() {
    $('#divRecebeArma').empty();
    $(":checkbox[id*=arma]").removeAttr("checked")
    $("input[type=checkbox][id='arma']").removeAttr('disabled');
}

function apagaDivHomicidio() {
    $('#divRecebeHomicidio').empty();
    $(":checkbox[id*=homicidio]").removeAttr("checked");
    $("input[type=checkbox][id='homicidio']").removeAttr('disabled');
}

function apagaDivDroga() {
    $('#divRecebeDroga').empty();
    $(":checkbox[id*=drog]").removeAttr("checked");
    $("input[type=checkbox][id='drog']").removeAttr('disabled');
}

function apagaDivVeiculo() {
    $('#divRecebeVeiculo').empty();
    $(":checkbox[id*=veiculo]").removeAttr("checked");
    $("input[type=checkbox][id='veiculo']").removeAttr('disabled');
}
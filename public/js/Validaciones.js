$(document).ready(function(){

  //CargarTabla();
   //CargarTablaCotizacion();

});
function CargarTabla(){

    $.ajax({
        url: "http://localhost/microbox/crud/ConsultarUsuarios",
        global: false,
        type: "POST",
        data: {},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;

            $.each(data, function (i,item){

                html += '<tr class="fila">'
                html += '<td>'+item['nombre']+'</td>'
                html += '<td>'+item['correo']+'</td>'
                html += '<td>'+item['telefono']+'</td>'
                html += '<td><button name="editar" id="editar" class="btn btn-primary" nombre="'+item['nombre']+'" correo="'+item['correo']+'"  telefono="'+item['telefono']+'"onclick="ActualizarUsuario(this);"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="eliminar" id="eliminar" class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>'
               html += '</tr>';

            });
            $("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}



function ActualizarUsuario(btn) {

    var nombre = $(btn).attr("nombre");
    var telefono = $(btn).attr("telefono");
    var correo = $(btn).attr("correo");

    $("#nombre").val(nombre);
    $("#telefono").val(telefono);
    $("#correo").val(correo);

}


function CargarFotomecanica() {
    $("#myModal").modal("show");
    
}

function DefinicioCajaStandar() {

    var fk_gra = $("#fk_gra").val();
    var fk_onda = $("#val_onda").val();
    var fk_liner = $("#val_liner").val();
    var cod_tro = $("#cod_troquel").val();
    var slotter = $("#val_slotter").val();
    var polimeros = $("#val_polimeros").val();
    var val_combinar = $("#val_combinar").val();
    var liberar = $("#liberar").val();
    var fecha_def = $("#fecha_def").val();
    var colores = $("#colores").val();
    var tipo_p = $("#tipo_p").val();
    
    //probando
    var material = $("#val_material").val();

    
    var botellas = $("#val_botellas").val();
    var val_tipo = $("#val_tipo").val();


console.log(cod_tro);
    if(liberar==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Definicion Liberada - "+fecha_def+"</div>");
        $("#slotter").attr('disabled','disabled');
        $("#polimeros").attr('disabled','disabled');
        $("#contratapa").attr('disabled','disabled');
        $("#liner").attr('disabled','disabled');
        $("#onda").attr('disabled','disabled');
        $("#ancho_bobina").attr('disabled','disabled');
        $("#tipo_pegado").attr('disabled','disabled');
        $("#color_esp").attr('disabled','disabled');
        $("#combinar").attr('disabled','disabled');
        $("#troquel").attr('disabled','disabled');
        $("#id_cotizacion").attr('disabled','disabled');
        $("#combinar_esp").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
        $("#btnGuardae").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');


    }
   
       

    if(cod_tro==2){
        $("#troquel").attr('disabled','disabled');
    }
    else if(cod_tro=="NO"){
        $("#troquel").attr('disabled','disabled');
    }
    
    if(colores==0){
        $("#polimeros").attr('disabled','disabled');
    }
    $("#troquel").val(cod_tro);

    $("#contratapa").val(fk_gra);
    $("#liner").val(fk_liner);
    $("#onda").val(fk_onda);
    $("#slotter").val(slotter);
    $("#polimeros").val(polimeros);
    $("#combinar").val(val_combinar);
    $("#tipo_tabique").val(botellas);
    $("#troquel").val(val_tipo);
    $("#tipo_pegado").val(tipo_p);
    $("#troquel").val(tipo_p);
    
        
    //probando
    $("#material").val(material);
    $("#contratapa2").val(fk_gra);
    $("#onda2").val(fk_onda);
    $("#liner2").val(fk_liner);

    
    if(val_tipo>0){
    	$("#troquel").val(val_tipo);
    }
   

    if(val_combinar==2){
        $("#combinar_esp").attr('disabled','disabled');
    }

    var liberar = $("#liberar").val();

    if(liberar==1){

        $("#troquel").attr('disabled','disabled');
        $("#combinar_esp").attr('disabled','disabled');

    }

}

function llenarAnchoNuevo(){
	  var ancho_nuevo = $("#ancho_nuevo_k").val();
	  
	  //alert(ancho_nuevo);
	  
	  $("#ancho_nuevo_i").val(ancho_nuevo);
	  $("#ancho_nuevo_j").val(ancho_nuevo);
	  
}

function llenarAnchoNuevo2(){
	  var ancho_nuevo = $("#ancho_nuevo2_k").val();
	  
	 // alert(ancho_nuevo);
	  
	  $("#ancho_nuevo2_i").val(ancho_nuevo);
	  $("#ancho_nuevo2_j").val(ancho_nuevo);
	  
}

function llenarAnchoNuevo3(){
	  var ancho_nuevo = $("#ancho_nuevo3_k").val();
	  
	 // alert(ancho_nuevo);
	  
	  $("#ancho_nuevo3_i").val(ancho_nuevo);
	  $("#ancho_nuevo3_j").val(ancho_nuevo);
	  
}


function ValidarCombinar() {

    var combinar = $("#combinar").val();


    if(combinar==1){
        $("#combinar_esp").removeAttr('disabled');
      //  $('#tablaDatos').css("visibility", "visible");
       // $('#tablaDatosTotales').css("visibility", "visible");
      //  $('#divTodos').css("visibility", "visible");
        
        

    	//$('#tablaDatos').show();
    	//$('#tablaCombinar').show();
    	//$('#tablaDatosTotales').show();
    	//$('#divTodos').show();

    }else {
        $("#combinar_esp").attr('disabled','disabled');
       // $("#tablaDatos").attr('disabled','disabled');
      //  $('#tablaDatos').hide();
       // $('#tablaCombinar').hide();
        //$('#tablaDatosTotales').hide();
       // $('#divTodos').hide();

    }
}

function calcularMtProd() {

    var combinar = $("#combi").val();
    var mt_prod = $("#mt_prod").val();
    
    if(mt_prod != ''){
    	 $resultado = Math.round(mt_prod/combinar);
    	 $("#resul_mt_prod").val($resultado);
    }    
}

function calcularMtProd2() {

    var combinar = $("#combi_i").val();
    var mt_prod = $("#metros_prod_i").val();
    
    if(mt_prod != ''){
    	$resultado = mt_prod/combinar;    
    	$("#resul_mt_prod_i").val($resultado);
    }    
}

function calcularMtProd3() {

    var combinar = $("#combi_j").val();
    var mt_prod = $("#metros_prod_j").val();
    
    if(mt_prod != ''){
    	$resultado = mt_prod/combinar;    
    	$("#resul_mt_prod_j").val($resultado);
    }    
}

function cargar_ajaxAdd2(ruta,valor1,valor2,valor3,valor4,valor5,valor6,total_metros1,total_metros2,total_metros3,total_metros4,total_metros5,total_metros6,div) 
{
   //alert(total_metros1);
   //alert(valor1 );
   $.post(ruta,{valor1:valor1, valor2:valor2, valor3:valor3, valor4:valor4, valor5:valor5, valor6:valor6, total_metros1:total_metros1, total_metros2:total_metros2,total_metros3:total_metros3,total_metros4:total_metros4,total_metros5:total_metros5,total_metros6:total_metros6},function(resp)
   {
        $("#"+div+"").html(resp);
   });
  
} 

function cargar_ajaxAdd(ruta,valor1,div) 
{
   
   //alert(valor1 );
   $.post(ruta,{valor1:valor1},function(resp)
   {
        $("#"+div+"").html(resp);
   });
  
} 

function cargarDatos(num_cotizacion) {
	
	//alert(num_cotizacion);
	//exit();
	
	
	if($("#num_cotizacion2_k").val() == ""){

		cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla',num_cotizacion,'prueba'); 
	    $("#num_cotizacion2_k").val(num_cotizacion);

	}
	else if( $("#num_cotizacion2_k").val() != "" && $("#num_cotizacion2_i").val() == ""){
       	cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla2',num_cotizacion,'prueba'); 
        $("#num_cotizacion2_i").val(num_cotizacion);

	}
	else{
		cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla3',num_cotizacion,'prueba'); 
        $("#num_cotizacion2_j").val(num_cotizacion);
	}
      setTimeout(function(){autoupdate_comb03()},500);   
}

function cargarDatos2(num_cotizacion, ancho, largo, cantidad, metros) {
            

        // 1era LINEA VACIO 
	   if($("#num_cotizacion_k").val() == ""){
		cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla4',num_cotizacion,'prueba'); 
                $("#num_cotizacion_k").val(num_cotizacion);                
	    }
        // 1era LINEA LLENA - 2da ORDEN VACIA
        else if($("#num_cotizacion_k").val() != "" && $("#num_cotizacion_kk").val() == ""){
            
            var ancho_anterior = $("#ancho_individual_k").val();
            var largo_anterior = $("#largo_individual_k").val();
            var numero_cotizacion_anterior = $("#num_cotizacion_k").val();
            var cantidad_anterior = $("#cantidad_k").val();
            var mt_prod_anterior = $("#metros_prod_k").val();
            
            if(ancho_anterior == ancho && largo_anterior == largo){
                
                if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                    $("#num_cotizacion_kk").val(num_cotizacion);
                    var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                    $("#cantidad_combinada_k").val(sum_cant);
                    var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                     $("#resul_mt_prod_comb_k").val(sum_mt_prod);
                     $("#resul_mt_prod_k").val(sum_mt_prod);
                }
                else if($("#num_cotizacion_i").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                    $("#num_cotizacion_i").val(num_cotizacion);
                }
                else if($("#num_cotizacion_j").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                        $("#num_cotizacion_j").val(num_cotizacion);
                }  
            }
            else if($("#num_cotizacion_i").val() == ""){
                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                $("#num_cotizacion_i").val(num_cotizacion);
            }else if($("#num_cotizacion_i").val() != "" && $("#num_cotizacion_ii").val() == ""){
                var ancho_anterior = $("#ancho_individual_i").val();
                var largo_anterior = $("#largo_individual_i").val();
                var numero_cotizacion_anterior = $("#num_cotizacion_i").val();
                var cantidad_anterior = $("#cantidad_i").val();
                var mt_prod_anterior = $("#metros_prod_i").val();

                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                    if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                        $("#num_cotizacion_ii").val(num_cotizacion);
                        var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                        $("#cantidad_combinada_i").val(sum_cant);
                        var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                        $("#resul_mt_prod_comb_i").val(sum_mt_prod);
                        $("#resul_mt_prod_i").val(sum_mt_prod);
                    }
                    else if($("#num_cotizacion_i").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                        $("#num_cotizacion_i").val(num_cotizacion);
                    } 
                    else if($("#num_cotizacion_j").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                        $("#num_cotizacion_j").val(num_cotizacion);
                    }                    
                }
                else if($("#num_cotizacion_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                    $("#num_cotizacion_j").val(num_cotizacion);
                }
                else{
                    var ancho_anterior = $("#ancho_individual_j").val();
                    var largo_anterior = $("#largo_individual_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion_j").val();
                    var cantidad_anterior = $("#cantidad_j").val();
                    var mt_prod_anterior = $("#metros_prod_j").val();

                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb_j").val(sum_mt_prod);
                            $("#resul_mt_prod_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_j").val(num_cotizacion);
                        }                       
                    }
                }
            }
            else if($("#num_cotizacion_i").val() != "" && $("#num_cotizacion_ii").val() != ""){
                if($("#num_cotizacion_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                    $("#num_cotizacion_j").val(num_cotizacion);
                }
                else if($("#num_cotizacion_jj").val() == ""){
                    var ancho_anterior = $("#ancho_individual_j").val();
                    var largo_anterior = $("#largo_individual_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion_j").val();
                    var cantidad_anterior = $("#cantidad_j").val();
                    var mt_prod_anterior = $("#metros_prod_j").val();
                    
                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb_j").val(sum_mt_prod);
                            $("#resul_mt_prod_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_j").val(num_cotizacion);
                        }     
                    }
                }
            }
        }

         // 2da LINEA VACIA
        else if($("#num_cotizacion_i").val() == ""){
                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                $("#num_cotizacion_i").val(num_cotizacion);
        }
         // 2da LINEA LLENA - 2da ORDEN
        else if($("#num_cotizacion_i").val() != "" && $("#num_cotizacion_ii").val() == ""){
                var ancho_anterior = $("#ancho_individual_i").val();
                var largo_anterior = $("#largo_individual_i").val();
                var numero_cotizacion_anterior = $("#num_cotizacion_i").val();
                var cantidad_anterior = $("#cantidad_i").val();
                var mt_prod_anterior = $("#metros_prod_i").val();

                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                    if (confirm('¿ESTA SEGURO DE QUERER COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion)) {
                        $("#num_cotizacion_ii").val(num_cotizacion);
                        var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                        $("#cantidad_combinada_i").val(sum_cant);
                        var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                        $("#resul_mt_prod_comb_i").val(sum_mt_prod);
                        $("#resul_mt_prod_i").val(sum_mt_prod);
                    }
                    else if($("#num_cotizacion_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_i").val(num_cotizacion);
                    } 
                    else if($("#num_cotizacion_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                            $("#num_cotizacion_j").val(num_cotizacion);
                    }               
                }
                else if($("#num_cotizacion_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                    $("#num_cotizacion_j").val(num_cotizacion);
                }
                else{
                    var ancho_anterior = $("#ancho_individual_j").val();
                    var largo_anterior = $("#largo_individual_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion_j").val();
                    var cantidad_anterior = $("#cantidad_j").val();
                    var mt_prod_anterior = $("#metros_prod_j").val();

                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb_j").val(sum_mt_prod);
                            $("#resul_mt_prod_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion_i").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                                $("#num_cotizacion_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion_j").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                                $("#num_cotizacion_j").val(num_cotizacion);
                        }                
                    }
                }
        }
        // 3era LINEA VACIA
        else if($("#num_cotizacion_j").val() == ""){
             cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
             $("#num_cotizacion_j").val(num_cotizacion);
        }
         // 3era LINEA LLENA - 2da ORDEN VACIA
        else if($("#num_cotizacion_j").val() != "" && $("#num_cotizacion_jj").val() == ""){
                var ancho_anterior = $("#ancho_individual_j").val();
                var largo_anterior = $("#largo_individual_j").val();
                var numero_cotizacion_anterior = $("#num_cotizacion_j").val();
                var cantidad_anterior = $("#cantidad_j").val();
                var mt_prod_anterior = $("#metros_prod_j").val();
                
                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb_j").val(sum_mt_prod);
                            $("#resul_mt_prod_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion_i").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla5',num_cotizacion,'prueba'); 
                                $("#num_cotizacion_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion_j").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla6',num_cotizacion,'prueba'); 
                                $("#num_cotizacion_j").val(num_cotizacion);
                        } 
                }
        }
  setTimeout(function(){autoupdate_comb01()},500);
}

function cargarDatos3(num_cotizacion, ancho, largo, cantidad, metros) {
    
   // alert('llwgo');
   // return;
             
	if($("#num_cotizacion3_k").val() == ""){
		cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla7',num_cotizacion,'prueba'); 
                $("#num_cotizacion3_k").val(num_cotizacion);                

	}
        else if($("#num_cotizacion3_k").val() != "" && $("#num_cotizacion3_kk").val() == ""){
            
            var ancho_anterior = $("#ancho_individual3_k").val();
            var largo_anterior = $("#largo_individual3_k").val();
            var numero_cotizacion_anterior = $("#num_cotizacion3_k").val();
            var cantidad_anterior = $("#cantidad3_k").val();
            var mt_prod_anterior = $("#metros_prod3_k").val();
            
            if(ancho_anterior == ancho && largo_anterior == largo){
                
                if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                    $("#num_cotizacion3_kk").val(num_cotizacion);
                    var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                    $("#cantidad_combinada3_k").val(sum_cant);
                    var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                     $("#resul_mt_prod_comb3_k").val(sum_mt_prod);
                     $("#resul_mt_prod3_k").val(sum_mt_prod);
                }
                else if($("#num_cotizacion3_i").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                    $("#num_cotizacion3_i").val(num_cotizacion);
                }
                else if($("#num_cotizacion3_j").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                        $("#num_cotizacion3_j").val(num_cotizacion);
                }  
            }
            else if($("#num_cotizacion3_i").val() == ""){
                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                $("#num_cotizacion3_i").val(num_cotizacion);
            }else if($("#num_cotizacion3_i").val() != "" && $("#num_cotizacion3_ii").val() == ""){
                var ancho_anterior = $("#ancho_individual3_i").val();
                var largo_anterior = $("#largo_individual3_i").val();
                var numero_cotizacion_anterior = $("#num_cotizacion3_i").val();
                var cantidad_anterior = $("#cantidad3_i").val();
                var mt_prod_anterior = $("#metros_prod3_i").val();

                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                    if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                        $("#num_cotizacion3_ii").val(num_cotizacion);
                        var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                        $("#cantidad_combinada3_i").val(sum_cant);
                        var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                        $("#resul_mt_prod_comb3_i").val(sum_mt_prod);
                        $("#resul_mt_prod3_i").val(sum_mt_prod);
                    }
                    else if($("#num_cotizacion3_i").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                        $("#num_cotizacion3_i").val(num_cotizacion);
                    } 
                    else if($("#num_cotizacion3_j").val() == ""){
                        cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                        $("#num_cotizacion3_j").val(num_cotizacion);
                    }                    
                }
                else if($("#num_cotizacion3_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                    $("#num_cotizacion3_j").val(num_cotizacion);
                }
                else{
                    var ancho_anterior = $("#ancho_individual3_j").val();
                    var largo_anterior = $("#largo_individual3_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion3_j").val();
                    var cantidad_anterior = $("#cantidad3_j").val();
                    var mt_prod_anterior = $("#metros_prod3_j").val();

                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion3_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada3_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb3_j").val(sum_mt_prod);
                            $("#resul_mt_prod3_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion3_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion3_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_j").val(num_cotizacion);
                        }                       
                    }
                }
            }
            else if($("#num_cotizacion3_i").val() != "" && $("#num_cotizacion3_ii").val() != ""){
                if($("#num_cotizacion3_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                    $("#num_cotizacion3_j").val(num_cotizacion);
                }
                else if($("#num_cotizacion3_jj").val() == ""){
                    var ancho_anterior = $("#ancho_individual3_j").val();
                    var largo_anterior = $("#largo_individual3_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion3_j").val();
                    var cantidad_anterior = $("#cantidad3_j").val();
                    var mt_prod_anterior = $("#metros_prod3_j").val();
                    
                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion3_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada3_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb3_j").val(sum_mt_prod);
                            $("#resul_mt_prod3_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion3_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion3_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_j").val(num_cotizacion);
                        }     
                    }
                }
            }
        }
        else if($("#num_cotizacion3_i").val() == "" && $("#num_cotizacion3_ii").val() == ""){
                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                $("#num_cotizacion3_i").val(num_cotizacion);
        }
        else if($("#num_cotizacion3_i").val() != "" && $("#num_cotizacion3_ii").val() == ""){
                var ancho_anterior = $("#ancho_individual3_i").val();
                var largo_anterior = $("#largo_individual3_i").val();
                var numero_cotizacion_anterior = $("#num_cotizacion3_i").val();
                var cantidad_anterior = $("#cantidad3_i").val();
                var mt_prod_anterior = $("#metros_prod3_i").val();

                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                    if (confirm('¿ESTA SEGURO DE QUERER COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion)) {
                        $("#num_cotizacion3_ii").val(num_cotizacion);
                        var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                        $("#cantidad_combinada3_i").val(sum_cant);
                        var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                        $("#resul_mt_prod_comb3_i").val(sum_mt_prod);
                        $("#resul_mt_prod3_i").val(sum_mt_prod);
                    }
                    else if($("#num_cotizacion3_i").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_i").val(num_cotizacion);
                    } 
                    else if($("#num_cotizacion3_j").val() == ""){
                            cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                            $("#num_cotizacion3_j").val(num_cotizacion);
                    }               
                }
                else if($("#num_cotizacion3_j").val() == ""){
                    cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                    $("#num_cotizacion3_j").val(num_cotizacion);
                }
                else{
                    var ancho_anterior = $("#ancho_individual3_j").val();
                    var largo_anterior = $("#largo_individual3_j").val();
                    var numero_cotizacion_anterior = $("#num_cotizacion3_j").val();
                    var cantidad_anterior = $("#cantidad3_j").val();
                    var mt_prod_anterior = $("#metros_prod3_j").val();

                    if(ancho_anterior == ancho && largo_anterior == largo){
                        
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion3_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada3_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb3_j").val(sum_mt_prod);
                            $("#resul_mt_prod3_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion3_i").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                                $("#num_cotizacion3_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion3_j").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                                $("#num_cotizacion3_j").val(num_cotizacion);
                        }                
                    }
                }
        }
        else if($("#num_cotizacion3_j").val() != "" && $("#num_cotizacion3_jj").val() == ""){
                var ancho_anterior = $("#ancho_individual3_j").val();
                var largo_anterior = $("#largo_individual3_j").val();
                var numero_cotizacion_anterior = $("#num_cotizacion3_j").val();
                var cantidad_anterior = $("#cantidad3_j").val();
                var mt_prod_anterior = $("#metros_prod3_j").val();
                
                if(ancho_anterior == ancho && largo_anterior == largo){
                    
                        if (confirm('¿SI DESEA COMBINAR '+numero_cotizacion_anterior+' con '+num_cotizacion+' (SUMA) PRESIONE ACEPTAR SINO PRESIONE CANCELAR')) {
                            $("#num_cotizacion3_jj").val(num_cotizacion);
                            var sum_cant = parseInt(cantidad_anterior) + parseInt(cantidad);
                            $("#cantidad_combinada3_j").val(sum_cant);
                            var sum_mt_prod = parseInt(mt_prod_anterior) + parseInt(metros);
                            $("#resul_mt_prod_comb3_j").val(sum_mt_prod);
                            $("#resul_mt_prod3_j").val(sum_mt_prod);
                        }
                        else if($("#num_cotizacion3_i").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla8',num_cotizacion,'prueba'); 
                                $("#num_cotizacion3_i").val(num_cotizacion);
                        } 
                        else if($("#num_cotizacion3_j").val() == ""){
                                cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
                                $("#num_cotizacion3_j").val(num_cotizacion);
                        } 
                }
        }
        else if($("#num_cotizacion3_j").val() == ""){
             cargar_ajaxAdd(webroot+'caja_standard/cargarDatostabla9',num_cotizacion,'prueba'); 
             $("#num_cotizacion3_j").val(num_cotizacion);
        } 
        setTimeout(function(){autoupdate_comb02()},500);  
}

function validaAnchoIndividualNuevo(num){
    
      if(num == '1'){
        var ancho_original = $("#ancho_individual_k").val();
        var ancho_nuevo = $("#ancho_individual_nuevo_k").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo_k").val('');
                return;
            }         
        }
        autoupdate_comb01();
      }
      if(num == '2'){
        var ancho_original = $("#ancho_individual_i").val();
        var ancho_nuevo = $("#ancho_individual_nuevo_i").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo_i").val('');
                return;
            }         
        } autoupdate_comb01();
      }
      if(num == '3'){
        var ancho_original = $("#ancho_individual_j").val();
        var ancho_nuevo = $("#ancho_individual_nuevo_j").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo_j").val('');
                return;
            }         
        } autoupdate_comb01();
      }
      if(num == '4'){
        var ancho_original = $("#ancho_individual2_k").val();
        var ancho_nuevo = $("#ancho_individual_nuevo2_k").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo2_k").val('');
                return;
            }         
        } autoupdate_comb02();
      }
      if(num == '5'){
        var ancho_original = $("#ancho_individual2_i").val();
        var ancho_nuevo = $("#ancho_individual_nuevo2_i").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo2_i").val('');
                return;
            }         
        }autoupdate_comb02();
      }
      if(num == '6'){
        var ancho_original = $("#ancho_individual2_j").val();
        var ancho_nuevo = $("#ancho_individual_nuevo2_j").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo2_j").val('');
                return;
            }         
        }autoupdate_comb02();
      }  
      if(num == '7'){
        var ancho_original = $("#ancho_individual3_k").val();
        var ancho_nuevo = $("#ancho_individual_nuevo3_k").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo3_k").val('');
                return;
            }         
        }autoupdate_comb03();
      } 
      if(num == '8'){
        var ancho_original = $("#ancho_individual3_i").val();
        var ancho_nuevo = $("#ancho_individual_nuevo3_i").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo3_i").val('');
                return;
            }         
        }autoupdate_comb03();
      } 
      if(num == '9'){
        var ancho_original = $("#ancho_individual3_j").val();
        var ancho_nuevo = $("#ancho_individual_nuevo3_j").val();

        if(ancho_original.length == ancho_nuevo.length){            
            var hasta = parseInt(ancho_original) - 15;            
            if(!(ancho_nuevo >= hasta && ancho_nuevo <= ancho_original)){
                alert('El valor del ancho individual no puede ser menor que '+hasta+' ni mayor que '+ancho_original);
                $("#ancho_individual_nuevo3_j").val('');
                return;
            }         
        }autoupdate_comb03();
      }

}




function llenarTablaAgrupa(){

    limpiarTablaAgrupa();
    
    var total_combinacion01    = $("#total_suma").val();
    var total_combinacion02    = $("#total_suma3").val();
    var total_combinacion03    = $("#total_suma2").val();
    
     if(total_combinacion01 == ""){
        if($("#num_cotizacion_k").val() != "" || $("#num_cotizacion_i").val() != "" || $("#num_cotizacion_j").val() != ""){
            alert('Tiene que calcular el total del primer cuadro antes de poder calcular la tabla resumen');
            return;
        }     
    }
    
    if(total_combinacion02 == ""){
       if($("#num_cotizacion3_k").val() != "" || $("#num_cotizacion3_i").val() != "" || $("#num_cotizacion3_j").val() != ""){
            alert('Tiene que calcular el total del segundo cuadro antes de poder calcular la tabla resumen');
            return;
        }
    }
    
    if(total_combinacion03 == ""){
        if($("#num_cotizacion2_k").val() != "" || $("#num_cotizacion2_i").val() != "" || $("#num_cotizacion2_j").val() != ""){
            alert('Tiene que calcular el total del tercer cuadro antes de poder calcular la tabla resumen');
            return;
        }
    }
    
     if(total_combinacion01 > 1850 || total_combinacion02 > 1850 || total_combinacion03 > 1850){
        alert("Algun total es mayor de 1850");
        return;
    }
     
     //  VERIFICACION REDUNDANTE (VERIFICAR)
    // if($("#num_cotizacion_kk").val() != ""){
    //     var total_cajas_producidas_k = $("#cajas_producidas_k").val();
    //     var cajas_orden_1 = $("#cajas_producidas_orden_1_k").val();
    //     var cajas_orden_2 = $("#cajas_producidas_orden_2_k").val();
        
    //     if((parseInt(cajas_orden_1)+parseInt(cajas_orden_2)) != total_cajas_producidas_k){
    //         alert('La suma de las cajas producidas de la orden 1 y de la orden 2 para la primera combinacion debe ser exactamente igual a '+total_cajas_producidas_k);
    //         return;
    //     }
    // }
    // if($("#num_cotizacion_ii").val() != ""){
    //     var total_cajas_producidas_i = $("#cajas_producidas_i").val();
    //     var cajas_orden_1 = $("#cajas_producidas_orden_1_i").val();
    //     var cajas_orden_2 = $("#cajas_producidas_orden_2_i").val();
        
    //     if((parseInt(cajas_orden_1)+parseInt(cajas_orden_2)) != total_cajas_producidas_i){
    //         alert('La suma de las cajas producidas de la orden 1 y de la orden 2 para la primera combinacion debe ser exactamente igual a '+total_cajas_producidas_i);
    //         return;
    //     }
    // }
    // if($("#num_cotizacion_jj").val() != ""){
    //     var total_cajas_producidas_j = $("#cajas_producidas_j").val();
    //     var cajas_orden_1 = $("#cajas_producidas_orden_1_j").val();
    //     var cajas_orden_2 = $("#cajas_producidas_orden_2_j").val();
        
    //     if((parseInt(cajas_orden_1)+parseInt(cajas_orden_2)) != total_cajas_producidas_j){
    //         alert('La suma de las cajas producidas de la orden 1 y de la orden 2 para la primera combinacion debe ser exactamente igual a '+total_cajas_producidas_j);
    //         return;
    //     }
    // }  
    
    var Cotizacion01 = $("#num_cotizacion_k").val();
    var Cotizacion02 = $("#num_cotizacion_kk").val();
    var Cotizacion03 = $("#num_cotizacion_i").val();
    var Cotizacion04 = $("#num_cotizacion_ii").val();
    var Cotizacion05 = $("#num_cotizacion_j").val();
    var Cotizacion06 = $("#num_cotizacion_jj").val();

    var Cotizacion07 = $("#num_cotizacion3_k").val();
    var Cotizacion08 = $("#num_cotizacion3_kk").val();
    var Cotizacion09 = $("#num_cotizacion3_i").val();
    var Cotizacion10 = $("#num_cotizacion3_ii").val();
    var Cotizacion11 = $("#num_cotizacion3_j").val();
    var Cotizacion12 = $("#num_cotizacion3_jj").val();

    var Cotizacion13 = $("#num_cotizacion2_k").val();
    var Cotizacion14 = $("#num_cotizacion2_i").val();
    var Cotizacion15 = $("#num_cotizacion2_j").val();

    var cajas_producidas_orden_1_k = $("#cajas_producidas_orden_1_k").val();
    var cajas_producidas_orden_2_k = $("#cajas_producidas_orden_2_k").val();
    var cajas_producidas_orden_1_i = $("#cajas_producidas_orden_1_i").val();
    var cajas_producidas_orden_2_i = $("#cajas_producidas_orden_2_i").val();
    var cajas_producidas_orden_1_j = $("#cajas_producidas_orden_1_j").val();
    var cajas_producidas_orden_2_j = $("#cajas_producidas_orden_2_j").val();

    var cajas_producidas_orden3_1_k = $("#cajas_producidas_orden3_1_k").val();
    var cajas_producidas_orden3_2_k = $("#cajas_producidas_orden3_2_k").val();
    var cajas_producidas_orden3_1_i = $("#cajas_producidas_orden3_1_i").val();
    var cajas_producidas_orden3_2_i = $("#cajas_producidas_orden3_2_i").val();
    var cajas_producidas_orden3_1_j = $("#cajas_producidas_orden3_1_j").val();
    var cajas_producidas_orden3_2_j = $("#cajas_producidas_orden3_2_j").val();

    var cajas_producidas2_k = $("#cajas_producidas2_k").val();
    var cajas_producidas2_i = $("#cajas_producidas2_i").val();
    var cajas_producidas2_j = $("#cajas_producidas2_j").val();
    
    var alerta_01 = "Excedente Negativo";
    var alerta_02 = "Ordenes superiores a 4";
    var alerta_03 = "Excedente Negativo Ordenes superiores a 4";
    

    var checked01  = 0;
    var checked02  = 0;
    var checked03  = 0;
    var checked04  = 0;
    var checked05  = 0;
    var checked06  = 0;
    var checked07  = 0;
    var checked08  = 0;
    var checked09  = 0;
    var checked10  = 0;
    var checked11  = 0;
    var checked12  = 0;
    var checked13  = 0;
    var checked14  = 0;
    var checked15  = 0;

    var comb01_mod_01 = $("#ancho_individual_nuevo_k").val();
    var comb01_mod_02 = $("#ancho_individual_nuevo_i").val();
    var comb01_mod_03 = $("#ancho_individual_nuevo_j").val();
    var comb02_mod_01 = $("#ancho_individual_nuevo3_k").val();
    var comb02_mod_02 = $("#ancho_individual_nuevo3_i").val();
    var comb02_mod_03 = $("#ancho_individual_nuevo3_j").val();
    var comb03_mod_01 = $("#ancho_individual_nuevo2_k").val();
    var comb03_mod_02 = $("#ancho_individual_nuevo2_i").val();
    var comb03_mod_03 = $("#ancho_individual_nuevo2_j").val();

    // FILA 1
var resumen_num_cotizacion_01 = Cotizacion01;;
var resumen_total_ordenes_01 = 0;
var resumen_01_orden_01 = 0;
var resumen_01_orden_02 = 0;
var resumen_01_orden_03 = 0;
var resumen_01_orden_04 = 0;
var resumen_total_pedido_01 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_01){
resumen_total_ordenes_01 = resumen_total_ordenes_01 + 1;
if(resumen_01_orden_01 != ""){
if(resumen_01_orden_02 != ""){
if(resumen_01_orden_03 != ""){
if(resumen_01_orden_04 != ""){
}else{resumen_01_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_01_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_01_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_01_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_01 = resumen_total_pedido_01 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_num_cotizacion_01 != ""){

$("#resumen_num_cotizacion_01").val(resumen_num_cotizacion_01);
$("#resumen_total_ordenes_01").val(resumen_total_ordenes_01);
$("#resumen_01_orden_01").val(resumen_01_orden_01); 
$("#resumen_01_orden_02").val(resumen_01_orden_02); 
$("#resumen_01_orden_03").val(resumen_01_orden_03); 
$("#resumen_01_orden_04").val(resumen_01_orden_04); 
$("#resumen_total_producido_01").val(resumen_total_pedido_01);
var excedente01 = parseInt(resumen_01_orden_01) - parseInt(resumen_total_pedido_01);
$("#resumen_total_excedente_01").val(excedente01);
$("#resumen_total_pedido_01").val(resumen_01_orden_01);  
$('#fila_resumen_01').css("visibility", "visible");
$('#fila_resumen_01').show();  
$("#resumen_total_cantidad_01").val(excedente01);

if(excedente01 < 0){
$('#resumen_comentario_01').val(alerta_01);
$('#resumen_comentario_01').css("background-color", "red");
$('#resumen_comentario_01').css("color", "white");
$('#resumen_comentario_01').parents("td").css("background-color", "red");
$('#resumen_total_excedente_01').css("background-color", "red");
$('#resumen_total_excedente_01').css("color", "white");
$('#resumen_total_excedente_01').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_01 > 4){
$('#resumen_comentario_01').val(alerta_02)
$('#resumen_comentario_01').css("background-color", "red");
$('#resumen_comentario_01').css("color", "white");
$('#resumen_comentario_01').parents("td").css("background-color", "red");
}
if(excedente01 <= 0 && resumen_total_ordenes_01 > 4){
    $('#resumen_comentario_01').val(alerta_03)
}
if(comb01_mod_01 != ""){
   $('#resumen_total_modificaciones_01').val(comb01_mod_01); 
}

}

// FILA 2
var resumen_num_cotizacion_02 = Cotizacion02;;
var resumen_total_ordenes_02 = 0;
var resumen_02_orden_01 = 0;
var resumen_02_orden_02 = 0;
var resumen_02_orden_03 = 0;
var resumen_02_orden_04 = 0;
var resumen_total_pedido_02 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_02){
resumen_total_ordenes_02 = resumen_total_ordenes_02 + 1;
if(resumen_02_orden_01 != ""){
if(resumen_02_orden_02 != ""){
if(resumen_02_orden_03 != ""){
if(resumen_02_orden_04 != ""){
}else{resumen_02_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_02_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_02_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_02_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_02 = resumen_total_pedido_02 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          

if(resumen_total_ordenes_02 != 0){
$("#resumen_num_cotizacion_02").val(resumen_num_cotizacion_02);
$("#resumen_total_ordenes_02").val(resumen_total_ordenes_02);
$("#resumen_02_orden_01").val(resumen_02_orden_01); 
$("#resumen_02_orden_02").val(resumen_02_orden_02); 
$("#resumen_02_orden_03").val(resumen_02_orden_03); 
$("#resumen_02_orden_04").val(resumen_02_orden_04);
$("#resumen_total_producido_02").val(resumen_total_pedido_02);
var excedente02 = parseInt(resumen_02_orden_01) - parseInt(resumen_total_pedido_02);
$("#resumen_total_excedente_02").val(excedente02); 
$("#resumen_total_pedido_02").val(resumen_02_orden_01);  
$('#fila_resumen_02').css("visibility", "visible");
$('#fila_resumen_02').show();
$("#resumen_total_cantidad_02").val(excedente02); 
if(excedente02 < 0){
$('#resumen_comentario_02').val(alerta_01)
$('#resumen_comentario_02').css("background-color", "red");
$('#resumen_comentario_02').css("color", "white");
$('#resumen_comentario_02').parents("td").css("background-color", "red");
$('#resumen_total_excedente_02').css("background-color", "red");
$('#resumen_total_excedente_02').css("color", "white");
$('#resumen_total_excedente_02').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_02 > 4){
$('#resumen_comentario_02').val(alerta_02)
$('#resumen_comentario_02').css("background-color", "red");
$('#resumen_comentario_02').css("color", "white");
$('#resumen_comentario_02').parents("td").css("background-color", "red");
}
if(excedente02 <= 0 && resumen_total_ordenes_02 > 4){
    $('#resumen_comentario_02').val(alerta_03)
}  
if(comb01_mod_01 != 0){
   $('#resumen_total_modificaciones_02').val(comb01_mod_01); 
}
}

 // FILA 03
var resumen_num_cotizacion_03 = Cotizacion03;;
var resumen_total_ordenes_03 = 0;
var resumen_03_orden_01 = 0;
var resumen_03_orden_02 = 0;
var resumen_03_orden_03 = 0;
var resumen_03_orden_04 = 0;
var resumen_total_pedido_03 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_03){
resumen_total_ordenes_03 = resumen_total_ordenes_03 + 1;
if(resumen_03_orden_01 != ""){
if(resumen_03_orden_02 != ""){
if(resumen_03_orden_03 != ""){
if(resumen_03_orden_04 != ""){
}else{resumen_03_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_03_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_03_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_03_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_03 = resumen_total_pedido_03 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_03 != 0){
$("#resumen_num_cotizacion_03").val(resumen_num_cotizacion_03);
$("#resumen_total_ordenes_03").val(resumen_total_ordenes_03);
$("#resumen_03_orden_01").val(resumen_03_orden_01); 
$("#resumen_03_orden_02").val(resumen_03_orden_02); 
$("#resumen_03_orden_03").val(resumen_03_orden_03); 
$("#resumen_03_orden_04").val(resumen_03_orden_04); 
$("#resumen_total_producido_03").val(resumen_total_pedido_03);
var excedente03 = parseInt(resumen_03_orden_01) - parseInt(resumen_total_pedido_03);
$("#resumen_total_excedente_03").val(excedente03); 
$("#resumen_total_pedido_03").val(resumen_03_orden_01);  
$('#fila_resumen_03').css("visibility", "visible");
$('#fila_resumen_03').show();
$("#resumen_total_cantidad_03").val(excedente03); 
if(excedente03 < 0){
$('#resumen_comentario_03').val(alerta_01)
$('#resumen_comentario_03').css("background-color", "red");
$('#resumen_comentario_03').css("color", "white");
$('#resumen_comentario_03').parents("td").css("background-color", "red");
$('#resumen_total_excedente_03').css("background-color", "red");
$('#resumen_total_excedente_03').css("color", "white");
$('#resumen_total_excedente_03').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_03 > 4){
$('#resumen_comentario_03').val(alerta_02)
$('#resumen_comentario_03').css("background-color", "red");
$('#resumen_comentario_03').css("color", "white");
$('#resumen_comentario_03').parents("td").css("background-color", "red");
}
if(excedente03 <= 0 && resumen_total_ordenes_03 > 4){
    $('#resumen_comentario_03').val(alerta_03)
} 
if(comb01_mod_02 != 0){
   $('#resumen_total_modificaciones_03').val(comb01_mod_02); 
}
}
// FILA 04
var resumen_num_cotizacion_04 = Cotizacion04;;
var resumen_total_ordenes_04 = 0;
var resumen_04_orden_01 = 0;
var resumen_04_orden_02 = 0;
var resumen_04_orden_03 = 0;
var resumen_04_orden_04 = 0;
var resumen_total_pedido_04 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_04){
resumen_total_ordenes_04 = resumen_total_ordenes_04 + 1;
if(resumen_04_orden_01 != ""){
if(resumen_04_orden_02 != ""){
if(resumen_04_orden_03 != ""){
if(resumen_04_orden_04 != ""){
}else{resumen_04_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_04_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_04_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_04_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_04 = resumen_total_pedido_04 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_04 != 0){
$("#resumen_num_cotizacion_04").val(resumen_num_cotizacion_04);
$("#resumen_total_ordenes_04").val(resumen_total_ordenes_04);
$("#resumen_04_orden_01").val(resumen_04_orden_01); 
$("#resumen_04_orden_02").val(resumen_04_orden_02); 
$("#resumen_04_orden_03").val(resumen_04_orden_03); 
$("#resumen_04_orden_04").val(resumen_04_orden_04);
$("#resumen_total_producido_04").val(resumen_total_pedido_04);
var excedente04 = parseInt(resumen_04_orden_01) - parseInt(resumen_total_pedido_04);
$("#resumen_total_excedente_04").val(excedente04);  
$("#resumen_total_pedido_04").val(resumen_04_orden_01);  
$('#fila_resumen_04').css("visibility", "visible");
$('#fila_resumen_04').show();
$("#resumen_total_cantidad_04").val(excedente04); 
if(excedente04 < 0){
$('#resumen_comentario_04').val(alerta_01)
$('#resumen_comentario_04').css("background-color", "red");
$('#resumen_comentario_04').css("color", "white");
$('#resumen_comentario_04').parents("td").css("background-color", "red");
$('#resumen_total_excedente_04').css("background-color", "red");
$('#resumen_total_excedente_04').css("color", "white");
$('#resumen_total_excedente_04').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_04 > 4){
$('#resumen_comentario_04').val(alerta_02)
$('#resumen_comentario_04').css("background-color", "red");
$('#resumen_comentario_04').css("color", "white");
$('#resumen_comentario_04').parents("td").css("background-color", "red");
}
if(excedente04 <= 0 && resumen_total_ordenes_04 > 4){
    $('#resumen_comentario_04').val(alerta_03)
} 
if(comb01_mod_02 != 0){
   $('#resumen_total_modificaciones_02').val(comb01_mod_02); 
}   
}
// FILA 05
var resumen_num_cotizacion_05 = Cotizacion05;;
var resumen_total_ordenes_05 = 0;
var resumen_05_orden_01 = 0;
var resumen_05_orden_02 = 0;
var resumen_05_orden_03 = 0;
var resumen_05_orden_04 = 0;
var resumen_total_pedido_05 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_2_i);
checked05 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_05){
resumen_total_ordenes_05 = resumen_total_ordenes_05 + 1;
if(resumen_05_orden_01 != ""){
if(resumen_05_orden_02 != ""){
if(resumen_05_orden_03 != ""){
if(resumen_05_orden_04 != ""){
}else{resumen_05_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_05_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_05_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_05_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_05 = resumen_total_pedido_05 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          

if(resumen_total_ordenes_05 != 0){
$("#resumen_num_cotizacion_05").val(resumen_num_cotizacion_05);
$("#resumen_total_ordenes_05").val(resumen_total_ordenes_05);
$("#resumen_05_orden_01").val(resumen_05_orden_01); 
$("#resumen_05_orden_02").val(resumen_05_orden_02); 
$("#resumen_05_orden_03").val(resumen_05_orden_03); 
$("#resumen_05_orden_04").val(resumen_05_orden_04); 
$("#resumen_total_producido_05").val(resumen_total_pedido_05);
var excedente05 = parseInt(resumen_05_orden_01) - parseInt(resumen_total_pedido_05);
$("#resumen_total_excedente_05").val(excedente05); 
$("#resumen_total_pedido_05").val(resumen_05_orden_01);  
$('#fila_resumen_05').css("visibility", "visible");
$('#fila_resumen_05').show();
$("#resumen_total_cantidad_05").val(excedente05);
if(excedente05 < 0){
$('#resumen_comentario_05').val(alerta_01)
$('#resumen_comentario_05').css("background-color", "red");
$('#resumen_comentario_05').css("color", "white");
$('#resumen_comentario_05').parents("td").css("background-color", "red");
$('#resumen_total_excedente_05').css("background-color", "red");
$('#resumen_total_excedente_05').css("color", "white");
$('#resumen_total_excedente_05').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_05 > 4){
$('#resumen_comentario_05').val(alerta_02)
$('#resumen_comentario_05').css("background-color", "red");
$('#resumen_comentario_05').css("color", "white");
$('#resumen_comentario_05').parents("td").css("background-color", "red");
}
if(excedente05 <= 0 && resumen_total_ordenes_05 > 4){
    $('#resumen_comentario_05').val(alerta_03)
}
if(comb01_mod_03 != 0){
   $('#resumen_total_modificaciones_05').val(comb01_mod_03); 
}
}
// FILA 06
var resumen_num_cotizacion_06 = Cotizacion06;;
var resumen_total_ordenes_06 = 0;
var resumen_06_orden_01 = 0;
var resumen_06_orden_02 = 0;
var resumen_06_orden_03 = 0;
var resumen_06_orden_04 = 0;
var resumen_total_pedido_06 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion06 != "" && checked06 == 0 && Cotizacion06 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden_2_j);
checked06 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_06){
resumen_total_ordenes_06 = resumen_total_ordenes_06 + 1;
if(resumen_06_orden_01 != ""){
if(resumen_06_orden_02 != ""){
if(resumen_06_orden_03 != ""){
if(resumen_06_orden_04 != ""){
}else{resumen_06_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_06_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_06_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_06_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_06 = resumen_total_pedido_06 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_06 != 0){
$("#resumen_num_cotizacion_06").val(resumen_num_cotizacion_06);
$("#resumen_total_ordenes_06").val(resumen_total_ordenes_06);
$("#resumen_06_orden_01").val(resumen_06_orden_01); 
$("#resumen_06_orden_02").val(resumen_06_orden_02); 
$("#resumen_06_orden_03").val(resumen_06_orden_03); 
$("#resumen_06_orden_04").val(resumen_06_orden_04); 
$("#resumen_total_producido_06").val(resumen_total_pedido_06);
var excedente06 = parseInt(resumen_06_orden_01) - parseInt(resumen_total_pedido_06);
$("#resumen_total_excedente_06").val(excedente06); 
$("#resumen_total_pedido_06").val(resumen_06_orden_01);  
$('#fila_resumen_06').css("visibility", "visible");
$('#fila_resumen_06').show();
$("#resumen_total_cantidad_06").val(excedente06);
if(excedente06 < 0){
$('#resumen_comentario_06').val(alerta_01)
$('#resumen_comentario_06').css("background-color", "red");
$('#resumen_comentario_06').css("color", "white");
$('#resumen_comentario_06').parents("td").css("background-color", "red");
$('#resumen_total_excedente_06').css("background-color", "red");
$('#resumen_total_excedente_06').css("color", "white");
$('#resumen_total_excedente_06').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_06 > 4){
$('#resumen_comentario_06').val(alerta_02)
$('#resumen_comentario_06').css("background-color", "red");
$('#resumen_comentario_06').css("color", "white");
$('#resumen_comentario_06').parents("td").css("background-color", "red");
}
if(excedente06 <= 0 && resumen_total_ordenes_06 > 4){
    $('#resumen_comentario_06').val(alerta_03)
}  
if(comb02_mod_03 != 0){
   $('#resumen_total_modificaciones_06').val(comb02_mod_03); 
}   
}
 // FILA 07
var resumen_num_cotizacion_07 = Cotizacion07;;
var resumen_total_ordenes_07 = 0;
var resumen_07_orden_01 = 0;
var resumen_07_orden_02 = 0;
var resumen_07_orden_03 = 0;
var resumen_07_orden_04 = 0;
var resumen_total_pedido_07 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_1_i);
checked03 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_2_i);
checked04 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_07){
resumen_total_ordenes_07 = resumen_total_ordenes_07 + 1;
if(resumen_07_orden_01 != ""){
if(resumen_07_orden_02 != ""){
if(resumen_07_orden_03 != ""){
if(resumen_07_orden_04 != ""){
}else{resumen_07_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_07_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_07_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_07_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_07 = resumen_total_pedido_07 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_07 != 0){
$("#resumen_num_cotizacion_07").val(resumen_num_cotizacion_07);
$("#resumen_total_ordenes_07").val(resumen_total_ordenes_07);
$("#resumen_07_orden_01").val(resumen_07_orden_01); 
$("#resumen_07_orden_02").val(resumen_07_orden_02); 
$("#resumen_07_orden_03").val(resumen_07_orden_03); 
$("#resumen_07_orden_04").val(resumen_07_orden_04); 
$("#resumen_total_producido_07").val(resumen_total_pedido_07);
var excedente07 = parseInt(resumen_07_orden_01) - parseInt(resumen_total_pedido_07);
$("#resumen_total_excedente_07").val(excedente07);
$("#resumen_total_pedido_07").val(resumen_07_orden_01);  
$('#fila_resumen_07').css("visibility", "visible");
$('#fila_resumen_07').show();
$("#resumen_total_cantidad_07").val(excedente07);
if(excedente07 < 0){
$('#resumen_comentario_07').val(alerta_01)
$('#resumen_comentario_07').css("background-color", "red");
$('#resumen_comentario_07').css("color", "white");
$('#resumen_comentario_07').parents("td").css("background-color", "red");
$('#resumen_total_excedente_07').css("background-color", "red");
$('#resumen_total_excedente_07').css("color", "white");
$('#resumen_total_excedente_07').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_07 > 4){
$('#resumen_comentario_07').val(alerta_02)
$('#resumen_comentario_07').css("background-color", "red");
$('#resumen_comentario_07').css("color", "white");
$('#resumen_comentario_07').parents("td").css("background-color", "red");
}
if(excedente07 <= 0 && resumen_total_ordenes_07 > 4){
    $('#resumen_comentario_07').val(alerta_03)
} 
if(comb02_mod_01 != 0){
   $('#resumen_total_modificaciones_07').val(comb02_mod_01); 
} 
} 

// FILA 08
var resumen_num_cotizacion_08 = Cotizacion08;;
var resumen_total_ordenes_08 = 0;
var resumen_08_orden_01 = 0;
var resumen_08_orden_02 = 0;
var resumen_08_orden_03 = 0;
var resumen_08_orden_04 = 0;
var resumen_total_pedido_08 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_1_i);
checked08 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_2_i);
checked08 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_1_j);
checked08 = 1;
}


if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden_2_j);
checked08 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_08){
resumen_total_ordenes_08 = resumen_total_ordenes_08 + 1;
if(resumen_08_orden_01 != ""){
if(resumen_08_orden_02 != ""){
if(resumen_08_orden_03 != ""){
if(resumen_08_orden_04 != ""){
}else{resumen_08_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_08_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_08_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_08_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_08 = resumen_total_pedido_08 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_08 != 0){
$("#resumen_num_cotizacion_08").val(resumen_num_cotizacion_08);
$("#resumen_total_ordenes_08").val(resumen_total_ordenes_08);
$("#resumen_08_orden_01").val(resumen_08_orden_01); 
$("#resumen_08_orden_02").val(resumen_08_orden_02); 
$("#resumen_08_orden_03").val(resumen_08_orden_03); 
$("#resumen_08_orden_04").val(resumen_08_orden_04); 
$("#resumen_total_producido_08").val(resumen_total_pedido_08);
var excedente08 = parseInt(resumen_08_orden_01) - parseInt(resumen_total_pedido_08);
$("#resumen_total_excedente_08").val(excedente08);
$("#resumen_total_pedido_08").val(resumen_08_orden_01);  
$('#fila_resumen_08').css("visibility", "visible");
$('#fila_resumen_08').show(); 
$("#resumen_total_cantidad_08").val(excedente08);
if(excedente08 < 0){
$('#resumen_comentario_08').val(alerta_01)
$('#resumen_comentario_08').css("background-color", "red");
$('#resumen_comentario_08').css("color", "white");
$('#resumen_comentario_08').parents("td").css("background-color", "red");
$('#resumen_total_excedente_08').css("background-color", "red");
$('#resumen_total_excedente_08').css("color", "white");
$('#resumen_total_excedente_08').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_08 > 4){
$('#resumen_comentario_08').val(alerta_02)
$('#resumen_comentario_08').css("background-color", "red");
$('#resumen_comentario_08').css("color", "white");
$('#resumen_comentario_08').parents("td").css("background-color", "red");
}
if(excedente08 <= 0 && resumen_total_ordenes_08 > 4){
    $('#resumen_comentario_08').val(alerta_03)
}
if(comb02_mod_01 != 0){
   $('#resumen_total_modificaciones_08').val(comb02_mod_01); 
}
}
// FILA 09
var resumen_num_cotizacion_09 = Cotizacion09;;
var resumen_total_ordenes_09 = 0;
var resumen_09_orden_01 = 0;
var resumen_09_orden_02 = 0;
var resumen_09_orden_03 = 0;
var resumen_09_orden_04 = 0;
var resumen_total_pedido_09 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_1_i);
checked09 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_2_i);
checked09 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_09){
resumen_total_ordenes_09 = resumen_total_ordenes_09 + 1;
if(resumen_09_orden_01 != ""){
if(resumen_09_orden_02 != ""){
if(resumen_09_orden_03 != ""){
if(resumen_09_orden_04 != ""){
}else{resumen_09_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_09_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_09_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_09_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_09 = resumen_total_pedido_09 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_09 != 0){
$("#resumen_num_cotizacion_09").val(resumen_num_cotizacion_09);
$("#resumen_total_ordenes_09").val(resumen_total_ordenes_09);
$("#resumen_09_orden_01").val(resumen_09_orden_01); 
$("#resumen_09_orden_02").val(resumen_09_orden_02); 
$("#resumen_09_orden_03").val(resumen_09_orden_03); 
$("#resumen_09_orden_04").val(resumen_09_orden_04); 
$("#resumen_total_producido_09").val(resumen_total_pedido_09);
var excedente09 = parseInt(resumen_09_orden_01) - parseInt(resumen_total_pedido_09);
$("#resumen_total_excedente_09").val(excedente09);
$("#resumen_total_pedido_09").val(resumen_09_orden_01);  
$('#fila_resumen_09').css("visibility", "visible");
$('#fila_resumen_09').show();
$("#resumen_total_cantidad_09").val(excedente09); 
if(excedente09 < 0){
$('#resumen_comentario_09').val(alerta_01)
$('#resumen_comentario_09').css("background-color", "red");
$('#resumen_comentario_09').css("color", "white");
$('#resumen_comentario_09').parents("td").css("background-color", "red");
$('#resumen_total_excedente_09').css("background-color", "red");
$('#resumen_total_excedente_09').css("color", "white");
$('#resumen_total_excedente_09').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_09 > 4){
$('#resumen_comentario_09').val(alerta_02)
$('#resumen_comentario_09').css("background-color", "red");
$('#resumen_comentario_09').css("color", "white");
$('#resumen_comentario_09').parents("td").css("background-color", "red");
}
if(excedente09 <= 0 && resumen_total_ordenes_09 > 4){
    $('#resumen_comentario_09').val(alerta_03)
}  
if(comb02_mod_02 != 0){
   $('#resumen_total_modificaciones_09').val(comb02_mod_02); 
}  
}

// FILA 10
var resumen_num_cotizacion_10 = Cotizacion10;;
var resumen_total_ordenes_10 = 0;
var resumen_10_orden_01 = 0;
var resumen_10_orden_02 = 0;
var resumen_10_orden_03 = 0;
var resumen_10_orden_04 = 0;
var resumen_total_pedido_10 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_1_i);
checked10 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_2_i);
checked10 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_10){
resumen_total_ordenes_10 = resumen_total_ordenes_10 + 1;
if(resumen_10_orden_01 != ""){
if(resumen_10_orden_02 != ""){
if(resumen_10_orden_03 != ""){
if(resumen_10_orden_04 != ""){
}else{resumen_10_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_10_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_10_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_10_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_10 = resumen_total_pedido_10 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_10 != 0){
$("#resumen_num_cotizacion_10").val(resumen_num_cotizacion_10);
$("#resumen_total_ordenes_10").val(resumen_total_ordenes_10);
$("#resumen_10_orden_01").val(resumen_10_orden_01); 
$("#resumen_10_orden_02").val(resumen_10_orden_02); 
$("#resumen_10_orden_03").val(resumen_10_orden_03); 
$("#resumen_10_orden_04").val(resumen_10_orden_04); 
$("#resumen_total_producido_10").val(resumen_total_pedido_10);
var excedente10 = parseInt(resumen_10_orden_01) - parseInt(resumen_total_pedido_10);
$("#resumen_total_excedente_10").val(excedente10);
$("#resumen_total_pedido_10").val(resumen_10_orden_01);  
$('#fila_resumen_10').css("visibility", "visible");
$('#fila_resumen_10').show(); 
$("#resumen_total_cantidad_10").val(excedente10);
if(excedente10 < 0){
$('#resumen_comentario_10').val(alerta_01)
$('#resumen_comentario_10').css("background-color", "red");
$('#resumen_comentario_10').css("color", "white");
$('#resumen_comentario_10').parents("td").css("background-color", "red");
$('#resumen_total_excedente_10').css("background-color", "red");
$('#resumen_total_excedente_10').css("color", "white");
$('#resumen_total_excedente_10').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_10 > 4){
$('#resumen_comentario_10').val(alerta_02)
$('#resumen_comentario_10').css("background-color", "red");
$('#resumen_comentario_10').css("color", "white");
$('#resumen_comentario_10').parents("td").css("background-color", "red");
}
if(excedente10 <= 0 && resumen_total_ordenes_10 > 4){
    $('#resumen_comentario_10').val(alerta_03)
} 
if(comb02_mod_02 != 0){
   $('#resumen_total_modificaciones_10').val(comb02_mod_02); 
}   
}

// FILA 11
var resumen_num_cotizacion_11 = Cotizacion11;;
var resumen_total_ordenes_11 = 0;
var resumen_11_orden_01 = 0;
var resumen_11_orden_02 = 0;
var resumen_11_orden_03 = 0;
var resumen_11_orden_04 = 0;
var resumen_total_pedido_11 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_1_i);
checked11 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_2_i);
checked11 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_11){
resumen_total_ordenes_11 = resumen_total_ordenes_11 + 1;
if(resumen_11_orden_01 != ""){
if(resumen_11_orden_02 != ""){
if(resumen_11_orden_03 != ""){
if(resumen_11_orden_04 != ""){
}else{resumen_11_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_11_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_11_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_11_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_11 = resumen_total_pedido_11 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_11 != 0){
$("#resumen_num_cotizacion_11").val(resumen_num_cotizacion_11);
$("#resumen_total_ordenes_11").val(resumen_total_ordenes_11);
$("#resumen_11_orden_01").val(resumen_11_orden_01); 
$("#resumen_11_orden_02").val(resumen_11_orden_02); 
$("#resumen_11_orden_03").val(resumen_11_orden_03); 
$("#resumen_11_orden_04").val(resumen_11_orden_04); 
$("#resumen_total_producido_11").val(resumen_total_pedido_11);
var excedente11 = parseInt(resumen_11_orden_01) - parseInt(resumen_total_pedido_11);
$("#resumen_total_excedente_11").val(excedente11);
$("#resumen_total_pedido_11").val(resumen_11_orden_01);  
$('#fila_resumen_11').css("visibility", "visible");
$('#fila_resumen_11').show();
$("#resumen_total_cantidad_11").val(excedente11);
if(excedente11 < 0){
$('#resumen_comentario_11').val(alerta_01)
$('#resumen_comentario_11').css("background-color", "red");
$('#resumen_comentario_11').css("color", "white");
$('#resumen_comentario_11').parents("td").css("background-color", "red");
$('#resumen_total_excedente_11').css("background-color", "red");
$('#resumen_total_excedente_11').css("color", "white");
$('#resumen_total_excedente_11').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_11 > 4){
$('#resumen_comentario_11').val(alerta_02)
$('#resumen_comentario_11').css("background-color", "red");
$('#resumen_comentario_11').css("color", "white");
$('#resumen_comentario_11').parents("td").css("background-color", "red");
}
if(excedente11 <= 0 && resumen_total_ordenes_11 > 4){
    $('#resumen_comentario_11').val(alerta_03)
} 
if(comb02_mod_03 != 0){
   $('#resumen_total_modificaciones_11').val(comb02_mod_03); 
}    
}
// FILA 12
var resumen_num_cotizacion_12 = Cotizacion12;;
var resumen_total_ordenes_12 = 0;
var resumen_12_orden_01 = 0;
var resumen_12_orden_02 = 0;
var resumen_12_orden_03 = 0;
var resumen_12_orden_04 = 0;
var resumen_total_pedido_12 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_1_i);
checked12 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_2_i);
checked12 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_12){
resumen_total_ordenes_12 = resumen_total_ordenes_12 + 1;
if(resumen_12_orden_01 != ""){
if(resumen_12_orden_02 != ""){
if(resumen_12_orden_03 != ""){
if(resumen_12_orden_04 != ""){
}else{resumen_12_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_12_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_12_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_12_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_12 = resumen_total_pedido_12 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_12 != 0){
$("#resumen_num_cotizacion_12").val(resumen_num_cotizacion_12);
$("#resumen_total_ordenes_12").val(resumen_total_ordenes_12);
$("#resumen_12_orden_01").val(resumen_12_orden_01); 
$("#resumen_12_orden_02").val(resumen_12_orden_02); 
$("#resumen_12_orden_03").val(resumen_12_orden_03); 
$("#resumen_12_orden_04").val(resumen_12_orden_04); 
$("#resumen_total_producido_12").val(resumen_total_pedido_12);
var excedente12 = parseInt(resumen_12_orden_01) - parseInt(resumen_total_pedido_12);
$("#resumen_total_excedente_12").val(excedente12);
$("#resumen_total_pedido_12").val(resumen_12_orden_01);  
$('#fila_resumen_12').css("visibility", "visible");
$('#fila_resumen_12').show();
$("#resumen_total_cantidad_12").val(excedente12);
if(excedente12 < 0){
$('#resumen_comentario_12').val(alerta_01)
$('#resumen_comentario_12').css("background-color", "red");
$('#resumen_comentario_12').css("color", "white");
$('#resumen_comentario_12').parents("td").css("background-color", "red");
$('#resumen_total_excedente_12').css("background-color", "red");
$('#resumen_total_excedente_12').css("color", "white");
$('#resumen_total_excedente_12').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_12 > 4){
$('#resumen_comentario_12').val(alerta_02)
$('#resumen_comentario_12').css("background-color", "red");
$('#resumen_comentario_12').css("color", "white");
$('#resumen_comentario_12').parents("td").css("background-color", "red");
}
if(excedente12 <= 0 && resumen_total_ordenes_12 > 4){
    $('#resumen_comentario_12').val(alerta_03)
} 
if(comb02_mod_03 != 0){
   $('#resumen_total_modificaciones_12').val(comb02_mod_03); 
}   
}
// FILA 13
var resumen_num_cotizacion_13 = Cotizacion13;;
var resumen_total_ordenes_13 = 0;
var resumen_13_orden_01 = 0;
var resumen_13_orden_02 = 0;
var resumen_13_orden_03 = 0;
var resumen_13_orden_04 = 0;
var resumen_total_pedido_13 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_1_i);
checked13 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_2_i);
checked13 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_13){
resumen_total_ordenes_13 = resumen_total_ordenes_13 + 1;
if(resumen_13_orden_01 != ""){
if(resumen_13_orden_02 != ""){
if(resumen_13_orden_03 != ""){
if(resumen_13_orden_04 != ""){
}else{resumen_13_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_13_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_13_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_13_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_13 = resumen_total_pedido_13 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_13 != 0){
$("#resumen_num_cotizacion_13").val(resumen_num_cotizacion_13);
$("#resumen_total_ordenes_13").val(resumen_total_ordenes_13);
$("#resumen_13_orden_01").val(resumen_13_orden_01); 
$("#resumen_13_orden_02").val(resumen_13_orden_02); 
$("#resumen_13_orden_03").val(resumen_13_orden_03); 
$("#resumen_13_orden_04").val(resumen_13_orden_04); 
$("#resumen_total_producido_13").val(resumen_total_pedido_13);
var excedente13 = parseInt(resumen_13_orden_01) - parseInt(resumen_total_pedido_13);
$("#resumen_total_excedente_13").val(excedente13);
$("#resumen_total_pedido_13").val(resumen_13_orden_01);  
$('#fila_resumen_13').css("visibility", "visible");
$('#fila_resumen_13').show(); 
$("#resumen_total_cantidad_13").val(excedente13);
if(excedente13 < 0){
$('#resumen_comentario_13').val(alerta_01)
$('#resumen_comentario_13').css("background-color", "red");
$('#resumen_comentario_13').css("color", "white");
$('#resumen_comentario_13').parents("td").css("background-color", "red");
$('#resumen_total_excedente_13').css("background-color", "red");
$('#resumen_total_excedente_13').css("color", "white");
$('#resumen_total_excedente_13').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_13 > 4){
$('#resumen_comentario_13').val(alerta_02)
$('#resumen_comentario_13').css("background-color", "red");
$('#resumen_comentario_13').css("color", "white");
$('#resumen_comentario_13').parents("td").css("background-color", "red");
}
if(excedente13 <= 0 && resumen_total_ordenes_13 > 4){
    $('#resumen_comentario_13').val(alerta_03)
} 
if(comb03_mod_01 != 0){
   $('#resumen_total_modificaciones_13').val(comb03_mod_01); 
}   
}
// FILA 14
var resumen_num_cotizacion_14 = Cotizacion14;;
var resumen_total_ordenes_14 = 0;
var resumen_14_orden_01 = 0;
var resumen_14_orden_02 = 0;
var resumen_14_orden_03 = 0;
var resumen_14_orden_04 = 0;
var resumen_total_pedido_14 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_1_i);
checked14 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_2_i);
checked14 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_14){
resumen_total_ordenes_14 = resumen_total_ordenes_14 + 1;
if(resumen_14_orden_01 != ""){
if(resumen_14_orden_02 != ""){
if(resumen_14_orden_03 != ""){
if(resumen_14_orden_04 != ""){
}else{resumen_14_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_14_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_14_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_14_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_14 = resumen_total_pedido_14 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_14 != 0){
$("#resumen_num_cotizacion_14").val(resumen_num_cotizacion_14);
$("#resumen_total_ordenes_14").val(resumen_total_ordenes_14);
$("#resumen_14_orden_01").val(resumen_14_orden_01); 
$("#resumen_14_orden_02").val(resumen_14_orden_02); 
$("#resumen_14_orden_03").val(resumen_14_orden_03); 
$("#resumen_14_orden_04").val(resumen_14_orden_04); 
$("#resumen_total_producido_14").val(resumen_total_pedido_14);
var excedente14 = parseInt(resumen_14_orden_01) - parseInt(resumen_total_pedido_14);
$("#resumen_total_excedente_14").val(excedente14);
$("#resumen_total_pedido_14").val(resumen_14_orden_01);  
$('#fila_resumen_14').css("visibility", "visible");
$('#fila_resumen_14').show();
$("#resumen_total_cantidad_14").val(excedente14);
if(excedente14 < 0){
$('#resumen_comentario_14').val(alerta_01)
$('#resumen_comentario_14').css("background-color", "red");
$('#resumen_comentario_14').css("color", "white");
$('#resumen_comentario_14').parents("td").css("background-color", "red");
$('#resumen_total_excedente_14').css("background-color", "red");
$('#resumen_total_excedente_14').css("color", "white");
$('#resumen_total_excedente_14').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_14 > 4){
$('#resumen_comentario_14').val(alerta_02)
$('#resumen_comentario_14').css("background-color", "red");
$('#resumen_comentario_14').css("color", "white");
$('#resumen_comentario_14').parents("td").css("background-color", "red");
}
if(excedente14 <= 0 && resumen_total_ordenes_14 > 4){
    $('#resumen_comentario_14').val(alerta_03)
}
if(comb03_mod_02 != 0){
   $('#resumen_total_modificaciones_14').val(comb03_mod_02); 
}     
}
// FILA 15
var resumen_num_cotizacion_15 = Cotizacion15;;
var resumen_total_ordenes_15 = 0;
var resumen_15_orden_01 = 0;
var resumen_15_orden_02 = 0;
var resumen_15_orden_03 = 0;
var resumen_15_orden_04 = 0;
var resumen_total_pedido_15 = 0;


if (Cotizacion01 != "" && checked01 == 0){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_1_k)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_1_k)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_1_k);
checked01 = 1;
}


if(Cotizacion02 != "" && checked02 == 0 && Cotizacion02 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_2_k)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_2_k)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_2_k);
checked02 = 1;
}

if(Cotizacion03 != "" && checked03 == 0 && Cotizacion03 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_1_i)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_1_i)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_1_i);
checked15 = 1;
}

if(Cotizacion04 != "" && checked04 == 0 && Cotizacion04 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_2_i)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_2_i)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_2_i);
checked15 = 1;
}

if(Cotizacion05 != "" && checked05 == 0 && Cotizacion05 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_1_j)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_1_j)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_1_j);
checked05 = 1;
}


if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden_2_j)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden_2_j)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden_2_j);
checked12 = 1;
}

if(Cotizacion07 != "" && checked07 == 0 && Cotizacion07 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_1_k)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_1_k)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_1_k);
checked07 = 1;
}

if(Cotizacion08 != "" && checked08 == 0 && Cotizacion08 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_2_k)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_2_k)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_2_k);
checked08 = 1;
}

if(Cotizacion09 != "" && checked09 == 0 && Cotizacion09 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_1_i)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_1_i)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_1_i);
checked09 = 1;
}

if(Cotizacion10 != "" && checked10 == 0 && Cotizacion10 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_2_i)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_2_i)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_2_i);
checked10 = 1;
}

if(Cotizacion11 != "" && checked11 == 0 && Cotizacion11 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_1_j)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_1_j)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_1_j);
checked11 = 1;
}

if(Cotizacion12 != "" && checked12 == 0 && Cotizacion12 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas_orden3_2_j)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas_orden3_2_j)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas_orden3_2_i);
checked12 = 1;
}

if(Cotizacion13 != "" && checked13 == 0 && Cotizacion13 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas2_k)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas2_k)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas2_k)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas2_k)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas2_k);
checked13 = 1;
}

if(Cotizacion14 != "" && checked14 == 0 && Cotizacion14 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas2_i)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas2_i)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas2_i)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas2_i)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas2_i);
checked14 = 1;
}

if(Cotizacion15 != "" && checked15 == 0 && Cotizacion15 == resumen_num_cotizacion_15){
resumen_total_ordenes_15 = resumen_total_ordenes_15 + 1;
if(resumen_15_orden_01 != ""){
if(resumen_15_orden_02 != ""){
if(resumen_15_orden_03 != ""){
if(resumen_15_orden_04 != ""){
}else{resumen_15_orden_04 = parseInt(cajas_producidas2_j)}
}else{resumen_15_orden_03 = parseInt(cajas_producidas2_j)}
}else{resumen_15_orden_02 = parseInt(cajas_producidas2_j)}
}else{resumen_15_orden_01 = parseInt(cajas_producidas2_j)}
resumen_total_pedido_15 = resumen_total_pedido_15 + parseInt(cajas_producidas2_j);
checked15 = 1;
}          
if(resumen_total_ordenes_15 != 0){
$("#resumen_num_cotizacion_15").val(resumen_num_cotizacion_15);
$("#resumen_total_ordenes_15").val(resumen_total_ordenes_15);
$("#resumen_15_orden_01").val(resumen_15_orden_01); 
$("#resumen_15_orden_02").val(resumen_15_orden_02); 
$("#resumen_15_orden_03").val(resumen_15_orden_03); 
$("#resumen_15_orden_04").val(resumen_15_orden_04); 
$("#resumen_total_producido_15").val(resumen_total_pedido_15);
var excedente15 = parseInt(resumen_15_orden_01) - parseInt(resumen_total_pedido_15);
$("#resumen_total_excedente_15").val(excedente15);
$("#resumen_total_pedido_15").val(resumen_15_orden_01);  
$('#fila_resumen_15').css("visibility", "visible");
$('#fila_resumen_15').show();
$("#resumen_total_cantidad_15").val(excedente15); 
if(excedente15 < 0){
$('#resumen_comentario_15').val(alerta_01)
$('#resumen_comentario_15').css("background-color", "red");
$('#resumen_comentario_15').css("color", "white");
$('#resumen_comentario_15').parents("td").css("background-color", "red");
$('#resumen_total_excedente_15').css("background-color", "red");
$('#resumen_total_excedente_15').css("color", "white");
$('#resumen_total_excedente_15').parents("td").css("background-color", "red");
};
if(resumen_total_ordenes_15 > 4){
$('#resumen_comentario_15').val(alerta_02)
$('#resumen_comentario_15').css("background-color", "red");
$('#resumen_comentario_15').css("color", "white");
$('#resumen_comentario_15').parents("td").css("background-color", "red");
}
if(excedente15 <= 0 && resumen_total_ordenes_15 > 4){
    $('#resumen_comentario_15').val(alerta_03)
}
if(comb03_mod_03 != 0){
   $('#resumen_total_modificaciones_15').val(comb03_mod_03); 
}    
}

}

function completarValor(num){

if(num == 1){
    var total = $("#cajas_producidas_k").val();
    var valor1 = $("#cajas_producidas_orden_1_k").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden_2_k").val(mitad);
        $("#cajas_producidas_orden_1_k").val(mitad);
        return;
    }
    
    $("#banderaCalculo1").val(1);
   
    $("#cajas_producidas_orden_2_k").val(nuevo);
}

else if(num == 2){
    var total = $("#cajas_producidas_i").val();
    var valor1 = $("#cajas_producidas_orden_1_i").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden_2_i").val(mitad);
        $("#cajas_producidas_orden_1_i").val(mitad);
        return;
    }
    $("#banderaCalculo1").val(1);
    $("#cajas_producidas_orden_2_i").val(nuevo);
}
else if(num == 3){
    var total = $("#cajas_producidas_j").val();
    var valor1 = $("#cajas_producidas_orden_1_j").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden_2_j").val(mitad);
        $("#cajas_producidas_orden_1_j").val(mitad);
        return;
    }
    $("#banderaCalculo1").val(1);
    $("#cajas_producidas_orden_2_j").val(nuevo);
}
else if(num == 4){
    var total = $("#cajas_producidas3_k").val();
    var valor1 = $("#cajas_producidas_orden3_1_k").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden3_2_k").val(mitad);
        $("#cajas_producidas_orden3_1_k").val(mitad);
        return;
    }
    
    $("#banderaCalculo3").val(1);
   
    $("#cajas_producidas_orden3_2_k").val(nuevo);
}
else if(num == 5){
    var total = $("#cajas_producidas3_i").val();
    var valor1 = $("#cajas_producidas_orden3_1_i").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden3_2_i").val(mitad);
        $("#cajas_producidas_orden3_1_i").val(mitad);
        return;
    }
    $("#banderaCalculo3").val(1);
    $("#cajas_producidas_orden3_2_i").val(nuevo);
}
else if(num == 6){
    var total = $("#cajas_producidas3_j").val();
    var valor1 = $("#cajas_producidas_orden3_1_j").val();
    var nuevo =  parseInt(total) - parseInt(valor1);
    
    if(nuevo < 0){
        alert('El valor de las cajas producidas para la orden 1 no puede ser mayor que la suma del total de cajas producidas');
        var mitad = parseInt(total)/2;
        $("#cajas_producidas_orden3_2_j").val(mitad);
        $("#cajas_producidas_orden3_1_j").val(mitad);
        return;
    }
    $("#banderaCalculo3").val(1);
    $("#cajas_producidas_orden3_2_j").val(nuevo);
}


}

function limpiarTotal2(){
    $("#total_suma3").val("");
    $("#menor_mt_prod3").val("");
}


 //..............................................  
        function sumarAnchos(id) {

        if(id == '1'){


        if($("#banderaCalculo1").val() == 1){
        return;
        }            

        if($("#ancho_individual_nuevo_k").val() != ""){
        var ancho1 = $("#ancho_individual_nuevo_k").val();
        }else{
        var ancho1 = $("#ancho_individual_k").val();
        }

        if($("#ancho_individual_nuevo_i").val() != ""){
        var ancho2 = $("#ancho_individual_nuevo_i").val();
        }else{
        var ancho2 = $("#ancho_individual_i").val();
        }

        if($("#ancho_individual_nuevo_j").val() != ""){
        var ancho3 = $("#ancho_individual_nuevo_j").val();
        }else{
        var ancho3 = $("#ancho_individual_j").val();
        }

        var largo1 = $("#largo_individual_k").val();
        var largo2 = $("#largo_individual_i").val();
        var largo3 = $("#largo_individual_j").val();

        var com01_metros_original_k = $("#metros_original_k").val();
        var com01_metros_original_i = $("#metros_original_i").val();
        var com01_metros_original_j = $("#metros_original_j").val();

        var mt_prod1 = $("#resul_mt_prod_k").val();
        var mt_prod2 = $("#resul_mt_prod_i").val();
        var mt_prod3 = $("#resul_mt_prod_j").val();

        var mt_prod1_simple = $("#metros_prod_k").val();
        var mt_prod2_simple = $("#metros_prod_i").val();
        var mt_prod3_simple = $("#metros_prod_j").val();


        if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple,mt_prod3_simple); 
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod2_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod3_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod2_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = 0;
        }

        // alert(mt_prod1+" "+mt_prod2+" "+mt_prod3);
        if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod2,mt_prod3); 
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod2,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1,mt_prod2);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod3);
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod2);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod3);
        }



        var suma_margen = 0;

        if(com01_metros_original_k != ''){
        var suma_margen = suma_margen + parseInt(com01_metros_original_k);
        }
        if(com01_metros_original_i != ''){
        var suma_margen = suma_margen + parseInt(com01_metros_original_i);
        }
        if(com01_metros_original_j != ''){
        var suma_margen = suma_margen + parseInt(com01_metros_original_j);
        }

        var resul = 0;
        if(ancho1 != ''){
        resul = resul + parseInt(ancho1);
        }
        if(ancho2 != ''){
        resul = resul + parseInt(ancho2);
        }
        if(ancho3 != ''){
        resul = resul + parseInt(ancho3);
        }
        var total = resul + 30;

        if(min == null) {
            min = "0";
        }
        

        document.getElementById("suma_margen").value =  suma_margen;
        document.getElementById("suma_ancho").value =  resul;
        document.getElementById("total_suma").value =  total;
        document.getElementById("menor_mt_prod").value =  min;   
        document.getElementById("menor_mt_prod_simple").value =  min_simple;   

        var orden_1_k = $("#num_cotizacion_k").val();
        var orden_1_i = $("#num_cotizacion_i").val();
        var orden_1_j = $("#num_cotizacion_j").val();
        var orden_2_k = $("#num_cotizacion_kk").val();
        var orden_2_i = $("#num_cotizacion_ii").val();
        var orden_2_j = $("#num_cotizacion_jj").val();

        if(orden_1_k != "" && orden_2_k != ""){

        //alert(mt_prod1+" "+min_simple);
        var cajas_producidas_k = ((parseInt(min)/parseInt(largo1))*1000).toFixed(); 
        $("#cajas_producidas_k").val(cajas_producidas_k);
        var mitad = parseInt(cajas_producidas_k)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden_1_k").val(a);
        $("#cajas_producidas_orden_2_k").val(b);
        var resul_mt_menos1 = min - mt_prod1;
        document.getElementById("resul_mt_menos_k").value =  resul_mt_menos1;                
        }
        else if(orden_1_k != "" && orden_2_k == "")
        {
        //alert(mt_prod1+" "+min_simple);
        var cajas_producidas_k = ((parseInt(min)/parseInt(largo1))*1000).toFixed(); 
        $("#cajas_producidas_k").val(cajas_producidas_k);
        var a = parseInt(cajas_producidas_k);
        var b = 0;
        $("#cajas_producidas_orden_1_k").val(a);
        $("#cajas_producidas_orden_2_k").val(b); 
        var resul_mt_menos1 = min - mt_prod1;
        document.getElementById("resul_mt_menos_k").value =  resul_mt_menos1;  
        }

        if(orden_1_i != "" && orden_2_i != ""){
        var cajas_producidas_i = ((parseInt(min)/parseInt(largo2))*1000).toFixed(); 
        $("#cajas_producidas_i").val(cajas_producidas_i);
        var mitad = parseInt(cajas_producidas_i)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden_1_i").val(a);
        $("#cajas_producidas_orden_2_i").val(b);
        var resul_mt_menos2 = min - mt_prod2;
        document.getElementById("resul_mt_menos_i").value =  resul_mt_menos2;
        }
        else if (orden_1_i != "" && orden_2_i == "")
        {
        var cajas_producidas_i = ((parseInt(min)/parseInt(largo2))*1000).toFixed(); 
        $("#cajas_producidas_i").val(cajas_producidas_i);
        var a = parseInt(cajas_producidas_i);
        var b = 0;
        $("#cajas_producidas_orden_1_i").val(a);
        $("#cajas_producidas_orden_2_i").val(b);
        var resul_mt_menos2 = min - mt_prod2;
        document.getElementById("resul_mt_menos_i").value =  resul_mt_menos2;
        }

        if(orden_1_j != "" && orden_2_j != ""){
        var cajas_producidas_j = ((parseInt(min)/parseInt(largo3))*1000).toFixed(); 
        $("#cajas_producidas_j").val(cajas_producidas_j);
        var mitad = parseInt(cajas_producidas_j)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden_1_j").val(a);
        $("#cajas_producidas_orden_2_j").val(b);
        var resul_mt_menos3 = min - mt_prod3;
        document.getElementById("resul_mt_menos_j").value =  resul_mt_menos3;
        }
        else if(orden_1_j != "" && orden_2_j == "")
        {
        var cajas_producidas_j = ((parseInt(min)/parseInt(largo3))*1000).toFixed(); 
        $("#cajas_producidas_j").val(cajas_producidas_j);
        var a = parseInt(cajas_producidas_j);
        var b = 0;
        $("#cajas_producidas_orden_1_j").val(a);
        $("#cajas_producidas_orden_2_j").val(b); 
        var resul_mt_menos3 = min - mt_prod3;
        document.getElementById("resul_mt_menos_j").value =  resul_mt_menos3; 
        }

        }

        if(id == '3'){


        if($("#banderaCalculo3").val() == 1){
        return;
        }            

        if($("#ancho_individual_nuevo3_k").val() != ""){
        var ancho1 = $("#ancho_individual_nuevo3_k").val();
        }else{
        var ancho1 = $("#ancho_individual3_k").val();
        }

        if($("#ancho_individual_nuevo3_i").val() != ""){
        var ancho2 = $("#ancho_individual_nuevo3_i").val();
        }else{
        var ancho2 = $("#ancho_individual3_i").val();
        }

        if($("#ancho_individual_nuevo3_j").val() != ""){
        var ancho3 = $("#ancho_individual_nuevo3_j").val();
        }else{
        var ancho3 = $("#ancho_individual3_j").val();
        }

        var largo1 = $("#largo_individual3_k").val();
        var largo2 = $("#largo_individual3_i").val();
        var largo3 = $("#largo_individual3_j").val();

        var com03_metros_original_k = $("#metros_original3_k").val();
        var com03_metros_original_i = $("#metros_original3_i").val();
        var com03_metros_original_j = $("#metros_original3_j").val();

        var mt_prod1 = $("#resul_mt_prod3_k").val();
        var mt_prod2 = $("#resul_mt_prod3_i").val();
        var mt_prod3 = $("#resul_mt_prod3_j").val();

        var mt_prod1_simple = $("#metros_prod3_k").val();
        var mt_prod2_simple = $("#metros_prod3_i").val();
        var mt_prod3_simple = $("#metros_prod3_j").val();


        if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple,mt_prod3_simple); 
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod2_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod3_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod2_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = 0;
        }


        if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod2,mt_prod3); 
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod2,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1,mt_prod2);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod3);
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod2);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod3);
        }



        var suma_margen = 0;

        if(com03_metros_original_k != ''){
        var suma_margen = suma_margen + parseInt(com03_metros_original_k);
        }
        if(com03_metros_original_i != ''){
        var suma_margen = suma_margen + parseInt(com03_metros_original_i);
        }
        if(com03_metros_original_j != ''){
        var suma_margen = suma_margen + parseInt(com03_metros_original_j);
        }

        var resul = 0;
        if(ancho1 != ''){
        resul = resul + parseInt(ancho1);
        }
        if(ancho2 != ''){
        resul = resul + parseInt(ancho2);
        }
        if(ancho3 != ''){
        resul = resul + parseInt(ancho3);
        }
        var total = resul + 30;

 if(min == null) {
            min = "0";
        }

        document.getElementById("suma_margen3").value =  suma_margen;
        document.getElementById("suma_ancho3").value =  resul;
        document.getElementById("total_suma3").value =  total;
        document.getElementById("menor_mt_prod3").value =  min;   
        document.getElementById("menor_mt_prod_simple3").value =  min_simple;   

        var orden_1_k = $("#num_cotizacion3_k").val();
        var orden_1_i = $("#num_cotizacion3_i").val();
        var orden_1_j = $("#num_cotizacion3_j").val();
        var orden_2_k = $("#num_cotizacion3_kk").val();
        var orden_2_i = $("#num_cotizacion3_ii").val();
        var orden_2_j = $("#num_cotizacion3_jj").val();

        if(orden_1_k != "" && orden_2_k != ""){

        //alert(mt_prod1+" "+min_simple);
        var cajas_producidas_k = ((parseInt(min)/parseInt(largo1))*1000).toFixed(); 
        $("#cajas_producidas3_k").val(cajas_producidas_k);
        var mitad = parseInt(cajas_producidas_k)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden3_1_k").val(a);
        $("#cajas_producidas_orden3_2_k").val(b);
        var resul_mt_menos1 = min - mt_prod1;
        document.getElementById("resul_mt_menos3_k").value =  resul_mt_menos1;                
        }
        else if(orden_1_k != "" && orden_2_k == "")
        {
        //alert(mt_prod1+" "+min_simple);
        var cajas_producidas_k = ((parseInt(min)/parseInt(largo1))*1000).toFixed(); 
        $("#cajas_producidas3_k").val(cajas_producidas_k);
        var a = parseInt(cajas_producidas_k);
        var b = 0;
        $("#cajas_producidas_orden3_1_k").val(a);
        $("#cajas_producidas_orden3_2_k").val(b); 
        var resul_mt_menos1 = min - mt_prod1;
        document.getElementById("resul_mt_menos3_k").value =  resul_mt_menos1;  
        }

        if(orden_1_i != "" && orden_2_i != ""){
        var cajas_producidas_i = ((parseInt(min)/parseInt(largo2))*1000).toFixed(); 
        $("#cajas_producidas3_i").val(cajas_producidas_i);
        var mitad = parseInt(cajas_producidas_i)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden3_1_i").val(a);
        $("#cajas_producidas_orden3_2_i").val(b);
        var resul_mt_menos2 = min - mt_prod2;
        document.getElementById("resul_mt_menos3_i").value =  resul_mt_menos2;
        }
        else if (orden_1_i != "" && orden_2_i == "")
        {
        var cajas_producidas_i = ((parseInt(min)/parseInt(largo2))*1000).toFixed(); 
        $("#cajas_producidas3_i").val(cajas_producidas_i);
        var a = parseInt(cajas_producidas_i);
        var b = 0;
        $("#cajas_producidas_orden3_1_i").val(a);
        $("#cajas_producidas_orden3_2_i").val(b);
        var resul_mt_menos2 = min - mt_prod2;
        document.getElementById("resul_mt_menos3_i").value =  resul_mt_menos2;
        }

        if(orden_1_j != "" && orden_2_j != ""){
        var cajas_producidas_j = ((parseInt(min)/parseInt(largo3))*1000).toFixed(); 
        $("#cajas_producidas3_j").val(cajas_producidas_j);
        var mitad = parseInt(cajas_producidas_j)/2;
        var a = Math.ceil (mitad);
        var b = Math.floor (mitad);
        $("#cajas_producidas_orden3_1_j").val(a);
        $("#cajas_producidas_orden3_2_j").val(b);
        var resul_mt_menos3 = min - mt_prod3;
        document.getElementById("resul_mt_menos3_j").value =  resul_mt_menos3;
        }
        else if(orden_1_j != "" && orden_2_j == "")
        {
        var cajas_producidas_j = ((parseInt(min)/parseInt(largo3))*1000).toFixed(); 
        $("#cajas_producidas3_j").val(cajas_producidas_j);
        var a = parseInt(cajas_producidas_j);
        var b = 0;
        $("#cajas_producidas_orden3_1_j").val(a);
        $("#cajas_producidas_orden3_2_j").val(b); 
        var resul_mt_menos3 = min - mt_prod3;
        document.getElementById("resul_mt_menos3_j").value =  resul_mt_menos3; 
        }

        }

         if(id == '2'){


        if($("#banderaCalculo2").val() == 1){
        return;
        }            

        if($("#ancho_individual_nuevo2_k").val() != ""){
        var ancho1 = $("#ancho_individual_nuevo2_k").val();
        }else{
        var ancho1 = $("#ancho_individual2_k").val();
        }

        if($("#ancho_individual_nuevo2_i").val() != ""){
        var ancho2 = $("#ancho_individual_nuevo2_i").val();
        }else{
        var ancho2 = $("#ancho_individual2_i").val();
        }

        if($("#ancho_individual_nuevo2_j").val() != ""){
        var ancho3 = $("#ancho_individual_nuevo2_j").val();
        }else{
        var ancho3 = $("#ancho_individual2_j").val();
        }
     


        var largo1 = $("#largo_individual2_k").val();
        var largo2 = $("#largo_individual2_i").val();
        var largo3 = $("#largo_individual2_j").val();

        var com02_metros_original_k = $("#metros_original2_k").val();
        var com02_metros_original_i = $("#metros_original2_i").val();
        var com02_metros_original_j = $("#metros_original2_j").val();

        var mt_prod1 = $("#resul_mt_prod2_k").val();
        var mt_prod2 = $("#resul_mt_prod2_i").val();
        var mt_prod3 = $("#resul_mt_prod2_j").val();

        var mt_prod1_simple = $("#metros_prod2_k").val();
        var mt_prod2_simple = $("#metros_prod2_i").val();
        var mt_prod3_simple = $("#metros_prod2_j").val();


        if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple,mt_prod3_simple); 
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod2_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod3_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple,mt_prod2_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = Math.min(mt_prod3_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple != "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod2_simple);
        }
        else if(mt_prod1_simple != "" && mt_prod2_simple == "" && mt_prod3_simple == ""){
        var min_simple = Math.min(mt_prod1_simple);
        }
        else if(mt_prod1_simple == "" && mt_prod2_simple == "" && mt_prod3_simple != ""){
        var min_simple = 0;
        }



        if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod2,mt_prod3); 
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 != ""){
        var min = Math.min(mt_prod2,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod1,mt_prod3);
        }
        else if(mt_prod1 != "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1,mt_prod2);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = Math.min(mt_prod3);
        }
        else if(mt_prod1 == "" && mt_prod2 != "" && mt_prod3 == ""){
        var min = Math.min(mt_prod2);
        }
        else if(mt_prod1 != "" && mt_prod2 == "" && mt_prod3 == ""){
        var min = Math.min(mt_prod1);
        }
        else if(mt_prod1 == "" && mt_prod2 == "" && mt_prod3 != ""){
        var min = 0;
        }



        var suma_margen = 0;

        if(com02_metros_original_k != ''){
        var suma_margen = suma_margen + parseInt(com02_metros_original_k);
        }
        if(com02_metros_original_i != ''){
        var suma_margen = suma_margen + parseInt(com02_metros_original_i);
        }
        if(com02_metros_original_j != ''){
        var suma_margen = suma_margen + parseInt(com02_metros_original_j);
        }

        var resul = 0;
        if(ancho1 != ''){
        resul = resul + parseInt(ancho1);
        }
        if(ancho2 != ''){
        resul = resul + parseInt(ancho2);
        }
        if(ancho3 != ''){
        resul = resul + parseInt(ancho3);
        }
        var total = resul + 30;

 if(min == null) {
            min = "0";
        }

        document.getElementById("suma_margen2").value =  suma_margen;
        document.getElementById("suma_ancho2").value =  resul;
        document.getElementById("total_suma2").value =  total;
        document.getElementById("menor_mt_prod2").value =  min;   
        // document.getElementById("menor_mt_prod2_simple").value =  min_simple;   


        var orden_1_k = $("#num_cotizacion2_k").val();
        var orden_1_i = $("#num_cotizacion2_i").val();
        var orden_1_j = $("#num_cotizacion2_j").val();
        


        if(orden_1_k != ""){

        //alert(mt_prod1+" "+min_simple);
        var cajas_producidas_k = ((parseInt(min)/parseInt(largo1))*1000).toFixed(); 
        $("#cajas_producidas2_k").val(cajas_producidas_k);

        var resul_mt_menos1 = min - mt_prod1;
        document.getElementById("resul_mt_menos2_k").value =  resul_mt_menos1;
           
        }
        
        if(orden_1_i != ""){
        var cajas_producidas_i = ((parseInt(min)/parseInt(largo2))*1000).toFixed(); 
        $("#cajas_producidas2_i").val(cajas_producidas_i);
       var resul_mt_menos2 = min - mt_prod2;
        document.getElementById("resul_mt_menos2_i").value =  resul_mt_menos2;
    }
        if(orden_1_j != ""){
        var cajas_producidas_j = ((parseInt(min)/parseInt(largo3))*1000).toFixed(); 
        $("#cajas_producidas2_j").val(cajas_producidas_j);
        var resul_mt_menos3 = min - mt_prod3;
        document.getElementById("resul_mt_menos2_j").value =  resul_mt_menos3;
        }

        }


        }

function limpiarTablaAgrupa(){
   
    $('#fila_resumen_01').css("visibility","hidden");
     $('#fila_resumen_01').hide();
    $('#fila_resumen_02').css("visibility","hidden");
     $('#fila_resumen_02').hide();
    $('#fila_resumen_03').css("visibility","hidden");
     $('#fila_resumen_03').hide();
    $('#fila_resumen_04').css("visibility","hidden");
     $('#fila_resumen_04').hide();
    $('#fila_resumen_05').css("visibility","hidden");
     $('#fila_resumen_05').hide();
    $('#fila_resumen_06').css("visibility","hidden");
     $('#fila_resumen_06').hide();
    $('#fila_resumen_07').css("visibility","hidden");
     $('#fila_resumen_07').hide();
    $('#fila_resumen_08').css("visibility","hidden");
     $('#fila_resumen_08').hide();
    $('#fila_resumen_09').css("visibility","hidden");
     $('#fila_resumen_09').hide();
    $('#fila_resumen_10').css("visibility","hidden");
     $('#fila_resumen_10').hide();
    $('#fila_resumen_11').css("visibility","hidden");
     $('#fila_resumen_11').hide();
    $('#fila_resumen_12').css("visibility","hidden");
     $('#fila_resumen_12').hide();
    $('#fila_resumen_13').css("visibility","hidden");
     $('#fila_resumen_13').hide();
    $('#fila_resumen_14').css("visibility","hidden");
     $('#fila_resumen_14').hide();
    $('#fila_resumen_15').css("visibility","hidden");
     $('#fila_resumen_15').hide();


   $('#resumen_num_cotizacion_01').val("");
   $('#resumen_total_ordenes_01').val("");
   $('#resumen_01_orden_01').val("");
   $('#resumen_01_orden_02').val("");
   $('#resumen_01_orden_03').val("");
   $('#resumen_01_orden_04').val("");
   $('#resumen_total_producido_01').val("");
   $('#resumen_total_pedido_01').val("");
   $('#resumen_total_excedente_01').val("");
   $('#resumen_comentario_01').val("");

    $('#resumen_num_cotizacion_02').val("");
   $('#resumen_total_ordenes_02').val("");
   $('#resumen_02_orden_01').val("");
   $('#resumen_02_orden_02').val("");
   $('#resumen_02_orden_03').val("");
   $('#resumen_02_orden_04').val("");
   $('#resumen_total_producido_02').val("");
   $('#resumen_total_pedido_02').val("");
   $('#resumen_total_excedente_02').val("");
   $('#resumen_comentario_02').val("");

      $('#resumen_num_cotizacion_03').val("");
   $('#resumen_total_ordenes_03').val("");
   $('#resumen_03_orden_01').val("");
   $('#resumen_03_orden_02').val("");
   $('#resumen_03_orden_03').val("");
   $('#resumen_03_orden_04').val("");
   $('#resumen_total_producido_03').val("");
   $('#resumen_total_pedido_03').val("");
   $('#resumen_total_excedente_03').val("");
   $('#resumen_comentario_03').val("");

      $('#resumen_num_cotizacion_04').val("");
   $('#resumen_total_ordenes_04').val("");
   $('#resumen_04_orden_01').val("");
   $('#resumen_04_orden_02').val("");
   $('#resumen_04_orden_03').val("");
   $('#resumen_04_orden_04').val("");
   $('#resumen_total_producido_04').val("");
   $('#resumen_total_pedido_04').val("");
   $('#resumen_total_excedente_04').val("");
   $('#resumen_comentario_04').val("");

      $('#resumen_num_cotizacion_05').val("");
   $('#resumen_total_ordenes_05').val("");
   $('#resumen_05_orden_01').val("");
   $('#resumen_05_orden_02').val("");
   $('#resumen_05_orden_03').val("");
   $('#resumen_05_orden_04').val("");
   $('#resumen_total_producido_05').val("");
   $('#resumen_total_pedido_05').val("");
   $('#resumen_total_excedente_05').val("");
   $('#resumen_comentario_05').val("");

      $('#resumen_num_cotizacion_06').val("");
   $('#resumen_total_ordenes_06').val("");
   $('#resumen_06_orden_01').val("");
   $('#resumen_06_orden_02').val("");
   $('#resumen_06_orden_03').val("");
   $('#resumen_06_orden_04').val("");
   $('#resumen_total_producido_06').val("");
   $('#resumen_total_pedido_06').val("");
   $('#resumen_total_excedente_06').val("");
   $('#resumen_comentario_06').val("");

      $('#resumen_num_cotizacion_07').val("");
   $('#resumen_total_ordenes_07').val("");
   $('#resumen_07_orden_01').val("");
   $('#resumen_07_orden_02').val("");
   $('#resumen_07_orden_03').val("");
   $('#resumen_07_orden_04').val("");
   $('#resumen_total_producido_07').val("");
   $('#resumen_total_pedido_07').val("");
   $('#resumen_total_excedente_07').val("");
   $('#resumen_comentario_07').val("");

      $('#resumen_num_cotizacion_08').val("");
   $('#resumen_total_ordenes_08').val("");
   $('#resumen_08_orden_01').val("");
   $('#resumen_08_orden_02').val("");
   $('#resumen_08_orden_03').val("");
   $('#resumen_08_orden_04').val("");
   $('#resumen_total_producido_08').val("");
   $('#resumen_total_pedido_08').val("");
   $('#resumen_total_excedente_08').val("");
   $('#resumen_comentario_08').val("");

      $('#resumen_num_cotizacion_09').val("");
   $('#resumen_total_ordenes_09').val("");
   $('#resumen_09_orden_01').val("");
   $('#resumen_09_orden_02').val("");
   $('#resumen_09_orden_03').val("");
   $('#resumen_09_orden_04').val("");
   $('#resumen_total_producido_09').val("");
   $('#resumen_total_pedido_09').val("");
   $('#resumen_total_excedente_09').val("");
   $('#resumen_comentario_09').val("");

      $('#resumen_num_cotizacion_10').val("");
   $('#resumen_total_ordenes_10').val("");
   $('#resumen_10_orden_01').val("");
   $('#resumen_10_orden_02').val("");
   $('#resumen_10_orden_03').val("");
   $('#resumen_10_orden_04').val("");
   $('#resumen_total_producido_10').val("");
   $('#resumen_total_pedido_10').val("");
   $('#resumen_total_excedente_10').val("");
   $('#resumen_comentario_10').val("");

      $('#resumen_num_cotizacion_11').val("");
   $('#resumen_total_ordenes_11').val("");
   $('#resumen_11_orden_01').val("");
   $('#resumen_11_orden_02').val("");
   $('#resumen_11_orden_03').val("");
   $('#resumen_11_orden_04').val("");
   $('#resumen_total_producido_11').val("");
   $('#resumen_total_pedido_11').val("");
   $('#resumen_total_excedente_11').val("");
   $('#resumen_comentario_11').val("");

      $('#resumen_num_cotizacion_12').val("");
   $('#resumen_total_ordenes_12').val("");
   $('#resumen_12_orden_01').val("");
   $('#resumen_12_orden_02').val("");
   $('#resumen_12_orden_03').val("");
   $('#resumen_12_orden_04').val("");
   $('#resumen_total_producido_12').val("");
   $('#resumen_total_pedido_12').val("");
   $('#resumen_total_excedente_12').val("");
   $('#resumen_comentario_12').val("");

      $('#resumen_num_cotizacion_13').val("");
   $('#resumen_total_ordenes_13').val("");
   $('#resumen_13_orden_01').val("");
   $('#resumen_13_orden_02').val("");
   $('#resumen_13_orden_03').val("");
   $('#resumen_13_orden_04').val("");
   $('#resumen_total_producido_13').val("");
   $('#resumen_total_pedido_13').val("");
   $('#resumen_total_excedente_13').val("");
   $('#resumen_comentario_13').val("");

    $('#resumen_num_cotizacion_14').val("");
   $('#resumen_total_ordenes_14').val("");
   $('#resumen_14_orden_01').val("");
   $('#resumen_14_orden_02').val("");
   $('#resumen_14_orden_03').val("");
   $('#resumen_14_orden_04').val("");
   $('#resumen_total_producido_14').val("");
   $('#resumen_total_pedido_14').val("");
   $('#resumen_total_excedente_14').val("");
   $('#resumen_comentario_14').val("");

    $('#resumen_num_cotizacion_15').val("");
   $('#resumen_total_ordenes_15').val("");
   $('#resumen_15_orden_01').val("");
   $('#resumen_15_orden_02').val("");
   $('#resumen_15_orden_03').val("");
   $('#resumen_15_orden_04').val("");
   $('#resumen_total_producido_15').val("");
   $('#resumen_total_pedido_15').val("");
   $('#resumen_total_excedente_15').val("");
   $('#resumen_comentario_15').val("");


$('#resumen_comentario_01').css("background-color", "white");
$('#resumen_comentario_01').css("color", "black");
$('#resumen_comentario_01').parents("td").css("background-color", "white");
$('#resumen_total_excedente_01').css("background-color", "white");
$('#resumen_total_excedente_01').css("color", "black");
$('#resumen_total_excedente_01').parents("td").css("background-color", "white");

$('#resumen_comentario_02').css("background-color", "white");
$('#resumen_comentario_02').css("color", "black");
$('#resumen_comentario_02').parents("td").css("background-color", "white");
$('#resumen_total_excedente_02').css("background-color", "white");
$('#resumen_total_excedente_02').css("color", "black");
$('#resumen_total_excedente_02').parents("td").css("background-color", "white");

$('#resumen_comentario_03').css("background-color", "white");
$('#resumen_comentario_03').css("color", "black");
$('#resumen_comentario_03').parents("td").css("background-color", "white");
$('#resumen_total_excedente_03').css("background-color", "white");
$('#resumen_total_excedente_03').css("color", "black");
$('#resumen_total_excedente_03').parents("td").css("background-color", "white");

$('#resumen_comentario_04').css("background-color", "white");
$('#resumen_comentario_04').css("color", "black");
$('#resumen_comentario_04').parents("td").css("background-color", "white");
$('#resumen_total_excedente_04').css("background-color", "white");
$('#resumen_total_excedente_04').css("color", "black");
$('#resumen_total_excedente_04').parents("td").css("background-color", "white");

$('#resumen_comentario_05').css("background-color", "white");
$('#resumen_comentario_05').css("color", "black");
$('#resumen_comentario_05').parents("td").css("background-color", "white");
$('#resumen_total_excedente_05').css("background-color", "white");
$('#resumen_total_excedente_05').css("color", "black");
$('#resumen_total_excedente_05').parents("td").css("background-color", "white");

$('#resumen_comentario_06').css("background-color", "white");
$('#resumen_comentario_06').css("color", "black");
$('#resumen_comentario_06').parents("td").css("background-color", "white");
$('#resumen_total_excedente_06').css("background-color", "white");
$('#resumen_total_excedente_06').css("color", "black");
$('#resumen_total_excedente_06').parents("td").css("background-color", "white");

$('#resumen_comentario_07').css("background-color", "white");
$('#resumen_comentario_07').css("color", "black");
$('#resumen_comentario_07').parents("td").css("background-color", "white");
$('#resumen_total_excedente_07').css("background-color", "white");
$('#resumen_total_excedente_07').css("color", "black");
$('#resumen_total_excedente_07').parents("td").css("background-color", "white");

$('#resumen_comentario_08').css("background-color", "white");
$('#resumen_comentario_08').css("color", "black");
$('#resumen_comentario_08').parents("td").css("background-color", "white");
$('#resumen_total_excedente_08').css("background-color", "white");
$('#resumen_total_excedente_08').css("color", "black");
$('#resumen_total_excedente_08').parents("td").css("background-color", "white");

$('#resumen_comentario_09').css("background-color", "white");
$('#resumen_comentario_09').css("color", "black");
$('#resumen_comentario_09').parents("td").css("background-color", "white");
$('#resumen_total_excedente_09').css("background-color", "white");
$('#resumen_total_excedente_09').css("color", "black");
$('#resumen_total_excedente_09').parents("td").css("background-color", "white");

$('#resumen_comentario_10').css("background-color", "white");
$('#resumen_comentario_10').css("color", "black");
$('#resumen_comentario_10').parents("td").css("background-color", "white");
$('#resumen_total_excedente_10').css("background-color", "white");
$('#resumen_total_excedente_10').css("color", "black");
$('#resumen_total_excedente_10').parents("td").css("background-color", "white");

$('#resumen_comentario_11').css("background-color", "white");
$('#resumen_comentario_11').css("color", "black");
$('#resumen_comentario_11').parents("td").css("background-color", "white");
$('#resumen_total_excedente_11').css("background-color", "white");
$('#resumen_total_excedente_11').css("color", "black");
$('#resumen_total_excedente_11').parents("td").css("background-color", "white");

$('#resumen_comentario_12').css("background-color", "white");
$('#resumen_comentario_12').css("color", "black");
$('#resumen_comentario_12').parents("td").css("background-color", "white");
$('#resumen_total_excedente_12').css("background-color", "white");
$('#resumen_total_excedente_12').css("color", "black");
$('#resumen_total_excedente_12').parents("td").css("background-color", "white");

$('#resumen_comentario_13').css("background-color", "white");
$('#resumen_comentario_13').css("color", "black");
$('#resumen_comentario_13').parents("td").css("background-color", "white");
$('#resumen_total_excedente_13').css("background-color", "white");
$('#resumen_total_excedente_13').css("color", "black");
$('#resumen_total_excedente_13').parents("td").css("background-color", "white");

$('#resumen_comentario_14').css("background-color", "white");
$('#resumen_comentario_14').css("color", "black");
$('#resumen_comentario_14').parents("td").css("background-color", "white");
$('#resumen_total_excedente_14').css("background-color", "white");
$('#resumen_total_excedente_14').css("color", "black");
$('#resumen_total_excedente_14').parents("td").css("background-color", "white");

$('#resumen_comentario_15').css("background-color", "white");
$('#resumen_comentario_15').css("color", "black");
$('#resumen_comentario_15').parents("td").css("background-color", "white");
$('#resumen_total_excedente_15').css("background-color", "white");
$('#resumen_total_excedente_15').css("color", "black");
$('#resumen_total_excedente_15').parents("td").css("background-color", "white");


   
}


function filtarTabla(){
	alert("llego!!!");
	
}

function GuardarDefinicion() {

    var slotter = $("#slotter").val();
    var polimeros = $("#polimeros").val();
    var contratapa = $("#contratapa").val();
    var liner = $("#liner").val();
    var onda = $("#onda").val();
    var ancho_bobina = $("#ancho_bobina").val();
    var tipo_pegado = $("#tipo_pegado").val();
    var color_esp = $("#color_esp").val();
    var combinar = $("#combinar").val();
    var troquel = $("#troquel").val();
    var ruta = $("#ruta").val();
    var id_cotizacion = $("#id_cotizacion").val();
    var combinar_esp = $("#combinar_esp").val();
    var id_def = $("#id_definicion").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var detalle = $("#detalle").val();


   // return false;

    $.ajax({
        url: ruta+"caja_standard/registrar_definicion",
        global: false,
        type: "POST",
        data: {slotter: slotter, 
                polimeros: polimeros, 
                contratapa:contratapa, 
                liner:liner, onda:onda, 
                ancho_bobina:ancho_bobina, 
                tipo_pegado:tipo_pegado, 
                color_esp:color_esp, 
                combinar:combinar, 
                troquel:troquel, 
                ruta:ruta, 
                id_cotizacion: id_cotizacion, 
                combinar_esp: combinar_esp, 
                id_def: id_def, 
                liberar: liberar, 
                nodo:nodo,
                detalle:detalle
            },
        dataType: "text",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";
                

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function GuardarDefinicion2() {

    var slotter = $("#slotter").val();
    var polimeros = $("#polimeros").val();
    var contratapa = $("#contratapa2").val();
    var liner = $("#liner2").val();
    var onda = $("#onda2").val();
    var ancho_bobina = $("#ancho_bobina").val();
    var tipo_pegado = $("#tipo_pegado").val();
    var color_esp = $("#color_esp").val();
    var combinar = $("#combinar").val();
    var troquel = $("#troquel").val();
    var ruta = $("#ruta").val();
    var id_cotizacion = $("#id_cotizacion").val();
    var combinar_esp = $("#combinar_esp").val();
    var id_def = $("#id_definicion").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var detalle = $("#detalle").val();


   // return false;

    $.ajax({
        url: ruta+"caja_standard/registrar_definicion",
        global: false,
        type: "POST",
        data: {slotter: slotter, 
                polimeros: polimeros, 
                contratapa:contratapa, 
                liner:liner, onda:onda, 
                ancho_bobina:ancho_bobina, 
                tipo_pegado:tipo_pegado, 
                color_esp:color_esp, 
                combinar:combinar, 
                troquel:troquel, 
                ruta:ruta, 
                id_cotizacion: id_cotizacion, 
                combinar_esp: combinar_esp, 
                id_def: id_def, 
                liberar: liberar, 
                nodo:nodo,
                detalle:detalle
            },
        dataType: "text",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";
                

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}


function LiberarDefinicion() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

        var slotter = $("#slotter").val();
        var polimeros = $("#polimeros").val();
        var contratapa = $("#contratapa").val();
        var liner = $("#liner").val();
        var onda = $("#onda").val();
        var ancho_bobina = $("#ancho_bobina").val();
        var tipo_pegado = $("#tipo_pegado").val();
        var color_esp = $("#color_esp").val();
        var combinar = $("#combinar").val();
        var troquel = $("#troquel").val();
        var ruta = $("#ruta").val();
        var id_cotizacion = $("#id_cotizacion").val();
        var nodo = $("#nodo").val();
        var pegado = $("#pegado").val();

        
        if(nodo=="Rollos y Monotapas"){
        
        	slotter=="1";
        	polimeros=="1";
        }

        if(slotter==0){
            alert(".::EL CAMPO SLOTTER ES OBLIGATORIO::.");
            return false;
        }
        	
        if(ancho_bobina==""){
            alert(".::EL CAMPO ANCHO BOBINA A USAR ES OBLIGATORIO::.");
            return false;
        }

        if(combinar==0){
            alert(".::EL CAMPO SE PUEDE COMBINAR ES OBLIGATORIO::.");
            return false;
        }
        if(pegado==1){
        	if(tipo_pegado==0){
            alert(".::EL CAMPO TIPO DE PEGADO ES OBLIGATORIO::.");
            return false;
        	}
        }
                
        $("#liberar").val(1);
        GuardarDefinicion();

    }

}


function LiberarDefinicion2() {

    if (confirm('¿ESTA SEGURO DE MODIFICAR LA COTIZACION?')) {

        var slotter = $("#slotter").val();
        var polimeros = $("#polimeros").val();
        var contratapa = $("#contratapa2").val();
        var liner = $("#liner2").val();
        var onda = $("#onda2").val();
        var ancho_bobina = $("#ancho_bobina").val();
        var tipo_pegado = $("#tipo_pegado").val();
        var color_esp = $("#color_esp").val();
        var combinar = $("#combinar").val();
        var troquel = $("#troquel").val();
        var ruta = $("#ruta").val();
        var id_cotizacion = $("#id_cotizacion").val();
        var nodo = $("#nodo").val();
        var pegado = $("#pegado").val();

        
        if(nodo=="Rollos y Monotapas"){
        
        	slotter=="1";
        	polimeros=="1";
        }

        if(slotter==0){
            alert(".::EL CAMPO SLOTTER ES OBLIGATORIO::.");
            return false;
        }
        	
        if(ancho_bobina==""){
            alert(".::EL CAMPO ANCHO BOBINA A USAR ES OBLIGATORIO::.");
            return false;
        }

        if(combinar==0){
            alert(".::EL CAMPO SE PUEDE COMBINAR ES OBLIGATORIO::.");
            return false;
        }
        if(pegado==1){
        	if(tipo_pegado==0){
            alert(".::EL CAMPO TIPO DE PEGADO ES OBLIGATORIO::.");
            return false;
        	}
        }
                
        $("#liberar").val(1);
        GuardarDefinicion2();

    }

}




function valor_inicial_monotapa(){
    var val_usuario=$("#val_usuarios").val();
    var val_tipo=$("#val_tipo").val();
    var val_defi=$("#val_defi").val();
    var fecha_monotapa=$("#fecha_monotapa").val();
    var monotapa_estatus=$("#monotapa_estatus").val();


    
    $("#usuario_id").val(val_usuario);
    $("#tipo_usu").val(val_tipo);
    
    if(monotapa_estatus==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Monotapa Liberada - "+fecha_monotapa+"</div>");

        //$("#descripcion_del_trabajo").attr('disabled','disabled');
        $("#comentario_repeticion").attr('disabled','disabled');
        $("#onda_usar").attr('disabled','disabled');
        $("#ancho_onda").attr('disabled','disabled');
        $("#liner_usar").attr('disabled','disabled');
        $("#ancho_liner_usar").attr('disabled','disabled');
        $("#tamano_fabricar").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#pinza").attr('disabled','disabled');
        $("#reverso_usar").attr('disabled','disabled');
        $("#total_pliegos_fabricar").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
        $("#total_pliegos_producidos").attr('disabled','disabled');
        $("#total_tarima_producida").attr('disabled','disabled');
        $("#tipo_usu").attr('disabled','disabled');
        $("#par_1").attr('disabled','disabled');
        $("#par_2").attr('disabled','disabled');
        $("#par_3").attr('disabled','disabled');
        $("#ancho_corrugado").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
    }
    
    if(monotapa_estatus==2){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-primary' role='alert'>Monotapa Liberada Parcial - "+fecha_monotapa+"</div>");

        //$("#descripcion_del_trabajo").attr('disabled','disabled');
      /*  $("#comentario_repeticion").attr('disabled','disabled');
        $("#onda_usar").attr('disabled','disabled');
        $("#ancho_onda").attr('disabled','disabled');
        $("#liner_usar").attr('disabled','disabled');
        $("#ancho_liner_usar").attr('disabled','disabled');
        $("#tamano_fabricar").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#pinza").attr('disabled','disabled');
        $("#reverso_usar").attr('disabled','disabled');
        $("#total_pliegos_fabricar").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
        $("#total_pliegos_producidos").attr('disabled','disabled');
        $("#total_tarima_producida").attr('disabled','disabled');
        $("#tipo_usu").attr('disabled','disabled');
        $("#par_1").attr('disabled','disabled');
        $("#par_2").attr('disabled','disabled');
        $("#par_3").attr('disabled','disabled');
        $("#ancho_corrugado").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');*/
    }

}

function valor_inicial_liner() {

    var val_prov=$("#val_prov").val();
    var liner_estatus=$("#val_liner").val();
    var comprar_liner=$("#comprar_liner").val();
    var fecha_liner=$("#fecha_liner").val();
    


    
    $("#hay_que_comprar_liner").val(comprar_liner);
    $("#proveedor").val(val_prov);


    if(liner_estatus==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Liner Liberada - "+fecha_liner+"</div>");

        $("#descripcion_del_trabajo").attr('disabled','disabled');
        $("#ancho_corte_liner").attr('disabled','disabled');
        $("#para_bobinado").attr('disabled','disabled');
        $("#ancho_a_usar_liner").attr('disabled','disabled');
        $("#ancho_seleccionado_bobina").attr('disabled','disabled');
        $("#gramaje_liner").attr('disabled','disabled');
        $("#gramaje_seleccionado_liner").attr('disabled','disabled');
        $("#kilo_liner").attr('disabled','disabled');
        $("#total_kilos_liner").attr('disabled','disabled');
        $("#ubicacion_liner").attr('disabled','disabled');
        $("#preguntar_a_liner").attr('disabled','disabled');
        $("#numero_bobina_liner").attr('disabled','disabled');
        $("#hay_que_comprar_liner").attr('disabled','disabled');
        $("#proveedor").attr('disabled','disabled');
        $("#fecha_estimada").attr('disabled','disabled');
        $("#total_o_parcial").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');

    }
    calcular_kilos();
    EstatusComprarLiner(liner_estatus);
}

function calcular_kilos(){
    var tipo=$("#nodo").val();
    var forma=$("#forma").val();
    var cantidad=$("#cantidad").val();
    //var total_cajas_ancho=$("#total_cajas_ancho").val();
    
    	
    var ancho_bobina=$("#ancho_seleccionado_bobina").val();
    var largo_cortar=$("#largo_cortar").val();
    var total_pliego=$("#total_pliego").val();
    var gramaje_seleccionado=$("#gramaje_seleccionado_liner").val();
    
       
   var kilos_seleccionado=((((ancho_bobina)*(largo_cortar)*(total_pliego)*(gramaje_seleccionado)))/1000000000);
  
   kilos_seleccionado = Math.ceil(kilos_seleccionado);
   
    $("#total_kilos_liner").val(kilos_seleccionado);
    
    if((tipo=="Rollos y Monotapas")&&(forma=="0")){	
       var cantidad=$("#cantidad").val();
       var ancho=$("#ancho_mm").val();
       var largo=$("#largo").val();

       kilos_seleccionado=((gramaje_seleccionado)* (cantidad) * (ancho) * (largo)/10000000);
       $("#total_kilos_liner").val(kilos_seleccionado);
    }
    if((tipo=="Rollos y Monotapas")&&(forma=="2")){
        var total_metro=$("#total_metro").val();
        var ancho=$("#ancho_mm").val();
        var largo=$("#largo").val();
        
        kilos_seleccionado=((gramaje_seleccionado)* (total_metro) * (ancho)/100000);
        $("#total_kilos_liner").val(kilos_seleccionado);

     }
    if((tipo=="Rollos y Monotapas")&&(forma=="1")){
        var ancho=$("#ancho_mm").val();
        var largo=$("#largo").val();
        
        kilos_seleccionado=((gramaje_seleccionado)* (largo) * (ancho)/100000);
        $("#total_kilos_liner").val(kilos_seleccionado);

     }
    
    if((tipo=="Rollos y Monotapas")&&(forma=="3")){
        var ancho=$("#ancho_mm").val();
        var metros=$("#metros").val();
        
        kilos_seleccionado=((gramaje_seleccionado)* (metros) * (ancho)/100000).toFixed(2);
        $("#total_kilos_liner").val(kilos_seleccionado);

     }
    
    if((tipo=="Tabiques")){
    	
    	var largo_a_entregar=$("#largo_a_entregar").val();
        var ancho_individual=$("#ancho_individual").val();
        var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
        var total_tabique = $("#total_tabique").val();
        
        
        
       /* alert(gramaje_seleccionado);
        alert(largo_a_entregar);
        alert(ancho_seleccionado_bobina);*/
       
    	kilos_seleccionado=((gramaje_seleccionado)* (largo_a_entregar) *(total_tabique)* (ancho_seleccionado_bobina)/1000000000);
    	kilos_seleccionado = Math.ceil(kilos_seleccionado);
    	$("#total_kilos_liner").val(kilos_seleccionado);

     }
   
}

function calcular_kilos_onda(){
	
    var ancho_bobina=$("#ancho_bobina").val();
    var largo_cortar=$("#largo_cortar").val();
    var total_pliego=$("#total_pliego").val();
    var gramaje_seleccionado=$("#gramaje_seleccionado_onda").val();
    var cantidad=$("#cantidad").val();
    
    /*alert(ancho_bobina);
   alert(largo_cortar);
   alert(total_pliego);
   alert(gramaje_seleccionado);
   alert(cantidad);*/
         
    var kilos_seleccionado=(((ancho_bobina)*(largo_cortar)*(total_pliego)*(gramaje_seleccionado)/1000000000)*1.37);
  // kilos_seleccionado = kilos_seleccionado * cantidad;
    
    var tipo=$("#nodo").val();
    var forma=$("#forma").val();
    
    kilos_seleccionado = Math.ceil(kilos_seleccionado);
    
   // alert(kilos_seleccionado);
    
    $("#total_kilo_onda").val(kilos_seleccionado);
    
       
    if((tipo=="Rollos y Monotapas")&&(forma=="0")){	
        var cantidad=$("#cantidad").val();
        var ancho=$("#ancho_mm").val();
        var largo=$("#largo").val();

        kilos_seleccionado=((gramaje_seleccionado)* (cantidad) * (ancho) * (largo)/10000000).toFixed(2);
        console.log(kilos_seleccionado);
        $("#total_kilo_onda").val(kilos_seleccionado);
     }
     if((tipo=="Rollos y Monotapas")&&(forma=="2")){
         var total_metro=$("#total_metro").val();
         var ancho=$("#ancho_mm").val();
         var largo=$("#largo").val();
         
         kilos_seleccionado=((gramaje_seleccionado)* (total_metro) * (ancho)*(1.37)/100000).toFixed(2);
         $("#total_kilo_onda").val(kilos_seleccionado);
      }
     
     if((tipo=="Rollos y Monotapas")&&(forma=="1")){	
         var ancho=$("#ancho_mm").val();
         var largo=$("#largo").val();
         
         kilos_seleccionado=((gramaje_seleccionado)* (largo) * (ancho) * (1.37)/100000).toFixed(4);
         $("#total_kilo_onda").val(kilos_seleccionado);
      }
     
     if((tipo=="Rollos y Monotapas")&&(forma=="3")){
         var ancho=$("#ancho_mm").val();
         var metros=$("#metros").val();
         
         kilos_seleccionado=((gramaje_seleccionado)* (metros) * (ancho)* (1.37)/100000).toFixed(2);
         $("#total_kilo_onda").val(kilos_seleccionado);

      }
     
     if((tipo=="Tabiques")){
    	 
    	// alert("entro");
     	
     	         
         var largo_a_entregar=$("#largo_a_entregar").val();
         var ancho_individual=$("#ancho_individual").val();
         var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
         var total_tabique = $("#total_tabique").val();
         
         
        
     	kilos_seleccionado=((gramaje_seleccionado)* (largo_a_entregar) *(total_tabique)* (ancho_individual)* (1.37)/10000000);
     	//kilos_seleccionado = kilos_seleccionado * cantidad;
     	
     	// alert(kilos_seleccionado);
     	
     	 kilos_seleccionado = Math.ceil(kilos_seleccionado);
         $("#total_kilo_onda").val(kilos_seleccionado);

      }
}

function GuardarLiner() {

    var des_tra = $("#descripcion_del_trabajo").val();
    var ancho_corte_liner = $("#ancho_corte_liner").val();
    var para_bobinado = $("#para_bobinado").val();
    var ancho_usar_liner = $("#ancho_a_usar_liner").val();
    var anc_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
    var gramaje_liner = $("#gramaje_liner").val();
    var gra_liner_seleccionado = $("#gramaje_seleccionado_liner").val();
    var kilo_liner = $("#kilo_liner").val();
    var total_kilos_liner = $("#total_kilos_liner").val();
    var ubicacion_liner = $("#ubicacion_liner").val();
    var preguntar_a_liner = $("#preguntar_a_liner").val();
    var n_bobina_liner = $("#numero_bobina_liner").val();
    var comprar_liner = $("#hay_que_comprar_liner").val();
    var proveedor = $("#proveedor").val();
    var fecha = $("#fecha_estimada").val();
    var t_parcial = $("#total_o_parcial").val();
    var id_cotizacion = $("#cotizacion").val();
    var liberar = $("#liberar").val();
    var ruta = $("#ruta").val();
    var id_liner = $("#id_liner").val();
    var nodo = $("#nodo").val();
    var vendedor_orden = $("#vendedor_orden").val();
    var detalle = $("#detalle").val();

    
    


    $.ajax({
        url: ruta+"caja_standard/registrar_liner",
        global: false,
        type: "POST",
        data: {
            des_tra: des_tra,
            ancho_corte_liner: ancho_corte_liner,
            para_bobinado: para_bobinado,
            ancho_usar_liner: ancho_usar_liner,
            anc_seleccionado_bobina: anc_seleccionado_bobina,
            gramaje_liner: gramaje_liner,
            gra_liner_seleccionado: gra_liner_seleccionado,
            kilo_liner: kilo_liner,
            total_kilos_liner: total_kilos_liner,
            ubicacion_liner: ubicacion_liner,
            preguntar_a_liner: preguntar_a_liner,
            n_bobina_liner: n_bobina_liner,
            comprar_liner: comprar_liner,
            proveedor: proveedor,
            fecha: fecha,
            t_parcial: t_parcial,
            id_cotizacion: id_cotizacion,
            liberar: liberar,
            id_liner: id_liner,
            nodo: nodo,
            vendedor_orden: vendedor_orden,
            detalle: detalle
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
            //console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function EstatusComprarLiner(liner_estatus){
	var comprar_liner = $("#hay_que_comprar_liner").val();
	
	
	if(comprar_liner==1){
		$("#proveedor").val("0");
		$("#vendedor_orden").val("");
		$("#fecha_estimada").val("");
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");

	}
	if(comprar_liner==2){
		
		$("#proveedor").removeAttr("disabled");
		$("#vendedor_orden").removeAttr("disabled");
		$("#fecha_estimada").removeAttr("disabled");

	}
	
	if(liner_estatus==1){
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");
	}

}
function EstatusComprarOnda(est_onda){
	var comprar_liner = $("#hay_que_comprar_onda").val();
	
	
	if(comprar_liner==1){
		$("#proveedor").val("0");
		$("#vendedor_orden").val("");
		$("#fecha_estimada").val("");
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");

	}
	if(comprar_liner==2){
		
		$("#proveedor").removeAttr("disabled");
		$("#vendedor_orden").removeAttr("disabled");
		$("#fecha_estimada").removeAttr("disabled");

	}
	
	if(est_onda==1){
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");
	}

}

function EstatusComprarContratapa(est_contratapa){
	var comprar_liner = $("#comprar_contratapa").val();
	
	
	if(comprar_liner==1){
		$("#proveedor").val("0");
		$("#vendedor_orden").val("");
		$("#fecha_estimada").val("");
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");

	}
	if(comprar_liner==2){
		
		$("#proveedor").removeAttr("disabled");
		$("#vendedor_orden").removeAttr("disabled");
		$("#fecha_estimada").removeAttr("disabled");

	}
	
	if(est_contratapa==1){
		$("#proveedor").attr("disabled","disabled");
		$("#vendedor_orden").attr("disabled","disabled");
		$("#fecha_estimada").attr("disabled","disabled");
	}

}

function LiberarLiner() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

        var des_tra = $("#descripcion_del_trabajo").val();
        var ancho_corte_liner = $("#ancho_corte_liner").val();
        var para_bobinado = $("#para_bobinado").val();
        var ancho_usar_liner = $("#ancho_a_usar_liner").val();
        var anc_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
        var gramaje_liner = $("#gramaje_liner").val();
        var gra_liner_seleccionado = $("#gramaje_seleccionado_liner").val();
        var kilo_liner = $("#kilo_liner").val();
        var total_kilos_liner = $("#total_kilos_liner").val();
        var ubicacion_liner = $("#ubicacion_liner").val();
        var preguntar_a_liner = $("#preguntar_a_liner").val();
        var n_bobina_liner = $("#numero_bobina_liner").val();
        var comprar_liner = $("#hay_que_comprar_liner").val();
        var proveedor = $("#proveedor").val();
        var fecha = $("#fecha_estimada").val();
        var t_parcial = $("#total_o_parcial").val();
        var id_cotizacion = $("#cotizacion").val();
        var liberar = $("#liberar").val();
        var ruta = $("#ruta").val();
        var id_liner = $("#id_liner").val();
        var val_defi = $("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        /*if(des_tra==""){
            alert(".::EL CAMPO Comentarios para una eventual repetición ES OBLIGATORIO::.");
            return false;
        }*/

        /*if(ancho_corte_liner==""){
            alert(".::EL CAMPO Ancho corte final a usar ES OBLIGATORIO::.");
            return false;
        }*/

        if(ancho_usar_liner==""){
            alert(".::EL CAMPO Ancho a usar liner ES OBLIGATORIO::.");
            return false;
        }

        if(anc_seleccionado_bobina==""){
            alert(".::EL CAMPO Ancho de Bobina Liner seleccionado ES OBLIGATORIO::.");
            return false;
        }

        if(gramaje_liner==""){
            alert(".::EL CAMPO Ancho de Bobina Liner seleccionado ES OBLIGATORIO::.");
            return false;
        }

        if(gra_liner_seleccionado==""){
            alert(".::EL CAMPO Gramaje seleccionado liner ES OBLIGATORIO::.");
            return false;
        }

        if(kilo_liner==""){
            alert(".::EL CAMPO Kilo Liner ES OBLIGATORIO::.");
            return false;
        }

        if(total_kilos_liner==""){
            alert(".::EL CAMPO Total Kilos de la Liner seleccionado ES OBLIGATORIO::.");
            return false;
        }

        if(ubicacion_liner==""){
            alert(".::EL CAMPO Ubicación Liner ES OBLIGATORIO::.");
            return false;
        }

        if(preguntar_a_liner==""){
            alert(".::EL CAMPO Preguntar a (Liner) ES OBLIGATORIO::.");
            return false;
        }

        if(n_bobina_liner==""){
            alert(".::EL CAMPO Número de Bobina Liner ES OBLIGATORIO::.");
            return false;
        }


        $("#liberar").val(1);
        GuardarLiner();

    }

}

function GuardarOnda() {

    var comentarios_repeticion = $("#comentarios_repeticion").val();
    var ancho_corte_final_usar = $("#ancho_corte_final_usar").val();
    var ancho_bobina = $("#ancho_bobina").val();
    var para_bobinado = $("#para_bobinado").val();
    var gramaje_onda = $("#gramaje_onda").val();
    var kilo_onda = $("#kilo_onda").val();
    var gramaje_seleccionado_onda = $("#gramaje_seleccionado_onda").val();
    var total_kilo_onda = $("#total_kilo_onda").val();
    var ubicacion_onda = $("#ubicacion_onda").val();
    var pregunta_onda = $("#pregunta_onda").val();
    var numero_bobinado_onda = $("#numero_bobinado_onda").val();
    var comprar_onda = $("#comprar_onda").val();
    var proveedor = $("#proveedor").val();
    var fecha_estimada = $("#fecha_estimada").val();
    var tipo_entrega = $("#tipo_entrega").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var ruta = $("#ruta").val();
    var id_onda = $("#id_liner").val();
    var nodo = $("#nodo").val();
    var vendedor_orden = $("#vendedor_orden").val();
    var hay_que_comprar_onda = $("#hay_que_comprar_onda").val();
    var detalle = $("#detalle").val();


    

    $.ajax({
        url: ruta+"caja_standard/registrar_onda",
        global: false,
        type: "POST",
        data: {
                 comentarios_repeticion: comentarios_repeticion,
                 ancho_corte_final_usar: ancho_corte_final_usar,
                 ancho_bobina: ancho_bobina,
                 para_bobinado: para_bobinado,
                 gramaje_onda: gramaje_onda,
                 kilo_onda: kilo_onda,
                 gramaje_seleccionado_onda: gramaje_seleccionado_onda,
                 total_kilo_onda: total_kilo_onda,
                 ubicacion_onda: ubicacion_onda,
                 pregunta_onda: pregunta_onda,
                 numero_bobinado_onda: numero_bobinado_onda,
                 comprar_onda: comprar_onda,
                 proveedor: proveedor,
                 fecha_estimada: fecha_estimada,
                 tipo_entrega: tipo_entrega,
                 cotizacion_id: cotizacion_id,
                 liberar: liberar,
                 id_onda: id_onda,
                 nodo: nodo,
                 vendedor_orden: vendedor_orden,
                 hay_que_comprar_onda: hay_que_comprar_onda,
                 detalle:detalle
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
            //console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function LiberarOnda() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

        var comentarios_repeticion = $("#comentarios_repeticion").val();
        var ancho_corte_final_usar = $("#ancho_corte_final_usar").val();
        var ancho_bobina = $("#ancho_bobina").val();
        var para_bobinado = $("#para_bobinado").val();
        var gramaje_onda = $("#gramaje_onda").val();
        var kilo_onda = $("#kilo_onda").val();
        var gramaje_seleccionado_onda = $("#gramaje_seleccionado_onda").val();
        var total_kilo_onda = $("#total_kilo_onda").val();
        var ubicacion_onda = $("#ubicacion_onda").val();
        var pregunta_onda = $("#pregunta_onda").val();
        var numero_bobinado_onda = $("#numero_bobinado_onda").val();
        var comprar_onda = $("#comprar_onda").val();
        var proveedor = $("#proveedor").val();
        var fecha_estimada = $("#fecha_estimada").val();
        var tipo_entrega = $("#tipo_entrega").val();
        var cotizacion_id = $("#cotizacion_id").val();
        var liberar = $("#liberar").val();
        var ruta = $("#ruta").val();
        var id_onda = $("#id_liner").val();
        var val_defi = $("#val_defi").val();

        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        /*if(comentarios_repeticion==""){
            alert(".::EL CAMPO Comentarios para una eventual repetición ES OBLIGATORIO::.");
            return false;
        }*/

        if(ancho_corte_final_usar==""){
            alert(".::EL CAMPO Ancho corte final a usar ES OBLIGATORIO::.");
            return false;
        }

        if(ancho_bobina==""){
            alert(".::EL CAMPO Ancho seleccionado de bobina ES OBLIGATORIO::.");
            return false;
        }


        if(gramaje_onda==""){
            alert(".::EL CAMPO Gramaje Onda ES OBLIGATORIO::.");
            return false;
        }

        if(kilo_onda==""){
            alert(".::EL CAMPO Kilo Onda ES OBLIGATORIO::.");
            return false;
        }

        if(gramaje_seleccionado_onda==""){
            alert(".::EL CAMPO Gramaje seleccionado Onda ES OBLIGATORIO::.");
            return false;
        }

        if(total_kilo_onda==""){
            alert(".::EL CAMPO Total Kilos de la Onda seleccionado ES OBLIGATORIO::.");
            return false;
        }

        if(ubicacion_onda==""){
            alert(".::EL CAMPO Ubicación Onda ES OBLIGATORIO::.");
            return false;
        }

        if(pregunta_onda==""){
            alert(".::EL CAMPO Preguntar a (Onda) ES OBLIGATORIO::.");
            return false;
        }

        if(numero_bobinado_onda==""){
            alert(".::EL CAMPO Número de Bobina Onda  ES OBLIGATORIO::.");
            return false;
        }

        $("#liberar").val(1);
        GuardarOnda();

    }

}

function valor_inicial_onda() {

    var para_bobinado = $("#val_para_bobi").val();
    var tipo_entrega = $("#val_tipo_entrega").val();
    var est_onda = $("#val_estatus").val();
    var comprar_onda = $("#comprar_onda").val();
    var val_prov=$("#val_prov").val();
    var fecha_onda=$("#fecha_onda").val();


    
    $("#proveedor").val(val_prov);
    $("#hay_que_comprar_onda").val(comprar_onda);
    
    if(est_onda==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Onda Liberada - "+fecha_onda+"</div>");
        $("#comentarios_repeticion").attr('disabled','disabled');
        $("#ancho_corte_final_usar").attr('disabled','disabled');
        $("#ancho_bobina").attr('disabled','disabled');
        $("#para_bobinado").attr('disabled','disabled');
        $("#gramaje_onda").attr('disabled','disabled');
        $("#kilo_onda").attr('disabled','disabled');
        $("#gramaje_seleccionado").attr('disabled','disabled');
        $("#total_kilo_onda").attr('disabled','disabled');
        $("#ubicacion_onda").attr('disabled','disabled');
        $("#pregunta_onda").attr('disabled','disabled');
        $("#numero_bobinado_onda").attr('disabled','disabled');
        $("#comprar_onda").attr('disabled','disabled');
        $("#proveedor").attr('disabled','disabled');
        $("#fecha_estimada").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
        $("#tipo_entrega").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
        
        
        $("#hay_que_comprar_onda").attr('disabled','disabled');
        $("#proveedor").removeAttr('disabled','disabled');
        $("#vendedor_orden").attr('disabled','disabled');
        $("#fecha_estimada").attr('disabled','disabled');

    }



    $("#para_bobinado").val(para_bobinado);
    $("#tipo_entrega").val(tipo_entrega);

    calcular_kilos_onda();
    EstatusComprarOnda(est_onda);
}

function GuardarContratapa() {

        var comentarios_repeticion = $("#comentarios_repeticion").val();
        var ancho = $("#ancho").val();
        var largo = $("#largo").val();
        var gramaje = $("#gramaje").val();
        var tipo_corrugado = $("#tipo_corrugado").val();
        var gramaje_seleccionado = $("#gramaje_seleccionado").val();
        var ancho_bobina = $("#ancho_bobina_contratapa").val();
        var hay_que_bobinar = $("#hay_que_bobinar").val();
        var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
        var total_kilos = $("#total_kilos").val();
        var total_kilos_seleccionado = $("#total_kilos_seleccionado").val();
        var ubicacion_contratapa = $("#ubicacion_contratapa").val();
        var pregunta_contratapa = $("#pregunta_contratapa").val();
        var numero_bobina = $("#numero_bobina").val();
        var quien_bobina = $("#quien_bobina").val();
        var comprar_contratapa = $("#comprar_contratapa").val();
        var tipo_entrega = $("#tipo_entrega").val();
        var ruta = $("#ruta").val();
        var cotizacion_id = $("#cotizacion_id").val();
        var estatus = $("#estatus").val();
        var liberar = $("#liberar").val();
        var total_bobina = $("#total_bobina").val();
        var id_contratapa = $("#id_contratapa").val();
        var nodo = $("#nodo").val();
        var proveedor = $("#proveedor").val();
        var vendedor_orden = $("#vendedor_orden").val();
        var fecha_estimada = $("#fecha_estimada").val();
        var ancho_seleccionado_bobina = $("#ancho_corte_final_usar").val();
        var detalle = $("#detalle").val();



        

    $.ajax({
        url: ruta+"caja_standard/registrar_contratapa",
        global: false,
        type: "POST",
        data: {
            comentarios_repeticion: comentarios_repeticion,
            ancho: ancho,
            largo: largo,
            gramaje: gramaje,
            tipo_corrugado: tipo_corrugado,
            gramaje_seleccionado: gramaje_seleccionado,
            ancho_bobina: ancho_bobina,
            hay_que_bobinar: hay_que_bobinar,
            ancho_seleccionado_bobina: ancho_seleccionado_bobina,
            total_kilos: total_kilos,
            total_kilos_seleccionado: total_kilos_seleccionado,
            ubicacion_contratapa: ubicacion_contratapa,
            pregunta_contratapa: pregunta_contratapa,
            numero_bobina: numero_bobina,
            quien_bobina: quien_bobina,
            comprar_contratapa: comprar_contratapa,
            tipo_entrega: tipo_entrega,
            cotizacion_id: cotizacion_id,
            estatus: estatus,
            liberar: liberar,
            total_bobina: total_bobina,
            id_contratapa: id_contratapa,
            nodo: nodo,
            proveedor: proveedor,
            vendedor_orden:vendedor_orden,
            fecha_estimada: fecha_estimada,
            ancho_seleccionado_bobina: ancho_seleccionado_bobina,
            detalle: detalle

        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
           // console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                 alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function LiberarContratapa() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

            var comentarios_repeticion = $("#comentarios_repeticion").val();
            var ancho = $("#ancho").val();
            var largo = $("#largo").val();
            var gramaje = $("#gramaje").val();
            var tipo_corrugado = $("#tipo_corrugado").val();
            var gramaje_seleccionado = $("#gramaje_seleccionado").val();
            var ancho_bobina = $("#ancho_bobina_contratapa").val();
            var hay_que_bobinar = $("#hay_que_bobinar").val();
            var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
            var total_kilos = $("#total_kilos").val();
            var total_kilos_seleccionado = $("#total_kilos_seleccionado").val();
            var unidad_pliego = $("#unidad_pliego").val();
            var descripcion_contratapa = $("#descripcion_contratapa").val();
            var numero_bobina = $("#numero_bobina").val();
            var quien_bobina = $("#quien_bobina").val();
            var hay_stock = $("#hay_stock").val();
            var tipo_entrega = $("#tipo_entrega").val();
            var ruta = $("#ruta").val();
            var cotizacion_id = $("#cotizacion_id").val();
            var estatus = $("#estatus").val();
            var liberar = $("#liberar").val();
            var total_bobina = $("#total_bobina").val();
            var id_contratapa = $("#id_contratapa").val();
            var val_defi = $("#val_defi").val();



       /* if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }*/

        if(ancho==""){
            alert(".::EL CAMPO ancho ES OBLIGATORIO::.");
            return false;
        }

        if(largo==""){
            alert(".::EL CAMPO Largo ES OBLIGATORIO::.");
            return false;
        }

        if(ancho_bobina==""){
            alert(".::EL CAMPO Ancho seleccionado de bobina ES OBLIGATORIO::.");
            return false;
        }


        if(gramaje==""){
            alert(".::EL CAMPO Gramaje ES OBLIGATORIO::.");
            return false;
        }

        if(total_kilos==""){
            alert(".::EL CAMPO Kilo ES OBLIGATORIO::.");
            return false;
        }

        if(gramaje_seleccionado==""){
            alert(".::EL CAMPO Gramaje seleccionado Onda ES OBLIGATORIO::.");
            return false;
        }

        if(total_kilos_seleccionado==""){
            alert(".::EL CAMPO Total Kilos seleccionado ES OBLIGATORIO::.");
            return false;
        }

        $("#liberar").val(1);
        GuardarContratapa();
    }
}

function valor_inicial_contratapa() {

    var val_bobinar = $("#val_bobinar").val();
    var val_responsable=$("#val_responsable").val();
    var est_contratapa=$("#est_contratapa").val();
    var val_prov=$("#val_prov").val();
    var comprar_contratapa=$("#val_comprar_contratapa").val();
    var val_tipo_entrega=$("#val_tipo_entrega").val();
    var fecha_contratapa=$("#fecha_contratapa").val();

    
    $("#comprar_contratapa").val(comprar_contratapa);
    $("#quien_bobina").val(val_responsable);
    $("#hay_que_bobinar").val(val_bobinar);
    $("#proveedor").val(val_prov);
    $("#tipo_entrega").val(val_tipo_entrega);
    
    if(est_contratapa==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Contratapa Liberada - "+fecha_contratapa+"</div>");
        $("#comentarios_repeticion").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#gramaje").attr('disabled','disabled');
        $("#tipo_corrugado").attr('disabled','disabled');
        $("#gramaje_seleccionado").attr('disabled','disabled');
        $("#ancho_bobina").attr('disabled','disabled');
        $("#hay_que_bobinar").attr('disabled','disabled');
        $("#ancho_seleccionado_bobina").attr('disabled','disabled');
        $("#total_kilos").attr('disabled','disabled');
        $("#total_kilos_seleccionado").attr('disabled','disabled');
        $("#unidad_pliego").attr('disabled','disabled');
        $("#descripcion_contratapa").attr('disabled','disabled');
        $("#numero_bobina").attr('disabled','disabled');
        $("#quien_bobina").attr('disabled','disabled');
        $("#hay_stock").attr('disabled','disabled');
        $("#tipo_entrega").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        
        $("#ancho_corte_final_usar").attr('disabled','disabled');
        $("#ubicacion_contratapa").attr('disabled','disabled');
        $("#pregunta_contratapa").attr('disabled','disabled');
        $("#comprar_contratapa").attr('disabled','disabled');
        $("#proveedor").attr('disabled','disabled');
        $("#vendedor_orden").attr('disabled','disabled');
        $("#fecha_estimada").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');





    }
    calcular_kilos_contratapa();
    EstatusComprarContratapa(est_contratapa);
}

function calcular_kilos_contratapa(){
	
    var ancho_bobina=$("#ancho_corte_final_usar").val();
    var largo_cortar=$("#largo_cortar").val();
    var total_pliego=$("#total_pliego").val();
    var gramaje_seleccionado=$("#gramaje_seleccionado").val();
    var tipo=$("#nodo").val();
    var cantidad=$("#cantidad").val();

    
    var kilos_seleccionado=((ancho_bobina)*(largo_cortar)*(total_pliego)*(gramaje_seleccionado)/1000000000);
   
    //kilos_seleccionado = kilos_seleccionado*cantidad;
    
    kilos_seleccionado = Math.ceil(kilos_seleccionado);

    $("#total_kilos_seleccionado").val(kilos_seleccionado);
    
if((tipo=="Tabiques")){
    	        
        var largo_a_entregar=$("#largo_a_entregar").val();
        var ancho_individual=$("#ancho_individual").val();
        var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
        var total_tabique = $("#total_tabique").val();
       
        kilos_seleccionado=((gramaje_seleccionado)*(total_tabique)* (largo_a_entregar) * (ancho_seleccionado_bobina)/1000000000);
       
       // kilos_seleccionado = kilos_seleccionado*cantidad;
        
        kilos_seleccionado = Math.ceil(kilos_seleccionado);
        $("#total_kilos_seleccionado").val(kilos_seleccionado);

     }
   
}
function remover_select(val_colores){
	
console.log(val_colores);
if(val_colores==1){
	$("#medidas option[value='2']").remove();
	$("#medidas option[value='3']").remove();
	$("#medidas option[value='4']").remove();
}
if(val_colores==2){
	$("#medidas option[value='3']").remove();
	$("#medidas option[value='4']").remove();
}
if(val_colores==3){
	$("#medidas option[value='4']").remove();
}

	
}

function valor_inicial_clisse() {

    var val_medidas = $("#val_medidas").val();
    var val_entrega = $("#val_entrega").val();
    var proveedor = $("#val_proveedor").val();
    var est_clises = $("#est_clises").val();
    var val_colores = $("#val_colores").val();
    var fecha_clises = $("#fecha_clises").val();

    

    $("#medidas").val(val_medidas);
    $("#que_cliente").val(val_entrega);
    $("#proveedor").val(proveedor);

    if(est_clises==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Clises Liberada - "+fecha_clises+"</div>");

        $("#medidas").attr('disabled','disabled');
        $("#que_cliente").attr('disabled','disabled');
        $("#proveedor").attr('disabled','disabled');
        $("#guia_despacho").attr('disabled','disabled');
        $("#costo_cm").attr('disabled','disabled');
        $("#ruta").attr('disabled','disabled');
        $("#cotizacion_id").attr('disabled','disabled');
        $("#liberar").attr('disabled','disabled');
        $("#nodo").attr('disabled','disabled');
        $("#id_clises").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');


        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');


    }
    remover_select(val_colores);

}

function valor_inicial_plancha(){
	
	
    var val_p_usada=$("#val_p_usada").val();
    var val_l_usado=$("#val_l_usado").val();
    var est_plancha=$("#est_plancha").val();
    var usuario=$("#val_usuarios").val();
    var fecha_plancha=$("#fecha_plancha").val();

    var sumatoria_parcial=$("#sumatoria_parcial").val();
    var total_a_producir=$("#total_a_producir").val();
    var faltantes = (total_a_producir-sumatoria_parcial);
	

	
	var producidas=$("#producidas").val();
    var falt=$("#faltantes").val();



    $("#p_usada").val(val_p_usada);
    $("#l_usada").val(val_l_usado);
    $("#operario").val(usuario);

    

    if(est_plancha==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Plancha Liberada - "+fecha_plancha+"</div>");

        $("#material_usado").attr('disabled','disabled');
        $("#ancho_bobina").attr('disabled','disabled');
        $("#planchas_usadas").attr('disabled','disabled');
        $("#p_usada").attr('disabled','disabled');
        $("#l_usada").attr('disabled','disabled');
        $("#medida_fabricada").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#gramaje_contratapa").attr('disabled','disabled');
        $("#gramaje_onda").attr('disabled','disabled');
        $("#gramaje_liner").attr('disabled','disabled');
        $("#operario").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');

    }

    if(est_plancha==2){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-warning alert-dismissible fade in' role='alert'>Plancha Liberada Parcialmente - "+fecha_plancha+"<strong><br><strong>Producidas: "+producidas+"</strong><br><strong>Faltantes: "+falt+"</strong></div>");



        $("#material_usado").attr('disabled','disabled');
        $("#ancho_bobina").attr('disabled','disabled');
        $("#l_usada").attr('disabled','disabled');
        $("#medida_fabricada").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#gramaje_contratapa").attr('disabled','disabled');
        $("#gramaje_onda").attr('disabled','disabled');
        $("#gramaje_liner").attr('disabled','disabled');
        $("#operario").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');

       // $("#planchas_usadas").val(faltantes);

        $("#CantidadParcial").append("Plancha ya Liberadas: <strong>"+sumatoria_parcial+"</strong>");

    }

}

function CargarListados() {
    var ruta = $("#ruta").val();
    var operacion = $("#operacion").val();
    var estatus = $("#estatus").val();
    var estatus_filtro = $("#estatus option:selected").text();
    var operacion_filtro = $("#operacion option:selected").text();
    var color_filtro;
    

    if(operacion=="0"){
        alert("DEBE SELECCIONAR EL TIPO DE OPERACION");
        return false;
    }
    
    if((operacion==1) && (estatus==1)){
        operacion_filtro="";
    }

    if((operacion==2) && (estatus==3)){
        alert("NO HAY DEFINICIONES PENDIENTES");
        return false;
    }
    if((operacion==2) && (estatus==5)){
        alert("NO HAY DEFINICIONES CERRADAS");
        return false;
    }

    if(((operacion>=0)&&(operacion<=7)) && (estatus==5)){
        alert("NO HAY "+operacion_filtro+" CERRADAS");
        return false;
    }

    if(estatus==2){
        color_filtro="#ff361c";
    }
    if(estatus==3){
        color_filtro="#4dcc34";
    }
    if(estatus==4){
        color_filtro="#1622ff";
    }
    
    console.log(operacion, estatus);


    $.ajax({
        url: ruta+"orden_produccion_controller/consultar_listados",
        global: false,
        type: "POST",
        data: {operacion: operacion, estatus: estatus},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
            
            
            if(tam=="0"){
            	console.log("aqui");	
            }

            $.each(data, function (i,item){

                html += '<tr class="fila">'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['rut']+'</td>'
                html += '<td style="font-size:12px; width:20%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:20%; text-align: left;">'+item['forma_pago']+'</td>'
                html += '<td style="font-size:12px; width:10%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:15%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="color:'+color_filtro+'; width:10%;">'+operacion_filtro+' '+estatus_filtro+'</td>'
                // html += '<td><button name="editar" id="editar" class="btn btn-primary" nombre="'+item['nombre']+'" correo="'+item['correo']+'"  telefono="'+item['telefono']+'"onclick="ActualizarUsuario(this);"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button><button name="eliminar" id="eliminar" class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>'
                html += '</tr>';

            });
            //$("#msjCantidad").html("<h3>Resultado:"+tam+" Item</h3>");
            $("#dataListados tbody").html(html);
            $("#dataListados").DataTable({
                "language": {
                    "url": ruta+"public/frontend/js/Spanish.json",
                    "order": [[ 3, "desc" ]],
                    dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                }

            });

        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
    
}

function CargarListadosSinDefinir() {
    var ruta = $("#ruta").val();
    
    $("#dataListadosSinDefinir").DataTable({
        "language": {
            "url": ruta+"public/frontend/js/Spanish.json",
            "order": [[ 3, "desc" ]],
            dom: 'Bfrtip',
            buttons: ['copy','excel','print']
        }
    });
}


function CargarListadosCotizaciones() {

    var ruta = $("#ruta").val();
    
    $("#dataCotizaciones").DataTable({

        "lengthMenu": [[100, 150, 200, 300, -1], [100, 150, 200, 300, "Todos"]],
        "language": {
            "url": ruta+"public/frontend/js/Spanish.json",
            "order": [[ 3, "desc" ]],
            dom: 'Bfrtip'
        }
    });
   
}

function llenarTablaDefinicion() {
	
	var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;
    
    var id_cotizacion = $("#val_material").val();
    
    var material = $("#material").val();
    
    var chk_todos = $("#chk_todos").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/listar_todos",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas, 
	        	id_cotizacion : id_cotizacion,
	        	chk_todos : chk_todos,
	        	material  : material
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            var j = 0;
	            
	           // var vector_cot = new array();
	            
	        $.each(data['bandejas'], function (i,item){
	        	
	        	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'


            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

                html += '</tr>';
            });
            
            $.each(data['caja_standar'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Est</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_p']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	
            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

                html += '</tr>';
            
            });
            $.each(data['cajas_medidas_especiales'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
              	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Especial</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'


            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

                html += '</tr>';
            
            });
           /* console.log(data['cajas_planchas']);
            $.each(data['cajas_planchas'], function (i,item){
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Plancha</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'

                html += '</tr>';
            
            });*/
            $.each(data['cajas_solapa'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
              	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Solapa</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'


            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

            	html += '</tr>';
            
            });
            $.each(data['placas_stock_ventas'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">Placas Stock</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

                html += '</tr>';
            
            });
           
            $.each(data['tabiques'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
              	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos('+item['numero_cotizacion']+');"></button></td>'

                html += '</tr>';
            
            });
             	
            	            
            $("#tablaCombinar tbody").html(html);
            //$("#tablaCombinar2 tbody").html(html);
           // $("#vector_cot").value(vector_cot);


	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR 2: "+thrownError);
	            return false;
	        }
	    });
            
}

function llenarTablaDefinicion2() {
	
	var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;
    
    var id_cotizacion = $("#val_material").val();
    
    var material = $("#material").val();
    
    var chk_todos = $("#chk_todos2").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/listar_todos2",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas, 
	        	id_cotizacion : id_cotizacion,
	        	chk_todos : chk_todos,
	        	material  : material
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            var j = 0;
	            
	           // var vector_cot = new array();
	            
	        $.each(data['bandejas'], function (i,item){
	        	
	        	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            });
            
            $.each(data['caja_standar'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Est</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_p']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'
            	
            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_p']+', '+item['cantidad']+', '+item['result2']+'); "></button></td>'

                html += '</tr>';
            
            });
            $.each(data['cajas_medidas_especiales'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
              	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Especial</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
           /* console.log(data['cajas_planchas']);
            $.each(data['cajas_planchas'], function (i,item){
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Plancha</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'

                html += '</tr>';
            
            });*/
            $.each(data['cajas_solapa'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Solapa</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

            	html += '</tr>';
            
            });
            $.each(data['placas_stock_ventas'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">Placas Stock</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
           	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
                html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

                if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
           
            $.each(data['tabiques'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos2('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
             	
            	            
            //$("#tablaCombinar tbody").html(html);
            $("#tablaCombinar2 tbody").html(html);
           // $("#vector_cot").value(vector_cot);


	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR: "+thrownError);
	            return false;
	        }
	    });
            
            limpiarTodo();
            
}


function llenarTablaDefinicion3() {
	
    var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;
    
    var id_cotizacion = $("#val_material").val();
    
    var material = $("#material").val();
    
    var chk_todos = $("#chk_todos3").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/listar_todos2",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas, 
	        	id_cotizacion : id_cotizacion,
	        	chk_todos : chk_todos,
	        	material  : material
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            var j = 0;
	            
	           // var vector_cot = new array();
	            
	        $.each(data['bandejas'], function (i,item){
	        	
	        	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'

            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            });
            
            $.each(data['caja_standar'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Est</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_p']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'
            	
            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_p']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
            $.each(data['cajas_medidas_especiales'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
              	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C.Especial</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
           /* console.log(data['cajas_planchas']);
            $.each(data['cajas_planchas'], function (i,item){
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Plancha</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'

                html += '</tr>';
            
            });*/
            $.each(data['cajas_solapa'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">C. Solapa</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

            	html += '</tr>';
            
            });
            $.each(data['placas_stock_ventas'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">Placas Stock</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
           	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
                html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

                if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
           
            $.each(data['tabiques'], function (i,item){
            	
            	//vector_cot[j] = item['numero_cotizacion'];
	        	//j = j + 1;
            	
                html += '<tr>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['numero_cotizacion']+'</td>'
               	html += '<td style="font-size:7px; width:5%; text-align: center;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['id_nodo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['codigo']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['cantidad']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['ancho_u']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['largo_u']+'</td>'
            	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result']+'</td>'
               	html += '<td style="font-size:10px; width:5%; text-align: center;">'+item['result2']+'</td>'

            	if(item['es_contratapa'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Contra</td>'
            	}
            	else if(item['es_onda'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Onda</td>'
            	}
            	else if(item['es_liner'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Liner</td>'
            	}
            	else if(item['es_definicion'] != null){
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Def</td>'
            	}
            	else{
            		html += '<td style="font-size:10px; width:5%; text-align: center;">Sin</td>'

            	}
            	
            	html += '<td style="font-size:10px; width:5%; text-align: center;"><button type="button" class="icon-pencil" id="btnSel" name="btnSel" onclick="cargarDatos3('+item['numero_cotizacion']+', '+item['ancho_u']+', '+item['largo_u']+', '+item['cantidad']+', '+item['result2']+');"></button></td>'

                html += '</tr>';
            
            });
             	
            	            
            //$("#tablaCombinar tbody").html(html);
            $("#tablaCombinar3 tbody").html(html);
           // $("#vector_cot").value(vector_cot);


	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR: "+thrownError);
	            return false;
	        }
	    });
            
            limpiarTodo();
            
}


function ingresarTablaCombinacion(){
    
    //COMBINACION 1
    var num_cotizacion_1_A = $("#num_cotizacion_k").val();
    var num_cotizacion_1_B = $("#num_cotizacion_kk").val();
    var num_cotizacion_2_A = $("#num_cotizacion_i").val();
    var num_cotizacion_2_B = $("#num_cotizacion_ii").val();
    var num_cotizacion_3_A = $("#num_cotizacion_j").val();
    var num_cotizacion_3_B = $("#num_cotizacion_jj").val();
    
    var cajas_producidas_1_A = $("#cajas_producidas_orden_1_k").val();
    var cajas_producidas_1_B = $("#cajas_producidas_orden_2_k").val();
    var cajas_producidas_2_A = $("#cajas_producidas_orden_1_i").val();
    var cajas_producidas_2_B = $("#cajas_producidas_orden_2_i").val();
    var cajas_producidas_3_A = $("#cajas_producidas_orden_1_j").val();
    var cajas_producidas_3_B = $("#cajas_producidas_orden_2_j").val();
    
    var ancho_individual_1_A = $("#ancho_individual_k").val();
    var ancho_individual_2_A = $("#ancho_individual_i").val();
    var ancho_individual_3_A = $("#ancho_individual_j").val();
    
    var ancho_nuevo = $("#ancho_nuevo_k").val();
    var nuevo_material = $("#nuevo_codigo_gramaje_i").val();
    var metros_producidos = $("#menor_mt_prod").val();
    
    
    //COMBINACION 2
    var num_cotizacion2_1_A = $("#num_cotizacion3_k").val();
    var num_cotizacion2_1_B = $("#num_cotizacion3_kk").val();
    var num_cotizacion2_2_A = $("#num_cotizacion3_i").val();
    var num_cotizacion2_2_B = $("#num_cotizacion3_ii").val();
    var num_cotizacion2_3_A = $("#num_cotizacion3_j").val();
    var num_cotizacion2_3_B = $("#num_cotizacion3_jj").val();
    
    var cajas_producidas2_1_A = $("#cajas_producidas_orden3_1_k").val();
    var cajas_producidas2_1_B = $("#cajas_producidas_orden3_2_k").val();
    var cajas_producidas2_2_A = $("#cajas_producidas_orden3_1_i").val();
    var cajas_producidas2_2_B = $("#cajas_producidas_orden3_2_i").val();
    var cajas_producidas2_3_A = $("#cajas_producidas_orden3_1_j").val();
    var cajas_producidas2_3_B = $("#cajas_producidas_orden3_2_j").val();
    
    var ancho_individual2_1_A = $("#ancho_individual3_k").val();
    var ancho_individual2_2_A = $("#ancho_individual3_i").val();
    var ancho_individual2_3_A = $("#ancho_individual3_j").val();
    
    var ancho_nuevo2 = $("#ancho_nuevo3_k").val();
    var nuevo_material2 = $("#nuevo_codigo_gramaje3_i").val();
    var metros_producidos2 = $("#menor_mt_prod3").val();
    
    //COMBINACION 3
    var num_cotizacion3_1 = $("#num_cotizacion2_k").val();
    var num_cotizacion3_2 = $("#num_cotizacion2_i").val();
    var num_cotizacion3_3 = $("#num_cotizacion2_j").val();
            
    var ancho_individual_nuevo3 = $("#ancho_individual_nuevo2_k").val();
    var ancho_nuevo3 = $("#ancho_nuevo2_k").val();
    var nuevo_material3 = $("#nuevo_codigo_gramaje2_i").val();
    var metros_producidos3 = $("#menor_mt_prod2").val();
    
    var ruta = $("#ruta").val();

    //alert(num_cotizacion1);
    //return;
    
    //cargar_ajaxAdd2(webroot+'caja_standard/ingresar_tabla_agrupa',num_cotizacion1,num_cotizacion2,num_cotizacion3,num_cotizacion4,num_cotizacion5,num_cotizacion6,total_metros1,total_metros2,total_metros3,total_metros4,total_metros5,total_metros6,'prueba'); 

     $.ajax({
        url: ruta+"caja_standard/registrar_combinaciones",
        global: false,
        type: "POST",
        data: {
            num_cotizacion_1_A: num_cotizacion_1_A,
            num_cotizacion_1_B: num_cotizacion_1_B, 
            num_cotizacion_2_A: num_cotizacion_2_A,
            num_cotizacion_2_B: num_cotizacion_2_B,
            num_cotizacion_3_A: num_cotizacion_3_A, 
            num_cotizacion_3_B: num_cotizacion_3_B, 
            cajas_producidas_1_A: cajas_producidas_1_A, 
            cajas_producidas_1_B: cajas_producidas_1_B,
            cajas_producidas_2_A: cajas_producidas_2_A,
            cajas_producidas_2_B: cajas_producidas_2_B,
            cajas_producidas_3_A: cajas_producidas_2_B,
            cajas_producidas_3_B: cajas_producidas_2_B,
            ancho_individual_1_A: ancho_individual_1_A,
            ancho_individual_2_A: ancho_individual_2_A,
            ancho_individual_3_A: ancho_individual_3_A,
            ancho_nuevo: ancho_nuevo, 
            nuevo_material: nuevo_material, 
            metros_producidos: metros_producidos,
            
            num_cotizacion2_1_A: num_cotizacion2_1_A,
            num_cotizacion2_1_B: num_cotizacion2_1_B, 
            num_cotizacion2_2_A: num_cotizacion2_2_A, 
            num_cotizacion2_2_B: num_cotizacion2_2_B, 
            num_cotizacion2_3_A: num_cotizacion2_3_A, 
            num_cotizacion2_3_B: num_cotizacion2_3_B,     
            cajas_producidas2_1_A: cajas_producidas2_1_A,
            cajas_producidas2_1_B: cajas_producidas2_1_B,
            cajas_producidas2_2_A: cajas_producidas2_2_A,
            cajas_producidas2_2_B:  cajas_producidas2_2_B,
            cajas_producidas2_3_A: cajas_producidas2_3_A,
            cajas_producidas2_3_B: cajas_producidas2_3_B,    
            ancho_individual2_1_A: ancho_individual2_1_A,
            ancho_individual2_2_A: ancho_individual2_2_A,
            ancho_individual2_3_A: ancho_individual2_3_A,     
            ancho_nuevo2: ancho_nuevo2,
            nuevo_material2: nuevo_material2,
            metros_producidos2: metros_producidos2,
            
            num_cotizacion3_1: num_cotizacion3_1,
            num_cotizacion3_2: num_cotizacion3_2,
            num_cotizacion3_3: num_cotizacion3_3,
            ancho_individual_nuevo3: ancho_individual_nuevo3,
            ancho_nuevo3: ancho_nuevo3,
            nuevo_material3: nuevo_material3, 
            metros_producidos3: metros_producidos3
             
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                 alert("REGISTRO EXITOSO");
                 window.location=ruta+"orden_produccion_controller/combinacion";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}


function mostrarTablasCombinacion(){
    
        $('#divBotonIngresar').css("visibility", "visible");
        $('#divBotonIngresar').show();

        var material = $("#material").val();


        $('#tablaDatos').css("visibility", "visible");
        $('#tablaDatos2').css("visibility", "visible");
        $('#tablaDatos3').css("visibility", "visible");

        $('#titulo1').css("visibility", "visible");
        $('#titulo2').css("visibility", "visible");
        $('#titulo3').css("visibility", "visible");

        $('#tablaDatosTotales').css("visibility", "visible");
        $('#tablaDatosTotales2').css("visibility", "visible");
        $('#tablaDatosTotales3').css("visibility", "visible");

        $('#divTodos').css("visibility", "visible");
        $('#tablaAgrupa').css("visibility", "visible");
        $('#tabla_total').css("visibility", "visible");


        $('#tablaDatos').show();
        $('#tablaDatos2').show();
        $('#tablaDatos3').show();

        $('#titulo1').show();
        $('#titulo2').show();
        $('#titulo3').show();

        $('#tablaCombinar').show();
        $('#tablaCombinar2').show();
        $('#tablaCombinar3').show();
        $('#tablaDatosTotales').show();
        $('#tablaDatosTotales2').show();
        $('#tablaDatosTotales3').show();
        $('#tablaAgrupa').show();
        $('#tabla_total').show();
        $('#divTodos').show(); 	
        $('#divTodos2').show(); 
        $('#divTodos3').show(); 
        $('#divMaterial').hide();
        $('#divBotonBuscar').hide();

        llenarTablaDefinicion();
        llenarTablaDefinicion2(); 
        llenarTablaDefinicion3(); 
	 
}

function limpiarTodo(){


    document.getElementById("num_cotizacion_k").value =  '';
                document.getElementById("num_cotizacion_kk").value =  '';
		document.getElementById("cantidad_k").value =  '';
                document.getElementById("cantidad_combinada_k").value =  '';
	 	document.getElementById("ancho_individual_k").value =  '';
        document.getElementById("ancho_individual_nuevo_k").value =  '';
	 	document.getElementById("total_caja_ancho_k").value =  '';
	 	document.getElementById("largo_individual_k").value =  '';
	 	document.getElementById("ancho_usar_estatico_k").value =  '';
	 	document.getElementById("codigo_gramaje_k").value =  '';
	 	document.getElementById("metros_original_k").value =  '';
	 	document.getElementById("metros_prod_k").value =  '';
	 	document.getElementById("total_kg_orden_k").value =  '';
	 	document.getElementById("combi_k").value =  '';
	 	document.getElementById("resul_mt_prod_k").value =  '';
      	 	document.getElementById("resul_mt_menos_k").value =  '';
                document.getElementById("cajas_producidas_k").value =  '';
                document.getElementById("resul_mt_prod_comb_k").value =  '';
                
                document.getElementById("num_cotizacion_i").value =  '';
                document.getElementById("num_cotizacion_ii").value =  '';
		document.getElementById("cantidad_i").value =  '';
                document.getElementById("cantidad_combinada_i").value =  '';
	 	document.getElementById("ancho_individual_i").value =  '';
	 	document.getElementById("total_caja_ancho_i").value =  '';
	 	document.getElementById("largo_individual_i").value =  '';
	 	document.getElementById("ancho_usar_estatico_i").value =  '';
	 	document.getElementById("codigo_gramaje_i").value =  '';
	 	document.getElementById("metros_original_i").value =  '';
	 	document.getElementById("metros_prod_i").value =  '';
	 	document.getElementById("total_kg_orden_i").value =  '';
	 	document.getElementById("combi_i").value =  '';
	 	document.getElementById("resul_mt_prod_i").value =  '';
      	 	document.getElementById("resul_mt_menos_i").value =  '';
                document.getElementById("cajas_producidas_i").value =  '';
                document.getElementById("resul_mt_prod_comb_i").value =  '';
                
                document.getElementById("num_cotizacion_j").value =  '';
                document.getElementById("num_cotizacion_jj").value =  '';
		document.getElementById("cantidad_j").value =  '';
                document.getElementById("cantidad_combinada_j").value =  '';
	 	document.getElementById("ancho_individual_j").value =  '';
	 	document.getElementById("total_caja_ancho_j").value =  '';
	 	document.getElementById("largo_individual_j").value =  '';
	 	document.getElementById("ancho_usar_estatico_j").value =  '';
	 	document.getElementById("codigo_gramaje_j").value =  '';
	 	document.getElementById("metros_original_j").value =  '';
	 	document.getElementById("metros_prod_j").value =  '';
	 	document.getElementById("total_kg_orden_j").value =  '';
	 	document.getElementById("combi_j").value =  '';
	 	document.getElementById("resul_mt_prod_j").value =  '';
      	 	document.getElementById("resul_mt_menos_j").value =  '';
                document.getElementById("cajas_producidas_j").value =  '';
                document.getElementById("resul_mt_prod_comb_j").value =  '';
}


function BorrarDatos(id,row){
        $("#"+row+" input").each(function(){
        this.value = "";
    })
       limpiarTablaAgrupa();
       
       if (id == 'comb01'){
        autoupdate_comb01()
       }
       if (id == 'comb02'){
        autoupdate_comb02()
       }
       if (id == 'comb03'){
        autoupdate_comb03()
       }


	// if(id == '1' OR ){

 
	// $("#banderaCalculo1").val(0);

	// }
	// else if (id == '2'){
 //    $("#banderaCalculo1").val(0);

	// }
	// else if (id == '3'){
 //     $("#banderaCalculo1").val(0);

	// }
	// else if (id == '4'){
		
 //   }
	// else if (id == '5'){
		
   

	// }
	// else if (id == '6'){
		
    
	// }
 //    if(id == '7'){
	// $("#banderaCalculo3").val(0);
	// }
 //    else if (id == '8'){
	// $("#banderaCalculo3").val(0);

	// }
 //    else if (id == '9'){
	// $("#banderaCalculo3").val(0);
 //    }





}


function FiltrarTabla(fecha){
	
	var ano = fecha.substr(0,4);
	var mes = fecha.substr(4,2);
	var dia = fecha.substr(6,2);
		   
	var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/filter_listados",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas  
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            
	            //console.log(data);
	            
	            	html += '<tr>'	
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">Fecha</td>'
		            html += '<td style="font-size:12px; width:5%; text-align: left;">'+dia+'-'+mes+'-'+ano+'</td>'
		            html += '</tr>';
	            	            	

	            $.each(data['bandejas'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'

	                html += '</tr>';
	            });
	            
	            $.each(data['caja_standar'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            $.each(data['cajas_medidas_especiales'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            console.log(data['cajas_planchas']);
	            $.each(data['cajas_planchas'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            $.each(data['cajas_solapa'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            $.each(data['placas_stock_ventas'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            $.each(data['rollos_monotapa'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            $.each(data['tabiques'], function (i,item){
	            	
	                html += '<tr>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	                html += '</tr>';
	            
	            });
	            
	            	
	            	            
	            $("#dataListadosSinDefinir tbody").html(html);
	            $("#dataListadosSinDefinir").DataTable({
	                "language": {
	                    "url": ruta+"public/frontend/js/Spanish.json",
	                    "order": [[ 3, "desc" ]],
	                    dom: 'Bfrtip',
	                    buttons: [
	                              'copyHtml5',
	                              'excelHtml5',
	                              'csvHtml5',
	                              'pdfHtml5'
	                          ]
	                }
	            
	           });
	            
	            	
	            
	            	$.each(data['bandejas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_de_la_bandeja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_de_la_bandeja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_de_la_bandeja']+'</td>'


	                html2 += '</tr>';
	            });
	            
	            $.each(data['caja_standar'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['cajas_medidas_especiales'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            console.log(data['cajas_planchas']);
	            $.each(data['cajas_planchas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['cajas_solapa'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['placas_stock_ventas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['rollos_monotapa'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['tabiques'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '</tr>';
	            
	            });
	            
	            	html2 += '<tr>'	               
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Fecha</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+dia+'-'+mes+'-'+ano+'</td>'
		            html2 += '</tr>';
	            
	            	            
	            $("#dataListadosSinDefinir2 tbody").html(html2);
	            $("#dataListadosSinDefinir2").DataTable({
	                "language": {
	                    "url": ruta+"public/frontend/js/Spanish.json",
	                    "order": [[ 3, "desc" ]],
	                    dom: 'Bfrtip',
	                    buttons: [
	                              'copyHtml5',
	                              'excelHtml5',
	                              'csvHtml5',
	                              'pdfHtml5'
	                          ]
	                }
	            
	           });

	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR: "+thrownError);
	            return false;
	        }
	    });
}



function ExportExcel(){

	$("#dataListadosSinDefinir").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "OrdenesProduccion",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
		
}

function ExportExcelListadoOrdenesDespachadas(){

	$("#dataListadosSinDefinir").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoOrdenesDespachadas",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
		
}

function ExportExcelPlanchasPendientes(){

	$("#dataListadosSinDefinir").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoPlanchasPendientes",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
		
}

function ExportExcelOrdenIngresadasCorto(){

	$("#dataListadosSinDefinir").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoOrdenesIngresadas",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
		
}

function ExportExcel2(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "SegundoOrdenesProduccion",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ExportExcelPlanchasPendientesCompleto(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoPlanchasPendientesCompleto",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ExportExcelOrdenesIngresadas(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoOrdenesIngresadasCompleto",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ImprimirOrdenesIngresadas(){
	
	var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/filter_listados",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas  
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            
	            //console.log(data);
	            
	            	$.each(data['bandejas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_de_la_bandeja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_de_la_bandeja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_de_la_bandeja']+'</td>'


	                html2 += '</tr>';
	            });
	            
	            $.each(data['caja_standar'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['cajas_medidas_especiales'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            console.log(data['cajas_planchas']);
	            $.each(data['cajas_planchas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['cajas_solapa'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['placas_stock_ventas'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['alto_caja']+'</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['rollos_monotapa'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	                html2 += '</tr>';
	            
	            });
	            $.each(data['tabiques'], function (i,item){
	            	
	                html2 += '<tr>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['codigo']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['cantidad']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['precio2']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_m']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['ancho_u']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['unidad_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['largo_p']+'</td>'
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">0</td>'
	            	html2 += '</tr>';
	            
	            });
	            
	            	html2 += '<tr>'	               
	            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Fecha</td>'
		            html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+dia+'-'+mes+'-'+ano+'</td>'
		            html2 += '</tr>';
	            
	            	            
	           /* $("#dataListadosSinDefinir2 tbody").html(html2);
	            $("#dataListadosSinDefinir2").DataTable({
	                "language": {
	                    "url": ruta+"public/frontend/js/Spanish.json",
	                    "order": [[ 3, "desc" ]],
	                    dom: 'Bfrtip',
	                    buttons: [
	                              'copyHtml5',
	                              'excelHtml5',
	                              'csvHtml5',
	                              'pdfHtml5'
	                          ]
	                }
	            
	           });*/
	            	
	            	//$this->mpdf->SetDisplayMode('fullpage');
	            	

	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR: "+thrownError);
	            return false;
	        }
	    });

}

function ExportExcelSlotter(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoSlotterPendientes",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ExportExcelSlotterCompleto(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoSlotterPendientesCompleto",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ExportExcelPegado(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoPegadoPendientes",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}

function ExportExcelPegadoCompleto(){
	
	$("#dataListadosSinDefinir2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoPegadoPendientesCompleto",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});

}


function ExportExcelDefinicion(){
	
	
	
	
	var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;

	
	 $.ajax({
	        url: ruta+"orden_produccion_controller/construirRafa",
	        global: false,
	        type: "POST",
	        data: {
	        	tabiques: tabiques, 
	        	c_medidas_especiacles: c_medidas_especiacles,
	        	rollos: rollos,
	        	c_standard: c_standard,
	        	c_solapa: c_solapa,
	        	p_stock: p_stock,
	        	bandejas: bandejas,
	        	c_planchas: c_planchas  
	         },
	        dataType: "JSON",
	        async: true,
	        beforeSend: function(){
	        },
	        success:function(data){
	            var html='';
	            var html2='';
	            tam=data.length;
	            
	            //console.log(data);
	            

	             $.each(data['caja_standar'], function (i,item){
            	
                html += '<tr>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['rut']+'</td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['forma_pago']+'</td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
            	html += '</tr>';
                                            
            });
	            
	          
	             $("#tablaDefinicion2 tbody").html(html);
	             

	        },
	        error:function (xhr, ajaxOptions, thrownError){
	            alert("ERROR EN EL SERVIDOR: "+thrownError);
	            return false;
	        }
	    });
	 
	 
	 
	           
	
}

function ExportExcelDefinicion2(){
	$("#tablaDefinicion2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "DefinicionLiberada",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
	
	
}

function GuardarClises() {

    var medidas = $("#medidas").val();
    var que_cliente = $("#que_cliente").val();
    var proveedor = $("#proveedor").val();
    var guia_despacho = $("#guia_despacho").val();
    var costo_cm = $("#costo_cm").val();
    var ruta = $("#ruta").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var id_clises=$("#id_clises").val();
    var detalle=$("#detalle").val();


    $.ajax({
        url: ruta+"caja_standard/registrar_clises",
        global: false,
        type: "POST",
        data: {
             medidas: medidas,
             que_cliente: que_cliente,
             proveedor: proveedor,
             guia_despacho: guia_despacho,
             costo_cm: costo_cm,
             cotizacion_id: cotizacion_id,
             liberar: liberar,
             nodo: nodo,
            id_clises: id_clises,
            detalle: detalle
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                 alert("REGISTRO EXITOSO");
                 window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function GuardarPlanchas() {

    var marial_usado = $("#material_usado").val();
    var ancho_bobina_usado = $("#ancho_bobina").val();
    var total_planchas_usadas = $("#planchas_usadas").val();
    var placa_usada = $("#p_usada").val();
    var liner_usado = $("#l_usada").val();
    var ruta = $("#ruta").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var id_plancha=$("#id_plancha").val();
    var ancho_bobina = $("#ancho_bobina").val();
    var medida_fabricada = $("#medida_fabricada").val();
    var usuario = $("#operario").val();
    var largo = $("#largo").val();
    var ancho = $("#ancho").val();
    
    var gramaje_liner = $("#gramaje_liner").val();
    var gramaje_onda = $("#gramaje_onda").val();
    var gramaje_contratapa = $("#gramaje_contratapa").val();
    var detalle = $("#detalle").val();
    var total_planchas = $("#total_planchas").val();






    $.ajax({
            url: ruta+"caja_standard/registrar_placas",
            global: false,
            type: "POST",
            data: {
                marial_usado: marial_usado,
                ancho_bobina_usado: ancho_bobina_usado,
                total_planchas_usadas: total_planchas_usadas,
                placa_usada: placa_usada,
                liner_usado: liner_usado,
                cotizacion_id: cotizacion_id,
                id_plancha: id_plancha,
                nodo: nodo,
                id_plancha: id_plancha,
                medida_fabricada: medida_fabricada,
                liberar: liberar,
                usuario: usuario,
                largo: largo,
                ancho: ancho,
                gramaje_liner: gramaje_liner,
                gramaje_onda: gramaje_onda,
                gramaje_contratapa: gramaje_contratapa,
                detalle: detalle,
                total_planchas: total_planchas
                
            },
            dataType: "text",
            async: true,
            beforeSend: function(){
            },
            success:function(data){
                var html='';
                tam=data.length;
                console.log(data);

                if(data=="true"){
                    //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                     alert("REGISTRO EXITOSO");
                     window.location=ruta+"orden_produccion_controller";

                }else{
                    $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

                }

                //$("#data tbody").append(html);
            },
            error:function (xhr, ajaxOptions, thrownError){
                alert("ERROR EN EL SERVIDOR: "+thrownError);
                return false;
            }
        });
}

function GuardarTroquel() {
	
	
    var molde = $("#molde").val();
    var proveedor = $("#proveedor").val();
    var linea_troquel = $("#linea_troquel").val();
    var guia_despacho = $("#guia_despacho").val();
    var costo_molde = $("#costo_molde").val();
    var id_troquel = $("#id_troquel").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();


    $.ajax({
        url: ruta+"caja_standard/registrar_troquel",
        global: false,
        type: "POST",
        data: {
        	molde: molde,
        	proveedor: proveedor,
        	linea_troquel: linea_troquel,
        	guia_despacho: guia_despacho,
        	costo_molde: costo_molde,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_troquel: id_troquel
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
               // $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

                     alert("REGISTRO EXITOSO");
                     window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function LiberarPlanchas() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

        var marial_usado = $("#material_usado").val();
        var ancho_bobina_usado = $("#ancho_bobina").val();
        var total_planchas_usadas = $("#planchas_usadas").val();
        var placa_usada = $("#p_usada").val();
        var liner_usado = $("#l_usada").val();
        var ruta = $("#ruta").val();
        var cotizacion_id = $("#cotizacion_id").val();
        var liberar = $("#liberar").val();
        var nodo = $("#nodo").val();
        var id_plancha=$("#id_plancha").val();
        var ancho_bobina = $("#ancho_bobina").val();
        var medida_fabricada = $("#medida_fabricada").val();
        var val_defi = $("#val_defi").val();
        var usuario = $("#operario").val();
        var largo = $("#largo").val();
        var ancho = $("#ancho").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(ancho_bobina_usado==""){
            alert(".::EL CAMPO Ancho Bobina Usado ES OBLIGATORIO::.");
            return false;
        }

        if(marial_usado==""){
            alert(".::EL CAMPO Material Usado ES OBLIGATORIO::.");
            return false;
        }

        if(total_planchas_usadas==""){
            alert(".::EL CAMPO Total Planchas Usadas ES OBLIGATORIO::.");
            return false;
        }


        if(largo==""){
            alert(".::EL CAMPO Largo ES OBLIGATORIO::.");
            return false;
        }
        if(ancho==""){
            alert(".::EL CAMPO Ancho ES OBLIGATORIO::.");
            return false;
        }

        if(placa_usada=="0"){
            alert(".::EL CAMPO Placa Usada ES OBLIGATORIO::.");
            return false;
        }

        if(liner_usado=="0"){
            alert(".::EL CAMPO Liner Usado ES OBLIGATORIO::.");
            return false;
        }
        
        if(usuario=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }




        if(placa_usada=="Parcial"){
            $("#liberar").val(2);

        }else{

            $("#liberar").val(1);

        }



        GuardarPlanchas();
    }
}

function LiberarClises() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

        var medidas = $("#medidas").val();
        var que_cliente = $("#que_cliente").val();
        var proveedor = $("#proveedor").val();
        var guia_despacho = $("#guia_despacho").val();
        var costo_cm = $("#costo_cm").val();
        var ruta = $("#ruta").val();
        var cotizacion_id = $("#cotizacion_id").val();
        var liberar = $("#liberar").val();
        var nodo = $("#nodo").val();
        var id_clises=$("#id_clises").val();
        var val_defi = $("#val_defi").val();
        


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(medidas=="0"){
            alert(".::EL CAMPO Medidas ES OBLIGATORIO::.");
            return false;
        }

        if(que_cliente==""){
            alert(".::EL CAMPO Que entrega (Cliente)ES OBLIGATORIO::.");
            return false;
        }

        if(proveedor==""){
            alert(".::EL CAMPO Guia de Despacho ES OBLIGATORIO::.");
            return false;
        }


        if(guia_despacho==""){
            alert(".::EL CAMPO Medida Fabricada ES OBLIGATORIO::.");
            return false;
        }

        if(costo_cm==""){
            alert(".::EL CAMPO Costo * CM² ES OBLIGATORIO::.");
            return false;
        }


        $("#liberar").val(1);
        GuardarClises();
    }
}

function LiberarTroquel() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	 var molde = $("#molde").val();
    	    var proveedor = $("#proveedor").val();
    	    var linea_troquel = $("#linea_troquel").val();
    	    var guia_despacho = $("#guia_despacho").val();
    	    var costo_molde = $("#costo_molde").val();
    	    var id_troquel = $("#id_troquel").val();
    	    var cotizacion_id = $("#cotizacion_id").val();
    	    var liberar = $("#liberar").val();
    	    var nodo = $("#nodo").val();
    	    var ruta = $("#ruta").val();
            var val_defi = $("#val_defi").val();

    	    
        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(proveedor=="0"){
            alert(".::EL CAMPO proveedor ES OBLIGATORIO::.");
            return false;
        }

        if(linea_troquel=="0"){
            alert(".::EL CAMPO Linea Troquel ES OBLIGATORIO::.");
            return false;
        }

        if(guia_despacho==""){
            alert(".::EL CAMPO Guia de Despacho ES OBLIGATORIO::.");
            return false;
        }


        if(costo_molde==""){
            alert(".::EL CAMPO Medida Fabricada ES OBLIGATORIO::.");
            return false;
        }

       

        $("#liberar").val(1);
        GuardarTroquel();
    }
}
function LiberarSlotter() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var slotter=$("#slotter").val();
        var largo=$("#largo").val();
        var ancho=$("#ancho").val();
        var planchas_usadas=$("#planchas_usadas").val();
        var cajas_producidas=$("#cajas_producidas").val();
        var tipo_uso=$("#tipo_uso").val();
        var usuario_id=$("#usuario_id").val();
        var cotizacion_id = $("#cotizacion_id").val();
        var liberar = $("#liberar").val();
        var nodo = $("#nodo").val();
        var ruta = $("#ruta").val();
        var id_slotter=$("#id_slotter").val();
        var val_defi = $("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(slotter=="0"){
            alert(".::EL CAMPO Maquina Usada ES OBLIGATORIO::.");
            return false;
        }

        if(largo==""){
            alert(".::EL CAMPO Medida Realizada ES OBLIGATORIO::.");
            return false;
        }
        
        if(ancho==""){
            alert(".::EL CAMPO Medida Realizada ES OBLIGATORIO::.");
            return false;
        }

        if(planchas_usadas==""){
            alert(".::EL CAMPO Cantidad de Planchas Usadas ES OBLIGATORIO::.");
            return false;
        }


        if(cajas_producidas==""){
            alert(".::EL CAMPO Total de Cajas Producidas ES OBLIGATORIO::.");
            return false;
        }
        
        if(tipo_uso=="0"){
            alert(".::EL CAMPO Total o Parcial ES OBLIGATORIO::.");
            return false;
        }
        
        if(usuario_id=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }

       if(tipo_uso=="Total"){

           $("#liberar").val(1);
       }else{
           $("#liberar").val(2);
       }


        GuardarSolotter();
    }
}

function LiberarMonotapa() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {
    	
        var comentario_repeticion=$("#comentario_repeticion").val();
        var onda_usar=$("#onda_usar").val();
        var ancho_onda=$("#ancho_onda").val();
        var liner_usar=$("#liner_usar").val();
        var ancho_liner_usar=$("#ancho_liner_usar").val();
        var tamano_fabricar=$("#tamano_fabricar").val();
        var ancho=$("#ancho").val();
        var largo=$("#largo").val();
        var pinza=$("#pinza").val();
        var reverso_usar=$("#reverso_usar").val();
        var total_pliegos_fabricar=$("#total_pliegos_fabricar").val();
        var usuario=$("#usuario_id").val();
        var total_pliegos_producidos=$("#total_pliegos_producidos").val();
        var total_tarima_producida=$("#total_tarima_producida").val();
        var tipo_usu=$("#tipo_usu").val();
        var par_1=$("#par_1").val();
        var par_2=$("#par_2").val();
        var par_3=$("#par_3").val();
        var ancho_corrugado=$("#ancho_corrugado").val();
        var val_defi=$("#val_defi").val();


    	
        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

       if(onda_usar==""){
            alert(".::EL CAMPO Onda a usar ES OBLIGATORIO::.");
       return false;
        }
       
       if(ancho_onda==""){
           alert(".::EL CAMPO Ancho onda a usar ES OBLIGATORIO::.");
      return false;
       }
       
       if(liner_usar==""){
           alert(".::EL CAMPO Liner a usar ES OBLIGATORIO::.");
      return false;
       }
       
       if(ancho_liner_usar==""){
           alert(".::EL CAMPO Ancho Liner a usar ES OBLIGATORIO::.");
      return false;
       }
       
       if(tamano_fabricar==""){
           alert(".::EL CAMPO Tama�o a fabricar ES OBLIGATORIO::.");
      return false;
       }
       if(ancho==""){
           alert(".::EL CAMPO Ancho ES OBLIGATORIO::.");
      return false;
       }
       
       if(largo==""){
           alert(".::EL CAMPO Largo ES OBLIGATORIO::.");
      return false;
       }
       if(pinza==""){
           alert(".::EL CAMPO Pinza ES OBLIGATORIO::.");
      return false;
       }
       
       if(reverso_usar==""){
           alert(".::EL CAMPO Reverso a usar ES OBLIGATORIO::.");
      return false;
       }
       
       if(total_pliegos_fabricar==""){
           alert(".::EL CAMPO Total pliegos a fabricar ES OBLIGATORIO::.");
      return false;
       }
       if(usuario=="0"){
           alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
      return false;
       }
       if(total_pliegos_producidos==""){
           alert(".::EL CAMPO Total pliegos producidos ES OBLIGATORIO::.");
      return false;
       }
       if(total_tarima_producida==""){
           alert(".::EL CAMPO Total tarimas producidas ES OBLIGATORIO::.");
      return false;
       }
       if(ancho_corrugado==""){
           alert(".::EL CAMPO Total Ancho a corrugar ES OBLIGATORIO::.");
      return false;
       }
       
       
       
       if(tipo_usu=="Total"){
           $("#liberar").val(1);
       }else{
           $("#liberar").val(2);
       }
        GuardarMonotapa();
    }
}

function LiberarPegado() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	 var tipo_pegado=$("#tipo_pegado").val();
    	 var forma_pegado=$("#forma_pegado").val();
    	 var val_defi=$("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(tipo_pegado=="0"){
            alert(".::EL CAMPO Pegado ES OBLIGATORIO::.");
            return false;
        }
        if(forma_pegado=="0"){
            alert(".::EL CAMPO Total o Parcial ES OBLIGATORIO::.");
            return false;
        }

        if(forma_pegado=="Total"){
            $("#liberar").val(1);
        console.log("Total");
        }else{
            $("#liberar").val(2);
            console.log("parcial");
        }
        GuardarPegado();
    }
}

function LiberarSlitter() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var total_producidas=$("#total_producidas").val();
        var usuario_id=$("#usuario_id").val();
    	 var val_defi=$("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(total_producidas==""){
            alert(".::EL CAMPO Total Planchas Producidas ES OBLIGATORIO::.");
            return false;
        }
        if(usuario_id=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }

        $("#liberar").val(1);
        GuardarSlitter();
    }
}

function LiberarCorteManual() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var total_producidas=$("#total_producidas").val();
        var usuario_id=$("#usuario_id").val();
    	 var val_defi=$("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(total_producidas==""){
            alert(".::EL CAMPO Total Planchas Producidas ES OBLIGATORIO::.");
            return false;
        }
        if(usuario_id=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }

        $("#liberar").val(1);
        GuardarCorteManual();
    }
}

function LiberarRayado() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var total_producidas=$("#total_producidas").val();
        var usuario_id=$("#usuario_id").val();
    	 var val_defi=$("#val_defi").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(total_producidas==""){
            alert(".::EL CAMPO Total Planchas Producidas ES OBLIGATORIO::.");
            return false;
        }
        if(usuario_id=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }

        $("#liberar").val(1);
        GuardarRayado();
    }
}

function LiberarPerforado() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var total_producidas=$("#total_producidas").val();
        var usuario_id=$("#usuario_id").val();
        var perforaciones=$("#perforaciones").val();
    	 var val_defi=$("#val_defi").val();
        var tipo_despacho=$("#tipo_despacho").val();


        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(total_producidas==""){
            alert(".::EL CAMPO Total Planchas Producidas ES OBLIGATORIO::.");
            return false;
        }
        if(perforaciones==""){
            alert(".::EL CAMPO Perforaciones por Planchas ES OBLIGATORIO::.");
            return false;
        }
        if(usuario_id=="0"){
            alert(".::EL CAMPO Operario ES OBLIGATORIO::.");
            return false;
        }
        
        if(tipo_despacho=="0"){
            alert(".::EL CAMPO Tipo de Despacho ES OBLIGATORIO::.");
            return false;
        }
        
        console.log(tipo_despacho);
        if(tipo_despacho=="Total"){
                $("#liberar").val(1);
        }else{
            $("#liberar").val(2);
        }
        
        GuardarPerforado();
    }
}

function LiberarDespacho() {

    if (confirm('¿ESTA SEGURO DE LIBERAR LA COTIZACION?')) {

    	var direccion_despacho=$("#direccion_despacho").val();
        var numero_guia=$("#numero_guia").val();
        var numero_palets=$("#numero_palets").val();
        var total_despachar=$("#total_despachar").val();
        var usuario_id=$("#usuario_id").val();
        var val_defi=$("#val_defi").val();
        var tipo_despacho=$("#tipo_despacho").val();



        if(val_defi!=1){
            alert("TIENE QUE LIBERAR EL FORMULARIO DE DEFINICION");
            return false;
        }

        if(direccion_despacho==""){
            alert(".::EL CAMPO Direccion de Despacho ES OBLIGATORIO::.");
            return false;
        }
        
        if(numero_guia==""){
            alert(".::EL CAMPO Nº Guia o Factura ES OBLIGATORIO::.");
            return false;
        }
        
        if(numero_palets==""){
            alert(".::EL CAMPO Nº Palets ES OBLIGATORIO::.");
            return false;
        }
        
        if(total_despachar==""){
            alert(".::EL CAMPO Total a Despachar ES OBLIGATORIO::.");
            return false;
        }
        
        if(usuario_id=="0"){
            alert(".::EL CAMPO Chofer ES OBLIGATORIO::.");
            return false;
        }
        

        console.log(tipo_despacho);

        if(tipo_despacho=="Total"){
            $("#liberar").val(1);
        }else{
            $("#liberar").val(2);
           }
        GuardarDespacho();
        
       }
}

function valor_inicial_slotter() {
	var val_slotter=$("#val_slotter").val();
	var val_usuarios=$("#val_usuarios").val();
	var val_tipo=$("#val_tipo").val();
	var est_slotter=$("#est_slotter").val();
	var fecha_slotter=$("#fecha_slotter").val();


	$("#slotter").val(val_slotter);
	$("#usuario_id").val(val_usuarios);
	$("#tipo_uso").val(val_tipo);
	

	if(est_slotter=="1"){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Slotter Liberado - "+fecha_slotter+"</div>");
        
        $("#slotter").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#planchas_usadas").attr('disabled','disabled');
        $("#cajas_producidas").attr('disabled','disabled');
        $("#tipo_uso").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
	}

    if(est_slotter=="2"){
        $("#msjEstatus").append("<div class='alert alert-warning' role='alert'>Slotter Liberado Parcialmente - "+fecha_slotter+"</div>");

        $("#slotter").attr('disabled','disabled');
        $("#largo").attr('disabled','disabled');
        $("#ancho").attr('disabled','disabled');
        $("#planchas_usadas").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
    }


}

function valor_inicial_pegado(){
	var val_tipo=$("#val_tipo").val();
	var val_forma=$("#val_forma").val();
	
	var fecha_pegado=$("#fecha_pegado").val();
	var estatus_pegado=$("#estatus_pegado").val();

	
	$("#tipo_pegado").val(val_tipo);
	$("#forma_pegado").val(val_forma);

	console.log(estatus_pegado);
	
	if(estatus_pegado==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Pegado Liberado - "+fecha_pegado+"</div>");
        
        $("#tipo_pegado").attr('disabled','disabled');
        $("#forma_pegado").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');

        $("#total_cajas_pedidas").attr('disabled','disabled');
        $("#total_cajas_producidas").attr('disabled','disabled');
        $("#cajas_pegadas").attr('disabled','disabled');
        $("#unidades_paquete").attr('disabled','disabled');
        $("#unidades_palet").attr('disabled','disabled');



        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
	}

    if(estatus_pegado==2){
        $("#msjEstatus").append("<div class='alert alert-primary' role='alert'>Pegado Liberado Parcial - "+fecha_pegado+"</div>");

        $("#tipo_pegado").attr('disabled','disabled');
        $("#detalle").attr('disabled','disabled');
        $("#total_cajas_pedidas").attr('disabled','disabled');
        $("#total_cajas_producidas").attr('disabled','disabled');



        $("#guardar").attr('disabled','disabled');
    }
	
	
}
function valor_inicial_slitter(){
	
	var val_usuarios=$("#val_usuarios").val();
	
	var fecha_slitter=$("#fecha_slitter").val();
	var estatus_slitter=$("#est_slitter").val();

	
	$("#usuario_id").val(val_usuarios);
	
	if(estatus_slitter==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Slitter Liberado - "+fecha_slitter+"</div>");
        
        $("#total_producidas").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
       
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
	}
	
	
}

function valor_inicial_corte(){
	
	var val_usuarios=$("#val_usuarios").val();
	
	var fecha_corte=$("#fecha_corte").val();
	var est_corte=$("#est_corte").val();

	
	$("#usuario_id").val(val_usuarios);
	
	if(est_corte==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Corte Manual Liberado - "+fecha_corte+"</div>");
        
        $("#total_producidas").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
       
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
	}
	
	
}

function valor_inicial_rayado(){
	
	var val_usuarios=$("#val_usuarios").val();
	
	var fecha_rayado=$("#fecha_rayado").val();
	var est_rayado=$("#est_rayado").val();

	
	$("#usuario_id").val(val_usuarios);
	
	if(est_rayado==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Rayado Liberado - "+fecha_rayado+"</div>");
        
        $("#total_producidas").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
       
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
	}
	
	
}

function valor_inicial_perforado(){
	
	var val_usuarios=$("#val_usuarios").val();
	
	var fecha_per=$("#fecha_per").val();
	var est_perforado=$("#est_perforado").val();

	
	$("#usuario_id").val(val_usuarios);
	
	if(est_perforado==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Perforado Liberado - "+fecha_per+"</div>");
        
        $("#total_producidas").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
        $("#perforaciones").attr('disabled','disabled');

       
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');
	}
	
	
}

function valor_inicial_despacho(){
	
	var val_usuarios=$("#val_usuarios").val();
	var est_despacho=$("#est_despacho").val();
	var fecha_despacho=$("#fecha_despacho").val();


	$("#usuario_id").val(val_usuarios);
	
	if(est_despacho==1){
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Despacho Liberado - "+fecha_despacho+"</div>");

        $("#direccion_despacho").attr('disabled','disabled');
        $("#numero_guia").attr('disabled','disabled');
        $("#numero_palets").attr('disabled','disabled');
        $("#total_despachar").attr('disabled','disabled');
        $("#usuario_id").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');

        $("#orden_cliente").attr('disabled','disabled');
        $("#codigo_producto_interno").attr('disabled','disabled');
        $("#codigo_producto").attr('disabled','disabled');
        $("#orden_cliente").attr('disabled','disabled');
        $("#orden_cliente").attr('disabled','disabled');
        $("#observacion").attr('disabled','disabled');
        $("#tipo_despacho").attr('disabled','disabled');


    }

    if(est_despacho==2){
        $("#msjEstatus").append("<div class='alert alert-primary' role='alert'>Despacho Liberado Parcialmente - "+fecha_despacho+"</div>");

        $("#direccion_despacho").attr('disabled','disabled');
        $("#observacion").attr('disabled','disabled');

        $("#orden_cliente").attr('disabled','disabled');
        $("#codigo_producto_interno").attr('disabled','disabled');
        $("#codigo_producto").attr('disabled','disabled');
        $("#orden_cliente").attr('disabled','disabled');
        $("#orden_cliente").attr('disabled','disabled');



        $("#guardar").attr('disabled','disabled');

    }

	
}

function valor_inicial_troquel() {

    var val_prov=$("#val_proveedor").val();
    var val_estatus_troquel=$("#val_estatus_troquel").val();
    var val_molde=$("#val_molde").val();
    var val_linea_troquel=$("#val_linea_troquel").val();
    var fecha_troquel=$("#fecha_troquel").val();

    
    $("#molde").val(val_molde);
    $("#proveedor").val(val_prov);
    $("#linea_troquel").val(val_linea_troquel);


    if(val_estatus_troquel==1){
        console.log("bloquear");
        $("#msjEstatus").append("<div class='alert alert-danger' role='alert'>Liner Liberada - "+fecha_troquel+"</div>");

        $("#molde").attr('disabled','disabled');
        $("#proveedor").attr('disabled','disabled');
        $("#linea_troquel").attr('disabled','disabled');
        $("#guia_despacho").attr('disabled','disabled');
        $("#costo_molde").attr('disabled','disabled');
        $("#guardar").attr('disabled','disabled');
        $("#btnLiberar").attr('disabled','disabled');

        
        

    }
    
}
function GuardarSolotter(){
    var slotter=$("#slotter").val();
    var largo=$("#largo").val();
    var ancho=$("#ancho").val();
    var planchas_usadas=$("#planchas_usadas").val();
    var cajas_producidas=$("#cajas_producidas").val();
    var tipo_uso=$("#tipo_uso").val();
    var usuario_id=$("#usuario_id").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_slotter=$("#id_slotter").val();
    var detalle=$("#detalle").val();
    var cajas_pedidas=$("#cajas_pedidas").val();
    var planchas_id=$("#planchas_id").val();

    var total_cajas=$("#total_cajas").val();
    var diferencia=total_cajas-cajas_producidas;


    $.ajax({
        url: ruta+"caja_standard/registrar_slotter",
        global: false,
        type: "POST",
        data: {
        	slotter: slotter,
        	largo: largo,
        	ancho: ancho,
        	planchas_usadas: planchas_usadas,
        	cajas_producidas: cajas_producidas,
        	tipo_uso: tipo_uso,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_slotter: id_slotter,
                detalle: detalle,
            cajas_pedidas: cajas_pedidas,
            planchas_id: planchas_id,
            diferencia: diferencia,
            total_cajas: total_cajas
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarPegado(){
    var tipo_pegado=$("#tipo_pegado").val();
    var forma_pegado=$("#forma_pegado").val();
    var id_pegado=$("#id_pegado").val();

   
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_pegado=$("#id_pegado").val();
    var detalle=$("#detalle").val();

    var total_cajas_pedidas=$("#total_cajas_pedidas").val();
    var total_cajas_producidas=$("#total_cajas_producidas").val();
    var cajas_pegadas=$("#cajas_pegadas").val();
    var unidades_paquete=$("#unidades_paquete").val();
    var unidades_palet=$("#unidades_palet").val();
    var total_cajas=$("#total_cajas").val();
    var diferencia=total_cajas-cajas_pegadas;

    $.ajax({
        url: ruta+"caja_standard/registrar_pegado",
        global: false,
        type: "POST",
        data: {
        	tipo_pegado: tipo_pegado,
        	forma_pegado: forma_pegado,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_pegado: id_pegado,
            detalle: detalle,
            total_cajas_pedidas: total_cajas_pedidas,
            total_cajas_producidas: total_cajas_producidas,
            cajas_pegadas: cajas_pegadas,
            unidades_paquete: unidades_paquete,
            unidades_palet: unidades_palet,
            diferencia:diferencia,
            total_cajas:total_cajas

        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
               // $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

                 alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";


            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarSlitter(){
	
    var total_producidas=$("#total_producidas").val();
    var usuario_id=$("#usuario_id").val();

   
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_slitter=$("#id_slitter").val();
    
    $.ajax({
        url: ruta+"caja_standard/registrar_slitter",
        global: false,
        type: "POST",
        data: {
        	total_producidas: total_producidas,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_slitter: id_slitter
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarCorteManual(){
	
    var total_producidas=$("#total_producidas").val();
    var usuario_id=$("#usuario_id").val();

   
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_corte=$("#id_corte").val();
    
    $.ajax({
        url: ruta+"caja_standard/registrar_corte_manual",
        global: false,
        type: "POST",
        data: {
        	total_producidas: total_producidas,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_corte: id_corte
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}
function GuardarRayado(){
	
    var total_producidas=$("#total_producidas").val();
    var usuario_id=$("#usuario_id").val();

   
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_rayado=$("#id_rayado").val();
    
    $.ajax({
        url: ruta+"caja_standard/registrar_rayado",
        global: false,
        type: "POST",
        data: {
        	total_producidas: total_producidas,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_rayado: id_rayado
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarPerforado(){
	
    var total_producidas=$("#total_producidas").val();
    var usuario_id=$("#usuario_id").val();
    var perforaciones=$("#perforaciones").val();


   
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_perforaciones=$("#id_perforaciones").val();
    var tipo_despacho=$("#tipo_despacho").val();

    
    
    $.ajax({
        url: ruta+"caja_standard/registrar_perforado",
        global: false,
        type: "POST",
        data: {
        	total_producidas: total_producidas,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_perforaciones: id_perforaciones,
        	perforaciones: perforaciones,
                tipo_despacho: tipo_despacho
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                $("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

            //$("#data tbody").append(html);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarDespacho(){
	
    var direccion_despacho=$("#direccion_despacho").val();
    var numero_guia=$("#numero_guia").val();
    var numero_palets=$("#numero_palets").val();
    var total_despachar=$("#total_despachar").val();
    var usuario_id=$("#usuario_id").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_despacho=$("#id_despacho").val();

    var observacion=$("#observacion").val();
    var codigo_producto=$("#codigo_producto").val();
    var codigo_producto_interno=$("#codigo_producto_interno").val();
    var orden_cliente=$("#orden_cliente").val();
    var tipo_despacho=$("#tipo_despacho").val();
    var total_cajas=$("#total_cajas").val();
    var diferencia = total_cajas-total_despachar;




    $.ajax({
        url: ruta+"caja_standard/registrar_despacho",
        global: false,
        type: "POST",
        data: {
        	direccion_despacho: direccion_despacho,
        	numero_guia: numero_guia,
        	numero_palets: numero_palets,
        	total_despachar: total_despachar,
        	usuario_id: usuario_id,
        	cotizacion_id: cotizacion_id,
        	liberar: liberar,
        	nodo: nodo,
        	id_despacho: id_despacho,
            observacion:observacion,
            codigo_producto: codigo_producto,
            codigo_producto_interno: codigo_producto_interno,
            orden_cliente: orden_cliente,
            tipo_despacho:tipo_despacho,
            diferencia: diferencia,
            total_cajas: total_cajas
        	
        },
        dataType: "text",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            tam=data.length;
             console.log(data);

            if(data=="true"){
                //$("#msj").append("<div class='alert alert-success' role='alert'>Se ha agregado el registro exitosamente</div>");
                
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";

            }else{
                $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

            }

        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function GuardarMonotapa() {
	
	var usuario_id=$("#usuario_id").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var liberar = $("#liberar").val();
    var nodo = $("#nodo").val();
    var ruta = $("#ruta").val();
    var id_monotapa=$("#id_monotapa").val();
    var comentario_repeticion=$("#comentario_repeticion").val();
    var onda_usar=$("#onda_usar").val();
    var ancho_onda=$("#ancho_onda").val();
    var liner_usar=$("#liner_usar").val();
    var ancho_liner_usar=$("#ancho_liner_usar").val();
    var tamano_fabricar=$("#tamano_fabricar").val();
    var ancho=$("#ancho").val();
    var largo=$("#largo").val();
    var pinza=$("#pinza").val();
    var reverso_usar=$("#reverso_usar").val();
    var total_pliegos_fabricar=$("#total_pliegos_fabricar").val();
    var usuario_1=$("#usuario_1").val();
    var usuario_2=$("#usuario_2").val();
    var usuario_3=$("#usuario_3").val();
    var total_pliegos_producidos=$("#total_pliegos_producidos").val();
    var total_tarima_producida=$("#total_tarima_producida").val();
    var tipo_usu=$("#tipo_usu").val();
    var par_1=$("#par_1").val();
    var par_2=$("#par_2").val();
    var par_3=$("#par_3").val();
    var ancho_corrugado=$("#ancho_corrugado").val();
	
$.ajax({
    url: ruta+"caja_standard/registrar_monotapa",
    global: false,
    type: "POST",
    data: {
    	usuario_id: usuario_id,
	    cotizacion_id: cotizacion_id,
	    liberar: liberar,
	    nodo: nodo,
	    comentario_repeticion: comentario_repeticion,
	    onda_usar: onda_usar,
	    ancho_onda: ancho_onda,
	    liner_usar: liner_usar,
	    ancho_liner_usar: ancho_liner_usar,
	    tamano_fabricar: tamano_fabricar,
	    ancho: ancho,
	    largo: largo,
	    pinza: pinza,
	    reverso_usar: reverso_usar,
	    total_pliegos_fabricar: total_pliegos_fabricar,
	    usuario_1: usuario_1,
	    usuario_2: usuario_2,
	    usuario_3: usuario_3,
	    total_pliegos_producidos: total_pliegos_producidos,
	    total_tarima_producida: total_tarima_producida,
	    tipo_usu: tipo_usu,
	    ancho_corrugado: ancho_corrugado,
	    par_1: par_1,
	    par_2: par_2,
	    par_3: par_3,
	    id_monotapa: id_monotapa
    	
    },
    dataType: "text",
    async: true,
    beforeSend: function(){
    },
    success:function(data){
        var html='';
        tam=data.length;
         console.log(data);

        if(data=="true"){
                alert("REGISTRO EXITOSO");
                window.location=ruta+"orden_produccion_controller";
        }else{
            $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

        }

    },
    error:function (xhr, ajaxOptions, thrownError){
        alert("ERROR EN EL SERVIDOR: "+thrownError);
        return false;
    }
});
}
	
function BuscarContratapa() {

    var material = $("#contratapa").val();
    var ruta = $("#ruta").val();

    $.ajax({
        url: ruta+"caja_standard/consultar_materiales",
        global: false,
        type: "POST",
        data: {material: material},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            
            console.log(data);

            $.each(data, function (i,item){

                $("#mejMaterialesContratapa").html("<!--<div class='alert alert-warning'>--><br>" +
                						 "<B>Contratapa: </B>"+item['codigo']+" - "+item['gramaje']+
                                         "</span><!--</div>-->");
            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}


function BuscarContratapa2() {

    var material = $("#material").val();
    var ruta = $("#ruta").val();
           
    
    //$("#contratapa2").val("70");
    
    $.ajax({
        url: ruta+"caja_standard/consultar_materiales2",
        global: false,
        type: "POST",
        data: {material: material},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;

            console.log(data);

            $.each(data, function (i,item){

               alert(item['tapa']);

                $("#contratapa2").val(item['tapa']);
              



            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}


function BuscaroOnda() {

    var material = $("#onda").val();
    var ruta = $("#ruta").val();

    $.ajax({
        url: ruta+"caja_standard/consultar_materiales",
        global: false,
        type: "POST",
        data: {material: material},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            
            console.log(data);

            $.each(data, function (i,item){

                $("#mejMaterialesOnda").html("<!--<div class='alert alert-warning'>--><br>" +
                						 "<B>Onda: </B>"+item['codigo']+" - "+item['gramaje']+
                                         "</span><!--</div>-->");
            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function BuscaroLiner() {

    var material = $("#liner").val();
    var ruta = $("#ruta").val();

    $.ajax({
        url: ruta+"caja_standard/consultar_materiales",
        global: false,
        type: "POST",
        data: {material: material},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            
            console.log(data);

            $.each(data, function (i,item){

                $("#mejMaterialesLiner").html("<!--<div class='alert alert-warning'>--><br>" +
                						 "<B>Liner: </B>"+item['codigo']+" - "+item['gramaje']+
                                         "</span><!--</div>-->");
            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function BuscaroLinerMonotapa() {

    var material = $("#liner").val();
    var ruta = $("#ruta").val();

    $.ajax({
        url: ruta+"caja_standard/consultar_materiales",
        global: false,
        type: "POST",
        data: {material: material},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;
            
            console.log(data);

            $.each(data, function (i,item){

                $("#mejMaterialesLiner").html("<!--<div class='alert alert-warning'>--><br>" +
                						 "<B>Liner: </B>"+item['codigo']+" - "+item['gramaje']+
                                         "</span><!--</div>-->");
            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });

}

function BuscarPorEstatus(fecha){
	
	var ano = fecha.substr(0,4);
	var mes = fecha.substr(4,2);
	var dia = fecha.substr(6,2);

    var ruta = $("#ruta").val();
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    
    var fecha_desde = $("#fecha_desde").val();
    var fecha_hasta = $("#fecha_hasta").val();
    var tipo = $("#tipo").val();
    var estatus = $("#estatus").val();
        
        console.log(tipo, estatus);

    
    if(!fecha_desde){
        alert("LA FECHA DE INICIO ES OBLIGATORIA");
        return false;
      }
      
      if(!fecha_hasta){
        alert("LA FECHA FINAL ES OBLIGATORIA");
        return false;
      }

    
console.log(fecha_desde, fecha_hasta);

    $.ajax({
        url: ruta+"orden_produccion_controller/ListadosConEstatus",
        global: false,
        type: "POST",
        data: {
            c_standard: c_standard,
            bandejas: bandejas,
            fecha_desde: fecha_desde,
            fecha_hasta: fecha_hasta,
            tipo: tipo,
            estatus: estatus
        },
        dataType: "JSON",
        async: true,
        beforeSend: function(){
        },
        success:function(data){
            var html='';
            var html2='';
            tam=data.length;

           console.log(data);

            $.each(data['caja_standar'], function (i,item){

                //definiciones

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['plancha_valor']==2){
                    var EstadoPlancha="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                }


                else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }

            else if(item['slotter_valor']==2){
                var EstadoSlotter="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
            }
                else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado
                if(item['pegado_valor']==1) {
                    var EstadoPegado = "<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['pegado_valor']==2){
                        var EstadoPegado="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                    }
                    else{
                    EstadoPegado="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['despacho_valor']==2){
                    var EstadoDespacho="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                }

                    else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }





                var EstadoClises="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";



                html += '<tr>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'

                html += '</tr>';
            });


            $.each(data['bandejas'], function (i,item){

                
                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html += '<tr>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
            
                html += '</tr>';
            });
            
             $.each(data['medidas_especiales'], function (i,item){

                

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html += '<tr>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html += '</tr>';
            });
            
            
            $.each(data['stock_venta'], function (i,item){

                
                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

              
                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoClises="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoSlotter="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";


                html += '<tr>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html += '</tr>';
            });
            
            $.each(data['solapa'], function (i,item){

                

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html += '<tr>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html += '</tr>';
            });
            
            
            	html += '<tr>'	
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
                html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;"></td>'
            	html += '<td style="font-size:12px; width:5%; text-align: left;">Fecha</td>'
	            html += '<td style="font-size:12px; width:5%; text-align: left;">'+dia+'-'+mes+'-'+ano+'</td>'
	            html += '</tr>';



            $("#dataListadosEstatus tbody").html(html);
            $("#dataListadosEstatus").DataTable({
                "language": {
                    "url": ruta+"public/frontend/js/Spanish.json",
                    "order": [[ 3, "desc" ]],
                    dom: 'Bfrtip'
                   
                }

            });
            
            
            
            //desde aqui
            
            $.each(data['caja_standar'], function (i,item){

                //definiciones

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['plancha_valor']==2){
                    var EstadoPlancha="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                }


                else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }

            else if(item['slotter_valor']==2){
                var EstadoSlotter="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
            }
                else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado
                if(item['pegado_valor']==1) {
                    var EstadoPegado = "<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['pegado_valor']==2){
                        var EstadoPegado="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                    }
                    else{
                    EstadoPegado="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else if(item['despacho_valor']==2){
                    var EstadoDespacho="<span style='color: #ff8c00; font-size: 12px;'><B>Liberado Parcial</B></span>";
                }

                    else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }





                var EstadoClises="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";



                html2 += '<tr>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                
                if(item['fecha_definicion'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_definicion']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                
                if(item['fecha_liner'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_liner']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                
                if(item['fecha_onda'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_onda']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                
                if(item['fecha_contratapa'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_contratapa']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                
                if(item['fecha_planchas'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_planchas']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                
               if(item['fecha_slotter'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_slotter']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                
                if(item['fecha_pegado'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_pegado']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'

                html2 += '</tr>';
            });


            $.each(data['bandejas'], function (i,item){

                
                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html2 += '<tr>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
               
                if(item['fecha_definicion'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_definicion']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                
                if(item['fecha_liner'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_liner']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                
                if(item['fecha_onda'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_onda']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                
                if(item['fecha_contratapa'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_contratapa']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                
                if(item['fecha_planchas'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_planchas']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                
               if(item['fecha_slotter'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_slotter']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                
                if(item['fecha_pegado'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_pegado']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
            
                html2 += '</tr>';
            });
            
             $.each(data['medidas_especiales'], function (i,item){

                

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html2 += '<tr>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
               
                if(item['fecha_definicion'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_definicion']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                
                if(item['fecha_liner'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_liner']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                
                if(item['fecha_onda'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_onda']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                
                if(item['fecha_contratapa'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_contratapa']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                
                if(item['fecha_planchas'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_planchas']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                
               if(item['fecha_slotter'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_slotter']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                
                if(item['fecha_pegado'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_pegado']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html2 += '</tr>';
            });
            
            
            $.each(data['stock_venta'], function (i,item){

                
                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

              
                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoClises="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoSlotter="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";


                html2 += '<tr>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
                
                if(item['fecha_definicion'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_definicion']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                
                if(item['fecha_liner'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_liner']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                
                if(item['fecha_onda'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_onda']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                
                if(item['fecha_contratapa'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_contratapa']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                
                if(item['fecha_planchas'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_planchas']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                
               if(item['fecha_slotter'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_slotter']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                
                if(item['fecha_pegado'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_pegado']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html2 += '</tr>';
            });
            
            $.each(data['solapa'], function (i,item){

                

                if(item['definicion_valor']==1){
                    var EstadoDefinicion="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDefinicion="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //liner
                if(item['liner_valor']==1){
                    var EstadoLiner="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoLiner="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //onda
                if(item['onda_valor']==1){
                    var EstadoOnda="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoOnda="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //contratapa
                if(item['contratapa_valor']==1){
                    var EstadoContratapa="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoContratapa="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //plancha
                if(item['plancha_valor']==1){
                    var EstadoPlancha="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoPlancha="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                    //slotter
                if(item['slotter_valor']==1){
                    var EstadoSlotter="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoSlotter="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }

                //pegado

                //clises
                if(item['clises_valor']==1){
                    var EstadoClises="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoClises="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }


                //despacho
                if(item['despacho_valor']==1){
                    var EstadoDespacho="<span style='color: blue; font-size: 12px;'><B>Liberado</B></span>";

                }else{
                    EstadoDespacho="<span style='color: red; font-size: 12px;'><B>Sin Liberar</B></span>";
                }



                var EstadoTabiquera="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoTroquel="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPerforado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoMonotapa="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";
                var EstadoPegado="<span style='color: #050000; font-size: 12px;'><B>No corresponde</B></span>";

                html2 += '<tr>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['numero_cotizacion']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['razon_social']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['nombre_de_la_caja']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['id_nodo']+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDefinicion+'</td>'
              
                if(item['fecha_definicion'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_definicion']+'</td>'
                }
                
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoLiner+'</td>'
                
                if(item['fecha_liner'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_liner']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoOnda+'</td>'
                
                if(item['fecha_onda'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_onda']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoContratapa+'</td>'
                
                if(item['fecha_contratapa'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_contratapa']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPlancha+'</td>'
                
                if(item['fecha_planchas'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_planchas']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoClises+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTabiquera+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoTroquel+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoSlotter+'</td>'
                
               if(item['fecha_slotter'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_slotter']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPegado+'</td>'
                
                if(item['fecha_pegado'] == null){
                	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Sin Definir</td>'
                	
                }
                else{
                    html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+item['fecha_pegado']+'</td>'
                }
                
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoPerforado+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoMonotapa+'</td>'
                html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+EstadoDespacho+'</td>'
              
                html2 += '</tr>';
            });
            
            	html2 += '<tr>'	
            	
            	html2 += '<td style="font-size:12px; width:5%; text-align: left;">Fecha</td>'
	            html2 += '<td style="font-size:12px; width:5%; text-align: left;">'+dia+'-'+mes+'-'+ano+'</td>'
	            html2 += '</tr>';
            
            
            $("#dataListadosEstatus2 tbody").html(html2);
           /* $("#dataListadosEstatus2").DataTable({
                "language": {
                    "url": ruta+"public/frontend/js/Spanish.json",
                    "order": [[ 3, "desc" ]],
                    dom: 'Bfrtip'
                   
                }

            });*/
                       
            
            
          //hasta aqui  

        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}


function ExportExcelEstatus(){

	$("#dataListadosEstatus").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoEstatus",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
}
function ExportExcelEstatus2(){

	$("#dataListadosEstatus2").table2excel({
		exclude: ".noExl",
		name: "Excel Document Name",
		filename: "ListadoEstatusCompleto",
		fileext: ".xls",
		exclude_img: true,
		exclude_links: true,
		exclude_inputs: true
	});
}

function CargarInfoPlancha() {

    var planchas_id = $("#planchas_id").val();
    var ruta = $("#ruta").val();

    $.ajax({
        url: ruta+"caja_standard/consultar_plancha",
        global: false,
        type: "POST",
        data: {planchas_id: planchas_id},
        dataType: "JSON",
        async: true,
        beforeSend: function(){
            //$("#wait").show();
        },
        success:function(data){
            var html='';
            tam=data.length;

            console.log(data);

            $.each(data, function (i,item){

               // console.log(item);

                $("#largo").val(data['largo']);
                $("#ancho").val(data['ancho']);
                $("#planchas_usadas").val(data['total_planchas_usadas']);
                $("#cajas_producidas").val(data['total_planchas_usadas']);
                $("#tipo_uso").val(data['placa_usada']);



            });



        },
        error:function (xhr, ajaxOptions, thrownError){
            alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });
}

function refrescar(){
    location.reload();
}

function MostrarHabilitar(){

	
	$('#modificar').css("visibility", "visible");

	$('#modificar').show();
}

function HabilitarModificacion(){
	
	
	var comentarios_repeticion = $("#comentarios_repeticion").val();
    var ancho = $("#ancho").val();
    var largo = $("#largo").val();
    var gramaje = $("#gramaje").val();
    var tipo_corrugado = $("#tipo_corrugado").val();
    var gramaje_seleccionado = $("#gramaje_seleccionado").val();
    var ancho_bobina = $("#ancho_bobina").val();
    var hay_que_bobinar = $("#hay_que_bobinar").val();
    var ancho_seleccionado_bobina = $("#ancho_seleccionado_bobina").val();
    var total_kilos = $("#total_kilos").val();
    var total_kilos_seleccionado = $("#total_kilos_seleccionado").val();
    var ubicacion_contratapa = $("#ubicacion_contratapa").val();
    var pregunta_contratapa = $("#pregunta_contratapa").val();
    var numero_bobina = $("#numero_bobina").val();
    var quien_bobina = $("#quien_bobina").val();
    var comprar_contratapa = $("#comprar_contratapa").val();
    var tipo_entrega = $("#tipo_entrega").val();
    var ruta = $("#ruta").val();
    var cotizacion_id = $("#cotizacion_id").val();
    var estatus = $("#estatus").val();
    var liberar = $("#liberar").val();
    var total_bobina = $("#total_bobina").val();
    var id_contratapa = $("#id_contratapa").val();
    var nodo = $("#nodo").val();
    var proveedor = $("#proveedor").val();
    var vendedor_orden = $("#vendedor_orden").val();
    var fecha_estimada = $("#fecha_estimada").val();
    var ancho_seleccionado_bobina = $("#ancho_corte_final_usar").val();
    var detalle = $("#detalle").val();
    
    var clave = $("#clave").val();



    

$.ajax({
    url: ruta+"caja_standard/consultarClaveModificar",
    global: false,
    type: "POST",
    data: {
        
        clave: clave

    },
    dataType: "text",
    async: true,
    beforeSend: function(){
    },
    success:function(data){
        var html='';
        tam=data.length;
       // console.log(data);

        if(tam > 0){
                       
             alert("MODIFICACION HABILITADA");
             $('#modificar').hide();
             $("#clave").val('');
             $('#divmodificar').css("visibility", "visible");
             $('#divmodificar').show();
             
             $('#divMaterial').show();
             $('#divMaterialViejo').hide();
                     
             //DESBLOQUEANDO PARA DEFINICION
             
             $("#slotter").removeAttr("disabled");
                   
             $('#contratapa2_chosen').css("width", "220px");
             $('#onda2_chosen').css("width", "220px");
             $('#liner2_chosen').css("width", "220px");       
             
             $("#contratapa").removeAttr("disabled");
             $("#ancho_bobina").removeAttr("disabled");
             $("#tipo_pegado").removeAttr("disabled");
             $("#combinar").removeAttr("disabled");
             $("#detalle").removeAttr("disabled");             
             $("#troquel").removeAttr("disabled");
             
             //DESBLOQUEANDO PARA LINER
                          
             $("#descripcion_del_trabajo").removeAttr("disabled");
             $("#para_bobinado").removeAttr("disabled");            
             $("#ancho_seleccionado_bobina").removeAttr("disabled");            
             $("#gramaje_seleccionado_liner").removeAttr("disabled");           
             $("#total_o_parcial").removeAttr("disabled");
             $("#ubicacion_liner").removeAttr("disabled");
             $("#preguntar_a_liner").removeAttr("disabled");
             $("#numero_bobina_liner").removeAttr("disabled");
             $("#ancho_de_bobina").removeAttr("disabled");
             $("#hay_que_comprar_liner").removeAttr("disabled");
             $("#detalle").removeAttr("disabled");
             
             //DESBLOQUEANDO PARA ONDA
             
             $("#descripcion_del_trabajo").removeAttr("disabled");
             $("#para_bobinado").removeAttr("disabled");
             $("#ancho_seleccionado_de_bobina").removeAttr("disabled");
             $("#gramaje_seleccionado").removeAttr("disabled");       
             $("#ubicacion_onda").removeAttr("disabled");
             $("#pregunta_onda").removeAttr("disabled");
             $("#numero_bobinado_onda").removeAttr("disabled");
             $("#ancho_de_bobina").removeAttr("disabled");
             $("#hay_que_comprar_onda").removeAttr("disabled");
             $("#comentarios_repeticion").removeAttr("disabled");             
             $("#tipo_entrega").removeAttr("disabled");
             
             //DESBLOQUEANDO PARA CONTRATAPA
             
             $("#ubicacion_contratapa").removeAttr("disabled");
             $("#pregunta_contratapa").removeAttr("disabled");             
             $("#numero_bobina").removeAttr("disabled");
             $("#hay_que_bobinar").removeAttr("disabled");   
             
             //$("#ancho_bobina_contratapa").removeAttr("disabled");
             $("#ancho_corte_final_usar").removeAttr("disabled"); 
             
             
             //DESBLOQUEANDO PARA PLANCHAS 
             
             $("#gramaje_contratapa").removeAttr("disabled");
             $("#gramaje_onda").removeAttr("disabled");
             $("#gramaje_liner").removeAttr("disabled");
             $("#planchas_usadas").removeAttr("disabled");
             $("#p_usada").removeAttr("disabled");
             $("#operario").removeAttr("disabled");
             $("#largo").removeAttr("disabled");
             $("#ancho").removeAttr("disabled");
             $("#operario").removeAttr("disabled");
                         
             
             
                               
             
        }else{
            $("#msj").append("<div class='alert alert-danger' role='alert'>Error Consulte Administrador</div>");

        }

        //$("#data tbody").append(html);
    },
    error:function (xhr, ajaxOptions, thrownError){
        alert("ERROR EN EL SERVIDOR: "+thrownError);
        return false;
    }
});	
	
}



function ModificarDefinicion(){

	var bandera = LiberarDefinicion2();
	
	if(bandera){
		   $('#slotter').attr('disabled', 'disabled');
		   $('#ancho_bobina').attr('disabled', 'disabled');
		   $('#tipo_pegado').attr('disabled', 'disabled');
		   $('#combinar').attr('disabled', 'disabled');
		   $('#detalle').attr('disabled', 'disabled');
		   
		   $('#btnModificar').hide();
	}  
	   
}

function ModificarOnda(){

	var bandera = LiberarOnda();
	
	if(bandera){
		   $('#descripcion_del_trabajo').attr('disabled', 'disabled');
		   $('#para_bobinado').attr('disabled', 'disabled');
		   $('#ancho_seleccionado_de_bobina').attr('disabled', 'disabled');
		   $('#gramaje_seleccionado').attr('disabled', 'disabled');
		   $('#ubicacion_onda').attr('disabled', 'disabled');		   
		   $('#preguntar_a_onda').attr('disabled', 'disabled');
		   $('#numero_bobina_onda').attr('disabled', 'disabled');
		   $('#ancho_de_bobina').attr('disabled', 'disabled');
		   $('#hay_que_comprar_onda').attr('disabled', 'disabled');
		   
		   $('#btnModificar').hide();
	}  
	   
}

function ModificarLiner(){

	var bandera = LiberarLiner();
	
	if(bandera){
		   $('#descripcion_del_trabajo').attr('disabled', 'disabled');
		   $('#para_bobinado').attr('disabled', 'disabled');
		   $('#ancho_seleccionado_bobina').attr('disabled', 'disabled');
		   $('#gramaje_seleccionado_liner').attr('disabled', 'disabled');
		   $('#total_o_parcial').attr('disabled', 'disabled');
		   $('#ubicacion_liner').attr('disabled', 'disabled');
		   $('#preguntar_a_liner').attr('disabled', 'disabled');
		   $('#numero_bobina_liner').attr('disabled', 'disabled');
		   $('#ancho_de_bobina').attr('disabled', 'disabled');
		   $('#hay_que_comprar_liner').attr('disabled', 'disabled');
		   $('#detalle').attr('disabled', 'disabled');
		   
		   $('#btnModificar').hide();
	}  
	   
}

function ModificarContratapa(){

	var bandera = LiberarContratapa();
	
	if(bandera){
		   $('#comentarios_repeticion').attr('disabled', 'disabled');
		   $('#hay_que_bobinar').attr('disabled', 'disabled');
		   $('#ancho_corte_final_usar').attr('disabled', 'disabled');
		   $('#gramaje_seleccionado').attr('disabled', 'disabled');
		   $('#tipo_entrega').attr('disabled', 'disabled');
		   $('#ubicacion_contratapa').attr('disabled', 'disabled');
		   $('#pregunta_contratapa').attr('disabled', 'disabled');
		   $('#numero_bobina').attr('disabled', 'disabled');
		   $('#detalle').attr('disabled', 'disabled');
		  		   
		   $('#btnModificar').hide();
	}  
	   
}

function ModificarPlanchas(){
	
	var bandera = LiberarPlanchas();
	
	if(bandera){
		   $('#comentarios_repeticion').attr('disabled', 'disabled');
		   $('#hay_que_bobinar').attr('disabled', 'disabled');
		   $('#ancho_corte_final_usar').attr('disabled', 'disabled');
		   $('#gramaje_seleccionado').attr('disabled', 'disabled');
		   $('#tipo_entrega').attr('disabled', 'disabled');
		   $('#ubicacion_contratapa').attr('disabled', 'disabled');
		   $('#pregunta_contratapa').attr('disabled', 'disabled');
		   $('#numero_bobina').attr('disabled', 'disabled');
		   $('#detalle').attr('disabled', 'disabled');
		  		   
		   $('#btnModificar').hide();
	}  
	   
}

function TabCajaStan(){

    var ruta = $("#ruta").val();
    
    $("#TabcajaStan").DataTable({

        "lengthMenu": [[100, 150, 200, 300, -1], [100, 150, 200, 300, "Todos"]],
        "language": {
            "url": ruta+"public/frontend/js/Spanish.json",
            "order": [[ 3, "desc" ]],
            dom: 'Bfrtip'
        }
    });
    
   
}



function bandera(){
    var totalAnchos1_combinacion1=$("#ancho_individual_k").val();
    var totalAnchos2_combinacion1=$("#ancho_individual_i").val();
    var totalAnchos3_combinacion1=$("#ancho_individual_j").val();
    
    if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!="" && totalAnchos3_combinacion1!="" ){
    
    var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1)+parseInt(totalAnchos3_combinacion1);}
    else if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!=""&&totalAnchos3_combinacion1=="" ){
        
        var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1);
        
    }else {
        
    var sumaAnchosJesus=totalAnchos1_combinacion1;  
        
        
    }
    
if (sumaAnchosJesus>1830)
{
    alert("La suma de los anchos no deben ser mayor a 1830");
    $("#total_suma").val(0);
    
    }
    
    }
    
    
    
function bandera2(){
    var totalAnchos1_combinacion1=$("#ancho_individual3_k").val();
    var totalAnchos2_combinacion1=$("#ancho_individual3_i").val();
    var totalAnchos3_combinacion1=$("#ancho_individual3_j").val();
    
    if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!="" && totalAnchos3_combinacion1!="" ){
    
    var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1)+parseInt(totalAnchos3_combinacion1);}
    else if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!=""&&totalAnchos3_combinacion1=="" ){
        
        var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1);
        
    }else {
        
    var sumaAnchosJesus=totalAnchos1_combinacion1;  
        
        
    }
    
if (sumaAnchosJesus>1830)
{
    alert("La suma de los anchos no deben ser mayor a 1830");
    $("#total_suma3").val(0);
    
    }
    
    }
    function bandera3(){
    var totalAnchos1_combinacion1=$("#ancho_individual2_k").val();
    var totalAnchos2_combinacion1=$("#ancho_individual2_i").val();
    var totalAnchos3_combinacion1=$("#ancho_individual2_j").val();
    
    if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!="" && totalAnchos3_combinacion1!="" ){
    
    var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1)+parseInt(totalAnchos3_combinacion1);}
    else if (totalAnchos1_combinacion1!="" && totalAnchos2_combinacion1!=""&&totalAnchos3_combinacion1=="" ){
        
        var sumaAnchosJesus=parseInt(totalAnchos1_combinacion1)+parseInt(totalAnchos2_combinacion1);
        
    }else {
        
    var sumaAnchosJesus=totalAnchos1_combinacion1;  
        
        
    }
    
if (sumaAnchosJesus>1830)
{
    alert("La suma de los anchos no deben ser mayor a 1830");
    $("#total_suma2").val(0);
    
    }
    
    }


// JS ERICK

function contarProduccion() {

    
    var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;
    var id_cotizacion = $("#val_material").val();
    var material = $("#material").val(); 
    var chk_todos = $("#chk_todos2").is(':checked') ? 1 : 0;

    
     $.ajax({
            url: ruta+"orden_produccion_controller/listar_todos2",
            global: false,
            type: "POST",
            data: {
                tabiques: tabiques, 
                c_medidas_especiacles: c_medidas_especiacles,
                rollos: rollos,
                c_standard: c_standard,
                c_solapa: c_solapa,
                p_stock: p_stock,
                bandejas: bandejas,
                c_planchas: c_planchas, 
                id_cotizacion : id_cotizacion,
                chk_todos : chk_todos,
                material  : material
             },
            dataType: "JSON",
            async: true,
            beforeSend: function(){
            },
            success:function(data){
                var html='';
                var html2='';
                tam=data.length;
                var j = 0;
                var codigo = 0;
               // var vector_cot = new array();
                
            $.each(data['bandejas'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['bandejas'].length+'</td>'
                html += '</tr>';
            }
            });
            var codigo = 0;
            $.each(data['caja_standar'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['caja_standar'].length+'</td>'
                                html += '</tr>';
                }
            });
            
            var codigo = 0;
            $.each(data['cajas_medidas_especiales'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['cajas_medidas_especiales'].length+'</td>'
                
                html += '</tr>';
            }
            });
          var codigo = 0;
            $.each(data['cajas_solapa'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['caja_solapa'].length+'</td>'
                
                html += '</tr>';
            }
            });
            var codigo = 0;
            $.each(data['placas_stock_ventas'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['placas_stock_ventas'].length+'</td>'
                
                html += '</tr>';
            }
            });
           var codigo = 0;
            $.each(data['tabiques'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['tabiques'].length+'</td>'
                
                html += '</tr>';
            }
            });
                
                            
            //$("#tablaCombinar tbody").html(html);
            $("#nCotizaciones tbody").html(html);
           // $("#vector_cot").value(vector_cot);


            },
            error:function (xhr, ajaxOptions, thrownError){
                alert("ERROR EN EL SERVIDOR: "+thrownError);
                return false;
            }
        });
  
}





function contarProduccion2(material) {

    
    var ruta = $("#ruta").val();
    var tabiques=$("#tabiques").is(':checked') ? 1 : 0;
    var c_medidas_especiacles=$("#c_medidas").is(':checked') ? 1 : 0;
    var rollos=$("#rollos").is(':checked') ? 1 : 0;
    var c_standard=$("#c_standard").is(':checked') ? 1 : 0;
    var c_solapa=$("#c_solapa").is(':checked') ? 1 : 0;
    var p_stock=$("#p_stock").is(':checked') ? 1 : 0;
    var bandejas=$("#bandejas").is(':checked') ? 1 : 0;
    var c_planchas=$("#c_planchas").is(':checked') ? 1 : 0;
    var id_cotizacion = $("#val_material").val();
    
    var chk_todos = $("#chk_todos2").is(':checked') ? 1 : 0;

    
     $.ajax({
            url: ruta+"orden_produccion_controller/listar_todos2",
            global: false,
            type: "POST",
            data: {
                tabiques: tabiques, 
                c_medidas_especiacles: c_medidas_especiacles,
                rollos: rollos,
                c_standard: c_standard,
                c_solapa: c_solapa,
                p_stock: p_stock,
                bandejas: bandejas,
                c_planchas: c_planchas, 
                id_cotizacion : id_cotizacion,
                chk_todos : chk_todos,
                material  : material
             },
            dataType: "JSON",
            async: true,
            beforeSend: function(){
            },
            success:function(data){
                var html='';
                var html2='';
                tam=data.length;
                var j = 0;
                var codigo = 0;
               // var vector_cot = new array();
                
            $.each(data['bandejas'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['bandejas'].length+'</td>'
                html += '</tr>';
            }
            });
            var codigo = 0;
            $.each(data['caja_standar'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['caja_standar'].length+'</td>'
                                html += '</tr>';
                }
            });
            
            var codigo = 0;
            $.each(data['cajas_medidas_especiales'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['cajas_medidas_especiales'].length+'</td>'
                
                html += '</tr>';
            }
            });
          var codigo = 0;
            $.each(data['cajas_solapa'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['caja_solapa'].length+'</td>'
                
                html += '</tr>';
            }
            });
            var codigo = 0;
            $.each(data['placas_stock_ventas'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['placas_stock_ventas'].length+'</td>'
                
                html += '</tr>';
            }
            });
           var codigo = 0;
            $.each(data['tabiques'], function (i,item){
                
                //vector_cot[j] = item['numero_cotizacion'];
                //j = j + 1;
                 if (item['codigo'] != codigo){
                    codigo = item['codigo'];
                html += '<tr>'
                html += '<td style="text-align: center;">'+item['id_nodo']+'</td>'
                html += '<td style="text-align: center;">'+item['codigo']+'</td>'
                html += '<td style="text-align: center;">'+data['tabiques'].length+'</td>'
                
                html += '</tr>';
            }
            });
                
                            
            //$("#tablaCombinar tbody").html(html);
            $("#nCotizaciones tbody").append(html);
           // $("#vector_cot").value(vector_cot);


            },
            error:function (xhr, ajaxOptions, thrownError){
                alert("ERROR EN EL SERVIDOR: "+thrownError);
                return false;
            }
        });
  
}


function autoupdate_comb01()
{
     sumarAnchos('1'); 
     bandera(); 
     llenarTablaAgrupa2();
     llenarTablaAgrupa();
}

function autoupdate_comb02()
{
    sumarAnchos('3'); 
    bandera2(); 
    procesarCombinacion02();
    llenarTablaAgrupa();
}
function autoupdate_comb03()
{
    sumarAnchos('2'); 
    bandera3();
    procesarCombinacion03();
    llenarTablaAgrupa();
}




function recalcular_cotizacion()
{
    var psc = $("#precio_unitario").val();  
    var pvc = $("#precio_cliente").val();
    var ancho_placa_madre = $("#ancho_placa").val(); 
    var largo_individual_excedente= $("#largo_individual_placa").val(); 
    var total_cajas_al_ancho = $("#total_caja_ancho").val(); 
    var id_material = $("#material").val(); 





var ruta = $("#ruta").val();

// GRAMAJE Y RECALCULO //


$.ajax({
        url: ruta+"caja_standard/obtener_gramaje",
        global: false,
        type: "POST",
        data: {material : id_material},
        dataType: "json",
        // async: false,
        beforeSend: function(){
            //$("#wait").show();
        },
        success: function(data){


var valor_gramaje = parseInt(data[0].usado_por_grau);
// var precio_cotizado = ( psc / ((( ancho_placa_madre * largo_individual_excedente / total_cajas_al_ancho ) * valor_gramaje ) / 1000000 ) * 1000 );
// var precio_vendido = ( pvc/(((ancho_placa_madre*largo_individual_excedente/total_cajas_al_ancho)*valor_gramaje)/1000000)*1000);
var gramos_caja =  (((ancho_placa_madre*largo_individual_excedente*valor_gramaje)/total_cajas_al_ancho)/1000000) ;
var valor_base_caja_cotizado = ((gramos_caja * 907)/1000);
var valor_extra_cotizacion = (psc - valor_base_caja_cotizado);
var valor_base_caja_cobrado = (pvc - valor_extra_cotizacion);
var precio_vendido = ((valor_base_caja_cobrado / gramos_caja)*1000);
var precio_cotizado = ((valor_base_caja_cotizado / gramos_caja)*1000);
var total_precio_cotizado = (precio_cotizado + valor_extra_cotizacion);
var total_precio_vendido = (precio_vendido + valor_extra_cotizacion);

$("#valor_base_caja_cobrado").val(valor_base_caja_cobrado.toFixed(2));
$("#valor_base_caja_cotizado").val(valor_base_caja_cotizado.toFixed(2));
$("#gramos_caja").val(gramos_caja.toFixed(2));
$("#gramaje_material").val(valor_gramaje.toFixed(2));



$("#valor_kilo_cotizacion").val(precio_cotizado.toFixed(2));
$("#valor_extra_cotizacion").val(valor_extra_cotizacion.toFixed(2));
$("#total_cotizacion").val(total_precio_cotizado.toFixed(2));

$("#valor_kilo_cobrar").val(precio_vendido.toFixed(2));

$("#valor_extra_cobrar").val(valor_extra_cotizacion.toFixed(2));
$("#total_cobrar").val(total_precio_vendido.toFixed(2));
$("#fecha_ultima_orden").val();
$("#tiempo_precio").val();

        },
        error:function (xhr, ajaxOptions, thrownError){
            // alert("ERROR EN EL SERVIDOR: "+thrownError);
            return false;
        }
    });


}



function nuevo_precio_recotizacion()
{


    var nuevo_precio = $("#nuevo_precio_cliente").val();
    var ancho_placa_madre = $("#ancho_placa").val(); 
    var largo_individual_excedente= $("#largo_individual_placa").val(); 
    var total_cajas_al_ancho = $("#total_caja_ancho").val(); 
    var valor_extra_cotizacion = $("#valor_extra_cotizacion").val(); 
    var valor_gramaje = $("#gramaje_material").val(); 








var precio_vendido = ( nuevo_precio/(((ancho_placa_madre*largo_individual_excedente/total_cajas_al_ancho)*valor_gramaje)/1000000)*1000);

var total_precio_vendido = (precio_vendido + parseInt(valor_extra_cotizacion));


$("#total_nuevo_precio").val(total_precio_vendido.toFixed(2));





}

// VERIFICAR MAYOR Y MENOR PRECIO NUEVO > 3 DIGITOS
function menor_mayor_precio_nuevo(num)
{
 var psc = $("#precio_unitario").val();  
    var pvc = $("#precio_cliente").val();
    var nuevo_precio = num;

    var min_precio = Math.min(psc,pvc) - (Math.min(psc,pvc) * 0.1);
    var max_precio = Math.max(psc,pvc) + (Math.max(psc,pvc) * 0.2);

if (num.length >= 3) {
if (nuevo_precio < min_precio || nuevo_precio > max_precio){
alert('Valor no puede ser menor a ' +min_precio+ ' o superior a ' +max_precio);
$("#nuevo_precio_cliente").val('');
$("#total_nuevo_precio").val('');
}
}

}


// VERIFICAR MAYOR Y MENOR PRECIO NUEVO < 3 DIGITOS
function menor_mayor_precio_nuevo2(num)
{
 var psc = $("#precio_unitario").val();  
    var pvc = $("#precio_cliente").val();
    var nuevo_precio = num;

    var min_precio = Math.min(psc,pvc) - (Math.min(psc,pvc) * 0.1);
    var max_precio = Math.max(psc,pvc) + (Math.max(psc,pvc) * 0.2);

if (num.length < 3 && num.length > 0) {
if (nuevo_precio < min_precio || nuevo_precio > max_precio){
alert('Valor no puede ser menor a ' +min_precio+ ' o superior a ' +max_precio);
$("#nuevo_precio_cliente").val('');
$("#total_nuevo_precio").val('');
}
}

}

// END ERICK JS
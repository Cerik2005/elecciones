
  
<div class="container-fluid">
  <div class="page-header">

  <h2><b>Electores</b></h2>
  
</div>
<div class="row">
<div class="col-md-12" >
  <div class="table-responsive">  
  <table id="electores" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Cedula</th>
        <th>Nombre</th>
        <th>Centro de Votacion</th>
        <th>Detalles</th>
        <th>Acciones</th>

      </tr>
    </thead>
    <tbody>
      <?php 
      $row = 0;
      foreach ($electores as $elector) {
      $row ++;
?>
      <tr>
        <td ><?php echo $row ?></td>
        <td style="text-align: center;vertical-align: middle;font-weight: bold"><?php echo $elector->id_elector ?></td>
        <td><?php echo $elector->nombre_elector. ' ' .$elector->apellido_elector ?></td>
        <td><?php echo $elector->nombre_centro ?></td>
        <td></td>
        <td>
<?php if ($this->session->id_perfil == 1){ ?>
<!--           <a class="btn btn-warning" data-toggle="modal" data-target="#ModalEditar" onclick="ModalEditar(<?php echo $dato->id_sector; ?>)" ><i class="fa fa-pencil" aria-hidden="true"></i></a> -->

<a class="btn btn-danger" data-toggle="modal" data-target="#ModalEliminar" 
onclick="ModalEliminar(<?php echo $elector->id_elector.",'".$elector->nombre_elector." ".$elector->apellido_elector."'" ?>)" ><i class="fa fa-trash" aria-hidden="true"></i></a>
<?php } ?>

        </td>

      </tr>
      <?php
    }
    ?>
    </tbody>
  </table>
  </div>
</div>
</div>
</div>
<!-- MODAL ELIMINAR -->
<div id="ModalEliminar" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
        <?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">Eliminar Elector</h3>
      </div>
      <div class="modal-body clearfix" id="modal-body-eliminar">
            <div class="col-sm-12">
      <div class="container-fluid">
        <input type="text" name="id_elector_eliminar" id="id_elector_eliminar" class="form-control" style="display:none">
            <div class="form-group">
                <label  for="elector_eliminar">Elector:</label>
                <div class="input-group"><input type="text" name="elector_eliminar" id="elector_eliminar" class="form-control" required readonly=""><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
  <div class="checkbox">
    <label><input type="checkbox" required> Seleccione para Confirmar</label>
  </div>
</div>
</div>


      </div>
      <div class="modal-footer">
<button type="submit" name="accion" value="eliminar" class="btn btn-primary">Eliminar</button>
<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </form>
  </div>
</div>
<!-- FIN MODAL -->
<script type="text/javascript">
$(document).ready(function() {
    $('#electores').DataTable( {
      "pageLength": 50,

        "language": {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}
    } );
} );
</script>
<script type="text/javascript">
    function ModalAgregar(){

}

    function ModalEditar($id){


    $('#modal-body-editar').load('<?php echo base_url();?>sectores/editar/' + $id);
}

    function ModalEliminar($id,$elector){

$("#id_elector_eliminar").val($id);
$("#elector_eliminar").val($elector);

}
</script>

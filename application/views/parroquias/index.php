
  
<div class="container-fluid">
  <div class="page-header">

  <h2><b>Parroquias</b></h2>
  
</div>
<?php
if ( $this->session->flashdata('SuccessMessage') != '' ) : ?>
<div class="alert alert-success"><?php echo $this->session->flashdata('SuccessMessage'); ?></div>
<?php
endif;

if ( $this->session->flashdata('ErrorMessage') != '' ) : ?>
<div class="alert alert-danger"><?php echo $this->session->flashdata('ErrorMessage'); ?></div>
<?php
endif;
?>
  <div class="row">
    <div class="col-md-12" >
    <div style="font-size: 18px" class="pull-right">
    <a class="btn btn-success" data-toggle="modal" data-target="#ModalAgregar" onclick="ModalAgregar()" >Agregar <i class="fa fa-user" aria-hidden="true"></i></a>
  </div>
</div>
  </div>
  <br>
<div class="row">
<div class="col-md-12" >
  <div class="table-responsive">  
  <table id="parroquias" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Sectores</th>
        <th>Acciones</th>

      </tr>
    </thead>
    <tbody>
      <?php 
      $row = 0;
      foreach ($datos as $dato) {
      $row ++;
?>
      <tr>
        <td><?php echo $row ?></td>
        <td style="text-align: center;font-weight: bold;vertical-align: middle;"><?php echo $dato->nombre_parroquia ?></td>
        <td>
          <ul><?php $sectores=$this->sectores_model->getSectoresIdParroquia($dato->id_parroquia); 
        foreach ($sectores as $sector) {
        ?>
<li><?php echo $sector->nombre_sector ?></li>


          <?php } ?>
        </ul>
        </td>
        <td>
<a class="btn btn-warning" data-toggle="modal" data-target="#ModalEditar" onclick="ModalEditar(<?php echo $dato->id_parroquia; ?>)" ><i class="fa fa-pencil" aria-hidden="true"></i></a>

<a class="btn btn-danger" data-toggle="modal" data-target="#ModalEliminar" 
onclick="ModalEliminar(<?php echo $dato->id_parroquia.",'".$dato->nombre_parroquia."'" ?>)" ><i class="fa fa-trash" aria-hidden="true"></i></a>
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
<!-- MODAL AGREGAR -->
<div id="ModalAgregar" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
        <?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">Agregar Parroquia</h3>
      </div>
      <div class="modal-body clearfix" id="modal-body-agregar">
                    <div class="col-sm-12">
<div class="container-fluid">
                    <div class="form-group">
                <label  for="nombre_parroquia">Nombre Parroquia:</label>
                <div class="input-group"><input type="text" name="nombre_parroquia" id="nombre_parroquia"  class="form-control" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
<button type="submit" name="accion" value="agregar" class="btn btn-primary">Agregar</button>
<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </form>
  </div>
</div>
<!-- FIN MODAL -->

<!-- MODAL EDITAR -->
<div id="ModalEditar" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">Editar Parroquia</h3>
      </div>
      <div class="modal-body clearfix" id="modal-body-editar">
     </div>
      <div class="modal-footer">
<button type="submit" name="accion" value="editar" class="btn btn-primary">Editar</button>
<button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
     </form> 
  </div>
</div>
<!-- FIN MODAL -->
<!-- MODAL ELIMINAR -->
<div id="ModalEliminar" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
        <?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h3 class="modal-title">Eliminar Parroquia</h3>
      </div>
      <div class="modal-body clearfix" id="modal-body-eliminar">
                    <div class="col-sm-12">
      <div class="container-fluid">
        <input type="text" name="id_parroquia_eliminar" id="id_parroquia_eliminar" class="form-control" style="display:none">
            <div class="form-group">
                <label  for="parroquia_eliminar">Parroquia:</label>
                <div class="input-group"><input type="text" name="parroquia_eliminar" id="parroquia_eliminar" class="form-control" required readonly=""><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
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
    $('#parroquias').DataTable( {
      "pageLength": 10,

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

    $('#modal-body-editar').load('<?php echo base_url();?>parroquias/editar/' + $id);
}

    function ModalEliminar($id,$parroquia){

$("#id_parroquia_eliminar").val($id);
$("#parroquia_eliminar").val($parroquia);

}
</script>
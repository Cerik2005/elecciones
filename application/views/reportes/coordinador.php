<style>

@media print {
    .imprimir {
        display:none
    }
}
</style>
<div class="container-fluid">


  <h3><b>Coordinador <?php echo $coordinador->nombre_coordinador.' '.$coordinador->apellido_coordinador ?></b></h3>
  <h4><b>Parroquia <?php echo $coordinador->nombre_parroquia ?></b></h4>
<div class="row imprimir">
  <div class="col-md-12" >
<button type="button" class="btn btn-primary" style="float: right;" onclick="print()">Imprimir <i class="fa fa-print" aria-hidden="true"></i></button>
<br><br>
</div>
</div>
<div class="row">
<div class="col-md-12" >
  <div class="table-responsive">  
  <table id="electores" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Responsable</th>
        <th>Sector</th>


      </tr>
    </thead>
    <tbody>
      <?php 
      $row = 0;
      foreach ($responsables as $responsable) {
      $row ++;
?>
      <tr>
        <td ><?php echo $row ?></td>
        <td><?php echo $responsable->nombre_responsable.' '.$responsable->apellido_responsable ?></td>
        <td><?php echo $responsable->nombre_sector ?></td>



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
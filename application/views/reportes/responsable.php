<style>

@media print {
    .imprimir {
        display:none
    }
}

</style>
<div class="container-fluid">


  <h3><b>Responsable <?php echo $responsable->nombre_responsable.' '.$responsable->apellido_responsable ?></b></h3>
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
        <th>Parroquia</th>
        <th>Sector</th>
        <th>Centros</th>


      </tr>
    </thead>
    <tbody>
      <?php 
      $row = 0;

      $row ++;
?>
      <tr>
        <td ><?php echo $row ?></td>
        <td><?php echo $responsable->nombre_responsable.' '.$responsable->apellido_responsable ?></td>
                <td><?php echo $responsable->nombre_parroquia ?></td>
        <td><?php echo $responsable->nombre_sector ?></td>


<td></td>
      </tr>

    </tbody>
  </table>
  </div>
</div>
</div>

<hr>
<div class="row">
<div class="col-md-12" >
  <div class="table-responsive">  
  <table id="electores" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Id Elector</th>
        <th>Nombre Elector</th>
        <th>Telefono</th>
        <th>Direccion</th>
        <th>Centro</th>



      </tr>
    </thead>
    <tbody>
      <?php 
      $row = 0;

 
foreach($electores as $elector){
       $row ++;
?>
      <tr>
        <td ><?php echo $row ?></td>
                <td><?php echo $elector->id_elector ?></td>
        <td><?php echo $elector->nombre_elector.' '.$elector->apellido_elector ?></td>
<td><?php echo $elector->telefono_elector ?></td>
<td><?php echo $elector->direccion_elector ?></td>
<td><?php echo $elector->nombre_centro ?></td>



      </tr>
<?php
        };
        ?>
    </tbody>
  </table>
  </div>
</div>
</div>
</div>
<style>

@media print {
    .imprimir {
        display:none
    }
}

</style>

<div class="container-fluid">


  <h3><b>Sector <?php echo $sector->nombre_sector ?></b></h3>

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
        <th>Parroquia</th>
        <th>Coordinadores</th>
        <th>Responsables</th>
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
        <td><?php echo $parroquia->nombre_parroquia ?></td>
        <td><ul><?php 
        foreach($coordinadores as $coordinador){
          echo '<li>'.$coordinador->nombre_coordinador.' '.$coordinador->apellido_coordinador.'</li>';

        }; ?>
      </ul>
        </td>
        <td><ul><?php 
        foreach($responsables as $responsable){
          echo '<li>'.$responsable->nombre_responsable.' '.$responsable->apellido_responsable.'</li>';

        };?>
      </ul>
        </td>
        <td>
          <ul>
            <?php 
        foreach($centros as $centro){
          echo '<li>'.$centro->nombre_centro.'</li>';

        };?>
      </ul>
        </td>

      </tr>

    </tbody>
  </table>
  </div>
</div>
</div>
<hr>
<!-- <div class="row">
<div class="col-md-12" >
  <div class="table-responsive">  
  <table id="electores" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th>#</th>
        <th>Id Elector</th>
        <th>Nombre Elector</th>
        <th>Telefono</th>
        <th>Responsable</th>



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
<td><?php echo $elector->nombre_responsable.' '.$elector->apellido_responsable ?></td>



      </tr>
<?php
        };
        ?>
    </tbody>
  </table>
  </div>
</div>
</div> -->
</div>
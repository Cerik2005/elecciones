<style>

@media print {
    .imprimir {
        display:none
    }
}
</style>
<div class="container-fluid">


  <h3><b>Parroquia <?php echo $parroquia->nombre_parroquia ?></b></h3>
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
        <th>Coordinador</th>
        <th>Responsables</th>
        <th>Sectores</th>
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
        <td><ul><?php 
                foreach($coordinadores as $coordinador){
                  echo '<li>'.$coordinador->nombre_coordinador.' '.$coordinador->apellido_coordinador.'</li>';  
                }; ?>

                </td>
       <td><ul><?php 
        foreach($responsables as $responsable){
          echo '<li>'.$responsable->nombre_responsable.' '.$responsable->apellido_responsable.'</li>';

        }; ?>
      </ul>
        </td>
        <td><ul><?php 
        foreach($sectores as $sector){
          echo '<li>'.$sector->nombre_sector.'</li>';

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
</div>
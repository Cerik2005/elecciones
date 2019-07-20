<style type="text/css">
.chosen-container
{
    width: 100% !important;
}
a {
  font-weight: bold;
}
</style>
<div class="container-fluid">
  <div class="page-header">

  <h2><b>Reportes</b></h2>
  
</div>

  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#coordinador">Coordinador</a></li>
    <li><a data-toggle="tab" href="#responsable">Responsable</a></li>
    <li><a data-toggle="tab" href="#parroquia">Parroquia</a></li>
    <li><a data-toggle="tab" href="#sector">Sector</a></li>
    <li><a data-toggle="tab" href="#centro">Centro</a></li>
  </ul>
  
  <div class="tab-content">


    <div id="coordinador" class="tab-pane fade in active">
      <h3>Coordinador</h3>
              <div class="col-md-6 col-lg-6">
              	       	<form action="<?php echo base_url();?>reportes/coordinador" method="post" target="_blank">
             <div class="form-group">
                <label  for="id_coordinador">Coordinador</label>
                
                    <select name="id_coordinador" id="id_coordinador" class="form-control chosen-select" >
               <option value="" disabled selected>Seleccione</option>
             <?php
                
                foreach($coordinadores as $coordinador)
                {
                    ?>
                    <option value="<?php echo $coordinador->id_coordinador?>">
                        <?php echo $coordinador->nombre_parroquia ?> - <?php echo $coordinador->nombre_coordinador ?> <?php echo $coordinador->apellido_coordinador ?></option>
                    <?php
                }
                ?>
               
            </select>
                </div>
                  <div class="form-group pull-right"> 
 
      <button type="submit" class="btn btn-primary">Buscar <i class="fa fa-search" aria-hidden="true"></i></button>

  </div>
</form>
            </div>
    </div>






    <div id="responsable" class="tab-pane fade">
      <h3>Responsable</h3>
              <div class="col-md-6 col-lg-6">
              	              	       	<form action="<?php echo base_url();?>reportes/responsable" method="post" target="_blank">
       <div class="form-group">
                <label  for="id_responsable">Responsable:</label>
                
                    <select name="id_responsable" id="id_responsable" class="form-control chosen-select" >
               <option value="" disabled selected>Seleccione</option>
             <?php
                
                foreach($responsables as $responsable)
                {
                    ?>
                    <option value="<?php echo $responsable->id_responsable?>">
                        <?php echo $responsable->nombre_parroquia ?> - <?php echo $responsable->nombre_sector ?> - <?php echo $responsable->nombre_responsable ?> <?php echo $responsable->apellido_responsable ?></option>
                    <?php
                }
                ?>
               
            </select>
                </div>
                                  <div class="form-group pull-right"> 
 
      <button type="submit" class="btn btn-primary">Buscar <i class="fa fa-search" aria-hidden="true"></i></button>

  </div>
</form>
            </div>
    </div>







    <div id="parroquia" class="tab-pane fade">
      <h3>Parroquia</h3>
              <div class="col-md-6 col-lg-6">
              	              	       	<form action="<?php echo base_url();?>reportes/parroquia" method="post" target="_blank">
                   <div class="form-group">
                <label  for="id_parroquia">Parroquia:</label>

                    <select name="id_parroquia" id="id_parroquia"  class="form-control chosen-select">
               <option disabled selected>Seleccione</option>
               <?php 
               foreach ($parroquias as $parroquia) 
               {
                ?>
               <option value="<?php echo $parroquia->id_parroquia?>" >
                <?php echo $parroquia->nombre_parroquia; ?></option>
               <?php 
           }
            ?>
            </select>


            </div>
                              <div class="form-group pull-right"> 
 
      <button type="submit" class="btn btn-primary">Buscar <i class="fa fa-search" aria-hidden="true"></i></button>

  </div>
</form>
        </div>
    </div>




    <div id="sector" class="tab-pane fade">
      <h3>Sector</h3>
              <div class="col-md-6 col-lg-6">
              	              	       	<form action="<?php echo base_url();?>reportes/sector" method="post" target="_blank">
                  <div class="form-group">
                <label  for="id_sector">Sector:</label>

                    <select name="id_sector" id="id_sector"  class="form-control chosen-select">
               <option disabled selected>Seleccione</option>
               <?php foreach ($sectores as $sector) {
                ?>
               <option value="<?php echo $sector->id_sector?>">
                <?php echo $sector->nombre_parroquia." - ".$sector->nombre_sector ?></option>
               <?php } ?>
            </select>
                </div>
                                  <div class="form-group pull-right"> 
 
      <button type="submit" class="btn btn-primary">Buscar <i class="fa fa-search" aria-hidden="true"></i></button>

  </div>
</form>

            </div>

    </div>




        <div id="centro" class="tab-pane fade">
      <h3>Centro</h3>       
       <div class="col-md-6 col-lg-6">
       	<form action="<?php echo base_url();?>reportes/centro" method="post" target="_blank">
       <div class="form-group">
                <label  for="id_centro">Centro de Votacion:</label>
                
                    <select name="id_centro" id="id_centro" class="form-control chosen-select" >
               <option value="" disabled selected>Seleccione</option>
             <?php
                
                foreach($centros as $centro)
                {
                    ?>
                    <option value="<?php echo $centro->id_centro?>">
                        <?php echo $centro->nombre_parroquia ?> - <b><?php echo $centro->nombre_centro ?></b></option>
                    <?php
                }
                ?>
               
            </select>
                </div>
                                  <div class="form-group pull-right"> 
 
      <button type="submit" class="btn btn-primary">Buscar <i class="fa fa-search" aria-hidden="true"></i></button>

  </div>
</form>
            </div>
    </div>






  </div>

</div>

<script src="<?php echo base_url(); ?>public/assets/chosen_v1.8.2/docsupport/init.js" type="text/javascript" charset="utf-8"></script>
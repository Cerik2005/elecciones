 <head>



    <!-- JQuery -->



    <script src="<?php echo base_url(); ?>public/assets/Jquery/jquery-3.2.1.min.js"></script>





       <!-- Bootstrap core CSS -->

    <link rel="stylesheet" href="<?php echo base_url(); ?>public/assets/bootstrap-3.3.7-dist/css/bootstrap.css"></script>

    <script src="<?php echo base_url(); ?>public/assets/bootstrap-3.3.7-dist/js/bootstrap.js"></script>





 <!-- Font Awesome -->



    <link rel="stylesheet" href="<?php echo base_url(); ?>public/assets/font-awesome-4.7.0/css/font-awesome.css" />



    <!--  Custom CSS y JS-->



    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/style.css" />

</head>



<div class="col-sm-12">

<div class="container-fluid">

<input type="text" name="id_sector_editar" id="id_sector_editar" value="<?php echo $sector->id_sector ?>" class="form-control" style="display: none">

                             <div class="form-group">
                <label  for="nombre_sector">Nombre:</label>
                <div class="input-group"><input type="text" name="nombre_sector" id="nombre_sector" value="<?php echo $sector->nombre_sector ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>

             <div class="form-group">
                <label  for="id_parroquia">Parroquia:</label>
                <div class="input-group">
                    <select name="id_parroquia" id="id_parroquia"  class="form-control chosen-select">
               <option disabled selected>Seleccione</option>
               <?php foreach ($parroquias as $parroquia) {
                ?>
               <option value="<?php echo $parroquia->id_parroquia?>" <?php if($sector->id_parroquia == $parroquia->id_parroquia){echo "selected";} ?> >
                <?php echo $parroquia->nombre_parroquia; ?></option>
               <?php } ?>
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>

                        <div class="form-group">
                <label  for="zona">Zona:</label>
                <div class="input-group">
                    <select name="zona" id="zona"  class="form-control">
               <option disabled selected>Seleccione</option>
               <option value="NORTE" <?php if($sector->zona_sector == "NORTE"){echo "selected";} ?>>NORTE</option>
               <option value="SUR" <?php if($sector->zona_sector == "SUR"){echo "selected";} ?>>SUR</option>
               <option value="ESTE" <?php if($sector->zona_sector == "ESTE"){echo "selected";} ?>>ESTE</option>
               <option value="OESTE" <?php if($sector->zona_sector == "OESTE"){echo "selected";} ?>>OESTE</option>
               
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>



            </div>

</div>

</div>


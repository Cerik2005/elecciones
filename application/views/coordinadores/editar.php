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
<input type="text" name="id_coordinador_editar" id="id_coordinador_editar" value="<?php echo $coordinador->id ?>" class="form-control" style="display: none">
<div class="form-group">
                <label  for="id_coordinador">Cedula:</label>
                <div class="input-group"><input type="text" name="id_coordinador" id="id_coordinador" value="<?php echo $coordinador->id_coordinador ?>" onkeypress="return soloNumeros(event)"   class="form-control" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
                        <div class="form-group">
                <label  for="nombre_coordinador">Nombre:</label>
                <div class="input-group"><input type="text" name="nombre_coordinador" id="nombre_coordinador" value="<?php echo $coordinador->nombre_coordinador ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
     
                             <div class="form-group">
                <label  for="apellido_coordinador">Apellido:</label>
                <div class="input-group"><input type="text" name="apellido_coordinador" id="apellido_coordinador" value="<?php echo $coordinador->apellido_coordinador ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
                            <div class="form-group">
                <label  for="telefono_coordinador">Telefono:</label>
                <div class="input-group"><input type="text" name="telefono_coordinador" id="telefono_coordinador" value="<?php echo $coordinador->telefono_coordinador ?>" onkeypress="return soloNumeros(event)"   class="form-control" required><span class="input-group-addon primary"><i class="fa fa-phone" aria-hidden="true"></i></span></div>
            </div> 
             <div class="form-group">
                <label  for="id_parroquia">Parroquia:</label>
                <div class="input-group">
                    <select name="id_parroquia" id="id_parroquia"  class="form-control">
               <option disabled selected>Seleccione</option>
               <?php foreach ($parroquias as $parroquia) {
                ?>
               <option value="<?php echo $parroquia->id_parroquia?>" <?php if($coordinador->id_parroquia == $parroquia->id_parroquia){echo "selected"; }; ?>

                >
                <?php echo $parroquia->nombre_parroquia." - ".$parroquia->nombre_parroquia ?></option>
               <?php } ?>
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>

                        <div class="form-group">
                <label  for="zona">Zona:</label>
                <div class="input-group">
                    <select name="zona" id="zona"  class="form-control">
               <option disabled selected>Seleccione</option>
               <option value="NORTE" <?php if($coordinador->zona == "NORTE"){echo "selected";}; ?>>NORTE</option>
               <option value="SUR"   <?php if($coordinador->zona == "SUR"){echo "selected";}; ?>>SUR</option>
               <option value="ESTE"  <?php if($coordinador->zona == "ESTE"){echo "selected";}; ?>>ESTE</option>
               <option value="OESTE" <?php if($coordinador->zona == "OESTE"){echo "selected";}; ?>>OESTE</option>
               
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>
</div>
</div>

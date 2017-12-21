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
<input type="text" name="id_responsable_editar" id="id_responsable_editar" value="<?php echo $responsable->id ?>" class="form-control" style="display: none">
            <div class="form-group">
                <label  for="id_responsable">Cedula:</label>
                <div class="input-group"><input type="text" name="id_responsable" id="id_responsable" onkeypress="return soloNumeros(event)" value="<?php echo $responsable->id_responsable; ?>"  class="form-control" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
                        <div class="form-group">
                <label  for="nombre_responsable">Nombre:</label>
                <div class="input-group"><input type="text" name="nombre_responsable" id="nombre_responsable" value="<?php echo $responsable->nombre_responsable; ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
     
                             <div class="form-group">
                <label  for="apellido_responsable">Apellido:</label>
                <div class="input-group"><input type="text" name="apellido_responsable" id="apellido_responsable" value="<?php echo $responsable->apellido_responsable; ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
                            <div class="form-group">
                <label  for="telefono_responsable">Telefono:</label>
                <div class="input-group"><input type="text" name="telefono_responsable" id="telefono_responsable" onkeypress="return soloNumeros(event)" value="<?php echo $responsable->telefono_responsable; ?>"  class="form-control" required><span class="input-group-addon primary"><i class="fa fa-phone" aria-hidden="true"></i></span></div>
            </div> 
             <div class="form-group">
                <label  for="id_sector">Sector:</label>
                <div class="input-group">
                    <select name="id_sector" id="id_sector"  class="form-control chosen-select">
               <option disabled selected>Seleccione</option>
               <?php foreach ($sectores as $sector) {
                ?>
               <option value="<?php echo $sector->id_sector?>" <?php if($responsable->id_sector == $sector->id_sector){ echo "selected"; } ?> >
                <?php echo $sector->nombre_parroquia." - ".$sector->nombre_sector ?></option>
               <?php } ?>
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>
</div>
</div>
<script src="<?php echo base_url(); ?>public/assets/chosen_v1.8.2/docsupport/init.js" type="text/javascript" charset="utf-8"></script>
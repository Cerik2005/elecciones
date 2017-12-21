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

<input type="text" name="id_centro_editar" id="id_centro_editar" value="<?php echo $centro->id_centro ?>" class="form-control" style="display: none">

                             <div class="form-group">
                <label  for="nombre_centro">Nombre:</label>
                <div class="input-group"><input type="text" name="nombre_centro" id="nombre_centro" value="<?php echo $centro->nombre_centro ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>

             <div class="form-group">
                <label  for="id_parroquia">Parroquia:</label>
                <div class="input-group">
                    <select name="id_parroquia" id="id_parroquia"  class="form-control chosen-select">
               <option disabled selected>Seleccione</option>
               <?php foreach ($parroquias as $parroquia) {
                ?>
               <option value="<?php echo $parroquia->id_parroquia?>" <?php if($centro->id_parroquia == $parroquia->id_parroquia){echo "selected";} ?> >
                <?php echo $parroquia->nombre_parroquia; ?></option>
               <?php } ?>
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>





            </div>

</div>

</div>


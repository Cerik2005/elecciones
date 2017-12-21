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

<input type="text" name="id_parroquia_editar" id="id_parroquia_editar" value="<?php echo $parroquia->id_parroquia ?>" class="form-control" style="display: none">

            <div class="form-group">

                <label  for="nombre_parroquia">Parroquia:</label>

                <div class="input-group"><input type="text" name="nombre_parroquia" id="nombre_parroquia"  value="<?php echo $parroquia->nombre_parroquia; ?>"  class="form-control" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>

            </div>


</div>

</div>

<script src="<?php echo base_url(); ?>public/assets/chosen_v1.8.2/docsupport/init.js" type="text/javascript" charset="utf-8"></script>
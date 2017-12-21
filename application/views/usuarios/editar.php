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
<input type="text" name="id_usuario_editar" id="id_usuario_editar" value="<?php echo $usuario->id ?>" class="form-control" style="display: none">
            <div class="form-group">
                <label  for="usuario">Usuario:</label>
                <div class="input-group"><input type="text" name="usuario" id="usuario" onkeyup="return UpperInput(thi)" value="<?php echo $usuario->usuario; ?>"  class="form-control" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
                        <div class="form-group">
                <label  for="nombre_usuario">Nombre:</label>
                <div class="input-group"><input type="text" name="nombre_usuario" id="nombre_usuario" value="<?php echo $usuario->nombre; ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
     
                 
             <div class="form-group">
                <label  for="id_perfil_usuario">Perfil:</label>
                <div class="input-group">
                    <select name="id_perfil_usuario" id="id_perfil_usuario"  class="form-control">
               <option disabled selected>Seleccione</option>
               <?php foreach ($perfiles as $perfil) {
                ?>
               <option value="<?php echo $perfil->id_perfil ?>" <?php if($usuario->id_perfil == $perfil->id_perfil){ echo "selected"; } ?> >
                <?php echo $perfil->nombre_perfil ?></option>
               <?php } ?>
            </select><span class="input-group-addon primary"><i class="fa fa-users" aria-hidden="true"></i></span>
                </div>

            </div>
</div>
</div>
<script type="text/javascript">
$(document).on('keyup', "input[type=text]", function () {
    $(this).val(function (_, val) {
        return val.toUpperCase();
    });
});
</script>
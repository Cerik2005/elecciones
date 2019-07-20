
  
<div class="container">
<?php
if ( $this->session->flashdata('SuccessMessage') != '' ) : ?>
<div class="alert alert-success"><?php echo $this->session->flashdata('SuccessMessage'); ?></div>
<?php
endif;

if ( $this->session->flashdata('ErrorMessage') != '' ) : ?>
<div class="alert alert-danger"><?php echo $this->session->flashdata('ErrorMessage'); ?></div>
<?php
endif;
?> 


<?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>

<div class="panel panel-default">

    <div class="panel-body">
        <!-- PANEL IZQUIERDO -->

        <div class="col-md-6 col-lg-6">

<div class="container-fluid">

            <div class="form-group">
                <label  for="id_elector">Cedula: (Requerido)</label>
                <div class="input-group"><input type="text" name="id_elector" id="id_elector" value="<?php echo set_value('id_elector'); ?>" onkeypress="return soloNumeros(event)" oninput="validarCedula()" class="form-control" maxlength="8" required><span class="input-group-addon primary"><i class="fa fa-id-card-o" aria-hidden="true"></i></span></div>
            </div>
                        <div class="form-group">
                <label  for="nombre_elector">Nombre: (Requerido)</label>
                <div class="input-group"><input type="text" name="nombre_elector" id="nombre_elector" value="<?php echo set_value('nombre_elector'); ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
                        <div class="form-group">
                <label  for="apellido_elector">Apellido: (Requerido)</label>
                <div class="input-group"><input type="text" name="apellido_elector" id="apellido_elector" value="<?php echo set_value('apellido_elector'); ?>" onkeypress="return alpha(event)" class="form-control" required ><span class="input-group-addon primary"><i class="fa fa-user" aria-hidden="true"></i></span></div>
            </div>
                 
                        <div class="form-group">
                <label  for="sexo">Sexo:</label>
                <div class="input-group">
                    <select name="sexo" id="sexo" onchange="" class="form-control">
               <option disabled selected>Seleccione</option>
               <option value="HOMBRE" <?php echo  set_select('sexo', 'HOMBRE'); ?> >HOMBRE</option>
               <option value="MUJER"  <?php echo  set_select('sexo', 'MUJER'); ?> >MUJER</option>
            </select><span class="input-group-addon primary"><i class="fa fa-venus-mars" aria-hidden="true"></i></span>
                </div>

            </div>

                        <div class="form-group">
                <label  for="fecha_nacimiento">Fecha Nacimiento:</label>
                <div class="input-group">
                    <input type="text" class="form-control calendario" name="fecha_nacimiento" id="fecha_nacimiento" value="<?php echo set_value('fecha_nacimiento'); ?>" placeholder="yyyy-mm-dd"><span class="input-group-addon primary"><i class="fa fa-birthday-cake" aria-hidden="true"></i></span>
                </div>
            </div>

            <div class="form-group">
                <label  for="direccion_elector">Direccion:</label>
                <textarea class="form-control" rows="5" id="direccion_elector" name="direccion_elector" style="overflow:hidden; resize: none"><?php echo set_value('direccion_elector'); ?></textarea>
            
        </div>
           



</div>
        </div>


        <!--   FIN PANEL IZQUIERDO -->
        <!-- PANEL DERECHO -->
        <div class="col-md-6 col-lg-6">
<div class="container-fluid" ?>

 <div class="form-group">
                <label  for="id_centro">Centro de Votacion: (Requerido)</label>
                
                    <select name="id_centro" id="id_centro" class="form-control chosen-select" required>
               <option value="" disabled selected>Seleccione</option>
             <?php
                
                foreach($centros as $centro)
                {
                    ?>
                    <option value="<?php echo $centro->id_centro?>" <?php if (set_value('id_centro') == $centro->id_centro) { echo " selected"; }?>>
                        <?php echo $centro->nombre_parroquia ?> - <b><?php echo $centro->nombre_centro ?></b></option>
                    <?php
                }
                ?>
               
            </select>
                </div>

 <div class="form-group">
                <label  for="id_responsable">Responsable: (Requerido)</label>
                
                    <select name="id_responsable" id="id_responsable" class="form-control chosen-select" required>
               <option value="" disabled selected>Seleccione</option>
             <?php
                
                foreach($responsables as $responsable)
                {
                    ?>
                    <option value="<?php echo $responsable->id_responsable?>" <?php if (set_value('id_responsable') == $responsable->id) { echo "selected"; }?>>
                        <?php echo $responsable->nombre_parroquia ?> - <?php echo $responsable->nombre_sector ?> - <?php echo $responsable->nombre_responsable ?> <?php echo $responsable->apellido_responsable ?></option>
                    <?php
                }
                ?>
               
            </select>
                </div>


                        <div class="form-group">
                <label  for="telefono_elector">Telefono:</label>
  
                <div class="input-group"><input type="tel" name="telefono_elector" id="telefono_elector" value="<?php echo set_value('telefono_elector'); ?>" onkeypress="return soloNumeros(event)" class="form-control" minlength="7" maxlength="11" ><span class="input-group-addon primary"><i class="fa fa-phone" aria-hidden="true"></i></span></div>
            </div>
         


              <div class="form-group">
                <label  for="email_elector">Email:</label>
                           <div class="input-group">
    
    <input id="email" type="email" class="form-control" name="email_elector"  id="email_elector" value="<?php echo set_value('email_elector'); ?>">
    <span class="input-group-addon primary"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
  </div>
            </div>

                                    <div class="form-group">
                <label  for="twitter">Twitter:</label>
                <div class="input-group"><input type="text" name="twitter" id="twitter" value="<?php echo set_value('twitter'); ?>"  class="form-control" ><span class="input-group-addon primary"><i class="fa fa-twitter" aria-hidden="true"></i></span></div>
            </div>

                                    <div class="form-group">
                <label  for="instagram">Instagram:</label>
                <div class="input-group"><input type="text" name="instagram" id="instagram" value="<?php echo set_value('instagram'); ?>"  class="form-control" ><span class="input-group-addon primary"><i class="fa fa-instagram" aria-hidden="true"></i></span></div>
            </div>
 </div>
        </div>
        <!-- FIN TODAS -->

    </div>
    <!-- FIN PANEL DERECHO -->

<div class="panel-footer">

    <div class="form-group">
        <div class="col-lg-12" style="text-align: center;">

            <button type="submit" class="btn btn-primary">Guardar <i class="fa fa-floppy-o" aria-hidden="true"></i></button>

            <a href="<?php echo  base_url(); ?>"><button type="button" class="btn btn-danger">Cancelar <i class="fa fa-times" aria-hidden="true"></i></button></a>
        </div>
    </div>

</div>
</div>

</form>
</div>
</div>

<script src="<?php echo base_url(); ?>public/assets/chosen_v1.8.2/docsupport/init.js" type="text/javascript" charset="utf-8"></script>

<script type="text/javascript">
    $(document).ready(function() {
        $('.calendario').datepicker({
            // startDate: "today",
            todayBtn: "linked",
            language: "es",
            todayHighlight: true,
            format: "yyyy-mm-dd",
            autoclose: true
        });
    })
</script>
<script type="text/javascript">
function validarCedula(){
id_elector= $("#id_elector").val();
console.log(id_elector)
         $.ajax({
        url: base_url + "configuracion/consultarcedula",
        global: false,
        type: "POST",
        data: {
            cedula: id_elector
        },
        dataType: "JSON",
        async: true,
        beforeSend: function() {
            //$("#wait").show();
        },
        success: function(data) {
            console.log(data);
            if (data > 0){
            $("#id_elector").val('');
            $("#id_elector").focus();
             alert("Cedula ya registrada");   
            }
       
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert("ERROR EN EL SERVIDOR: " + thrownError);
            return false;
        }
    });
    }
    $("#id_centro").trigger("chosen:updated");
    $("#id_responsable").trigger("chosen:updated");
</script>

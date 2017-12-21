


    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Ingreso al sistema</h3>
                    </div>
                    <div class="panel-body">
                        <?php echo form_open(null, array('class' => 'form-horizontal','name'=>'form','id'=>'form')); ?>
                        <div class="col-md-12">
                            <fieldset>
                                <div class="form-group">
                                    <label class="control-label" for="usuario">Usuario</label>
                                    <input type="text" class="form-control" id="usuario" name="usuario" value="<?php echo set_value("usuario");?>" required>
                                </div>
                                <div class="form-group">
                                	<label class="control-label" for="pass">Contraseña</label>
                                    <input class="form-control" type="password" id="pass" name="pass" value="<?php echo set_value("pass");?>" required >
                                </div>
                              
                                <!-- Change this to a button or input when using this as a form -->
                                <button type="submit"  class="btn btn-lg btn-success btn-block">Iniciar Sesion</button>

                            </fieldset>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

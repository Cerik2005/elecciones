<nav class="navbar navbar-inverse">

  <div class="container-fluid">

        <div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Elecciones <?php echo date("Y")?></a>
    </div>


    <div class="navbar-header">



    </div>

  <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">

      <li><a href="<?php echo base_url() ?>" >Home</a></li>



      <?php if ($this->session->id_perfil == 1){ ?>

      <li class="dropdown <?php echo (in_array($this->router->class, array('usuarios','coordinadores','jefes','responsables')) ? 'active' : ''); ?>"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Configuracion <span class="caret"></span></a>

        <ul class="dropdown-menu">

          <li><a href="<?php echo base_url()."configuracion/usuarios" ?>" >Usuarios</a></li>

          <li><a href="<?php echo base_url()."configuracion/coordinadores" ?>">Coordinadores</a></li>

          <li><a href="<?php echo base_url()."configuracion/responsables" ?>">Responsables</a></li>

          <hr>

          <li><a href="<?php echo base_url()."configuracion/parroquias" ?>">Parroquias</a></li>

          <li><a href="<?php echo base_url()."configuracion/sectores" ?>">Sectores</a></li>

          <li><a href="<?php echo base_url()."configuracion/centros" ?>">Centros Votacion</a></li>

        </ul>

      </li>

<?php } ?>



      <?php if ($this->session->id_perfil == 1 || $this->session->id_perfil == 2 || $this->session->id_perfil == 3){ ?>

    <li class="<?php echo (in_array($this->router->class, array('ingreso')) ? 'active' : ''); ?>"  ><a href="<?php echo base_url()."electores/ingreso" ?>">Ingreso</a></li>

<?php } ?>



      <?php if ($this->session->id_perfil == 1 || $this->session->id_perfil == 2 || $this->session->id_perfil == 3){ ?>

    <li class="<?php echo (in_array($this->router->class, array('listado')) ? 'active' : ''); ?>"  ><a href="<?php echo base_url()."electores/listado" ?>">Listado</a></li>

<?php } ?>



      <?php if ($this->session->id_perfil == 1 || $this->session->id_perfil == 2){ ?>

    <li class="<?php echo (in_array($this->router->class, array('reportes')) ? 'active' : ''); ?>" ><a href="<?php echo base_url()."reportes" ?>">Reportes</a></li>

<?php } ?>



    </ul>
    <ul class="nav navbar-nav navbar-right">

      <li><a><span class="glyphicon glyphicon-user"></span> <?php echo $this->session->nombre ?></a></li>

      <li><a href="<?php echo base_url()."login/salir" ?>"><span class="glyphicon glyphicon-log-out"></span> Salir</a></li>

    </ul>
   </div><!-- /.navbar-collapse -->
    

  </div>

</nav>
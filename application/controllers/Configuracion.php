<?php



class Configuracion extends CI_Controller {

// USUARIOS

public function usuarios()

{  



if ($this->session->userdata('login') == '1') {



if ($this->input->post("accion",true)) {



// CREATE

if ($this->input->post("accion") == "agregar") {

$usuario = strtoupper($this->input->post("usuario", true));

$nombre_usuario = strtoupper($this->input->post("nombre_usuario", true));

$password_usuario = sha1($this->input->post("password_usuario", true));

$id_perfil_usuario = $this->input->post("id_perfil_usuario", true);

$data = array(

"usuario" => $usuario,

"nombre" => $nombre_usuario,

"pass" => $password_usuario,

"id_perfil" => $id_perfil_usuario

);

$id_perfil_usuario = $this->input->post("id_perfil_usuario", true);



$data = array(

"usuario" => $usuario,

"nombre" => $nombre_usuario,

"pass" => $password_usuario,

"id_perfil" => $id_perfil_usuario

);



$guardar = $this->usuarios_model->createUsuario($data);



if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

                    redirect('/Configuracion/usuarios', 'location', 301);







}

// UPDATE

if ($this->input->post("accion") == "editar") {

$usuario = strtoupper($this->input->post("usuario", true));

$nombre_usuario = strtoupper($this->input->post("nombre_usuario", true));

$id_usuario = $this->input->post("id_usuario_editar", true);

$id_perfil_usuario = $this->input->post("id_perfil_usuario", true);



$data = array(

"usuario" => $usuario,

"nombre" => $nombre_usuario,

"id_perfil" => $id_perfil_usuario

);

$guardar = $this->usuarios_model->updateUsuario($id_usuario,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/usuarios', 'location', 301);

}

// PASSWORD

if ($this->input->post("accion") == "password") {

$id_usuario = $this->input->post("id_usuario_password", true);

$password_usuario = sha1($this->input->post("password_usuario", true));

$data = array(

"pass" => $password_usuario

);

$guardar = $this->usuarios_model->updateUsuario($id_usuario,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/usuarios', 'location', 301);



}

// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_usuario = $this->input->post("id_usuario_eliminar", true);

$guardar = $this->usuarios_model->deleteUsuario($id_usuario);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/usuarios', 'location', 301);



}

} 



$datos=$this->usuarios_model->getUsuariosAll('lista'); 

$perfiles=$this->perfiles_model->getPerfilesAll();

$this->load->view('template/header');

$this->load->view('template/top_menu');  

$this->load->view('usuarios/index', compact("datos","perfiles"));

$this->load->view('template/footer');

}

else

{

redirect(base_url().'',  301);

}

}











// COORDINADORES

        	 public function coordinadores()

        	{  



if ($this->session->userdata('login') == '1') {



	$datos=$this->coordinadores_model->getCoordinadoresAll('lista'); 

	$parroquias = $this->parroquias_model->getParroquiasAll('lista');

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('coordinadores/index', compact("datos","parroquias"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

        	}

// PARROQUIAS

        	 public function parroquias()

        	{  



if ($this->session->userdata('login') == '1') {


if ($this->input->post("accion",true)) {



// CREATE

if ($this->input->post("accion") == "agregar") {



$nombre_parroquia = strtoupper($this->input->post("nombre_parroquia", true));



$data = array(


"nombre_parroquia" => $nombre_parroquia

);







$guardar = $this->parroquias_model->createParroquia($data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/parroquias', 'location', 301);



}

// UPDATE

if ($this->input->post("accion") == "editar") {

$id_parroquia = strtoupper($this->input->post("id_parroquia_editar", true));


$nombre_parroquia = strtoupper($this->input->post("nombre_parroquia", true));



$data = array(


"nombre_parroquia" => $nombre_parroquia

);

$guardar = $this->parroquias_model->updateParroquia($id_parroquia,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/parroquias', 'location', 301);

}



// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_parroquia = $this->input->post("id_parroquia_eliminar", true);

$guardar = $this->parroquias_model->deleteParroquia($id_parroquia);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/parroquias', 'location', 301);



}

} 

$datos=$this->parroquias_model->getParroquiasAll('lista');

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('parroquias/index', compact("datos"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

}








// SECTORES


public function sectores()

        	{  



if ($this->session->userdata('login') == '1') {
if ($this->input->post("accion",true)) {



// CREATE

if ($this->input->post("accion") == "agregar") {



$nombre_sector = strtoupper($this->input->post("nombre_sector", true));
$id_parroquia = strtoupper($this->input->post("id_parroquia", true));
$zona = strtoupper($this->input->post("zona", true));

$data = array(


"nombre_sector" => $nombre_sector,
"id_parroquia" => $id_parroquia,
"zona_sector" => $zona

);







$guardar = $this->sectores_model->createSector($data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/sectores', 'location', 301);



}

// UPDATE

if ($this->input->post("accion") == "editar") {

$id_sector = strtoupper($this->input->post("id_sector_editar", true));


$nombre_sector = strtoupper($this->input->post("nombre_sector", true));
$id_parroquia = strtoupper($this->input->post("id_parroquia", true));
$zona = strtoupper($this->input->post("zona", true));

$data = array(


"nombre_sector" => $nombre_sector,
"id_parroquia" => $id_parroquia,
"zona_sector" => $zona

);

$guardar = $this->sectores_model->updateSector($id_sector,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/sectores', 'location', 301);

}



// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_sector = $this->input->post("id_sector_eliminar", true);

$guardar = $this->sectores_model->deleteSector($id_sector);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/sectores', 'location', 301);



}

} 


	$datos=$this->sectores_model->getSectoresAll('lista');
     $parroquias = $this->parroquias_model->getParroquiasAll('lista'); 

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('sectores/index', compact("datos","parroquias"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

}




// CENTROS


public function centros()

        	{  



if ($this->session->userdata('login') == '1') {
if ($this->input->post("accion",true)) {



// CREATE

if ($this->input->post("accion") == "agregar") {



$nombre_centro = strtoupper($this->input->post("nombre_centro", true));
$id_parroquia = strtoupper($this->input->post("id_parroquia", true));

$data = array(


"nombre_centro" => $nombre_centro,
"id_parroquia" => $id_parroquia

);







$guardar = $this->centros_model->createCentro($data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/centros', 'location', 301);



}

// UPDATE

if ($this->input->post("accion") == "editar") {

$id_centro = strtoupper($this->input->post("id_centro_editar", true));

$nombre_centro = strtoupper($this->input->post("nombre_centro", true));
$id_parroquia = strtoupper($this->input->post("id_parroquia", true));

$data = array(


"nombre_centro" => $nombre_centro,
"id_parroquia" => $id_parroquia

);

$guardar = $this->centros_model->updateCentro($id_centro,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/centros', 'location', 301);

}



// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_centro = $this->input->post("id_centro_eliminar", true);

$guardar = $this->centros_model->deleteCentro($id_centro);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/centros', 'location', 301);



}

} 

	$datos=$this->centros_model->getCentrosAll('lista'); 
$parroquias = $this->parroquias_model->getParroquiasAll('lista'); 

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('centros/index', compact("datos","parroquias"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

}






// RESPONSABLES


        	 public function responsables()

        	{  



if ($this->session->userdata('login') == '1') {





if ($this->input->post("accion",true)) {



// CREATE

if ($this->input->post("accion") == "agregar") {

$id_responsable = strtoupper($this->input->post("id_responsable", true));

$nombre_responsable = strtoupper($this->input->post("nombre_responsable", true));

$apellido_responsable = strtoupper($this->input->post("apellido_responsable", true));

$telefono_responsable = $this->input->post("telefono_responsable", true);

$id_sector = $this->input->post("id_sector", true);

$data = array(

"id_responsable" => $id_responsable,

"nombre_responsable" => $nombre_responsable,

"apellido_responsable" => $apellido_responsable,

"telefono_responsable" => $telefono_responsable,

"id_sector" => $id_sector

);







$guardar = $this->responsables_model->createResponsable($data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/responsables', 'location', 301);



}

// UPDATE

if ($this->input->post("accion") == "editar") {

$id_responsable = strtoupper($this->input->post("id_responsable_editar", true));

$nombre_responsable = strtoupper($this->input->post("nombre_responsable", true));

$apellido_responsable = strtoupper($this->input->post("apellido_responsable", true));

$telefono_responsable = $this->input->post("telefono_responsable", true);

$id_sector = $this->input->post("id_sector", true);



$data = array(

"id_responsable" => $id_responsable,

"nombre_responsable" => $nombre_responsable,

"apellido_responsable" => $apellido_responsable,

"telefono_responsable" => $telefono_responsable,

"id_sector" => $id_sector

);

$guardar = $this->responsables_model->updateResponsable($id_responsable,$data);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/responsables', 'location', 301);

}



// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_responsable = $this->input->post("id_responsable_eliminar", true);

$guardar = $this->responsables_model->deleteResponsable($id_responsable);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/Configuracion/responsables', 'location', 301);



}

} 







	$responsables=$this->responsables_model->getResponsablesAll('lista'); 

			$sectores=$this->sectores_model->getSectoresAll('lista');

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('responsables/index', compact("responsables","sectores"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

        	}



        	// CONSULTAR CEDULA



	public function consultarcedula()

    {

        $cedula      = $this->input->post("cedula", true);



        $cantidad = $this->electores_model->getElectorId($cedula,'cantidad');

        echo json_encode($cantidad);

    }

 // FIN CONSULTAR CEDULA







}
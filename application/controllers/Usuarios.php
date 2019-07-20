<?php

class Usuarios extends CI_Controller {

 public function editar($id)
        	{  

if ($this->session->userdata('login') == '1') {

$usuario=$this->usuarios_model->getUsuarioId($id); 
$perfiles=$this->perfiles_model->getPerfilesAll();
$this->load->view('usuarios/editar', compact("usuario","perfiles"));

	}
else
{
		redirect(base_url().'',  301);
}
        	}




}
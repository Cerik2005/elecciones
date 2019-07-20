<?php

class Responsables extends CI_Controller {

 public function editar($id)
        	{  

if ($this->session->userdata('login') == '1') {

$responsable = $this->responsables_model->getResponsableId($id); 
$sectores = $this->sectores_model->getSectoresAll('lista');
$this->load->view('responsables/editar', compact("responsable","sectores"));

	}
else
{
		redirect(base_url().'',  301);
}
        	}




}
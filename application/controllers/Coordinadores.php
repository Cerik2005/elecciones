<?php

class Coordinadores extends CI_Controller {

 public function editar($id)
        	{  

if ($this->session->userdata('login') == '1') {

$coordinador= $this->coordinadores_model->getCoordinadorId($id); 
$parroquias = $this->parroquias_model->getParroquiasAll('lista');
$this->load->view('coordinadores/editar', compact("coordinador","parroquias"));

	}
else
{
		redirect(base_url().'',  301);
}
        	}




}
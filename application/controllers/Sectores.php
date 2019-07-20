<?php

class Sectores extends CI_Controller {



 public function editar($id)

        	{  
if ($this->session->userdata('login') == '1') {
$sector = $this->sectores_model->getSectorId($id); 
$parroquias = $this->parroquias_model->getParroquiasAll('lista');
$this->load->view('sectores/editar', compact("sector","parroquias"));
}
else
{
redirect(base_url().'',  301);
}
}



}
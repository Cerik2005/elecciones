<?php

class Centros extends CI_Controller {



 public function editar($id)

        	{  
if ($this->session->userdata('login') == '1') {
$centro = $this->centros_model->getCentroId($id); 
$parroquias = $this->parroquias_model->getParroquiasAll('lista');
$this->load->view('centros/editar', compact("centro","parroquias"));
}
else
{
redirect(base_url().'',  301);
}
}



}
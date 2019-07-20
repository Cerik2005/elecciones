<?php

class Parroquias extends CI_Controller {



 public function editar($id)

        	{  
if ($this->session->userdata('login') == '1') {
$parroquia = $this->parroquias_model->getParroquiaId($id); 
$this->load->view('parroquias/editar', compact("parroquia"));
}
else
{
redirect(base_url().'',  301);
}
}



}
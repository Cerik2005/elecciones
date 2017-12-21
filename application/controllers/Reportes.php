<?php

class Reportes extends CI_Controller {

 public function index()
        	{  

if ($this->session->userdata('login') == '1') {

	$datos=$this->usuarios_model->getUsuariosAll('lista'); 
				$this->load->view('template/header');
				$this->load->view('template/top_menu');  
				$this->load->view('reportes/index', compact("datos"));
				$this->load->view('template/footer');
	}
else
{
		redirect(base_url().'',  301);
}
        	}



}
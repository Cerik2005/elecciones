<?php

class Dashboard extends CI_Controller {

 public function index()
        	{  



if ($this->session->userdata('login') == '1') {

$centros = $this->centros_model->getCentrosAll('cantidad');
$sectores = $this->sectores_model->getSectoresAll('cantidad');
$parroquias = $this->parroquias_model->getParroquiasAll('cantidad');
$responsables = $this->responsables_model->getResponsablesAll('cantidad');
$electores = $this->electores_model->getElectoresAll('cantidad');
$coordinadores = $this->coordinadores_model->getCoordinadoresAll('cantidad');

		$this->load->view('template/header');
		$this->load->view('template/top_menu');  
		$this->load->view('dashboard', compact("centros","sectores","parroquias","responsables","electores","coordinadores"));
		$this->load->view('template/footer');
	}
else
{
		redirect(base_url().'',  301);
}
        	}

}
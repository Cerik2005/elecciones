<?php

class Reportes extends CI_Controller {

 public function index()
        	{  

if ($this->session->userdata('login') == '1') {
$coordinadores = $this->coordinadores_model->getCoordinadoresAll('lista');
$responsables = $this->responsables_model->getResponsablesAll('lista');
$parroquias = $this->parroquias_model->getParroquiasAll('lista');
$sectores = $this->sectores_model->getSectoresAll('lista');
$centros = $this->centros_model->getCentrosAll('lista');


				$this->load->view('template/header');
				$this->load->view('template/top_menu');  
				$this->load->view('reportes/index', compact("coordinadores","responsables","parroquias","sectores","centros"));
				$this->load->view('template/footer');
	}
else
{
		redirect(base_url().'',  301);
}
        	}


 public function coordinador()
        	{  

if ($this->session->userdata('login') == '1') {
$id = $this->input->post('id_coordinador');
$coordinador = $this->coordinadores_model->getCoordinadorId($id);
$responsables = $this->responsables_model->getResponsablesIdParroquia($coordinador->id_parroquia);
$this->load->view('template/header');
$this->load->view('reportes/coordinador', compact("coordinador","responsables"));
				$this->load->view('template/footer');

	}
else
{
		redirect(base_url().'',  301);
}
        	}

 public function responsable()
        	{  

if ($this->session->userdata('login') == '1') {
$id = $this->input->post('id_responsable');
$responsable = $this->responsables_model->getResponsableId($id);
$electores = $this->electores_model->getElectoresIdResponsable($responsable->id_responsable);
$this->load->view('template/header');
$this->load->view('reportes/responsable', compact("responsable","electores"));
				$this->load->view('template/footer');

	}
else
{
		redirect(base_url().'',  301);
}
        	}

 public function parroquia()
        	{  

if ($this->session->userdata('login') == '1') {

		$id = $this->input->post('id_parroquia');
$coordinadores = $this->coordinadores_model->getCoordinadoresIdParroquia($id);
$parroquia = $this->parroquias_model->getParroquiaId($id);
$sectores = $this->sectores_model->getSectoresIdParroquia($parroquia->id_parroquia);
$centros = $this->centros_model->getCentrosIdParroquia($parroquia->id_parroquia);
$responsables = $this->responsables_model->getResponsablesIdParroquia($id);


				$this->load->view('template/header');

				$this->load->view('reportes/parroquia', compact("coordinadores","responsables","parroquia","sectores","centros"));
								$this->load->view('template/footer');



	}
else
{
		redirect(base_url().'',  301);
}
        	}

 public function sector()
        	{  

if ($this->session->userdata('login') == '1') {

		$id = $this->input->post('id_sector');


$sector = $this->sectores_model->getSectorId($id);
$parroquia = $this->parroquias_model->getParroquiaId($sector->id_parroquia);
$coordinadores = $this->coordinadores_model->getCoordinadoresIdParroquia($sector->id_parroquia);
$responsables = $this->responsables_model->getResponsablesIdSector($id);
$centros = $this->centros_model->getCentrosIdSector($id);
// $electores = $this->electores_model->getElectoresIdSector($id);


				$this->load->view('template/header');
 
				$this->load->view('reportes/sector', compact("sector","parroquia","coordinadores","responsables","centros"));
								$this->load->view('template/footer');

	}
else
{
		redirect(base_url().'',  301);
}
        	}

 public function centro()
        	{  

if ($this->session->userdata('login') == '1') {


$id = $this->input->post('id_centro');
$centro = $this->centros_model->getCentroId($id);
$sector = $this->sectores_model->getSectorId($centro->id_sector);
$parroquia = $this->parroquias_model->getParroquiaId($centro->id_parroquia);
$responsables = $this->responsables_model->getResponsablesIdSector($centro->id_sector);
$electores = $this->electores_model->getElectoresIdCentro($id);


				$this->load->view('template/header');

				$this->load->view('reportes/centro', compact("centro","sector","parroquia","responsables","electores"));
				$this->load->view('template/footer');

	}
else
{
		redirect(base_url().'',  301);
}
        	}

}
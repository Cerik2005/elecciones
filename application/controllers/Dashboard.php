<?php

class Dashboard extends CI_Controller {

 public function index()
        	{  

if ($this->session->userdata('login') == '1') {
		
		$this->load->view('template/header');
		$this->load->view('template/top_menu');  
		$this->load->view('dashboard'); 
		$this->load->view('template/footer');
	}
else
{
		redirect(base_url().'',  301);
}
        	}

}
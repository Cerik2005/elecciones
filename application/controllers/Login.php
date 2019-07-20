<?php

class Login extends CI_Controller {

 public function index()
        	{



                if ( $this->input->post() )
 		         {


                             $datos=$this->usuarios_model->getUserLogin($this->input->post('usuario',true),sha1($this->input->post('pass',true))); 

                             if(sizeof($datos)>=1)
                             {
                                   //die("s");
                                   $this->session->set_userdata('login', '1');
                                   // $this->session->set_userdata("grau");
                                   // $this->session->set_userdata('id', $datos->id);
                                   $this->session->set_userdata('usuario', $datos->usuario);
                                   $this->session->set_userdata('nombre', $datos->nombre);
                                   $this->session->set_userdata('id_perfil', $datos->id_perfil);
                                   // $this->session->set_userdata('cargo', $datos->id_cargo);
                                   // $this->session->set_userdata('rut', $datos->rut);
                                   // $this->session->set_userdata('perfil', $datos->id_perfil);
                                   redirect(base_url().'dashboard',  301);
                             }
                             else
                             {
                                $this->session->set_flashdata('ControllerMessage', 'Usuario y/o clave inválida.');
					                   redirect(base_url().'',  301);
                             }
 
                 }
                 if ($this->session->userdata('login') == '1') {
		
redirect(base_url().'dashboard',  301);
	}
	else{
$this->load->view('template/header'); 
$this->load->view('login');
$this->load->view('template/footer'); 
}
        	}


 public function salir()
          {

$this->session->sess_destroy();
redirect(base_url().'',  301);
          }


}
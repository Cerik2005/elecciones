<?php



class Electores extends CI_Controller {



 public function ingreso()

        	{  



if ($this->session->userdata('login') == '1') {

				if ($this->input->post()) {



$id_elector = $this->input->post("id_elector", true);

$nombre_elector = $this->input->post("nombre_elector", true);

$apellido_elector = $this->input->post("apellido_elector", true);

$telefono_elector = $this->input->post("telefono_elector", true);

$email_elector = $this->input->post("email_elector", true);

$direccion_elector = $this->input->post("direccion_elector", true);

$id_centro = $this->input->post("id_centro", true);

$twitter = $this->input->post("twitter", true);

$instagram = $this->input->post("instagram", true);

$sexo = $this->input->post("sexo", true);

$fecha_nacimiento = $this->input->post("fecha_nacimiento", true);

$id_responsable = $this->input->post("id_responsable", true);





$data = array(

        "id_elector" => $id_elector,

        "nombre_elector" => $nombre_elector,

        "apellido_elector" => $apellido_elector,

        "telefono_elector" => $telefono_elector,

        "email_elector" => $email_elector,

        "direccion_elector" => $direccion_elector,

        "id_centro" => $id_centro,

        "twitter" => $twitter,

        "instagram" => $instagram,

        "sexo" => $sexo,

        "fecha_nacimiento" => $fecha_nacimiento,

        "id_responsable" => $id_responsable

);







                    $guardar = $this->electores_model->createElector($data);



                    if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

                    redirect('/electores/ingreso', 'location', 301);

                }













	$centros=$this->centros_model->getCentrosAll('lista');  

    $responsables=$this->responsables_model->getResponsablesAll('lista');

				$this->load->view('template/header');

				$this->load->view('template/top_menu');  

				$this->load->view('electores/ingreso', compact("centros","responsables"));

				$this->load->view('template/footer');

	}

else

{

		redirect(base_url().'',  301);

}

        	}



 public function listado()

            {  



if ($this->session->userdata('login') == '1') {



if ($this->input->post("accion",true)) {





// DELETE

if ($this->input->post("accion") == "eliminar") {

$id_elector = $this->input->post("id_elector_eliminar", true);

$guardar = $this->electores_model->deleteElector($id_elector);

if ($guardar == true)

                    {

                    $this->session->set_flashdata('SuccessMessage', 'Se han guardado los valores exitosamente.');

                    } 

                    else 

                    {

                    $this->session->set_flashdata('ErrorMessage', 'No se han guardado los valores exitosamente.');

                    }

redirect('/electores/listado', 'location', 301);



}

} 

    $electores=$this->electores_model->getElectoresAll('lista'); 

                $this->load->view('template/header');

                $this->load->view('template/top_menu');  

                $this->load->view('electores/listado', compact("electores"));

                $this->load->view('template/footer');

    }

else

{

        redirect(base_url().'',  301);

}

            }





}
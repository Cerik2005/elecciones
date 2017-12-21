<?php

class Usuarios_model extends CI_Model{


	public function getUserLogin($usuario,$pass)
    {
        $query=$this->db
        ->select("*")
        ->from("usuarios")
        ->where(array("usuario"=>$usuario,"pass"=>$pass))
        ->get();
        return $query->row(); 
    }

    	public function getUsuariosAll($accion)
    {
        $query=$this->db
        ->select("*,usuarios.id as id")
        ->from("usuarios")
        ->join("perfiles", "perfiles.id_perfil  = usuarios.id_perfil", "LEFT")
        ->get();
           switch ($accion) {
            case 'lista':
                return $query->result();

                break;
            case 'cantidad':
                return $query->num_rows();

                break;
        } 
    }

        public function getUsuarioId($id)
    {
        $query=$this->db
        ->select("*,usuarios.id as id")
        ->from("usuarios")
        ->join("perfiles", "perfiles.id_perfil  = usuarios.id_perfil", "LEFT")
        ->where("usuarios.id",$id)
        ->get();
        return $query->row();
        break;
         }






     public function createUsuario($data)
    {
        
        if($this->db->insert('usuarios', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }

    }

    public function updateUsuario($id_usuario,$data)
    {
        $this->db->where('id', $id_usuario);
        if($this->db->update('usuarios', $data))
                {
            return true;
        }
    else
    { 
        return false;
    }
    }


    public function deleteUsuario($id_usuario)
    {
        $this->db->where('id', $id_usuario);
       if( $this->db->delete('usuarios'))
                {
            return true;
        }
    else
    { 
        return false;
    }
    }

// FIN USUARIOS
}
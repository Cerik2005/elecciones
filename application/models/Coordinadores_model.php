<?php

class Coordinadores_model extends CI_Model{


// USUARIOS

     public function createCoordinador($data)
    {
        if($this->db->insert('coordinadores', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

    public function updateCoordinador($id_coordinador,$data)
    {
        $this->db->where('id_coordinador', $id_coordinador);
        if($this->db->update('coordinadores', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }


    public function deleteCoordinador($id_coordinador)
    {
        $this->db->where('id_coordinador', $id_coordinador);
        if($this->db->delete('coordinadores'))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

// FIN USUARIOS

         public function getCoordinadoresAll($accion)
    {
        $query=$this->db
        ->select("*")
        ->from("coordinadores")
        ->join("parroquias", "parroquias.id_parroquia  = coordinadores.id_parroquia", "LEFT")
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

                        public function getCoordinadorId($id)
    {
        $query=$this->db
        ->select("*")
        ->from("coordinadores")
        ->join("parroquias", "parroquias.id_parroquia  = coordinadores.id_parroquia", "LEFT")
        ->where("coordinadores.id_coordinador", $id)
        ->get();
        return $query->row();
        break;
        } 
}
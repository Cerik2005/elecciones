<?php

class Parroquias_model extends CI_Model{


     public function createParroquia($data)
    {
        if($this->db->insert('parroquias', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

    public function updateParroquia($id_parroquia,$data)
    {
        $this->db->where('id_parroquia', $id_parroquia);
        if($this->db->update('parroquias', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }


    public function deleteParroquia($id_parroquia)
    {
        $this->db->where('id_parroquia', $id_parroquia);
        if($this->db->delete('parroquias'))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }


            public function getParroquiasAll($accion)
    {
        $query=$this->db
        ->select("*")
        ->from("parroquias")
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

                  public function getParroquiaId($id)
    {
        $query=$this->db
        ->select("*")
        ->from("parroquias")
        ->where("parroquias.id_parroquia", $id)
        ->get();
        return $query->row();
        break;

        } 
}
<?php

class Responsables_model extends CI_Model{


// USUARIOS

     public function createResponsable($data)
    {
        if($this->db->insert('responsables', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

    public function updateResponsable($id_responsable,$data)
    {
        $this->db->where('id_responsable', $id_responsable);
        if($this->db->update('responsables', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }


    public function deleteResponsable($id_responsable)
    {
        $this->db->where('id_responsable', $id_responsable);
        if($this->db->delete('responsables'))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }




    

                public function getResponsablesAll($accion)
    {
        $query=$this->db
        ->select("*,responsables.id as id")
        ->from("responsables")
        ->join("sectores", "sectores.id_sector  = responsables.id_sector", "LEFT")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
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

                    public function getResponsableId($id_responsable)
    {
        $query=$this->db
        ->select("*")
        ->from("responsables")
        ->join("sectores", "sectores.id_sector  = responsables.id_sector", "LEFT")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
        ->where("responsables.id_responsable", $id_responsable)
        ->get();
        return $query->row();
        break;
        } 


                        public function getResponsablesIdParroquia($id_parroquia)
    {
        $query=$this->db
        ->select("*,responsables.id as id")
        ->from("responsables")
        ->join("sectores", "sectores.id_sector  = responsables.id_sector", "LEFT")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
        ->where("sectores.id_parroquia", $id_parroquia)
        ->get();
                return $query->result();

                break;
        } 

                        public function getResponsablesIdSector($id_sector)
    {
        $query=$this->db
        ->select("*,responsables.id as id")
        ->from("responsables")
        ->join("sectores", "sectores.id_sector  = responsables.id_sector", "LEFT")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
        ->where("sectores.id_sector", $id_sector)
        ->get();
                return $query->result();

                break;
        }

// FIN USUARIOS
}
<?php

class Centros_model extends CI_Model{

     public function createCentro($data)
    {
        if($this->db->insert('centros', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

    public function updateCentro($id_centro,$data)
    {
        $this->db->where('id_centro', $id_centro);
        if($this->db->update('centros', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }


    public function deleteCentro($id_centro)
    {
        $this->db->where('id_centro', $id_centro);
        if($this->db->delete('centros'))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

    
            public function getCentrosAll($accion)
    {
        $query=$this->db
        ->select("*")
        ->from("centros")
        ->join("parroquias", "parroquias.id_parroquia  = centros.id_parroquia", "LEFT")
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

                              public function getCentroId($id_centro)
    {
        $query=$this->db
        ->select("*")
        ->from("centros")
        ->join("parroquias", "parroquias.id_parroquia  = centros.id_parroquia", "LEFT")
        ->where("centros.id_centro", $id_centro)
        ->get();
        return $query->row();
        break;
}
                              public function getCentrosIdParroquia($id_parroquia)
    {
        $query=$this->db
        ->select("*")
        ->from("centros")
        ->join("parroquias", "parroquias.id_parroquia  = centros.id_parroquia", "LEFT")
        ->where("centros.id_parroquia", $id_parroquia)
        ->get();
        return $query->result();
        break;
}

                          public function getCentrosIdSector($id_sector)
    {
        $query=$this->db
        ->select("*")
        ->from("centros")
        ->join("sectores", "sectores.id_sector  = centros.id_sector", "LEFT")
        ->where("centros.id_sector", $id_sector)
        ->get();
        return $query->result();
        break;
}

}
<?php

class Sectores_model extends CI_Model{

     public function createSector($data)
    {
        $this->db->insert('sectores', $data);

    }

    public function updateSector($id_sector,$data)
    {
        $this->db->where('id_sector', $id_sector);
        $this->db->update('sectores', $data);

    }


    public function deleteSector($id_sector)
    {
        $this->db->where('id_sector', $id_sector);
        $this->db->delete('sectores');

    }


            public function getSectoresAll($accion)
    {
        $query=$this->db
        ->select("*")
        ->from("sectores")
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

                public function getSectoresIdParroquia($id_parroquia)
    {
        $query=$this->db
        ->select("*")
        ->from("sectores")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
        ->where("sectores.id_parroquia", $id_parroquia)
        ->get();
        return $query->result();
        break;
        } 

                          public function getSectorId($id)
    {
        $query=$this->db
        ->select("*")
        ->from("sectores")
        ->join("parroquias", "parroquias.id_parroquia  = sectores.id_parroquia", "LEFT")
        ->where("sectores.id_sector", $id)
        ->get();
        return $query->row();
        break;
}
        


}
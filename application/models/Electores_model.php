<?php

class Electores_model extends CI_Model{


                public function createElector($data)
    {
        if($this->db->insert('electores', $data))
        {
            return true;
        }
    else
    { 
        return false;
    }

    }


    public function deleteElector($id_elector)
    {
        $this->db->where('id_elector', $id_elector);
        if($this->db->delete('electores'))
        {
            return true;
        }
    else
    { 
        return false;
    }
    }

              public function getElectorId($cedula,$accion)
    {
        $query=$this->db
        ->select("*")
        ->from("electores")
        ->join("centros", "centros.id_centro  = electores.id_centro", "LEFT")
        ->join("sectores", "sectores.id_sector  = centros.id_sector", "LEFT")
        ->join("parroquias", "parroquias.id_parroquia  = centros.id_parroquia", "LEFT")
        ->where("electores.id_elector", $cedula)
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

                public function getElectoresAll($accion)
    {
        $query=$this->db
        ->select("*")
        ->from("electores")
        ->join("centros", "centros.id_centro  = electores.id_centro", "LEFT")
        ->join("sectores", "sectores.id_sector  = centros.id_sector", "LEFT")
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


}
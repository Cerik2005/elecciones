<?php

class Perfiles_model extends CI_Model{



public function getPerfilesAll()
    {
        $query=$this->db
        ->select("*")
        ->from("perfiles")
        ->get();
        return $query->result();
        break;

    }

    
}
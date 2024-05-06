package com.wengenm.railwayspring.controller;

import com.wengenm.railwayspring.model.Workitem;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkitemAddOrUpdate {

    @PostMapping(value = "/workitem/addorupdate")
    public ResponseEntity<Workitem> workItemAddOrUpdate(@RequestBody Workitem workitem){

        Workitem updatedItem = new Workitem(1, "Name des Workitems", "Beschreibung des Workitems", "Aktiv");

        return new ResponseEntity<>(updatedItem, HttpStatus.OK);
    }
}

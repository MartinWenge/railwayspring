package com.wengenm.railwayspring.controller;

import com.wengenm.railwayspring.model.SimpleNumber;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetOneController {

    @GetMapping(value = "/getone")
    public ResponseEntity<SimpleNumber> giveMeOne(){
        return new ResponseEntity<>(new SimpleNumber(1), HttpStatus.OK);
    }
}

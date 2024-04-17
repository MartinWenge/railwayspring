package com.wengenm.railwayspring.controller;

import com.wengenm.railwayspring.model.SimpleNumber;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddOneController {

    @PostMapping(value = "/addone")
    public ResponseEntity<SimpleNumber> addOne(@RequestBody SimpleNumber counter){
        SimpleNumber counterPlusOne = new SimpleNumber(counter.getCount() + 1);
        return new ResponseEntity<>(counterPlusOne, HttpStatus.OK);
    }

}

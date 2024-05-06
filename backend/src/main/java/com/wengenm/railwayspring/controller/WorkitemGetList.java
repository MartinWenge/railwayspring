package com.wengenm.railwayspring.controller;

import com.wengenm.railwayspring.model.Workitem;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class WorkitemGetList {

    @GetMapping(value = "/workitem/getlist")
    public ResponseEntity<List<Workitem>>workItemGetList(@RequestParam(name = "list", required = false) String list){
        List<Workitem> listOfWorkitems = new ArrayList<>();
        if(list.equals("all") || list == null){
            listOfWorkitems.add(new Workitem(1, "workitem 1", "beschreibung 1", "active"));
            listOfWorkitems.add(new Workitem(2, "workitem 2", "beschreibung 2", "active"));
            listOfWorkitems.add(new Workitem(3, "workitem 3", "beschreibung 3", "Done"));
        }else{
            String [] listStringArray = list.split(",");
            List<Integer> listArray = Arrays.stream(listStringArray).map(Integer::parseInt).toList();

            for(Integer weId: listArray){
                listOfWorkitems.add(new Workitem(weId, "workitem " + weId, "beschreibung " + weId, "active"));
            }
        }

        return new ResponseEntity<>(listOfWorkitems, HttpStatus.OK);
    }
}

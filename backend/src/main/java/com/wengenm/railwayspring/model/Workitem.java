package com.wengenm.railwayspring.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Workitem {
    private Integer Id;

    private String Name;

    private String Description;

    private String Status;
}

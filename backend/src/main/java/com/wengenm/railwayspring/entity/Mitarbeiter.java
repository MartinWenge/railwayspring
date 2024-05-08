package com.wengenm.railwayspring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Mitarbeiter {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String Vorname;

    private String Nachname;
}

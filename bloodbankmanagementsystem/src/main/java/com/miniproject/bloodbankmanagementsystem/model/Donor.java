package com.miniproject.bloodbankmanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "donors")
@Data
public class Donor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty("name")
    private String name;

    @Column(name = "blood_group")
    @JsonProperty("blood_group")
    private String bloodGroup;

    @JsonProperty("contact")
    private String contact;

    @JsonProperty("city")
    private String city;
}

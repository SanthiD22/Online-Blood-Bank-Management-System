package com.miniproject.bloodbankmanagementsystem.controller;


import com.miniproject.bloodbankmanagementsystem.model.Donor;
import com.miniproject.bloodbankmanagementsystem.repository.DonorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin(origins = "http://localhost:5500") // or "*" for dev only
public class DonorController {

    private final DonorRepository donorRepository;

    public DonorController(DonorRepository donorRepository) {
        this.donorRepository = donorRepository;
    }

    @PostMapping
    public Donor registerDonor(@RequestBody Donor donor) {
        return donorRepository.save(donor);
    }

    @GetMapping
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    @GetMapping("/{bloodGroup}")
    public List<Donor> getDonorsByBloodGroup(@PathVariable String bloodGroup) {
        return donorRepository.findByBloodGroup(bloodGroup);
    }
}

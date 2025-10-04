package com.miniproject.bloodbankmanagementsystem.repository;


import com.miniproject.bloodbankmanagementsystem.model.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonorRepository extends JpaRepository<Donor, Integer> {
    List<Donor> findByBloodGroup(String bloodGroup);
}

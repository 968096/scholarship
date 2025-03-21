package com.example.scholarshipdashboard.service;

import com.example.scholarshipdashboard.model.Scholarship;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DashboardService {

    public List<Scholarship> getAllScholarships() {
        return Arrays.asList(
            new Scholarship(null, "Scholarship 1", "Description 1", 1000.0),
            new Scholarship(null, "Scholarship 2", "Description 2", 2000.0),
            new Scholarship(null, "Scholarship 3", "Description 3", 3000.0)
        );
    }
}
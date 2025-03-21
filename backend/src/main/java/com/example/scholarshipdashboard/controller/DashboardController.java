package com.example.scholarshipdashboard.controller;

import com.example.scholarshipdashboard.model.Scholarship;
import com.example.scholarshipdashboard.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/scholarships")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping
    public List<Scholarship> getAllScholarships() {
        return dashboardService.getAllScholarships();
    }
}
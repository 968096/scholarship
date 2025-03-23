package com.example.scholarshipdashboard.controller;

import com.example.scholarshipdashboard.model.Scholarship;
import com.example.scholarshipdashboard.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard") // Changed from "/api/scholarships" to "/api/dashboard"
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/scholarships")  // Changed to "/scholarships"
    public List<Scholarship> getAllScholarships() {
        return dashboardService.getAllScholarships();
    }

    @GetMapping("/scholarships/search")  // Changed to "/scholarships/search"
    public List<Scholarship> searchScholarships(@RequestParam String title) {
        return dashboardService.searchScholarshipsByTitle(title);
    }
}
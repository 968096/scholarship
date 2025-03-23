package com.example.scholarshipdashboard.controller;

import com.example.scholarshipdashboard.model.Scholarship;
import com.example.scholarshipdashboard.service.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/scholarships")
public class ScholarshipController {
    
    private static final Logger logger = Logger.getLogger(ScholarshipController.class.getName());
    
    private final ScholarshipService scholarshipService;
    
    @Autowired
    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }
    
    @GetMapping
    public List<Scholarship> getAllScholarships() {
        logger.info("GET request to fetch all scholarships");
        return scholarshipService.getAllScholarships();
    }
    
    @GetMapping("/search")
    public List<Scholarship> searchScholarships(@RequestParam(required = false) String title) {
        logger.info("GET request to search scholarships with title: " + title);
        
        if (title == null || title.trim().isEmpty()) {
            logger.info("Empty search term, redirecting to get all scholarships");
            return scholarshipService.getAllScholarships();
        }
        
        List<Scholarship> results = scholarshipService.searchScholarshipsByTitle(title.trim());
        logger.info("Returning " + results.size() + " results for search term: " + title);
        return results;
    }
}

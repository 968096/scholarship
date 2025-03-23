package com.example.scholarshipdashboard.service;

import com.example.scholarshipdashboard.model.Scholarship;
import com.example.scholarshipdashboard.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class ScholarshipService {
    
    private static final Logger logger = Logger.getLogger(ScholarshipService.class.getName());
    
    private final ScholarshipRepository scholarshipRepository;
    
    @Autowired
    public ScholarshipService(ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }
    
    public List<Scholarship> getAllScholarships() {
        logger.info("Fetching all scholarships");
        return scholarshipRepository.findAll();
    }
    
    public List<Scholarship> searchScholarshipsByTitle(String title) {
        if (title == null || title.isEmpty()) {
            logger.info("Empty search term, returning all scholarships");
            return scholarshipRepository.findAll();
        }
        
        logger.info("Searching scholarships with title containing: " + title);
        // Usando método do Spring Data JPA que já implementa a busca ignorando case
        List<Scholarship> results = scholarshipRepository.findByTitleContainingIgnoreCase(title);
        logger.info("Search results count: " + results.size());
        return results;
    }
}

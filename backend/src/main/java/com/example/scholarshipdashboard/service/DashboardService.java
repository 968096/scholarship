package com.example.scholarshipdashboard.service;

import com.example.scholarshipdashboard.model.Scholarship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class DashboardService {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Scholarship> getAllScholarships() {
        return entityManager.createQuery("SELECT s FROM Scholarship s", Scholarship.class).getResultList();
    }
}
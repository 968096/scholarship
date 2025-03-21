package com.example.scholarshipdashboard.model;

public class Scholarship {
    private Long id;
    private String title;
    private String description;
    private Double amount;

    // No-argument constructor
    public Scholarship() {
    }

    // Constructor with all fields
    public Scholarship(Long id, String title, String description, Double amount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.amount = amount;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
package com.example.scholarshipdashboard.repository;

import com.example.scholarshipdashboard.model.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {
    
    // Consulta case-insensitive usando LOWER() para converter título e parâmetro para minúsculas
    @Query("SELECT s FROM Scholarship s WHERE LOWER(s.title) LIKE LOWER(CONCAT('%', :title, '%'))")
    List<Scholarship> findByTitleContainingIgnoreCase(@Param("title") String title);
}

package com.vsergejevslv.backend.repository;

import com.vsergejevslv.backend.model.Integration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntegrationRepository extends JpaRepository<Integration, Long> {
}

package com.vsergejevslv.backend.controller;

import com.vsergejevslv.backend.model.Integration;
import com.vsergejevslv.backend.repository.IntegrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/integrations")
public class IntegrationController {

    @Autowired
    private IntegrationRepository integrationRepository;

    @GetMapping
    public ResponseEntity<List<Integration>> getAllIntegrations() {
        List<Integration> integrations = integrationRepository.findAll();
        return ResponseEntity.ok(integrations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Integration> getIntegrationById(@PathVariable Long id) {
        Integration integration = integrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Integration not found with id: " + id));
        return ResponseEntity.ok(integration);
    }

    @PostMapping
    public ResponseEntity<Integration> createIntegration(@RequestBody Integration integration) {
        Integration savedIntegration = integrationRepository.save(integration);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedIntegration);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Integration> updateIntegration(@PathVariable Long id,
                                                         @RequestBody Integration integrationDetails) {
        Integration integration = integrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Integration not found with id: " + id));

        integration.setName(integrationDetails.getName());
        integration.setDescription(integrationDetails.getDescription());

        Integration updatedIntegration = integrationRepository.save(integration);
        return ResponseEntity.ok(updatedIntegration);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIntegration(@PathVariable Long id) {
        Integration integration = integrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Integration not found with id: " + id));

        integrationRepository.delete(integration);
        return ResponseEntity.noContent().build();
    }
}

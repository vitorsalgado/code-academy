package com.example;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class HealthController {

  @GetMapping("/health")
  ResponseEntity check() {
    return ResponseEntity.noContent().build();
  }
}

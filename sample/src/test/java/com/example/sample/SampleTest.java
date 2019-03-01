package com.example.sample;

import static com.example.sample.Sample.sum;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SampleTest {

  @Test
  void itShouldSumTwoNumbers() {
    assertEquals(4, sum(2, 2));
  }
}

package com.example.sample;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

@RunWith(JUnit4.class)
public class MainTest {

  @Test
  public void itShouldReturnTheSumOfTwoNumbers() {
    assertEquals(2, Main.sun(1, 1));
  }
}

package de.gedoplan.showcase.ui;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum View {
  HOMEPAGE("Modern Faces App"),TRAININGS("Jakarta EE Trainings"), BOOKINGS("Kurs Buchungen");
  @Getter
  public final String title;
}

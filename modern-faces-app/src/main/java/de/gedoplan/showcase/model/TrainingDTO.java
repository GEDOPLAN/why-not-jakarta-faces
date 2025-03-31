package de.gedoplan.showcase.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Getter
@NoArgsConstructor
public class TrainingDTO {
  private String id;
  private String name;
  private String beschreibung;
  private String datum;
  private String ort;
  private String logo;

  public TrainingDTO(Training training) {
    this.id = training.getId();
    this.name = training.getName();
    this.beschreibung = training.getBeschreibung();
    this.datum = DateTimeFormatter.ofPattern("dd.MM.yyyy").format(training.getDatum());
    this.ort = training.getOrt();
    this.logo = training.getLogo();
  }
}

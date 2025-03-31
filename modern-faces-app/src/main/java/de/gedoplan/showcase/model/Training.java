package de.gedoplan.showcase.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Getter
@Setter
public class Training {
  @Id
  private String id;
  private String name;
  private String beschreibung;
  private LocalDate datum;
  private int dauer;
  private String trainer;
  private String ort;
  private String logo;

  @Override
  public int hashCode() {
    return Objects.hashCode(id);
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj) {
      return true;
    }
    if (obj == null) {
      return false;
    }
    if (getClass() != obj.getClass()) {
      return false;
    }
    Training other = (Training) obj;
    return Objects.equals(this.id, other.id);
  }
}

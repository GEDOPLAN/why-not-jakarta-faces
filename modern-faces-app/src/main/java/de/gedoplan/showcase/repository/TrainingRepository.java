package de.gedoplan.showcase.repository;

import de.gedoplan.showcase.model.Training;
import de.gedoplan.showcase.model.TrainingDTO;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.List;

@ApplicationScoped
public class TrainingRepository implements PanacheRepositoryBase<Training, String> {
  public List<TrainingDTO> getTrainings() {
    return streamAll().map(TrainingDTO::new).toList();
  }
}

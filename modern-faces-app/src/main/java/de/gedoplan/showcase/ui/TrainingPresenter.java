package de.gedoplan.showcase.ui;

import de.gedoplan.showcase.model.Training;
import de.gedoplan.showcase.repository.TrainingRepository;
import jakarta.annotation.PostConstruct;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import lombok.Getter;

import java.util.List;

@Named
@ViewScoped
public class TrainingPresenter {
  TrainingRepository trainingRepository;

  @Getter
  private List<Training> trainings;

  @Inject
  TrainingPresenter(TrainingRepository trainingRepository) {
    this.trainingRepository = trainingRepository;
  }

  @PostConstruct
  void init() {
    trainings = trainingRepository.listAll();
  }
}

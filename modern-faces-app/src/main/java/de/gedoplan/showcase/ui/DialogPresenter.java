package de.gedoplan.showcase.ui;

import de.gedoplan.showcase.model.Booking;
import de.gedoplan.showcase.model.Training;
import de.gedoplan.showcase.repository.BookingRepository;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.Setter;

@Named
@ViewScoped
public class DialogPresenter {
  @Getter
  private String dialogClasses = "modal";

  @Inject
  BookingRepository bookingRepository;

  @Getter
  Training training;

  @Getter
  @Setter
  private String name;

  public void viewDialog(Training training) {
    this.training = training;
    dialogClasses += " is-active";
  }

  public void hideDialog() {
    dialogClasses = "modal";
  }

  @Transactional
  public void book() {
    var booking = new Booking();
    booking.setName(name);
    booking.setTraining(training);
    bookingRepository.persist(booking);
    hideDialog();
  }
}

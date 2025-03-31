package de.gedoplan.showcase.ui;

import de.gedoplan.showcase.model.Booking;
import de.gedoplan.showcase.repository.BookingRepository;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;

import java.util.List;

@Named
@ViewScoped
public class BookingPresenter {
  @Inject
  BookingRepository bookingRepository;

  public List<Booking> getBookings() {
    return bookingRepository.listAll();
  }
}

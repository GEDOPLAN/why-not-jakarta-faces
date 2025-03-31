package de.gedoplan.showcase.rest;

import de.gedoplan.showcase.model.Booking;
import de.gedoplan.showcase.repository.BookingRepository;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriInfo;
import lombok.extern.java.Log;

import java.util.List;

@Log
@Path("booking")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class BookingResource {
  @Inject
  BookingRepository bookingRepository;

  @Inject
  UriInfo uriInfo;

  @GET
  public List<Booking> getBookings() {
    return bookingRepository.listAll();
  }

  @POST
  @Transactional
  public Response createBooking(Booking booking) {
    log.info("createBooking: " + booking);
    bookingRepository.persist(booking);
    return Response.ok(uriInfo.getAbsolutePathBuilder().path(booking.getId().toString()).build()).build();
  }
}

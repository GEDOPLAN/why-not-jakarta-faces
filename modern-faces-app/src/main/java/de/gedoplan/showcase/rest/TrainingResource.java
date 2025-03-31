package de.gedoplan.showcase.rest;

import de.gedoplan.showcase.model.Training;
import de.gedoplan.showcase.model.TrainingDTO;
import de.gedoplan.showcase.repository.TrainingRepository;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("training")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class TrainingResource {
  @Inject
  TrainingRepository trainingRepository;

  @GET
  public List<TrainingDTO> getTrainings() {
    return trainingRepository.getTrainings();
  }

  @GET
  @Path("{id}")
  public Training getTraining(@PathParam("id") String id) {
    return trainingRepository.findById(id);
  }
}

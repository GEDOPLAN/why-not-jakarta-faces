package de.gedoplan.showcase.filter;

import jakarta.ws.rs.container.ContainerResponseContext;
import org.jboss.resteasy.reactive.server.ServerResponseFilter;

public class ResponseFilter {
  @ServerResponseFilter
  public void getFilter(ContainerResponseContext responseContext) {
    responseContext.getHeaders().add("Access-Control-Allow-Origin", "http://localhost:4200");
    responseContext.getHeaders().add("Access-Control-Allow-Headers", "content-type");
  }
}

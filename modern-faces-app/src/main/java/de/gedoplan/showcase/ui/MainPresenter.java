package de.gedoplan.showcase.ui;

import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import lombok.Getter;
import lombok.Setter;

@Named
@ViewScoped
public class MainPresenter {
  @Getter
  @Setter
  private View view = View.HOMEPAGE;

  public String getTitle() {
    return view.getTitle();
  }
}

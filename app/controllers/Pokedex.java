package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Pokedex extends Controller {
  
    public static Result index() {
        return ok(views.html.Pokedex.pokedex_index.render(""));
    }
  
}

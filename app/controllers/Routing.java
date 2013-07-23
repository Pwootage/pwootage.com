package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Routing extends Controller {
    public static Result index() {
        return ok(routingHome.render());
    }
    
    public static Result showRoute(Long id) {
    	return ok(route.render(id));
    }
}

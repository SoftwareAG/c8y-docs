---
order: 40
title: Role-based authorization
layout: redirect
---

Once a user has been authenticated, the next step is to check if the user is authorized to do what they're trying to do.

	[Authorize]
	public IActionResult Index()
	{
	  return View();
	}

The authorize attribute is used to protect an action in a controller from being called. If no conditions have been specified, any user who is authenticated is able to perform the action.

To be more specific and allow only members of a certain role (in this case the "ROLE_APPLICATION_MANAGEMENT_READ" role) to perform actions in a controller, add the role as a requirement to the attribute like this:

    [Authorize(Roles = "ROLE_APPLICATION_MANAGEMENT_READ")]
    public class HomeController : Controller
    {

        public HomeController(Platform platform)
        {

        }
	}
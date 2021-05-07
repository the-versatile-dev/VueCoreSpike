using Microsoft.AspNetCore.Mvc;

namespace VueCoreMVCSpikeOne.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Jokes()
        {
            return View();
        }
    }
}

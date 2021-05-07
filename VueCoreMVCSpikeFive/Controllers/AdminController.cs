using Microsoft.AspNetCore.Mvc;

namespace VueCoreMVCSpikeFive.Controllers
{
    [Route("admin")]
    public class AdminController : Controller
    {
        [HttpGet("{*path}")]
        public IActionResult Index(string path) => View();
    }
}

using System.Linq;
using Management.Database;
using Management.Database.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Management.Controllers
{
    [Route("api/base")]
    public class TestController : Controller
    {
        public readonly DataContext db;

        public TestController(DataContext db)
        {
            this.db = db;
        }
        // GET api/values
        [HttpGet("get")]
        public IActionResult Get()
        {
            var list = db.artical.Where(x => x.Id == 1).ToList();
            return Ok(list);
        }

        // GET api/values/5
        [HttpGet("info")]
        public IActionResult GetInfo()
        {
            var list = db.Infos.Where(x => x.Id == 1).ToList();
            return Ok(list);
        }

        // POST api/values
        [HttpGet("addText")]
        public IActionResult add()
        {

            Infos newList = new Infos { Id = 2, Info = "1234546" };
            db.Infos.Add(newList);
            db.SaveChanges();
            return Ok();
                
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
    }
}
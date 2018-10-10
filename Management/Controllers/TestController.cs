using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Management.Models;
using Microsoft.AspNetCore.Mvc;

namespace Management.Controllers
{
    [Route("api/base")]
    public class TestController : Controller
    {

        // GET api/values
        [HttpGet("get")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OscarWebPortfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataFactoryController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public DataFactoryController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<SkillData> Get()
        {
            return DataFactory.AllSkillData().ToArray();
        }
    }
}

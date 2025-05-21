using Entities.Dto;
using Entities.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Pokemon.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokemonBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CombateController : ControllerBase
    {
        private readonly CombateService _combateService;

        public CombateController(CombateService combateService) {
            _combateService = combateService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_combateService.ObtenerCombates());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/<CombateController>
        [HttpPost]
        public IActionResult Post([FromBody] CombateDto combateDto)
        {
            try
            {
                return Ok(_combateService.CrearCombate(combateDto));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

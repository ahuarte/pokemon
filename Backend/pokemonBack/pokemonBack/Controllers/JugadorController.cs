using Entities.Dto;
using Entities.Entities;
using Microsoft.AspNetCore.Mvc;
using Pokemon.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokemonBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JugadorController : ControllerBase
    {
        public JugadorService _jugadorService;
        public JugadorController(CartaspokemonContext context) { 
            _jugadorService = new JugadorService(context);
        }
        // GET: api/<JugadorController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_jugadorService.Jugadores());
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        // GET api/<JugadorController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_jugadorService.JugadorById(id));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        // POST api/<JugadorController>
        [HttpPost]
        public IActionResult Post([FromBody] JugadorDto value)
        {
            try
            {
                return Ok(_jugadorService.JugadorPost(value));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<JugadorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JugadorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

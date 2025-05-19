using Microsoft.AspNetCore.Mvc;
using Entities.Dto;
using Pokemon.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokemonBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartasController : ControllerBase
    {
        public CartasService _cartasService;
        public CartasController()
        {
            _cartasService = new CartasService();
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_cartasService.GetCartas());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_cartasService.GetCarta(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        // POST api/<ValuesController>
        [HttpPost]
        public IActionResult Post([FromBody] CartaDto carta)
        {
            try
            {
                return Ok(_cartasService.AddCarta(carta));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // PUT api/<ValuesController>/5
        [HttpPut]
        public IActionResult Put([FromBody] CartaDto carta)
        {
            try
            {
                return Ok(_cartasService.UpdateCarta(carta));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _cartasService.DeleteCarta(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

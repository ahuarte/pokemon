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
        private readonly IWebHostEnvironment _env;

        public JugadorController(CartaspokemonContext context, IWebHostEnvironment env)
        {
            _jugadorService = new JugadorService(context);
            _env = env;
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

        [HttpPost("imagen")]
        public async Task<IActionResult> PostImagen([FromForm] ImagenUploadDto dto)
        {
            try
            {
                if (dto.Imagen == null || dto.Imagen.Length == 0)
                {
                    return BadRequest("No se ha proporcionado ninguna imagen.");
                }

                var carpetaDestino = Path.Combine(_env.WebRootPath ?? "wwwroot", "imagenes", "jugadores");
                if (!Directory.Exists(carpetaDestino))
                {
                    Directory.CreateDirectory(carpetaDestino);
                }

                var nombreArchivo = Guid.NewGuid().ToString() + Path.GetExtension(dto.Imagen.FileName);
                var rutaCompleta = Path.Combine(carpetaDestino, nombreArchivo);

                using (var stream = new FileStream(rutaCompleta, FileMode.Create))
                {
                    await dto.Imagen.CopyToAsync(stream);
                }


                var jugador = _jugadorService.JugadorById(dto.IdPokemon);
                if (jugador == null)
                {
                    return NotFound("Carta no encontrada.");
                }

                jugador.avatar = nombreArchivo;
                _jugadorService.UpdateJugador(jugador);

                return Ok(nombreArchivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<JugadorController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] JugadorDto jugador)
        {
            try
            {
                return Ok(_jugadorService.UpdateJugador(jugador));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<JugadorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

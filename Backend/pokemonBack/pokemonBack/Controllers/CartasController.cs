using Microsoft.AspNetCore.Mvc;
using Entities.Dto;
using Pokemon.Services;
using Entities.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokemonBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartasController : ControllerBase
    {
        public CartasService _cartasService;
        private readonly IWebHostEnvironment _env;
        public CartasController(CartasService cartasService, IWebHostEnvironment env)
        {
            _cartasService = cartasService;
            _env = env;
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
        [HttpPost("imagen")]
        public async Task<IActionResult> PostImagen([FromForm] ImagenUploadDto dto)
        {
            try
            {
                if (dto.Imagen == null || dto.Imagen.Length == 0)
                {
                    return BadRequest("No se ha proporcionado ninguna imagen.");
                }

                var carpetaDestino = Path.Combine(_env.WebRootPath ?? "wwwroot", "imagenes", "pokemon");
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


                var carta = _cartasService.GetCarta(dto.IdPokemon);
                if (carta == null)
                {
                    return NotFound("Carta no encontrada.");
                }

                carta.image = nombreArchivo;
                _cartasService.UpdateCarta(carta);

                Response.ContentType = "application/json";
                return Ok(new { nombreArchivo });
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

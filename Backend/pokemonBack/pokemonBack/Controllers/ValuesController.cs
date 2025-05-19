using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace pokemonBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet("{nombreCarpeta}/{nombreArchivo}")]
        public IActionResult GetImagen(string nombreArchivo, string nombreCarpeta)
        {
            // Ruta completa al archivo en wwwroot/imagenes
            var rutaCarpeta = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagenes", nombreCarpeta);
            var rutaArchivo = Path.Combine(rutaCarpeta, nombreArchivo);

            if (!System.IO.File.Exists(rutaArchivo))
            {
                return NotFound("Imagen no encontrada");
            }

            var tipoMime = GetMimeType(nombreArchivo);
            var bytes = System.IO.File.ReadAllBytes(rutaArchivo);

            return File(bytes, tipoMime);
        }

        // Método auxiliar para obtener el tipo MIME
        private string GetMimeType(string fileName)
        {
            var extension = Path.GetExtension(fileName).ToLowerInvariant();
            return extension switch
            {
                ".jpg" or ".jpeg" => "image/jpeg",
                ".png" => "image/png",
                ".gif" => "image/gif",
                _ => "application/octet-stream"
            };
        }
    }
}

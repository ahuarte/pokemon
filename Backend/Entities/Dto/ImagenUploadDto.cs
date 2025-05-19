using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Entities.Dto
{
    public class ImagenUploadDto
    {
        public IFormFile Imagen { get; set; }
        public int IdPokemon { get; set; }
    }
}

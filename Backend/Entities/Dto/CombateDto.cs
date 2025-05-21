using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dto
{
    public class CombateDto
    {
        public int? id { get; set; }
        public int Turno { get; set; }
        public List<JugadorCombateDto> Jugadores { get; set; } = new List<JugadorCombateDto>();
    }
}

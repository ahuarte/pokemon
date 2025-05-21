using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dto
{
    public class CombateListDto
    {
        public int? id { get; set; }
        public int Turno { get; set; }
        public List<string>? jugadores { get; set; }
        public string? Ganador { get; set; }
    }
}

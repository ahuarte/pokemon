using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dto
{
    public class JugadorDto
    {
        public int id {  get; set; }
        public string name { get; set; }
        public string avatar { get; set; }

        public int? idCarta { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dto
{
    public class CartaDto
    {
        public int id { get; set; }

        public string name { get; set; } = null!;

        public int? Hp { get; set; }

        public int? ammo { get; set; }

        public int? attack { get; set; }

        public int? block { get; set; }

        public string? image { get; set; }

    } 
}

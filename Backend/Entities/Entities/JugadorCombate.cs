using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class JugadorCombate
    {
        public int IdCombate { get; set; }
        public Combate Combate { get; set; } = null!;

        public int IdJugador { get; set; }
        public Jugador Jugador { get; set; } = null!;

        public bool Ganador { get; set; }
    }
}

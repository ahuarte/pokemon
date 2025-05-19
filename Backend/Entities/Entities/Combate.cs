using System;
using System.Collections.Generic;

namespace Entities.Entities;

public partial class Combate
{
    public int IdCombate { get; set; }

    public int? Turno { get; set; }

    public virtual ICollection<Jugador> IdJugadors { get; set; } = new List<Jugador>();
}

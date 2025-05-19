using System;
using System.Collections.Generic;

namespace Entities.Entities;

public partial class Jugador
{
    public int IdJugador { get; set; }

    public string NombreJugador { get; set; } = null!;

    public string? Avatar { get; set; }

    public int IdCarta { get; set; }

    public virtual Cartum IdCartaNavigation { get; set; } = null!;

    public virtual ICollection<Combate> IdCombates { get; set; } = new List<Combate>();
}

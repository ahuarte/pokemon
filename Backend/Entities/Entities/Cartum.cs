using System;
using System.Collections.Generic;

namespace Entities.Entities;

public partial class Cartum
{
    public int IdCarta { get; set; }

    public string NombreCarta { get; set; } = null!;

    public int? Hp { get; set; }

    public int? Municion { get; set; }

    public int? Danyo { get; set; }

    public int? Bloqueo { get; set; }

    public string? ImagenCarta { get; set; }

    public virtual ICollection<Jugador> Jugadors { get; set; } = new List<Jugador>();
}

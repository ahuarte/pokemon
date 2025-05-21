using System;
using System.Collections.Generic;

namespace Entities.Entities;

public partial class Combate
{
    public Combate()
    {
        JugadorCombates = new HashSet<JugadorCombate>();
    }

    public int IdCombate { get; set; }
    public int Turno { get; set; }

    public virtual ICollection<JugadorCombate> JugadorCombates { get; set; }
}

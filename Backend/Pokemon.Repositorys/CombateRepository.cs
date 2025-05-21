using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Dto;
using Entities.Entities;

namespace Pokemon.Repositorys
{
    public class CombateRepository
    {
        private readonly CartaspokemonContext _context;

        public CombateRepository(CartaspokemonContext context) {
            _context = context;
        }

        public List<CombateListDto> ObtenerCombates()
        {
            var combates = _context.Combates.ToList();
            var combatesDto = new List<CombateListDto>();
            foreach (var combate in combates)
            {
                var combateDto = new CombateListDto
                {
                    id = combate.IdCombate,
                    Turno = combate.Turno,
                    jugadores = _context.Jugadors.Where(x => _context.JugadorCombates
                    .Where(c => c.IdCombate == combate.IdCombate).Select(c => c.IdJugador).Contains(x.IdJugador))
                    .Select(x => x.NombreJugador).ToList(),
                    Ganador = _context.JugadorCombates.Where(x => x.IdCombate == combate.IdCombate && x.Ganador == true).Select(x => x.Jugador.NombreJugador).FirstOrDefault(),
                };
                combatesDto.Add(combateDto);
            }
            return combatesDto;
        }
        public int CrearCombate(CombateDto combateDto)
        {
            var combateCreado = new Combate
            {
                Turno = combateDto.Turno,
            };
            _context.Combates.Add(combateCreado);
            _context.SaveChanges();

            foreach (var jugador in combateDto.Jugadores)
            {
                _context.JugadorCombates.Add(new JugadorCombate
                {
                    IdJugador = jugador.IdJugador,
                    Ganador = jugador.Ganador,
                    IdCombate = combateCreado.IdCombate
                });
            }
            _context.SaveChanges();
            return combateCreado.IdCombate;
        }
    }
}

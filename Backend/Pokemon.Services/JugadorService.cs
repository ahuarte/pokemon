using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Dto;
using Entities.Entities;
using Pokemon.Repositorys;

namespace Pokemon.Services
{
    public class JugadorService
    {
        private readonly JugadorRepository _JugadorRepository;
        private readonly CartaspokemonContext _context;

        public JugadorService(JugadorRepository jugadorRepository)
        {
            _JugadorRepository = jugadorRepository;
            
        }
        public JugadorService( CartaspokemonContext context)
        {
            _JugadorRepository = new JugadorRepository(context);
        }

        public List<JugadorDto> Jugadores()
        {
            return _JugadorRepository.Jugadores();
        }
        public JugadorDto JugadorById(int id)
        {
            return _JugadorRepository.JugadorById(id);
        }
        public Jugador JugadorPost(JugadorDto value)
        {
            return _JugadorRepository.JugadorPost(value);
        }
        public int UpdateJugador(JugadorDto jugador)
        {
            return _JugadorRepository.UpdateJugador(jugador);
        }
    }
}

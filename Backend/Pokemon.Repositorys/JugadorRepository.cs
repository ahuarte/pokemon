using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Dto;
using Entities.Entities;

namespace Pokemon.Repositorys
{
    public class JugadorRepository
    {
        private readonly CartaspokemonContext _context;

        public JugadorRepository(CartaspokemonContext context)
        {
            _context = context;
        }
        public List<JugadorDto> Jugadores()
        {
            return _context.Jugadors.Select(j => new JugadorDto
            {
                id = j.IdJugador,
                idCarta = j.IdCarta,
                name = j.NombreJugador,
                avatar = j.Avatar

            }).ToList();
        }
        public JugadorDto JugadorById(int id)
        {
            return _context.Jugadors.Where(jbid => jbid.IdJugador == id).Select(j => new JugadorDto
            {
                id = j.IdJugador,
                idCarta = j.IdCarta,
                name = j.NombreJugador,
                avatar = j.Avatar

            }).FirstOrDefault();
        }
        public Jugador JugadorPost(JugadorDto value)
        {
            var jugadorPost = new Jugador
            {
                IdJugador = value.id,
                NombreJugador = value.name,
                IdCarta = value.idCarta,
                Avatar = value.avatar,
            };

            _context.Jugadors.Add(jugadorPost);
            _context.SaveChanges();
            return jugadorPost;
        }
        public int UpdateJugador(JugadorDto jugador)
        {
            var existingJugador = _context.Jugadors.Find(jugador.id);
            if (existingJugador != null)
            {
                existingJugador.IdJugador = jugador.id;
                existingJugador.NombreJugador = jugador.name;
                existingJugador.Avatar = jugador.avatar;
                _context.SaveChanges();
            }
            return existingJugador.IdJugador;
        }
    }
}

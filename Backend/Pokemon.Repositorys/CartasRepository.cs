using Entities.Dto;
using Entities.Entities;

namespace Pokemon.Repositorys
{
  public class CartasRepository
  {
        private readonly CartaspokemonContext _context;

        public CartasRepository(CartaspokemonContext context)
        {
            _context = context;
        }
        public List<CartaDto> GetCartas()
        {
            return _context.Carta.Select(c=>new CartaDto
            {
                id = c.IdCarta,
                name = c.NombreCarta,
                Hp = c.Hp,
                ammo = c.Municion,
                attack = c.Danyo,
                block = c.Bloqueo,
                image = c.ImagenCarta
            }).ToList();
        }
        public CartaDto GetCarta(int id)
        {
            return _context.Carta.Where(c => c.IdCarta == id).Select(c => new CartaDto
            {
                id = c.IdCarta,
                name = c.NombreCarta,
                Hp = c.Hp,
                ammo = c.Municion,
                attack = c.Danyo,
                block = c.Bloqueo,
                image = c.ImagenCarta
            }).FirstOrDefault();
        }

        public int AddCarta(CartaDto carta)
        {
            var newCarta = new Cartum
            {
                NombreCarta = carta.name,
                Hp = carta.Hp,
                Municion = carta.ammo,
                Danyo = carta.attack,
                Bloqueo = carta.block,
                ImagenCarta = carta.image
            };
            _context.Carta.Add(newCarta);
            _context.SaveChanges();
            return newCarta.IdCarta;
        }

        public int UpdateCarta(CartaDto carta)
        {
            var existingCarta = _context.Carta.Find(carta.id);
            if (existingCarta != null)
            {
                existingCarta.NombreCarta = carta.name;
                existingCarta.Hp = carta.Hp;
                existingCarta.Municion = carta.ammo;
                existingCarta.Danyo = carta.attack;
                existingCarta.Bloqueo = carta.block;
                existingCarta.ImagenCarta = carta.image;
                _context.SaveChanges();
            }
            return existingCarta.IdCarta;
        }
        public void DeleteCarta(int id)
        {
            var carta = _context.Carta.Find(id);
            if (carta != null)
            {
                _context.Carta.Remove(carta);
                _context.SaveChanges();
            }
        }
    }
}

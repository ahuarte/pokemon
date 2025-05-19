using Entities.Dto;
using Pokemon.Repositorys;

namespace Pokemon.Services
{
  public class CartasService
  {
        private readonly CartasRepository _CartasRepository;
        public CartasService(CartasRepository cartasRepository)
        {
            _CartasRepository = cartasRepository;
        }
        public CartasService()
        {
            _CartasRepository = new CartasRepository();
        }
        public List<CartaDto> GetCartas()
        {
            return _CartasRepository.GetCartas();
        }
        public CartaDto GetCarta(int id)
        {
            return _CartasRepository.GetCarta(id);
        }
        public int AddCarta(CartaDto carta)
        {
            return _CartasRepository.AddCarta(carta);
        }
        public int UpdateCarta(CartaDto carta)
        {
            return _CartasRepository.UpdateCarta(carta);
        }
        public void DeleteCarta(int id)
        {
            _CartasRepository.DeleteCarta(id);
        }
    }
}

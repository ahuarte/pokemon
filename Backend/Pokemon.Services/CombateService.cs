using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Dto;
using Pokemon.Repositorys;

namespace Pokemon.Services
{
    public class CombateService
    {
        private readonly CombateRepository _combateRepository;
        public CombateService(CombateRepository combateRepository) {
            _combateRepository = combateRepository;
        }

        public List<CombateListDto> ObtenerCombates()
        {
            return _combateRepository.ObtenerCombates();
        }
        public int CrearCombate(CombateDto combateDto)
        {
            return _combateRepository.CrearCombate(combateDto);
        }
    }
}

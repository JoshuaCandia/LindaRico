import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
const Slogan = () => {
  const navigate = useNavigate()
  return (
    <div className='py-8 md:py-24 bg-BlueSemiLight gap-6 flex flex-col items-center'>
      <div>
        <h3 className='text-2xl md:text-3xl font-bold text-white'>
          Tu Seguridad, Nuestra Prioridad
        </h3>
      </div>
      <div className='text-white/90 text-lg flex flex-col text-center gap-4 py-4 px-2'>
        <p>
          Somos una consultora en Higiene y Seguridad y Medio Ambiente con años
          de experiencia, formada por un equipo multidisciplinario de
          profesionales de gran capacidad.
        </p>
        <p>
          Proporcionamos todos los servicios para atender cada necesidad sin
          descuidar la eficacia de sus operaciones, manteniendo una comunicación
          constante con el cliente e intercambiando ideas para lograr los
          requerimientos técnicos legales que su empresa necesita. Ante
          cualquier inquietud no dude en consultarnos.
        </p>
      </div>
      <Button
        onClick={() => navigate('/higiene-y-seguridad')}
        className='bg-white rounded-md p-2 mt-4'
      >
        Conocer más
      </Button>
    </div>
  )
}

export default Slogan

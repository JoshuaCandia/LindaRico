import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
const Slogan = () => {
  const navigate = useNavigate()
  return (
    <div className='pt-8 bg-BlueSemiLight text-white py-8 flex flex-col items-center'>
      <div>
        <h3 className='text-2xl font-bold '>Tu Seguridad, Nuestra Prioridad</h3>
      </div>
      <div className='text-white/80 text-lg flex flex-col text-center gap-4 py-4 px-2'>
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
        onClick={() => navigate('/servicios/higiene-y-seguridad')}
        className='text-black rounded-md bg-white p-2 mt-4'
      >
        Conocer más
      </Button>
    </div>
  )
}

export default Slogan

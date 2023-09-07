import { useNavigate } from 'react-router-dom'
const ButtonContact = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/contacto')}
      className='bg-blue-700 p-4 rounded-xl text-white font-semibold'
    >
      Contactanos
    </button>
  )
}

export default ButtonContact

import { Button } from '@nextui-org/react'
import { BsWhatsapp } from 'react-icons/bs'
const ButtonWhatsApp = () => {
  return (
    <div className='hidden z-50 absolute md:flex'>
      <Button
        size='md'
        color='danger'
        aria-label='Like'
        className='block fixed bottom-5 left-5'
      >
        <a
          rel='noreferrer'
          href='https://api.whatsapp.com/send?phone=+5491134888325&text=Hola, tengo una consulta.'
          target='_blank'
          className='flex bg-green-400 rounded-lg py-2 px-4 justify-center items-center'
        >
          <span className='mr-2'>
            <BsWhatsapp color='white' size={22} />
          </span>
          <span className='text-white'>Contactanos</span>
        </a>
      </Button>
    </div>
  )
}

export default ButtonWhatsApp

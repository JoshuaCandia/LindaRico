import { BsWhatsapp } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
const ContactContainerCards = () => {
  return (
    <div className='flex items-center py-7 justify-center flex-wrap gap-12 2xl:h-[500px] bg-gradient-to-r from-BlueLight to-BlueSemiDark w-full'>
      <a href='tel:+5491134888325'>
        <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md duration-300 xl:hover:scale-105 cursor-pointer '>
          <div className='flex flex-col items-center justify-center gap-8 h-full '>
            <figure className='flex items-center justify-center bg-BlueLight w-16 h-16 rounded-full'>
              <BsFillTelephoneFill className='text-3xl text-white' />
            </figure>

            <h4 className='text-2xl'>Teléfono</h4>
            <p>(+549) 11 3488 8325</p>
          </div>
        </article>
      </a>
      <a href='mailto:lindarico.seh@hotmail.com'>
        <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md duration-300 xl:hover:scale-105 cursor-pointer'>
          <div className='flex flex-col items-center justify-center gap-8 h-full'>
            <figure className='flex items-center justify-center bg-pink-500 w-16 h-16 rounded-full'>
              <AiTwotoneMail className='text-3xl text-white' />
            </figure>

            <h4 className='text-2xl'>Correo</h4>
            <p>lindarico.seh@hotmail.com</p>
          </div>
        </article>
      </a>
      <a href='https://wa.me/1134888325' target='_blank'>
        <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md duration-300 xl:hover:scale-105 cursor-pointer'>
          <div className='flex flex-col items-center justify-center gap-8 h-full'>
            <figure className='flex items-center justify-center bg-green-400 w-16 h-16 rounded-full'>
              <BsWhatsapp className='text-3xl text-white' />
            </figure>

            <h4 className='text-2xl'>Whatsapp</h4>
          </div>
        </article>
      </a>
    </div>
  )
}

export default ContactContainerCards

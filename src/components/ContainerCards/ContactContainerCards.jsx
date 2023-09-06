import { BsWhatsapp } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
const ContactContainerCards = () => {
  return (
    <div className='grid items-center justify-center gap-12'>
      <a href='tel:+5491134888325'>
        <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md '>
          <div className='flex flex-col items-center justify-center gap-8 h-full'>
            <figure className='flex items-center justify-center bg-BlueLight w-16 h-16 rounded-full'>
              <BsFillTelephoneFill className='text-3xl text-white' />
            </figure>

            <h4 className='text-2xl'>Teléfono</h4>
            <p>(+549) 11 3488 8325</p>
          </div>
        </article>
      </a>

      <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md '>
        <div className='flex flex-col items-center justify-center gap-8 h-full'>
          <figure className='flex items-center justify-center bg-pink-500 w-16 h-16 rounded-full'>
            <AiTwotoneMail className='text-3xl text-white' />
          </figure>

          <h4 className='text-2xl'>Correo</h4>
          <p>lindarico.seh@hotmail.com</p>
        </div>
      </article>

      <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md '>
        <div className='flex flex-col items-center justify-center gap-8 h-full'>
          <figure className='flex items-center justify-center bg-green-400 w-16 h-16 rounded-full'>
            <BsWhatsapp className='text-3xl text-white' />
          </figure>

          <h4 className='text-2xl'>Whatsapp</h4>
        </div>
      </article>
    </div>
  );
};

export default ContactContainerCards;

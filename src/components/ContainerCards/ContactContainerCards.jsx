import { BsWhatsapp } from 'react-icons/bs';
const ContactContainerCards = () => {
  return (
    <div className='grid items-center justify-center'>
      <article className='w-[300px] h-[300px] bg-white rounded-lg border border-gray-200 shadow-md '>
        <div className='flex flex-col items-center justify-center gap-8 h-full'>
          <figure className='flex items-center justify-center bg-BlueLight w-20 h-20 rounded-full'>
            <BsWhatsapp className='text-5xl text-BlueSemiDark' />
          </figure>

          <h4 className='text-2xl'>Whatsapp</h4>
        </div>
      </article>
    </div>
  );
};

export default ContactContainerCards;

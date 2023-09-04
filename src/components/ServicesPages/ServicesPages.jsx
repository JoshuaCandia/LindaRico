import ButtonContact from '../buttons/ButtonContact';
import { BiCheck } from 'react-icons/bi';

const ServicesPages = ({ title, image, description, services }) => {
  return (
    <main>
      <div
        className={`bg-[url('${image}')] h-[300px] bg-[length:600px] bg-no-repeat bg-fixed flex flex-col justify-center items-center gap-7 `}
      >
        <h1 className='text-3xl font-bold text-white'>{title}</h1>
        <ButtonContact />
      </div>
      <section>
        <article className='px-7 pt-7 font-light'>
          <p>{description}</p>
        </article>
      </section>
      <section className='bg-blue-500 mt-7 text-white'>
        <article className='p-7 font-light flex flex-col justify-center items-center'>
          <h2 className='text-4xl mb-7'>Servicios</h2>

          <ul className='flex flex-col items-center justify-center mb-4 gap-4'>
            
          {services.map(service =>  <li key={service.id}>
              <div className='flex gap-2 items-center'>
                <BiCheck className='text-[32px]' />
                <p>{service.msg}</p>
              </div>
            </li>)}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default ServicesPages;

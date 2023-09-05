import ButtonContact from '../buttons/ButtonContact';
import { BiCheck } from 'react-icons/bi';

const ServicesPages = ({ title, image, description, services }) => {
  return (
    <main>
      <div
        className={` h-[300px] bg-[length:600px] w-full bg-no-repeat bg-fixed  flex flex-col justify-center items-center gap-7 sm:bg-[length:100%] xl:bg-[length:100%] xl:h-[400px] xl:bg-bottom `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className='text-3xl font-bold text-white font-customFontInter'>
          {title}
        </h1>
        <ButtonContact />
      </div>
      <section className='xl:flex xl:justify-center'>
        <article className='px-7 pt-7 font-light xl:w-[900px] xl:text-xl fonts-customFontRoboto'>
          <p>{description}</p>
        </article>
      </section>
      <section className='bg-BlueSemiLight mt-7 text-white'>
        <article className='p-7 font-light flex flex-col justify-center items-center'>
          <h2 className='text-4xl mb-7 font-customFontInter'>Servicios</h2>

          <ul className='flex flex-col items-center justify-center mb-4 gap-4 fonts-customFontRoboto  xl:text-xl'>
            {services.map((service) => (
              <li key={service.id}>
                <div className='flex gap-2 items-center'>
                  <BiCheck className='text-[32px]' />
                  <p>{service.msg}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <div
        className={` h-[300px] bg-[length:500px]  w-full bg-no-repeat   flex flex-col justify-center items-center gap-7 sm:bg-contain xl:bg-[length:100%] xl:h-[400px] xl:bg-center `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <section className='flex justify-center bg-gradient-to-r from-BlueLight to-BlueSemiDark text-white'>
        <article className='p-7 font-light flex flex-col justify-center items-center xl:w-[900px]'>
          <h2 className='text-4xl mb-7 font-customFontInter'>
            ¿De qué trata el servicio de abono mensual?
          </h2>

          <p className='fonts-customFontRoboto  xl:text-xl'>
            El Servicio de Higiene y Seguridad en el Trabajo tiene como misión
            fundamental implementar la política fijada por la empresa en la
            materia, tendiente a determinar, promover y mantener adecuadas
            condiciones ambientales con el fin de mantener altos estándares de
            salud y seguridad en los lugares de trabajo, para poder prevenir con
            el desarrollo de accidentes y enfermedades profesionales, entre
            otros. Asimismo registrar las acciones y el desarrollo de los planes
            ejecutadas por este, tendientes a cumplir con dicha política. Para
            cumplimentar con lo anteriormente mencionado, desarrollaremos planes
            de gestión para cumplir con las siguientes tareas:
          </p>
        </article>
      </section>
    </main>
  );
};

export default ServicesPages;

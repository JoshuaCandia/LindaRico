import ButtonContact from '../Buttons/ButtonContact'
import { BiCheck } from 'react-icons/bi'

const ServicesPages = ({ title, image, description, services }) => {
  return (
    <main>
      {/* IMAGEN MAIN DE LA PAGINA */}
      <div
        className={` h-[300px] bg-[length:600px] w-full bg-no-repeat bg-fixed  flex flex-col justify-center items-center gap-7 sm:bg-[length:100%] xl:bg-[length:100%]  xl:h-[400px] `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 className='font-customFontInter text-3xl font-bold text-white'>
          {title}
        </h1>
        <ButtonContact />
      </div>

      {/* UN POCO DE DESCRIPCION  */}
      <section className='xl:flex xl:justify-center'>
        <article className='px-7 p-24 font-light xl:w-[900px] xl:text-xl fonts-customFontRoboto '>
          <p>{description}</p>
        </article>
      </section>

      {/* LISTAS CON LOS SERVICIOS */}
      <section className='bg-BlueSemiLight mt-7 text-white flex justify-center  '>
        <article className='p-7 font-light flex flex-col justify-center items-center '>
          <h2 className='text-4xl mb-7 font-medium font-customFontInter'>
            Servicios
          </h2>
          <div className='flex flex-col  xl:flex-row xl:gap-7 xl:p-7'>
            <ul className='flex flex-col mb-4  fonts-customFontRoboto gap-7  xl:text-md '>
              {services.map((service) =>
                service.id <= 7 ? (
                  <li key={service.id}>
                    <div className='flex gap-4 items-center'>
                      <div>
                        <BiCheck className='text-3xl' />
                      </div>
                      <p className='font-semibold'>{service.msg}</p>
                    </div>
                  </li>
                ) : null,
              )}
            </ul>

            {services.length > 7 && (
              <ul className='flex flex-col mb-4 items-start fonts-customFontRoboto gap-7 xl:text-md '>
                {services.map((service) =>
                  service.id <= 7 ? (
                    <li key={service.id}>
                      <div className='flex gap-4 items-center'>
                        <div>
                          <BiCheck className=' text-3xl' />
                        </div>

                        <p>{service.msg}</p>
                      </div>
                    </li>
                  ) : null,
                )}
              </ul>
            )}
          </div>
        </article>
      </section>

      {/* DE QUE TRATA EL SERVICIO */}
      <section className='h-[80vh] flex justify-center items-center'>
        <h5>Carousel de Imagenes</h5>
      </section>
    </main>
  )
}

export default ServicesPages

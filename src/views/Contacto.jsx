import ContactContainerCards from '../components/ContainerCards/ContactContainerCards'

const Contacto = () => {
  return (
    <div className='flex flex-col items-center justify-center  text-center'>
      <div className='bg-[url(../src/assets/contact-bg.jpg)] w-full h-[300px] bg-cover bg-center flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm text-white'>
          <h1 className='text-5xl font-bold  font-customFontInter '>
            Contacto
          </h1>
          <h3 className='font-customFontRoboto'>
            Contactate con nosotros para darte un mejor asesoramiento
          </h3>
        </div>
      </div>

      <ContactContainerCards />
    </div>
  )
}

export default Contacto

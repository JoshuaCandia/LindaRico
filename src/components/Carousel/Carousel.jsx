//components
import ButtonArrowDown from '../Buttons/ButtonArrowDown'
//hooks
import { Carousel, Typography, Button } from '@material-tailwind/react'
//assets
import hombresTrabajando from '../../assets/hombres-carpeta.jpg'
import habilitaciones from '../../assets/mujer-plano.jpg'

const CarouselHeader = () => {
  function smooth() {
    const section = document.getElementById('servicios')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <Carousel
      autoplay='true'
      autoplayDelay={5000}
      loop='true'
      navigation={false}
      className=''
    >
      <div className='relative h-full w-full'>
        <img
          src={habilitaciones}
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-end bg-black/75'>
          <div className='text-center w-full p-4 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='font-customFontInter mb-4 text-5xl md:text-4xl lg:text-5xl'
            >
              ALR Consultora.
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              Expertos en Seguridad e Higiene
            </Typography>
            <div className='flex gap-2 justify-center md:justify-start'>
              <Button onClick={() => smooth()} size='md' color='white'>
                Servicios
              </Button>
            </div>
          </div>
          <div className='w-full flex justify-center pb-16 md:pb-0'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>
      <div className='relative h-full w-full'>
        <img
          src={hombresTrabajando}
          alt='image 1'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 grid h-full w-full items-end bg-black/75'>
          <div className='text-center w-full p-4 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='font-customFontInter mb-4 text-5xl md:text-4xl lg:text-5xl'
            >
              ALR Consultora.
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              <div className='flex flex-col'>
                Expertos en Seguridad e Higiene
              </div>
            </Typography>
            <div className='flex gap-2 justify-center md:justify-start'>
              <Button onClick={() => smooth()} size='md' color='white'>
                Servicios
              </Button>
            </div>
          </div>
          <div className='w-full flex justify-center pb-16 md:pb-0'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselHeader

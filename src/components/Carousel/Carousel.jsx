//assets
import hombresTrabajando from '../../assets/hombres-trabajando.jpg';
import habilitaciones from '../../assets/habilitaciones.jpg';
//hooks
import { Carousel, Typography, Button } from '@material-tailwind/react';
//components
import ButtonArrowDown from '../Buttons/ButtonArrowDown.jsx';

const CarouselHeader = () => {
  function smooth() {
    const section = document.getElementById('servicios');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  return (
    <Carousel
      autoplay='true'
      autoplayDelay={4500}
      loop='true'
      prevArrow=''
      nextArrow=''
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
          <div className='w-full pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-5xl md:text-4xl lg:text-5xl'
            >
              Linda Rico & Asoc.
            </Typography>
            <Typography
              variant='lead'
              color='white'
              className='mb-12 opacity-80'
            >
              Expertos en Seguridad e Higiene
            </Typography>
            <div className='flex gap-2'>
              <Button onClick={() => smooth()} size='md' color='white'>
                Servicios
              </Button>
            </div>
          </div>
          <div className='w-full flex justify-center'>
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
          <div className='w-full pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
            <Typography
              variant='h1'
              color='white'
              className='mb-4 text-5xl md:text-4xl lg:text-5xl'
            >
              Linda Rico & Asoc.
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
            <div className='flex gap-2'>
              <Button onClick={() => smooth()} size='md' color='white'>
                Servicios
              </Button>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <ButtonArrowDown />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselHeader;

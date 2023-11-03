import { Carousel } from '@material-tailwind/react'
import seguridadCarousel from '../../assets/seguridad-carousel.jpg'
import seguridadCarousel2 from '../../assets/seguridad-carousel2.jpg'
import seguridadCarousel3 from '../../assets/seguridad-carousel3.jpg'

export function CarouselDefault() {
  return (
    <Carousel
      autoplay='true'
      autoplayDelay={4000}
      loop='true'
      className='rounded-xl '
    >
      <img
        src={seguridadCarousel}
        alt='image 1'
        className='h-full w-full object-cover'
      />
      <img
        src={seguridadCarousel2}
        alt='image 2'
        className='h-full w-full object-cover'
      />
      <img
        src={seguridadCarousel3}
        alt='image 3'
        className='h-full w-full object-cover'
      />
    </Carousel>
  )
}

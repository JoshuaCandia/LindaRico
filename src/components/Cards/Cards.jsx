//hooks
import { Card, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const Cards = ({ url, img, title }) => {
  return (
    <Link to={url}>
      <p className='font-customFontInter text-center uppercase font-black text-xl'>
        {title}
      </p>
      <Card className=' md:w-[48vw] h-[250px] rounded-md col-span-12 sm:col-span-4'>
        <Image
          removeWrapper
          alt='Card background'
          className='filter transition-all brightness-75  lg:hover:brightness-100 z-0 w-full h-full object-cover'
          src={img}
        />
      </Card>
    </Link>
  )
}

export default Cards

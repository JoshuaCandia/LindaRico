//hooks
import { Card, CardHeader, Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const Cards = ({ url, img, title, subTitle }) => {
  console.log(url)
  return (
    <Link to={url}>
      <Card className='rounded-md col-span-12 sm:col-span-4 h-[250px]'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='font-customFontInter text-white uppercase font-black text-xl'>
            {title}
          </p>
          <h4 className='text-white/70 font-medium text-large'>{subTitle}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt='Card background'
          className='filter transition-all brightness-75 lg:grayscale lg:hover:grayscale-0 z-0 w-full h-full object-cover'
          src={img}
        />
      </Card>
    </Link>
  )
}

export default Cards

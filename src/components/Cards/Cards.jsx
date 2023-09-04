//hooks
import { Card, CardHeader, Image } from '@nextui-org/react';

const Cards = ({ img, title, subTitle }) => {
  return (
    <Card className='col-span-12 sm:col-span-4 h-[250px]'>
      <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
        <p className='text-tiny text-white/60 uppercase font-bold'>{title}</p>
        <h4 className='text-white font-medium text-large'>{subTitle}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card background'
        className='z-0 w-full h-full object-cover'
        src={img}
      />
    </Card>
  );
};

export default Cards;

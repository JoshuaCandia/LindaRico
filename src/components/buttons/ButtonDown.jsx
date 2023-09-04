import { BsArrowDownShort } from 'react-icons/bs';
import { Button } from '@nextui-org/react';
const ButtonDown = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <Button className='rounded-xl' onClick={scrollDown}>
      <BsArrowDownShort color='white' size={50} />
    </Button>
  );
};

export default ButtonDown;

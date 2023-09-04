import { BsArrowDownShort } from 'react-icons/bs';

const ButtonDown = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <button onClick={scrollDown} className='cursor-pointer'>
      <BsArrowDownShort className='text-neutral-800 animate-bounce' size={50} />
    </button>
  );
};

export default ButtonDown;

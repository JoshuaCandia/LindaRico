import { BsArrowDownShort } from 'react-icons/bs';

const ButtonDown = () => {
  const scrollDown = () => {
    const viewportHeight = window.innerHeight;
    const scrollDistance = 0.98 * viewportHeight;

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    });
  };
  return (
    <button onClick={scrollDown} className='mb-6 cursor-pointer'>
      <BsArrowDownShort className='text-neutral-800 animate-bounce' size={50} />
    </button>
  );
};

export default ButtonDown;

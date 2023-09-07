import { BsArrowDownShort } from 'react-icons/bs'

const ButtonArrowDown = () => {
  const scrollDown = () => {
    const viewportHeight = window.innerHeight
    const scrollDistance = 0.91 * viewportHeight

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    })
  }
  return (
    <button onClick={scrollDown} className='cursor-pointer'>
      <BsArrowDownShort className='text-white animate-bounce' size={50} />
    </button>
  )
}
export default ButtonArrowDown

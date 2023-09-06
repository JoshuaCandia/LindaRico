//hooks
import { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ButtonArrowUp = () => {
  const [showButton, setShowButton] = useState(false)
  const handleButtonUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`z-50 hidden md:flex bg-BlueSemiDark justify-center rounded-full h-8 w-8 fixed bottom-5 right-5 transition-opacity transform ${
        showButton ? 'opacity-100 ' : 'opacity-0 '
      } duration-300 ease-in-out`}
    >
      <Button
        onClick={handleButtonUp}
        size='md'
        isIconOnly
        className='transition-all transform duration-300 ease-in-out'
      >
        <AiOutlineArrowUp size={22} color='white' />
      </Button>
    </div>
  )
}

export default ButtonArrowUp

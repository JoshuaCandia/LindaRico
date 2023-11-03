import ButtonContact from '../Buttons/ButtonContact'
import { SiCountingworkspro } from 'react-icons/si'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <footer className='flex flex-col text-white'>
      <section
        className={`flex flex-col justify-center items-center gap-7 bg-[url("../src/assets/contact-bg.jpg")] bg-cover xl:bg-center ${
          location.pathname === '/contacto'
            ? 'lg:h-[162px] h-[200px]'
            : 'h-[60vh] xl:h-[400px]'
        }`}
      >
        {location.pathname !== '/contacto' ? (
          <div className='flex flex-col justify-center items-center gap-7 p-7 h-full backdrop-blur-sm w-full text-white'>
            <div className='flex items-center gap-2 '>
              <SiCountingworkspro className='text-[27px]' />
              <p className='font-bold text-[24px]'>ALR</p>
            </div>
            <div className='flex items-center gap-2 '>
              <AiOutlineMail className='text-[27px]' />
              <p className='font-bold text-[24px]'>lindarico.seh@hotmail.com</p>
            </div>
            <div className='flex items-center gap-2 '>
              <AiOutlinePhone className='text-[27px]' />
              <p className='font-bold text-[24px]'>(+54) 11 3488 8325</p>
            </div>
            <ButtonContact />
          </div>
        ) : (
          <div className='flex justify-center items-center h-full backdrop-blur-sm brightness-75 w-full text-white'>
            <h3 className='font-customFontRoboto text-xl xl:text-3xl'>
              <SiCountingworkspro className='  text-[70px] ' />
            </h3>
          </div>
        )}
      </section>

      <section
        className={`bg-BlueLight h-[20vh] flex flex-col justify-center items-center p-4`}
      >
        <p className='text-white text-sm xl:text-xl'>
          Copyright © 2023-All Rights Reserved.
        </p>
        <p className='text-white text-sm'>ALR - Seguridad e Higiene</p>
      </section>
    </footer>
  )
}

export default Footer

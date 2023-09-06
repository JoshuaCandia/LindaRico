import ButtonContact from '../buttons/ButtonContact';
import { SiCountingworkspro } from 'react-icons/si';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <section className='bg-red-400 h-[60vh] flex flex-col justify-center items-center gap-7 bg-[url("../src/assets/contact-bg.jpg")] bg-cover xl:h-[400px] xl:bg-center'>
        <div className='flex flex-col justify-center items-center gap-7 p-7 h-full backdrop-blur-md w-full text-white'>
          <div className='flex items-center gap-2 '>
            <SiCountingworkspro className='text-[27px]' />
            <p className='font-bold text-[24px]'>LRA Consultora</p>
          </div>
          <div className='flex items-center gap-2 '>
            <AiOutlinePhone className='text-[27px]' />
            <p className='font-bold text-[24px]'>(+549) 11 3488 8325</p>
          </div>
          <div className='flex items-center gap-2 '>
            <AiOutlineMail className='text-[27px]' />
            <p className='font-bold text-[24px]'>lindarico.seh@hotmail.com</p>
          </div>
          <ButtonContact />
        </div>
      </section>
      <section className='bg-BlueLight h-[20vh] flex flex-col justify-center items-center p-4 gap-2'>
        <p className='text-white text-sm'>
          Copyright © 2023-All Rights Reserved.
        </p>
        <p className='text-white text-sm'>
          LRA - Consultoría en Seguridad e Higiene
        </p>
      </section>
    </footer>
  );
};

export default Footer;

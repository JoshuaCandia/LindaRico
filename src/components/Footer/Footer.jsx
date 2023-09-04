import ButtonContact from '../buttons/ButtonContact';
import { SiCountingworkspro } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <section className='bg-red-400 h-[60vh] flex flex-col justify-center items-center gap-7 bg-[url("../src/assets/contact-bg.jpg")] bg-cover'>
        <div className='flex items-center gap-2 text-white'>
          <SiCountingworkspro className='text-[27px]' />
          <p className='font-bold text-[24px]'>Linda Rico</p>
        </div>
        <ButtonContact />
      </section>
      <section className='bg-blue-500 h-[20vh] flex flex-col justify-center items-center p-4 '>
        <p className='text-white text-sm'>
          Copyright © 2023-All Rights Reserved.
        </p>
        <p className='text-white text-sm'>
        Linda Rico - Seguridad e
          Higiene
        </p>
      </section>
    </footer>
  );
};

export default Footer;

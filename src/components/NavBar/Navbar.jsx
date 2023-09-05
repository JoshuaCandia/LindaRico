import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

import { BiHomeAlt2 } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { SiCountingworkspro } from 'react-icons/si';
import DropDownNav from './DropDownNav';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      disableAnimation
      className='border-none sm:h-[100px]'
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <div className='flex items-center gap-2'>
            <SiCountingworkspro className='text-[27px]' />
            <p className='font-bold text-[24px]'>Linda Rico</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* NAVBAR PC */}
      <NavbarContent className='hidden gap-4 sm:flex ' justify='start'>
        <NavbarBrand>
          <div className='flex items-center gap-4'>
            <SiCountingworkspro className='text-[32px]' />
            <p className='font-bold text-[32px]'>Linda Rico</p>
          </div>
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='/' className='text-[24px]'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <DropDownNav />
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/contacto' className='text-[24px]'>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* NAVBAR MOBILE */}
      <NavbarMenu className='bg-white h-36 '>
        <NavbarMenuItem className='flex flex-col gap-2'>
          <Link className='w-full text-[22px]' href='/' size='lg'>
            <div className='flex items-center gap-4'>
              <BiHomeAlt2 />
              <p>Inicio</p>
            </div>
          </Link>
          <DropDownNav />
          <Link className='w-full text-[22px]' href='/contacto' size='lg'>
            <div className='flex items-center gap-4'>
              <RiContactsLine />
              <p>Contacto</p>
            </div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;

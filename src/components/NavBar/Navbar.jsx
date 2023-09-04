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

const NavBar = () => {
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <p className='font-bold text-inherit'>Linda Rico</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand>
          <p className='font-bold text-inherit'>Linda Rico</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='/inicio'>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/servicios' aria-current='page' color='foreground'>
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/contacto'>
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' href='/inicio' size='lg'>
            Inicio
          </Link>
          <Link className='w-full' href='/servicios' size='lg'>
            Servicios
          </Link>
          <Link className='w-full' href='/contacto' size='lg'>
            Contacto
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;

import {
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'
import { BiExitFullscreen } from 'react-icons/bi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { services } from '../../lib/data'
import { Link } from 'react-router-dom'

const DropDownNav = () => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className='p-0 bg-transparent data-[hover=true]:bg-transparent text-[22px]'
            radius='sm'
            variant='light'
            endContent={<RiArrowDropDownLine className='text-[32px]' />}
          >
            <BiExitFullscreen className='mr-4 sm:hidden' />
            Servicios
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label='ACME features'
        className=' bg-BlueLight text-white text-[22px] rounded-lg'
        itemClasses={{
          base: 'gap-4',
        }}
      >
        {services.map((service) => (
          <DropdownItem key={service.id} textValue={service.title}>
            <Link to={`${service.url}`}>{service.title}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownNav

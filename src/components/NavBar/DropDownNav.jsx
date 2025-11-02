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

const DropDownNav = ({ onItemClick }) => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className='p-0 bg-transparent data-[hover=true]:bg-transparent text-[18px] font-medium text-gray-700 hover:text-BlueNormal transition-colors'
            radius='sm'
            variant='light'
            endContent={<RiArrowDropDownLine className='text-[28px]' />}
            aria-label='Menú de servicios'
          >
            <BiExitFullscreen className='mr-2 sm:hidden text-xl' />
            Servicios
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label='Servicios disponibles'
        className='bg-white shadow-lg rounded-lg border border-gray-100'
        itemClasses={{
          base: 'gap-4 hover:bg-BlueSemiLight hover:text-white transition-colors rounded-md',
        }}
      >
        {services.map((service) => (
          <DropdownItem
            key={service.id}
            textValue={service.title}
            className='text-[16px] font-medium'
          >
            <Link
              to={`${service.url}`}
              className='block w-full'
              onClick={onItemClick}
              aria-label={`Ver servicios de ${service.title}`}
            >
              {service.title}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropDownNav

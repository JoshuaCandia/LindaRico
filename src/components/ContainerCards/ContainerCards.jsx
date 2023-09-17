//assets

//
import { services } from '../../lib/data'
//components
import Cards from '../Cards/Cards'

const ContainerCards = () => {
  return (
    <div className='w-full py-2 px-4 md:px-0 md:py-24 grid grid-cols-1 md:flex md:flex-1 gap-2'>
      {services.map((service) => (
        <Cards
          key={service.id}
          url={service.url}
          img={service.img}
          title={service.title}
        />
      ))}
    </div>
  )
}

export default ContainerCards

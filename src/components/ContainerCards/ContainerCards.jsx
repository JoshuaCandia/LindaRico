//assets

//
import { services } from '../../lib/data'
//components
import Cards from '../Cards/Cards'

const ContainerCards = () => {
  return (
    <div>
      <div className='py-8 md:py-24 grid grid-cols-1 md:flex md:flex-1 gap-2 mx-4 md:mx-0 my-2 md:my-0'>
        {services.map((service) => (
          <Cards
            key={service.id}
            url={service.url}
            img={service.img}
            title={service.title}
          />
        ))}
      </div>
    </div>
  )
}

export default ContainerCards

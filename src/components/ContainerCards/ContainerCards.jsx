//assets

//
import { services } from '../../lib/data'
//components
import Cards from '../Cards/Cards'

const ContainerCards = () => {
  return (
    <div>
      <div className='py-8 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-2 mx-4 my-2 md:mx-0 md:my-0'>
        {services.map((service) => (
          <Cards
            key={service.id}
            url={service.url}
            img={service.img}
            title={service.title}
            subTitle={service.subTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default ContainerCards

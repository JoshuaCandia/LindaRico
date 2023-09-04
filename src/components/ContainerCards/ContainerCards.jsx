//assets

//
import { services } from '../../lib/data';
//components
import Cards from '../Cards/Cards';

const ContainerCards = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-4 mx-4 my-2'>
        {services.map((service) => (
          <Cards
            key={service.id}
            url={service.url}
            img={service.img}
            title={service.title}
            subTitle={service.subTitle}
          />
        ))}
        <Cards />
      </div>
    </div>
  );
};

export default ContainerCards;

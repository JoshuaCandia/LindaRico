//assets

//
import { services } from '../../lib/data';
//components
import Cards from '../Cards/Cards';

const ContainerCards = () => {
  return (
    <div>
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
  );
};

export default ContainerCards;

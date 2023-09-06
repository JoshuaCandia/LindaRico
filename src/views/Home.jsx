//components
import ContainerCards from '../components/ContainerCards/ContainerCards';
import Header from '../components/Header/Header';
import Slogan from '../components/Slogan/Slogan';

const Home = () => {
  return (
    <div className=' scroll-smooth'>
      <Header />
      <main>
        <Slogan />
        <div
          id='servicios'
          className='my-14  flex flex-col justify-center items-center'
        >
          <h3 className='font-customFontInter text-2xl p-4 font-bold'>
            Servicios Destacados
          </h3>
          <ContainerCards />
        </div>
      </main>
    </div>
  );
};

export default Home;

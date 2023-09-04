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
          className='mt-12 pt-12 bg-blue-gray-600 flex flex-col justify-center items-center'
        >
          <h3 className='text-2xl p-6 text-white font-bold'>
            Servicios Destacados
          </h3>
          <ContainerCards />
        </div>
      </main>
    </div>
  );
};

export default Home;

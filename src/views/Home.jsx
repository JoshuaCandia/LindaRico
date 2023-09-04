//components
import ContainerCards from '../components/ContainerCards/ContainerCards';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/Navbar';
import Slogan from '../components/Slogan/Slogan';
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <main className='h-100% '>
        <Slogan />
        <ContainerCards />
      </main>
    </div>
  );
};

export default Home;

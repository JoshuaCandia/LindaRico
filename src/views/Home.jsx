//components
import ContainerCards from '../components/ContainerCards/ContainerCards';
import Header from '../components/Header/Header';
import Slogan from '../components/Slogan/Slogan';
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Slogan />
        <ContainerCards />
      </main>
    </div>
  );
};

export default Home;

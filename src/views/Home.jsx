import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/Navbar';
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <div className='h-[91vh]  bg-yellow-500'></div>
        <div className='h-screen  bg-blue-500'></div>
      </main>
    </div>
  );
};

export default Home;

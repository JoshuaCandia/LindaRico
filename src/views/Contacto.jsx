import ContactContainerCards from '../components/ContainerCards/ContactContainerCards';

const Contacto = () => {
  return (
    <div className='h-screen flex flex-col items-center gap-8 pt-4'>
      <h1 className='text-4xl font-bold text-center'>Contacto</h1>
      <ContactContainerCards />
    </div>
  );
};

export default Contacto;

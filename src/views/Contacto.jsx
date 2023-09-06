import ContactContainerCards from '../components/ContainerCards/ContactContainerCards';

const Contacto = () => {
  return (
    <div className='h-full flex flex-col items-center gap-8 py-4 text-center'>
      <h1 className='text-4xl font-bold border-b-2 border-BlueLight'>
        Contacto
      </h1>
      <h3>Contactate con nosotros para darte un mejor asesoramiento</h3>
      <ContactContainerCards />
    </div>
  );
};

export default Contacto;

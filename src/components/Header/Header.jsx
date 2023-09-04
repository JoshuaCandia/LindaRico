import ButtonDown from '../buttons/ButtonDown';

const Header = () => {
  return (
    <header className='h-[91vh] bg-[url("./assets/mujer-plano.jpg")] bg-cover bg-center flex flex-col justify-between items-center '>
      <div></div>
      <div className='bg-scroll backdrop-blur-sm w-[95%] bg-white/70 rounded-lg text-white flex flex-col justify-center items-center gap-4'>
        <h1 className='text-neutral-900 text-3xl flex gap-2'>
          <span className='font-bold'>Linda</span>
          <span className='font-bold'>Rico</span>
        </h1>
        <div className='text-neutral-600 font-semibold text-sm flex flex-col justify-center items-center gap-1'>
          <p>Servicios integrales a empresas.</p>
          <p>Licenciada de Seguridad Higiene y Medio Ambiente.</p>
        </div>
      </div>
      <ButtonDown />
    </header>
  );
};

export default Header;

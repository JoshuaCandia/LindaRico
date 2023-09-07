import ButtonContact from '../Buttons/ButtonContact'
const HeaderServices = () => {
  return (
    <section className=" flex flex-col gap-7 justify-center items-center bg-[url('../../src/assets/mujer-notebook.jpg')]  bg-[length:900px] bg-fixed bg-no-repeat h-[400px]">
      <div className='flex flex-col items-center justify-center gap-7 h-full w-full backdrop-blur-[2px]'>
        <h1 className='font-customFontInter text-4xl font-bold'>Servicios</h1>
        <ButtonContact />
      </div>
    </section>
  )
}

export default HeaderServices

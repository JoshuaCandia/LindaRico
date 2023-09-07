//components
import ContainerCards from '../components/ContainerCards/ContainerCards'
import Header from '../components/Header/Header'
import Slogan from '../components/Slogan/Slogan'
//hooks
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className=' scroll-smooth'>
      <Header />
      <main>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Slogan />
            </motion.div>
          )}
        </InView>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              id='servicios'
              className='my-14  flex flex-col justify-center items-center'
            >
              <h3 className='font-customFontInter text-2xl p-4 font-bold'>
                Servicios Destacados
              </h3>
              <ContainerCards />
            </motion.div>
          )}
        </InView>
      </main>
    </div>
  )
}

export default Home

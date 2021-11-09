import React from 'react'
import { CarsStateData } from '../../pages'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './styles.module.scss'
import Car from './components/Car'

interface CarGridProps {
  cars: CarsStateData[]
}

const CarGrid: React.FC<CarGridProps> = ({ cars }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.section layout className={styles.carsContainer}>
        {cars.map((car, index) => (
          <Car key={car.id} car={car} index={index} />
        ))}
      </motion.section>
    </AnimatePresence>
  )
}

export default CarGrid

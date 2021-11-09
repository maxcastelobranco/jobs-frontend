import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { CarApiData, useCars } from '../hooks/useCars'
import { LinearProgress } from '@mui/material'
import Header from '../components/Header'
import { INITIAL_DISTANCE, INITIAL_DURATION } from '../utils/carFormHelpers'
import { calculateRentalPrice } from '../utils/calculateRentalPrice'
import CarGrid from '../components/CarGrid'
import ErrorComponent from '../components/ErrorComponent'

export interface CarsStateData extends CarApiData {
  rentalPrice: number
}

const Home: NextPage = () => {
  const [renderedCars, setRenderedCars] = useState<CarsStateData[]>([])
  const [duration, setDuration] = useState(INITIAL_DURATION)
  const [distance, setDistance] = useState(INITIAL_DISTANCE)

  const { cars, isLoading, isError } = useCars({ duration, distance })

  useEffect(() => {
    if (cars) {
      const formattedCars = calculateRentalPrice({
        duration,
        distance,
        cars,
      })

      setRenderedCars(formattedCars)
      console.log(formattedCars.length)
    } else {
      setRenderedCars([])
    }
  }, [cars, distance, duration])

  return (
    <main>
      <Header
        setDuration={setDuration}
        setDistance={setDistance}
        duration={duration}
        distance={distance}
      />
      {isLoading && <LinearProgress />}
      {isError && <ErrorComponent />}
      <CarGrid cars={renderedCars} />
    </main>
  )
}

export default Home

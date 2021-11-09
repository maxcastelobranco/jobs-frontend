import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { CarApiData, useCars } from '../hooks/useCars'
import { LinearProgress, Typography } from '@mui/material'
import Header from '../components/Header'
import { INITIAL_DISTANCE, INITIAL_DURATION } from '../utils/carFormHelpers'
import { calculateRentalPrice } from '../utils/calculateRentalPrice'
import CarGrid from '../components/CarGrid'

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

  if (isError) {
    return <Typography>Server is not running</Typography>
  }

  return (
    <main>
      <Header
        setDuration={setDuration}
        setDistance={setDistance}
        duration={duration}
        distance={distance}
      />
      {(isLoading || !cars) && <LinearProgress />}
      <CarGrid cars={renderedCars} />
    </main>
  )
}

export default Home

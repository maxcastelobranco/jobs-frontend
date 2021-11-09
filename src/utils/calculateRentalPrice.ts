import { CarApiData } from '../hooks/useCars'
import { INITIAL_DISTANCE, INITIAL_DURATION } from './carFormHelpers'
import { CarsStateData } from '../pages'

interface CalculateRentalPriceDTO {
  duration: number
  distance: number
  cars: CarApiData[]
}

export const calculateRentalPrice = ({
  duration = INITIAL_DURATION,
  distance = INITIAL_DISTANCE,
  cars,
}: CalculateRentalPriceDTO) => {
  return cars.map((carData) => {
    let rentalPrice = 0

    for (let i = 0; i < duration; i++) {
      if (i === 0) {
        rentalPrice += carData.pricePerDay
      } else if (i > 0 && i < 4) {
        rentalPrice += carData.pricePerDay * 0.9 // 10%
      } else if (i >= 4 && 1 < 10) {
        rentalPrice += carData.pricePerDay * 0.7 // 30%
      } else if (i > 10) {
        rentalPrice += carData.pricePerDay * 0.5 // 50%
      }
    }

    rentalPrice += carData.pricePerKm * distance

    return {
      ...carData,
      rentalPrice,
    } as CarsStateData
  })
}

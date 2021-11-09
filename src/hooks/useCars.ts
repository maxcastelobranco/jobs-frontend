import useSWR from 'swr'
import { swrFetcher } from '../services/api'

export interface CarApiData {
  id: number
  picturePath: string
  brand: string
  model: string
  pricePerDay: number
  pricePerKm: number
  availability: {
    maxDuration: number
    maxDistance: number
  }
}

interface UseCarsDTO {
  duration: number
  distance: number
}

export const useCars = ({ duration, distance }: UseCarsDTO) => {
  const { data, error } = useSWR<CarApiData[]>(
    `/cars.json?duration=${duration}&distance=${distance}`,
    swrFetcher
  )

  return {
    cars: data,
    isLoading: !error && !data,
    isError: error,
  }
}

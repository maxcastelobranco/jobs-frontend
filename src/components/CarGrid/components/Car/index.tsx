import React from 'react'
import { CarsStateData } from '../../../../pages'
import { motion, Variants } from 'framer-motion'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CarRental, PriceChange } from '@mui/icons-material'
import { formatCurrency } from '../../../../utils/formatCurrency'

interface CarProps {
  car: CarsStateData
  index: number
}

const Car: React.FC<CarProps> = ({
  car: {
    brand,
    model,
    pricePerKm,
    pricePerDay,
    rentalPrice,
    picturePath,
    availability: { maxDuration, maxDistance },
  },
  index,
}) => {
  const carName = `${brand}, ${model}`

  const carVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.06,
      },
    },
  }

  return (
    <motion.div
      variants={carVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      layout
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={picturePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <CarRental /> {carName}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="justify">
            <PriceChange /> {carName} is available to rent on a maximum of{' '}
            {maxDuration} days and {maxDistance} kms to travel. It costs{' '}
            {formatCurrency(pricePerKm)} per km traveled,{' '}
            {formatCurrency(pricePerDay)} per day of usage, and with the current
            selected duration and distances, it would total{' '}
            {formatCurrency(rentalPrice)} to rent this vehicle.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Car

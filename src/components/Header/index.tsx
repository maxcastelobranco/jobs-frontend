import React, { Dispatch, SetStateAction } from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import styles from './styles.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import DurationController from './components/DurationController'
import DistanceController from './components/DistanceController'

interface HeaderProps {
  setDuration: Dispatch<SetStateAction<number>>
  setDistance: Dispatch<SetStateAction<number>>
  duration: number
  distance: number
}

interface FormValues {
  duration: number
  distance: number
}

const Header: React.FC<HeaderProps> = ({
  setDistance,
  setDuration,
  duration,
  distance,
}) => {
  const { handleSubmit, control } = useForm()

  const onSubmit: SubmitHandler<FormValues> = async ({
    duration,
    distance,
  }) => {
    setDuration(duration)
    setDistance(distance)
  }

  return (
    <AppBar position="sticky" sx={{ padding: '1.5rem 0' }}>
      <Toolbar>
        <Typography variant="h5">Jobs Frontend Challenge</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <DurationController control={control} duration={duration} />
          <DistanceController control={control} distance={distance} />
          <Button type="submit">Filter Available Cars</Button>
        </form>
      </Toolbar>
    </AppBar>
  )
}

export default Header

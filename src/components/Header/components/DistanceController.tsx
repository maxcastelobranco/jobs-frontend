import React from 'react'
import { Control, Controller } from 'react-hook-form'
import formOptions from '../../../utils/carFormHelpers'
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

interface DistanceControllerProps {
  control: Control
  distance: number
}

const { distanceOptions } = formOptions

const DistanceController: React.FC<DistanceControllerProps> = ({
  control,
  distance,
}) => {
  return (
    <Controller
      name="distance"
      control={control}
      defaultValue={distance}
      render={({ field }) => (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="distance-label">Distance</InputLabel>
            <Select labelId="distance-label" variant="filled" {...field}>
              {distanceOptions.map(({ value, label }) => {
                return (
                  <MenuItem key={label} value={value}>
                    {label}
                  </MenuItem>
                )
              })}
            </Select>
            <FormHelperText>Distance planned on driving, in km</FormHelperText>
          </FormControl>
        </Box>
      )}
    />
  )
}

export default DistanceController

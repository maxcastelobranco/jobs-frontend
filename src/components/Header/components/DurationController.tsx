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

interface DurationControllerProps {
  control: Control
  duration: number
}

const { durationOptions } = formOptions

const DurationController: React.FC<DurationControllerProps> = ({
  control,
  duration,
}) => {
  return (
    <Controller
      name="duration"
      control={control}
      defaultValue={duration}
      render={({ field }) => (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="duration-label">Duration</InputLabel>
            <Select labelId="duration-label" variant="filled" {...field}>
              {durationOptions.map(({ value, label }) => {
                return (
                  <MenuItem key={label} value={value}>
                    {label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormHelperText>Number of days the car will be used</FormHelperText>
        </Box>
      )}
    />
  )
}

export default DurationController

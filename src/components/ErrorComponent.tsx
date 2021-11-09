import React from 'react'
import { Typography } from '@mui/material'
import { Warning } from '@mui/icons-material'

const ErrorComponent: React.FC = () => {
  return (
    <Typography
      color="error"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '1rem',
      }}
    >
      <Warning color="error" /> Server is not running
    </Typography>
  )
}

export default ErrorComponent

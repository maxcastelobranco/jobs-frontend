/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const cars = require('./cars.json')
const app = express()

const PORT = 3001

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/cars.json', (req, res) => {
  let availableCars = cars.map((car, i) => {
    const id = i + 1
    return { id, picturePath: `/pictures/${id}.jpg`, ...car }
  })

  if (req.query.duration) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.duration, 10) <= availability.maxDuration
    )
  }

  if (req.query.distance) {
    availableCars = availableCars.filter(
      ({ availability }) =>
        parseInt(req.query.distance, 10) <= availability.maxDistance
    )
  }

  res.json(availableCars)
})

app.listen(PORT, () => {
  // Clear console
  process.stdout.write(
    process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H'
  )

  console.log('\x1b[32m%s\x1b[0m', 'App started successfully!')
  console.log()
  console.log('You can now view it in your browser.')
  console.log()
  console.log(`  http://localhost:${PORT}`)
  console.log()
  console.log("You'll find more instruction in the README file.")
})

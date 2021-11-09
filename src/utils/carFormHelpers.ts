const durationOptions = Array.from(new Array(30).keys()).map((i) => {
  const value = i + 1
  const label = value.toString()

  return {
    value,
    label,
  }
})
const distanceOptions: { value: number; label: string }[] = ([] = [])

for (let i = 50; i <= 3000; i += 50) {
  distanceOptions.push({
    value: i,
    label: i.toString(),
  })
}

export const INITIAL_DURATION = 1
export const INITIAL_DISTANCE = 50

const formOptions = {
  durationOptions,
  distanceOptions,
}

export default formOptions

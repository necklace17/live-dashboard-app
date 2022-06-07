export function getRandomArbitrary(minValue = 1, maxValue = 100) {
  return Math.random() * (maxValue - minValue) + minValue;
}

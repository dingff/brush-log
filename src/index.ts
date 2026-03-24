type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan'
type Brush = {
  [p in Color]: (...rest: any) => any
}
type ColorMap = {
  [p in Color]: string
}
const getCaller = () => {
  try {
    const stack = new Error().stack
    if (!stack) {
      return 'anonymous'
    }
    const line = stack.split('\n')[3]?.trim()
    if (!line) {
      return 'anonymous'
    }
    const match = line.match(/at\s+([^\s(]+)/)
    return match?.[1] ?? 'anonymous'
  } catch {
    return 'anonymous'
  }
}
const colorMap: ColorMap = {
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  yellow: '#FFFF00',
  blue: '#0000FF',
  magenta: '#FF00FF',
  cyan: '#00FFFF',
}
const inverseColorMap: ColorMap = {
  black: '#fff',
  red: '#fff',
  green: '#000',
  yellow: '#000',
  blue: '#fff',
  magenta: '#fff',
  cyan: '#000',
}
const mixStyles = (color: Color) => {
  const styles = `
  padding: 0px 4px;
  border-radius: 4px;
  background: ${colorMap[color]};
  color: ${inverseColorMap[color]};
  `
  return styles
}
const createBrush = (color: Color) => {
  return (...rest: any) => {
    const text = typeof rest[0] === 'string' ? rest.shift() : getCaller()
    return [`%c${text}`, mixStyles(color), ...rest]
  }
}
const brush: Brush = {
  black: createBrush('black'),
  red: createBrush('red'),
  green: createBrush('green'),
  yellow: createBrush('yellow'),
  blue: createBrush('blue'),
  magenta: createBrush('magenta'),
  cyan: createBrush('cyan'),
}
export const { black, red, green, yellow, blue, magenta, cyan } = brush
export default brush

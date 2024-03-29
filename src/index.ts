import { IBrush, IColorMap, IColor, IConfig } from './types'

const brush: IBrush = {} as IBrush
let config: IConfig = {
  radial: 100,
  fontSize: 'inherit'
}
const getCaller = () => {
  const error = new Error()
  const name = (error.stack as string).split('\n')[3].trim().split(' ')[1]
  return name
}
const colorMap: IColorMap = {
  black: '#000000',
  red: '#FF0000',
  green: '#00FF00',
  yellow: '#FFFF00',
  blue: '#0000FF',
  magenta: '#FF00FF',
  cyan: '#00FFFF',
}
const inverseColorMap: IColorMap = {
  black: '#fff',
  red: '#fff',
  green: '#000',
  yellow: '#000',
  blue: '#fff',
  magenta: '#fff',
  cyan: '#000',
}
const mixStyles = (color: IColor) => {
  const styles = `
  padding: 0px 4px;
  border-radius: 4px;
  background: radial-gradient(${colorMap[color]} ${config.radial}%, transparent);
  color: ${inverseColorMap[color]};
  font-size: ${config.fontSize};
  `
  return styles
}
Object.keys(colorMap).forEach((key) => {
  brush[key as IColor] = (...rest) => {
    const text = typeof rest[0] === 'string' ? rest.shift() : getCaller()
    return [`%c${text}`, mixStyles(key as IColor), ...rest]
  }
})
export const mergeConfig = (options: IConfig) => {
  config = { ...config, ...options }
}
export const {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
}: IBrush = brush
export default brush
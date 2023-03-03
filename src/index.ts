import { IBrush, IColorMap, IColor, IConfig } from './types'

const brush: IBrush = {} as IBrush
let config: IConfig = {
  customText: false,
}
const getCaller = () => {
  let error: any = null
  try {
    throw Error()
  } catch (e) {
    error = e
  }
  const name = error.stack.split('\n')[3].trim().split(' ')[1]
  return name
}
const colorMap: IColorMap = {
  black: '#000',
  red: '#FF0000',
  green: '#008000',
  yellow: '#FFFF00',
  blue: '#0366F1',
  magenta: '#FF00FF',
  cyan: '#00FFFF',
}
const inverseColorMap: IColorMap = {
  black: '#fff',
  red: '#fff',
  green: '#fff',
  yellow: '#000',
  blue: '#fff',
  magenta: '#fff',
  cyan: '#000',
}
const mixStyles = (color: IColor) => {
  const styles = `
  padding: 0px 4px;
  border-radius: 4px;
  background-color: ${colorMap[color]};
  color: ${inverseColorMap[color]};
  `
  return styles
}
Object.keys(colorMap).forEach((key) => {
  brush[key as IColor] = (...rest) => {
    let text = ''
    if (config.customText && typeof rest[0] === 'string') {
      text = rest.shift()
    } else {
      text = getCaller()
    }
    return [`%c${text}`, mixStyles(key as IColor), ...rest]
  }
})
brush.setConfig = (options) => {
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
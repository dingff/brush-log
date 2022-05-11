const getStyleName = (name) => {
  return name.replace(/([A-Z])/g, "-$1").toLowerCase()
}
const mixStyles = (bg) => {
  const globalStyles = Object.entries(window.brushLog || {}).reduce((acc,curr) => {
    return `${acc}${getStyleName(curr[0])}:${curr[1]};`
  }, '')
  const styles = `
    color: #000;
    margin: 2px 0 4px 0;
    border-radius: 14px;
    padding: 6px 10px;
    font-weight: bold;
    background: #CDE5F9;
    border: 1px dashed #000;
    ${globalStyles}
    ${bg ? `background: ${bg};` : ''}
    `
  return styles
} 
const log = (title, data, bg) => {
  if (Object.prototype.toString.call(data) === '[object Object]') {
    console.groupCollapsed(`%c${title}`, mixStyles(bg), data)
    console.table(data)
    console.groupEnd()
  } else {
    console.log(`%c${title}`, mixStyles(bg), data)
  }
}
export default log
export const brush = (title, data, bg) => {
  return [`%c${title}`, mixStyles(bg), data]
}
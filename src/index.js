const getStyleName = (name) => {
  return name.replace(/([A-Z])/g, "-$1").toLowerCase()
}
const log = (title, data, bg) => {
  const globalStyles = Object.entries(window.brushLog || {}).reduce((acc,curr) => {
    return `${acc}${getStyleName(curr[0])}:${curr[1]};`
  }, '')
  const styles = `
    color: #000;
    margin: 2px 0 4px 0;
    border-radius: 14px;
    padding: 4px 10px;
    font-weight: bold;
    background: skyblue;
    border: 2px dashed #000;
    ${globalStyles}
    ${bg ? `background: ${bg};` : ''}
    `
  if (Object.prototype.toString.call(data) === '[object Object]') {
    console.group(`%c${title}`, styles, data)
    console.table(data)
    console.groupEnd()
  } else {
    console.log(`%c${title}`, styles, data)
  }
}
export default log
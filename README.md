# brush-log
给控制台来点颜色

[![NPM version](https://img.shields.io/npm/v/brush-log.svg?style=flat)](https://npmjs.org/package/brush-log)
## 安装
```bash
npm install brush-log --save
```
## 使用
```javascript
import brush from 'brush-log'

console.log(...brush.black('对象', { a: 1 }))
```
或者
```javascript
import { black } from 'brush-log'

console.log(...black('对象', { a: 1 }))
```
### 支持的颜色

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`

## 个性化
在项目入口文件中配置一次即可。
```javascript
import brush from 'brush-log'

brush.setConfig({
  customText: true,
})
```
##### customText

Type: `boolean`

默认情况下，brush-log 会输出调用函数名，若要修改此行为，将 customText 设为 true，brush-log 将以输入的第一个参数作为输出。注意，此时第一个参数必须为字符串。
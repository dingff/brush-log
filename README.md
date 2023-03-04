# brush-log
给控制台来点颜色！

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

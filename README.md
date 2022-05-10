# brush-log

beautify your console

## Installation
```
$ npm install brush-log --save
```

## Usuage
```javascript
import log from 'brush-log';
log('列表', { a: 1 });

// 你可以快速自定义当前打印的背景色
log('列表', { a: 1 }, 'red');

// 你也可以全局设定brush-log的表现，注意要使用驼峰属性名
window.brushLog = {
  backgroundColor: 'pink',
  border: '2px dashed #000',
}
```
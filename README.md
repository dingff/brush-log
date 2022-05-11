# brush-log

beautify your console

## Installation
```
$ npm install brush-log --save
```

## Usuage
```javascript
import log from 'brush-log';

// 简单用法
log('列表', { a: 1 });

// 你可以快速自定义当前打印的背景色
log('列表', { a: 1 }, 'red');

// 你也可以全局设定brush-log的表现，注意要使用驼峰属性名
window.brushLog = {
  backgroundColor: 'pink',
  border: '2px dashed #000',
}

// 或许你发现上面的写法导致控制台打印的代码行数不太准，试试下面这种写法
import { brush } from 'brush-log';

console.log(...brush('列表', { a: 1 }, 'red'));

```
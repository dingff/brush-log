# brush-log

> Faster debugging with color logs

## Install

```bash
npm i brush-log
```

## Usage

```javascript
import brush from 'brush-log'

console.log(...brush.black('Hello', { a: 1 }))
```

Or

```javascript
import { black } from 'brush-log'

console.log(...black('Hello', { a: 1 }))
```

#### Supported colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`

## Options

```javascript
import { mergeConfig } from 'brush-log'

mergeConfig({
  radial: 0,
})
```

#### radial

Type: `number`
Default: `100`

Starting percentage of a radial gradient, ranging from 0 to 100. The smaller the value, the lighter the color.

#### fontSize

Type: `string`
Default: `inherit`

The font size of the output.

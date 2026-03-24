# brush-log

> Faster debugging with color logs

## Install

```bash
npm i brush-log
```

## Usage

Works in browser consoles that support `%c` styling.

```javascript
import brush from 'brush-log'

console.log(...brush.black('Hello', { a: 1 }))
```

Or

```javascript
import { black } from 'brush-log'

console.log(...black('Hello', { a: 1 }))
```

### Supported colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`

## License

MIT

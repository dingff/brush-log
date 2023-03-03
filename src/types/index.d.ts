export type IColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan';
export type IBrush = {
  [p in IColor]: (...rest: any) => any;
}
export type IColorMap = {
  [p in IColor]: string;
}

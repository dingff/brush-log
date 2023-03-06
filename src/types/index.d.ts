export type IColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan';
export type IBrush = {
  [p in IColor]: (...rest: any) => any;
}
export type IColorMap = {
  [p in IColor]: string;
}
export type IConfig = {
  /** 径向渐变的起始百分比，范围 0～100 */
  radial: number;
}
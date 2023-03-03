export type IColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan';
export type IBrush = {
  [p in IColor]: (...rest: any) => any;
} & {
  setConfig: (options: IConfig) => any;
}
export type IColorMap = {
  [p in IColor]: string;
}
export type IConfig = {
  customText: boolean;
}
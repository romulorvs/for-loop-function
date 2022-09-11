import './index.js'

declare global {
  interface Array<T> {
    for(
      fn: (element: {
        curr: T;
        index: number;
        arr: T[];
        stop: () => never;
        jump: () => never;
      }) => void,
      options?: {
        start?: number;
        condition?: (i: number, arr: T[]) => boolean;
        iterator?: (i: number) => number;
      }
    ): void;
  }
}
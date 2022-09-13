import './index.js'

declare global {
  interface Array<T> {
    for(
      fn: (
        curr: T,
        element: {
          stop: () => never;
          jump: () => never;
          i: number;
          arr: T[];
        }
      ) => void,
      options?: {
        start?: number;
        condition?: (i: number, arr: T[]) => boolean;
        iterator?: (i: number) => number;
      }
    ): void;
  }
}
export type RippleProps = {
  size: number,
} & DurationProp;

export type DurationProp = { duration: number };

export type Point = {
  x: number;
  y: number;
};

export type RippleHookType =
  | { shouldRender: false }
  | { shouldRender: true } & {
    size: number,
    ripples: RippleSet[],
    duration: number
  };

export type RippleHookProps = {
  disable?: boolean,
  duration?: number,
};

export type RippleSet = {
  point: Point,
  id: string,
};

// const add = (a: number, b?: number): number => a + (b ? b : 0)

// const add = (a: number, ...rest: number[]): number => rest.reduce(((a, b) => a + b), a)

// 重载

interface Directions {
  top: number,
  right: number,
  bottom: number,
  left: number
}

function assigned(all: number): Directions
function assigned(topAndBottom: number, leftAndRight: number): Directions
function assigned(top: number, right: number, bottom: number, left: number): Directions

function assigned(a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

assigned(1)
assigned(1, 2)
// assigned(1, 2, 3) 报错
assigned(1, 2, 3, 4)


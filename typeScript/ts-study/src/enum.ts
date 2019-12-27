// enum Direction {
//   Up = 'up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// console.log(Direction.Down)

// 异构枚举
enum yg {
  No = 0,
  Yes = 'Yes'
}

// 反向映射
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction[Direction['Up']]) // Up

// 联合枚举
// enum Direction {
//   Up = 'up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
enum Direction {
  Up,
  Down,
  Left,
  Right
}
declare let aaa: Direction
// const aaa: number = 0
// console.log(aaa === Direction['Up'])
// type c = 0
// declare let bbb: c
// console.log(bbb)
// // bbb = 1
// bbb = Direction['Up']
// console.log(bbb)

// enum Animal {
//   Dog,
//   Cat
// }
// aaa = Direction.Up
// aaa = Animal.Dog
enum Direction {
  Center = 1
}
console.log(Direction[1])
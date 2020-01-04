// 类型断言，类型守卫
// interface Person {
//   name: string,
//   age: number
// }

// const person = {} as Person // 类型断言会影响代码提示
// person.name = 'wn'
// person.age = 20

// console.log(person)

// 双重断言
// const person = {} as any as Person
// person.name = 'wn'

// 类型守卫
// class Person {
//   name = 'wn'
//   age = 18
// }

// class Animal {
//   name = 'petty'
//   color = 'pink'
// }

// function getSomething(arg: Person | Animal) {
  // if (arg instanceof Animal) {
  //   console.log(arg.color)
  //   console.log(arg.age)
  // }
  // if (arg instanceof Person) {
  //   console.log(arg.color)
  //   console.log(arg.age)
  // }

  // if ('age' in arg) {
  //   console.log(arg.color)
  //   console.log(arg.age)
  // }
  // if ('color' in arg) {
  //   console.log(arg.color)
  //   console.log(arg.age)
  // }
//   if ('name' in arg) {
//     console.log(arg.name)
//   }
// }

// getSomething({
//   name: 'cvds',
//   color: 'ewf'
// })

// 字面量类型守卫
// type Foo = {
//   kind: 'foo', // 字面量类型
//   foo: number
// }

// type Bar = {
//   kind: 'bar',
//   bar: number
// }

// function diStuff(arg: Foo | Bar) {
//   if (arg.kind === 'foo') {
//     console.log(arg.foo)
//     console.log(arg.bar)
//   }
// }
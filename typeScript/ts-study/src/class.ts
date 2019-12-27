// 抽象类

abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming this earth..')
  }
}

// class Cat extends Animal {
//   makeSound() {
//     console.log('miao miao')
//   }
// }

// // const animal = new Animal()
// const cat = new Cat()
// cat.makeSound()

// 访问限定符

class Cat {
  public run() {
    console.log('跑起来..')
  }
  private eat() {
    console.log('吃起来..')
  }
  protected sleep() {
    console.log('睡觉吧..')
  }
}

class GTR extends Cat {
  init() {
    this.run()
  }
}
const cat = new Cat()
cat.run()
// cat.eat() // 私有方法
// cat.sleep() // 受保护的方法

// const car = new Cat()
// car.run()
const gtr = new GTR()
// gtr.init()

gtr.run()
// gtr.sleep() 报错


// class 可以作为接口


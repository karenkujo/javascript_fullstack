//  process 进程
const palyerAction = process.argv[2];
console.log(palyerAction);

if (palyerAction != 'rock' && palyerAction != 'paper' && palyerAction != 'scissor') {
    throw new Error('出错了，再出过');
}
else {
    let computerAction;
    let random = Math.random() * 3;
    if (random < 1) {
        computerAction = 'rock';
        console.log('电脑出了石头')
    } else if (random > 2) {
        computerAction = 'scissor';
        console.log('电脑出了剪刀')
    } else {
        computerAction = 'paper';
        console.log('电脑出了布')
    }

    if (palyerAction === computerAction) {
        console.log('平局')
    } else if((palyerAction == 'scissor' && computerAction == 'rock') || 
    (palyerAction == 'rock' && computerAction == 'paper') ||
    (palyerAction == 'paper' && computerAction == 'scissor')){
        console.log('你输了')
    } else {
        console.log('你赢了')
    }

}
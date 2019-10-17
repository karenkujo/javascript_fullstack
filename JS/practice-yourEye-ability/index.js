const startBtn = document.querySelector('#page-one button');
const pageOne = document.querySelector('#page-one');
startBtn.addEventListener('click',function() {
    //关掉第一屏
    pageOne.style.display = 'none';
    init();
    nextStep ();
})

//初始化
let time = 30;
let step = 0;

function init() {
    let interval = setInterval(function(){
        if (time === 0) {
            //停止
            clearInterval(interval);
        }
        else {
            time --;
        //DOM 操作
        document.getElementById('timer')
        .innerHTML = time;
        }
    },'1000')
    //画格子
    // step 1   2 * 2
    // step 2   3 * 3
    // ...
}
function nextStep() {
    step ++;
    let col = step + 1;
    let blockWidth = (100 / col) - 2;
    let [normalColor, specialColor] = getColor(step);
    let arr = [];
    for (let i = 0; i < col * col; i++){
        //生成格子
        let item = `
        <div class="block" style="background-color: #${normalColor}; width: ${blockWidth}%">
            <div class="block-inner"></div>
        </div>
        `;
        arr.push(item);
    }
    let randomIndex = Math.floor(Math.random() * col * col);
    arr[randomIndex] = `
    <div class="block"  id="special" style="background-color: #${specialColor}; width: ${blockWidth}%">
        <div class="block-inner"></div>
    </div>
    `;
    document.querySelector('.screen').innerHTML = arr.join('');
    console.log(document.querySelector('.screen'))
    document.getElementById('special').addEventListener('click', function(){
        nextStep();
    })
}

/**
 * 根据关卡等级返回相应的一般颜色和特殊颜色
 * @param {number} step 关卡
 */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
      m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
      getRandomColorNumber(m[0], random) +
      getRandomColorNumber(m[1], random) +
      getRandomColorNumber(m[2], random);
    return [color, specialColor];
  }
  
  function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
      return "ff";
    } else if (temp > 16) {
      return temp.toString(16);
    } else if (temp > 0) {
      return "0" + temp.toString(16);
    } else {
      return "00";
    }
  }
  // 随机颜色 min 大于16
  function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
  }
  // 随机数
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
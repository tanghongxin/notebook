# 004.jQuery动画

# 动画

## 动画效果（基于animate API）

1. 基本 除了show()和hide() 其他动画都有默认时间

- show(time[,effect, cb]) // 其他动画也能达到display:none到有的效果
- hide()
- toggle()

1. 滑动

- slideDown()
- slideUp()
- slideToggle()

1. 淡入淡出

- fadeIn()
- fadeOut()
- fadeTo(time, opacty[effect, cb]) 切换到指定透明度
- fadeToggle()

1. 自定义

- animate({param:value}[, speed, effect, cb])
- stop([false, false]) （结束当前动画以便）立马开始下次动画 // !!!
- delay()
- finish()

## 同步vs异步

### 动画是同步还是异步

> 案例

```
$(document).ready(function() {    function wait(time) {        let flag = true;        let old = (new Date()).getTime();        let cur;        while (flag) {            cur = (new Date()).getTime();            if (cur - old === time) {                flag = false            }        }    } // 当浏览器在执行JS代码（阻塞）时，不能同时做其他任何事情（包括解析DOM）    $('div').hide(5000); // 动画直接跳到第3s的时候 然后执行2s后结束    wait(3000);         })
```

原理（个人理解）：

1. 动画初始化时根据设置的时间与变化量计算绘制速率，一个完整的动画由多次小动画连接而成
2. 小动画的间隔绘制，即是一次setInterval的执行
3. 由于setInterval是异步，入栈执行的时间不固定，所以动画速率并非简单的“距离/时间”，而需要在每绘制一次小动画后重新计算
4. 每重新计算后，setInterval被重置
5. （题目中while结束时setInterval已被重置到第3s时的状态了，所以一个动画是多次异步事件！）

### 执行顺序

> 案例

```
// 先执行hide$('#five').animate({'width': 300,'height': 300}, 2000, 'linear').hide();console.log($(this).queue().length); // 输出1// 依次执行$('#five').animate({'width': 300,'height': 300}, 2000, 'linear').hide(0);console.log($(this).queue().length); // 输出2
```

原理（个人理解）：

1. show()与hide()是特例，因为css本身不支持display的动画
2. show()与show(0)等效，但影响不一样
3. show(0)会入队列，show()不会入队列，但都是异步
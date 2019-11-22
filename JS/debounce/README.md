# 防抖
触发事件时 延迟执行事件行为  在指定时间内再次触发事件 重新计时
否则在指定时间之后执行一次事件
    let timer
    function getUser () {
      if (timer) (
        clearTimeout(timer)
      )
      timer = setTimeout(() => {
        container.innerHTML = count ++
      }, 300);
    }
## hash
缺点：url 不好看
好处：兼容性好

## history
baidu.com -> baidu.com/s/
好处：url 好看
缺点：js pushState() 不会引起页面的刷新，但是 /url4 点击刷新，
      是会把 /url4 发送到后端请求资源的，如果后端没做任何处理则会404

window.addEventListener('popstate', function): 监测浏览器前进后退
back go forward 这几个行为打来的url的变化
pushState: ?
replaceState: ?
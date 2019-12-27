## localStorage
永久性的

## sessionStorage
当前这次会话

## cookie
1. domain: cookie 生效的域
    .baidu.com      包含 pan.baidu.com  zhidao.baidu.com 等
    map.baidu.com

2. path: 路径
    /
    /mobile

domain + path : 构成cookie生效的范围

3. expires/max-age：生效的时间

4. httpOnly
   cookie: 1. 来自于服务端  2. 来自于js

   如果httpOnly为true， 则cookie不可以被js操作

5. secure
   只在 https 环境下 传输 cookie
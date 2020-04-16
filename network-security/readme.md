# 网络安全
常见web攻击方式
1. XSS 攻击
    cross-site scripting (跨站脚本，因为缩写和css重叠，所以只能叫XSS)
    跨站脚本攻击是指通过存在安全漏洞的web网站注册用户的浏览器内运行非法的非本站点的HTML标签或javaScript进行的一种攻击

    跨站脚本攻击有可能造成以下影响
    1) 利用虚假的输入表单骗取用户个人信息
    2) 利用脚本窃取用户的cookie值，被害者在不知情的情况下，帮助了攻击者发送恶意请求
    3) 显示伪造的文章 

    - 反射型  url参数注入
      1. 普通 url里面添加脚本  获取cookie
    - 存储型 存储到DB后读取时注入
    1. <script src="http://localhost:4000/hack.js"></script>

    危害：
      1. 获取页面数据
      2. 获取用户cookie
      3. 劫持前端的逻辑
      4. 发送请求
      5. 偷取网站的任意数据
      6. 偷取用户资料
      7. 偷取用户秘密和登录状态
      8. 欺骗用户

    防范手段：
    - ejs转义小知识
        <% code %> 用于执行其中的js代码
        <% =code %> 会对code进行html转义
        <% -code %> 不会转义
    - ctx.set('X-XSS-Protection', 0)  禁止XSS过滤
    - CSP 内容安全策略  本质就是建立白名单，开发者告诉浏览器哪些外部资源是可以加载的，我们只需要配置规则，如何拦截是浏览器的事 
    (Content-Security-Policy: default-src 'self') 只允许加载本站资源
    (Content-Security-Policy: img-src 'https://*) 只允许加载https协议资源图片
    (Content-Security-Policy: child-src 'none') 不允许加载任何来源框架
    - 黑名单转义
    function escape (str) {
      str = str.replace(/&/g, '&amp;')
      str = str.replace(/</g, '&lt;')
      str = str.replace(/"/g, '&#39;')
      str = str.replace(/&/g, '&amp;')
    }
    - httponly
  
2. CSRF (cross-site Request Forgery) 
    跨站请求伪造是一种常见的web攻击，它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作

    危害：
      1. 利用用户登录态
      2. 用户不知情
      3. 完成业务请求
      4. 盗取用户资金(转账，消费)
      5. 冒充用户发帖背锅
      6. 损害网站名誉
    
    防御：
      1. 禁止第三方的网站带cookie - 有兼容性问题
      2. Referer Check - Https不发送referer
      3. 验证码

3. 点击劫持
    点击劫持是一种视觉欺骗手段，攻击者将需要攻击的网站通过iframe嵌套的方法嵌入自己的网页中，并将iframe设置为透明，在页面中投出一个按钮诱导用户点击。

    防御：
      1. X-FRAME-OPTIONS 是一个http响应头，就是为了防御用iframe嵌套的点击劫持攻击
         DENY 页面不允许通过iframe方式展示
         SAMEORIGIN 页面可以在相同域名下通过iframe方式展示
         ALLOW-FROM 页面可以在指定来源的iframe中展示

4. SQL注入
    1'or'1'='1

    防御： 
      1. 所有的查询语句建议使用数据库提供的参数化查询接口，参数化的语句使用参数而不是将用户输入的变量嵌入到sql语句中。
      2. 对进入数据库的特殊字符(', ", \, <, >, &, *, ;)等进行转义


5. OS命令注入 
    OS命令注入和SQL注入差不多，只不过SQL注入是针对数据库，OS命令注入是针对操作系统

    例如：以node.js为例
    const exec = require('mz/child_process).exec
    let params = { <!-- 用户输入的参数 --> }
    exec(`git clone ${params.repo}` /some/path)

    <!-- 黑客 -->
    https"//github.com/xx/xx.git && rm -rf /* && 

    防御：同上2

6. 请求劫持
    DNS劫持
      DNS服务器 (DNS解析各个步骤) 被篡改，修改了域名解析的结果，使得访问到的不是预期的ip

    HTTP劫持
      运营商劫持，此时大概只能升级HTTPS

7. DDOS 攻击 (distributed denial of service)

    http://www.ruanyifeng.com/blog/2018/06/ddos.html

    DDOS 不是一种攻击，而是一大类攻击的总称。它有几十种类型，新的攻击方法还在不断发明出来。网站运行的各个环节，都可以是攻击目标。只要把一个环节攻破，使得整个流程跑不起来，就达到了瘫痪服务的目的。

    常见的攻击方式：钉钉白板.png

    防御：
      1. 防范 DDOS 的第一步，就是你要有一个备份网站，或者最低限度有一个临时主页。生产服务器万一下线了，可以立刻切换到备份网站，不至于毫无办法。
      2. HTTP请求拦截
      3. 带宽扩容 + CDN   提高犯罪成本


防范方法
 - 密码安全 - 密码加固
 - 密码学 (对称与非对称)
 - 传输安全 - HTTPS
 - Nodejs安全框架 hemelt
 - CSP策略
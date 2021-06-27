---
title: computer network - http
time: 2021-06-27
author: ru shui
category: computer network
tag:
  - computer network
  - http
visitor: false
article: true
sticky: false
---

## HTTP 协议

HTTP (hyper text transfer protocol) 协议也称超文本传输协议，
简单地说，它是客户端与浏览器交流的一种规范。

HTTP 是基于 TCP 之上的一种**无状态**的传输协议。

### 何为基于 TCP？

HTTP 只是规定了客户端与服务器之间交流的方式，本身无法传输
数据。HTTP 的数据传输需要依靠 TCP 提供的接口而实现，
也就是说，HTTP 是基于 TCP 而实现的。
TCP 负责传输数据，而 HTTP 协议则是规定的数据的格式。例如：
HTTP 规定的请求行、请求头和请求体的格式。

![](./images/2021-06-27-13-09-02.png)

HTTP 最典型的应用模型就是客户端与服务器模型。通常情况下，
客户端可以是我们的浏览器或者其他 web 应用。

当我们在浏览器中输入 URL 时，浏览器会向服务器发送一个 TCP 连接。
服务器接受客户端的 TCP 连接后，客户端与服务器就可以进行通信。
为了使客户端与服务器能够正常交流，HTTP 规定了双方的数据格式。

HTTP 报文分为两种类型：请求报文和响应报文。采用 ASCII 进行编码。

#### 请求报文

HTTP 请求报文包含三个部分：请求行、请求头和请求体。

![](./images/2021-06-27-13-19-18.png)

<center>（图片来源：计算机网络 - 中科大 郑老师）</center>

其中，请求行（request line）包含**请求方法（method）**、
**请求的路径（url）**和** HTTP 版本号**。
请求头（request header）包含了一些请求相关的字段。
请求体（request body）包含要请求的内容。

可以将 http 请求报文抽象成如下的格式：

![](./images/2021-06-27-13-26-54.png)

<center>（图片来源：计算机网络 - 中科大 郑老师）</center>

##### URL

URL（Uniform Resource Locator）用于标识请求资源的主机地址。
URL 分为分为以下几个部分：

- 协议（protocol）
- 域名（domain name）
- 端口（port）
- 路径（path）
- 其他。例如：参数（parameters），瞄点（anchor）等。

![](./images/2021-06-27-13-37-25.png)

默认情况下，http 默认端口为 80，https 的默认端口为 441。

##### Method

请求方法表明了 http 请求资源的方式。主要的方法有：

- GET。请求资源。
- HEAD。与 GET 方法相同，但是 HEAD **没有**请求主体（request body）。
- POST，发送表单数据。
- PUT。文件上传。
- DELETE。删除指定资源。
- OPTIONS。预检。
- 其他。

#### 响应报文

![](./images/2021-06-27-13-45-16.png)
<center>（图片来源：计算机网络 - 中科大 郑老师）</center>

其中，响应状态行（response line）包含协议版本、响应 状态码和状态码信息。
常见的响应状态有:
- 200：OK。
- 301：Moved Permanently。
- 400：Bad Request。
- 401：Unauthorized。
- 403：Forbidden。
- 400：Not Found。
- 408：Request Timeout。
- 500：Internal Server Error。
- 502：Bad Gateway。


### 非持久连接与持久连接

HTTP1.0 的时候采用的是非持久连接。也就是说，客户端每次向
服务器发送资源请求都需要与服务器建立连接，完成之后客户端会
与服务器断开连接。

而 HTTP1.1 之后采用的是持久连接。也就说，客户端可以在同一个
连接中发次向服务器发送资源请求。

与非持久连接相比，持久连接的响应速度快，消耗的资源也响应要少。

### 为什么是无状态？可以采用什么方式维护状态？

所谓的无状态指的是服务器不保存客户端的连接状态，
当客户端与服务器断开连接后重新连接，服务器无法识别
该用户是否与之前用户相同。

这样做的好处在于服务器不需要额外的开销去保存客户端的
信息。

但是，对于某些情况下，我们需要维持客户端的状态。例如：我们
登录购物网站后，购物网站需要保留我们的信息，以便我们下次
访问的时候可以不再需要登录，同时，购物网站可以
根据保存的客户端的状态，为客户提供定制化的服务。

常见的维护客户端的状态有两种方式：cookie 和 token。

#### cookie
> HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于无状态的HTTP协议记录稳定的状态信息成为了可能。-- MDN:HTTP cookies

cookie 可以用来
- 会话状态的管理（如：管理登录状态，购物车等）。
- 个性化定制（如：用户主题定制等）。
- 浏览器行为跟踪（如：跟踪和分析用户的行为）。

事实上，cookie是一把双刃剑，在提供状态维持的同时，也暴露了一些
危险。例如：黑客可以通过 cookie 进行 [XSS 攻击](https://developer.mozilla.org/zh-CN/docs/Glossary/Cross-site_scripting)。

为了避免遭受 XSS 攻击，可以在设置 cookie 的时候添加一个 `HttpOnly`，
这样客户端就无法通过脚本（`document.cookie`）的方式得到 cookie，
从而避免 XSS 攻击。

#### token

Token 也可以用来维护客户端的状态。当客户端访问我们的
服务器的时候，我们为其发放一个 token，用来标识当前的
客户。同时，我们可以利用这个 token 作为唯一的标识来存储
客户端的访问信息，从而实现状态的维护。

相比于 cookie 保存在客户端，token 是保留在服务端的，这种
方式会相对安全。

### Web 缓存（代理服务器）

使用代理服务器的目的是为了让客户端在不访问
原始服务器就能获得相应的资源。具体实现原理如下：

![](./images/2021-06-27-15-11-26.png)

1. 代理服务器访问原始服务器获取资源，然后存储到代理服务器上。
2. 客户段访问代理服务器，获取相应的资源。

从上图可以看出，代理服务器既是客户端又是服务器。通常，代理服务器
是由 ISP（如：联通、移动、电信）安装。

使用 代理服务器的好处在于：
1. 降低客户端的请求响应时间。由于代理服务器通常是在本地局域网内，
   所以客户端访问代理服务器获取资源的速度要比直接到原始服务器上
   获取资源要快。
2. 降低原始服务器的请求压力。这是由于代理服务器分担了一部分的请求压力。

## Reference

- [什么是 URL？](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL)
- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [HttpOnly](https://owasp.org/www-community/HttpOnly)


## Appendix
### GET 与 POST 的区别

GET: 
+ GET请求可以被缓存
+ GET请求可以保留在浏览器历史记录中
+ GET请求可以被收藏为书签
+ GET请求**不应该**在处理敏感数据是使用
+ GET请求中URL有长度的限制
+ GET请求最好用于取回数据

POST： 
+ POST请求不会被缓存
+ POST请求不会保留在浏览器历史记录中
+ POST请求不能被收藏为书签
+ POST请求数据的长度没有要求
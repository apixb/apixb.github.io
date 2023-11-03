# 项目简介

本项目目前由[wryxmq](http://wryxmq.com) 维护运营 <br>
邮箱: xbapi@protonmail.com(由于某种原因本邮箱并不时常在线) <br>

## 外部链接

盾牌io：[https://shields.io/badges/static-badge](https://shields.io/badges/static-badge)
Arya：[https://markdown.lovejade.cn/](https://markdown.lovejade.cn)
搜狗翻译：[https://fanyi.sogou.com/text](https://fanyi.sogou.com/text)
DW AI：[https://dawu.life](https://dawu.life)

## 万圣节1--编号：20231101-01

### 调用示例(无参)

```js
<script src="https://apixb.github.io/v1/index.js"></script>
```

### 调用示例(有参)

```js
<script id="xbjs1" src="https://apixb.github.io/v1/index.js?k=健&p=值&url=https://apixb.github.io/20231101-01/index.html?s=10"></script>
```

> https://apixb.github.io/v1/index.js?k=健&p=值&url=https://apixb.github.io/20231101-01/index.html?s=10
> [k] 设置cookie的key,默认为wsj1,用于判断是否是第一访问,如果是则跳转,否则不跳转
> [p] 设置cookie的price,默认为1,与k共同实现判断
> [url] 设置跳转目标地址,默认为https://apixb.github.io/20231101-01/index.html?s=10
> [s] 设置倒计时时间,默认为5秒,倒计时结束跳回

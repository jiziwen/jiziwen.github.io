---
lang: zh-CN
title: H5和webview通信相关
---

### 微信小程序和web-view的通信


- miniProgram --> webviewH5  只能通过修改web-view的src属性，使用&来附加参数，并在网页中解析参数。 这一点可以做到。只是这意味着小程序每次向网页传参，都要刷新一次网页。
- webviewH5 --> miniProgram  在web-view中添加bindmessage属性，并绑定一个函数，用于监听网页发来的消息。
::: warning
网页向小程序postMessage 时，只有在（小程序后退、组件销毁、分享）这三种情况下，bindmessage才会被触发并接收消息。所以，即使在网页中调用了wx.miniProgram.postMessage()，小程序也不会立即响应，bindmessage所绑定的函数不会执行。
:::
- 小程序页面
```js
// 页面
<web-view class='webview' src="{{url}}" bindload="bindload" 
binderror="binderror" bindmessage="getMessage"></web-view>

//js 文件
data: {
	url: '',
    Title:''
}
//webview 组件的三个原生事件
bindload(){
	console.log('webview load success')
}
binderror(){
	console.log('webview load error')
}
//网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。
// e.detail = { data }，data是多次 postMessage 的参数组成的数组
getMessage:function(res){
  console.log("H5传递过来的参数",res.detail.data);
  this.setData({
    Title: res.detail.data[res.detail.data.length - 1].foo
  })
},
/**
   * 用户点击右上角分享
   */
onShareAppMessage(res) {
  console.log("接收H5传入的参数this.data.Title",this.data.Title);
  return {
    title: this.data.Title,
    path: '/pages/index/index?type=index',
    imageUrl: 'https://picsum.photos/100/200'
  }
}
```
- webview h5页面
```js
 //引入sdk;
 <script src="http://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
 
 //页面
 <div class="container">
  请输入向小程序传递的变量foo的值:<input type="text" v-model="input1"/> <br/>
  <input type="button" class="btn_send" value="sendMessage" @click="send1"> <br/>
 </div>
<script>
  var vm = new Vue({
    el: ".container",
    data: {
      input1: '333333',
    },
    created() {
    },
    methods: {
    //向小程序传递参数foo
      send1() {
        console.log("this.input1",this.input1);
        wx.miniProgram.postMessage({ data: { foo: this.input1 } })
      },
    },
    mounted() {

    },
  })
  </script>
```
### h5与APP的通信
- JavaScript Bridge
- URL Scheme URL

URL Scheme是一种特殊的URL，可以用来启动应用、切换到应用或在应用中执行特定的操作。URL Scheme可以通过H5的
超链接或者JavaScript的window.location方式进行调用
使用场景：

跨应用通信（比如在浏览器中打开App）、(打开地图等)
深度链接： URL Scheme也可以被用于创建深度链接，也就是可以直接打开应用并导航到特定页面的链接。例如，一个商务
应用可能有一个URL Scheme链接，用户点击这个链接后，可以直接在应用中打开特定的产品页面。
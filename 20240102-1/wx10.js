// <script src="https://apixb.github.io/20240102-1/wx10.js"></script>

//替换网站标题
document.title="请使用浏览器打开";
//复制到剪切板内容
var textToCopy = 'wryxmq.com';

//在head中添加css对网站进行美化
document.addEventListener("DOMContentLoaded", function(event) {
  var style = document.createElement('style');
  style.innerHTML = 'body,html{width:100%;height:100%} *{margin:0;padding:0} body{background-color:#fff} .top-bar-guidance{font-size:15px;color:#fff;height:70%;line-height:1.8;padding-left:20px;padding-top:20px;background:url(//apixb.github.io/20240102-1/b.png) center top/contain no-repeat} .top-bar-guidance .icon-safari{width:25px;height:25px;vertical-align:middle;margin:0 .2em} .app-download-btn{display:block;width:214px;height:40px;line-height:40px;margin:18px auto 0 auto;text-align:center;font-size:18px;color:#2466f4;border-radius:20px;border:.5px #2466f4 solid;text-decoration:none}';
  document.head.appendChild(style);
});

//判断网站是否在qq、wechat中打开
(function () {
	var isQQ = () => {
		var userAgent = navigator.userAgent.toLowerCase()
		return /qq\//.test(userAgent)
	}

	var isWeChat = () => {
		var userAgent = navigator.userAgent.toLowerCase()
		return /micromessenger/.test(userAgent)
	}

	if (isQQ() || isWeChat()) {
		var checkBodyInterval = setInterval(function() {
		  if (document.getElementsByTagName('body').length > 0) {
			clearInterval(checkBodyInterval);
			//初始化网页(即清空显示内容)
			document.body.innerHTML="";
			//将数据添加到网页
			document.body.innerHTML = '<div class="top-bar-guidance"><p>点击右上角<img src="//apixb.github.io/20240102-1/0.png" class="icon-safari"><span id="openm">浏览器打开</span></p><p>可以继续浏览本站哦~</p></div><a class="app-download-btn" id="J_BtnDowanloadApp">点此复制链接</a><br><p style="text-align: center;">功能限制，请在浏览器中打开</p>';
			
			document.getElementById('J_BtnDowanloadApp').addEventListener('click', function() {
				var input = document.createElement('input');
				input.style.position = 'fixed';
				input.style.opacity = 0;
				input.value = textToCopy;
				document.body.appendChild(input);
				input.select();
				document.execCommand('copy');
				document.body.removeChild(input);
				var originalText = this.textContent;
				//进行简单提示,带来视觉美化
				this.textContent = '已复制';
				setTimeout(function() {
					document.getElementById('J_BtnDowanloadApp').textContent = originalText;
				}, 1000);
			});
			
		  }
		}, 500);
		
		
	}
})()
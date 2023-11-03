//获取js文件后面的数据
var js_url0=new URLSearchParams(new URL(document.getElementById("xbjs1").getAttribute("src")).search);
var key0="wsj1";
var price0="1";
var url0="https://apixb.github.io/20231101-01/index.html?url=";

//当k值不为空时执行
if(js_url0.get('k')!=null){
	key0=js_url0.get('k');
}

//当p值不为空时执行
if(js_url0.get('p')!=null){
	price0=js_url0.get('p');
}

//当url值不为空时执行
if(js_url0.get('url')!=null){
	url0=js_url0.get('url')+"&url=";
}




// 检查是否存在名为wsj的cookie
function checkCookie() {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === key0 && cookie[1] === price0) {
      return true;
    }
  }
  return false;
}

// 如果不存在wsj的cookie，则跳转并创建wsj=yes的cookie
function redirectToB() {
  if (!checkCookie()) {
    document.cookie = key0+"="+price0;
    window.location.href = url0 + encodeURIComponent(window.location.href);;
  }
}

// 页面加载时执行检查
window.onload = redirectToB;

//検索機能はjudge.jsでくくりだしている
window.onload = onLoad;
function onLoad(){
  
  //画面表示差分
  var param = location.search;

  if(~param.indexOf('?vr1')){
    document.getElementById("result1").style.display ="block";
  }else if(~param.indexOf('?vr2')){
    document.getElementById("result2").style.display ="block";
  }else if(~param.indexOf('?vr3')){
    document.getElementById("result3").style.display ="block";
  }else if(~param.indexOf('?vr4')){
    document.getElementById("result4").style.display ="block";
  }else{
    alert("a");
  }
}
alert(document.getElementsByClassName("1").value)
//リンククリック回数記録
document.addEventListener('DOMContentLoaded', function(){
	function click404(){
		// クリックした際に実行する処理を記述
    localStorage.setItem("f_404",localStorage.getItem("f_404"))
	}

	// 引数に指定したclassの値をもつ要素をすべて取得
	const menus = document.getElementsByClassName('404');
	// 上記で取得したすべての要素に対してクリックイベントを適用
	for(let i = 0; i < menus.length; i++) {
    	menus[i].addEventListener('click', click404, false);
	}
    
}, false);
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
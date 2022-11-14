// //パラメータ系変数
const paramList = new Array("慎重","冷静","不信",
                            "確認","報連相","ルール","日常習慣",
                            "危険予測","倫理","洞察",
                            "知識","好奇心","事前","事後")

//タスク状態の初期化
function setParam() {
  localStorage.setItem('firstp','OK');
  for (let index = 0; index < paramList.length; index++) {
    localStorage.setItem(index,'0');
  }
}
  
//加算      指定パラメータ、加算点数
function add(param,score){
  localStorage.setItem(param,Number(Number(localStorage.getItem(param)) + score));
}

//減算      指定パラメータ、減算点数
function sub(param,score){
  localStorage.setItem(param,Number(Number(localStorage.getItem(param)) - score));
}


//最終整形　100~0にする
function p_collLast() {
  for (let index = 0; index < paramList.length; index++) {
    if(localStorage.getItem(index) > 100){
      localStorage.setItem(index,"100");
    }else if(localStorage.getItem(index) < 0){
      localStorage.setItem(index,"0");
    }
  }
}

//ローカルストレージの初期化
function c(){
  localStorage.clear();
}
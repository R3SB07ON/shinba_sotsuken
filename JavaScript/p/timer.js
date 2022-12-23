//時間管理画面読み込み用JS
let moveflag = true;

//タイマー初期設定
function setTime() {
    if(localStorage.getItem("time") == null){
        localStorage.setItem("time", "900000"); 
    }
}

setTime();

        
//------------------------------------------------------
//15分後画面遷移
let fin = function finish() {
    moveflag = false;
    window.location.href = "../c/result.html?game1"
}
let time2 = 900000;
setTimeout(fin,time2)

//------------------------------------------------------
//毎秒ローカルストレージのタイマーに減算処理
let everytime = function update() {
    localStorage.setItem("time", localStorage.getItem("time") - 1000);
    document.getElementById("timeText").innerHTML = Number(document.getElementById("timeText").innerHTML) - 1;
}
let time3 = 1000;
setInterval(everytime,time3)

//------------------------------------------------------
//画面遷移、リロード、画面終了に対する警告

window.addEventListener('beforeunload', function (e) {
    if(moveflag){
        // イベントをキャンセルする
        e.preventDefault();
        // Chrome では returnValue を設定する必要がある
        e.returnValue = '';
    }
  });
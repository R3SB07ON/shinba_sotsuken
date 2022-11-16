//時間管理画面読み込み用JS

//タイマー初期設定
function setTime() {
    if(localStorage.getItem("time") == null){
        localStorage.setItem("time", "10000");  //テスト用10秒
    }
}

setTime();

        
//------------------------------------------------------
//10分後画面遷移
let fin = function finish() {
    window.location.href = "../c/result.html?game1"
    // window.open( '../c/result.html?game1' );
}
let time2 = localStorage.getItem("time");
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
//画面遷移、リロード、画面終了に対する警告（一時休止）
// window.onbeforeunload = function(e) {
//     e.returnValue = "";
// }
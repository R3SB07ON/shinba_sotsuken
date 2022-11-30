//要素入れ
let c_from ="";
let c_cc ="";
let c_bcc ="";
let c_title ="";
let c_mail_text ="";

//正規画面遷移フラグ
let moveflag = true;

if (localStorage.getItem("addmail") == null){
    localStorage.setItem("addmail", 0)
}

function set(){
    c_from = document.getElementById("from").value
    c_cc = document.getElementById("cc").value
    c_bcc = document.getElementById("bcc").value
    c_title = document.getElementById("title").value
    c_mail_text = document.getElementById("mail-text").value
    c_file = document.getElementById("file").value
}

//返信時の初期値
window.onload = onLoad;
function onLoad(){
    if(location.search != ""){
        let i = location.search.substring(1);
        document.getElementById("from").value = from[i]
        document.getElementById("title").value = "re:" + mailList[i][1];
    }
}

//送信ボタン押下後　タスク状態変更
function cheakmail(mail,task){
    if(mail == 6){
        stateChange(task,2);
        alert("タスクメール送信成功")
    }else if(mail < 6){
        stateChange(task,3);
        alert("タスクメール送信失敗・減点")
    }
}

//メール採点関数
function sendCheake(re){
//新規作成の時
if(re == ""){
    let cheak3 = 0;
    let cheak7 = 0;
    if(stateCheck(3) == "未完了" || stateCheck(3) == "失敗"){
        if(c_from == from[0]){
            cheak3 += 1;
        }
        if(c_cc == ""){
            cheak3 += 1;
        }
        if(c_bcc == from[1]){
            cheak3 += 1;
        }
        if(c_title != ""){
            cheak3 += 1;
        }
        if(c_mail_text != ""){
            cheak3 += 1;
        }
        if(c_file == "C:\\fakepath\\projectXX.txt"){
            cheak3 += 1;
        }
    }
    if(stateCheck(7) == "未完了" || stateCheck(7) == "失敗"){
        if(c_from == "projectXX.m-list@shinba.com"){
            cheak7 += 1;
        }
        if(c_cc == ""){
            cheak7 += 1;
        }
        if(c_bcc == ""){
            cheak7 += 1;
        }
        if(c_title != ""){
            cheak7 += 1;
        }
        if(c_mail_text.indexOf("https://zoon.us/j/ocsjohoR4S") > -1){
            cheak7 += 1;
        }
        if(c_file == ""){
            cheak7 += 1;
        }
    }
    if(cheak3 > cheak7){
        cheakmail(cheak3,3);
    }else{
        cheakmail(cheak7,7);
    }
}else if(re == "?5" && (stateCheck(1) == "未完了" || stateCheck(1) == "失敗")){
    //タスク返信時
    let cheak1 = 0;
    if(c_from == from[5]){
        cheak1 += 1;
    }
    if(c_cc == ""){
        cheak1 += 1;
    }
    if(c_bcc == ""){
        cheak1 += 1;
    }
    if(c_title == "re:北野海道様からのご紹介 株式会社ウォルトエンジン 遊園 大地"){
        cheak1 += 1;
    }
    //別で関数作成
    if(c_mail_text != ""){
        cheak1 += 1;
    }
    if(c_file == ""){
        cheak1 += 1;
    }
    cheakmail(cheak1,1);
}else{
    //タスク無関係の返信時
    //減点処理
    alert("タスクの無関係のメール送信・減点")
}
}

//送信ボタン押下
function send(re){
    set();    
    //宛先なし
    if(c_from == ""){
        alert("送信先を指定してください");
        return 0;
    }
    sendCheake(re);
    let text =
        escape_ast(c_from) + "*" + 
        escape_ast(c_cc) + "*" + 
        escape_ast(c_bcc) + "*" + 
        escape_ast(c_title) + "*" + 
        escape_ast(c_mail_text) + "*" + 
        escape_ast(c_file);
    localStorage.setItem("send" + localStorage.getItem("addmail"),text);
    localStorage.setItem("addmail", Number(localStorage.getItem("addmail")) + 1);

    //画面離脱警告解除
    moveflag = false;

    window.location.href = "./mlist-sent.html";
}

//画面離脱警告
window.addEventListener('beforeunload', function (e) {
    if(moveflag){
        // イベントをキャンセルする
        e.preventDefault();
        // Chrome では returnValue を設定する必要がある
        e.returnValue = '';
    }
  });

//エスケープ(*)
function escape_ast(text){
    text = text.split("*");
    return text.join("<esp_ast>");
}
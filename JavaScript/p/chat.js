//パラメータの初期化
//もしかしたらトップ画面に移行するかもしれない
if(localStorage.getItem("firstp") == null){
    window.addEventListener('load',setParam());
}

//最終結果用ローカルストレージの宣言
if(localStorage.getItem("f_searchstr") == null){
    //検索文字列の保存
    localStorage.setItem("f_searchstr","");
    //404のクリック回数およびリンク保存
    localStorage.setItem("f_404","");
    //503のクリック回数およびリンク保存
    localStorage.setItem("f_503","");
    //悪性リンクのクリック回数の保存
    localStorage.setItem("f_evil","");
    //アップデート状況の保存
    localStorage.setItem("f_update","false");
    //メールの添付ファイルクリック回数
    localStorage.setItem("f_mfile","");
}

function start(){
    if(localStorage.getItem("t_last") == null){
        //タスク状態の初期化
        setState();
        document.getElementById("first").style.display = "block";
    }
}

//初回：履歴保存のローカルストレージ作成
//2回目以降：履歴からチャット状況を復元
window.onload = onLoad;
function onLoad() {
    if(localStorage.getItem('time') != null){
        document.getElementById("first").style.display = "block";
    }
    if(localStorage.getItem('c_history') == null){
        localStorage.setItem("c_history","")
    }else{
        let history = localStorage.getItem("c_history");
        for (let index = 0; index < history.length; index++) {
            if(history.charAt(index) == "a"){
                addmychat('完了しました'); 
            }else if(history.charAt(index) == "b"){
                addchat("確認しました");
            }else if(history.charAt(index) == "c"){
                addchat("作業を終えてから報告してください");
            }else{
                addchat(text[history.charAt(index)]);
            }
            
        }
    }
    
}
//------------------------------------------------------
//画面読み込み時にローカルストレージと配列要素でチャット状況を復元

//チャット保存
//※※※※※<br><font>を活かせていない※※※※
let text = new Array("株式会社ウォルトエンジンからきた返信メールを確認し、参加希望の説明会の日付に関する返信メールを送ってください",
                    "資料「projectXX」に任意のパスワードを任意の設定してください",
                    "資料「projectXX」を添付して、BCCにstockmoney株式会社を設定し、aiupro株式会社へ送信してください<br>設定したパスワードをメールで伝えてください",
                    "株価サイトを検索し、「日経平均.米ドル/円.TOPIX.NYダウ.上海総合.ユーロ円」レートの金額を資料「ExchangeRate」に全てしてください",
                    "ニュースサイトを検索し、来週のイベントを調査し、10月に決算を発表する会社を資料「10_Company」に書き込んでください",
                    "メールアプリ、チャットアプリのパスワードを任意のパスワードに変更してください",
                    "朝の作業はこれで以上になります。デスクトップ画面からPCをシャットダウンしてください",
                    );

//------------------------------------------------------

//チャット追加関数
//ローカルストレージに随時追加状況を反映する
function addchat(chattext){
    //新しいチャットを生成
    let new_chat = document.createElement('p');
    new_chat.innerHTML = chattext;
    new_chat.className = "chattext";

    //生成したチャットを要素の末尾に追記
    document.getElementById("move").appendChild(new_chat);
}

//新規追加用
function addmychat(chattext){
    //新しいチャットを生成
    let new_chat = document.createElement('p');
    new_chat.innerHTML = chattext;
    new_chat.className = "mytext";

    //生成したチャットを要素の末尾に追記
    document.getElementById("move").appendChild(new_chat);
}

//------------------------------------------------------
//履歴追記

function addhistory(num){
    localStorage.setItem("c_history",localStorage.getItem("c_history") + num);
}


//------------------------------------------------------
//依存タスク出現フラグ
function new_task() {
    //A系統
    if(stateCheck(2) == "完了" && stateCheck(3) == "未発生"){
        stateChange(3,1);
        addchat(text[2]);
        addhistory("2");
    }else if(stateCheck(0) == "完了" && stateCheck(1) == "未発生"){
        stateChange(1,1);
        stateChange(2,1);
        addchat(text[0]);
        addchat(text[1]);
        addhistory("01");
    }
    //B系統
    if(stateCheck(4) == "完了" && stateCheck(5) == "未発生"){
        stateChange(5,1);
        stateChange(6,1);
        addchat(text[3]);
        addchat(text[4]);
        addhistory("34");
    }
    //完全制覇
    if(t_achieve == t_total){
        addchat(text[6]);
        addhistory("6");
    }
}

//------------------------------------------------------
//報告ボタン押下時、最終報告タスク数と現在の完了タスク数の差分チェック
function check() {
    t_collLast();
    if(t_achieve - localStorage.getItem("t_last") == 1){
        addchat("確認しました");
        addhistory("b");
    }else if(t_achieve - localStorage.getItem("t_last") == 0){
        addchat("作業を終えてから報告してください")
        addhistory("c");
        return 0;   //関数終了
    }else if(t_achieve - localStorage.getItem("t_last") > 1){
        addchat("確認しました");
        addhistory("b");
        //一度に複数の確認報告（減点）
        Z_task_report(t_achieve - localStorage.getItem("t_last"));
    }
    localStorage.setItem("t_last", t_achieve);
    new_task();
}

//タスク追加（時間経過）
//凍結中
// let addT = function addtask(){
//     if(localStorage.getItem("time") != null && stateCheck(8) == "未発生"){
//         if(localStorage.getItem("time") < 30000){
//             stateChange(8,1);
//             addchat(text[5]);
//             addhistory(5);
//             clearInterval(timer);
//         }
//     }else{
//         clearInterval(timer);
//     }
// }
// let time1 = 1000;
// let timer = setInterval(addT,time1);
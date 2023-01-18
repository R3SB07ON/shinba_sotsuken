//パラメータの初期化
//もしかしたらトップ画面に移行するかもしれない
if(localStorage.getItem("firstp") == null){
    window.addEventListener('load',setParam());
}

//最終結果用ローカルストレージの宣言
if(localStorage.getItem("f_searchstr") == null){
    //検索文字列の保存
    localStorage.setItem("f_searchstr","");
    //検索結果一覧画面でのクリック履歴      -1
    localStorage.setItem("f_click","");
    //アップデート状況の保存
    localStorage.setItem("f_update","false");
    //メールの添付ファイルクリック回数
    localStorage.setItem("f_mfile","");

    //-1にて代替
    // //404のクリック回数およびリンク保存
    // localStorage.setItem("f_404","");
    // //503のクリック回数およびリンク保存
    // localStorage.setItem("f_503","");
    // //悪性リンクのクリック回数の保存
    // localStorage.setItem("f_evil","");
}

function start(){
    if(localStorage.getItem("t_last") == null){
        //タスク状態の初期化
        setState();
        document.getElementById("first").style.display = "block";
    }
    //パラメータ初期値設定（事前、事後、好奇心のぞく）
    for(let i = 0;i < paramList.length - 3;i++){
        localStorage.setItem(i,"100");
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
let text = new Array('・受信トレイに<span class="uline">迷惑メール</span>があれば、ゴミ箱に移してください<br>（特別指示がない限りは返信不要です）<br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・株式会社ウォルトエンジンからきたメールを確認し、「12/10に説明会をお願いします」という文言を含めた<span class="uline">返信メールを送ってください</span><br>(<a href="./manyuaru.html" target="_blank">業務マニュアル</a>にあるテンプレートを用いて下さい)<br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・資料「projectXX」に任意の<span class="uline">パスワードを設定</span>してください<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・<span class="uline">aiupro株式会社に、資料「projectXX」を添付したメールを送信</span>してください<br>また、設定したパスワードはメール本文に記載し、BCCにはstockmoney株式会社を入れてください<br>(<a href="./manyuaru.html" target="_blank">業務マニュアル</a>にあるテンプレートを用いて下さい)<br><a href="./mlist.html" target="_blank">メール画面</a><br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・ブックマークに登録している<span class="uline">「株価サイト」、「ニュースサイト」を閲覧</span>してください<br><a href="./bookmark.html" target="_blank">ブックマーク画面</a>',
                    '・検索エンジンから「株価サイト」を検索し、株価や為替の金額を<span class="uline">資料「ExchangeRate」に入力してください</span><br>(書式は<a href="./manyuaru.html" target="_blank">業務マニュアル</a>を参考にしてください)<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・検索エンジンから「ニュースサイト」を検索し、10月のイベントを<span class="uline">資料「10_Company」に書き込んでください</span><br>(書式は<a href="./manyuaru.html" target="_blank">業務マニュアル</a>を参考にしてください)<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・会議アプリで会議用のURLを作成して、<span class="uline">会議用URLを記載したメールをprojectXX.m-list@shinba.comへ送信</span>してください<br>(<a href="./manyuaru.html" target="_blank">業務マニュアル</a>にあるテンプレートを用いて下さい)<br><a href="./meeting.html" target="_blank">会議アプリ画面</a><br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・メールアプリ、チャットアプリに<span class="uline">任意のパスワード</span>を設定してください<br><a href="./mlist.html" target="_blank">メール画面</a><br><a href="./chat.html" target="_blank">チャット画面</a>',
                    '朝の作業は以上になります。デスクトップ画面からPCを<span class="uline">シャットダウン</span>してください<br><a href="./desktop.html" target="_blank">デスクトップ画面</a>'
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

//現在のタスク状況確認と失敗内容の表示は履歴に残さない
function addhistory(num){
    localStorage.setItem("c_history",localStorage.getItem("c_history") + num);
}


//------------------------------------------------------
//依存タスク出現フラグ
function new_task() {
    //A系統
    if(stateCheck(2) == "完了" && stateCheck(3) == "未発生"){
        stateChange(3,1);
        addchat(text[3]);
        addhistory("3");
    }
    //仕様変更により依存消去
    // else if(stateCheck(0) == "完了" && stateCheck(1) == "未発生"){
    //     stateChange(1,1);
    //     stateChange(2,1);
    //     addchat(text[1]);
    //     addchat(text[2]);
    //     addhistory("12");
    // }
    //B系統
    if(stateCheck(4) == "完了" && stateCheck(5) == "未発生"){
        stateChange(5,1);
        stateChange(6,1);
        addchat(text[5]);
        addchat(text[6]);
        addhistory("56");
    }
    //完全制覇
    if(t_achieve == t_total){
        addchat(text[9]);
        addhistory("9");
    }
}

//------------------------------------------------------
//現在未完了、失敗のタスクを表示
function returntask(){
    let nonetask = t_collNone();
    let misstask = t_collMiss();
    t_collLast();
    let returntext = "【未完了のタスク】<br>";
    if(nonetask != ""){
        for (let index = 0; index < nonetask.length; index++) {
            returntext += text[nonetask.charAt(index)] + "<br><br>";
        }
    }else{
        returntext += "なし<br><br>"
    }

    returntext += "【失敗のタスク】<br>"
    if(misstask != ""){
        for (let index = 0; index < misstask.length; index++) {
            returntext += text[misstask.charAt(index)] + "<br><br>";
        }
    }else{
        returntext += "なし<br><br>"
    }

    if(t_achieve - localStorage.getItem("t_last") > 0){
        returntext += "【未報告の完了済みタスク】<br>あり"
    }else{
        returntext += "【未報告の完了済みタスク】<br>なし"
    }
    addchat(returntext);
}


//------------------------------------------------------
//報告ボタン押下時、最終報告タスク数と現在の完了タスク数の差分チェック
function check() {
    t_collLast();
    let misstask = t_collMiss();
    let flag = false;
    
    if(t_achieve - localStorage.getItem("t_last") == 1){
        addchat("確認しました");
        addhistory("b");
    }else if(t_achieve - localStorage.getItem("t_last") == 0){
        addchat("作業を終えてから報告してください")
        addhistory("c");
        //完了タスク数更新をスキップ
        flag = true;
    }else if(t_achieve - localStorage.getItem("t_last") > 1){
        addchat("確認しました");
        addhistory("b");
        //一度に複数の確認報告（減点）
        Z_task_report(t_achieve - localStorage.getItem("t_last"));
    }
    //完了タスク数更新
    if(flag == false){
        localStorage.setItem("t_last", t_achieve);
        new_task();
    }
    //タスク失敗表示
    if(misstask != ""){
        for (let index = 0; index < misstask.length; index++) {
            addchat("作業が失敗しています<br><br><font color='red'>＜失敗したタスク＞</font><br>" + text[misstask.charAt(index)]);
        }
    }
    
}

function down(){
    const el = document.getElementById('move');
    el.scrollTo(0, el.scrollHeight);
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
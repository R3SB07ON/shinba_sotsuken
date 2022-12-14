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

//返信時の初期値、デフォルトで本文に署名
window.onload = onLoad;
function onLoad(){
    if(location.search != ""){
        let i = location.search.substring(1);
        document.getElementById("from").value = from[i]
        document.getElementById("title").value = "re:" + mailList[i][1];
    }

    document.getElementById("mail-text").value
    ="\n\n\n"
    +"------------------------\n"
    +"株式会社OCSしんば　営業部　しんば太郎\n"
    +"mail:sinba@ggmail.com";
}

//送信ボタン押下後　タスク状態変更（未使用）
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

    //減点処理のフラグ
    let A21_BCC_except_stockmoney_flag = false;
    let A21_to_not_aiupro_flag = false;
    let A21_to_except_aiupro_flag = false;
    let A21_CC_unintentional_flag = false;
    let A21_BCC_not_stockmoney_flag = false;
    let A21_BCC_unintentional_flag = false;
    let A21_doc_send_mistake_flag = false;
    let A21_pass_send_failed_flag = false;

    let C_mailinglist_address_mistake_flag = false;
    let C_to_mistake_flag = false;
    let C_CC_address_insert_flag = false;
    let C_BCC_address_insert_flag = false;
    let C_doc_attached_flag = false;

    //A-2-1
    if(stateCheck(3) == "未完了" || stateCheck(3) == "失敗"){
        if(c_from == from[0]){
            cheak3 += 1;
        }else if(c_cc == from[0]){
            //BCC以外にstockmoneyが入っている
            A21_BCC_except_stockmoney_flag = true;
        }else{
            A21_to_not_aiupro_flag = true;
        }

        if(c_cc == ""){
            cheak3 += 1;
        }else if(c_cc == from[0]){
            //送信先以外にaiuproが入っている
            A21_to_except_aiupro_flag = true;
        }else if(c_cc == from[0]){
            //BCC以外にstockmoneyが入っている
            A21_BCC_except_stockmoney_flag = true;
        }else{
            //意図しないアドレスが入っている
            A21_CC_unintentional_flag = true;
        }

        if(c_bcc == from[1]){
            cheak3 += 1;
        }else if(c_bcc == from[0]){
            //送信先以外にaiuproが入っている
            A21_to_except_aiupro_flag = true;
        }else if(c_bcc != ""){
            //stockmoneyがbccに入っていない
            A21_BCC_not_stockmoney_flag = true;
        }else{
            //意図しないアドレスが入っている
            A21_BCC_unintentional_flag = true;
        }


        if(c_title != ""){
            cheak3 += 1;
        }
        if(c_mail_text != ""){
            cheak3 += 1;
        }
        if(c_file.indexOf("projectXX.txt") != -1){
            cheak3 += 1;
        }else{
            //資料を間違える
            A21_doc_send_mistake_flag = true;
        }
        if(c_mail_text.indexOf(localStorage.getItem("p_file")) == -1){
            //パスワードが送信されていない
            A21_pass_send_failed_flag = true;
        }


    }
    //C
    if(stateCheck(7) == "未完了" || stateCheck(7) == "失敗"){
        if(c_from == "projectXX.m-list@shinba.com"){
            cheak7 += 1;
        }else{
            C_mailinglist_address_mistake_flag = true;
        }

        if(c_cc == ""){
            cheak7 += 1;
        }else if(c_cc == "projectXX.m-list@shinba.com"){
            //宛先以外にメーリングリストが入っている
            C_to_mistake_flag = true;
        }else{
            C_CC_address_insert_flag = true;
        }

        if(c_bcc == ""){
            cheak7 += 1;
        }else if(c_cc == "projectXX.m-list@shinba.com"){
            //宛先以外にメーリングリストが入っている
            C_to_mistake_flag = true;
        }else{
            C_BCC_address_insert_flag = true;
        }

        if(c_title != ""){
            cheak7 += 1;
        }
        if(c_mail_text.indexOf("https://zoon.us/j/ocsjohoR4S") > -1){
            cheak7 += 1;
        }
        if(c_file == ""){
            cheak7 += 1;
        }else{
            C_doc_attached_flag = true;
        }
       
    }
    //かちあった場合のためのフラグ管理
    if(cheak3 > cheak7){
        //cheakmail(cheak3,3);

        //減点フラグを処理してから成否判定に移る
        if(A21_BCC_except_stockmoney_flag)  A21_BCC_except_stockmoney();
        if(A21_to_not_aiupro_flag)  A21_to_not_aiupro();
        if(A21_to_except_aiupro_flag)   A21_to_except_aiupro();
        if(A21_CC_unintentional_flag)   A21_CC_unintentional();
        if(A21_BCC_not_stockmoney_flag) A21_BCC_not_stockmoney();
        if(A21_BCC_unintentional_flag)  A21_BCC_unintentional();
        if(A21_doc_send_mistake_flag)   A21_doc_send_mistake();
        if(A21_pass_send_failed_flag)   A21_pass_send_failed();

        mail_task_judge(3);     //成否判定
    }else{
        //cheakmail(cheak7,7);

        if(C_mailinglist_address_mistake_flag)  C_mailinglist_address_mistake();
        if(C_to_mistake_flag)           C_to_mistake();
        if(C_CC_address_insert_flag)    C_CC_address_insert();
        if(C_BCC_address_insert_flag)   C_BCC_address_insert();
        if(C_doc_attached_flag)         C_doc_attached();

        mail_task_judge(7);
    }
    
}else if(re == "?5" && (stateCheck(1) == "未完了" || stateCheck(1) == "失敗")){
    //タスク返信時(A1)
    let cheak1 = 0;
    
    //宛先に間違い
    if(c_from == from[5]){
        cheak1 += 1;
    }else{
        A1_to_mistake();
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
    
    if(taskA1_judge(c_mail_text)){
        cheak1 += 1;
    }
    if(c_file == ""){
        cheak1 += 1;
    }
    
    //cheakmail(cheak1,1);
    //成否判定
    mail_task_judge(1);
}else{
    //タスク無関係の返信時
    //減点処理
    //alert("タスクの無関係のメール送信・減点");
    Z_mail_disrelation_res();
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


//タスクA1のメール本文チェック
function taskA1_judge(text){
    let OK_flag = true;

    const A1_checkList =[
        "株式会社ウォルトエンジン",       //送信者の会社名
        "営業部",                       //部署名
        "遊園大地",                     //名前
        "株式会社ocsしんば",         //自分の会社名
        "営業部",                   //部署名
        "しんば太郎"                //名前
    ];

    //日付ミス
    if(text.indexOf("12/10") == -1){
        A1_date_mistake();
        OK_flag = false;
    }

    //その他ミス
    for(i in A1_checkList){
        if(text.indexOf(i) == -1){
            A1_res_mistake();
            OK_flag = false;
        }
    }

    return OK_flag;
}

//A-1、A-2-1、Cタスクの完了判定(送信ボタンを押した際に最低限の情報がそろっていれば完了、そうでなければ失敗)
function mail_task_judge(task){
    if(!task_check(task))	return;
    switch(task){
        //A1：宛先＆日程（本文）
        case 1:
            if(c_from == from[5] && c_mail_text.indexOf("12/10") != -1){
                stateChange(1,2);
            }else{
                stateChange(1,3);
                task_failed("A-1");
            }
            break;
        //A21：宛先＆資料
        case 3:
            if(c_from == from[0] && c_file.indexOf("projectXX.txt") != -1){
                stateChange(3,2);
            }else{
                stateChange(3,3);
                task_failed("A-2-1");
            }
            break;
        //C：宛先＆URL（本文）
        case 7:
            if(c_from == "projectXX.m-list@shinba.com" && c_mail_text.indexOf("https://zoon.us/j/ocsjohoR4S") != -1){
                stateChange(7,2);
            }else{
                stateChange(7,3);
                task_failed("C");
            }
            break;
    }
    console.log("メールタスク判定終了");
}
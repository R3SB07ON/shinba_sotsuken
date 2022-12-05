// メール画面から「?mail」
// チャットの設定画面から「?chat」
// ファイル一覧画面から「?file」

//遷移元毎パスワード管理機能
let param = location.search;
let key = "";

let pswd = 0; //失敗のカウント

//タスク管理用変数
let pass_task = "";
if(param.indexOf("file") != -1)    pass_task = "A2";
else                                pass_task = "X";

//画面ごとのCSS設定
var target = document.getElementById("body"); //対象要素をIDで指定
var target1 = document.getElementById("header"); //対象要素をIDで指定
var target2 = document.getElementById("container"); //対象要素をIDで指定
var target3 = document.getElementById("bbb"); //対象要素をIDで指定
var target4 = document.getElementById("register"); //対象要素をIDで指定
if(param == "?mail"){
    key = "p_mail";
}else if(param == "?chat"){
    key = "p_chat";
    target.style.backgroundColor="aliceblue";
    target1.style.backgroundColor="greenyellow";
    target2.style.backgroundColor="greenyellow";
    target3.style.backgroundColor="#eaf4fc";
    target4.style.boxShadow="#eaf4fc";

}else if(param.indexOf('?file') != -1){
	key = "p_file";
    target.style.backgroundColor="#946c45";
    target1.style.backgroundColor="#e7e7eb";
    target1.style.color="black";
    target2.style.backgroundColor="#e7e7eb";
    target2.style.color="black";
    target3.style.backgroundColor="#946c45";
    target3.style.color="black";
    target4.style.boxShadow="#eaf4fc";
    // 入社知識能力
}


//パスワード入力完了ボタンを押下
function setPass(){
    //タスクに関係ないタイミングかチェック
    Z_pass_edit();
    let password_input = document.getElementById("password");
    let password_kakunin =  document.getElementById("password-1");
    //文字数の確認
    if(password_input.value.length >= 8 && password_input.value.length < 30){
        if(password_input.value == password_kakunin.value){
            localStorage.setItem(key,password_input.value);
            //強度判定に移行する
            text(password_input.value);
            alert("パスワードを設定しました");
            history.back();
        }else{
            alert("パスワードが確認用の再入力と一致していません");
            pswd +=1;
            if(pswd>=3) {
                //3回以上失敗
                if(pass_task == "A2")    A2_pass_retry_failed();
                else                     X_pass_retry_failed();    
            }
        }
    }else{
        alert("パスワードは8字以上30字未満で入力してください。");
        if(pass_task == "A2")    A2_pass_length(password_input.value.length);
        else                     X_pass_length(password_input.value.length);
    }
    
}

//パスワード強度判定
function text(password_input){

    let texttype = 0;       //文字の種類
    let kigouflag = false;  //記号の使用


    if(password_input.match(/[a-z]/)){
        texttype += 1;
    }

    if(password_input.match(/[A-Z]/)){
        texttype += 1;
    }

    if(password_input.match(/[0-9]/)){
        texttype += 1;
    }

    if(password_input.match(/[!,%,&,@,#,$,^,*,?,_,~]/)){
        texttype += 1;
        kigouflag = true;
    }

    //採点処理に移行
    if(pass_task=="A2")   password_check_A2(texttype,kigouflag);
    else                  password_check_X(texttype,kigouflag);

}

//未使用
function pass(){
    if(document.getElementById("password").value == document.getElementById("password-1").value && 
    document.getElementById("password").value.length>=8 && document.getElementById("password").value.length<30){

        if(texttype == 1){
            //1種類の文字数
            alert("1")
        }else if(texttype == 2){
            //2種類の文字数
            alert("2")
        }else if(texttype == 3){
            //3種類の文字数
            alert("3")
        }else if(texttype == 4){
            kigouflag +=1;
            // alert(kigouflag)
            alert("4")
        }
    }else{
        alert("パスワードを入力しなおしてください")
    }
}

//入力されたパスワードを採点(A-2用)
function password_check_A2(texttype,kigouflag){
    //パスワードをつける資料を間違える
    if(param.indexOf("projectXX") == -1)    A2_doc_mistake();    
    //使用文字が2種類以下
    A2_pass_type(texttype);
    //記号の使用
    if(texttype == 4 && kigouflag)  A2_pass_kigou(true);
    else if(kigouflag)              A2_pass_kigou(false);
}


//入力されたパスワードを採点（X用）
function password_check_X(texttype,kigouflag){
    //使用文字が2種類以下
    X_pass_type(texttype);
    //記号の使用
    if(texttype == 4 && kigouflag)  X_pass_kigou(true);
    else if(kigouflag)              X_pass_kigou(false);
}

// メール画面から「?mail」
// チャットの設定画面から「?chat」
// ファイル一覧画面から「?file」

//遷移元毎パスワード管理機能
let param = location.search;
let key = "";

let pswd = 0; //失敗のカウント
let texttype = 0;
let kigouflag = 0; //判定


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

}else if(~param.indexOf('?file')){
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

function setPass(){
    if(document.getElementById("password").value.length >= 8 && document.getElementById("password").value.length < 30){
        if(document.getElementById("password").value == document.getElementById("password-1").value){
            localStorage.setItem(key,document.getElementById("password").value);
            alert("パスワードを設定しました");
            history.back();
        }else{
            alert("パスワードが一致していません");
            pswd +=1;
            if(pswd>=3) {
                //3回以上失敗
                alert("3回以上失敗")
            }
        }
    }else{
        alert("無効なパスワードです")
    }
    
}

//パスワード強度判定
function text(){

    
    
        if(document.getElementById("password").value.match(/[a-z]/)){

            texttype += 1;

        }

        if(document.getElementById("password").value.match(/[A-Z]/)){

            texttype += 1;

        }

        if(document.getElementById("password").value.match(/[0-9]/)){

            texttype += 1;

        }

        if(document.getElementById("password").value.match(/[!,%,&,@,#,$,^,*,?,_,~]/)){

            texttype += 1;
        }
    
}

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

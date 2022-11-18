// メール画面から「?mail」
// チャットの設定画面から「?chat」
// ファイル一覧画面から「?file」

//遷移元毎パスワード管理機能
let param = location.search;
let key = "";

let pswd = 0; //失敗のカウント
let texttype = 0;
let kigouflag = 0; //判定

if(param == "?mail"){
    key = "p_mail";
}else if(param == "?chat"){
    key = "p_chat";
}else if(~param.indexOf('?file')){
	key = "p_file";
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

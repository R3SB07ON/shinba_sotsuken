window.onload = onLoad;

//メール識別

function onLoad(){
    let i = location.search.substring(1);
    if(i.indexOf("send") > -1){
        //送信済みのメールの場合
        document.getElementById("notsend").style.display = "none";
        let mail = localStorage.getItem(i).split("*");
        let file =["","",""];
        if(mail[5] != ""){
            file = mail[5].split("\\");
        }
        
        document.getElementById("to").innerText = "To:" + escape_ast_return(mail[0]);
        document.getElementById("title").innerText = "件名:" + escape_ast_return(mail[3]);
        document.getElementById("mail-text").innerHTML = escape_ast_return(mail[4]);
        document.getElementById("file").innerHTML = "添付ファイル:<a href='#' onclick='alert(0)'>" + file[2] + "</a>";
    }else{
        //受信トレイ、ゴミ箱のメールの場合
        document.getElementById("from").innerText = "From:" + from[i];
        document.getElementById("title").innerText = "件名:" + mailList[i][1];
        document.getElementById("mail-text").innerHTML = mail_text[i];
        if(file[i] != null){
            document.getElementById("file").innerHTML = "添付ファイル:<a href='#' onclick='attachement_file_click(" + i + ")'>" + file[i] + "</a>";
        }
    }
    
    
}

function re() {
    url = "./mcreate.html" + location.search;   
     window.location.href = url; 
}

//エスケープ解除(*)
function escape_ast_return(text){
    text = text.split("<esp_ast>");
    return text.join("*");
}

//添付ファイルをクリック
function attachement_file_click(i){
    //リンククリック記録
    localStorage.setItem("f_mfile",localStorage.getItem("f_mfile") + i + "+");
    //不正なリンクをクリック
    if(mailList[i][0] != 0){
        alert("ひっかかったな！");
        A_spam_link_click();
    }else{
        alert("OK");
    }
}
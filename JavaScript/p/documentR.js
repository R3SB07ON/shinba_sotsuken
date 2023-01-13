let url;
let param;

function move_W(){
    url = "./documentW.html" + location.search;
    //タスク対象以外の場合は戻る
    console.log(url.indexOf("10_Company"));
    if(url.indexOf("10_Company") == -1 && url.indexOf("ExchangeRate") == -1){
        alert("編集の権限がありません");
        return;
    }
    window.location.href = url;    
}

function move_pass() {
    url = './pedit.html' + location.search;
    window.open(url, '_blank');
}

window.onload = onLoad;
function onLoad(){
    //パスワード設定チェック
    if(localStorage.getItem("p_" + location.search.substring(1)) != null){
        
        let passalert = prompt("パスワードを入力してください","");
         if(passalert != localStorage.getItem("p_" + location.search.substring(1))){
            history.back();
        }
    } 

    url = new URL(window.location.href);
    params = url.searchParams;

    //資料名表示
    let elm = document.getElementById("filename");
    elm.innerHTML = params.get("file");

    //ファイル内容の表示
    let filename = "file_" + params.get("file");
    //タスク対象以外はdocument_dataから取得
    if(filename.indexOf("10_Company") == -1 && filename.indexOf("ExchangeRate") == -1){
        document.getElementById("textarea").innerHTML = file_text_list[file_name_list.indexOf(filename)];
        return;
    }
    
    document.getElementById("textarea").innerHTML = localStorage.getItem(filename);
}
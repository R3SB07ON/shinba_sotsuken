let url;
let param;

function move_W(){
    url = "./documentW.html" + location.search;   
    window.location.href = url;    
}

function move_pass() {
    url = './pedit.html' + location.search;
    window.location.href = url;    
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

    //保存内容の反映
    let filename = "file_" + params.get("file");
    document.getElementById("textarea").innerHTML = localStorage.getItem(filename);
}
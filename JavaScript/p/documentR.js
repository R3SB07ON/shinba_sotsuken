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
    url = new URL(window.location.href);
    params = url.searchParams;

    //資料名表示
    let elm = document.getElementById("filename");
    elm.innerHTML = params.get("file");

    //保存内容の反映
    let filename = "file_" + params.get("file");
    document.getElementById("textarea").innerHTML = localStorage.getItem(filename);
}